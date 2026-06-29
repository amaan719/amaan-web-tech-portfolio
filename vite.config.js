import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/amaan-web-tech-portfolio/', // Set the base path for GitHub Pages deployment
})
