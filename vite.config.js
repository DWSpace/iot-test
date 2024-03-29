import { fileURLToPath, URL } from "node:url";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/components.d.ts",
      dirs: ["src/**/*", "node_modules/primevue/**/*"],
      // dirs: ["node_modules/primevue/**/*"],
    }),
  ],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
});
