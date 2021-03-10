module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        'primary':'#121212',
        'secondary': '#242424'
      },
      textColor: {
        'main': '#fefefe',
        'special': '#2b3dc4',
        'priceDrop': '#db1212',
        'priceIncrease': '#19db12',
      },
      borderColor: {
        'primary': '#242424'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
