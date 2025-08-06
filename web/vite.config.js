import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: process.cwd(),
  build: {
    outDir: './build',
    emptyOutDir: true,
    sourcemap: true,
    minify: 'esbuild',
    target: 'esnext',
    cssCodeSplit: true,
    assetsDir: 'assets',
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
    cssTarget: 'esnext',
    reportAssets: true,
    assetsInlineLimit: 4096,
    cssMinify: true,
    rollupOptions: {
      input: {
        main: './public/index.html'
      }
    }
  },
  publicDir: './public'
})
