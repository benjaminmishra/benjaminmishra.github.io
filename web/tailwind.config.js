/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./public/index.html"
];
export const darkMode = 'class';
export const theme = {
  extend: {
    colors: {
      background: {
        light: '#ffffff',
        dark: '#1a202c',
      },
      text: {
        light: '#1a202c',
        dark: '#ffffff',
      },
      primary: '#61dafb',
      secondary: '#2d3748'
    },
    fontFamily: {
      sans: ['FigTree', 'sans-serif'],
    }
  }
};
export const plugins = [];

