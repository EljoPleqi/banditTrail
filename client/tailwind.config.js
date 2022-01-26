module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        products: '1fr 4fr',
      },
    },
    plugins: [],
  },
};
