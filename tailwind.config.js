/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme:{
    colors:{
      'test': '#fbf8f3'
    }
  },
  plugins: [require('daisyui')],

};
