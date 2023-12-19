/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.emerald, DEFAULT: colors.red[500]},
        'input': '#f0f0f030',
        'lightskyblue': 'lightskyblue',
        'lightslategrey': 'lightslategrey',
        body: colors.white
      },
      backgroundImage: {
        'detail-banner': `url('/src/assets/detailBanner.jpg')`
      }
    },
    listStyleType: {
      circle: 'circle',
    },
    fontSize: {
      xxs: ['10px', '14px'],
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      md: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      xxl: ['32px', '40px'],
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  plugins: [],
}

