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
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out forwards',
        'fadeOut': 'fadeOut 0.3s ease-in-out forwards',
        'scaleOp': 'scaleOp 0.3s ease-in-out forwards',
        'fastSpin': 'fastSpin 0.5s linear infinite'
      },
      boxShadow: {
        'around': '0px 0px 10px rgba(0, 0, 0, 0.3);',
        'orange': '0px 0px 30px rgba(255, 143, 0, 0.7)'
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

