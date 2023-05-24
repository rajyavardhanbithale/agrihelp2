/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      cursive: ['Press Start 2P', 'cursive'],
    },

  },
  plugins: [],
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
  ],
  


}