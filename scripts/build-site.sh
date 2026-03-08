#!/usr/bin/env bash
set -euo pipefail

corepack enable
yarn install --immutable
yarn build
