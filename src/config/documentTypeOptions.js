/**
 * views-3: Document Type filter options per team (sheet column B).
 * Team-based IA: https://docs.google.com/spreadsheets/d/1aXXD9IiQqNQuqG91cyctwy0g0_RE8d-STnv6e929AIk/edit?gid=136773082
 */

/** Sales — column B (Document types included) */
const SALES_DOC_TYPES = [
  'Addendum & Amendment Agreement',
  'Amendment Agreement',
  'Business Letter',
  'Construction Proposal',
  'Enrollment Agreement',
  'Insurance Proposal',
  'License Agreement',
  'Loan Proposal',
  'Membership Agreement',
  'Order Form',
  'Partnership Proposal',
  'Professional Services Agreement',
  'Project Proposal',
  'Proposal',
  'Quote',
  'Sales Agreement',
  'Sales Commission Agreement',
  'Sales Order Form',
  'Sales Proposal',
  'Service Agreement',
  'Service Proposal',
  'Statement of Work',
  'Subscription Agreement',
  'Termination Agreement',
];

/** HR */
const HR_DOC_TYPES = [
  'Attendance Policy',
  'Certificate & Credential',
  'Contractor Agreement',
  'Employee Handbook',
  'Employee Policy',
  'Employment Agreement',
  'Employment Policy',
  'Employment Termination Notice',
  'Freelance Agreement',
  'Handbook',
  'Healthcare Policy',
  'Job Application Form',
  'Job Description',
  'Job Offer Letter',
  'Medical Form',
  'Onboarding & Employment Form',
  'Performance Review Form',
  'Social Security Benefits Application Form',
  'Student Application Form',
  'Student Declaration Form',
];

/** Legal */
const LEGAL_DOC_TYPES = [
  'Agreement',
  'Authorization Agreement',
  'Company Policy',
  'Consent Agreement',
  'Document Management Agreement',
  'Formal Complaint Letter',
  'Health and Safety Policy',
  'Lease Agreement',
  'Legal & Compliance Agreement',
  'Letter',
  'Mediation Agreement',
  'Medical Agreement',
  'Meeting Minutes',
  'Non-Disclosure Agreement',
  'Notice',
  'Official Letter',
  'Policy',
  'Real Estate Agreement',
  'Release Agreement',
  'Rental Agreement',
  'Settlement Agreement',
  'Terms and Conditions Agreement',
  'Terms of Service Agreement',
  'Wedding Agreement',
];

/** Finance */
const FINANCE_DOC_TYPES = [
  'Credit Agreement',
  'Credit Application Form',
  'Debt Collection Notice',
  'Donation Agreement',
  'Donation Form',
  'Expense Report Form',
  'Financial Agreement',
  'Financial Report',
  'Insurance Policy',
  'Investment Agreement',
  'Investment Proposal',
  'Invoice',
  'Loan Agreement',
  'Payment Agreement',
  'Receipt',
  'Tax Declaration Form',
  'Tax Engagement Letter',
  'Tax Return Form',
  'Taxpayer Identification Form',
];

/** Marketing */
const MARKETING_DOC_TYPES = [
  'Affiliate Agreement',
  'Business Plan',
  'Event Agreement',
  'Informational & Promotional Material',
  'Marketing Proposal',
  'Project Plan',
  'Registration Form',
  'Sponsorship Agreement',
];

/** Procurement */
const PROCUREMENT_DOC_TYPES = [
  'Administrative & Operational Form',
  'Application Form',
  'Authorization Form',
  'Business Registration Form',
  'Collaboration Agreement',
  'Form',
  'Franchise Agreement',
  'Inspection Report',
  'Other',
  'Partnership Agreement',
  'Purchase Agreement',
  'Report',
];

export const DOCUMENT_TYPE_OPTIONS_BY_VIEW = {
  sales: SALES_DOC_TYPES,
  hr: HR_DOC_TYPES,
  legal: LEGAL_DOC_TYPES,
  finance: FINANCE_DOC_TYPES,
  marketing: MARKETING_DOC_TYPES,
  procurement: PROCUREMENT_DOC_TYPES,
};
