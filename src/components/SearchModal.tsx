import React, { useState, useEffect, useRef } from 'react';
import { SERVICES, INDUSTRIES, CASE_STUDIES, ARTICLES } from '../data/siteData';
import { 
  Search, 
  X, 
  ArrowRight, 
  Zap, 
  BookOpen, 
  Building2, 
  TrendingUp, 
  Calculator,
  Layers
} from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  navigate: (path: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, navigate }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent, but if called here:
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const filteredServices = SERVICES.filter(s => 
    !q || s.title.toLowerCase().includes(q) || s.shortDesc.toLowerCase().includes(q) || s.categoryLabel.toLowerCase().includes(q)
  );

  const filteredIndustries = INDUSTRIES.filter(i =>
    !q || i.title.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q)
  );

  const filteredCaseStudies = CASE_STUDIES.filter(c =>
    !q || c.title.toLowerCase().includes(q) || c.client.toLowerCase().includes(q) || c.industry.toLowerCase().includes(q)
  );

  const filteredArticles = ARTICLES.filter(a =>
    !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.tags.some(t => t.toLowerCase().includes(q))
  );

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="glass-panel w-full max-w-2xl rounded-2xl border border-blue-500/40 overflow-hidden shadow-2xl shadow-black/80">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-slate-900/90">
          <Search className="w-5 h-5 text-blue-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari layanan, studi kasus, industri, atau artikel (contoh: PMax, CAPI, ROAS, B2B, SEO)..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          {query ? (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 border border-slate-700 font-mono">
              ESC
            </kbd>
          )}
        </div>

        {/* Quick Tools Shortcuts */}
        {!query && (
          <div className="p-3 bg-slate-950/60 border-b border-slate-800/80 flex flex-wrap gap-2 text-xs">
            <span className="text-slate-500 self-center font-mono text-[11px] mr-1">Alat Pintas:</span>
            <button
              onClick={() => handleSelect('/kalkulator-roas')}
              className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 hover:bg-blue-500/20 flex items-center gap-1.5 transition-colors"
            >
              <Calculator className="w-3.5 h-3.5 text-cyan-400" />
              <span>Kalkulator ROAS</span>
            </button>
            <button
              onClick={() => handleSelect('/admin-portal')}
              className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 flex items-center gap-1.5 transition-colors"
            >
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>Portal Manajemen Leads</span>
            </button>
            <button
              onClick={() => handleSelect('/studi-kasus')}
              className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
              <span>4 Studi Kasus Nyata</span>
            </button>
          </div>
        )}

        {/* Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4 divide-y divide-slate-800/60">
          
          {/* Services */}
          {filteredServices.length > 0 && (
            <div className="space-y-1.5">
              <div className="text-[11px] font-mono text-blue-400 px-2 uppercase tracking-wider font-bold">
                Layanan Performance & Pertumbuhan ({filteredServices.length})
              </div>
              <div className="space-y-1">
                {filteredServices.slice(0, 5).map(s => (
                  <div
                    key={s.id}
                    onClick={() => handleSelect(`/layanan/${s.slug}`)}
                    className="p-2.5 rounded-xl hover:bg-slate-800/70 cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                        <Zap className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-300 flex items-center gap-2">
                          <span>{s.title}</span>
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">
                            {s.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1">{s.shortDesc}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 transition-colors shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Case Studies */}
          {filteredCaseStudies.length > 0 && (
            <div className="pt-3 space-y-1.5">
              <div className="text-[11px] font-mono text-cyan-400 px-2 uppercase tracking-wider font-bold">
                Studi Kasus Pembuktian ({filteredCaseStudies.length})
              </div>
              <div className="space-y-1">
                {filteredCaseStudies.map(cs => (
                  <div
                    key={cs.id}
                    onClick={() => handleSelect(`/studi-kasus`)}
                    className="p-2.5 rounded-xl hover:bg-slate-800/70 cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 flex items-center gap-2">
                        <span>{cs.title}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300">
                          {cs.metrics.roas}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400">{cs.client} · {cs.location}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Articles */}
          {filteredArticles.length > 0 && (
            <div className="pt-3 space-y-1.5">
              <div className="text-[11px] font-mono text-emerald-400 px-2 uppercase tracking-wider font-bold">
                Wawasan & Panduan Teknis ({filteredArticles.length})
              </div>
              <div className="space-y-1">
                {filteredArticles.slice(0, 4).map(a => (
                  <div
                    key={a.id}
                    onClick={() => handleSelect(`/wawasan/${a.slug}`)}
                    className="p-2.5 rounded-xl hover:bg-slate-800/70 cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-300">
                        {a.title}
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{a.excerpt}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-emerald-400 transition-colors shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {filteredServices.length === 0 && filteredCaseStudies.length === 0 && filteredArticles.length === 0 && (
            <div className="text-center py-10 space-y-2">
              <div className="text-3xl">🔍</div>
              <div className="text-sm font-bold text-white">Tidak Ada Hasil untuk "{query}"</div>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Coba gunakan kata kunci umum seperti: Google, Meta, ROAS, B2B, Tracking, TikTok, atau kontak tim kami langsung.
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
