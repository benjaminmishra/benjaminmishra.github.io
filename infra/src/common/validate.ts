import { CloudflareConfig, SiteConfig } from "./types";

export function validateSiteConfig(config: SiteConfig) {
  if (config.additionalDomains.includes(config.primaryDomain || "")) {
    throw new Error("Do not repeat the primary domain inside additionalDomains.");
  }

  if ((config.contactAddress && !config.mailForwardingDestination) || (!config.contactAddress && config.mailForwardingDestination)) {
    throw new Error("contactAddress and mailForwardingDestination must either both be set or both be omitted.");
  }
}

export function validateCloudflareConfig(site: SiteConfig, cloudflare: CloudflareConfig) {
  if (!cloudflare.accountId.trim()) {
    throw new Error("cloudflare:accountId is required.");
  }

  if (!cloudflare.zoneId.trim()) {
    throw new Error("cloudflare:zoneId is required.");
  }

  if (site.contactAddress && !site.primaryDomain) {
    throw new Error("site:primaryDomain is required when email routing is configured.");
  }

  if (site.contactAddress && !site.contactAddress.endsWith(`@${site.primaryDomain}`)) {
    throw new Error("site:contactAddress must belong to the primaryDomain for Cloudflare Email Routing.");
  }
}
