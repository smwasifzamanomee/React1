/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#fa7436',
        secondary_1: '#4086f4', 
        secondary_2: '#ffb60a',
        dark: '#222222',
        light: '#ffffff',
        text_muted: '#444444',
        text_inverted: '#666666',
        icon_gray: '#999999',
        icon_light:'#E5E5E5',
        bg_primary:'#F7F8FC',
        bg_secondary: '#FEFCFB',
        bg_info: '#FFC602',
        bg_natural: '#f5f5f5',
        border_primary: '#EFF0F7',
        bg_purple: '#F3F1FF'
      },
      screens: {
        'sm': {'min': '390px' , 'max': '767px'},

      },
      fontFamily: {
        'sans': ['Volkhov','Poppins']
      },
      container: {
        center: true
      }
    },
  },
  plugins: [],
}