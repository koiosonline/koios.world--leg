/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./apps/app-portal/**/*.{js,ts,jsx,tsx}', './libs/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        padding: '1rem',
        center: true
      },
      colors: {
        primary: {
          light: '#704DD3',
          DEFAULT: '#1C0F56'
        },
        secondary: {
          light: '#E6C2CF',
          DEFAULT: '#EF7BA5',
          dark: '#F13E7F'
        },
        error: {
          light: '#e57373',
          DEFAULT: '#f44336',
          dark: '#d32f2f'
        },
        warning: {
          light: '#ffb74d',
          DEFAULT: '#ffa726',
          dark: '#f57c00'
        },
        info: {
          light: '#4fc3f7',
          DEFAULT: '#29b6f6',
          dark: '#0288d1'
        },
        success: {
          light: '#81c784',
          DEFAULT: '#66bb6a',
          dark: '#388e3c'
        }
      }
    },
    fontFamily: {
      headings: ['georama', 'sans-serif'],
      base: ['open-sans', 'sans-serif']
    }
  },
  plugins: []
};
