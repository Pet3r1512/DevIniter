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
              "./pages/**/*.{js,ts,jsx,tsx, mdx}",
              "./components/**/*.{js,ts,jsx,tsx, mdx}",
              "./src/**/*.{js,ts,jsx,tsx, mdx}",
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
        ]
      : []),
  ],
};
