import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import WorkExperience from "./pages/WorkExperience";

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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
