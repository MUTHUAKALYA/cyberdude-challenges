/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkPrimary:"#B5BFA1",
        darkSecondary:"#143109"
      },
      fontFamily:{
        oswald: ["Oswald", "sans-serif"]
      }
    },
  },
  plugins: [],
}