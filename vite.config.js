import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev: base "/". Production: "/" for Vercel or local builds; on GitHub Actions,
// GITHUB_REPOSITORY is set so base is "/<repo>/" for GitHub Pages.
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
  }
}

function productionBase() {
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
  return repo ? `/${repo}/` : '/'
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), clmPathFallbackPlugin()],
  base: mode === 'production' ? productionBase() : '/',
  server: {
    port: 3000,
    open: true,
    strictPort: true,
  },
  preview: {
    port: 4173,
  },
}))
