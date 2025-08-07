import React from 'react';

interface Experience {
  company: string;
  title: string;
  duration: string;
  description: string;
}

interface ExperienceEntryProps {
  experience: Experience;
  summary: string;
  isSelected: boolean;
  onClick: () => void; // eslint-disable-line @typescript-eslint/no-redundant-type-constituents
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({ experience, summary, isSelected, onClick }) => {
  return (
    <div
      className={`relative border-l-2 border-blue-500 pl-8 cursor-pointer pr-4 mb-4 transition-all duration-300 overflow-hidden ${isSelected
          ? 'border-blue-700 bg-blue-100 dark:bg-blue-900 bg-opacity-75 dark:bg-opacity-25 scale-105 shadow-lg pb-12 min-h-[300px]'
          : 'border-blue-500 bg-background-light dark:bg-background-dark pb-4 min-h-[150px]'
        }`}
      onClick={onClick}
    >
      <div className={`absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0 transition-colors duration-200 ${isSelected ? 'bg-blue-700' : 'bg-blue-500'}`}></div>
      <h3 className="text-xl font-bold text-text-light dark:text-text-dark">{experience.company}</h3>
      <p className="text-lg font-semibold text-text-light dark:text-text-dark opacity-90">{experience.title}</p>
      <p className="text-sm text-text-light dark:text-text-dark opacity-75">{experience.duration}</p>

      {isSelected && (
        <div className="mt-2 text-text-light dark:text-text-dark opacity-90 overflow-auto">
          <p className="mt-2 text-text-light dark:text-text-dark opacity-90">{experience.description}</p>
        </div>
      )}
      {!isSelected && (
        <>
          <p className="mt-2 text-gray-700">{summary}</p>
        </>
      )}
    </div>
  );
};

export default ExperienceEntry;