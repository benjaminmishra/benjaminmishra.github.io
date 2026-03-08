import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="section-shell relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.28),_transparent_28%),linear-gradient(135deg,_rgba(15,23,42,0.96)_0%,_rgba(12,74,110,0.92)_55%,_rgba(2,6,23,0.98)_100%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.24),_transparent_28%),linear-gradient(135deg,_rgba(2,6,23,0.98)_0%,_rgba(3,37,65,0.94)_55%,_rgba(2,6,23,1)_100%)]" />
      <div className="site-container">
        <div className="surface-card relative overflow-hidden border-white/10 bg-slate-950/80 px-6 py-10 text-white shadow-2xl shadow-slate-900/25 sm:px-8 lg:px-10 lg:py-14 dark:border-slate-800">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-12">
            <div className="shrink-0">
              <div className="h-40 w-40 overflow-hidden rounded-full ring-4 ring-white/10 shadow-xl sm:h-48 sm:w-48 md:h-72 md:w-72">
                <img
                  src="/benjamin.png"
                  alt="Portrait of Benjamin Mishra"
                  className="h-full w-full object-cover object-[50%_47%]"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="mx-auto max-w-3xl text-center md:text-left">
                <span className="pill border-white/15 bg-white/5 text-sky-100 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-100">
                  Backend Engineering • Distributed Systems • Architecture
                </span>
                <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
                  Backend engineer working on reliable systems and platform delivery.
                </h1>
                <p className="mx-auto mt-5 max-w-[60ch] text-sm leading-7 text-slate-300 sm:text-base md:mx-0 md:text-lg">
                  I work across backend services, distributed systems, and delivery workflows, with
                  experience in gaming, energy, and enterprise software.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                  >
                    View My Work
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/5"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
