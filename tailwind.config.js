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
        raptureBlue: '#79cbc7',
        policeBlue: '#2c6269',
        deepJungleGreen: '#004047',
        sacramento: '#012f34',
        darkGreen: '#002529'
      },
      backgroundImage: {
        'aboutImage7': "url('@/assets/images/svg/about-icon-7.svg')",
        'headerCircle': "url('@/assets/images/svg/header-circle.svg')",
        'headerCircle2': "url('@/assets/images/svg/header-circle-2.svg')",
        'iconQuotes': "url('@/assets/images/cards/icon-quotes.png')",
        'aboutIcon2': "url('@/assets/images/svg/about-icon-2.svg')",
        'aboutIcon3': "url('@/assets/images/svg/about-icon-3.svg')",
        'aboutIcon4': "url('@/assets/images/svg/about-icon-4.svg')",
        'aboutIcon6': "url('@/assets/images/svg/about-icon-6.svg')",
        'aboutIcon7': "url('@/assets/images/svg/about-icon-7.svg')",
        'aboutIconMini7': "url('@/assets/images/svg/about-icon-mini-7.svg')",
        'aboutIcon9': "url('@/assets/images/svg/about-icon-9.svg')",
      }
    },
    
  },
  plugins: [],
}

