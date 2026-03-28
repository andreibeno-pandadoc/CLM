/**
 * View-specific sample documents and folders for each document-type view.
 * **views-2:** Service-agreements sample data merged under `contracts`; quotes + invoices under `proposals`.
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
  contracts: {
    folders: [
      { id: 'contracts-sales', name: 'Sales contracts', itemCount: 3, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'contracts-msa', name: 'Master agreements', itemCount: 2, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
      { id: 'sa-support', name: 'Support & SLA', itemCount: 2, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'sa-maintenance', name: 'Maintenance agreements', itemCount: 2, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
    ],
    documents: [
      baseDoc({ id: 'c1', name: 'Sales Agreement - TechFlow Solutions Q4 2024', participants: 'Sarah Johnson, Mike Chen', status: 'Completed', amount: '$125,000.00', created: 'Nov 15, 2024', folder: 'contracts-sales' }),
      baseDoc({ id: 'c2', name: 'Equipment Sales Contract - DataVision Corp', participants: 'Mike Chen', status: 'Sent', amount: '$89,500.00', created: 'Oct 28, 2024', folder: 'contracts-sales' }),
      baseDoc({ id: 'c3', name: 'Enterprise Sales Agreement - CloudSync Inc', participants: 'Alex Martinez', status: 'Draft', amount: '$245,000.00', created: 'Dec 1, 2024', folder: 'contracts-sales' }),
      baseDoc({ id: 'c4', name: 'Master Service Agreement - Global Dynamics Ltd', participants: 'Procurement', status: 'Completed', amount: '$500,000.00', created: 'Aug 30, 2024', folder: 'contracts-msa' }),
      baseDoc({ id: 'c5', name: 'MSA Amendment - Enterprise Solutions Co', participants: 'Legal', status: 'Awaiting approval', amount: '$750,000.00', created: 'Nov 20, 2024', folder: 'contracts-msa' }),
      baseDoc({ id: 'c6', name: 'Purchase Agreement - RetailMax 2024', participants: 'Will Holland', status: 'Completed', amount: '$180,000.00', created: 'Oct 5, 2024' }),
      baseDoc({ id: 'sa1', name: 'Service Level Agreement - DataCenter Solutions', participants: 'Emily Gold, Nathan Howard', status: 'Completed', amount: '$45,000.00', created: 'Sep 8, 2024', folder: 'sa-support' }),
      baseDoc({ id: 'sa2', name: 'Support Contract - FitLife Wellness', participants: 'Andreya Triana', status: 'Sent', amount: '$12,000.00', created: 'Nov 12, 2024', folder: 'sa-support' }),
      baseDoc({ id: 'sa3', name: 'Maintenance Agreement - StyleHub Fashion', participants: 'Mariel Stacey', status: 'Draft', amount: '$8,500.00', created: 'Sep 18, 2024', folder: 'sa-maintenance' }),
      baseDoc({ id: 'sa4', name: 'Annual Support Agreement - VentureCapital Pro', participants: 'Will Holland', status: 'Completed', amount: '$22,000.00', created: 'Jul 25, 2024', folder: 'sa-maintenance' }),
      baseDoc({ id: 'sa5', name: 'Professional Services Agreement - MedTech Innovations', participants: 'CTO', status: 'Awaiting approval', amount: '$120,000.00', created: 'Oct 30, 2024' }),
    ],
  },

  proposals: {
    folders: [
      { id: 'proposal-templates', name: 'Proposal templates', itemCount: 3, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'proposals-equipment', name: 'Equipment proposals', itemCount: 2, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
      { id: 'quotes-pending', name: 'Pending quotes', itemCount: 2, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'quotes-accepted', name: 'Accepted quotes', itemCount: 2, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
      { id: 'invoices-unpaid', name: 'Unpaid invoices', itemCount: 2, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'invoices-paid', name: 'Paid invoices', itemCount: 2, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
    ],
    documents: [
      baseDoc({ id: 'p1', name: 'Equipment Purchase Proposal for Captured Moments', participants: 'Andreya Triana, Will Holland', status: 'Awaiting approval', amount: '$6,560.00', created: 'Jan 10, 2025', folder: 'proposal-templates', avatar: avatar(3) }),
      baseDoc({ id: 'p2', name: 'Equipment Purchase Proposal for Cool Kids LLC', participants: 'Andreya Triana, Will Holland', status: 'Completed', amount: '$2,240.00', created: 'Nov 2, 2024', folder: 'proposal-templates', avatar: avatar(2) }),
      baseDoc({ id: 'p3', name: 'Proposal for Kraftwerk Events', participants: 'Will Holland, Mariel Stacey', status: 'Draft', amount: '$4,250.00', created: 'May 21, 2024', folder: 'proposal-templates', avatar: avatar(4) }),
      baseDoc({ id: 'p4', name: 'Equipment Purchase Proposal for Tresor Media', participants: 'Emily Gold, Nathan Howard', status: 'Sent', amount: '$9,780.00', created: 'Nov 2, 2024', folder: 'proposals-equipment', avatar: avatar(2) }),
      baseDoc({ id: 'p5', name: 'Custom CRM Development Proposal - RetailMax', participants: 'IT Director', status: 'Not Signed', amount: '$180,000.00', created: 'Oct 5, 2024', folder: 'proposals-equipment' }),
      baseDoc({ id: 'p6', name: 'Mobile App Development - FitLife Wellness', participants: 'Product', status: 'Completed', amount: '$95,000.00', created: 'Nov 12, 2024' }),
      baseDoc({ id: 'p7', name: 'E-commerce Platform Proposal - StyleHub Fashion', participants: 'Tech', status: 'Draft', amount: '$220,000.00', created: 'Sep 18, 2024' }),
      baseDoc({ id: 'q1', name: 'Quote - DataVision Corp - Server Hardware', participants: 'Mike Chen', status: 'Draft', amount: '$89,500.00', created: 'Oct 28, 2024', folder: 'quotes-pending' }),
      baseDoc({ id: 'q2', name: 'Quote - CloudSync Inc - Enterprise License', participants: 'Alex Martinez', status: 'Sent', amount: '$245,000.00', created: 'Dec 1, 2024', folder: 'quotes-pending' }),
      baseDoc({ id: 'q3', name: 'Quote - TechFlow Solutions Q4 2024', participants: 'Sarah Johnson', status: 'Completed', amount: '$125,000.00', created: 'Nov 15, 2024', folder: 'quotes-accepted' }),
      baseDoc({ id: 'q4', name: 'Quote - Global Dynamics Ltd - Annual Support', participants: 'Procurement', status: 'Completed', amount: '$500,000.00', created: 'Aug 30, 2024', folder: 'quotes-accepted' }),
      baseDoc({ id: 'q5', name: 'Quote - RetailMax - CRM Implementation', participants: 'Will Holland', status: 'Awaiting approval', amount: '$180,000.00', created: 'Oct 5, 2024' }),
      baseDoc({ id: 'inv1', name: 'Invoice #INV-2024-0842 - TechFlow Solutions', participants: 'Sarah Johnson', status: 'Sent', amount: '$125,000.00', created: 'Nov 15, 2024', folder: 'invoices-unpaid', paymentStatus: 'Unpaid' }),
      baseDoc({ id: 'inv2', name: 'Invoice #INV-2024-0911 - DataVision Corp', participants: 'Mike Chen', status: 'Sent', amount: '$89,500.00', created: 'Oct 28, 2024', folder: 'invoices-unpaid', paymentStatus: 'Unpaid' }),
      baseDoc({ id: 'inv3', name: 'Invoice #INV-2024-0722 - Global Dynamics Ltd', participants: 'Procurement', status: 'Completed', amount: '$500,000.00', created: 'Aug 30, 2024', folder: 'invoices-paid', paymentStatus: 'Paid' }),
      baseDoc({ id: 'inv4', name: 'Invoice #INV-2024-0815 - RetailMax', participants: 'Will Holland', status: 'Completed', amount: '$180,000.00', created: 'Oct 5, 2024', folder: 'invoices-paid', paymentStatus: 'Paid' }),
      baseDoc({ id: 'inv5', name: 'Invoice #INV-2024-0920 - CloudSync Inc', participants: 'Alex Martinez', status: 'Awaiting approval', amount: '$45,000.00', created: 'Dec 1, 2024', paymentStatus: 'Partially paid' }),
    ],
  },

  ndas: {
    folders: [
      { id: 'ndas-signed', name: "Signed NDAs", itemCount: 2, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'ndas-pending', name: "NDAs in progress", itemCount: 2, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
    ],
    documents: [
      baseDoc({ id: 'n1', name: 'Non-Disclosure Agreement for Brilliant Moments Inc.', participants: 'Mariel Stacey', status: 'Completed', amount: '', created: 'Jan 10, 2025', folder: 'ndas-signed', avatar: avatar(1) }),
      baseDoc({ id: 'n2', name: 'Mutual NDA - Strategic Partners Group', participants: 'Partnerships', status: 'Completed', amount: '', created: 'Nov 8, 2024', folder: 'ndas-signed' }),
      baseDoc({ id: 'n3', name: 'Non-Disclosure Agreement - InnovateLab', participants: 'Legal', status: 'Signed', amount: '', created: 'Sep 22, 2024', folder: 'ndas-pending' }),
      baseDoc({ id: 'n4', name: 'Confidentiality Agreement - NextGen Robotics', participants: 'CEO', status: 'Not Signed', amount: '', created: 'Oct 15, 2024', folder: 'ndas-pending' }),
      baseDoc({ id: 'n5', name: 'Non-Disclosure Agreement for Brilliant Moments Inc.', participants: 'Andreya Triana, Will Holland', status: 'Rejected', amount: '', created: 'Jan 10, 2025', avatar: avatar(4) }),
    ],
  },

  forms: {
    folders: [
      { id: 'forms-active', name: 'Active forms', itemCount: 2, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'forms-archived', name: 'Archived', itemCount: 2, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
    ],
    documents: [
      baseDoc({ id: 'f1', name: 'Customer onboarding form - Q1 2025', participants: 'Will Holland', status: 'Draft', amount: '', created: 'Jan 10, 2025', folder: 'forms-active' }),
      baseDoc({ id: 'f2', name: 'Event registration form - Conference 2025', participants: 'Mariel Stacey', status: 'Sent', amount: '', created: 'Jan 5, 2025', folder: 'forms-active' }),
      baseDoc({ id: 'f3', name: 'Feedback survey - Product launch', participants: 'Andreya Triana', status: 'Completed', amount: '', created: 'Nov 2, 2024', folder: 'forms-archived' }),
      baseDoc({ id: 'f4', name: 'Contact request form - Website', participants: 'Emily Gold', status: 'Completed', amount: '', created: 'Oct 15, 2024', folder: 'forms-archived' }),
      baseDoc({ id: 'f5', name: 'NDA request form - Legal intake', participants: 'Legal', status: 'Draft', amount: '', created: 'Dec 20, 2024' }),
    ],
  },

  collaterals: {
    folders: [
      { id: 'collateral-datasheets', name: 'Datasheets', itemCount: 2, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'collateral-one-pagers', name: 'One-pagers', itemCount: 2, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
    ],
    documents: [
      baseDoc({ id: 'col1', name: 'Product datasheet - Enterprise tier', participants: 'Marketing', status: 'Completed', amount: '', created: 'Jan 10, 2025', folder: 'collateral-datasheets' }),
      baseDoc({ id: 'col2', name: 'Technical specs - API overview', participants: 'Product', status: 'Completed', amount: '', created: 'Nov 2, 2024', folder: 'collateral-datasheets' }),
      baseDoc({ id: 'col3', name: 'One-pager - Sales enablement', participants: 'Will Holland', status: 'Completed', amount: '', created: 'Dec 1, 2024', folder: 'collateral-one-pagers' }),
      baseDoc({ id: 'col4', name: 'One-pager - Partner program', participants: 'Mariel Stacey', status: 'Draft', amount: '', created: 'Nov 20, 2024', folder: 'collateral-one-pagers' }),
      baseDoc({ id: 'col5', name: 'Case study - TechFlow Solutions', participants: 'Andreya Triana', status: 'Completed', amount: '', created: 'Oct 5, 2024' }),
    ],
  },
};
