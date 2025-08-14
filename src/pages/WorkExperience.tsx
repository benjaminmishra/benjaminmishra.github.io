import React, { useState } from "react";
import Layout from "./Layout";
import ExperienceEntry from "../components/ExperienceEntry";
import LinkedInIcon from "../assets/linkedin.svg";
import GithubIcon from "../assets/github.svg";
import { workExperiences } from "./workExperiences";

export default function WorkExperience() {
  const [selectedExperience, setSelectedExperience] = useState<any>(null);

  const handleExperienceClick = (experience: any) => {
    setSelectedExperience(selectedExperience === experience ? null : experience);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">        
        <div className="mb-10 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/benjaminmishra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light dark:text-text-dark hover:text-primary flex items-center space-x-2"
            >
              <img src={LinkedInIcon} alt="LinkedIn" className="h-6 w-6 filter dark:invert" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com/benjaminmishra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light dark:text-text-dark hover:text-primary flex items-center space-x-2"
            >
              <img src={GithubIcon} alt="GitHub" className="h-6 w-6 filter dark:invert" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
        <div className="relative max-w-3xl mx-auto">
          {workExperiences.map((experience, index) => {
            let summary: string;
            if (Array.isArray(experience.description)) {
              summary = experience.description[0];
            } else {
              summary =  experience.description[0] + '…';
            }
            return (
              <ExperienceEntry
                key={experience.id}
                experience={experience}
                summary={summary}
                isSelected={selectedExperience === experience}
                onClick={() => handleExperienceClick(experience)}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
