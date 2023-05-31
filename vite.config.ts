import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@/pages': path.resolve(__dirname, './src/pages'),
        '@/router': path.resolve(__dirname, './src/router'),
        '@/services': path.resolve(__dirname, './src/services'),
        '@/store': path.resolve(__dirname, './src/store'),
      }
    },
    server: {
      watch: {
        usePolling: true,
      },
      host: true,
      strictPort: true,
      port: 3000,
      proxy: {
        '/api': {
          target: process.env.VITE_API_TARGET || 'http://127.0.0.1:3001',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      },
    },
    css: {
      modules: {
        generateScopedName: "[name]__[local]-[hash:base64:5]",
      }
    }
  })
}