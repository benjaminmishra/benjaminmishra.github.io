# Infrastructure

This directory is the provider-neutral infrastructure entry point for the website.

## Goals

- Keep the app itself static and portable.
- Keep GitHub Actions as the deployment entry point.
- Keep provider-specific logic behind adapters so hosting can be switched with minimal manual work.

## Current provider support

- `cloudflare`: implemented
- `aws`: placeholder
- `vercel`: placeholder
- `netlify`: placeholder

## Layout

- `src/common/` shared config and provider-neutral types
- `src/providers/` provider-specific adapters
- `src/index.ts` dispatches to the selected provider

## Cloudflare resources currently modelled

- Pages project
- Pages custom domains
- DNS records for the Pages hostname
- Email Routing settings
- Email Routing DNS helper resource
- Email forwarding destination address
- Email forwarding rule

## Important note

Cloudflare Email Routing destination addresses typically require verification at the destination mailbox. Pulumi can declare the destination and rule, but you may still need to complete the verification email once per new destination address.

## Example usage

Copy `Pulumi.example.yaml` into a real stack file such as `Pulumi.dev.yaml`, replace placeholder IDs, then run:

```bash
yarn --cwd infra install
cd infra
pulumi stack init dev
pulumi preview
pulumi up
```

Or use the helper script from the repo root:

```bash
./scripts/infra.sh preview cloudflare dev
./scripts/infra.sh up cloudflare dev
```
