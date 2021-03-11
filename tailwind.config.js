module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        'primary':'#12122f',
        'secondary': '#191c44'
      },
      textColor: {
        'main': '#fefefe',
        'special': '#ebb44d',
        'priceDrop': '#ff7e82',
        'priceIncrease': '#40e094',
      },
      borderColor: {
        'primary':'#12122f',
        'secondary': '#191c44'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
