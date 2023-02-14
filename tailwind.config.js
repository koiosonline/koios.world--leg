/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './apps/app-portal/**/*.{js,ts,jsx,tsx}',
    './libs/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#084367',
          DEFAULT: '#1a2e3b',
        },
        secondary: {
          light: '#cae9ff',
          DEFAULT: '#4bc9ff',
          dark: '#0faef1',
        },
        error: {
          light: '#e57373',
          DEFAULT: '#f44336',
          dark: '#d32f2f',
        },
        warning: {
          light: '#ffb74d',
          DEFAULT: '#ffa726',
          dark: '#f57c00',
        },
        info: {
          light: '#4fc3f7',
          DEFAULT: '#29b6f6',
          dark: '#0288d1',
        },
        success: {
          light: '#81c784',
          DEFAULT: '#66bb6a',
          dark: '#388e3c',
        },
      },
    },
    fontFamily: {
      headings: ['georama', 'sans-serif'],
      base: ['open-sans', 'sans-serif']
  },
  },
  plugins: [],
};
