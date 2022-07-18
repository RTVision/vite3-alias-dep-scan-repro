import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
    },
  },
  plugins: [vue()],
});
