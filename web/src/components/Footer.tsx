import React from "react";
import LinkedInIcon from "../assets/linkedin.svg";
import TwitterIcon from "../assets/twitter.svg";
import GithubIcon from "../assets/github.svg";

export default function Footer() {
  return (
    <footer className="bg-white font-FigTree py-6">
      <div className="px-4 flex items-center justify-between">
        <span className="text-sm text-black">
          © {new Date().getFullYear()}{" "}
          <a href="https://flowbite.com/">Benjamin</a>. All Rights Reserved.
        </span>
        <div className="flex space-x-5">
          <a
            href="https://www.twitter.com/benjaminmishra"
            className="text-black hover:text-gray-700"
          >
            <img src={TwitterIcon} alt="Twitter"/>
            <span className="sr-only">Twitter page</span>
          </a>
          <a
            href="https://www.linkedin.com/in/benjaminmishra/"
            className="text-black hover:text-gray-700"
          >
            <img src={LinkedInIcon} alt="LinkedIn"/>
            <span className="sr-only">Linkedin account</span>
          </a>
          <a
            href="https://www.github.com/benjaminmishra/"
            className="text-black hover:text-gray-700"
          >
            <img src={GithubIcon} alt="Github"/>
            <span className="sr-only">Github account</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
