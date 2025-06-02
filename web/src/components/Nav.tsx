import React from "react";
import { Link } from "react-router-dom";

export default function Nav(): JSX.Element {
  return (
    <div className="px-4 sm:px-6 lg:px-8 inline-block align-middle">
      <nav
        className="lg:justify-middle relative flex items-center justify-between sm:h-10 font-FigTree"
        aria-label="Global"
      >
        <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4 text-sm font-medium">
          <Link to="/workex" className="text-black hover:text-black">Work Expereince</Link>
          <Link to="/blog" className="text-black hover:text-black">Blog</Link>
          <Link to="/contact" className="text-black hover:text-black">Contact Me</Link>
        </div>
      </nav>
    </div>
  );
}
