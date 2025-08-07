import React from 'react';

interface HeroSectionProps {
  backgroundImageUrl: string;
  title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ backgroundImageUrl, title }) => {
  return (
    <div
      className="relative w-full h-96 bg-cover bg-center flex items-end"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Adjusted overlay to be a linear gradient for a smoother transition */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div> 
      {/* Title overlay at the bottom */}
      <div className="relative z-10 text-white p-8">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        {/* Placeholder for potentially adding a subtitle or other info here */}
        {/* <p className="text-lg">Subtitle goes here</p> */}
      </div>
    </div>
  );
};

export default HeroSection;
