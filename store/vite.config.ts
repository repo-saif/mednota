import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 
    federation({
      name: 'store',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
          './store': './src/store',
      },
      shared: ['react', 'react-dom']
  })],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
})
