/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#333333',
        'custom-orange': '#FF5722',
      },
    },
  },
  plugins: [],
}

