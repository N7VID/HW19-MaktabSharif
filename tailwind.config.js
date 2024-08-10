/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
