// Per-view config: Filters from “Nav proposal” column D; document-type values from “v4n” column B grouped per Nav column B.
// Nav: https://docs.google.com/spreadsheets/d/1aXXD9IiQqNQuqG91cyctwy0g0_RE8d-STnv6e929AIk/edit?gid=586991472
// v4n: https://docs.google.com/spreadsheets/d/1aXXD9IiQqNQuqG91cyctwy0g0_RE8d-STnv6e929AIk/edit?gid=839752090
// filterIds map to FilterBar: document-type, date, status, owner, recipients, amount, renewal-date, completion-date, due-date, date-sent, payment-status, etc.
//
// View icons match Figma “Views” nav (file ev8QrglqV7b7BNYKSBUUrs, node 1878:22195): SVGs in public/view-icons/ (exported from Figma MCP assets).
import { assetUrl } from '../utils/assetUrl';
import { detectViewVariant } from './viewVariant';

const viewIcon = (file) => assetUrl(`view-icons/${file}.svg`);

export {
  DOCUMENT_TYPE_OPTIONS_BY_VIEW,
  DOCUMENT_TYPE_OPTIONS_BY_TEAM,
  getDocumentTypeOptionsForView,
} from './documentTypeOptions';

/** Matches keys from buildViews2Dataset() — no separate service-agreements / quotes / invoices nav */
const VIEWS_2_NAV_IDS = ['contracts', 'proposals', 'ndas', 'forms', 'collaterals'];

function buildViewConfig() {
  const variant = detectViewVariant();
  if (variant === 'views-3') return TEAM_VIEW_CONFIG;
  if (variant === 'views-2') {
    return Object.fromEntries(VIEWS_2_NAV_IDS.map((id) => [id, DOCUMENT_VIEW_CONFIG[id]]));
  }
  // views-4, views-1, main: full document-type Views (views-4 nests them under Documents in the sidebar)
  return DOCUMENT_VIEW_CONFIG;
}

const DOCUMENT_VIEW_CONFIG = {
  contracts: {
    title: 'Contracts',
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
  'service-agreements': {
    title: 'Service agreements',
    ctaLabel: 'Service agreement',
    filters: [
      'Date',
      'Status (Draft / Sent / Completed / etc)',
      'Completion date',
      'Expiry / renewal date',
    ],
    filterIds: ['date', 'status', 'completion-date', 'renewal-date'],
    iconSrc: viewIcon('service-agreements'),
  },
  proposals: {
    title: 'Proposals',
    ctaLabel: 'Proposal',
    filters: ['Document Type', 'Date', 'Status', 'Owner', 'Counterparty', 'Contract value'],
    filterIds: ['document-type', 'date', 'status', 'owner', 'recipients', 'amount'],
    iconSrc: viewIcon('proposals'),
  },
  quotes: {
    title: 'Quotes',
    ctaLabel: 'Quote',
    filters: ['Document Type', 'Date', 'Status', 'Owner', 'Counterparty', 'Contract value'],
    filterIds: ['document-type', 'date', 'status', 'owner', 'recipients', 'amount'],
    iconSrc: viewIcon('quotes'),
  },
  ndas: {
    title: 'NDAs',
    ctaLabel: 'NDA',
    filters: ['Date', 'Status (Draft / Sent / Completed / etc)', 'Counterparty'],
    filterIds: ['date', 'status', 'recipients'],
    iconSrc: viewIcon('ndas'),
  },
  invoices: {
    title: 'Invoices',
    ctaLabel: 'Invoice',
    filters: [
      'Document Type',
      'Date',
      'Status',
      'Payment status (Unpaid / Partially paid / Paid)',
      'Due date',
      'Date sent',
    ],
    filterIds: ['document-type', 'date', 'status', 'payment-status', 'due-date', 'date-sent'],
    iconSrc: viewIcon('invoices'),
  },
  forms: {
    title: 'Forms',
    ctaLabel: 'Form',
    filters: ['Document Type', 'Status (Draft / Sent / Completed / etc)'],
    filterIds: ['document-type', 'status'],
    iconSrc: null, // not in that Figma frame; use ViewIcons.jsx
  },
  collaterals: {
    title: 'Collateral',
    ctaLabel: 'Collateral',
    filters: ['Document Type'],
    filterIds: ['document-type'],
    iconSrc: viewIcon('collaterals'),
  },
};

/** GitHub Pages /views-3/: team-based nav (sample data keys in VIEW_SAMPLE_DATA_TEAM) */
const TEAM_VIEW_CONFIG = {
  sales: {
    title: 'Sales',
    ctaLabel: 'Document',
    filters: ['Document Type', 'Date', 'Status', 'Owner', 'Counterparty', 'Contract value'],
    filterIds: ['document-type', 'date', 'status', 'owner', 'recipients', 'amount'],
    iconSrc: viewIcon('proposals'),
  },
  hr: {
    title: 'HR',
    ctaLabel: 'Document',
    filters: ['Document Type', 'Date', 'Status', 'Owner', 'Counterparty'],
    filterIds: ['document-type', 'date', 'status', 'owner', 'recipients'],
    iconSrc: viewIcon('service-agreements'),
  },
  legal: {
    title: 'Legal',
    ctaLabel: 'Document',
    filters: ['Document Type', 'Date', 'Status', 'Owner', 'Counterparty'],
    filterIds: ['document-type', 'date', 'status', 'owner', 'recipients'],
    iconSrc: viewIcon('ndas'),
  },
  finance: {
    title: 'Finance',
    ctaLabel: 'Document',
    filters: [
      'Document Type',
      'Date',
      'Status',
      'Payment status (Unpaid / Partially paid / Paid)',
      'Due date',
      'Date sent',
    ],
    filterIds: ['document-type', 'date', 'status', 'payment-status', 'due-date', 'date-sent'],
    iconSrc: viewIcon('invoices'),
  },
  marketing: {
    title: 'Marketing',
    ctaLabel: 'Document',
    filters: ['Document Type', 'Date', 'Status', 'Owner', 'Counterparty', 'Contract value'],
    filterIds: ['document-type', 'date', 'status', 'owner', 'recipients', 'amount'],
    iconSrc: viewIcon('collaterals'),
  },
  procurement: {
    title: 'Procurement',
    ctaLabel: 'Document',
    filters: ['Document Type', 'Date', 'Status', 'Owner', 'Counterparty', 'Contract value'],
    filterIds: ['document-type', 'date', 'status', 'owner', 'recipients', 'amount'],
    iconSrc: viewIcon('contracts'),
  },
};

export const VIEW_CONFIG = buildViewConfig();
export const VIEW_IDS = Object.keys(VIEW_CONFIG);
