#!/usr/bin/env bash
# One deployable site: main at /CLM/, variants at /CLM/views-1/ … /CLM/views-3/.
# Site root always comes from origin/main (or origin/master); variants from their branches.
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

echo "== Site root from ${ROOT_REF} → /CLM/ =="
git checkout -f "$ROOT_REF"

echo "== Install & build main =="
npm ci
VITE_VIEW_VARIANT=main VITE_BASE_PATH=/CLM/ npm run build
copy_views_proto dist

VARIANTS=(views-1 views-2 views-3)

for variant in "${VARIANTS[@]}"; do
  if ! git show-ref --verify --quiet "refs/remotes/origin/${variant}"; then
    echo "warning: origin/${variant} missing — skip (create branch and push)"
    continue
  fi

  echo "== Build ${variant} from origin/${variant} → /CLM/${variant}/ =="
  git checkout -f "origin/${variant}"

  npm ci
  out="dist/${variant}"
  rm -rf "$out"
  VITE_VIEW_VARIANT="${variant}" VITE_BASE_PATH="/CLM/${variant}/" npx vite build --outDir "$out"
  copy_views_proto "$out"
done

git checkout -f "$ROOT_REF"

echo "== Done =="
