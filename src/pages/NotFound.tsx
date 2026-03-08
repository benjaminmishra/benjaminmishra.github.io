import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

export default function NotFound() {
  return (
    <Layout>
      <section className="section-shell">
        <div className="site-container">
          <div className="surface-card mx-auto max-w-2xl text-center">
            <span className="pill">404</span>
            <h1 className="mt-6 text-4xl font-extrabold text-slate-900 dark:text-white">Page not found</h1>
            <p className="mt-4 text-lg leading-7 text-slate-600 dark:text-slate-300">
              The page you requested does not exist or has moved.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
              >
                Go home
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-500/40 dark:hover:text-sky-200"
              >
                Browse articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
