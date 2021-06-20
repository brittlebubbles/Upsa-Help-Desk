module.exports = {
  purge: {
    enable: true,
    content: [
      "./public/**/*.html",
      "./src/**/*.html",
      "./src/**/*.vue",
      "./src/**/*.jsx",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./helpers/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./layout/**/*.{js,ts,jsx,tsx}",
      "./helpers/**/*.{js,ts,jsx,tsx}",
      "./index.html",
    ],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
