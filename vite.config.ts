import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import UnoCSS from "unocss/vite";
import { presetUno } from "unocss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS({ presets: [presetUno] })],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});
