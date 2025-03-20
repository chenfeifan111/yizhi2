import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

import postcssDiscardComments from "postcss-discard-comments"; // 修正导入方式
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: "remove-html-comments",
      transformIndexHtml(html) {
        return html.replace(/<!--[\s\S]*?-->/g, "");
      },
    },
  ],
  build: {
    // 压缩配置
    minify: "terser",
    terserOptions: {
      format: {
        comments: false, // 移除JS注释
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssDiscardComments({
          removeAll: true,
        }),
      ],
    },
  },
});


