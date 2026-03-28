/**
 * Document Type filter values from sheet “v4n” column B (Document Type).
 * Per-view groupings follow “Nav proposal” column B (Document types included).
 *
 * **views-2 branch:** Service Agreement merged into Contracts; Quotes + Invoices
 * document types merged into Proposals (separate Views removed from nav).
 *
 * v4n: https://docs.google.com/spreadsheets/d/1aXXD9IiQqNQuqG91cyctwy0g0_RE8d-STnv6e929AIk/edit?gid=839752090
 * Nav proposal: https://docs.google.com/spreadsheets/d/1aXXD9IiQqNQuqG91cyctwy0g0_RE8d-STnv6e929AIk/edit?gid=586991472
 */

const uniq = (items) => [...new Set(items)];

/** Contracts: Agreement subtypes except NDA; plus Service Agreement (merged from Service agreements view). */
const AGREEMENT_SUBTYPES_EXCEPT_SERVICE_AND_NDA = [
  'Statement of Work',
  'Amendment Agreement',
  'Partnership Agreement',
  'Collaboration Agreement',
  'Professional Services Agreement',
  'Real Estate Agreement',
  'Rental Agreement',
  'Lease Agreement',
  'Contractor Agreement',
  'Sales Agreement',
  'Sales Commission Agreement',
  'Purchase Agreement',
  'License Agreement',
  'Loan Agreement',
  'Membership Agreement',
  'Subscription Agreement',
  'Enrollment Agreement',
  'Event Agreement',
  'Financial Agreement',
  'Investment Agreement',
  'Franchise Agreement',
  'Termination Agreement',
  'Mediation Agreement',
  'Employment Agreement',
  'Wedding Agreement',
  'Terms of Service Agreement',
  'Affiliate Agreement',
  'Freelance Agreement',
  'Addendum & Amendment Agreement',
  'Settlement Agreement',
  'Sponsorship Agreement',
  'Medical Agreement',
  'Consent Agreement',
  'Release Agreement',
  'Insurance Policy',
  'Donation Agreement',
  'Authorization Agreement',
  'Credit Agreement',
  'Document Management Agreement',
  'Terms and Conditions Agreement',
  'Payment Agreement',
  'Legal & Compliance Agreement',
  'Agreement',
];

/** Proposals — v4n Proposal general type */
const PROPOSAL_SUBTYPES = [
  'Sales Proposal',
  'Project Proposal',
  'Marketing Proposal',
  'Construction Proposal',
  'Loan Proposal',
  'Partnership Proposal',
  'Insurance Proposal',
  'Service Proposal',
  'Investment Proposal',
  'Proposal',
];

/** Quotes — merged into Proposals on views-2 */
const QUOTE_DOC_TYPES = ['Quote', 'Sales Order Form', 'Form', 'Order Form'];

/** Invoices — merged into Proposals on views-2 */
const INVOICE_TYPES = ['Invoice', 'Receipt', 'Payment Agreement'];

/** Forms — All Form subtypes (Nav B8); v4n General Type “Form” B58–B78 */
const FORM_SUBTYPES = [
  'Authorization Form',
  'Application Form',
  'Job Application Form',
  'Onboarding & Employment Form',
  'Business Registration Form',
  'Sales Order Form',
  'Expense Report Form',
  'Registration Form',
  'Taxpayer Identification Form',
  'Order Form',
  'Performance Review Form',
  'Student Application Form',
  'Medical Form',
  'Tax Return Form',
  'Tax Declaration Form',
  'Credit Application Form',
  'Social Security Benefits Application Form',
  'Student Declaration Form',
  'Donation Form',
  'Administrative & Operational Form',
  'Form',
];

const COLLATERAL_TYPES = ['Certificate & Credential', 'Informational & Promotional Material'];

export const DOCUMENT_TYPE_OPTIONS_BY_VIEW = {
  contracts: uniq([...AGREEMENT_SUBTYPES_EXCEPT_SERVICE_AND_NDA, 'Service Agreement']),
  proposals: uniq([...PROPOSAL_SUBTYPES, ...QUOTE_DOC_TYPES, ...INVOICE_TYPES]),
  forms: FORM_SUBTYPES,
  collaterals: COLLATERAL_TYPES,
};
