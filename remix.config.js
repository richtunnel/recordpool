import { defineConfig } from "@remix-run/dev";
export default defineConfig({
  appDirectory: "app",
  serverBuildTarget: "node",
  serverBuildPath: "../server/src/main.ts", // Specify server file
  devServerPort: 4000,
  publicPath: "/build/",
  assetsBuildDirectory: "public/build",
  future: {
    v2_meta: true, // Enable the v2_meta API
    unstable_cssModules: true,
    unstable_cssSideEffectImports: true,
  },
});
