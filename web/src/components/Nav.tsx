import React from "react";
import { Link } from "react-router-dom";

export default function Nav(): JSX.Element {
  return (
    <div className="px-4 sm:px-6 lg:px-8 inline-block align-middle">
      <nav
        className="lg:justify-middle relative flex items-center justify-between sm:h-10 font-FigTree"
        aria-label="Global"
      >
        <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4 text-sm font-medium"> {/* Adjusted spacing and text style */}
          <Link to="/workex" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Work Expereince</Link> {/* Added hover effect and color */}
          <Link to="/blog" className="text-black hover:text-gray-900 transition-colors duration-200">Blog</Link> {/* Added hover effect and color */}
          <Link to="/contact" className="text-green-700 hover:text-gray-900 transition-colors duration-200">Contact Me</Link> {/* Added hover effect and color */}
        </div>
      </nav>
    </div>
  );
}
