import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// replace REPO_NAME with your GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
