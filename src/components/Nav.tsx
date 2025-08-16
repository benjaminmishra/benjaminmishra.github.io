import React from "react";
import { Link } from "react-router-dom";
import { Home, Briefcase, Code, BookOpen, Mail } from "lucide-react";

// Responsive navigation with icon-only links on small screens and text labels on larger screens
export default function Nav(): JSX.Element {
  return (
    <nav aria-label="Main" className="font-FigTree text-sm w-full">
      <ul className="flex flex-row items-center justify-between md:justify-end space-x-0 md:space-x-6 w-full">
        <li>
          <Link
            to="/"
            className="flex flex-col md:flex-row items-center text-text-light dark:text-text-dark hover:text-primary"
          >
            <Home className="w-5 h-5" />
            <span className="sr-only md:not-sr-only md:ml-1 md:inline">Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/workex"
            className="flex flex-col md:flex-row items-center text-text-light dark:text-text-dark hover:text-primary"
          >
            <Briefcase className="w-5 h-5" />
            <span className="sr-only md:not-sr-only md:ml-1 md:inline">Work Experience</span>
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="flex flex-col md:flex-row items-center text-text-light dark:text-text-dark hover:text-primary"
          >
            <Code className="w-5 h-5" />
            <span className="sr-only md:not-sr-only md:ml-1 md:inline">Projects</span>
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className="flex flex-col md:flex-row items-center text-text-light dark:text-text-dark hover:text-primary"
          >
            <BookOpen className="w-5 h-5" />
            <span className="sr-only md:not-sr-only md:ml-1 md:inline">Blog</span>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="flex flex-col md:flex-row items-center text-text-light dark:text-text-dark hover:text-primary"
          >
            <Mail className="w-5 h-5" />
            <span className="sr-only md:not-sr-only md:ml-1 md:inline">Contact Me</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
