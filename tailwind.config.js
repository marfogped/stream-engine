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
        loader: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 70s linear infinite",
        loader1: 'loader 675ms ease-in-out 0s infinite alternate',
        loader2: 'loader 675ms ease-in-out 75ms infinite alternate',
        loader3: 'loader 675ms ease-in-out 150ms infinite alternate',
        loader4: 'loader 675ms ease-in-out 225ms infinite alternate',
        loader5: 'loader 675ms ease-in-out 300ms infinite alternate',
        loader6: 'loader 675ms ease-in-out 375ms infinite alternate',
        loader7: 'loader 675ms ease-in-out 450ms infinite alternate',
        loader8: 'loader 675ms ease-in-out 525ms infinite alternate',
        loader9: 'loader 675ms ease-in-out 600ms infinite alternate',
      },
    },
  },
  plugins: [],
};
