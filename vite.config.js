import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["image/**/*"],
      manifest: {
        name: "BrightHead",
        short_name: "BrightHead",
        start_url: "/",
        display: "standalone",
        background_color: "#020617",
        theme_color: "#0ea5e9",
        icons: [
          {
            src: "/image/brighthead-logo.webp",
            sizes: "192x192",
            type: "image/webp"
          },
          {
            src: "/image/brighthead-logo-512.webp",
            sizes: "512x512",
            type: "image/webp"
          }
        ]
      }
    })
  ]
});
