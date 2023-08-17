import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1F2028',
        'slightly-lighter-dark-blue': '#2E3039',
        'brand-orange': '#F38016',
        'body-white': '#DADADA'
      }
    },
    fontFamily: {
      'heading': ['"Libre Baskerville"', 'sans-serif'],
      'body': ['"Source Sans 3"', 'sans-serif']
    }
  },
  plugins: [],
} satisfies Config

