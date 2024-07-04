import React from "react";
import LinkedInIcon from "../assets/linkedin.svg";
import FacebookIcon from "../assets/facebook.svg";
import TwitterIcon from "../assets/twitter.svg";
import GithubIcon from "../assets/github.svg";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 font-FigTree">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="bg-gray-100 px-4 py-6 md:flex md:max-w-full md:items-center md:justify-between dark:bg-gray-700">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-300">
            © {new Date().getFullYear()}{" "}
            <a href="https://flowbite.com/">Benjamin</a>. All Rights Reserved.
          </span>
          <div className="mt-4 flex space-x-5 sm:justify-center md:mt-0 rtl:space-x-reverse">
            <a
              href="https://www.facebook.com#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <img src={FacebookIcon} alt="Facebook.com"/>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://www,discord.com"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a
              href="https://www.twitter.com/benjaminmishra"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <img src={TwitterIcon} alt="Twitter"/>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="https://www.github.com/benjaminmishra"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <img src={GithubIcon} alt="Github"/>
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="https://www.linkedin.com/in/benjaminmishra/"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <img src={LinkedInIcon} alt="LinkedIn"/>
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
