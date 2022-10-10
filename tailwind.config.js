/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'metalgreen': {
          100: '#e8f1f2',
          200: '#d1e4e5',
          300: '#bad7d8',
          400: '#a4c9cb',
          500: '#8dbcbe',
          600: '#76afb2',
          700: '#5fa1a4',
          800: '#499498',
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
