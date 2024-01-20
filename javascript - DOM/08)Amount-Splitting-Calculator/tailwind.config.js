/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./about.html","./assets/js/main.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Bree: ['Bree Serif', 'serif']
      },
      colors:{
        darkPrimaryColor:'#314247',
        darkSecondaryColor:'#647973',
        lightPrimaryColor:'#CCA4A6',
        lightSecondaryColor:'#F7F7F7'
      }
     
    },
  },
  plugins: [],
}
