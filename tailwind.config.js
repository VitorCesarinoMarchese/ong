/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme:{
    colors:{
      'white': '#fbf8f3',
      'darkblue': '#091732',
      'lightblue': '#84D4F7',
      'black': '#101010',
      'blue': '#0079C1'
    }
  },
  plugins: [require('daisyui')],

};
