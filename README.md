# CLM Views prototype — Document type classification

Interactive prototype for **Document type classification & Views**:

- **Layout:** Proposals-style main content with Documents/Catalog tabs, hero card, and document table.
- **Navigation:** Left sidebar with Views: Contracts, Service agreements, Proposals, Quotes, NDAs, Invoices, Collaterals.
- **Filters:** Filter chips per view (toggle **Filters** next to the tabs row).

**Live (GitHub Pages):**

| Version | URL |
|--------|-----|
| **Main** (default) | […/CLM/](https://andreibeno-pandadoc.github.io/CLM/) |
| **`views-2` branch** | […/CLM/views-2/](https://andreibeno-pandadoc.github.io/CLM/views-2/) |
| **`views-3` branch** | […/CLM/views-3/](https://andreibeno-pandadoc.github.io/CLM/views-3/) |

The site root is always built from **`main`**. The **`views-2`** and **`views-3`** Git branches each produce a separate deploy at the paths above (same code until you diverge).

### Work on a variant branch

```bash
git fetch origin
git checkout views-2    # or views-3
# make changes, commit
git push origin views-2
```

Pushing **`views-2`** or **`views-3`** triggers GitHub Actions and refreshes that URL (and rebuilds main from `origin/main`).

### Run locally (match Pages paths)

```bash
npm install
npm run dev:views-2     # open http://localhost:3000/CLM/views-2/
npm run dev:views-3     # open http://localhost:3000/CLM/views-3/
```

Default dev server (root path): `npm run dev` → `http://localhost:3000/`

### One-off production-like build for a variant

```bash
npm run build:views-2
npm run preview:views-2
```

### Full Pages bundle locally (same as CI)

```bash
npm run build:pages
```

Ends on **`origin/main`** again after building (detached HEAD is normal).

## Default dev & main-site preview

```bash
npm install
npm run dev          # http://localhost:3000/  (base /)
npm run build
npm run preview      # production-like /CLM/ paths
```

## Push to GitHub

```bash
npm run repo:push
```

Optional message: `npm run repo:push -- "feat: your message"`

## Deploy

- **GitHub Actions:** push to **`main`**, **`views-2`**, or **`views-3`** runs `.github/workflows/deploy-prototype.yml` (builds main + both variants). Enable **Settings → Pages → GitHub Actions** if needed.
- **Manual:** `npm run build` then `npm run deploy` (uses `gh-pages` and `homepage` in `package.json`).

## Design references

- [Views concept (Figma)](https://www.figma.com/design/ev8QrglqV7b7BNYKSBUUrs/Views-concept-exploration)
- Internal proposal docs live in your wider CLM workspace, not in this repository.
