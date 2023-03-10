/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "100%" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "100%" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        "weather-primary": "#00668A",
        "weather-secondary": "#004e71",
      },
    },
    fontFamily: {
      NotoJP: ["Noto Sans JP, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    prefix: "",
  },
};
