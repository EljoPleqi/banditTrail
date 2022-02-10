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
      },
      fontFamily: {
        sans: ['Overpass'],
      },
    },
    plugins: [require('@tailwindcss/line-clamp')],
  },
};
