import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using the built-in Vite React plugin via dev dependency in vite (no extra config needed)
export default defineConfig({
  plugins: [react()],
})
