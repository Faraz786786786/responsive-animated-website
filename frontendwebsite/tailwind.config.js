/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        general: ['"General Sans"', 'sans-serif'],
        circular: ['"circular-web"', 'sans-serif'],
        robert: ['"robert-regular"', 'sans-serif'],
        robertMedium: ['"robert-medium"', 'sans-serif'],
        zentry: ['"zentry"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
