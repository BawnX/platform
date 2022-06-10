import {defineConfig} from 'vite'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import {resolve} from "path";
import {presetAttributify, presetIcons, presetUno} from "unocss";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            reactivityTransform: true,
        }),
        Pages({
            pagesDir: 'src/pages',
            extensions: ['vue']
        }),
        Components({
            extensions: ['vue'],
            dirs: 'src/components',
            dts: true,
            allowOverrides: true,
        }),
        Unocss({
            presets: [presetUno(), presetAttributify(), presetIcons()]
        })
    ],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            "@": `${resolve(__dirname, 'src')}/`
        }
    },
    define: {
        'process.env': process.env,
    },
    ssgOptions: {
        script: 'async',
        formatting: 'minify',
    }
})
