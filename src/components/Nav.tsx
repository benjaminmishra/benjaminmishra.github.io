import React from "react";
import { Link } from "react-router-dom";

export default function Nav(): JSX.Element {
  return (
    <div className="px-2 sm:px-6 lg:px-8 flex-grow">
      <nav
        className="relative flex items-center justify-end h-10 font-FigTree"
        aria-label="Global"
      >
        <div className="flex md:items-center md:space-x-8 text-sm font-medium">
          <Link to="/" className="text-text-light dark:text-text-dark hover:text-primary flex items-center group">
            <svg 
              className="w-5 h-5 md:mr-1" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="hidden md:inline">Home</span>
          </Link>
          <Link to="/workex" className="text-text-light dark:text-text-dark hover:text-primary flex items-center group">
            <svg 
              className="w-5 h-5 md:mr-1" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            <span className="hidden md:inline">Work Experience</span>
          </Link>
          <Link to="/blog" className="text-text-light dark:text-text-dark hover:text-primary flex items-center group">
            <svg 
              className="w-5 h-5 md:mr-1" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
              <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
            </svg>
            <span className="hidden md:inline">Blog</span>
          </Link>
          <Link to="/contact" className="text-text-light dark:text-text-dark hover:text-primary flex items-center group">
            <svg 
              className="w-5 h-5 md:mr-1" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
            </svg>
            <span className="hidden md:inline">Contact Me</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
