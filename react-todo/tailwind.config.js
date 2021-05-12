const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    letterSpacing: {
      widest: '0.5em'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      checkFrom: 'hsl(192, 100%, 67%)',
      checkTo: 'hsl(280, 87%, 65%)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
