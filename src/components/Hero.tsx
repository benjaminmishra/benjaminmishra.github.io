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
      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28 lg:py-32">
        {/*
          Align portrait and content side by side on larger screens.
          The entire content area is centered horizontally, so the headline,
          subtitle and calls to action appear balanced in the middle of the hero.
        */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-0">
          <img
            src="/benjamin.png"
            alt="Benjamin Mishra"
            className="w-50 h-50 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full mb-6 md:mb-0 object-cover"
          />
          <div className="flex-1 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 leading-tight">
              Benjamin&nbsp;Mishra
            </h1>
            {/* <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-200 mb-4">
              Senior Software Engineer
            </h2> */}
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-200 mb-4">
              Backend&nbsp;|&nbsp;Distributed&nbsp;Systems
            </h2>
            <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-300 mb-6">
              I architect and build reliable services that stay fast when lots of people use them.
            </p>
            {/* Calls to action are centered horizontally for a balanced look */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
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
      </div>
    </div>
  );
}
