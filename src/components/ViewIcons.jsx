/**
 * View icons from Views Concept Exploration design (Figma / Views Concept Exploration.svg).
 * Colors: default #181818, active #248567. Use currentColor so parent controls via text-*.
 */
import React from 'react';

const iconClass = 'shrink-0 flex-none';
const viewBoxBase = '0 0 24 24';

// Design palette from SVG: #F4F0ED bg, #181818 icons, #248567 primary
export const VIEW_ICON_COLORS = {
  default: '#181818',
  active: '#248567',
  background: '#F4F0ED',
};

// Contracts – signature line with flourish (design: horizontal line + loopy left)
const ContractsIcon = ({ className = 'w-5 h-5', active }) => (
  <svg className={`${iconClass} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      d="M5 13c.5-.3 1-.5 1.6-.5.6 0 1.2.2 1.6.5.5.4.8 1 .8 1.6 0 .6-.3 1.2-.8 1.6-.4.3-1 .5-1.6.5-.6 0-1.1-.2-1.6-.5M4 15h12v1.5H4V15z"
      fill="currentColor"
    />
  </svg>
);

// Proposals – diagonal pen / marker (from design: thick diagonal stroke)
const ProposalsIcon = ({ className = 'w-5 h-5', active }) => (
  <svg className={`${iconClass} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      d="M18.5 4l-14 14 3 3 14-14-3-3zm-2.12 2.12l1.06 1.06-10.5 10.5-1.06-1.06 10.5-10.5z"
      fill="currentColor"
    />
  </svg>
);

// NDAs – padlock
const NDAsIcon = ({ className = 'w-5 h-5', active }) => (
  <svg className={`${iconClass} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 10V8a5 5 0 0110 0v2h1a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2h1zm2 0h6V8a3 3 0 10-6 0v2zm2 4a1 1 0 112 0v2a1 1 0 11-2 0v-2z"
      fill="currentColor"
    />
  </svg>
);

// Forms – form / document with fields (from existing FormsIcon style, thin stroke look)
const FormsViewIcon = ({ className = 'w-5 h-5', active }) => (
  <svg className={`${iconClass} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1zm1 2v12h12V6H6zm2 2h3v3H6V8zm5 0h3v1h-3V8zm0 2h3v1h-3v-1zm-5 3h8v1H6v-1zm0 2h8v1H6v-1z"
      fill="currentColor"
    />
  </svg>
);

// Collaterals – document with + in corner (design: doc outline, + in square top-right)
const CollateralsIcon = ({ className = 'w-5 h-5', active }) => (
  <svg className={`${iconClass} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path fillRule="evenodd" clipRule="evenodd" d="M5 4h14v16H5V4zm2 2v12h10V6H7z" fill="currentColor" />
    <path d="M15 6h2M16 5v2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" fill="none" />
  </svg>
);

/** views-2: service-agreements / quotes / invoices merged into contracts or proposals — not separate nav ids */
const VIEW_ICON_MAP = {
  contracts: ContractsIcon,
  proposals: ProposalsIcon,
  ndas: NDAsIcon,
  forms: FormsViewIcon,
  collaterals: CollateralsIcon,
};

export function ViewIcon({ viewId, active, className = 'w-5 h-5' }) {
  const Icon = VIEW_ICON_MAP[viewId];
  if (!Icon) return null;
  return <Icon className={className} active={active} />;
}

export default VIEW_ICON_MAP;
