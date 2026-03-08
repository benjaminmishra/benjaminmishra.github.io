import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Code, BookOpen, Mail } from "lucide-react";

export default function Nav() {
  const location = useLocation();
  const items = [
    { to: "/", label: "Home", icon: Home },
    { to: "/workex", label: "Work Experience", icon: Briefcase },
    { to: "/projects", label: "Projects", icon: Code },
    { to: "/blog", label: "Blog", icon: BookOpen },
    { to: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav aria-label="Main" className="w-full text-sm">
      <ul className="flex w-full items-center justify-between gap-1 sm:gap-2 md:justify-end">
        {items.map(({ to, label, icon: Icon }) => {
          const isActive = location.pathname === to || (to === "/blog" && location.pathname.startsWith("/article/"));

          return (
            <li key={to}>
              <Link
                to={to}
                className={`flex min-w-[3.5rem] flex-col items-center rounded-2xl px-3 py-2 transition md:min-w-0 md:flex-row md:gap-2 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10 dark:bg-sky-400 dark:text-slate-950"
                    : "text-slate-600 hover:bg-white/70 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900/70 dark:hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only md:not-sr-only">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
