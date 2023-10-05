/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "app-max": "500px",
      },
      gridTemplateRows: {
        "8": "repeat(8, minmax(0, 1fr))"
      },
      colors: {
        "clr-primary": "white",
        "clr-contrast": "#DADADB",
        "clr-gradOne": "#B2884C",
        "clr-gradTwo": "#686F77",
        "clr-login": "#2238FB",
        "clr-register": "#44993F",
        "clr-hover": "#0C41FF",
        "clr-safety": "#66ff66",
      },
      backgroundImage: {
        AppBackground: "linear-gradient(to bottom, #B2884C, #686F77)",
      },
      boxShadow: {
        input: "0px 0px 5px -1px currentcolor",
      },
      dropShadow: {
        "app-btn": "0px 6px 0px #444"
      },
      screens: {
        xsm: '450px'
      }
    },
  },
  plugins: [],
};
