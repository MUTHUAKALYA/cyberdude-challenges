/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        custom:['Rubik', 'sans-serif']
      },
      colors:{
        darkPrimary: "#5A6A5D",
        darkSecondary:"#DBE5DC",
        neutral:"#DBD1C5",
        lightPrimary :"#C3A082",
        lightSecondary : "#E8C3B0"
       
      }
    },
  },
  plugins: [],
}