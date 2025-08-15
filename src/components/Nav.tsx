import React from "react";
import { Link } from "react-router-dom";

// A simplified navigation component that renders plain text links with spacing.
export default function Nav(): JSX.Element {
  return (
    <nav aria-label="Main" className="font-FigTree text-sm w-full">
      {/*
        The navigation list uses `justify-end` to align menu items to the right
        within its container. Combined with the surrounding flex container in
        Header, this ensures the menu appears on the right side of the header
        while the name remains on the left.  */}
      <ul className="flex items-center space-x-6 justify-end">
        <li>
          <Link to="/" className="text-text-light dark:text-text-dark hover:text-primary">
            Home
          </Link>
        </li>
        <li>
          <Link to="/workex" className="text-text-light dark:text-text-dark hover:text-primary">
            Work Experience
          </Link>
        </li>
        <li>
          <Link to="/projects" className="text-text-light dark:text-text-dark hover:text-primary">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/blog" className="text-text-light dark:text-text-dark hover:text-primary">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-text-light dark:text-text-dark hover:text-primary">
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}
