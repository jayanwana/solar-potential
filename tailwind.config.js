const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      blue: '#2F3970',
      light: '#44A8FD',
      orange: '#FC8A37',
    },
    fontFamily: {
      'sans': ['Sen', 'Helvetica', 'Arial', 'sans-serif'],
      'body': ['Sen', '"Helvetica Neue"', 'Regular'],
      'main': ['Montserrat']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
