import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig((mode)=>({
  base: mode === 'production' ? '/reactTutorial/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ✅ 這裡把 @ 指向 src
    },
  },
}))
