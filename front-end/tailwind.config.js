/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Suse", ...defaultTheme.fontFamily.sans],
        display: ["Lalezar", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        "nav-width": "var(--nav-width)",
        "mobile-nav-width": "var(--mobile-nav-width)",
      },
      backgroundImage: {
        peaks: "url('/peak_background.svg')",
      },
      colors: {
        primary: "#F95164",
        "primary-lo": "#181b49",
        secondary: "#FFCC00",
      },
      animation: {
        all: "all 0.5s ease",
      },
    },
  },
  plugins: [],
};
