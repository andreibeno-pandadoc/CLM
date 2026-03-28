# Team Git repository (this folder only)

This directory is a **standalone Git repository**. The parent `CLM` workspace no longer tracks `prototype/` in its own Git history so you can share **only** this app with your team on GitHub.

## One-time setup

1. Create an empty repository on GitHub (e.g. `clm-prototype` or `CLM-views-prototype`).
2. Point this repo at it and push:

```bash
cd prototype
git remote add origin https://github.com/<org>/<repo>.git
git push -u origin main
```

Use SSH if you prefer: `git@github.com:<org>/<repo>.git`

## Ongoing workflow

From the **CLM workspace root**:

```bash
./scripts/push-prototype-github.sh
```

Optional custom commit message:

```bash
./scripts/push-prototype-github.sh "feat: update document filters"
```

Or from **this folder**:

```bash
npm run repo:push
```

The script commits any pending changes in `prototype/` and pushes to `origin`.

## What is not in this repo

- The rest of the CLM workspace (MCP servers, Hex notes, internal docs) stays local and is tracked only by the parent repo if you commit it there.
- `node_modules/` and `dist/` are gitignored; run `npm install` and `npm run build` after clone.

## GitHub Pages / deploy

If you used Pages under the old monorepo URL, point the site at this new repository or update `homepage` in `package.json` after you know the new URL.
