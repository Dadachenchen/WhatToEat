/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'gray': '#36393E',
      'red' : '#4F2F2F',
      'yellow' : '#BBB25D',
    },
    fontFamily: {
      mont: ['Montserrat Alternates', 'sans-serif'],
    },
    fontSize: {
      normal: '40px',
    },
    gridTemplateRows: {
      '8': 'repeat(8, minmax(0, 1fr))',
    }
  },
  plugins: [],
}
