/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1320px",
    },
    extend: {
      colors: {
        primary: "#0a45f2",
      },
      boxShadow: {
        sm: "0 1px 4px hsl(0 4% 15% / 10%)",
        prim: "0px 10px 15px -3px rgba(10, 69, 242, 0.3), 0px 4px 6px -4px rgba(10, 69, 242, 0.3)",
      },
      animation: {
        opendesk: "openDesk 300ms ease-in-out",
        closedesk: "closeDesk 300ms ease-in-out",
      },
      keyframes: {
        openDesk: {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        closeDesk: {
          "0%": { opacity: 1, transform: "scale(1)" },
          "100%": { opacity: 0, transform: "scale(0.9)" },
        },
      },
    },
    backgroundImage: {
      surahHead: "linear-gradient(to bottom right, #0272db 20%, #0a45f2 65%)",
    },
  },
  plugins: [],
};
