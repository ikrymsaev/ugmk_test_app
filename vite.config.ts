import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: process.env.VITE_API_TARGET || 'http://localhost:3001',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    css: {
      modules: {
        generateScopedName: "[name]__[local]-[hash:base64:5]",
      }
    }
  })
}