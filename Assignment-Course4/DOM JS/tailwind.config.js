/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   extend: {
      screens: {
        "sm": "480px"
      }
    },
    fontFamily: {
        poppins:['Poppins', 'sans-serif'],
        nunito:['Nunito', 'sans-serif']
      },
  },
  plugins: [],
}