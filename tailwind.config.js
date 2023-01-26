/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      "white-alt": "#F0F2F5",
      black: "#161513",
      "black-alt": "#1C1C22",
    },
    fontFamily: {
      poppins: ["'Poppins'", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
