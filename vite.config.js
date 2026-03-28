import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev: base "/" → http://localhost:3000/
// Production build: base "/CLM/" → https://user.github.io/CLM/
//
// Redirects so old /CLM/ bookmarks work in dev, and `vite preview` works when opening / instead of /CLM/
function clmPathFallbackPlugin() {
  return {
    name: 'clm-path-fallback',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0] ?? ''
        if (url === '/CLM' || url === '/CLM/') {
          res.writeHead(302, { Location: '/' }) // dev server is base / (e.g. http://localhost:5173/)
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
