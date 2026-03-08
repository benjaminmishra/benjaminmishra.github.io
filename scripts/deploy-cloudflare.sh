#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
  echo "CLOUDFLARE_API_TOKEN is required."
  exit 1
fi

if [[ -z "${CLOUDFLARE_ACCOUNT_ID:-}" ]]; then
  echo "CLOUDFLARE_ACCOUNT_ID is required."
  exit 1
fi

if [[ -z "${CLOUDFLARE_PAGES_PROJECT:-}" ]]; then
  echo "CLOUDFLARE_PAGES_PROJECT is required."
  exit 1
fi

DEPLOY_BRANCH="${DEPLOY_BRANCH:-main}"
BUILD_DIR="${BUILD_DIR:-build}"

npx wrangler pages deploy "${BUILD_DIR}" \
  --project-name "${CLOUDFLARE_PAGES_PROJECT}" \
  --branch "${DEPLOY_BRANCH}"
