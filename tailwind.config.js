/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "netflix-color": "#e50914",
      },
    },
  },
  plugins: [require("tailwindcss-transitions")],
};
