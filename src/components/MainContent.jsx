import React, { useState } from 'react';
import { FilterIcon, ChevronDownIcon, SparkleIcon, ChevronRightIcon } from './Icons';
import DocumentsTable from './DocumentsTable';
import Badge from './Badge';
import DocumentSplitButton from './DocumentSplitButton';

const FILTERS_BTN_ON =
  'flex items-center gap-2 h-8 px-3 text-14 font-graphik-semibold rounded text-thesis-ink bg-thesis-filter hover:bg-thesis-filter-hover transition-colors';
const FILTERS_BTN_OFF =
  'flex items-center gap-2 h-8 px-3 text-14 font-graphik-semibold rounded text-brand-primary bg-brand-primary/10 hover:bg-brand-primary/15 transition-colors';
/** MCP: Ask AI is purple text on transparent (no fill) */
const ASK_AI_BTN =
  'flex items-center gap-2 h-8 px-3 text-14 font-graphik-semibold rounded text-brand-secondary bg-transparent hover:bg-thesis-ai-tint transition-colors';

const PAGE_TITLE_BY_TAB = {
  Recent: 'Recent documents',
  'All documents': 'All documents',
  'Created by me': 'Created by me',
  Imported: 'Imported',
  Archived: 'Archived',
  'Upcoming renewals': 'Upcoming renewals',
};

const MainContent = ({ importedDocuments = [], importedOrganizationSettings = null, currentTab, onTabChange, currentFolder, onFolderChange, onOpenDocumentModal, onOpenBulkImport, searchQuery = '', onOpenDocument }) => {
  const [filtersVisible, setFiltersVisible] = useState(true);
  // Reset folder when switching tabs
  React.useEffect(() => {
    onFolderChange(null);
  }, [currentTab, onFolderChange]);

  const handleFolderClick = (folder) => {
    onFolderChange(folder);
  };

  const handleBackToAllDocuments = () => {
    onFolderChange(null);
  };

  const tabs = [
    { label: 'Recent', active: currentTab === 'Recent' },
    { label: 'All documents', active: currentTab === 'All documents' },
    { label: 'Created by me', active: currentTab === 'Created by me' },
    { label: 'Imported', active: currentTab === 'Imported', badge: 'NEW' },
    { label: 'Archived', active: currentTab === 'Archived' },
    { label: 'Upcoming renewals', active: currentTab === 'Upcoming renewals' },
  ];

  const handleTabClick = (tabLabel) => {
    onTabChange(tabLabel);
  };

  const pageHeading =
    currentFolder?.name ??
    (currentTab === 'Imported' ? 'Imported' : PAGE_TITLE_BY_TAB[currentTab] ?? 'All documents');

  return (
    <div className="w-full min-h-full bg-white">
      <div className="p-8 lg:p-10 max-w-none">
        {/* Page Header — MCP: h2 24px/700, #181818 */}
        <div className="mb-7">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1 min-w-0">
              <h1 className="text-24 font-graphik-bold text-thesis-title leading-[29px] tracking-tight">
                {pageHeading}
              </h1>
            </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  className="flex items-center h-10 px-4 text-14 font-graphik-semibold text-secondary-light bg-transparent rounded hover:bg-thesis-chip transition-colors"
                >
                  New folder
                </button>
                <DocumentSplitButton
                  label="Document"
                  onPrimaryClick={onOpenDocumentModal}
                  menuItems={[
                    { label: 'Bulk import', onClick: onOpenBulkImport },
                    { label: 'Bulk send', onClick: () => {} },
                  ]}
                />
              </div>
          </div>

          {/* Breadcrumbs (shown when in folder view) */}
          {currentFolder && (
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleBackToAllDocuments}
                  className="text-14 font-graphik-regular text-secondary-light hover:text-brand-primary transition-colors"
                >
                  {currentTab === 'Imported' ? 'Imported' : 'All documents'}
                </button>
                {currentFolder.parentPath && currentFolder.parentPath.length > 0 && (
                  <>
                    {currentFolder.parentPath.map((parent, index) => (
                      <React.Fragment key={index}>
                        <ChevronRightIcon className="w-4 h-4 text-secondary-light" />
                        <span className="text-14 font-graphik-regular text-secondary-light">
                          {parent}
                        </span>
                      </React.Fragment>
                    ))}
                  </>
                )}
                <ChevronRightIcon className="w-4 h-4 text-secondary-light" />
                <span className="text-14 font-graphik-semibold text-secondary-dark">
                  {currentFolder.name}
                </span>
                <ChevronDownIcon className="w-4 h-4 text-secondary-light" />
              </div>
            </div>
          )}

          {/* Tabs (hide when in folder view) */}
          {!currentFolder && (
            <div className="border-b border-thesis-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 flex-wrap">
                {tabs.map((tab, index) => (
                  <div key={index} className="relative">
                    <button
                      type="button"
                      onClick={() => handleTabClick(tab.label)}
                      className={`flex items-center gap-2 h-12 px-0 text-14 font-graphik-regular ${
                        tab.active
                          ? 'text-brand-primary tab-active-underline'
                          : 'text-thesis-ink hover:text-secondary-dark'
                      } transition-colors`}
                    >
                      {tab.label}
                      {tab.badge && (
                        tab.badge === 'NEW' ? (
                          <span className="inline-flex items-center justify-center px-1 min-w-[30px] h-4 bg-thesis-info-bg text-thesis-info-text rounded-sm text-9 font-graphik-semibold uppercase leading-[11px]">
                            {tab.badge}
                          </span>
                        ) : (
                          <Badge number={tab.badge} color="gray" size="sm" />
                        )
                      )}
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setFiltersVisible((v) => !v)}
                  className={filtersVisible ? FILTERS_BTN_ON : FILTERS_BTN_OFF}
                >
                  <FilterIcon className="w-4 h-4 shrink-0 opacity-90" />
                  Filters
                </button>
                <button type="button" className={ASK_AI_BTN}>
                  <SparkleIcon className="w-5 h-5 text-brand-secondary shrink-0" />
                  Ask AI
                </button>
              </div>
            </div>
          </div>
          )}
        </div>

        {/* Documents Table */}
        <DocumentsTable 
          currentFolder={currentFolder}
          onFolderClick={handleFolderClick}
          importedDocuments={importedDocuments}
          importedOrganizationSettings={importedOrganizationSettings}
          currentTab={currentTab}
          searchQuery={searchQuery}
          onOpenDocument={onOpenDocument}
          filtersVisible={filtersVisible}
        />
      </div>
    </div>
  );
};

export default MainContent;
