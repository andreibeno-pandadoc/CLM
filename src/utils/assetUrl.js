/**
 * Public asset URLs that work with Vite `base` (e.g. /CLM/ on GitHub Pages).
 * Prefer this over hardcoded `/CLM/...` paths.
 */
export function assetUrl(path) {
  const base = import.meta.env.BASE_URL || '/';
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${normalized}`.replace(/([^:])\/{2,}/g, '$1/');
}
