import React, { useState, useRef, useEffect } from 'react';
import { PlusIcon, ChevronDownIcon } from './Icons';

/**
 * Primary + chevron split (matches documents-next: 40px height, green primary, menu e.g. Bulk import / Bulk send).
 */
const DocumentSplitButton = ({
  label = 'Document',
  onPrimaryClick,
  menuItems = [],
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handle = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  return (
    <div className="relative flex rounded shadow-subtle overflow-hidden" ref={ref}>
      <button
        type="button"
        onClick={onPrimaryClick}
        className="flex items-center gap-2 h-10 pl-4 pr-4 bg-brand-primary text-white text-14 font-graphik-semibold hover:bg-brand-primary/90 transition-colors rounded-l border-r border-white/20"
      >
        <PlusIcon className="w-6 h-6 shrink-0" />
        {label}
      </button>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="w-10 h-10 shrink-0 bg-brand-primary text-white border-l border-white/20 hover:bg-brand-primary/90 transition-colors flex items-center justify-center rounded-r"
      >
        <ChevronDownIcon className="w-6 h-6" />
      </button>
      {open && menuItems.length > 0 && (
        <div
          className="absolute right-0 top-full mt-1 min-w-[200px] ds-popover z-50 py-1"
          role="menu"
        >
          {menuItems.map((item) => (
            <button
              key={item.label}
              type="button"
              role="menuitem"
              onClick={() => {
                item.onClick?.();
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DocumentSplitButton;
