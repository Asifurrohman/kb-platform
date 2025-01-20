/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gray
        'light-gray': '#FAFAFA',
        // Red
        'main-red': '#D6364D',
        'light-red': '#F2C2CF',
      }
    },
  },
  plugins: [],
}

