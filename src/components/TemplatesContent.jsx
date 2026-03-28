import React, { useState } from 'react';
import { PlusIcon, FilterIcon, ChevronDownIcon, FolderPlusIcon, ListIcon } from './Icons';
import TemplatesTable from './TemplatesTable';

const TemplatesContent = ({ searchQuery = '' }) => {
  const [currentTab, setCurrentTab] = useState('Document templates');
  const [showBanner, setShowBanner] = useState(true);

  const tabs = [
    { label: 'Document templates', active: currentTab === 'Document templates' },
    { label: 'Content library', active: currentTab === 'Content library' },
    { label: 'Email templates', active: currentTab === 'Email templates' },
    { label: 'Shared with me', active: currentTab === 'Shared with me' },
    { label: 'Archived', active: currentTab === 'Archived' }
  ];

  const handleTabClick = (tabLabel) => {
    setCurrentTab(tabLabel);
  };

  return (
    <div className="w-full min-h-full bg-white">
      <div className="p-15 max-w-none">
        {/* Page Header */}
        <div className="mb-7">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-24 font-graphik-bold text-thesis-title">
                Document templates
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 text-14 font-graphik-semibold text-secondary-light hover:bg-gray-50 transition-colors">
                <FolderPlusIcon className="w-6 h-6 text-secondary-light" />
                New folder
              </button>
              <div className="flex rounded shadow-subtle overflow-hidden">
                <button className="px-4 py-2.5 bg-brand-primary text-white text-14 font-graphik-semibold hover:bg-brand-primary/90 transition-colors flex items-center gap-2 h-10">
                  <PlusIcon className="w-6 h-6" />
                  Template
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-thesis-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                {tabs.map((tab, index) => (
                  <div key={index} className="relative">
                    <button
                      type="button"
                      onClick={() => handleTabClick(tab.label)}
                      className={`flex items-center gap-2 h-12 px-0 text-14 ${
                        tab.active ? 'font-graphik-semibold' : 'font-graphik-regular'
                      } ${
                        tab.active ? 'text-secondary-dark border-b-2 border-brand-primary' : 'text-secondary-dark hover:text-secondary-dark/80'
                      } transition-colors`}
                    >
                      {tab.label}
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="flex items-center gap-2 h-8 px-3 text-14 font-graphik-semibold rounded text-thesis-ink bg-thesis-filter hover:bg-thesis-filter-hover transition-colors"
                >
                  <FilterIcon className="w-4 h-4 shrink-0 opacity-90" />
                  Filters
                </button>
                <button type="button" className="flex items-center gap-2 px-2 py-1.5 text-secondary-light hover:bg-gray-50 transition-colors">
                  <ListIcon className="w-5 h-5 text-secondary-light" />
                  <ChevronDownIcon className="w-4 h-4 text-secondary-light" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        {showBanner && (
          <div className="mb-6 bg-thesis-sidebar rounded-md px-4 py-3 flex items-center justify-between">
            <span className="text-14 font-graphik-regular text-secondary-dark">
              Start using templates and cut your proposal creation time in half.
            </span>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowBanner(false)}
                className="text-14 font-graphik-semibold text-secondary-dark hover:text-secondary-dark/80 transition-colors"
              >
                Dismiss
              </button>
              <button className="flex items-center gap-1 text-14 font-graphik-semibold text-brand-primary hover:text-brand-primary/80 transition-colors">
                Learn more
                <ChevronDownIcon className="w-4 h-4 rotate-[-90deg]" />
              </button>
            </div>
          </div>
        )}

        {/* Templates Table */}
        <TemplatesTable searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default TemplatesContent;
