import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  /**
   * The hero section of the home page is inspired by the minimal,
   * dark‑themed hero on mem0.ai.  It features a gradient backdrop,
   * a succinct tagline, an impactful headline and two clear calls
   * to action.  The content here introduces Benjamin and invites
   * visitors to view his work or get in touch.
   */
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-slate-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28 lg:py-32 text-center">
        {/* Main heading shows Benjamin's name and designation without additional tagline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          Benjamin&nbsp;Mishra
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-200 mb-6">
          Senior Software Engineer&nbsp;|&nbsp;Backend&nbsp;|&nbsp;Distributed Systems
        </h2>
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 mb-10">
          I design and run reliable services that stay fast when lots of people use them.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
          <Link
            to="/projects"
            className="inline-block rounded-md bg-primary px-6 py-3 text-text-dark font-medium hover:bg-primary-dark transition-colors"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="inline-block rounded-md border border-gray-600 px-6 py-3 text-gray-200 font-medium hover:bg-gray-800 hover:border-gray-500 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
