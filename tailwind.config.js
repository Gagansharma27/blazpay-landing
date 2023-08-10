/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bvmp: ["Be Vietnam Pro", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('src/assets/heroBack.png')",
      },
    },
  },
  plugins: [],
};
