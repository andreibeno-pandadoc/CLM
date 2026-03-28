import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev: base "/". Production: "/CLM/" for GitHub Pages at
// https://<user>.github.io/CLM/ (same as the previous monorepo deploy).
function clmPathFallbackPlugin() {
  return {
    name: 'clm-path-fallback',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0] ?? ''
        if (url === '/CLM' || url === '/CLM/') {
          res.writeHead(302, { Location: '/' })
          res.end()
          return
        }
        next()
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0] ?? ''
        if (url === '/' || url === '/index.html') {
          res.writeHead(302, { Location: '/CLM/' })
          res.end()
          return
        }
        next()
      })
    },
  }
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), clmPathFallbackPlugin()],
  base: mode === 'production' ? '/CLM/' : '/',
  server: {
    port: 3000,
    open: true,
    strictPort: true,
  },
  preview: {
    port: 4173,
  },
}))
