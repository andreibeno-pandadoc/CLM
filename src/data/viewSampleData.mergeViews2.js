/**
 * Builds views-2 nav shape from canonical main data: SA folders/docs under contracts;
 * quotes + invoices folders/docs under proposals.
 */
function withServiceAgreementDocumentTypes(documents) {
  const psaIds = new Set(['sa5', 'sa5b', 'sa5c']);
  return documents.map((d) => {
    if (!d.folder?.startsWith('sa-')) return d;
    const documentType = psaIds.has(d.id)
      ? 'Professional Services Agreement'
      : 'Service Agreement';
    return d.documentType ? d : { ...d, documentType };
  });
}

export function buildViews2Dataset(main) {
  const sa = main['service-agreements'];
  const saDocs = withServiceAgreementDocumentTypes(sa.documents);
  const contracts = {
    folders: [...main.contracts.folders, ...sa.folders],
    documents: [...main.contracts.documents, ...saDocs],
  };
  const proposals = {
    folders: [...main.proposals.folders, ...main.quotes.folders, ...main.invoices.folders],
    documents: [...main.proposals.documents, ...main.quotes.documents, ...main.invoices.documents],
  };
  return {
    contracts,
    proposals,
    ndas: main.ndas,
    forms: main.forms,
    collaterals: main.collaterals,
  };
}
