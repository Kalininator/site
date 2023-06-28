/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-source-sans)"],
        gugi: ["var(--font-gugi)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
