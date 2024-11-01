/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color1': 'rgb(19, 19, 19)',
        'color1.1': 'rgba(19, 19, 19,0.1)',
        'color1.05': 'rgba(19, 19, 19,0.05)',
        'color1.7': 'rgba(19, 19, 19,0.7)',
        'color1.6': 'rgba(19, 19, 19,0.6)',
        'color1.4': 'rgba(19, 19, 19,0.4)',
        'color2' : 'rgb(231, 254, 41)',
      }
    },
  },
  plugins: [],
}

