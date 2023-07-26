const defaultTheme = require('tailwindcss/defaultTheme');

const plugin = require('tailwindcss/plugin');

const Flip = plugin(function ({ addUtilities }) {
  addUtilities({
    '.my-rotate-y-180': {
      transform: 'rotateY(180deg)'
    },
    '.preserve-3d': {
      transformStyle: 'preserve-3d'
    },
    '.perspective': {
      perspective: '1000px'
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden'
    }
  });
});

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        'color-primary': '#01051e',
        'color-primary-light': '#020726',
        'color-primary-dark': '#010417',
        'color-secondary': '#ff7d3b',
        'color-gray': '#333',
        'color-white': '#fff',
        'color-blob': '#A427DF'
      },
      screens: {
        sm: '480px'
      },
      container: {
        center: true
      }
    }
  },
  plugins: [Flip]
};
