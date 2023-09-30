/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clr-primary': "white",
        'clr-contrast': "#DADADB",
        'clr-gradOne': "#B2884C",
        'clr-gradTwo': "#686F77",
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