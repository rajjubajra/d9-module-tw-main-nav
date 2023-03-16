/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        windSong: "'WindSong', cursive"
      },
    backgroundImage: {
      'visitors-waiting': "url('/src/media/visitors-waiting.jpg')"
    }
      
    },
  },
  plugins: [],
}
