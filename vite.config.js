import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        practice_areas: resolve(__dirname, "practice-areas.html"),
        practice_areas2: resolve(__dirname, "practice-areas2.html"),
        main2: resolve(__dirname, "index2.html"),
        about2: resolve(__dirname, "about2.html"),
        contact2: resolve(__dirname, "contact2.html"),
      },
    },
  },
});
