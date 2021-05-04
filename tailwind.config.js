const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blue: '#2F3970',
      light: '#44A8FD',
      orange: '#FC8A37',
      green: '#65A346',
      white: '#fff',
      black: '#000',
      gray: colors.gray,
      indigo: colors.indigo,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
