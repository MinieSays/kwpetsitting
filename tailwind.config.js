/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/images/group-dog-walking-scaled.jpg')"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        "earth-green": "#5cb464",
        "slate-gray": "#6D6D6D",
        "dark-earth-green": "#043404",
        "earth-brown": "#af845f",
      },
    },
    
  },
  plugins: [],
}

