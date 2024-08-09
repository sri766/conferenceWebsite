/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./src/**/*.{html,js}",
    // "./node_modules/flowbite/**/*.js"
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'  
  ],
  theme: {
    fontFamily: {
      'textFont':[ 'Outfit', 'sans-serif'],
    },
    extend: {},
    colors: {
      
      // 'bgblue': '#eaf3fc',
      'footerblue': '#024f63',
      "buttonblue":"#406dff",
      'bgblue':"#f6f8fa",
      'errorRed':"#f14c4c",

      //new colors
      'textmain': '#6C0345',
      'texthover': '#A34343',
      'bgmain': '#F6F5F2',
      'footermain': '#8B322C',
      'infinity': '#F3F4F6'
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}


