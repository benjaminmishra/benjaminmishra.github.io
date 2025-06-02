/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./public/index.html"
];
export const theme = {
  extend: {
    colors: {
      background: '#ffffff',
      text: '#000000',
      primary: '#61dafb',
      secondary: '#f3f4f6'
    }
  }
};
export const plugins = [];

