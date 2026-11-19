import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // Markdown files are imported as URLs and fetched at runtime (as in CRA).
  assetsInclude: ["**/*.md"],
  build: {
    outDir: "build",
  },
  server: {
    port: 3000,
  },
});
