/**
 * Single source of sample rows for all branches: set `VITE_VIEW_VARIANT` at build/dev time.
 * - main, views-1: full document-type nav (contracts … collaterals)
 * - views-2: merged contracts + service agreements; proposals + quotes + invoices
 * - views-3: team-based nav (sales … procurement)
 */
import { VIEW_SAMPLE_DATA_MAIN, VIEW_SAMPLE_DATA_TEAM } from './viewSampleData.catalog';
import { buildViews2Dataset } from './viewSampleData.mergeViews2';

const VARIANT = import.meta.env.VITE_VIEW_VARIANT || 'main';

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
      cached = VIEW_SAMPLE_DATA_TEAM;
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
