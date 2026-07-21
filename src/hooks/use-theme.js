import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);

    window.dispatchEvent(new Event("theme-change"));
  }, [theme]);

  useEffect(() => {
    const syncTheme = () => {
      setTheme(localStorage.getItem("theme") || "dark");
    };

    window.addEventListener("theme-change", syncTheme);

    return () => {
      window.removeEventListener("theme-change", syncTheme);
    };
  }, []);

  return {
    theme,
    toggle: () =>
      setTheme((t) => (t === "dark" ? "light" : "dark")),
  };
}