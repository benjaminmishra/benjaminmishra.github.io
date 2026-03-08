import * as pulumi from "@pulumi/pulumi";
import { CloudflareConfig, HostingProvider, SiteConfig } from "./types";

function parseProvider(value: string): HostingProvider {
  const normalized = value.toLowerCase();
  if (normalized === "cloudflare" || normalized === "aws" || normalized === "vercel" || normalized === "netlify") {
    return normalized;
  }

  throw new Error(`Unsupported provider "${value}".`);
}

export function getSiteConfig(): SiteConfig {
  const config = new pulumi.Config("site");

  return {
    provider: parseProvider(config.require("provider")),
    siteName: config.get("siteName") || "personal-website",
    productionBranch: config.get("productionBranch") || "main",
    buildCommand: config.get("buildCommand") || "yarn build",
    buildOutputDir: config.get("buildOutputDir") || "build",
    rootDir: config.get("rootDir") || "/",
    primaryDomain: config.get("primaryDomain") || undefined,
    additionalDomains: config.getObject<string[]>("additionalDomains") || [],
    contactAddress: config.get("contactAddress") || undefined,
    mailForwardingDestination: config.get("mailForwardingDestination") || undefined,
  };
}

export function getCloudflareConfig(): CloudflareConfig {
  const config = new pulumi.Config("cloudflare");

  return {
    accountId: config.require("accountId"),
    zoneId: config.require("zoneId"),
    pagesProjectName: config.get("pagesProjectName") || "personal-website",
  };
}
