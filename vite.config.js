import { defineConfig } from "vite";
import path from "node:path";
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "Localizer",
      fileName: (format) => `Localizer.${format}.js`,
    },
  },
});
