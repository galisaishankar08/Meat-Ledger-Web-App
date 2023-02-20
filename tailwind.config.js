/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#EF3E27',
        'grey': '#D9D9D9',
        'white': '#FFFFFF',
      },
      fontFamily: {
        cadetblack: ["CadetBlack"],
        cadetbold: ["CadetBold"],
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}
