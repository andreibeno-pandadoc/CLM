# Team Git repository (this folder only)

This directory is a **standalone Git repository**. The parent `CLM` workspace does not track `prototype/` in its Git history.

**GitHub remote:** `origin` → [github.com/andreibeno-pandadoc/CLM](https://github.com/andreibeno-pandadoc/CLM) (this app is the **root** of that repo).

## Ongoing workflow

From the **CLM workspace root**:

```bash
./scripts/push-prototype-github.sh
```

Optional commit message:

```bash
./scripts/push-prototype-github.sh "feat: update document filters"
```

From **this folder**:

```bash
npm run repo:push
```

The script stages, commits (if needed), and pushes to `origin`.

## Clone for teammates

```bash
git clone https://github.com/andreibeno-pandadoc/CLM.git
cd CLM
npm install
npm run dev
```

(`dist/` and `node_modules/` are not committed; CI builds on push.)

## What is not in this repo

- The rest of the CLM workspace on your machine (MCP servers, internal docs, etc.) stays local and can use a **separate private Git remote** if you want it backed up.

## GitHub Pages

Repo **Settings → Pages → Source: GitHub Actions**. Production asset base uses `GITHUB_REPOSITORY` in CI (`vite.config.js`).
