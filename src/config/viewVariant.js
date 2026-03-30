/**
 * Build / runtime variant for GitHub Pages paths and local dev.
 * Keep in sync with viewSampleData.resolve.js (single source for nav + sample data).
 */
export function detectViewVariant() {
  const base = import.meta.env.BASE_URL || '';
  if (base.includes('views-3')) return 'views-3';
  if (base.includes('views-2')) return 'views-2';
  if (base.includes('views-4')) return 'views-4';
  if (base.includes('views-1')) return 'views-1';
  const explicit = import.meta.env.VITE_VIEW_VARIANT;
  if (explicit != null && String(explicit).trim() !== '') {
    return String(explicit).trim();
  }
  return 'main';
}
