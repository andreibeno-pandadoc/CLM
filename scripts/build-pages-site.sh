#!/usr/bin/env bash
# One deployable site: main at /CLM/, variants at /CLM/views-1/ … /CLM/views-4/.
#
# All outputs are built from the SAME tree (origin/main). Variants differ only via
# VITE_VIEW_VARIANT + VITE_BASE_PATH (see package.json build:views-*). Do NOT checkout
# origin/views-* branches here — those branches were often stale and shipped old UI/data.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

git fetch origin 2>/dev/null || true

copy_views_proto() {
  local dir="$1"
  cp "${dir}/index.html" "${dir}/views-prototype.html"
}

if git show-ref --verify --quiet refs/remotes/origin/main; then
  ROOT_REF=origin/main
elif git show-ref --verify --quiet refs/remotes/origin/master; then
  ROOT_REF=origin/master
else
  echo "error: need origin/main or origin/master" >&2
  exit 1
fi

echo "== Checkout ${ROOT_REF} (single source for all builds) =="
git checkout -f "$ROOT_REF"

echo "== Install =="
npm ci

echo "== Build main → /CLM/ =="
VITE_BASE_PATH=/CLM/ npm run build
copy_views_proto dist

echo "== Build views-1 → /CLM/views-1/ =="
npm run build:views-1

echo "== Build views-2 → /CLM/views-2/ =="
npm run build:views-2

echo "== Build views-3 → /CLM/views-3/ =="
npm run build:views-3

echo "== Build views-4 → /CLM/views-4/ =="
npm run build:views-4

echo "== Done =="
