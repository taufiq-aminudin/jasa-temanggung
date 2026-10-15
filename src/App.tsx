import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SearchModal } from './components/SearchModal';
import { AuditModal } from './components/AuditModal';
import { BrandKitModal } from './components/BrandKitModal';
import { useTheme } from './context/ThemeContext';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { RoasCalculatorPage } from './pages/RoasCalculatorPage';
import { InsightsPage } from './pages/InsightsPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { AdminLeadPortalPage } from './pages/AdminLeadPortalPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

export const App: React.FC = () => {
  const { isDark } = useTheme();
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isBrandKitOpen, setIsBrandKitOpen] = useState(false);

  // Sync browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Exit-Intent or Inactivity Trigger for the Audit Diagnostic
  useEffect(() => {
    const DISMISSED_KEY = 'futech_audit_modal_shown';
    if (sessionStorage.getItem(DISMISSED_KEY) === 'true') {
      return;
    }

    // Auto prompt after 35 seconds of exploring
    const timer = setTimeout(() => {
      setIsAuditModalOpen(true);
      sessionStorage.setItem(DISMISSED_KEY, 'true');
    }, 35000);

    return () => clearTimeout(timer);
  }, []);

  const navigate = (path: string) => {
    // Clean and normalize path
    let normalized = path.replace(/\/$/, '') || '/';
    if (normalized.endsWith('.html')) {
      normalized = normalized.replace(/\.html$/, '');
    }

    if (window.location.pathname !== normalized) {
      window.history.pushState({}, '', normalized);
    }
    setCurrentPath(normalized);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Router Dispatcher
  const renderPage = () => {
    const path = currentPath;

    // Homepage
    if (path === '/' || path === '') {
      return (
        <HomePage 
          navigate={navigate} 
          openAuditModal={() => setIsAuditModalOpen(true)} 
        />
      );
    }

    // Layanan / Services
    if (path === '/layanan' || path === '/jasa') {
      return (
        <ServicesPage 
          navigate={navigate} 
          openAuditModal={() => setIsAuditModalOpen(true)} 
        />
      );
    }

    if (path.startsWith('/layanan/') || path.startsWith('/jasa/')) {
      const slug = path.replace(/^\/(layanan|jasa)\//, '');
      return (
        <ServiceDetailPage 
          slug={slug} 
          navigate={navigate} 
          openAuditModal={() => setIsAuditModalOpen(true)} 
        />
      );
    }

    // Industri
    if (path === '/industri') {
      return (
        <IndustriPageWrapper 
          navigate={navigate} 
          openAuditModal={() => setIsAuditModalOpen(true)} 
        />
      );
    }

    // Studi Kasus
    if (path === '/studi-kasus') {
      return (
        <CaseStudiesPage 
          navigate={navigate} 
          openAuditModal={() => setIsAuditModalOpen(true)} 
        />
      );
    }

    // Kalkulator ROAS
    if (path === '/kalkulator-roas' || path === '/kalkulator') {
      return (
        <RoasCalculatorPage 
          openAuditModal={() => setIsAuditModalOpen(true)} 
        />
      );
    }

    // Wawasan & Knowledge Hub
    if (path === '/wawasan' || path === '/artikel' || path === '/blog') {
      return <InsightsPage navigate={navigate} />;
    }

    if (path.startsWith('/wawasan/') || path.startsWith('/artikel/') || path.startsWith('/blog/')) {
      const slug = path.replace(/^\/(wawasan|artikel|blog)\//, '');
      return (
        <ArticleDetailPage 
          slug={slug} 
          navigate={navigate} 
          openAuditModal={() => setIsAuditModalOpen(true)} 
        />
      );
    }

    // Admin Lead Portal Demo
    if (path === '/admin-portal' || path === '/portal-lead' || path === '/pipeline') {
      return <AdminLeadPortalPage navigate={navigate} />;
    }

    // Kontak & Konsultasi
    if (path === '/kontak' || path === '/consultation') {
      return <ContactPage />;
    }

    // Legal
    if (path === '/kebijakan-privasi' || path === '/privasi') {
      return <LegalPage type="privacy" navigate={navigate} />;
    }

    if (path === '/syarat-ketentuan' || path === '/terms') {
      return <LegalPage type="terms" navigate={navigate} />;
    }

    // Fallback 404
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-4">
        <div className="text-5xl font-mono text-blue-500 font-black">404</div>
        <h2 className="text-2xl font-bold text-white">Halaman Tidak Ditemukan</h2>
        <p className="text-slate-400 text-sm">
          Alamat yang Anda tuju mungkin telah dipindahkan atau belum tersedia.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs"
        >
          Kembali ke Beranda
        </button>
      </div>
    );
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200 ${
      isDark ? 'bg-[#0b1120] text-slate-100' : 'bg-[#f8fafc] text-slate-900'
    }`}>
      {/* Header Navigation */}
      <Header 
        currentPath={currentPath}
        navigate={navigate}
        openSearch={() => setIsSearchOpen(true)}
        openAuditModal={() => setIsAuditModalOpen(true)}
        openBrandKit={() => setIsBrandKitOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer Directory */}
      <Footer 
        navigate={navigate} 
        openAuditModal={() => setIsAuditModalOpen(true)} 
        openBrandKit={() => setIsBrandKitOpen(true)}
      />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Search Modal (`Cmd+K`) */}
      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        navigate={navigate}
      />

      {/* Interactive Audit Modal */}
      <AuditModal 
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />

      {/* Official Brand Identity & Logo Kit Modal */}
      <BrandKitModal
        isOpen={isBrandKitOpen}
        onClose={() => setIsBrandKitOpen(false)}
      />
    </div>
  );
};

// Helper for Industri
const IndustriPageWrapper: React.FC<{ navigate: (path: string) => void; openAuditModal: () => void }> = ({ navigate, openAuditModal }) => {
  return <IndustriesPage navigate={navigate} openAuditModal={openAuditModal} />;
};
