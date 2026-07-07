/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  corePlugins: { preflight: true },
  theme: {
    extend: {
      colors: {
        "variable-collection-black": "var(--variable-collection-black)",
        "variable-collection-black-stroke":
          "var(--variable-collection-black-stroke)",
        "variable-collection-blue": "var(--variable-collection-blue)",
        "variable-collection-bone": "var(--variable-collection-bone)",
        "variable-collection-burnt-sun": "var(--variable-collection-burnt-sun)",
        "variable-collection-deep-green":
          "var(--variable-collection-deep-green)",
        "variable-collection-lemon-light":
          "var(--variable-collection-lemon-light)",
        "variable-collection-orange-frenzy":
          "var(--variable-collection-orange-frenzy)",
        "variable-collection-white": "var(--variable-collection-white)",
        "variable-collection-white-stroke":
          "var(--variable-collection-white-stroke)",
      },
    },
  },
  plugins: [],
};
