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
      },
    },
  },
  plugins: [],
};
