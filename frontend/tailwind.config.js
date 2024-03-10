/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      futura: ["Futura", "sans-serif"],
    },
    keyframes: {
      slideIn: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0)" },
      },
      slideOut: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(100%)" },
      },
    },
    animation: {
      "slide-in": "slideIn 0.3s ease-in-out",
      "slide-out": "slideOut 0.5s ease-in-out",
    },
  },
  plugins: [],
};
