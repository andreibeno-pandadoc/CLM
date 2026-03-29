import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import TemplatesContent from './components/TemplatesContent';
import HomeContent from './components/HomeContent';
import ContactsContent from './components/ContactsContent';
import ReportsContent from './components/ReportsContent';
import ViewContent from './components/ViewContent';
import GmailImportModal from './components/GmailImportModal';
import GetStartedPage from './components/GetStartedPage';
import BulkImportPage from './components/BulkImportPage';
import DocumentViewerPage from './components/DocumentViewerPage';
import { VIEW_IDS } from './config/views';

/** GitHub Pages variant builds live under /CLM/views-1/ … /views-3/; open the first View so sample data + ViewContent mount (not MainContent → Documents). */
function getInitialActivePage() {
  if (typeof window === 'undefined') return 'Documents';
  const path = window.location.pathname;
  if (path.includes('/views-3') || path.includes('/views-2') || path.includes('/views-1')) {
    return VIEW_IDS[0] ?? 'Documents';
  }
  return 'Documents';
}

function App() {
  const [isGmailImportModalOpen, setIsGmailImportModalOpen] = useState(false);
  const [showGetStartedPage, setShowGetStartedPage] = useState(false);
  const [showBulkImportPage, setShowBulkImportPage] = useState(false);
  const [importedDocuments, setImportedDocuments] = useState([]);
  const [importedOrganizationSettings, setImportedOrganizationSettings] = useState(null);
  const [currentTab, setCurrentTab] = useState('Recent');
  const [currentFolder, setCurrentFolder] = useState(null);
  const [activePage, setActivePage] = useState(() => getInitialActivePage());
  const [searchQuery, setSearchQuery] = useState('');
  const [viewingDocument, setViewingDocument] = useState(null);

  const handleOpenGmailImport = () => {
    setIsGmailImportModalOpen(true);
  };

  const handleCloseGmailImport = () => {
    setIsGmailImportModalOpen(false);
  };

  const handleOpenGetStarted = () => {
    setShowGetStartedPage(true);
  };

  const handleCloseGetStarted = () => {
    setShowGetStartedPage(false);
  };

  const handleOpenBulkImport = () => {
    setShowBulkImportPage(true);
  };

  const handleCloseBulkImport = () => {
    setShowBulkImportPage(false);
  };

  const handleBulkImportComplete = (fileNames) => {
    // Convert file names to document objects
    const newDocuments = fileNames.map((name, index) => ({
      id: `bulk-${Date.now()}-${index}`,
      name: name,
      company: 'Bulk Import',
      status: 'Completed',
      date: new Date().toISOString(),
      isImported: true,
      importDate: new Date().toISOString()
    }));
    
    // Add to imported documents
    setImportedDocuments(prev => [...prev, ...newDocuments]);
    
    // Set organization settings for flat structure
    setImportedOrganizationSettings({ byYear: false, byCompany: false, byStatus: false });
    
    // Close bulk import and switch to Imported tab
    setShowBulkImportPage(false);
    setCurrentFolder(null);
    setCurrentTab('Imported');
  };

  const handleImportComplete = (documents, organizationSettings) => {
    // Add imported documents to state with organization metadata
    const documentsWithImportInfo = documents.map(doc => ({
      ...doc,
      isImported: true,
      importDate: new Date().toISOString()
    }));
    
    setImportedDocuments(prev => [...prev, ...documentsWithImportInfo]);
    setImportedOrganizationSettings(organizationSettings);
    
    // Reset folder navigation and switch to imported tab root
    setCurrentFolder(null);
    setCurrentTab('Imported');
  };

  const handleOpenDocument = (document) => {
    setViewingDocument(document);
  };

  const handleCloseDocumentViewer = () => {
    setViewingDocument(null);
  };

  // Show Get Started Page (full page view without sidebar)
  if (showGetStartedPage) {
    return (
      <div className="h-screen bg-white overflow-hidden">
        <GetStartedPage 
          onClose={handleCloseGetStarted} 
          onOpenGmailImport={handleOpenGmailImport}
        />
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar — warm Thesis rail (MCP: oklch ~0.957) */}
      <div className="w-60 flex-shrink-0 bg-thesis-sidebar border-r border-thesis-border">
        <Sidebar activePage={activePage} onPageChange={setActivePage} />
      </div>
      
      {/* Main content area — flush with header (no gutter/card inset like production shell) */}
      <div className="flex-1 flex flex-col min-w-0 bg-white">
        {/* Header - Full width of remaining space */}
        <div className="w-full z-20 shrink-0">
          <Header 
            searchQuery={searchQuery} 
            onSearchChange={setSearchQuery}
            activePage={activePage}
          />
        </div>
        
        <main className="flex-1 overflow-auto min-h-0 bg-white">
          <div className="min-h-full overflow-hidden bg-white">
          {activePage === 'Home' && (
            <HomeContent 
              onNavigateToDocuments={() => setActivePage('Documents')}
            />
          )}
          {activePage === 'Documents' && (
            <MainContent 
              importedDocuments={importedDocuments}
              importedOrganizationSettings={importedOrganizationSettings}
              currentTab={currentTab}
              onTabChange={setCurrentTab}
              currentFolder={currentFolder}
              onFolderChange={setCurrentFolder}
              onOpenDocumentModal={handleOpenGetStarted}
              onOpenBulkImport={handleOpenBulkImport}
              searchQuery={searchQuery}
              onOpenDocument={handleOpenDocument}
            />
          )}
          {activePage === 'Templates' && (
            <TemplatesContent searchQuery={searchQuery} />
          )}
          {activePage === 'Contacts' && (
            <ContactsContent />
          )}
          {activePage === 'Reports' && (
            <ReportsContent />
          )}
          {VIEW_IDS.includes(activePage) && (
            <ViewContent
              viewId={activePage}
              searchQuery={searchQuery}
              onOpenDocument={handleOpenDocument}
              onOpenDocumentModal={handleOpenGetStarted}
              onOpenBulkImport={handleOpenBulkImport}
            />
          )}
          </div>
        </main>
      </div>

      {/* Gmail Import Modal */}
      <GmailImportModal
        isOpen={isGmailImportModalOpen}
        onClose={handleCloseGmailImport}
        onImportComplete={handleImportComplete}
      />

      {/* Bulk Import Page */}
      {showBulkImportPage && (
        <BulkImportPage 
          onClose={handleCloseBulkImport} 
          onImportComplete={handleBulkImportComplete}
          onOpenDocument={(doc) => {
            setShowBulkImportPage(false);
            setViewingDocument(doc);
          }}
        />
      )}

      {/* Document Viewer Page */}
      {viewingDocument && (
        <DocumentViewerPage 
          document={viewingDocument}
          onClose={handleCloseDocumentViewer}
        />
      )}
    </div>
  );
}

export default App;
