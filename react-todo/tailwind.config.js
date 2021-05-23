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
      lightVeryLightGray: 'hsl(0, 0%, 98%)',
      lightVeryLightGrayishBlue: 'hsl(236, 33%, 92%)',
      lightLightGrayishBlue: 'hsl(233, 11%, 84%)',
      lightDarkGrayishBlue: 'hsl(236, 9%, 61%)',
      lightVeryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
      darkVeryDarkBlue: 'hsl(235, 21%, 11%)',
      darkVeryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
      darkLightGrayishBlue: 'hsl(234, 39%, 85%)',
      darkLightGrayishBluehover: 'hsl(236, 33%, 92%)',
      darkDarkGrayishBlue: 'hsl(234, 11%, 52%)',
      darkVeryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
