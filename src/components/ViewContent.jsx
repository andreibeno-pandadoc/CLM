import React, { useState, useEffect } from 'react';
import { FilterIcon, SparkleIcon, ChevronRightIcon } from './Icons';
import DocumentsTable from './DocumentsTable';
import { VIEW_CONFIG, DOCUMENT_TYPE_OPTIONS_BY_VIEW } from '../config/views';
import DocumentSplitButton from './DocumentSplitButton';

const FILTERS_BTN_ON =
  'flex items-center gap-2 h-8 px-3 text-14 font-graphik-semibold rounded text-thesis-ink bg-thesis-filter hover:bg-thesis-filter-hover transition-colors';
const FILTERS_BTN_OFF =
  'flex items-center gap-2 h-8 px-3 text-14 font-graphik-semibold rounded text-brand-primary bg-brand-primary/10 hover:bg-brand-primary/15 transition-colors';
const ASK_AI_BTN =
  'flex items-center gap-2 h-8 px-3 text-14 font-graphik-semibold rounded text-brand-secondary bg-transparent hover:bg-thesis-ai-tint transition-colors';

const ViewContent = ({
  viewId,
  searchQuery = '',
  onOpenDocument,
  onOpenDocumentModal = () => {},
  onOpenBulkImport = () => {},
}) => {
  const [viewTab, setViewTab] = useState('Documents');
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [currentFolder, setCurrentFolder] = useState(null);
  const config = VIEW_CONFIG[viewId];
  if (!config) return null;

  const { title, ctaLabel, filterIds = [] } = config;

  useEffect(() => {
    setCurrentFolder(null);
  }, [viewId]);

  return (
    <div className="w-full min-h-full bg-white">
      <div className="p-8 lg:p-10 max-w-none">
        {/* Page Header - same layout as MainContent */}
        <div className="mb-7">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-24 font-graphik-bold text-thesis-title leading-[29px] tracking-tight">
                {currentFolder?.name ?? title}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-2.5 text-14 font-graphik-semibold text-secondary-light hover:bg-gray-50 transition-colors"
              >
                Workflow setup
              </button>
              <DocumentSplitButton
                label={ctaLabel}
                onPrimaryClick={onOpenDocumentModal}
                menuItems={[
                  { label: 'Bulk import', onClick: onOpenBulkImport },
                  { label: 'Bulk send', onClick: () => {} },
                ]}
              />
            </div>
          </div>

          {currentFolder && (
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentFolder(null)}
                  className="text-14 font-graphik-regular text-secondary-light hover:text-brand-primary transition-colors"
                >
                  {title}
                </button>
                <ChevronRightIcon className="w-4 h-4 text-secondary-light" />
                <span className="text-14 font-graphik-semibold text-secondary-dark">{currentFolder.name}</span>
              </div>
            </div>
          )}

          {/* Tabs: Documents | Catalog - same style as base; extra spacing below tabs (match Documents tab) */}
          {!currentFolder && (
          <div className="border-b border-thesis-border mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <button
                  type="button"
                  onClick={() => setViewTab('Documents')}
                  className={`flex items-center gap-2 h-12 px-0 text-14 font-graphik-regular ${
                    viewTab === 'Documents'
                      ? 'text-brand-primary tab-active-underline'
                      : 'text-thesis-ink hover:text-secondary-dark'
                  } transition-colors`}
                >
                  Documents
                </button>
                <button
                  type="button"
                  onClick={() => setViewTab('Catalog')}
                  className={`flex items-center gap-2 h-12 px-0 text-14 font-graphik-regular ${
                    viewTab === 'Catalog'
                      ? 'text-brand-primary tab-active-underline'
                      : 'text-thesis-ink hover:text-secondary-dark'
                  } transition-colors`}
                >
                  Catalog
                </button>
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

        {/* Same DocumentsTable as base with working FilterBar; view-specific filters and spacing above table */}
        {viewTab === 'Documents' && (
          <DocumentsTable
            currentFolder={currentFolder}
            onFolderClick={setCurrentFolder}
            importedDocuments={[]}
            importedOrganizationSettings={null}
            currentTab="All documents"
            searchQuery={searchQuery}
            onOpenDocument={onOpenDocument}
            visibleFilterIds={filterIds}
            filtersVisible={filtersVisible}
            viewId={viewId}
            documentTypeOptions={DOCUMENT_TYPE_OPTIONS_BY_VIEW[viewId] ?? []}
          />
        )}
        {viewTab === 'Catalog' && (
          <div className="py-12 text-center text-14 font-graphik-regular text-secondary-light">
            Catalog content for {title}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewContent;
