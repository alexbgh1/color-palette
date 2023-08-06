"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { ThemeIconMoon, ThemeIconSun, ThemeIconSkeleton } from "./ThemeIcon";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // Content is loaded? No? Then show a skeleton
  if (!mounted)
    return (
      <button
        className="border border-gray-800 dark:border-gray-100 rounded-md w-12 h-12 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        disabled
      >
        <span className="sr-only">Toggle mode</span>
        <ThemeIconSkeleton />
      </button>
    );

  // Content is loaded? Yes? Then show the button
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="border border-gray-800 dark:border-gray-100  rounded-md w-12 h-12 flex items-center justify-center"
    >
      <span className="sr-only">Toggle mode</span>
      {resolvedTheme !== "dark" ? <ThemeIconMoon /> : <ThemeIconSun />}
    </button>
  );
};

export default ThemeSwitcher;
