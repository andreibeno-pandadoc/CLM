import React, { useState, useEffect } from 'react';

/** Kebab-case ids; match documents-next Status popover + DocumentsTable normalization */
export const STATUS_FILTER_OPTIONS = [
  { id: 'draft', label: 'Draft' },
  { id: 'for-approval', label: 'For approval' },
  { id: 'sent', label: 'Sent' },
  { id: 'viewed', label: 'Viewed' },
  { id: 'suggest-edits', label: 'Suggest edits' },
  { id: 'completed', label: 'Completed' },
  { id: 'expired', label: 'Expired' },
  { id: 'waiting-for-payment', label: 'Waiting for payment' },
  { id: 'paid', label: 'Paid' },
  { id: 'declined', label: 'Declined' },
];

const StatusFilter = ({ isOpen, onClose, onApply, selectedStatuses = [] }) => {
  const [selected, setSelected] = useState(() => new Set(selectedStatuses));

  useEffect(() => {
    if (isOpen) {
      setSelected(new Set(selectedStatuses));
    }
  }, [isOpen, selectedStatuses]);

  const toggleStatus = (statusId) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(statusId)) next.delete(statusId);
      else next.add(statusId);
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (selected.size === STATUS_FILTER_OPTIONS.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(STATUS_FILTER_OPTIONS.map((s) => s.id)));
    }
  };

  const handleApply = () => {
    onApply(Array.from(selected));
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  if (!isOpen) return null;

  const allSelected = selected.size === STATUS_FILTER_OPTIONS.length;

  return (
    <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-subtle border border-thesis-border z-50 min-w-[260px]">
      <div className="p-3 max-h-[min(60vh,360px)] overflow-y-auto">
        <label className="flex items-center gap-3 py-2 cursor-pointer hover:bg-gray-50 rounded px-2 -mx-2">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={toggleSelectAll}
            className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
          />
          <span className="text-14 font-graphik-regular text-secondary-dark">Select all</span>
        </label>

        <div className="border-t border-thesis-border my-2" />

        {STATUS_FILTER_OPTIONS.map((status) => (
          <label
            key={status.id}
            className="flex items-center gap-3 py-2 cursor-pointer hover:bg-gray-50 rounded px-2 -mx-2"
          >
            <input
              type="checkbox"
              checked={selected.has(status.id)}
              onChange={() => toggleStatus(status.id)}
              className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
            />
            <span className="text-14 font-graphik-regular text-secondary-dark">{status.label}</span>
          </label>
        ))}
      </div>

      <div className="flex items-center justify-between px-4 py-3 border-t border-thesis-border">
        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-100 rounded"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleApply}
          className="px-4 py-2 text-14 font-graphik-semibold text-white bg-brand-primary rounded hover:bg-opacity-90"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default StatusFilter;
