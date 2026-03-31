/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kavoon: ['Kavoon', 'serif'],
        jolly: ['"Jolly Lodger"', 'cursive'],
      },
    },
  },
  plugins: [],
}