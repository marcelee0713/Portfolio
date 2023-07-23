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
        wiggle: "wiggle 1s ease-in-out infinite",
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
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      boxShadow: {
        leftButtonShadow: "-5px 5px 0px 0px",
        rightButtonShadow: "5px 5px 0px 0px",
        leftLetterShadow: "-8px 8px 0px 0px",
        rightLetterShadow: "8px 8px 0px 0px",
      },
      height: {
        projectBoxHeight: "250px",
      },
      colors: {
        primary: "#2B2B2B",
        secondary: "#FFFFFF",
        accent: "#364261",
      },
      margin: {
        navHeight: "44px",
      },
      gridTemplateColumns: {
        myGridTemplate: "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
