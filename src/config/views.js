// Per-view config: Filters from “Nav proposal” column D; document-type values from “v4n” column B grouped per Nav column B.
// Nav: https://docs.google.com/spreadsheets/d/1aXXD9IiQqNQuqG91cyctwy0g0_RE8d-STnv6e929AIk/edit?gid=586991472
// v4n: https://docs.google.com/spreadsheets/d/1aXXD9IiQqNQuqG91cyctwy0g0_RE8d-STnv6e929AIk/edit?gid=839752090
// filterIds map to FilterBar: document-type, date, status, owner, recipients, amount, renewal-date, completion-date, due-date, date-sent, payment-status, etc.
//
// View icons match Figma “Views” nav (file ev8QrglqV7b7BNYKSBUUrs, node 1878:22195): SVGs in public/view-icons/ (exported from Figma MCP assets).
import { assetUrl } from '../utils/assetUrl';

const viewIcon = (file) => assetUrl(`view-icons/${file}.svg`);

export { DOCUMENT_TYPE_OPTIONS_BY_VIEW } from './documentTypeOptions';

export const VIEW_CONFIG = {
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
    title: 'Collaterals',
    ctaLabel: 'Collateral',
    filters: ['Document Type'],
    filterIds: ['document-type'],
    iconSrc: viewIcon('collaterals'),
  },
};

export const VIEW_IDS = Object.keys(VIEW_CONFIG);
