import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-slate-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Two columns: fixed avatar (left) + flexible content (right) */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
          {/* LEFT: Avatar (fixed width, never shrinks) */}
          <div className="shrink-0">
            <div className="w-40 h-50 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full overflow-hidden ring-1 ring-white/10 shadow-xl">
              <img
                src="/benjamin.png"
                alt="Portrait of Benjamin Mishra"
                className="w-90 h-90 object-cover object-[50%_47%]"
              />
            </div>
          </div>

          {/* RIGHT: One container controls the right edge for everything */}
          <div className="flex-1">
            <div className="ml-auto max-w-[700px] text-center md:text-center">
              {/* Kicker */}
              <div className="hidden md:flex justify-center items-center gap-2 text-sm text-gray-200/80">
                <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray-200/80">
                  Backend Engineering • Distributed Systems • Architecture
                </span>
              </div>

              {/* Name */}
              <h1 className="mt-3 md:mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                Hi, I am Benjamin
              </h1>

              {/* Value prop */}
              <p className="mx-auto md:ml-auto max-w-[57ch] text-gray-300 text-sm sm:text-base md:text-lg mt-4">
                I build fault-tolerant systems with predictable tail latency,
                clean observability, and low-drama operations at scale.
              </p>


              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-center">
                <Link
                  to="/projects"
                  className="inline-block rounded-md bg-primary px-6 py-3 text-text-dark font-medium hover:bg-primary/90 transition-colors"
                >
                  View My Work
                </Link>
                <Link
                  to="/contact"
                  className="inline-block rounded-md border border-white/15 px-6 py-3 text-gray-200 font-medium hover:bg-white/5 transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
