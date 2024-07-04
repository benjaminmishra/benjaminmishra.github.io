import React from "react";
import { Link } from "react-router-dom";

export default function Nav(): JSX.Element {
  return (
    <div className="px-4 sm:px-6 lg:px-8 inline-block align-middle">
      <nav
        className="lg:justify-middle relative flex items-center justify-between sm:h-10 font-FigTree"
        aria-label="Global"
      >
        <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4 ">
          <Link to="/workex">Work Expereince</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </nav>
    </div>
  );
}
