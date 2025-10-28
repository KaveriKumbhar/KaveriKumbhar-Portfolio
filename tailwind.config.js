/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable dark mode using class strategy
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#0076D1",
      },
    },
  },
  plugins: [],
};
