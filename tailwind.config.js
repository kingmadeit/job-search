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
        body: colors.white
      }
    },
  },
  plugins: [],
}

