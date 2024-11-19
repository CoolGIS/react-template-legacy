import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import { analyzer } from 'vite-bundle-analyzer'
import UnoCSS from 'unocss/vite'

const ReactCompilerConfig = {
  target: '18'
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    UnoCSS(),
    react({
      babel: {
        presets: ['jotai/babel/preset'],
        plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]]
      }
    }),
    legacy(),
    analyzer({ analyzerMode: 'static' })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
