/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B0A09",
        secondary: "#FAFAFA",
        textPrimary: "",
        textSecondary: "",
        border: "#27272A",
      },
      fontFamily: {
        nunito: "Nunito-Black",
      },
      spacing: {
        1: "10px",
        2: "20px",
        3: "30px",
        4: "40px",
      },
    },
  },
  plugins: [],
};
