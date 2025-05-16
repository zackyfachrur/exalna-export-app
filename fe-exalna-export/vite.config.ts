import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@type": path.resolve(__dirname, "./src/utils/types"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@img": path.resolve(__dirname, "./src/assets/img"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@libs": path.resolve(__dirname, "./src/libs"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@json": path.resolve(__dirname, "./src/json")
    },
  },
});
