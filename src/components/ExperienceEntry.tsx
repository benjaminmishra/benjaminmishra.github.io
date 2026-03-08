import React from "react";

interface Experience {
  company: string;
  title: string;
  duration: string;
  location?: string;
  description: string | string[];
  technologies?: string[];
}

interface ExperienceEntryProps {
  experience: Experience;
  summary: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function ExperienceEntry({
  experience,
  summary,
  isSelected,
  onClick,
}: ExperienceEntryProps) {
  return (
    <button
      type="button"
      className={`surface-card relative mb-5 w-full text-left transition duration-200 ${
        isSelected
          ? "border-sky-400/60 bg-sky-50/90 shadow-2xl shadow-sky-100/60 dark:bg-sky-500/10"
          : "hover:-translate-y-0.5"
      }`}
      onClick={onClick}
    >
      <div className="absolute left-0 top-10 h-[calc(100%-5rem)] w-px bg-slate-200 dark:bg-slate-800" />
      <div className="flex items-start gap-4">
        <span
          className={`mt-1 h-3.5 w-3.5 shrink-0 rounded-full border-4 ${
            isSelected
              ? "border-sky-200 bg-sky-500 dark:border-sky-500/20"
              : "border-slate-200 bg-slate-400 dark:border-slate-800 dark:bg-slate-500"
          }`}
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{experience.company}</h3>
              <p className="text-base font-semibold text-slate-700 dark:text-slate-200">{experience.title}</p>
              {experience.location && (
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{experience.location}</p>
              )}
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">{experience.duration}</p>
          </div>

          {isSelected ? (
            <div className="mt-4 space-y-4 text-slate-600 dark:text-slate-300">
              {Array.isArray(experience.description) ? (
                <ul className="list-disc space-y-2 pl-5">
                  {experience.description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="leading-7">{experience.description}</p>
              )}
              {experience.technologies && experience.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-700 dark:bg-sky-500/20 dark:text-sky-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <p className="mt-4 line-clamp-3 leading-7 text-slate-600 dark:text-slate-300">{summary}</p>
          )}
        </div>
      </div>
    </button>
  );
}
