# CLM Views prototype — Document type classification

Interactive prototype for **Document type classification & Views**:

- **Layout:** Proposals-style main content with Documents/Catalog tabs, hero card, and document table.
- **Navigation:** Left sidebar with Views: Contracts, Service agreements, Proposals, Quotes, NDAs, Invoices, Collaterals.
- **Filters:** Filter chips per view (toggle **Filters** next to the tabs row).

**Live (GitHub Pages):** [https://andreibeno-pandadoc.github.io/CLM/](https://andreibeno-pandadoc.github.io/CLM/)

## Run locally

```bash
npm install
npm run dev
```

Opens `http://localhost:3000/` (Vite dev server; base path is `/` in dev).

## Build & preview (production paths)

Production builds use base `/CLM/` so assets match GitHub Pages.

```bash
npm run build
npm run preview
```

Opens the preview server at `/CLM/` so routing matches the live site.

## Push to GitHub

```bash
npm run repo:push
```

Optional message: `npm run repo:push -- "feat: your message"`

## Deploy

- **GitHub Actions:** push to `main` runs `.github/workflows/deploy-prototype.yml` (GitHub Pages). Enable **Settings → Pages → GitHub Actions** if needed.
- **Manual:** `npm run build` then `npm run deploy` (uses `gh-pages` and `homepage` in `package.json`).

## Design references

- [Views concept (Figma)](https://www.figma.com/design/ev8QrglqV7b7BNYKSBUUrs/Views-concept-exploration)
- Internal proposal docs live in your wider CLM workspace, not in this repository.
