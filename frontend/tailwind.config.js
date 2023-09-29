/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hovercolor: '#0C41FF',
        safety: '#66ff66',
      },
    },
  },
  plugins: [],
}