import React from "react";
import { Moon, SunMedium } from "lucide-react";
import Nav from "./Nav";
import Banner from "./Banner";

export default function Header() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      <Banner />
      <div className="border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70">
        <div className="site-container flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
                Benjamin Moloise Mishra
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Staff engineer focused on resilient platforms and delivery.
              </p>
            </div>
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white md:hidden"
              aria-label="Toggle dark mode"
            >
              <SunMedium className="hidden h-5 w-5 dark:block" />
              <Moon className="h-5 w-5 dark:hidden" />
            </button>
          </div>
          <div className="w-full md:flex-1 md:pl-10">
            <Nav />
          </div>
          <button
            onClick={toggleTheme}
            className="hidden items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white md:inline-flex"
            aria-label="Toggle dark mode"
          >
            <SunMedium className="hidden h-5 w-5 dark:block" />
            <Moon className="h-5 w-5 dark:hidden" />
          </button>
        </div>
      </div>
    </header>
  );
}
