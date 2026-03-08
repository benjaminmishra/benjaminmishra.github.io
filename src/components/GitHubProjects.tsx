import React, { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  topics: string[];
}

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/benjaminmishra/repos?sort=updated&per_page=10")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (repo: Repo & { fork: boolean }) => !repo.fork && repo.topics.includes("portfolio-showcase"),
        );
        setRepos(filtered.slice(0, 10));
      })
      .catch((err) => {
        console.error("Failed to fetch GitHub repositories", err);
      });
  }, []);

  return (
    <section className="section-shell">
      <div className="site-container">
        <div className="section-header">
          <span className="pill">Projects</span>
          <h1 className="section-title">Selected builds from GitHub.</h1>
          <p className="section-copy">
            A short list of repos that best represent how I structure systems, APIs, and delivery.
          </p>
        </div>
        {repos.length === 0 ? (
          <div className="surface-card text-center text-slate-600 dark:text-slate-300">
            Projects are loading or currently unavailable.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {repos.map((repo) => (
              <article key={repo.id} className="surface-card flex h-full flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{repo.name}</h2>
                  {repo.language && (
                    <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-700 dark:bg-sky-500/20 dark:text-sky-200">
                      {repo.language}
                    </span>
                  )}
                </div>
                <p className="mt-4 flex-1 leading-7 text-slate-600 dark:text-slate-300">
                  {repo.description || "No description provided."}
                </p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-500/40 dark:hover:text-sky-200"
                >
                  View repository
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
