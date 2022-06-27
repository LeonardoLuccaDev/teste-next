/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1/10': '10%',
        '9/10': '90%',
      },
      colors: {
        'light-green': '#06e757',
        'super-ocean': '#055377',
        'dark-ocean': '#03405c'
      },
      fontFamily: {
        'body': ['Poppins', 'sans-serif'] 
      }
    },
  },
  plugins: [],
}
