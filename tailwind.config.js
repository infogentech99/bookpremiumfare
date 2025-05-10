/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0052cc",
        accent: "#ffc107",
        heroBlue: "rgba(0,0,0,0.4)",
      }
    },
  },
  plugins: [],
};
