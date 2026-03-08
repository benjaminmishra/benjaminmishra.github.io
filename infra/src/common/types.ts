export type HostingProvider = "cloudflare" | "aws" | "vercel" | "netlify";

export interface SiteConfig {
  provider: HostingProvider;
  siteName: string;
  productionBranch: string;
  buildCommand: string;
  buildOutputDir: string;
  rootDir: string;
  primaryDomain?: string;
  additionalDomains: string[];
  contactAddress?: string;
  mailForwardingDestination?: string;
}

export interface CloudflareConfig {
  accountId: string;
  zoneId: string;
  pagesProjectName: string;
}
