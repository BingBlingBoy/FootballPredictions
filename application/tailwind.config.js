/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    './src/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
      fontFamily: {

      },
      colors: {
          primary: '#FFD900',
          secondary: '#81A8F6',
          white: '#FFFFFF',
          accent: '#B553F2',
          black: '#000000',
          gray:  '#E5DEDD'

      },

  },
  plugins: [],
};