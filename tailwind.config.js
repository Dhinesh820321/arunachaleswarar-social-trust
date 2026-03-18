/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f87171', // Lighter red
          DEFAULT: '#DC0B14', // Logo Primary Red
          dark: '#b91c1c', // Darker red
        },
        secondary: {
          light: '#34d399', // Lighter green
          DEFAULT: '#14461E', // Logo Secondary Deep Green
          dark: '#064e3b', // Darker green
        },
        accent: {
          DEFAULT: '#E9AF2A', // Logo Tertiary Gold
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

