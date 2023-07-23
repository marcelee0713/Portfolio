/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        animfadeAbove: "fadeAbove 700ms ease-in-out",
        animfadeBelow: "fadeBelow 700ms ease-in-out",
        animfadeLeftSide: "fadeLeftSide 700ms ease-in-out",
        animfadeRightSide: "fadeRightSide 700ms ease-in-out",
      },
      keyframes: {
        fadeAbove: {
          "100%": { transform: "translateY(0px)", opacity: "1" },
          "0%": {
            transform: "translateY(-15px)",
            opacity: "0",
          },
        },
        fadeBelow: {
          "100%": { transform: "translateY(0px)", opacity: "1" },
          "0%": {
            transform: "translateY(15px)",
            opacity: "0",
          },
        },
        fadeLeftSide: {
          "100%": { transform: "translateX(0px)", opacity: "1" },
          "0%": {
            transform: "translateX(-15px)",
            opacity: "0",
          },
        },
        fadeRightSide: {
          "100%": { transform: "translateX(0px)", opacity: "1" },
          "0%": {
            transform: "translateX(15px)",
            opacity: "0",
          },
        },
      },
      boxShadow: {
        leftButtonShadow: "-5px 5px 0px 0px",
        rightButtonShadow: "5px 5px 0px 0px",
        leftLetterShadow: "-8px 8px 0px 0px",
        rightLetterShadow: "8px 8px 0px 0px",
      },
      colors: {
        primary: "#2B2B2B",
        secondary: "#FFFFFF",
        accent: "#364261",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
