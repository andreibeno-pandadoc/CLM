// views-3: Team-based views (sheet column A) and filters (column D); document types from column B.
// https://docs.google.com/spreadsheets/d/1aXXD9IiQqNQuqG91cyctwy0g0_RE8d-STnv6e929AIk/edit?gid=136773082
//
// Icons reuse view-1 assets: sales→proposals, hr→service-agreements, legal→ndas, finance→invoices,
// marketing→collaterals, procurement→contracts (see ViewIcons.jsx for React fallbacks).
import { assetUrl } from '../utils/assetUrl';

const viewIcon = (file) => assetUrl(`view-icons/${file}.svg`);

export { DOCUMENT_TYPE_OPTIONS_BY_VIEW } from './documentTypeOptions';

export const VIEW_CONFIG = {
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
    filters: ['Document Type', 'Date', 'Status', 'Owner', 'Employee or candidate', 'Role / department'],
    filterIds: ['document-type', 'date', 'status', 'owner', 'recipients'],
    iconSrc: viewIcon('service-agreements'),
  },
  legal: {
    title: 'Legal',
    ctaLabel: 'Document',
    filters: ['Document Type', 'Date', 'Status', 'Counterparty', 'Jurisdiction / matter (optional)'],
    filterIds: ['document-type', 'date', 'status', 'recipients'],
    iconSrc: viewIcon('ndas'),
  },
  finance: {
    title: 'Finance',
    ctaLabel: 'Document',
    filters: [
      'Document Type',
      'Date',
      'Status',
      'Payment status',
      'Due date',
      'Amount',
    ],
    filterIds: ['document-type', 'date', 'status', 'payment-status', 'due-date', 'amount'],
    iconSrc: viewIcon('invoices'),
  },
  marketing: {
    title: 'Marketing',
    ctaLabel: 'Document',
    filters: ['Document Type', 'Date', 'Status', 'Owner', 'Program / campaign (optional)'],
    filterIds: ['document-type', 'date', 'status', 'owner'],
    iconSrc: viewIcon('collaterals'),
  },
  procurement: {
    title: 'Procurement',
    ctaLabel: 'Document',
    filters: ['Document Type', 'Date', 'Status', 'Owner', 'Vendor or partner'],
    filterIds: ['document-type', 'date', 'status', 'owner', 'recipients'],
    iconSrc: viewIcon('contracts'),
  },
};

export const VIEW_IDS = Object.keys(VIEW_CONFIG);
