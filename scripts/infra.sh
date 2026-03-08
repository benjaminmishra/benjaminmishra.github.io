#!/usr/bin/env bash
set -euo pipefail

COMMAND="${1:-}"
PROVIDER="${2:-}"
STACK="${3:-}"

if [[ -z "${COMMAND}" || -z "${PROVIDER}" || -z "${STACK}" ]]; then
  echo "Usage: ./scripts/infra.sh <preview|up> <provider> <stack>"
  exit 1
fi

if [[ "${COMMAND}" != "preview" && "${COMMAND}" != "up" ]]; then
  echo "Unsupported command '${COMMAND}'. Use preview or up."
  exit 1
fi

corepack enable
yarn --cwd infra install --immutable

pushd infra >/dev/null

if [[ -n "${PULUMI_BACKEND_URL:-}" ]]; then
  npx pulumi login "${PULUMI_BACKEND_URL}"
fi

npx pulumi stack select "${STACK}" --create
npx pulumi config set "site:provider" "${PROVIDER}"

if [[ "${COMMAND}" == "preview" ]]; then
  npx pulumi preview
else
  npx pulumi up --yes
fi

popd >/dev/null
