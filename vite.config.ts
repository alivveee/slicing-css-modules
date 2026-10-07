import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcDir = path.resolve(__dirname, 'src')

export default defineConfig({
    resolve: {
        alias: {
            '@': srcDir,
        },
    },
    plugins: [react()],
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
        },
        preprocessorOptions: {
            scss: {
                loadPaths: [path.join(srcDir, 'assets/theme/base')],
                additionalData: (content, filepath) => { 
                    const normalized = filepath.replace(/\\/g, '/')
                    if (normalized.includes('/src/assets/theme/'))
                        return content
                    return `@use "index" as *;\n${content}`
                },
            },
        },
    },
})
