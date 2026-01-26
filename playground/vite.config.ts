import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@longmo-utils/browser': resolve(__dirname, '../packages/browser/src'),
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    port: 5173,
    open: true
  }
})
