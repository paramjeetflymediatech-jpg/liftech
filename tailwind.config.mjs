/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f59e0b', // Amber 600
          dark: '#d97706',    // Amber 700
          light: '#fbbf24',   // Amber 400
        },
        secondary: {
          DEFAULT: '#0d9488', // Teal 600
          dark: '#0f766e',
          light: '#5eead4',
        },
        accent: '#fbbf24',    // Amber 400
      },
    },
  },
  plugins: [],
};
