/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],

  darkMode: 'class',

  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },

    extend: {
      colors: {
        background: {
          light: '#ffffff',
          dark:  '#020B22',
        },
        text: {
          light: '#1a202c',
          dark:  '#F1F5F9',
        },
        primary: {
          DEFAULT: '#38bdf8',   // sky-400
          dark:    '#0ea5e9',
        },
        accent: {
          DEFAULT: '#00D8FF',
        },
      },

      fontFamily: {
        sans: ['FigTree', 'Inter', 'sans-serif'],
      },

      keyframes: {
        pulseSlow: {
          '0%,100%': { opacity: 0.65, transform: 'scale(0.96)' },
          '50%':     { opacity: 0.9,  transform: 'scale(1.02)' },
        },
      },
      animation: {
        pulseSlow: 'pulseSlow 3s ease-in-out infinite',
      },
    },
  },

  plugins: [],
};
