/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg": "#340B6C",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      "2md": "944px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {
      backgroundColor: ["even"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
