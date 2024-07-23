/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "480px" },
        sm: { min: "481px" },
        md: { min: "768px" },
        lg: { min: "992px" },
        xl: { min: "1200px" },
        xxl: { min: "1920px" },
      },
      colors: {
        primary: "#F8F603",
        secondary: "#0091DA",
        black: "#0A0A0A",
        gray: {
          300: "#DCDCDC",
          700: "#4F4F4F",
        },
        white: "#f6f6f6",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 70s linear infinite",
      },
    },
  },
  plugins: [],
};
