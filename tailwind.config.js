/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
    colors: {
      'blue': '#1094AB',
      'blue-light': '#00C6D4',
      'yellow': '#FFB500',
      'black': '#030619',
      'white': '#FFFFFF',

    },
    backgroundPosition: {
      bottom: 'bottom',
      bottomcenter: 'center bottom -2rem',
      center: 'center',
    },
    extend: {
      rotate180: {
        transform: 'rotate(180deg)',
      },
      rotate0: {
        transform: 'rotate(0)',
      },
    },
  },
  plugins: [],
}