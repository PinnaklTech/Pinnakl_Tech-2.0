/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "move-line-x": "moveX 15s linear infinite",
        "move-line-y": "moveY 20s linear infinite",
        "float-horizontal": "floatX 12s ease-in-out infinite",
        "float-vertical": "floatY 18s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "pulse-slower": "pulse 6s ease-in-out infinite",
        "slide-up": "slideUp 20s linear infinite",
        "slide-down": "slideDown 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        moveX: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        moveY: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        floatX: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(20px)" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(30px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
      },
      colors: {
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};