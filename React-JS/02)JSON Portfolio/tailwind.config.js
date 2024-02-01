/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkPrimary: "#0E3746",
        darkSecondary:"#BE26223",
        lightPrimary:"#EAE8DC",
        lightSecondary:"#F4F2EC"
      }
    },
  },
  plugins: [],
}
