/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkPrimary : "#314247",
        darkSecondary: "#647973",
        lightPrimary:"#CCA4A6",
        lightSecondary:"#F7F7F7"
      }
    },
  },
  plugins: [],
}