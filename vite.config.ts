import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // Prevent infinite HMR loop from Tailwind CSS Vite plugin rewriting index.css
      ignored: ['**/src/index.css'],
    },
  },
})
