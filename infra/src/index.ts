import * as pulumi from "@pulumi/pulumi";
import { getSiteConfig } from "./common/config";
import { deployCloudflare } from "./providers/cloudflare";

const site = getSiteConfig();

switch (site.provider) {
  case "cloudflare": {
    const outputs = deployCloudflare();
    pulumi.export("provider", pulumi.output(site.provider));
    pulumi.export("projectName", outputs.projectName);
    pulumi.export("pagesSubdomain", outputs.pagesSubdomain);
    pulumi.export("customDomains", pulumi.output(outputs.customDomains));
    pulumi.export("dnsRecordNames", pulumi.output(outputs.dnsRecordNames));
    pulumi.export("emailRoutingStatus", outputs.emailRoutingStatus);
    break;
  }
  case "aws":
  case "vercel":
  case "netlify":
    throw new Error(`Provider "${site.provider}" is not implemented yet. Add a provider adapter under infra/src/providers.`);
  default:
    throw new Error(`Unhandled provider "${String(site.provider)}".`);
}
