/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
// import colors from "tailwindcss/colors";

import svgToDataUri from "mini-svg-data-uri";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
          "radial-gradient(closest-side at 50% 50%, #11998E 20%, #247b7b, #38EF7D, #181C14 40%)",
        "custom-radial-light":
          "radial-gradient(closest-side at 50% 50%, #11998E 20%, #247b7b, #38EF7D, #FFF 40%)",
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
  plugins: [
    animate,
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot-thick": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
