import { join } from 'path'
import { defineConfig } from 'vite'
import userConfig from '../config'
import react from "@vitejs/plugin-react-swc";

const IsWeb = process.env.BUILD_TARGET === 'web'

function resolve(dir: string) {
    return join(__dirname, '..', dir)
}

const root = resolve('src/renderer')

export default defineConfig({
    mode: process.env.NODE_ENV,
    root,
    define: {
        'process.env': process.env.NODE_ENV === 'production' ? userConfig.build.env : userConfig.dev.env,
    },
    resolve: {
        alias: {
            '@renderer': root,
            '@store': join(root, '/store/modules'),
        }
    },
    base: './',
    build: {
        outDir: IsWeb ? resolve('dist/web') : resolve('dist/electron/renderer'),
        emptyOutDir: true,
        target: 'esnext',
        minify: 'esbuild',
        cssCodeSplit: false
    },
    server: {
    },
    plugins: [
        react()
    ],
    optimizeDeps: {
    }
})