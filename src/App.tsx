import React, { useEffect } from "react";
import Router from "./Router";

function App() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = (isDark: boolean) => {
      document.documentElement.classList.toggle("dark", isDark);
    };
    const handleChange = (event: MediaQueryListEvent) => applyTheme(event.matches);

    applyTheme(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="site-frame">
      <Router />
    </div>
  );
}

export default App;
