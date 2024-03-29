/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['RalewayReagular', 'sans-serif'],
        
      },
      animation: {
        'spin-slow':'spin 7s linear infinite',
      },
    },
  },
  plugins: [],
}

