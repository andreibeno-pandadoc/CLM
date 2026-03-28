/**
 * View-specific sample documents: data lives in viewSampleData.catalog.js; variant from VITE_VIEW_VARIANT.
 */
import { getViewSampleDataset } from './viewSampleData.resolve';

export function getViewSampleData(viewId) {
  const data = getViewSampleDataset()[viewId];
  if (!data) return { documents: [], folders: [] };
  return data;
}
