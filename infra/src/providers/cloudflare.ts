import * as cloudflare from "@pulumi/cloudflare";
import * as pulumi from "@pulumi/pulumi";
import { getCloudflareConfig, getSiteConfig } from "../common/config";
import { validateCloudflareConfig, validateSiteConfig } from "../common/validate";

export function deployCloudflare() {
  const site = getSiteConfig();
  const cloudflareConfig = getCloudflareConfig();
  validateSiteConfig(site);
  validateCloudflareConfig(site, cloudflareConfig);

  const project = new cloudflare.PagesProject("site", {
    accountId: cloudflareConfig.accountId,
    name: cloudflareConfig.pagesProjectName,
    productionBranch: site.productionBranch,
    buildConfig: {
      buildCommand: site.buildCommand,
      destinationDir: site.buildOutputDir,
      rootDir: site.rootDir,
    },
  });

  const allDomains = [site.primaryDomain, ...site.additionalDomains].filter((value): value is string => Boolean(value));

  const domains = allDomains.map((domain) => {
    const sanitizedName = domain.replace(/\./g, "-");

    const pagesDomain = new cloudflare.PagesDomain(`domain-${sanitizedName}`, {
      accountId: cloudflareConfig.accountId,
      projectName: project.name,
      name: domain,
    });

    const recordName = domain === site.primaryDomain
      ? "@"
      : site.primaryDomain && domain.endsWith(`.${site.primaryDomain}`)
        ? domain.replace(`.${site.primaryDomain}`, "")
        : domain;

    const dnsRecord = new cloudflare.Record(`record-${sanitizedName}`, {
      zoneId: cloudflareConfig.zoneId,
      name: recordName,
      type: "CNAME",
      proxied: true,
      ttl: 1,
      content: project.subdomain,
      comment: "Managed by Pulumi for the personal website Pages project.",
    });

    return { domain, pagesDomain, dnsRecord };
  });

  let emailRouting: {
    destinationAddress: cloudflare.EmailRoutingAddress;
    settings: cloudflare.EmailRoutingSettings;
    dns: cloudflare.EmailRoutingDns;
    rule: cloudflare.EmailRoutingRule;
  } | undefined;

  if (site.contactAddress && site.mailForwardingDestination) {
    const destinationAddress = new cloudflare.EmailRoutingAddress("contact-destination", {
      accountId: cloudflareConfig.accountId,
      email: site.mailForwardingDestination,
    });

    const settings = new cloudflare.EmailRoutingSettings("email-routing", {
      zoneId: cloudflareConfig.zoneId,
    });

    const dns = new cloudflare.EmailRoutingDns("email-routing-dns", {
      zoneId: cloudflareConfig.zoneId,
      name: site.primaryDomain || "",
    }, { dependsOn: [settings] });

    const rule = new cloudflare.EmailRoutingRule("contact-forwarding-rule", {
      zoneId: cloudflareConfig.zoneId,
      name: `Forward ${site.contactAddress}`,
      enabled: true,
      priority: 0,
      actions: [
        {
          type: "forward",
          values: [site.mailForwardingDestination],
        },
      ],
      matchers: [
        {
          type: "literal",
          field: "to",
          value: site.contactAddress,
        },
      ],
    }, { dependsOn: [destinationAddress, settings, dns] });

    emailRouting = { destinationAddress, settings, dns, rule };
  }

  return {
    projectName: project.name,
    pagesSubdomain: project.subdomain,
    customDomains: domains.map((entry) => entry.pagesDomain.name),
    dnsRecordNames: domains.map((entry) => entry.dnsRecord.name),
    emailRoutingStatus: emailRouting?.settings.status || pulumi.output("disabled"),
  };
}
