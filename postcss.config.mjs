/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production"
      ? {
          "@fullhuman/postcss-purgecss": {
            content: ["./**/*.{tsx,mdx}"],
            css: ["./src/styles/globals.css", "./src/styles/nextra.css"],
            safelist: [
              /data-theme$/, // for theme classes
              /^nextra-/, // for nextra-specific classes
            ],
          },
          cssnano: {
            preset: "default",
          },
        }
      : {}),
  },
};

export default config;
