import React from "react";
import LinkedInIcon from "../assets/linkedin.svg";
import TwitterIcon from "../assets/twitter.svg";
import GithubIcon from "../assets/github.svg";

export default function Footer() {
  return (
    <footer className="bg-background-light dark:bg-background-dark font-FigTree py-6">
      <div className="px-4 flex items-center justify-between">
        <span className="text-sm text-text-light dark:text-text-dark">
          © {new Date().getFullYear()}{" "}
          <a href="https://flowbite.com/" className="hover:text-primary">Benjamin</a>. All Rights Reserved.
        </span>
        <div className="flex space-x-5">
          <a
            href="https://www.twitter.com/benjaminmishra"
            className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary"
          >
            <img src={TwitterIcon} alt="Twitter" className="filter dark:invert" />
            <span className="sr-only">Twitter page</span>
          </a>
          <a
            href="https://www.linkedin.com/in/benjaminmishra/"
            className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary"
          >
            <img src={LinkedInIcon} alt="LinkedIn" className="filter dark:invert" />
            <span className="sr-only">Linkedin account</span>
          </a>
          <a
            href="https://www.github.com/benjaminmishra/"
            className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary"
          >
            <img src={GithubIcon} alt="Github" className="filter dark:invert" />
            <span className="sr-only">Github account</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
