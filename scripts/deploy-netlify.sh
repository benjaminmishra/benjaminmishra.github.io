#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${NETLIFY_AUTH_TOKEN:-}" ]]; then
  echo "NETLIFY_AUTH_TOKEN is required."
  exit 1
fi

if [[ -z "${NETLIFY_SITE_ID:-}" ]]; then
  echo "NETLIFY_SITE_ID is required."
  exit 1
fi

BUILD_DIR="${BUILD_DIR:-build}"

npx netlify-cli deploy \
  --dir "${BUILD_DIR}" \
  --prod \
  --site "${NETLIFY_SITE_ID}" \
  --auth "${NETLIFY_AUTH_TOKEN}"
