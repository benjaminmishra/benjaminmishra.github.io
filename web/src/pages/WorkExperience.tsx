import React, { useState } from "react";
import Layout from "./Layout";
import ExperienceEntry from "../components/ExperienceEntry";

const workExperiences = [
  {
    company: "Tech Solutions Inc.",
    title: "Software Engineer",
    duration: "Jan 2020 - Present",
    description: "Responsible for the full stack development of critical web applications using modern frameworks. Collaborated with cross-functional teams to define, design, and ship new features. Implemented robust testing procedures to ensure high code quality and application stability. Actively participated in code reviews and mentored junior developers."
  },
  {
    company: "Innovate Systems",
    title: "Frontend Developer",
    duration: "Jun 2018 - Dec 2019",
    description: "Focused on building responsive and user-friendly interfaces for various client projects. Utilized React and related libraries to create dynamic user experiences. Worked closely with UI/UX designers to translate wireframes and mockups into functional web pages. Optimized frontend performance for faster loading times."
  },
  {
    company: "Data Insights Co.",
    title: "Intern",
    duration: "May 2017 - Aug 2017",
    description: "Assisted senior analysts in collecting, cleaning, and analyzing large datasets. Created visualizations and reports to present findings to stakeholders. Gained experience with data manipulation tools and statistical software. Contributed to the documentation of analysis processes."
  },
];

export default function WorkExperience() {
  const [selectedExperience, setSelectedExperience] = useState<any>(null);

  const handleExperienceClick = (experience: any) => {
    setSelectedExperience(selectedExperience === experience ? null : experience);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="relative">
          {workExperiences.map((experience, index) => (
            <ExperienceEntry
              key={index}
              experience={experience}
              summary={experience.description.substring(0, 100) + '...'}
              isSelected={selectedExperience === experience}
              onClick={() => handleExperienceClick(experience)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
