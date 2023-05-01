/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Fraunces", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
