/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #1C1C1C 0%, #E3E3E3 50.1%, #1C1C1C 100%)',
      },
      boxShadow: {
        'spread-lg': '0 100px 20px rgba(0, 0, 0, 0.3)', // Custom shadow
    },
    },
  },
  plugins: [],
}

