import path from 'path';

import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(),  visualizer({
    open: true,
    gzipSize: true,
    brotliSize: true,
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@icons': path.resolve(__dirname, 'src/shared/assets/icons'),
    }
  },
  server: {
    port: 5000,
  }
})
