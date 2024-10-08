import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
// import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["selector"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-radial":
          "radial-gradient(closest-side at 50% 50%, #11998E 20%, #247b7b, #38EF7D, #181C14 65%)",
        "custom-radial-light":
          "radial-gradient(closest-side at 50% 50%, #11998E 20%, #247b7b, #38EF7D, #FFF 65%)",
      },
      colors: {
        primary: {
          DEFAULT: "#11998E",
          light: "#247b7b",
        },
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  variants: {
    extend: {
      backdropBlur: ["responsive"],
    },
  },
  plugins: [animate],
} satisfies Config;

export default config;
