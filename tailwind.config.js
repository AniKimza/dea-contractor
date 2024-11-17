/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        darkMode: '#151515',
        costumYellow: '#F3CF19',
        costumDark: '#343131'
      }
    },
  },
  plugins: [],
}

