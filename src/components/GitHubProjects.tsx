import React, { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
}

/**
 * GitHubProjects
 *
 * Fetches a handful of Benjamin's public repositories from GitHub and
 * displays them in a responsive grid. This section sits beneath the
 * About/Stack cards on the home page. It does not alter the overall layout
 * or styling – cards reuse the same rounded containers and colours as
 * other sections. Repositories are fetched once on mount via the GitHub
 * REST API. The website repository itself is filtered out.
 */
export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    // Fetch the most recently updated repositories. Limit to a handful.
    fetch("https://api.github.com/users/benjaminmishra/repos?sort=updated&per_page=6")
      .then((res) => res.json())
      .then((data) => {
        // Filter out the personal website repository and any forks
        const filtered = data.filter((repo: Repo & { fork: boolean }) =>
          repo.name !== "benjaminmishra.github.io" && !repo.fork,
        );
        setRepos(filtered.slice(0, 3));
      })
      .catch((err) => {
        console.error("Failed to fetch GitHub repositories", err);
      });
  }, []);

  if (repos.length === 0) {
    return null;
  }

  return (
    <section className="px-6 py-20 bg-gray-50 dark:bg-background-dark">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">GitHub Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700"
            >
              <h3 className="text-xl font-semibold mb-2">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {repo.name}
                </a>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {repo.description || "No description provided."}
              </p>
              {repo.language && (
                <span className="inline-block bg-blue-500/10 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-medium">
                  {repo.language}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}