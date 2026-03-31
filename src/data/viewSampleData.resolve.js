/**
 * Single source of sample rows for all branches.
 *
 * Variant selection (first match wins):
 * 1. `import.meta.env.BASE_URL` — Vite embeds `base` (e.g. /CLM/views-3/). Prefer this for
 *    production so the sample data always matches the deployed subpath.
 * 2. `VITE_VIEW_VARIANT` — used when `base` is `/` (local dev) or for explicit overrides.
 *
 * - main: full document-type nav (contracts … Collateral)
 * - views-1: same data as main
 * - views-2: merged contracts + service agreements; proposals + quotes + invoices
 * - views-3: team-based nav (Sales, HR, Legal, …); VIEW_CONFIG switches via BASE_URL
 * - views-4: same data as views-1; Views live under Documents dropdown in the sidebar
 */
import { VIEW_SAMPLE_DATA_MAIN, VIEW_SAMPLE_DATA_TEAM } from './viewSampleData.catalog';
import { buildViews2Dataset } from './viewSampleData.mergeViews2';
import { detectViewVariant } from '../config/viewVariant';

const VARIANT = detectViewVariant();

let cached = null;

function resolveDataset() {
  if (cached) return cached;
  switch (VARIANT) {
    case 'views-1':
    case 'views-4':
      cached = VIEW_SAMPLE_DATA_MAIN;
      break;
    case 'views-2':
      cached = buildViews2Dataset(VIEW_SAMPLE_DATA_MAIN);
      break;
    case 'views-3':
      // Nav uses team view ids only; merge keeps getViewSampleData(teamId) working alongside main keys if needed.
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
