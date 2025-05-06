import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: './',

    build: {
        emptyOutDir: true,
        target: 'esnext',

        outDir: 'dist',

        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                onboarding: resolve(__dirname, 'onboarding.html'),
                login: resolve(__dirname, 'login.html'),
                home: resolve(__dirname, 'home.html'),
            },
        },
    },
})