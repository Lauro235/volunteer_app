/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'col-primary': "white",
        'col-contrast': "#DADADB",
        hover: '#0C41FF',
        safety: '#66ff66',
      },
      backgroundImage: {
        AppBackground: "linear-gradient(to bottom, #B2884C, #686F77)"
      }
    },
  },
  plugins: [],
}