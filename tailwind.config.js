/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      l1148: { max: "1148px" },

      m876: { max: "876px" },

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      smin: { min: "639px" },

      mdin: { min: "767px" },

      s400: { max: "400px" },
    },
  },

  plugins: [],
};
