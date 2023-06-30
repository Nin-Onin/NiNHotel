/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
 ],
 theme: {
  extend: {
    backgroundImage: {
      'landing': "url('/background.jpg')",
      'signin': "url('/log.jpg')",

      

    }
  },
 },
 plugins: [],
}