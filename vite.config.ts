import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [tanstackRouter({ target: 'react', autoCodeSplitting: true }), react()],
})
