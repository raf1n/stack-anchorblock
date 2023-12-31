/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6941C6",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
