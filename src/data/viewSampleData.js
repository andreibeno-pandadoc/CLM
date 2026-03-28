/**
 * views-3: Sample folders/documents per team view (documentType matches sheet column B).
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
      { id: 'sales-deals', name: 'Active deals', itemCount: 3, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'sales-renewals', name: 'Renewals', itemCount: 2, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
    ],
    documents: [
      baseDoc({
        id: 's1',
        name: 'Sales Proposal — CloudSync renewal',
        documentType: 'Sales Proposal',
        participants: 'Alex Martinez',
        status: 'Sent',
        amount: '$245,000.00',
        created: 'Dec 1, 2024',
        folder: 'sales-deals',
      }),
      baseDoc({
        id: 's2',
        name: 'Quote — Enterprise license package',
        documentType: 'Quote',
        participants: 'Mike Chen',
        status: 'Draft',
        amount: '$89,500.00',
        created: 'Oct 28, 2024',
        folder: 'sales-deals',
      }),
      baseDoc({
        id: 's3',
        name: 'Service Agreement — Implementation SOW',
        documentType: 'Service Agreement',
        participants: 'Sarah Johnson',
        status: 'Completed',
        amount: '$125,000.00',
        created: 'Nov 15, 2024',
        folder: 'sales-renewals',
      }),
      baseDoc({
        id: 's4',
        name: 'Order Form — Add-on seats Q1',
        documentType: 'Order Form',
        participants: 'Will Holland',
        status: 'Awaiting approval',
        amount: '$18,200.00',
        created: 'Jan 8, 2025',
      }),
    ],
  },

  hr: {
    folders: [
      { id: 'hr-offers', name: 'Offers & hiring', itemCount: 2, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'hr-policies', name: 'Policies', itemCount: 2, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
    ],
    documents: [
      baseDoc({
        id: 'h1',
        name: 'Job Offer Letter — Senior PM',
        documentType: 'Job Offer Letter',
        participants: 'People Ops',
        status: 'Sent',
        amount: '',
        created: 'Jan 4, 2025',
        folder: 'hr-offers',
      }),
      baseDoc({
        id: 'h2',
        name: 'Onboarding & Employment Form — New hire packet',
        documentType: 'Onboarding & Employment Form',
        participants: 'HR',
        status: 'Completed',
        amount: '',
        created: 'Dec 12, 2024',
        folder: 'hr-offers',
      }),
      baseDoc({
        id: 'h3',
        name: 'Employee Handbook 2025',
        documentType: 'Employee Handbook',
        participants: 'Legal',
        status: 'Draft',
        amount: '',
        created: 'Nov 20, 2024',
        folder: 'hr-policies',
      }),
      baseDoc({
        id: 'h4',
        name: 'Contractor Agreement — Design contractor',
        documentType: 'Contractor Agreement',
        participants: 'Procurement',
        status: 'Completed',
        amount: '$96,000.00',
        created: 'Oct 1, 2024',
      }),
    ],
  },

  legal: {
    folders: [
      { id: 'legal-nda', name: 'NDAs', itemCount: 2, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'legal-lease', name: 'Real estate', itemCount: 2, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
    ],
    documents: [
      baseDoc({
        id: 'l1',
        name: 'Non-Disclosure Agreement — Vendor evaluation',
        documentType: 'Non-Disclosure Agreement',
        participants: 'Legal',
        status: 'Completed',
        amount: '',
        created: 'Jan 2, 2025',
        folder: 'legal-nda',
      }),
      baseDoc({
        id: 'l2',
        name: 'Settlement Agreement — Dispute 2024-14',
        documentType: 'Settlement Agreement',
        participants: 'Outside counsel',
        status: 'Signed',
        amount: '',
        created: 'Dec 8, 2024',
        folder: 'legal-nda',
      }),
      baseDoc({
        id: 'l3',
        name: 'Lease Agreement — HQ extension',
        documentType: 'Lease Agreement',
        participants: 'Facilities',
        status: 'Awaiting approval',
        amount: '',
        created: 'Nov 18, 2024',
        folder: 'legal-lease',
      }),
      baseDoc({
        id: 'l4',
        name: 'Terms of Service Agreement — Product',
        documentType: 'Terms of Service Agreement',
        participants: 'Product Legal',
        status: 'Draft',
        amount: '',
        created: 'Sep 30, 2024',
      }),
    ],
  },

  finance: {
    folders: [
      { id: 'fin-invoices', name: 'Invoices', itemCount: 2, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'fin-tax', name: 'Tax & filings', itemCount: 2, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
    ],
    documents: [
      baseDoc({
        id: 'fi1',
        name: 'Invoice #INV-2025-0102 — Acme Corp',
        documentType: 'Invoice',
        participants: 'AR',
        status: 'Sent',
        amount: '$42,300.00',
        created: 'Jan 6, 2025',
        folder: 'fin-invoices',
        paymentStatus: 'Unpaid',
      }),
      baseDoc({
        id: 'fi2',
        name: 'Receipt — Conference sponsorship',
        documentType: 'Receipt',
        participants: 'Finance',
        status: 'Completed',
        amount: '$15,000.00',
        created: 'Dec 3, 2024',
        folder: 'fin-invoices',
        paymentStatus: 'Paid',
      }),
      baseDoc({
        id: 'fi3',
        name: 'Tax Return Form — FY2024',
        documentType: 'Tax Return Form',
        participants: 'Tax',
        status: 'Draft',
        amount: '',
        created: 'Jan 12, 2025',
        folder: 'fin-tax',
      }),
      baseDoc({
        id: 'fi4',
        name: 'Investment Agreement — Series notes',
        documentType: 'Investment Agreement',
        participants: 'CFO',
        status: 'Sent',
        amount: '$2,000,000.00',
        created: 'Nov 1, 2024',
      }),
    ],
  },

  marketing: {
    folders: [
      { id: 'mkt-programs', name: 'Programs', itemCount: 2, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'mkt-events', name: 'Events', itemCount: 2, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
    ],
    documents: [
      baseDoc({
        id: 'm1',
        name: 'Marketing Proposal — Q1 campaign',
        documentType: 'Marketing Proposal',
        participants: 'Marketing',
        status: 'Draft',
        amount: '$120,000.00',
        created: 'Jan 3, 2025',
        folder: 'mkt-programs',
      }),
      baseDoc({
        id: 'm2',
        name: 'Informational & Promotional Material — Product launch',
        documentType: 'Informational & Promotional Material',
        participants: 'Brand',
        status: 'Completed',
        amount: '',
        created: 'Dec 15, 2024',
        folder: 'mkt-programs',
      }),
      baseDoc({
        id: 'm3',
        name: 'Sponsorship Agreement — Industry summit',
        documentType: 'Sponsorship Agreement',
        participants: 'Events',
        status: 'Sent',
        amount: '$85,000.00',
        created: 'Nov 22, 2024',
        folder: 'mkt-events',
      }),
      baseDoc({
        id: 'm4',
        name: 'Affiliate Agreement — Partner network',
        documentType: 'Affiliate Agreement',
        participants: 'Partnerships',
        status: 'Awaiting approval',
        amount: '',
        created: 'Oct 8, 2024',
      }),
    ],
  },

  procurement: {
    folders: [
      { id: 'proc-vendors', name: 'Vendor contracts', itemCount: 2, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'proc-forms', name: 'Forms & reports', itemCount: 2, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
    ],
    documents: [
      baseDoc({
        id: 'pr1',
        name: 'Purchase Agreement — Cloud infrastructure',
        documentType: 'Purchase Agreement',
        participants: 'Vendor mgmt',
        status: 'Completed',
        amount: '$410,000.00',
        created: 'Dec 18, 2024',
        folder: 'proc-vendors',
      }),
      baseDoc({
        id: 'pr2',
        name: 'Collaboration Agreement — SI partner',
        documentType: 'Collaboration Agreement',
        participants: 'Partnerships',
        status: 'Sent',
        amount: '',
        created: 'Nov 5, 2024',
        folder: 'proc-vendors',
      }),
      baseDoc({
        id: 'pr3',
        name: 'Inspection Report — Warehouse audit',
        documentType: 'Inspection Report',
        participants: 'Ops',
        status: 'Draft',
        amount: '',
        created: 'Jan 9, 2025',
        folder: 'proc-forms',
      }),
      baseDoc({
        id: 'pr4',
        name: 'Administrative & Operational Form — Vendor onboarding',
        documentType: 'Administrative & Operational Form',
        participants: 'Procurement',
        status: 'Completed',
        amount: '',
        created: 'Oct 20, 2024',
      }),
    ],
  },
};
