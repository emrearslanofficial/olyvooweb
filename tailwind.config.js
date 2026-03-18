/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olyvooPurple: "#7F00FF",
        olyvooBlue: "#00D4FF",
        darkBg: "#0B0B14",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
      'spin-slow': 'spin 10s linear infinite',
    },
    },
  },
  plugins: [],
}
