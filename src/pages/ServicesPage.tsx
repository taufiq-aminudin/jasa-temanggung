import React, { useState } from 'react';
import { SERVICES, SITE_CONFIG } from '../data/siteData';
import { 
  Search, 
  ArrowRight, 
  Zap, 
  CheckCircle, 
  Filter, 
  Sparkles, 
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  Clock
} from 'lucide-react';

interface ServicesPageProps {
  navigate: (path: string) => void;
  openAuditModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ navigate, openAuditModal }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filtered = SERVICES.filter(s => {
    const matchesCat = selectedCategory === 'all' || s.category === selectedCategory;
    const matchesSearch = !search || 
      s.title.toLowerCase().includes(search.toLowerCase()) || 
      s.shortDesc.toLowerCase().includes(search.toLowerCase()) ||
      s.badge.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Hero Head */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono">
          <Zap className="w-3.5 h-3.5" />
          <span>Direktori Lengkap Layanan Pertumbuhan</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Layanan <span className="text-gradient-blue">Performance Marketing</span> & Rekayasa Konversi
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          Kami memadukan media berbayar dengan niat tinggi (Google & Meta Ads), optimasi mesin pencari semantik (SEO), desain konversi sub-detik (CRO), dan tracking server-side untuk memastikan setiap rupiah iklan menghasilkan nilai riil bagi bisnis Anda.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-panel p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 border-slate-700">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari layanan (Google, CAPI, SEO, CRO)..."
            className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto text-xs">
          {[
            { id: 'all', label: 'Semua (12)', activeGrad: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white' },
            { id: 'paid-ads', label: 'Paid Media', activeGrad: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' },
            { id: 'organic-seo', label: 'SEO & Otoritas', activeGrad: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white' },
            { id: 'conversion-cro', label: 'Landing Page & CRO', activeGrad: 'bg-gradient-to-r from-amber-600 to-orange-600 text-white' },
            { id: 'analytics-tech', label: 'Data & Tracking', activeGrad: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' },
            { id: 'creative-copy', label: 'Creative Lab', activeGrad: 'bg-gradient-to-r from-cyan-600 to-blue-500 text-white' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                selectedCategory === cat.id 
                  ? `${cat.activeGrad} shadow-md scale-105` 
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((service) => {
          const isAds = service.category === 'paid-ads';
          const isSeo = service.category === 'organic-seo';
          const isCro = service.category === 'conversion-cro';
          const glowClass = isAds ? 'glass-glow-blue' : isSeo ? 'glass-glow-emerald' : isCro ? 'glass-glow-amber' : 'glass-glow-purple';
          const accentColor = isAds ? 'from-blue-500 to-cyan-400' : isSeo ? 'from-emerald-500 to-teal-400' : isCro ? 'from-amber-500 to-rose-400' : 'from-purple-500 to-pink-400';

          return (
            <div
              key={service.id}
              onClick={() => navigate(`/layanan/${service.slug}`)}
              className={`glass-panel ${glowClass} shimmer-card rounded-2xl p-6 flex flex-col justify-between cursor-pointer group hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentColor} opacity-70 group-hover:opacity-100 transition-opacity`} />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
                    {service.badge}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span>{service.durationEst.split('+')[0]}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-400 dark:group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

              {/* Scope Deliverables */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <span className="text-[11px] font-mono text-slate-400 uppercase font-bold tracking-wider">
                  Ruang Lingkup Eksekusi:
                </span>
                {service.deliverables.slice(0, 3).map((del, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{del.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="block text-[10px] text-slate-500 font-mono">Investasi Mulai</span>
                <span className="text-xs font-bold font-mono text-cyan-400">{service.startingPrice}</span>
              </div>

              <div className="flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-cyan-300">
                <span>Rincian</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        );
      })}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="text-center py-16 space-y-3 glass-panel rounded-2xl">
          <div className="text-4xl">🔎</div>
          <h3 className="text-lg font-bold text-white">Tidak ada layanan yang sesuai</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Coba bersihkan kata kunci pencarian atau pilih kategori lain untuk melihat daftar solusi lengkap.
          </p>
          <button
            onClick={() => { setSearch(''); setSelectedCategory('all'); }}
            className="px-4 py-2 rounded-xl bg-slate-800 text-xs text-white hover:bg-slate-700"
          >
            Reset Filter Pencarian
          </button>
        </div>
      )}

      {/* Bottom Consultation Banner */}
      <div className="glass-panel rounded-2xl p-8 border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white">
            Bingung Menentukan Saluran yang Tepat untuk Bisnis Anda?
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Senior media strategist kami siap menganalisis model bisnis dan margin Anda dalam sesi konsultasi gratis.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={openAuditModal}
            className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500"
          >
            Audit Iklan Gratis
          </button>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20FUTech%20Digital,%20saya%20ingin%20konsultasi%20layanan%20iklan`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-200 bg-slate-900 border border-slate-700 hover:bg-slate-800 flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
};
