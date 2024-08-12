/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      fontFamily: {
        popins: ["Popins"],
      },
      colors: {
        mainBg: "#f8f8f8",
      },
    },
  },
  plugins: [],
};
