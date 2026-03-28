/**
 * views-3: Sample folders/documents per team view (documentType matches sheet column B).
 * Every folder has at least three documents; names align with team document-type lists.
 */
import { assetUrl } from '../utils/assetUrl';

const profileAvatar = assetUrl('images/user-profile.png');
const avatar = (n) => assetUrl(`images/${n}.png`);

const baseDoc = (overrides) => ({
  avatar: avatar(1),
  autoRenew: false,
  ...overrides,
});

export function getViewSampleData(viewId) {
  const data = VIEW_SAMPLE_DATA[viewId];
  if (!data) return { documents: [], folders: [] };
  return data;
}

const VIEW_SAMPLE_DATA = {
  sales: {
    folders: [
      { id: 'sales-deals', name: 'Active deals', itemCount: 4, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'sales-renewals', name: 'Renewals', itemCount: 4, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
      { id: 'sales-partners', name: 'Partners & channel', itemCount: 3, avatar: profileAvatar, created: 'Sep 1, 2024', documents: [] },
    ],
    documents: [
      baseDoc({ id: 's1', name: 'Sales Proposal — CloudSync renewal', documentType: 'Sales Proposal', participants: 'Alex Martinez', status: 'Sent', amount: '$245,000.00', created: 'Dec 1, 2024', folder: 'sales-deals' }),
      baseDoc({ id: 's2', name: 'Quote — Enterprise license package', documentType: 'Quote', participants: 'Mike Chen', status: 'Draft', amount: '$89,500.00', created: 'Oct 28, 2024', folder: 'sales-deals' }),
      baseDoc({ id: 's2b', name: 'Project Proposal — Analytics upsell', documentType: 'Project Proposal', participants: 'Sarah Johnson', status: 'Awaiting approval', amount: '$132,000.00', created: 'Jan 12, 2025', folder: 'sales-deals' }),
      baseDoc({ id: 's2c', name: 'Business Letter — Pricing exception', documentType: 'Business Letter', participants: 'Will Holland', status: 'Sent', amount: '$0.00', created: 'Jan 18, 2025', folder: 'sales-deals' }),
      baseDoc({ id: 's3', name: 'Service Agreement — Implementation SOW', documentType: 'Service Agreement', participants: 'Sarah Johnson', status: 'Completed', amount: '$125,000.00', created: 'Nov 15, 2024', folder: 'sales-renewals' }),
      baseDoc({ id: 's3b', name: 'Subscription Agreement — FY renewal', documentType: 'Subscription Agreement', participants: 'Alex Martinez', status: 'Sent', amount: '$198,000.00', created: 'Dec 20, 2024', folder: 'sales-renewals' }),
      baseDoc({ id: 's3c', name: 'Amendment Agreement — Seat expansion', documentType: 'Amendment Agreement', participants: 'Mike Chen', status: 'Draft', amount: '$44,000.00', created: 'Feb 2, 2025', folder: 'sales-renewals' }),
      baseDoc({ id: 's3d', name: 'Statement of Work — Managed rollout', documentType: 'Statement of Work', participants: 'Sarah Johnson', status: 'Completed', amount: '$310,000.00', created: 'Nov 8, 2024', folder: 'sales-renewals' }),
      baseDoc({ id: 's5', name: 'Partnership Proposal — Co-sell', documentType: 'Partnership Proposal', participants: 'Alliances', status: 'Sent', amount: '$0.00', created: 'Oct 15, 2024', folder: 'sales-partners' }),
      baseDoc({ id: 's5b', name: 'License Agreement — OEM embed', documentType: 'License Agreement', participants: 'Legal', status: 'Awaiting approval', amount: '$500,000.00', created: 'Jan 5, 2025', folder: 'sales-partners' }),
      baseDoc({ id: 's5c', name: 'Sales Commission Agreement — FY plan', documentType: 'Sales Commission Agreement', participants: 'Finance', status: 'Completed', amount: '$0.00', created: 'Dec 1, 2024', folder: 'sales-partners' }),
      baseDoc({ id: 's4', name: 'Order Form — Add-on seats Q1', documentType: 'Order Form', participants: 'Will Holland', status: 'Awaiting approval', amount: '$18,200.00', created: 'Jan 8, 2025' }),
      baseDoc({ id: 's6', name: 'Construction Proposal — Retail rollout', documentType: 'Construction Proposal', participants: 'Facilities', status: 'Draft', amount: '$890,000.00', created: 'Jan 22, 2025' }),
    ],
  },

  hr: {
    folders: [
      { id: 'hr-offers', name: 'Offers & hiring', itemCount: 4, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'hr-policies', name: 'Policies', itemCount: 4, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
      { id: 'hr-benefits', name: 'Benefits & medical', itemCount: 3, avatar: profileAvatar, created: 'Jan 5, 2025', documents: [] },
    ],
    documents: [
      baseDoc({ id: 'h1', name: 'Job Offer Letter — Senior PM', documentType: 'Job Offer Letter', participants: 'People Ops', status: 'Sent', amount: '', created: 'Jan 4, 2025', folder: 'hr-offers' }),
      baseDoc({ id: 'h2', name: 'Onboarding & Employment Form — New hire packet', documentType: 'Onboarding & Employment Form', participants: 'HR', status: 'Completed', amount: '', created: 'Dec 12, 2024', folder: 'hr-offers' }),
      baseDoc({ id: 'h2b', name: 'Employment Agreement — IC to FTE', documentType: 'Employment Agreement', participants: 'Legal', status: 'Awaiting approval', amount: '', created: 'Jan 15, 2025', folder: 'hr-offers' }),
      baseDoc({ id: 'h2c', name: 'Job Description — Staff engineer', documentType: 'Job Description', participants: 'Recruiting', status: 'Draft', amount: '', created: 'Feb 1, 2025', folder: 'hr-offers' }),
      baseDoc({ id: 'h3', name: 'Employee Handbook 2025', documentType: 'Employee Handbook', participants: 'Legal', status: 'Draft', amount: '', created: 'Nov 20, 2024', folder: 'hr-policies' }),
      baseDoc({ id: 'h3b', name: 'Attendance Policy — Remote & hybrid', documentType: 'Attendance Policy', participants: 'People Ops', status: 'Sent', amount: '', created: 'Dec 8, 2024', folder: 'hr-policies' }),
      baseDoc({ id: 'h3c', name: 'Employee Policy — AI usage', documentType: 'Employee Policy', participants: 'Legal', status: 'Completed', amount: '', created: 'Jan 9, 2025', folder: 'hr-policies' }),
      baseDoc({ id: 'h3d', name: 'Healthcare Policy — Open enrollment', documentType: 'Healthcare Policy', participants: 'Benefits', status: 'Sent', amount: '', created: 'Nov 28, 2024', folder: 'hr-policies' }),
      baseDoc({ id: 'h5', name: 'Medical Form — Benefits enrollment', documentType: 'Medical Form', participants: 'Payroll', status: 'Completed', amount: '', created: 'Jan 2, 2025', folder: 'hr-benefits' }),
      baseDoc({ id: 'h5b', name: 'Certificate & Credential — Training complete', documentType: 'Certificate & Credential', participants: 'L&D', status: 'Completed', amount: '', created: 'Dec 18, 2024', folder: 'hr-benefits' }),
      baseDoc({ id: 'h5c', name: 'Social Security Benefits Application Form', documentType: 'Social Security Benefits Application Form', participants: 'Payroll', status: 'Draft', amount: '', created: 'Jan 20, 2025', folder: 'hr-benefits' }),
      baseDoc({ id: 'h4', name: 'Contractor Agreement — Design contractor', documentType: 'Contractor Agreement', participants: 'Procurement', status: 'Completed', amount: '$96,000.00', created: 'Oct 1, 2024' }),
      baseDoc({ id: 'h6', name: 'Freelance Agreement — Content sprint', documentType: 'Freelance Agreement', participants: 'Marketing', status: 'Sent', amount: '$18,000.00', created: 'Jan 11, 2025' }),
    ],
  },

  legal: {
    folders: [
      { id: 'legal-nda', name: 'NDAs', itemCount: 4, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'legal-lease', name: 'Real estate', itemCount: 3, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
      { id: 'legal-governance', name: 'Policies & terms', itemCount: 3, avatar: profileAvatar, created: 'Aug 1, 2024', documents: [] },
    ],
    documents: [
      baseDoc({ id: 'l1', name: 'Non-Disclosure Agreement — Vendor evaluation', documentType: 'Non-Disclosure Agreement', participants: 'Legal', status: 'Completed', amount: '', created: 'Jan 2, 2025', folder: 'legal-nda' }),
      baseDoc({ id: 'l2', name: 'Settlement Agreement — Dispute 2024-14', documentType: 'Settlement Agreement', participants: 'Outside counsel', status: 'Signed', amount: '', created: 'Dec 8, 2024', folder: 'legal-nda' }),
      baseDoc({ id: 'l2b', name: 'Mediation Agreement — Vendor claim', documentType: 'Mediation Agreement', participants: 'Legal', status: 'Sent', amount: '', created: 'Nov 25, 2024', folder: 'legal-nda' }),
      baseDoc({ id: 'l2c', name: 'Release Agreement — Exit package', documentType: 'Release Agreement', participants: 'HR', status: 'Draft', amount: '', created: 'Jan 16, 2025', folder: 'legal-nda' }),
      baseDoc({ id: 'l3', name: 'Lease Agreement — HQ extension', documentType: 'Lease Agreement', participants: 'Facilities', status: 'Awaiting approval', amount: '', created: 'Nov 18, 2024', folder: 'legal-lease' }),
      baseDoc({ id: 'l3b', name: 'Rental Agreement — SF satellite', documentType: 'Rental Agreement', participants: 'Facilities', status: 'Completed', amount: '', created: 'Oct 30, 2024', folder: 'legal-lease' }),
      baseDoc({ id: 'l3c', name: 'Real Estate Agreement — London hub', documentType: 'Real Estate Agreement', participants: 'Legal', status: 'Sent', amount: '', created: 'Dec 12, 2024', folder: 'legal-lease' }),
      baseDoc({ id: 'l5', name: 'Terms of Service Agreement — Product', documentType: 'Terms of Service Agreement', participants: 'Product Legal', status: 'Draft', amount: '', created: 'Sep 30, 2024', folder: 'legal-governance' }),
      baseDoc({ id: 'l5b', name: 'Company Policy — Data retention', documentType: 'Company Policy', participants: 'Compliance', status: 'Sent', amount: '', created: 'Jan 7, 2025', folder: 'legal-governance' }),
      baseDoc({ id: 'l5c', name: 'Consent Agreement — Marketing comms', documentType: 'Consent Agreement', participants: 'Privacy', status: 'Completed', amount: '', created: 'Nov 14, 2024', folder: 'legal-governance' }),
      baseDoc({ id: 'l4', name: 'Authorization Agreement — Subprocessor', documentType: 'Authorization Agreement', participants: 'Security', status: 'Awaiting approval', amount: '', created: 'Jan 25, 2025' }),
    ],
  },

  finance: {
    folders: [
      { id: 'fin-invoices', name: 'Invoices & receipts', itemCount: 4, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'fin-tax', name: 'Tax & filings', itemCount: 3, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
      { id: 'fin-capital', name: 'Capital & lending', itemCount: 3, avatar: profileAvatar, created: 'Jul 1, 2024', documents: [] },
    ],
    documents: [
      baseDoc({ id: 'fi1', name: 'Invoice #INV-2025-0102 — Acme Corp', documentType: 'Invoice', participants: 'AR', status: 'Sent', amount: '$42,300.00', created: 'Jan 6, 2025', folder: 'fin-invoices', paymentStatus: 'Unpaid' }),
      baseDoc({ id: 'fi2', name: 'Receipt — Conference sponsorship', documentType: 'Receipt', participants: 'Finance', status: 'Completed', amount: '$15,000.00', created: 'Dec 3, 2024', folder: 'fin-invoices', paymentStatus: 'Paid' }),
      baseDoc({ id: 'fi2b', name: 'Payment Agreement — Installment plan', documentType: 'Payment Agreement', participants: 'Sarah Johnson', status: 'Sent', amount: '$240,000.00', created: 'Nov 19, 2024', folder: 'fin-invoices', paymentStatus: 'Partially paid' }),
      baseDoc({ id: 'fi2c', name: 'Debt Collection Notice — Past due', documentType: 'Debt Collection Notice', participants: 'AR', status: 'Sent', amount: '$0.00', created: 'Jan 14, 2025', folder: 'fin-invoices', paymentStatus: 'Unpaid' }),
      baseDoc({ id: 'fi3', name: 'Tax Return Form — FY2024', documentType: 'Tax Return Form', participants: 'Tax', status: 'Draft', amount: '', created: 'Jan 12, 2025', folder: 'fin-tax' }),
      baseDoc({ id: 'fi3b', name: 'Tax Declaration Form — Remote workers', documentType: 'Tax Declaration Form', participants: 'Payroll', status: 'Completed', amount: '', created: 'Dec 1, 2024', folder: 'fin-tax' }),
      baseDoc({ id: 'fi3c', name: 'Tax Engagement Letter — Advisory', documentType: 'Tax Engagement Letter', participants: 'CFO', status: 'Sent', amount: '', created: 'Nov 8, 2024', folder: 'fin-tax' }),
      baseDoc({ id: 'fi4', name: 'Investment Agreement — Series notes', documentType: 'Investment Agreement', participants: 'CFO', status: 'Sent', amount: '$2,000,000.00', created: 'Nov 1, 2024', folder: 'fin-capital' }),
      baseDoc({ id: 'fi4b', name: 'Loan Agreement — Revolver extension', documentType: 'Loan Agreement', participants: 'Treasury', status: 'Awaiting approval', amount: '$10,000,000.00', created: 'Jan 3, 2025', folder: 'fin-capital' }),
      baseDoc({ id: 'fi4c', name: 'Credit Agreement — Facility update', documentType: 'Credit Agreement', participants: 'Legal', status: 'Draft', amount: '$0.00', created: 'Feb 2, 2025', folder: 'fin-capital' }),
      baseDoc({ id: 'fi5', name: 'Expense Report Form — Leadership offsite', documentType: 'Expense Report Form', participants: 'Finance', status: 'Completed', amount: '$42,000.00', created: 'Jan 18, 2025' }),
    ],
  },

  marketing: {
    folders: [
      { id: 'mkt-programs', name: 'Programs', itemCount: 4, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'mkt-events', name: 'Events', itemCount: 3, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
      { id: 'mkt-brand', name: 'Brand & content', itemCount: 3, avatar: profileAvatar, created: 'Jan 5, 2025', documents: [] },
    ],
    documents: [
      baseDoc({ id: 'm1', name: 'Marketing Proposal — Q1 campaign', documentType: 'Marketing Proposal', participants: 'Marketing', status: 'Draft', amount: '$120,000.00', created: 'Jan 3, 2025', folder: 'mkt-programs' }),
      baseDoc({ id: 'm2', name: 'Informational & Promotional Material — Product launch', documentType: 'Informational & Promotional Material', participants: 'Brand', status: 'Completed', amount: '', created: 'Dec 15, 2024', folder: 'mkt-programs' }),
      baseDoc({ id: 'm2b', name: 'Business Plan — GTM motion', documentType: 'Business Plan', participants: 'Strategy', status: 'Sent', amount: '', created: 'Nov 30, 2024', folder: 'mkt-programs' }),
      baseDoc({ id: 'm2c', name: 'Project Plan — Webinar series', documentType: 'Project Plan', participants: 'Demand Gen', status: 'Awaiting approval', amount: '', created: 'Jan 20, 2025', folder: 'mkt-programs' }),
      baseDoc({ id: 'm3', name: 'Sponsorship Agreement — Industry summit', documentType: 'Sponsorship Agreement', participants: 'Events', status: 'Sent', amount: '$85,000.00', created: 'Nov 22, 2024', folder: 'mkt-events' }),
      baseDoc({ id: 'm3b', name: 'Event Agreement — User conference', documentType: 'Event Agreement', participants: 'Events', status: 'Completed', amount: '$220,000.00', created: 'Oct 8, 2024', folder: 'mkt-events' }),
      baseDoc({ id: 'm3c', name: 'Registration Form — VIP dinner', documentType: 'Registration Form', participants: 'Field Marketing', status: 'Draft', amount: '', created: 'Jan 12, 2025', folder: 'mkt-events' }),
      baseDoc({ id: 'm5', name: 'Affiliate Agreement — Partner network', documentType: 'Affiliate Agreement', participants: 'Partnerships', status: 'Awaiting approval', amount: '', created: 'Oct 8, 2024', folder: 'mkt-brand' }),
      baseDoc({ id: 'm5b', name: 'Informational & Promotional Material — One-sheet', documentType: 'Informational & Promotional Material', participants: 'Brand', status: 'Sent', amount: '', created: 'Dec 22, 2024', folder: 'mkt-brand' }),
      baseDoc({ id: 'm5c', name: 'Project Plan — Rebrand wave 2', documentType: 'Project Plan', participants: 'Creative', status: 'Draft', amount: '', created: 'Feb 1, 2025', folder: 'mkt-brand' }),
      baseDoc({ id: 'm4', name: 'Marketing Proposal — ABM pilot', documentType: 'Marketing Proposal', participants: 'Growth', status: 'Sent', amount: '$95,000.00', created: 'Jan 25, 2025' }),
    ],
  },

  procurement: {
    folders: [
      { id: 'proc-vendors', name: 'Vendor contracts', itemCount: 4, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'proc-forms', name: 'Forms & reports', itemCount: 4, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
      { id: 'proc-partners', name: 'Partnerships & franchise', itemCount: 3, avatar: profileAvatar, created: 'Aug 15, 2024', documents: [] },
    ],
    documents: [
      baseDoc({ id: 'pr1', name: 'Purchase Agreement — Cloud infrastructure', documentType: 'Purchase Agreement', participants: 'Vendor mgmt', status: 'Completed', amount: '$410,000.00', created: 'Dec 18, 2024', folder: 'proc-vendors' }),
      baseDoc({ id: 'pr2', name: 'Collaboration Agreement — SI partner', documentType: 'Collaboration Agreement', participants: 'Partnerships', status: 'Sent', amount: '', created: 'Nov 5, 2024', folder: 'proc-vendors' }),
      baseDoc({ id: 'pr2b', name: 'Partnership Agreement — Distribution', documentType: 'Partnership Agreement', participants: 'Legal', status: 'Awaiting approval', amount: '$0.00', created: 'Jan 8, 2025', folder: 'proc-vendors' }),
      baseDoc({ id: 'pr2c', name: 'Purchase Agreement — Hardware PO', documentType: 'Purchase Agreement', participants: 'Ops', status: 'Draft', amount: '$78,000.00', created: 'Jan 22, 2025', folder: 'proc-vendors' }),
      baseDoc({ id: 'pr3', name: 'Inspection Report — Warehouse audit', documentType: 'Inspection Report', participants: 'Ops', status: 'Draft', amount: '', created: 'Jan 9, 2025', folder: 'proc-forms' }),
      baseDoc({ id: 'pr4', name: 'Administrative & Operational Form — Vendor onboarding', documentType: 'Administrative & Operational Form', participants: 'Procurement', status: 'Completed', amount: '', created: 'Oct 20, 2024', folder: 'proc-forms' }),
      baseDoc({ id: 'pr4b', name: 'Application Form — Approved vendor list', documentType: 'Application Form', participants: 'Procurement', status: 'Sent', amount: '', created: 'Dec 3, 2024', folder: 'proc-forms' }),
      baseDoc({ id: 'pr4c', name: 'Report — Spend analysis Q4', documentType: 'Report', participants: 'Finance', status: 'Completed', amount: '', created: 'Jan 15, 2025', folder: 'proc-forms' }),
      baseDoc({ id: 'pr6', name: 'Franchise Agreement — Regional operator', documentType: 'Franchise Agreement', participants: 'Legal', status: 'Awaiting approval', amount: '$0.00', created: 'Nov 12, 2024', folder: 'proc-partners' }),
      baseDoc({ id: 'pr6b', name: 'Business Registration Form — New entity', documentType: 'Business Registration Form', participants: 'Tax', status: 'Draft', amount: '', created: 'Feb 2, 2025', folder: 'proc-partners' }),
      baseDoc({ id: 'pr6c', name: 'Form — Vendor code of conduct ack', documentType: 'Form', participants: 'Procurement', status: 'Completed', amount: '', created: 'Jan 4, 2025', folder: 'proc-partners' }),
      baseDoc({ id: 'pr5', name: 'Authorization Form — PO override', documentType: 'Authorization Form', participants: 'CFO', status: 'Sent', amount: '', created: 'Jan 19, 2025' }),
    ],
  },
};
