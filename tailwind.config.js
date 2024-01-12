/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true
      },
      backgroundColor: {
        '0d1117': '#0d1117',
      },
    },
  },
  plugins: [],
}

