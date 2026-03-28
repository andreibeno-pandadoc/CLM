/**
 * View-specific sample documents and folders for each document-type view.
 * Each view shows only documents and folders that belong to that type.
 * Folders include at least three sample documents; documentType matches filter options where applicable.
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
      { id: 'contracts-sales', name: 'Sales contracts', itemCount: 4, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'contracts-msa', name: 'Master agreements', itemCount: 4, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
      { id: 'contracts-partnerships', name: 'Partnerships & channel', itemCount: 3, avatar: profileAvatar, created: 'Oct 8, 2024', documents: [] },
    ],
    documents: [
      baseDoc({ id: 'c1', name: 'Sales Agreement - TechFlow Solutions Q4 2024', documentType: 'Sales Agreement', participants: 'Sarah Johnson, Mike Chen', status: 'Completed', amount: '$125,000.00', created: 'Nov 15, 2024', folder: 'contracts-sales' }),
      baseDoc({ id: 'c2', name: 'Equipment Sales Contract - DataVision Corp', documentType: 'Sales Agreement', participants: 'Mike Chen', status: 'Sent', amount: '$89,500.00', created: 'Oct 28, 2024', folder: 'contracts-sales' }),
      baseDoc({ id: 'c3', name: 'Enterprise Sales Agreement - CloudSync Inc', documentType: 'Sales Agreement', participants: 'Alex Martinez', status: 'Draft', amount: '$245,000.00', created: 'Dec 1, 2024', folder: 'contracts-sales' }),
      baseDoc({ id: 'c3b', name: 'License Agreement - OEM add-on', documentType: 'License Agreement', participants: 'Sarah Johnson', status: 'Sent', amount: '$62,000.00', created: 'Jan 2, 2025', folder: 'contracts-sales' }),
      baseDoc({ id: 'c4', name: 'Master Service Agreement - Global Dynamics Ltd', documentType: 'Professional Services Agreement', participants: 'Procurement', status: 'Completed', amount: '$500,000.00', created: 'Aug 30, 2024', folder: 'contracts-msa' }),
      baseDoc({ id: 'c5', name: 'MSA Amendment - Enterprise Solutions Co', documentType: 'Amendment Agreement', participants: 'Legal', status: 'Awaiting approval', amount: '$750,000.00', created: 'Nov 20, 2024', folder: 'contracts-msa' }),
      baseDoc({ id: 'c5b', name: 'Statement of Work - Phase 2 rollout', documentType: 'Statement of Work', participants: 'Mike Chen', status: 'Sent', amount: '$310,000.00', created: 'Dec 18, 2024', folder: 'contracts-msa' }),
      baseDoc({ id: 'c5c', name: 'Subscription Agreement - SaaS renewal', documentType: 'Subscription Agreement', participants: 'Alex Martinez', status: 'Completed', amount: '$198,000.00', created: 'Sep 9, 2024', folder: 'contracts-msa' }),
      baseDoc({ id: 'c6', name: 'Partnership Agreement - Reseller network', documentType: 'Partnership Agreement', participants: 'Partnerships', status: 'Completed', amount: '$0.00', created: 'Jul 14, 2024', folder: 'contracts-partnerships' }),
      baseDoc({ id: 'c6b', name: 'Franchise Agreement - EMEA region', documentType: 'Franchise Agreement', participants: 'Legal', status: 'Draft', amount: '$0.00', created: 'Feb 10, 2025', folder: 'contracts-partnerships' }),
      baseDoc({ id: 'c6c', name: 'Affiliate Agreement - Referral program', documentType: 'Affiliate Agreement', participants: 'Marketing', status: 'Sent', amount: '$0.00', created: 'Nov 30, 2024', folder: 'contracts-partnerships' }),
      baseDoc({ id: 'c7', name: 'Purchase Agreement - RetailMax 2024', documentType: 'Purchase Agreement', participants: 'Will Holland', status: 'Completed', amount: '$180,000.00', created: 'Oct 5, 2024' }),
      baseDoc({ id: 'c8', name: 'Lease Agreement - Regional office', documentType: 'Lease Agreement', participants: 'Facilities', status: 'Sent', amount: '$420,000.00', created: 'Jan 8, 2025' }),
      baseDoc({ id: 'c9', name: 'Loan Agreement - Equipment financing', documentType: 'Loan Agreement', participants: 'Finance', status: 'Draft', amount: '$1,200,000.00', created: 'Dec 22, 2024' }),
    ],
  },

  'service-agreements': {
    folders: [
      { id: 'sa-support', name: 'Support & SLA', itemCount: 4, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'sa-maintenance', name: 'Maintenance agreements', itemCount: 4, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
      { id: 'sa-enterprise', name: 'Enterprise & professional services', itemCount: 3, avatar: profileAvatar, created: 'Sep 1, 2024', documents: [] },
    ],
    documents: [
      baseDoc({ id: 'sa1', name: 'Service Level Agreement - DataCenter Solutions', participants: 'Emily Gold, Nathan Howard', status: 'Completed', amount: '$45,000.00', created: 'Sep 8, 2024', folder: 'sa-support' }),
      baseDoc({ id: 'sa2', name: 'Support Contract - FitLife Wellness', participants: 'Andreya Triana', status: 'Sent', amount: '$12,000.00', created: 'Nov 12, 2024', folder: 'sa-support' }),
      baseDoc({ id: 'sa2b', name: '24/7 Support SLA - Priority tier', participants: 'Nathan Howard', status: 'Awaiting approval', amount: '$28,000.00', created: 'Jan 4, 2025', folder: 'sa-support' }),
      baseDoc({ id: 'sa2c', name: 'Support renewal - FY2025', participants: 'Will Holland', status: 'Draft', amount: '$19,500.00', created: 'Dec 1, 2024', folder: 'sa-support' }),
      baseDoc({ id: 'sa3', name: 'Maintenance Agreement - StyleHub Fashion', participants: 'Mariel Stacey', status: 'Draft', amount: '$8,500.00', created: 'Sep 18, 2024', folder: 'sa-maintenance' }),
      baseDoc({ id: 'sa4', name: 'Annual Support Agreement - VentureCapital Pro', participants: 'Will Holland', status: 'Completed', amount: '$22,000.00', created: 'Jul 25, 2024', folder: 'sa-maintenance' }),
      baseDoc({ id: 'sa4b', name: 'Preventive maintenance - Hardware fleet', participants: 'Ops', status: 'Sent', amount: '$34,000.00', created: 'Oct 3, 2024', folder: 'sa-maintenance' }),
      baseDoc({ id: 'sa4c', name: 'Maintenance addendum - Uptime guarantee', participants: 'Legal', status: 'Completed', amount: '$0.00', created: 'Aug 19, 2024', folder: 'sa-maintenance' }),
      baseDoc({ id: 'sa5', name: 'Professional Services Agreement - MedTech Innovations', participants: 'CTO', status: 'Awaiting approval', amount: '$120,000.00', created: 'Oct 30, 2024', folder: 'sa-enterprise' }),
      baseDoc({ id: 'sa5b', name: 'Implementation services - ERP rollout', participants: 'PMO', status: 'Sent', amount: '$275,000.00', created: 'Nov 27, 2024', folder: 'sa-enterprise' }),
      baseDoc({ id: 'sa5c', name: 'Managed services - Security operations', participants: 'Security', status: 'Draft', amount: '$410,000.00', created: 'Jan 11, 2025', folder: 'sa-enterprise' }),
      baseDoc({ id: 'sa6', name: 'Service Agreement - API gateway program', participants: 'Engineering', status: 'Completed', amount: '$88,000.00', created: 'Nov 5, 2024' }),
      baseDoc({ id: 'sa7', name: 'Service Agreement - Data residency pack', participants: 'Sarah Johnson', status: 'Sent', amount: '$54,000.00', created: 'Dec 16, 2024' }),
      baseDoc({ id: 'sa8', name: 'Service Agreement - Training & enablement', participants: 'Customer Success', status: 'Draft', amount: '$36,000.00', created: 'Feb 2, 2025' }),
    ],
  },

  proposals: {
    folders: [
      { id: 'proposal-templates', name: 'Proposal templates', itemCount: 5, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'proposals-equipment', name: 'Equipment proposals', itemCount: 4, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
      { id: 'proposals-strategic', name: 'Strategic & enterprise', itemCount: 3, avatar: profileAvatar, created: 'Aug 30, 2024', documents: [] },
    ],
    documents: [
      baseDoc({ id: 'p1', name: 'Equipment Purchase Proposal for Captured Moments', documentType: 'Sales Proposal', participants: 'Andreya Triana, Will Holland', status: 'Awaiting approval', amount: '$6,560.00', created: 'Jan 10, 2025', folder: 'proposal-templates', avatar: avatar(3) }),
      baseDoc({ id: 'p2', name: 'Equipment Purchase Proposal for Cool Kids LLC', documentType: 'Proposal', participants: 'Andreya Triana, Will Holland', status: 'Completed', amount: '$2,240.00', created: 'Nov 2, 2024', folder: 'proposal-templates', avatar: avatar(2) }),
      baseDoc({ id: 'p3', name: 'Proposal for Kraftwerk Events', documentType: 'Proposal', participants: 'Will Holland, Mariel Stacey', status: 'Draft', amount: '$4,250.00', created: 'May 21, 2024', folder: 'proposal-templates', avatar: avatar(4) }),
      baseDoc({ id: 'p3b', name: 'Marketing Proposal - Brand refresh', documentType: 'Marketing Proposal', participants: 'Brand team', status: 'Sent', amount: '$125,000.00', created: 'Dec 5, 2024', folder: 'proposal-templates' }),
      baseDoc({ id: 'p3c', name: 'Partnership Proposal - Co-sell motion', documentType: 'Partnership Proposal', participants: 'Alliances', status: 'Draft', amount: '$0.00', created: 'Jan 15, 2025', folder: 'proposal-templates' }),
      baseDoc({ id: 'p4', name: 'Equipment Purchase Proposal for Tresor Media', documentType: 'Project Proposal', participants: 'Emily Gold, Nathan Howard', status: 'Sent', amount: '$9,780.00', created: 'Nov 2, 2024', folder: 'proposals-equipment', avatar: avatar(2) }),
      baseDoc({ id: 'p5', name: 'Custom CRM Development Proposal - RetailMax', documentType: 'Sales Proposal', participants: 'IT Director', status: 'Not Signed', amount: '$180,000.00', created: 'Oct 5, 2024', folder: 'proposals-equipment' }),
      baseDoc({ id: 'p5b', name: 'Construction Proposal - HQ build-out', documentType: 'Construction Proposal', participants: 'Facilities', status: 'Awaiting approval', amount: '$2,400,000.00', created: 'Nov 18, 2024', folder: 'proposals-equipment' }),
      baseDoc({ id: 'p5c', name: 'Insurance Proposal - Cyber coverage', documentType: 'Insurance Proposal', participants: 'Risk', status: 'Sent', amount: '$48,000.00', created: 'Dec 9, 2024', folder: 'proposals-equipment' }),
      baseDoc({ id: 'p6', name: 'Mobile App Development - FitLife Wellness', documentType: 'Service Proposal', participants: 'Product', status: 'Completed', amount: '$95,000.00', created: 'Nov 12, 2024', folder: 'proposals-strategic' }),
      baseDoc({ id: 'p6b', name: 'Investment Proposal - Analytics platform', documentType: 'Investment Proposal', participants: 'Finance', status: 'Draft', amount: '$1,500,000.00', created: 'Aug 22, 2024', folder: 'proposals-strategic' }),
      baseDoc({ id: 'p6c', name: 'Loan Proposal - Working capital facility', documentType: 'Loan Proposal', participants: 'CFO', status: 'Sent', amount: '$5,000,000.00', created: 'Nov 1, 2024', folder: 'proposals-strategic' }),
      baseDoc({ id: 'p7', name: 'E-commerce Platform Proposal - StyleHub Fashion', documentType: 'Proposal', participants: 'Tech', status: 'Draft', amount: '$220,000.00', created: 'Sep 18, 2024' }),
      baseDoc({ id: 'p8', name: 'RFP Response - National retailer', documentType: 'Sales Proposal', participants: 'Sales', status: 'Sent', amount: '$890,000.00', created: 'Jan 20, 2025' }),
      baseDoc({ id: 'p9', name: 'Proposal - AI document assistant pilot', documentType: 'Proposal', participants: 'Product', status: 'Completed', amount: '$175,000.00', created: 'Nov 28, 2024' }),
    ],
  },

  quotes: {
    folders: [
      { id: 'quotes-pending', name: 'Pending quotes', itemCount: 4, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'quotes-accepted', name: 'Accepted quotes', itemCount: 4, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
      { id: 'quotes-expired', name: 'Expired / superseded', itemCount: 3, avatar: profileAvatar, created: 'Jun 1, 2024', documents: [] },
    ],
    documents: [
      baseDoc({ id: 'q1', name: 'Quote - DataVision Corp - Server Hardware', documentType: 'Quote', participants: 'Mike Chen', status: 'Draft', amount: '$89,500.00', created: 'Oct 28, 2024', folder: 'quotes-pending' }),
      baseDoc({ id: 'q2', name: 'Quote - CloudSync Inc - Enterprise License', documentType: 'Quote', participants: 'Alex Martinez', status: 'Sent', amount: '$245,000.00', created: 'Dec 1, 2024', folder: 'quotes-pending' }),
      baseDoc({ id: 'q2b', name: 'Quote - Add-on seats (50)', documentType: 'Quote', participants: 'Sarah Johnson', status: 'Awaiting approval', amount: '$36,000.00', created: 'Jan 6, 2025', folder: 'quotes-pending' }),
      baseDoc({ id: 'q2c', name: 'Order Form - Professional services bundle', documentType: 'Order Form', participants: 'Procurement', status: 'Sent', amount: '$112,000.00', created: 'Nov 15, 2024', folder: 'quotes-pending' }),
      baseDoc({ id: 'q3', name: 'Quote - TechFlow Solutions Q4 2024', documentType: 'Quote', participants: 'Sarah Johnson', status: 'Completed', amount: '$125,000.00', created: 'Nov 15, 2024', folder: 'quotes-accepted' }),
      baseDoc({ id: 'q4', name: 'Quote - Global Dynamics Ltd - Annual Support', documentType: 'Quote', participants: 'Procurement', status: 'Completed', amount: '$500,000.00', created: 'Aug 30, 2024', folder: 'quotes-accepted' }),
      baseDoc({ id: 'q4b', name: 'Sales Order Form - Hardware refresh', documentType: 'Sales Order Form', participants: 'Will Holland', status: 'Completed', amount: '$78,400.00', created: 'Sep 12, 2024', folder: 'quotes-accepted' }),
      baseDoc({ id: 'q4c', name: 'Form - Statement of work signature', documentType: 'Form', participants: 'Legal', status: 'Completed', amount: '$0.00', created: 'Oct 2, 2024', folder: 'quotes-accepted' }),
      baseDoc({ id: 'q5', name: 'Quote - RetailMax - CRM Implementation', documentType: 'Quote', participants: 'Will Holland', status: 'Awaiting approval', amount: '$180,000.00', created: 'Oct 5, 2024' }),
      baseDoc({ id: 'q6', name: 'Quote - Legacy pricing FY23', documentType: 'Quote', participants: 'Mike Chen', status: 'Completed', amount: '$42,000.00', created: 'Mar 3, 2024', folder: 'quotes-expired' }),
      baseDoc({ id: 'q7', name: 'Quote - Superseded by Q4 bundle', documentType: 'Quote', participants: 'Alex Martinez', status: 'Completed', amount: '$198,000.00', created: 'Apr 18, 2024', folder: 'quotes-expired' }),
      baseDoc({ id: 'q8', name: 'Order Form - Old SKU list', documentType: 'Order Form', participants: 'Sales', status: 'Completed', amount: '$12,000.00', created: 'May 21, 2024', folder: 'quotes-expired' }),
      baseDoc({ id: 'q9', name: 'Quote - Pilot program (closed)', documentType: 'Quote', participants: 'Sarah Johnson', status: 'Awaiting approval', amount: '$25,000.00', created: 'Nov 22, 2024' }),
    ],
  },

  ndas: {
    folders: [
      { id: 'ndas-signed', name: 'Signed NDAs', itemCount: 4, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'ndas-pending', name: 'NDAs in progress', itemCount: 4, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
      { id: 'ndas-mutual', name: 'Mutual & multi-party', itemCount: 3, avatar: profileAvatar, created: 'Jul 20, 2024', documents: [] },
    ],
    documents: [
      baseDoc({ id: 'n1', name: 'Non-Disclosure Agreement for Brilliant Moments Inc.', participants: 'Mariel Stacey', status: 'Completed', amount: '', created: 'Jan 10, 2025', folder: 'ndas-signed', avatar: avatar(1) }),
      baseDoc({ id: 'n2', name: 'Mutual NDA - Strategic Partners Group', participants: 'Partnerships', status: 'Completed', amount: '', created: 'Nov 8, 2024', folder: 'ndas-signed' }),
      baseDoc({ id: 'n2b', name: 'One-way NDA - Vendor screening', participants: 'Sarah Johnson', status: 'Completed', amount: '', created: 'Dec 14, 2024', folder: 'ndas-signed' }),
      baseDoc({ id: 'n2c', name: 'NDA - Board observer', participants: 'Legal', status: 'Completed', amount: '', created: 'Jan 3, 2025', folder: 'ndas-signed' }),
      baseDoc({ id: 'n3', name: 'Non-Disclosure Agreement - InnovateLab', participants: 'Legal', status: 'Signed', amount: '', created: 'Sep 22, 2024', folder: 'ndas-pending' }),
      baseDoc({ id: 'n4', name: 'Confidentiality Agreement - NextGen Robotics', participants: 'CEO', status: 'Not Signed', amount: '', created: 'Oct 15, 2024', folder: 'ndas-pending' }),
      baseDoc({ id: 'n4b', name: 'NDA - M&A diligence', participants: 'Corp Dev', status: 'Awaiting approval', amount: '', created: 'Jan 18, 2025', folder: 'ndas-pending' }),
      baseDoc({ id: 'n4c', name: 'NDA - Contractor cohort', participants: 'Sarah Johnson', status: 'Sent', amount: '', created: 'Nov 30, 2024', folder: 'ndas-pending' }),
      baseDoc({ id: 'n5', name: 'Non-Disclosure Agreement for Brilliant Moments Inc.', participants: 'Andreya Triana, Will Holland', status: 'Rejected', amount: '', created: 'Jan 10, 2025', avatar: avatar(4) }),
      baseDoc({ id: 'n6', name: 'Mutual NDA - Joint venture exploration', participants: 'Legal', status: 'Completed', amount: '', created: 'Aug 30, 2024', folder: 'ndas-mutual' }),
      baseDoc({ id: 'n7', name: 'Tripartite NDA - Data sharing', participants: 'Sarah Johnson', status: 'Sent', amount: '', created: 'Nov 5, 2024', folder: 'ndas-mutual' }),
      baseDoc({ id: 'n8', name: 'Mutual NDA - Partner ecosystem', participants: 'Partnerships', status: 'Draft', amount: '', created: 'Dec 20, 2024', folder: 'ndas-mutual' }),
      baseDoc({ id: 'n9', name: 'NDA - Advisory board', participants: 'CEO', status: 'Completed', amount: '', created: 'Feb 1, 2025' }),
      baseDoc({ id: 'n10', name: 'NDA - Internship program', participants: 'Mariel Stacey', status: 'Sent', amount: '', created: 'Jan 22, 2025' }),
    ],
  },

  invoices: {
    folders: [
      { id: 'invoices-unpaid', name: 'Unpaid', itemCount: 4, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'invoices-paid', name: 'Paid', itemCount: 4, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
      { id: 'invoices-disputed', name: 'Disputed / in review', itemCount: 3, avatar: profileAvatar, created: 'Jan 5, 2025', documents: [] },
    ],
    documents: [
      baseDoc({ id: 'inv1', name: 'Invoice #INV-2024-0842 - TechFlow Solutions', documentType: 'Invoice', participants: 'Sarah Johnson', status: 'Sent', amount: '$125,000.00', created: 'Nov 15, 2024', folder: 'invoices-unpaid', paymentStatus: 'Unpaid' }),
      baseDoc({ id: 'inv2', name: 'Invoice #INV-2024-0911 - DataVision Corp', documentType: 'Invoice', participants: 'Mike Chen', status: 'Sent', amount: '$89,500.00', created: 'Oct 28, 2024', folder: 'invoices-unpaid', paymentStatus: 'Unpaid' }),
      baseDoc({ id: 'inv2b', name: 'Invoice #INV-2025-0002 - CloudSync Inc', documentType: 'Invoice', participants: 'Alex Martinez', status: 'Sent', amount: '$62,000.00', created: 'Jan 2, 2025', folder: 'invoices-unpaid', paymentStatus: 'Unpaid' }),
      baseDoc({ id: 'inv2c', name: 'Invoice #INV-2024-0999 - Add-on services', documentType: 'Invoice', participants: 'Sarah Johnson', status: 'Awaiting approval', amount: '$18,200.00', created: 'Dec 30, 2024', folder: 'invoices-unpaid', paymentStatus: 'Unpaid' }),
      baseDoc({ id: 'inv3', name: 'Invoice #INV-2024-0722 - Global Dynamics Ltd', documentType: 'Invoice', participants: 'Procurement', status: 'Completed', amount: '$500,000.00', created: 'Aug 30, 2024', folder: 'invoices-paid', paymentStatus: 'Paid' }),
      baseDoc({ id: 'inv4', name: 'Invoice #INV-2024-0815 - RetailMax', documentType: 'Invoice', participants: 'Will Holland', status: 'Completed', amount: '$180,000.00', created: 'Oct 5, 2024', folder: 'invoices-paid', paymentStatus: 'Paid' }),
      baseDoc({ id: 'inv4b', name: 'Receipt #RCPT-2024-441 - Conference sponsorship', documentType: 'Receipt', participants: 'Finance', status: 'Completed', amount: '$15,000.00', created: 'Nov 12, 2024', folder: 'invoices-paid', paymentStatus: 'Paid' }),
      baseDoc({ id: 'inv4c', name: 'Payment Agreement - Installment plan', documentType: 'Payment Agreement', participants: 'Sarah Johnson', status: 'Completed', amount: '$240,000.00', created: 'Sep 21, 2024', folder: 'invoices-paid', paymentStatus: 'Paid' }),
      baseDoc({ id: 'inv5', name: 'Invoice #INV-2024-0920 - CloudSync Inc', documentType: 'Invoice', participants: 'Alex Martinez', status: 'Awaiting approval', amount: '$45,000.00', created: 'Dec 1, 2024', paymentStatus: 'Partially paid' }),
      baseDoc({ id: 'inv6', name: 'Invoice #INV-2024-1101 - Disputed line items', documentType: 'Invoice', participants: 'Mike Chen', status: 'Sent', amount: '$33,000.00', created: 'Jan 9, 2025', folder: 'invoices-disputed', paymentStatus: 'Unpaid' }),
      baseDoc({ id: 'inv7', name: 'Invoice #INV-2024-1102 - AR hold', documentType: 'Invoice', participants: 'Sarah Johnson', status: 'Awaiting approval', amount: '$12,000.00', created: 'Jan 11, 2025', folder: 'invoices-disputed', paymentStatus: 'Unpaid' }),
      baseDoc({ id: 'inv8', name: 'Invoice #INV-2024-1103 - Credit memo pending', documentType: 'Invoice', participants: 'Finance', status: 'Draft', amount: '$8,500.00', created: 'Jan 14, 2025', folder: 'invoices-disputed', paymentStatus: 'Unpaid' }),
      baseDoc({ id: 'inv9', name: 'Invoice #INV-2024-1050 - Collections', documentType: 'Invoice', participants: 'AR', status: 'Sent', amount: '$27,000.00', created: 'Nov 28, 2024' }),
    ],
  },

  forms: {
    folders: [
      { id: 'forms-active', name: 'Active forms', itemCount: 4, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'forms-archived', name: 'Archived', itemCount: 4, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
      { id: 'forms-hr', name: 'HR & onboarding', itemCount: 3, avatar: profileAvatar, created: 'Jan 5, 2025', documents: [] },
    ],
    documents: [
      baseDoc({ id: 'f1', name: 'Customer onboarding form - Q1 2025', documentType: 'Onboarding & Employment Form', participants: 'Will Holland', status: 'Draft', amount: '', created: 'Jan 10, 2025', folder: 'forms-active' }),
      baseDoc({ id: 'f2', name: 'Event registration form - Conference 2025', documentType: 'Registration Form', participants: 'Mariel Stacey', status: 'Sent', amount: '', created: 'Jan 5, 2025', folder: 'forms-active' }),
      baseDoc({ id: 'f2b', name: 'Authorization Form - ACH payment', documentType: 'Authorization Form', participants: 'Finance', status: 'Completed', amount: '', created: 'Dec 18, 2024', folder: 'forms-active' }),
      baseDoc({ id: 'f2c', name: 'Application Form - Partner program', documentType: 'Application Form', participants: 'Partnerships', status: 'Sent', amount: '', created: 'Nov 22, 2024', folder: 'forms-active' }),
      baseDoc({ id: 'f3', name: 'Feedback survey - Product launch', documentType: 'Form', participants: 'Andreya Triana', status: 'Completed', amount: '', created: 'Nov 2, 2024', folder: 'forms-archived' }),
      baseDoc({ id: 'f4', name: 'Contact request form - Website', documentType: 'Form', participants: 'Emily Gold', status: 'Completed', amount: '', created: 'Oct 15, 2024', folder: 'forms-archived' }),
      baseDoc({ id: 'f4b', name: 'Expense Report Form - Sales kickoff', documentType: 'Expense Report Form', participants: 'Will Holland', status: 'Completed', amount: '', created: 'Sep 9, 2024', folder: 'forms-archived' }),
      baseDoc({ id: 'f4c', name: 'Medical Form - Benefits enrollment', documentType: 'Medical Form', participants: 'People Ops', status: 'Draft', amount: '', created: 'Dec 1, 2024', folder: 'forms-archived' }),
      baseDoc({ id: 'f5', name: 'NDA request form - Legal intake', documentType: 'Form', participants: 'Legal', status: 'Draft', amount: '', created: 'Dec 20, 2024' }),
      baseDoc({ id: 'f6', name: 'Job Application Form - Engineering', documentType: 'Job Application Form', participants: 'Recruiting', status: 'Sent', amount: '', created: 'Jan 7, 2025', folder: 'forms-hr' }),
      baseDoc({ id: 'f7', name: 'Performance Review Form - H1 cycle', documentType: 'Performance Review Form', participants: 'People Ops', status: 'Completed', amount: '', created: 'Jan 3, 2025', folder: 'forms-hr' }),
      baseDoc({ id: 'f8', name: 'Student Application Form - Intern cohort', documentType: 'Student Application Form', participants: 'HR', status: 'Draft', amount: '', created: 'Feb 1, 2025', folder: 'forms-hr' }),
      baseDoc({ id: 'f9', name: 'Tax Declaration Form - Remote workers', documentType: 'Tax Declaration Form', participants: 'Payroll', status: 'Sent', amount: '', created: 'Jan 12, 2025' }),
      baseDoc({ id: 'f10', name: 'Credit Application Form - Vendor onboarding', documentType: 'Credit Application Form', participants: 'Procurement', status: 'Completed', amount: '', created: 'Nov 19, 2024' }),
    ],
  },

  collaterals: {
    folders: [
      { id: 'collateral-datasheets', name: 'Datasheets', itemCount: 4, avatar: profileAvatar, created: 'Jan 10, 2025', documents: [] },
      { id: 'collateral-one-pagers', name: 'One-pagers', itemCount: 4, avatar: profileAvatar, created: 'Nov 2, 2024', documents: [] },
      { id: 'collateral-brand', name: 'Brand & promo', itemCount: 3, avatar: profileAvatar, created: 'Jan 5, 2025', documents: [] },
    ],
    documents: [
      baseDoc({ id: 'col1', name: 'Product datasheet - Enterprise tier', documentType: 'Informational & Promotional Material', participants: 'Marketing', status: 'Completed', amount: '', created: 'Jan 10, 2025', folder: 'collateral-datasheets' }),
      baseDoc({ id: 'col2', name: 'Technical specs - API overview', documentType: 'Informational & Promotional Material', participants: 'Product', status: 'Completed', amount: '', created: 'Nov 2, 2024', folder: 'collateral-datasheets' }),
      baseDoc({ id: 'col2b', name: 'Security datasheet - SOC 2', documentType: 'Informational & Promotional Material', participants: 'Security', status: 'Sent', amount: '', created: 'Dec 8, 2024', folder: 'collateral-datasheets' }),
      baseDoc({ id: 'col2c', name: 'Comparison datasheet - vs competitors', documentType: 'Informational & Promotional Material', participants: 'Marketing', status: 'Draft', amount: '', created: 'Jan 18, 2025', folder: 'collateral-datasheets' }),
      baseDoc({ id: 'col3', name: 'One-pager - Sales enablement', documentType: 'Informational & Promotional Material', participants: 'Will Holland', status: 'Completed', amount: '', created: 'Dec 1, 2024', folder: 'collateral-one-pagers' }),
      baseDoc({ id: 'col4', name: 'One-pager - Partner program', documentType: 'Informational & Promotional Material', participants: 'Mariel Stacey', status: 'Draft', amount: '', created: 'Nov 20, 2024', folder: 'collateral-one-pagers' }),
      baseDoc({ id: 'col4b', name: 'One-pager - ROI calculator', documentType: 'Informational & Promotional Material', participants: 'Sales', status: 'Sent', amount: '', created: 'Jan 4, 2025', folder: 'collateral-one-pagers' }),
      baseDoc({ id: 'col4c', name: 'One-pager - AI features', documentType: 'Informational & Promotional Material', participants: 'Product Marketing', status: 'Completed', amount: '', created: 'Nov 30, 2024', folder: 'collateral-one-pagers' }),
      baseDoc({ id: 'col5', name: 'Case study - TechFlow Solutions', documentType: 'Certificate & Credential', participants: 'Andreya Triana', status: 'Completed', amount: '', created: 'Oct 5, 2024' }),
      baseDoc({ id: 'col6', name: 'Certification badge pack - Partner tier', documentType: 'Certificate & Credential', participants: 'Brand', status: 'Sent', amount: '', created: 'Jan 9, 2025', folder: 'collateral-brand' }),
      baseDoc({ id: 'col7', name: 'Promo flyer - Webinar series', documentType: 'Informational & Promotional Material', participants: 'Marketing', status: 'Draft', amount: '', created: 'Jan 16, 2025', folder: 'collateral-brand' }),
      baseDoc({ id: 'col8', name: 'Brand guidelines - Typography 2025', documentType: 'Informational & Promotional Material', participants: 'Brand', status: 'Completed', amount: '', created: 'Dec 22, 2024', folder: 'collateral-brand' }),
      baseDoc({ id: 'col9', name: 'Solution brief - CLM overview', documentType: 'Informational & Promotional Material', participants: 'Product Marketing', status: 'Sent', amount: '', created: 'Jan 21, 2025' }),
    ],
  },
};
