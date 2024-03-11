import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
      <nav
        className="lg:justify-middle relative flex items-center justify-between sm:h-10"
        aria-label="Global"
      >
        <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4 ">
          <Link to="/about">About</Link>
          <Link to="/workex">Work Expereince</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </nav>
    </div>
  );
}
