// Per-view config: View × Filters from IA Proposal Taxonomy.csv
// filterIds map to FilterBar: date, status, owner, recipients, amount, renewal-date, completion-date, due-date, date-sent, payment-status, etc.
//
// View icons match Figma “Views” nav (file ev8QrglqV7b7BNYKSBUUrs, node 1878:22195): SVGs in public/view-icons/ (exported from Figma MCP assets).
import { assetUrl } from '../utils/assetUrl';

const viewIcon = (file) => assetUrl(`view-icons/${file}.svg`);

export const VIEW_CONFIG = {
  contracts: {
    title: 'Contracts',
    ctaLabel: 'Contract',
    filters: ['Date', 'Status (Draft / Sent / Completed / etc)', 'Completion date', 'Expiry / renewal date'],
    filterIds: ['date', 'status', 'completion-date', 'renewal-date'],
    iconSrc: viewIcon('contracts'),
  },
  'service-agreements': {
    title: 'Service agreements',
    ctaLabel: 'Service agreement',
    filters: ['Date', 'Status (Draft / Sent / Completed / etc)', 'Completion date', 'Expiry / renewal date'],
    filterIds: ['date', 'status', 'completion-date', 'renewal-date'],
    iconSrc: viewIcon('service-agreements'),
  },
  proposals: {
    title: 'Proposals',
    ctaLabel: 'Proposal',
    filters: ['Date', 'Status', 'Owner', 'Counterparty', 'Contract value'],
    filterIds: ['date', 'status', 'owner', 'recipients', 'amount'],
    iconSrc: viewIcon('proposals'),
  },
  quotes: {
    title: 'Quotes',
    ctaLabel: 'Quote',
    filters: ['Date', 'Status', 'Owner', 'Counterparty', 'Contract value'],
    filterIds: ['date', 'status', 'owner', 'recipients', 'amount'],
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
    filters: ['Date', 'Status', 'Payment status (Unpaid / Partially paid / Paid)', 'Due date', 'Date sent'],
    filterIds: ['date', 'status', 'payment-status', 'due-date', 'date-sent'],
    iconSrc: viewIcon('invoices'),
  },
  forms: {
    title: 'Forms',
    ctaLabel: 'Form',
    filters: ['Status (Draft / Sent / Completed / etc)'],
    filterIds: ['status'],
    iconSrc: null, // not in that Figma frame; use ViewIcons.jsx
  },
  collaterals: {
    title: 'Collaterals',
    ctaLabel: 'Collateral',
    filters: [],
    filterIds: [],
    iconSrc: viewIcon('collaterals'),
  },
};

export const VIEW_IDS = Object.keys(VIEW_CONFIG);
