module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize:{
        '16xl': '16rem'
      }
  
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
