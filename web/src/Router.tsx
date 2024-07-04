import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import WorkExperience from "./pages/WorkExperience";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import BlogLanding from "./pages/BlogLanding";

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
      path: "/blog",
      element : <BlogLanding/>
    }
  ]);

  return <RouterProvider router={router} />;
}
