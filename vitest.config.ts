import { defineConfig } from "vitest/config";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Ensures you use the jsdom environment for DOM-related tests
    setupFiles: "./setupTests.ts", // Points to the setup file to configure the global environment
    globals: true, // Enables global `expect` and other Vitest functions
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Ensure `@` is mapped to the `src` folder
    },
  },
});
