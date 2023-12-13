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
        'input': '#2b2e3e',
        'lightskyblue': 'lightskyblue',
        body: colors.white
      }
    },
  },
  plugins: [],
}

