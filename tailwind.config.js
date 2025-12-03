/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./src/assets/**/*.{css,svg,png,webp}"
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        background: "#020617",
        foreground: "#0f172a",
        accent: "#38bdf8",
        brand: "#0ea5e9",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      boxShadow: {
        glow: "0 0 40px rgba(56,189,248,0.25)",
      },

      animation: {
        "fade-up": "fadeUp .6s ease-out forwards",
        "fade-in": "fadeIn .6s ease-out forwards",
      },

      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
