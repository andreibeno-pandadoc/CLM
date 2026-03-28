#!/usr/bin/env bash
# Commit pending changes in this repo and push to origin (team / GitHub Pages).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
COMMIT_MSG="${1:-chore: sync}"

cd "$ROOT"

if [ ! -d .git ]; then
  echo "error: not a git repository" >&2
  exit 1
fi

if ! git remote get-url origin &>/dev/null; then
  echo "error: add origin first, e.g. git remote add origin https://github.com/andreibeno-pandadoc/CLM.git" >&2
  exit 1
fi

git add -A
if git diff --cached --quiet; then
  echo "nothing to commit"
else
  git commit -m "$COMMIT_MSG"
fi

branch="$(git rev-parse --abbrev-ref HEAD)"
git push -u origin "$branch"
