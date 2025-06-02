import React from "react";
import LinkedInIcon from "../assets/linkedin.svg";
import TwitterIcon from "../assets/twitter.svg";
import GithubIcon from "../assets/github.svg";

export default function Footer() {
  return ( // Added font-FigTree class
    <footer className="bg-white dark:bg-blue-900 font-FigTree py-6"> {/* Added font-FigTree class and py-6 for vertical padding */}
      <div className="px-4 flex items-center justify-between"> {/* Added px-4 for horizontal alignment, flex, items-center, justify-between */}
        <span className="text-sm text-gray-500 dark:text-gray-300"> {/* Removed sm:text-center */}
          © {new Date().getFullYear()}{" "}
          <a href="https://flowbite.com/">Benjamin</a>. All Rights Reserved.
        </span>
        <div className="flex space-x-5"> {/* Removed mt-4, sm:justify-center, md:mt-0, rtl:space-x-reverse */}
          <a
            href="https://www.twitter.com/benjaminmishra"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <img src={TwitterIcon} alt="Twitter"/>
            <span className="sr-only">Twitter page</span>
          </a>
          <a
            href="https://www.linkedin.com/in/benjaminmishra/"
            className="text-gray-400 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
          >
            <img src={LinkedInIcon} alt="LinkedIn"/>
            <span className="sr-only">Linkedin account</span>
          </a>
          <a
            href="https://www.github.com/benjaminmishra/"
            className="text-gray-400 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
          >
            <img src={GithubIcon} alt="Github"/>
            <span className="sr-only">Github account</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
