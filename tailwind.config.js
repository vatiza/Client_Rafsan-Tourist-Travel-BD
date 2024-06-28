/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        avro: ["Arvo", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
