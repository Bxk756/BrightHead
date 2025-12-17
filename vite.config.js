import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "image/brighthead-logo.webp",
        "image/brighthead-logo-512.webp",
      ],
      manifest: {
        name: "BrightHead",
        short_name: "BrightHead",
        description:
          "Turn scattered AI curiosity into real, job-ready skills.",
        theme_color: "#020617",
        background_color: "#020617",
        display: "standalone",
        start_url: "/",
        scope: "/",
        icons: [
          {
            src: "/image/brighthead-logo.webp",
            sizes: "192x192",
            type: "image/webp",
          },
          {
            src: "/image/brighthead-logo-512.webp",
            sizes: "512x512",
            type: "image/webp",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,webp,png,svg}"],
      },
    }),
  ],
});
