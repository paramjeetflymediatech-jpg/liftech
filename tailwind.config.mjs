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
          DEFAULT: '#D81E31', // Baldan Red
          dark: '#B01828',
          light: '#E64D5D',
        },
        baldan: {
          red: '#D81E31',
          prepare: '#A6363E',
          sow: '#E0643E',
          protect: '#7C5E92',
          move: '#3E5B66',
          restore: '#000000',
        },
        secondary: {
          DEFAULT: '#3E5B66', // Industrial Teal/Blue
          dark: '#2C414A',
          light: '#567D8C',
        },
        accent: '#D81E31',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
