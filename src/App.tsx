import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActionBtn } from './components/FloatingActionBtn';
import { ChecklistModal } from './components/ChecklistModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { BlogPage } from './pages/BlogPage';
import { WorkflowPage } from './pages/WorkflowPage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [checklistModalOpen, setChecklistModalOpen] = useState(false);

  // Synchronize browser URL & navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    // Normalization
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

  // Exit intent & Inactivity triggers for the Checklist Modal
  useEffect(() => {
    const DISMISSED_KEY = 'temanggung_checklist_modal_dismissed';
    const DOWNLOADED_KEY = 'temanggung_checklist_downloaded';

    if (sessionStorage.getItem(DISMISSED_KEY) === 'true' || localStorage.getItem(DOWNLOADED_KEY) === 'true') {
      return;
    }

    // Inactivity timer: 30 seconds
    const timer = setTimeout(() => {
      setChecklistModalOpen(true);
    }, 30000);

    // Mouse exit intent trigger
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10) {
        setChecklistModalOpen(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleCloseModal = () => {
    setChecklistModalOpen(false);
    try {
      sessionStorage.setItem('temanggung_checklist_modal_dismissed', 'true');
    } catch (_) {}
  };

  // Route Dispatcher
  const renderRoute = () => {
    let clean = currentPath.replace(/\/$/, '') || '/';
    if (clean.endsWith('.html')) clean = clean.replace(/\.html$/, '');

    // Root / Home
    if (clean === '/' || clean === '/index') {
      return <HomePage navigate={navigate} openChecklistModal={() => setChecklistModalOpen(true)} />;
    }

    // Services Hub
    if (clean === '/jasa') {
      return <ServicesPage navigate={navigate} />;
    }

    // Service Detail
    if (clean.startsWith('/jasa/')) {
      const slug = clean.replace('/jasa/', '');
      return <ServiceDetailPage slug={slug} navigate={navigate} />;
    }

    // Legacy direct service slug aliases (e.g. /perizinan, /iklan-online, etc.)
    const directServices = [
      'iklan-online', 'analis-data', 'konsultasi-bisnis', 'perizinan', 'notaris-ppat',
      'properti', 'stnk-sim', 'meta-ads', 'website', 'desain-branding', 'foto-video',
      'akuntansi-pajak', 'hr-rekrutmen', 'it-komputer', 'lainnya', 'agen-tenaga-kerja-temanggung'
    ];
    const strippedSlug = clean.replace(/^\//, '');
    if (directServices.includes(strippedSlug)) {
      return <ServiceDetailPage slug={strippedSlug} navigate={navigate} />;
    }

    // Articles Hub
    if (clean === '/artikel') {
      return <ArticlesPage navigate={navigate} />;
    }

    // Article Detail
    if (clean.startsWith('/artikel/')) {
      const slug = clean.replace('/artikel/', '');
      return <ArticleDetailPage slug={slug} navigate={navigate} />;
    }

    // Direct article slug aliases
    const directArticles = [
      'cara-mengurus-npwp-badan-dan-lapor-spt-pajak-temanggung',
      'panduan-izin-lingkungan-sppl-amdal-dlh-temanggung',
      'panduan-izin-tanda-daftar-gudang-tdg-temanggung',
      'panduan-analisis-data-bisnis-umkm-temanggung',
      'panduan-izin-usaha-nib-oss-temanggung',
      'biaya-balik-nama-dan-pajak-stnk-samsat-temanggung',
      'strategi-iklan-meta-ads-umkm-temanggung',
      'tips-membeli-tanah-kebun-sertifikat-shm-temanggung',
      'cara-bikin-website-bisnis-temanggung-masuk-google',
      'panduan-sertifikasi-halal-gratis-sehati-temanggung',
      'cara-mengurus-izin-edar-pirt-dinkes-temanggung',
      'syarat-bikin-pt-perorangan-di-temanggung',
      'panduan-mengurus-pbg-dan-slf-temanggung',
      'izin-usaha-kafe-kedai-kopi-restoran-temanggung',
      'panduan-mpp-mall-pelayanan-publik-temanggung'
    ];
    if (directArticles.includes(strippedSlug)) {
      return <ArticleDetailPage slug={strippedSlug} navigate={navigate} />;
    }

    // Blog Hub
    if (clean === '/blog') {
      return <BlogPage navigate={navigate} />;
    }

    // Workflow ("Bagaimana Caranya")
    if (clean === '/bagaimana-caranya' || clean === '/cara-kerja') {
      return <WorkflowPage navigate={navigate} />;
    }

    // About ("Tentang")
    if (clean === '/tentang' || clean === '/tentang-kami') {
      return <AboutPage navigate={navigate} />;
    }

    // FAQ
    if (clean === '/faq') {
      return <FaqPage navigate={navigate} />;
    }

    // Contact ("Kontak")
    if (clean === '/kontak') {
      return <ContactPage navigate={navigate} />;
    }

    // Terms
    if (clean === '/syarat-ketentuan' || clean === '/syarat') {
      return <LegalPage type="terms" navigate={navigate} />;
    }

    // Privacy
    if (clean === '/privasi' || clean === '/kebijakan-privasi') {
      return <LegalPage type="privacy" navigate={navigate} />;
    }

    // Fallback 404
    return (
      <main className="section not-found">
        <div className="container">
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>🔍</div>
          <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>Halaman Tidak Ditemukan</h1>
          <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto 24px' }}>
            Halaman yang Anda cari tidak ditemukan atau telah dipindahkan. Anda dapat kembali ke halaman utama untuk menemukan layanan yang Anda butuhkan.
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate('/')}
          >
            ← Kembali ke Beranda
          </button>
        </div>
      </main>
    );
  };

  return (
    <div className="app-layout">
      <Header currentPath={currentPath} navigate={navigate} />
      {renderRoute()}
      <Footer navigate={navigate} />
      <FloatingActionBtn />
      <ChecklistModal
        isOpen={checklistModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};
