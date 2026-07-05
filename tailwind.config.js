/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F766E",   // pick your brand color
        secondary: "#F97316", // accent color
      },
    },
  },
  plugins: [],
};