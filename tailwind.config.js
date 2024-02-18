/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        cursive: ["Ephesis", "cursive"],
      }
    },
    container: {
      center: true,
      padding:'2rem'
    },
  },
  plugins: [],
}

