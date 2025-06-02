import React, { useEffect } from "react";
import "./App.css";
import Router from "./Router";

function App() {
  useEffect(() => {
    // Check user's system preference for dark mode
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }

    // Listen for changes in system dark mode preference
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      });
  }, []);

  return (
    <div className="App min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <Router />
    </div>
  );
}

export default App;
