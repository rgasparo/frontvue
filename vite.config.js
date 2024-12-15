import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "vueRemote",
      filename: "remoteEntry.js",
      exposes: {
        "./mount": "./src/mount.js",
        "./style": "./src/assets/tailwind.css",
      },
      shared: {
        vue: {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^3.0.0",
        }
      },
    }),
  ],
  css: {
    postcss: {}, // PostCSS para TailwindCSS
  },
  build: {
    target: "esnext",
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        chunkFileNames: "assets/[name]-[hash].js",
      },
    },
  },
  server: {
    port: 4173,
  },
});
