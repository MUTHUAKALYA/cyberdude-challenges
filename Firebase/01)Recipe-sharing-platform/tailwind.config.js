/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'newsletter-image': "url('https://www.simplyrecipes.com/thmb/DJp2s4GDwu1W-ZZKAD_uyYQMzew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-A-A-guide-cooking-terms-11451db934b94e66852c335e5d240539.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}