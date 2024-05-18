// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'h450': {'raw': '(max-height: 450px)'},
      },
      width: {
        '85': '85%',
      },
      colors: {
        customBlue: '#e2f2ff',
        aboutPara: 'rgba(57, 57, 57, .9)',
        input: '#ededed',
      },
      letterSpacing: {
        wide: '1.35px',
        extrawide: '2.88px',
      },
      borderRadius: {
        '26.897px': '26.897px',
      },
      padding: {
        '4.034': '4.034px',
        '20.172': '20.172px',
      },
      animation: {
        slideAnimation: 'slideAnimation 12s linear infinite',
        newSolCardImageAnimation: 'newSolCardImageAnimation 5s ease-in-out infinite 1s',
      },
      keyframes: {
        slideAnimation: {
          '0%, 20%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
          '54%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '56%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '90%, to': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        newSolCardImageAnimation: {
          '0%': { opacity: '0' },
          '25%': { opacity: '1' },
          '50%': { opacity: '0' },
          '75%': { opacity: '0' },
          '100%': { opacity: '0' },
      },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
