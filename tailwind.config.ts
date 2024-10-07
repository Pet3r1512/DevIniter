import type { Config } from "tailwindcss";
// import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enabling dark mode with 'class' strategy
  theme: {
    extend: {
      colors: {
        primary: "#11998E",
        secondary: "#38EF7D",
        gold: "#FFDD43",
        black: {
          DEFAULT: "#000000",
          main: "#181C14",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        gray: {
          DEFAULT: "#6c757d",
          light: "#dee2e6",
          dark: "#212529",
        },
      },
    },
  },
  plugins: [],
};

export default config;
