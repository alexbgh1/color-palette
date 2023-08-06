/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.slate[50],
        primaryDark: colors.slate[950],

        accent: colors.sky[300],
        accentDark: colors.sky[500],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
