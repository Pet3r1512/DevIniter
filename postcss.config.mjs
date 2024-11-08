// eslint-disable-next-line @typescript-eslint/no-require-imports
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production"
      ? [
          purgecss({
            content: [
              "./pages/**/*.{js,ts,jsx,tsx}",
              "./components/**/*.{js,ts,jsx,tsx}",
              "./src/**/*.{js,ts,jsx,tsx}",
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
        ]
      : []),
  ],
};
