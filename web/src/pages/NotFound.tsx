import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Layout from "./Layout";

export default function NotFound() {
  return (
    <Layout>
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50 font-FigTree">
      <h1 className="mb-4 text-4xl font-bold">404 - Not Found</h1>
      <p className="text-gray-600">
        Sorry, the page youre looking for doesnt exist.
      </p>
      {/*
      <div className="mt-6">
        <input
          type="text"
          placeholder="Search for content..."
          className="rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
      </div> */}

      <div className="mt-4 justify-between text-center">
        <p className="mb-3 text-gray-600">You might want to explore:</p>
        <Link to="/">Home</Link>
        <Link to="/workex">Work Expereince</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </div>
    </Layout>
  );
}
