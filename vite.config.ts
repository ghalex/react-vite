import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const srcDir = path.resolve(__dirname, 'src')

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: srcDir }
    ]
  },
  server: {
    hmr: {
      path: '/ws',
      clientPort: 5173
    }
  }
})
