#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${AWS_S3_BUCKET:-}" ]]; then
  echo "AWS_S3_BUCKET is required."
  exit 1
fi

BUILD_DIR="${BUILD_DIR:-build}"

aws s3 sync "${BUILD_DIR}/" "s3://${AWS_S3_BUCKET}" --delete

if [[ -n "${AWS_CLOUDFRONT_DISTRIBUTION_ID:-}" ]]; then
  aws cloudfront create-invalidation \
    --distribution-id "${AWS_CLOUDFRONT_DISTRIBUTION_ID}" \
    --paths "/*"
fi
