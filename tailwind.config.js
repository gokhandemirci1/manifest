/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hot-pink': '#FF1493',
        'baby-blue': '#87CEEB',
        'expensive-beige': '#F5F5DC',
        'zeynep': '#00BFFF', // Electric Blue
        'hilal': '#9370DB', // Purple
        'esin': '#FFD700', // Yellow/Pink
        'sueda': '#800020', // Burgundy
        'lidya': '#DC143C', // Red
        'mina': '#F5F5DC', // Beige/White
      },
      fontFamily: {
        'sans': ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

