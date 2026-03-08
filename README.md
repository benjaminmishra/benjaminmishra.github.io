# Personal Website

This repository contains the source for [benjaminmishra.dev](https://benjaminmishra.dev). The site is built with React, TypeScript, Vite, and Tailwind CSS.

## Architecture

The repo is structured to keep hosting portable:

- the website itself is a static build in `build/`
- deployment entry points live in `scripts/`
- infrastructure code lives in `infra/`
- GitHub Actions is the intended deployment orchestrator
- provider-specific logic sits behind adapters instead of leaking into the app

Cloudflare is the first implemented provider, but the structure is intended to support adding another host with minimal application changes.

## Local development

Prerequisites:

- Node.js 20+
- Yarn 4 via `corepack enable`

Install dependencies:

```bash
yarn install
```

Run the dev server:

```bash
yarn start
```

Build the site:

```bash
yarn build
```

## Contact flow

The contact page now uses `mailto:` and opens the visitor's default email client addressed to `contact@benjaminmishra.dev`.

If you use Cloudflare Email Routing, that mailbox can forward to another destination such as `benjaminmishra@gmail.com`. That forwarding is now expected to be managed at the infrastructure/provider layer rather than through an app-side mail function.

## Deployment

The intended deployment shape is:

1. GitHub Actions builds the site.
2. An optional Pulumi step updates infrastructure.
3. A provider-specific deploy script publishes the static build.

Current scripts:

- `./scripts/build-site.sh`
- `./scripts/deploy.sh <provider>`
- `./scripts/deploy-cloudflare.sh`
- `./scripts/deploy-aws.sh`
- `./scripts/deploy-netlify.sh`
- `./scripts/infra.sh <preview|up> <provider> <stack>`

Current workflow:

- `.github/workflows/deploy.yml`

## Pulumi

Pulumi lives under `infra/`.

Current support:

- `cloudflare`: implemented
- `aws`: deploy script implemented, Pulumi adapter pending
- `netlify`: deploy script implemented, Pulumi adapter pending
- `vercel`: placeholder

Start with:

```bash
cp infra/Pulumi.example.yaml infra/Pulumi.dev.yaml
./scripts/infra.sh preview cloudflare dev
```

## GitHub Actions secrets

For Cloudflare site deployment:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_PAGES_PROJECT`

For Netlify deployment:

- `NETLIFY_AUTH_TOKEN`
- `NETLIFY_SITE_ID`

For AWS static hosting deployment:

- `AWS_S3_BUCKET`
- optionally `AWS_CLOUDFRONT_DISTRIBUTION_ID`

For optional Pulumi execution:

- `PULUMI_BACKEND_URL`
- `PULUMI_ACCESS_TOKEN` if your backend requires it
- `PULUMI_CONFIG_PASSPHRASE` if you use the passphrase secrets provider

## Notes

- The Cloudflare deploy path uses direct upload via Wrangler rather than Cloudflare's dashboard Git integration.
- That makes it easier to switch hosting providers later without changing how builds are produced.
- The GitHub Actions workflow now builds once, stores the static artifact, and deploys that artifact through the selected provider adapter.
- Email Routing destination verification may still require a one-time manual confirmation email.
