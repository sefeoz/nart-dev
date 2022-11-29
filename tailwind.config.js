/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "nav-green" :'#65e4a3',
        "back-blue" :'#002337',
      }
    },
  },
  plugins: [],
}
