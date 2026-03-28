import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Production base: VITE_BASE_PATH (e.g. /CLM/views-2/) or default /CLM/ for the site root.
// Dev: use `npm run dev:views-2` or `vite --base /CLM/views-2/` so URLs match Pages.
function clmPathFallbackPlugin() {
  let resolvedBase = '/'
  return {
    name: 'clm-path-fallback',
    configResolved(cfg) {
      resolvedBase = cfg.base.endsWith('/') ? cfg.base : `${cfg.base}/`
    },
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
          res.writeHead(302, { Location: resolvedBase })
          res.end()
          return
        }
        next()
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const prodBase = process.env.VITE_BASE_PATH || '/CLM/'
  return {
    plugins: [react(), clmPathFallbackPlugin()],
    base: mode === 'production' ? prodBase : '/',
    server: {
      port: 3000,
      open: true,
      strictPort: true,
    },
    preview: {
      port: 4173,
    },
  }
})
