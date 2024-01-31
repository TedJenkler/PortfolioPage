/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['Ibarra Real Nova'],
      p: ['Public Sans'],
    },
    extend: {
      colors: {
        'cyan': '#5FB4A2',
        'dark-blue': '#203A4C',
        'grey-dark-blue': '#33323D',
        'very-light-grey': '#FAFAFA',
        'light-grey': '#EAEAEB',
        'error-red': '#F43030',
      },
    }
  },
  plugins: [],
}

