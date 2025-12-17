import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "image/brighthead-logo.webp",
        "image/brighthead-logo-512.webp",
        "image/brighthead-logo@2x.webp",
        "image/AI Learning and Innovation Visualization.png"
      ],
      manifest: {
        name: "BrightHead",
        short_name: "BrightHead",
        description: "Learn AI skills with structured roadmaps and hands-on kits",
        theme_color: "#020617",
        background_color: "#020617",
        display: "standalone",
        start_url: "/",
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
  ],
  build: {
    outDir: "dist"
  }
});
