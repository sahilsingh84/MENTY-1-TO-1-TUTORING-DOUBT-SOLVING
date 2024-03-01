/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
}

=======
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
>>>>>>> 58a0fadd3554a2172c3821087e61ea923db55204
