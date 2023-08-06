"use client";
import { ThemeProvider } from "next-themes";

export default function ThemeProv({ children, ...props }) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
