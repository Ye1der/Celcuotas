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
  },
  plugins: [],
}

