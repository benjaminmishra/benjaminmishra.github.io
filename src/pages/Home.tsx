import React from "react";
import Hero from "../components/Hero";
import Layout from "./Layout";

const strengths = [
  "People leadership and mentoring",
  "Technical strategy and trade-off management",
  "Cross-team delivery and execution",
  "Architecture, SDLC, and DevOps alignment",
  "Quality, resilience, and reliability engineering",
  "Stakeholder communication and planning",
];

const stackGroups = [
  {
    title: "Backend",
    items: ["C#/.NET Core", "Golang", "Node.js/Express", "Python/FastAPI", "ASP.NET"],
  },
  {
    title: "Front End",
    items: ["TypeScript", "React", "HTML5", "CSS"],
  },
  {
    title: "Data and Storage",
    items: ["SQL Server", "PostgreSQL", "Redis", "ETCD"],
  },
  {
    title: "Real-time and Messaging",
    items: ["RabbitMQ", "gRPC", "RESTful APIs"],
  },
  {
    title: "Cloud and DevOps",
    items: ["Azure", "AKS", "App Service", "Key Vault", "Docker", "Kubernetes", "Terraform", "CI/CD Pipelines"],
  },
  {
    title: "Practices",
    items: ["Tracing and dashboards", "TDD", "Domain-Driven Design", "Agile/Scrum", "Code Reviews"],
  },
];

export default function Home() {
  return (
    <Layout>
      <Hero />
      <section className="section-shell">
        <div className="site-container">
          <div className="section-header">
            <span className="pill">About</span>
            <h2 className="section-title">About</h2>
            <p className="section-copy">
              Software engineer with 13+ years of experience across backend development, platform work,
              and technical leadership in gaming, energy, and enterprise domains.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="surface-card">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Core strengths</h3>
              <ul className="mt-6 space-y-4 text-left text-slate-700 dark:text-slate-300">
                {strengths.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="surface-card">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Technology stack</h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {stackGroups.map((group) => (
                  <div key={group.title} className="surface-card-muted p-5">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h4>
                    <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
