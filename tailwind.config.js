/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "320px",
      mdsm: "375px",
      sm: "425px",
      search: "480px",
      md: "768px",
      topReveal: "990px",
      lg: "1024px",
      topTruck: "1200px",
      xl: "1440px",
    },
    extend: {},
  },

  plugins: [],
};
