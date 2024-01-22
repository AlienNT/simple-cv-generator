import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from "node:url";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [autoprefixer],
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})