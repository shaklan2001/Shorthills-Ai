/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        montserrat: ["Montserrat", "sans-serif"], 
        poppins: ["Poppins", "sans-serif"],  
      },
    },
  },
  plugins: [],
}

