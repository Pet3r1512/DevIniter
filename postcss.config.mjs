/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production"
      ? {
          "@fullhuman/postcss-purgecss": {
            content: [
              "./pages/**/*.{js,jsx,ts,tsx, mdx}",
              "./components/**/*.{js,jsx,ts,tsx, mdx}",
            ],
            safelist: [/^[a-z]*$/, /^[A-Z]*$/, /^[0-9]*$/],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          },
          cssnano: {
            preset: [
              "default",
              {
                discardComments: {
                  removeAll: true,
                },
                cssDeclarationSorter: true,
                reduceIdents: false,
              },
            ],
          },
        }
      : {}),
  },
};

export default config;
