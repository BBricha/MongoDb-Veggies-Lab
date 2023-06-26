import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/fruits": "http://localhost:4001",
      "/create_veggie": "http://localhost:4001",
      "/veggies": "http://localhost:4001"
    }
  }
});