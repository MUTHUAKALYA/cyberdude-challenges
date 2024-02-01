/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkPrimary: "#3D3D60",
        darkSecondary:"#3E5058",
        lightPrimary:"#555358",
        lightSecondary:"#EFEDE4"
      }
    },
  },
  plugins: [],
}