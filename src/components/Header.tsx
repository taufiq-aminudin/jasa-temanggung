import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../data/siteData';
import { 
  Zap, 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  Calculator, 
  CheckCircle, 
  BookOpen, 
  PhoneCall, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  MessageSquare
} from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
  openSearch: () => void;
  openAuditModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentPath, 
  navigate, 
  openSearch, 
  openAuditModal 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  };

  const isActive = (path: string) => {
    if (path === '/' && (currentPath === '/' || currentPath === '')) return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-header shadow-2xl shadow-black/40 py-3' : 'bg-[#0b1120]/80 backdrop-blur-md py-4 border-b border-slate-800/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <div 
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-3 cursor-pointer group select-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-500 to-cyan-400 p-[1.5px] shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-[#0b1120] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-lg tracking-tighter">
                    FU
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-extrabold text-white tracking-tight">FUTech</span>
                  <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    INDONESIA
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 tracking-wide font-mono uppercase">
                  Performance & Growth
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <button 
                onClick={() => handleNavClick('/')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-blue-400 bg-blue-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                Beranda
              </button>

              <button 
                onClick={() => handleNavClick('/layanan')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                  isActive('/layanan') ? 'text-blue-400 bg-blue-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                Layanan
              </button>

              <button 
                onClick={() => handleNavClick('/industri')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/industri') ? 'text-blue-400 bg-blue-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                Industri
              </button>

              <button 
                onClick={() => handleNavClick('/studi-kasus')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/studi-kasus') ? 'text-blue-400 bg-blue-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                Studi Kasus
              </button>

              <button 
                onClick={() => handleNavClick('/kalkulator-roas')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  isActive('/kalkulator-roas') ? 'text-cyan-400 bg-cyan-500/10' : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50'
                }`}
              >
                <Calculator className="w-3.5 h-3.5 text-cyan-400" />
                <span>Kalkulator ROAS</span>
              </button>

              <button 
                onClick={() => handleNavClick('/wawasan')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive('/wawasan') || isActive('/artikel') ? 'text-blue-400 bg-blue-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                Wawasan
              </button>

              <button 
                onClick={() => handleNavClick('/admin-portal')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-mono transition-colors flex items-center gap-1 ${
                  isActive('/admin-portal') ? 'text-emerald-400 bg-emerald-500/10' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
                title="Lead Pipeline Demo"
              >
                <Layers className="w-3 h-3 text-emerald-400" />
                <span>Portal Leads</span>
              </button>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Quick Search Shortcut */}
              <button 
                onClick={openSearch}
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700/70 text-slate-400 hover:text-white hover:border-slate-500 text-xs font-mono transition-all"
                title="Cari Layanan & Panduan (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span>Cari</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 border border-slate-700">⌘K</kbd>
              </button>

              {/* Free Audit Button */}
              <button
                onClick={openAuditModal}
                className="relative group px-4 py-2 rounded-xl text-xs font-semibold text-white overflow-hidden shadow-lg shadow-blue-600/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 group-hover:opacity-90 transition-opacity"></div>
                <div className="relative flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Audit Iklan Gratis</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={openSearch}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                aria-label="Cari"
              >
                <Search className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-blue-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] z-40 bg-[#0b1120]/95 backdrop-blur-2xl border-t border-slate-800 overflow-y-auto px-4 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            <button 
              onClick={() => handleNavClick('/')}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                isActive('/') ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              <span>Beranda</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </button>

            <button 
              onClick={() => handleNavClick('/layanan')}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                isActive('/layanan') ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              <span>Semua Layanan (12 Solusi)</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </button>

            <button 
              onClick={() => handleNavClick('/industri')}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                isActive('/industri') ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              <span>Solusi Industri & Sektor</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </button>

            <button 
              onClick={() => handleNavClick('/studi-kasus')}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                isActive('/studi-kasus') ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              <span>Studi Kasus & Hasil Klien</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </button>

            <button 
              onClick={() => handleNavClick('/kalkulator-roas')}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                isActive('/kalkulator-roas') ? 'bg-cyan-600/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span>Kalkulator ROI & ROAS</span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">Simulasi</span>
            </button>

            <button 
              onClick={() => handleNavClick('/wawasan')}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                isActive('/wawasan') || isActive('/artikel') ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              <span>Wawasan & Panduan Teknis</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </button>

            <button 
              onClick={() => handleNavClick('/admin-portal')}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                isActive('/admin-portal') ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Portal Manajemen Lead</span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">Pipeline Demo</span>
            </button>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openAuditModal();
              }}
              className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Dapatkan Audit Iklan Gratis</span>
            </button>

            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20FUTech%20Digital,%20saya%20ingin%20konsultasi%20strategi%20pertumbuhan%20bisnis%20dan%20iklan`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900 border border-slate-700/80 flex items-center justify-center gap-2 hover:bg-slate-800"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: {SITE_CONFIG.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
