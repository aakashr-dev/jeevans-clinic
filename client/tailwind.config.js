/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      /* =========================================
         COLORS
      ========================================= */

      colors: {
        cream: "#F6F3EE",

        teal: {
          DEFAULT: "#173F3D",
          dark: "#102F2D",
          light: "#4E706D",
          muted: "#6B7B78",
        },

        gold: {
          DEFAULT: "#D49E47",
          light: "#D9AE72",
          pale: "#F1E2CC",
        },

        ink: "#173F3D",

        text: {
          DEFAULT: "#5F6B69",
          light: "#7B8583",
        },

        line: "#DDD7CD",

        white: "#FFFFFF",
      },

      /* =========================================
         FONTS
      ========================================= */

      fontFamily: {
        display: [
          "Playfair Display",
          "serif",
        ],

        body: [
          "Inter",
          "sans-serif",
        ],
      },

      /* =========================================
         BORDER RADIUS
      ========================================= */

      borderRadius: {
        xl: "18px",
        "2xl": "24px",
        "3xl": "30px",
        pill: "999px",
      },

      /* =========================================
         BOX SHADOW
      ========================================= */

      boxShadow: {
        soft:
          "0 15px 45px rgba(23, 63, 61, 0.07)",

        card:
          "0 20px 50px rgba(23, 63, 61, 0.08)",

        gold:
          "0 12px 35px rgba(212, 158, 71, 0.15)",
      },

      /* =========================================
         ANIMATIONS
      ========================================= */

      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",

        "fade-in": "fadeIn 0.8s ease-out forwards",

        "slide-up":
          "slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",

        "float":
          "float 5s ease-in-out infinite",

        "pulse-soft":
          "pulseSoft 3s ease-in-out infinite",
      },

      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        fadeIn: {
          "0%": {
            opacity: "0",
          },

          "100%": {
            opacity: "1",
          },
        },

        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },

          "50%": {
            transform: "translateY(-10px)",
          },
        },

        pulseSoft: {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },

          "50%": {
            opacity: "0.75",
            transform: "scale(1.02)",
          },
        },
      },

      /* =========================================
         TRANSITIONS
      ========================================= */

      transitionTimingFunction: {
        smooth:
          "cubic-bezier(0.22, 1, 0.36, 1)",
      },

      /* =========================================
         CONTAINER
      ========================================= */

      container: {
        center: true,

        padding: {
          DEFAULT: "20px",

          sm: "24px",

          lg: "32px",

          xl: "40px",
        },

        screens: {
          "2xl": "1200px",
        },
      },
    },
  },

  plugins: [],
};