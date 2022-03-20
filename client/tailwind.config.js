module.exports = {
  content: ['./src/**/*.{html,js}'],

  theme: {
    extend: {
      colors: {
        banditOrange: {
          50: '#FED6D5',
          100: '#FEAEAB',
          200: '#FD938F',
          300: '#FD7873',
          400: '#FC5D57',
          500: '#fc413b',
          600: '#FB170F',
          700: '#DB0B03',
          800: '#AF0803',
          900: '#830602',
        },
        banditYellow: {
          50: '#FEE9B9',
          100: '#FEE5AB',
          200: '#FDD881',
          300: '#FDCF65',
          400: '#FCC649',
          500: '#FCC23B',
          600: '#FCBB25',
          700: '#FBB50F',
          800: '#F1AA04',
          900: '#DB9A03',
        },
        banditGreen: {
          50: '#E6FFE3',
          100: '#D9FED5',
          200: '#B3FEAB',
          300: '#19DB03',
          400: '#16C503',
          500: '#14AF03',
          600: '#14AF03',
          700: '#119902',
          800: '#0F8302',
          900: '#0A5801',
        },
      },
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
        sans: ['Inter'],
        heading: ['Overpass'],
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
