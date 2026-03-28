// Per-view config: Filters from “Nav proposal” column D; document-type values from “v4n” column B.
// **views-2 branch:** Service agreements merged into Contracts; Quotes + Invoices merged into Proposals (nav).
// Nav: https://docs.google.com/spreadsheets/d/1aXXD9IiQqNQuqG91cyctwy0g0_RE8d-STnv6e929AIk/edit?gid=586991472
// v4n: https://docs.google.com/spreadsheets/d/1aXXD9IiQqNQuqG91cyctwy0g0_RE8d-STnv6e929AIk/edit?gid=839752090
//
// View icons match Figma “Views” nav (file ev8QrglqV7b7BNYKSBUUrs, node 1878:22195): SVGs in public/view-icons/ (exported from Figma MCP assets).
import { assetUrl } from '../utils/assetUrl';

const viewIcon = (file) => assetUrl(`view-icons/${file}.svg`);

export { DOCUMENT_TYPE_OPTIONS_BY_VIEW } from './documentTypeOptions';

export const VIEW_CONFIG = {
  contracts: {
    title: 'Contracts & service agreements',
    ctaLabel: 'Contract',
    filters: [
      'Document Type',
      'Date',
      'Status (Draft / Sent / Completed / etc)',
      'Completion date',
      'Expiry / renewal date',
    ],
    filterIds: ['document-type', 'date', 'status', 'completion-date', 'renewal-date'],
    iconSrc: viewIcon('contracts'),
  },
  proposals: {
    title: 'Proposals, quotes & invoices',
    ctaLabel: 'Proposal',
    filters: ['Document Type', 'Date', 'Status', 'Owner', 'Counterparty', 'Contract value'],
    filterIds: ['document-type', 'date', 'status', 'owner', 'recipients', 'amount'],
    iconSrc: viewIcon('proposals'),
  },
  ndas: {
    title: 'NDAs',
    ctaLabel: 'NDA',
    filters: ['Date', 'Status (Draft / Sent / Completed / etc)', 'Counterparty'],
    filterIds: ['date', 'status', 'recipients'],
    iconSrc: viewIcon('ndas'),
  },
  forms: {
    title: 'Forms',
    ctaLabel: 'Form',
    filters: ['Document Type', 'Status (Draft / Sent / Completed / etc)'],
    filterIds: ['document-type', 'status'],
    iconSrc: null,
  },
  collaterals: {
    title: 'Collaterals',
    ctaLabel: 'Collateral',
    filters: ['Document Type'],
    filterIds: ['document-type'],
    iconSrc: viewIcon('collaterals'),
  },
};

export const VIEW_IDS = Object.keys(VIEW_CONFIG);
