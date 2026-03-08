import React, { useState } from "react";
import Layout from "./Layout";
import ExperienceEntry from "../components/ExperienceEntry";
import LinkedInIcon from "../assets/linkedin.svg";
import GithubIcon from "../assets/github.svg";
import { workExperiences } from "./workExperiences";

export default function WorkExperience() {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(workExperiences[0]?.id ?? null);

  return (
    <Layout>
      <section className="section-shell">
        <div className="site-container">
          <div className="section-header">
            <span className="pill">Experience</span>
            <h1 className="section-title">Professional experience.</h1>
            <p className="section-copy">
              Roles across gaming, energy, and enterprise software, with most of the work centered on
              backend systems, platform reliability, and delivery.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/benjaminmishra"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-200 bg-white p-3 transition hover:border-sky-300 hover:bg-sky-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-sky-500/40 dark:hover:bg-slate-800"
                aria-label="LinkedIn"
              >
                <img src={LinkedInIcon} alt="" className="h-5 w-5 filter dark:invert" />
              </a>
              <a
                href="https://github.com/benjaminmishra"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-200 bg-white p-3 transition hover:border-sky-300 hover:bg-sky-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-sky-500/40 dark:hover:bg-slate-800"
                aria-label="GitHub"
              >
                <img src={GithubIcon} alt="" className="h-5 w-5 filter dark:invert" />
              </a>
            </div>
          </div>
          <div className="mx-auto max-w-4xl">
            {workExperiences.map((experience) => {
              const summary = experience.description[0] ?? "";

              return (
                <ExperienceEntry
                  key={experience.id}
                  experience={experience}
                  summary={summary}
                  isSelected={selectedExperience === experience.id}
                  onClick={() =>
                    setSelectedExperience((current) => (current === experience.id ? null : experience.id))
                  }
                />
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
