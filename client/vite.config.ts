import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        unstable_optimizeDeps: true,
      },
      ignoredRouteFiles: ["**/*.css"],
    }),
    tsconfigPaths(),
  ],
  ssr: {
    external: ["@mui/icons-material"], // Add the external package for SSR
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "app"),
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "public/build",
    target: "esnext",
    sourcemap: false,
    rollupOptions: {
      input: path.resolve(__dirname, "app/root.tsx"),
    },
  },
  define: {
    "process.env": process.env,
  },
});
