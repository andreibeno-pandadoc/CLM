import React from 'react';

const StatusLabel = ({ type, children }) => {
  const getStatusStyles = () => {
    switch (type?.toLowerCase()) {
      case 'draft':
        return 'status-draft';
      case 'sent':
      case 'signed':
      case 'viewed':
        return 'status-sent';
      case 'completed':
        return 'status-completed';
      case 'not signed':
        return 'status-draft';
      case 'awaiting approval':
        return 'status-awaiting-approval';
      case 'rejected':
      case 'expired':
        return 'status-rejected';
      default:
        return 'status-draft';
    }
  };

  return (
    <span className={`status-label ${getStatusStyles()}`}>
      {children || type}
    </span>
  );
};

export default StatusLabel;

