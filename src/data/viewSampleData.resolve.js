/**
 * Single source of sample rows for all branches.
 *
 * Variant selection (first match wins):
 * 1. `import.meta.env.BASE_URL` — Vite embeds `base` (e.g. /CLM/views-3/). Prefer this for
 *    production so the sample data always matches the deployed subpath.
 * 2. `VITE_VIEW_VARIANT` — used when `base` is `/` (local dev) or for explicit overrides.
 *
 * - main: full document-type nav (contracts … collaterals)
 * - views-1: same data as main
 * - views-2: merged contracts + service agreements; proposals + quotes + invoices
 * - views-3: team-based nav (sales … procurement)
 */
import { VIEW_SAMPLE_DATA_MAIN, VIEW_SAMPLE_DATA_TEAM } from './viewSampleData.catalog';
import { buildViews2Dataset } from './viewSampleData.mergeViews2';

function detectViewVariant() {
  const base = import.meta.env.BASE_URL || '';
  if (base.includes('views-3')) return 'views-3';
  if (base.includes('views-2')) return 'views-2';
  if (base.includes('views-1')) return 'views-1';
  const explicit = import.meta.env.VITE_VIEW_VARIANT;
  if (explicit != null && String(explicit).trim() !== '') {
    return String(explicit).trim();
  }
  return 'main';
}

const VARIANT = detectViewVariant();

let cached = null;

function resolveDataset() {
  if (cached) return cached;
  switch (VARIANT) {
    case 'views-1':
      cached = VIEW_SAMPLE_DATA_MAIN;
      break;
    case 'views-2':
      cached = buildViews2Dataset(VIEW_SAMPLE_DATA_MAIN);
      break;
    case 'views-3':
      // Team keys (sales, hr, …) plus document-type keys from main (contracts, …).
      // TEAM alone has no `contracts` — nav still uses VIEW_CONFIG ids, so merge both.
      cached = { ...VIEW_SAMPLE_DATA_MAIN, ...VIEW_SAMPLE_DATA_TEAM };
      break;
    case 'main':
    default:
      cached = VIEW_SAMPLE_DATA_MAIN;
      break;
  }
  return cached;
}

export function getViewSampleDataset() {
  return resolveDataset();
}
