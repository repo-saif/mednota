import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  federation({
    name: 'host-app',
    remotes: {
      store: "http://localhost:1003/dist/assets/remoteEntry.js"
    },
    shared: ['react', 'react-dom', 'react-router-dom']
  })

  ],

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
})
