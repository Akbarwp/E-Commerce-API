/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3f51b5',
        'primary-light': '#757de8',
        'secondary': '#f44336',
        'secondary-light': '#ff7961'
      },
      fontFamily: {
        'zen': ['"Zen Kurenaido"']
      },
    },
  },
  plugins: [],
}
