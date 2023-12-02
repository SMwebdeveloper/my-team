/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#014e56',
        primaryLight: '#f67e7e',
        white: '#fff',
        raptureBlue: '#79cbc7',
        policeBlue: '#2c6269',
        deepJungleGreen: '#004047',
        sacramento: '#012f34',
        darkGreen: '#002529'
      }
    },
    
  },
  plugins: [],
}

