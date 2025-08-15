import React from "react";
import Layout from "./Layout";
import GitHubProjects from "../components/GitHubProjects";

/**
 * Projects page
 *
 * This page displays Benjamin's public GitHub repositories in a dedicated
 * section. It simply wraps the GitHubProjects component in the
 * standard Layout to maintain consistent header/footer styling across
 * the site.
 */
export default function Projects() {
  return (
    <Layout>
      <GitHubProjects />
    </Layout>
  );
}