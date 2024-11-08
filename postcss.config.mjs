module.exports = {
  plugins: [
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production"
      ? {
          "@fullhuman/postcss-purgecss": {
            content: [
              "./pages/**/*.{js,ts,jsx,tsx, mdx}",
              "./components/**/*.{js,ts,jsx,tsx, mdx}",
              "./src/**/*.{js,ts,jsx,tsx, mdx}",
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        }
      : []),
  ],
};
