#!/usr/bin/env bash
set -euo pipefail

PROVIDER="${1:-}"

if [[ -z "${PROVIDER}" ]]; then
  echo "Usage: ./scripts/deploy.sh <provider>"
  exit 1
fi

case "${PROVIDER}" in
  cloudflare)
    ./scripts/deploy-cloudflare.sh
    ;;
  aws)
    ./scripts/deploy-aws.sh
    ;;
  netlify)
    ./scripts/deploy-netlify.sh
    ;;
  vercel)
    echo "Provider '${PROVIDER}' is not implemented yet. Vercel needs a dedicated prebuilt deployment path."
    exit 1
    ;;
  *)
    echo "Unsupported provider '${PROVIDER}'."
    exit 1
    ;;
esac
