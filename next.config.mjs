import nextra from "nextra";
import NextBundleAnalyzer from "@next/bundle-analyzer";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx", // Use relative path
});

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: "loose",
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async rewrites() {
    return [
      {
        source: "/docs/:path*",
        destination: "/docs/:path*",
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (process.env.ANALYZE === "true") {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          reportFilename: isServer
            ? "../analyze/server.html"
            : "../analyze/client.html",
        })
      );
    }
    return config;
  },
};

export default withBundleAnalyzer(withNextra(nextConfig));
