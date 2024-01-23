import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from "node:url";
import autoprefixer from "autoprefixer";

export default defineConfig(({mode, command}) => {
    const base = command === 'build' ? '/simple-cv-generator/' : '/'

    return {
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
        base
    }
})
