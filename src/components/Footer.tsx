import React from "react";
import LinkedInIcon from "../assets/linkedin.svg";
import TwitterIcon from "../assets/twitter.svg";
import GithubIcon from "../assets/github.svg";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 py-8 dark:border-slate-800">
      <div className="site-container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-slate-600 dark:text-slate-300">
          © {new Date().getFullYear()} Benjamin Mishra. Built with React and deployed on Cloudflare.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.twitter.com/benjaminmishra"
            className="rounded-full border border-slate-200 bg-white p-2 transition hover:border-sky-300 hover:bg-sky-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-sky-500/40 dark:hover:bg-slate-800"
            aria-label="Twitter"
          >
            <img src={TwitterIcon} alt="" className="h-4 w-4 filter dark:invert" />
          </a>
          <a
            href="https://www.linkedin.com/in/benjaminmishra/"
            className="rounded-full border border-slate-200 bg-white p-2 transition hover:border-sky-300 hover:bg-sky-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-sky-500/40 dark:hover:bg-slate-800"
            aria-label="LinkedIn"
          >
            <img src={LinkedInIcon} alt="" className="h-4 w-4 filter dark:invert" />
          </a>
          <a
            href="https://www.github.com/benjaminmishra/"
            className="rounded-full border border-slate-200 bg-white p-2 transition hover:border-sky-300 hover:bg-sky-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-sky-500/40 dark:hover:bg-slate-800"
            aria-label="GitHub"
          >
            <img src={GithubIcon} alt="" className="h-4 w-4 filter dark:invert" />
          </a>
        </div>
      </div>
    </footer>
  );
}
