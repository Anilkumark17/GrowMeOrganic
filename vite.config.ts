import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react()],
  base:'/vite-deploy/',
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 2000, 
  },
})
