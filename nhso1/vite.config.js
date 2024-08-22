import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/nhso/',
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  build: {
    cssCodeSplit: true,
    sourcemap: true,
  },
})