/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkOrange: '#FF8F00',
        smokyBlack: '#120A00',
        cosmicLatte: '#FFF5E9',
      }
    },
    boxShadow: {
      'around': '0px 0px 10px -3px #202020'
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

