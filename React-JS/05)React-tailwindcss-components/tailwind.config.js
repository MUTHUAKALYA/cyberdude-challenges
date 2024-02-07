/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        oswald : ['Oswald', 'sans-serif']
        
      },
      colors:{
        lavender:"#3B3C4F",
        pistachio:"#DBE4C9",
        coastline:"#DDEDEA",
        flour:"#F7F4EB"
      }
    },
  },
  plugins: [],
}