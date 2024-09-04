import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],  // Added Roboto font
      },
      colors: {
        oceanBlue: '#006994',
        lightBackground: '#f9fafb',
        darkBackground: '#1f2937',
        darkText: '#f3f4f6',
        lightText: '#1f2937',
        navPurple: '#a61993',  // Navbar color added for easier reference
      },
    },
  },
  plugins: [],
}

export default config;
