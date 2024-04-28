/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dynamicBlack : "#1D1D1D",
        sepiaRose: "#CCBAB5",
        eiderDown:"#EBE6DA",
        coconutMilk:"#F3F2EE"
      },
      fontFamily:{
        fredoka: ["Fredoka", "sans-serif"]
      }
    },
  },
  plugins: [],
}