module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        products: '1fr 4fr',
        productFeatured: '3fr 1fr',
        threeTwo: '3fr 2fr',
        twoOne: '2fr 1fr',
      },
      fontFamily: {
        sans: ['Overpass'],
      },
    },
    plugins: [],
  },
};
