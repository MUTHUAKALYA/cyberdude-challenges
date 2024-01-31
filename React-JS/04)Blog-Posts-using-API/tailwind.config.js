/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Noir:"#153147",
        Navy:"#232A2F",
        Mist:"#ADBBBB",
        Almond:"#EDEAE4",
        Ivory:"#F9F8F7"
      }
    },
  },
  plugins: [],
}
