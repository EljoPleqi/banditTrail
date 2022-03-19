module.exports = {
  content: ['./src/**/*.{html,js}'],

  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        products: '1fr 4fr',
        threeOne: '3fr 1fr',
        threeTwo: '3fr 2fr',
        twoOne: '2fr 1fr',
        oneFour: '1fr 4fr',
        oneThree: '1fr 3fr',
        twoThree: '2fr 3fr',
        fourOne: '4fr 1fr',
      },
      dropShadow: {
        productPage: '0 -35px 35px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        sans: ['Overpass'],
      },
    },
    plugins: {},
  },
  variants: {
    extend: {
      backgroundColor: ['focus', 'active'],
      borderColor: ['focus-visible', 'first'],
      textColor: ['visited'],
    },
  },
};
