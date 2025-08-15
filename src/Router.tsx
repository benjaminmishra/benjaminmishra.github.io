import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import WorkExperience from "./pages/WorkExperience";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import BlogLanding from "./pages/BlogLanding";
import Article from "./pages/Article";
import Projects from "./pages/Projects";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/contact",
      element: <ContactMe />,
    },
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: "/workex",
      element: <WorkExperience />,
    },
    {
      path: "/projects",
      element: <Projects />, 
    },
    {
      path: "/blog",
      element: <BlogLanding />
    },
    {
      path: "/article/:slug",
      element: <Article />
    }
  ]);

  return <RouterProvider router={router} />;
}
