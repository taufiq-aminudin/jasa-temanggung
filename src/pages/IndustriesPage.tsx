import React from 'react';
import { INDUSTRIES, SITE_CONFIG } from '../data/siteData';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  MessageSquare,
  Sparkles 
} from 'lucide-react';

interface IndustriesPageProps {
  navigate: (path: string) => void;
  openAuditModal: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ navigate, openAuditModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Hero Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
          <Building2 className="w-3.5 h-3.5" />
          <span>Solusi Sektoral Disesuaikan</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Strategi Pertumbuhan Disesuaikan dengan Industri Anda
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Tidak ada satu strategi tunggal yang cocok untuk semua bisnis. Kami merancang arsitektur kampanye, metrik KPI, dan alur konversi berdasarkan perilaku nyata pembeli di sektor Anda di Indonesia.
        </p>
      </div>

      {/* Industries Grid */}
      <div className="space-y-8">
        {INDUSTRIES.map((ind) => (
          <div 
            key={ind.id} 
            className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-700/80 space-y-8 relative overflow-hidden"
          >
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold">
                    {ind.badge}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-bold">
                    Benchmark ROAS: {ind.averageRoas}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {ind.title}
                </h2>
              </div>

              <button
                onClick={openAuditModal}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold self-start sm:self-auto flex items-center gap-2"
              >
                <span>Audit Sektor Ini</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-4xl">
              {ind.desc}
            </p>

            {/* Pain Points vs Growth Playbook 2-Col */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pain points */}
              <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-900/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Tantangan Umum & Titik Kebocoran</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {ind.painPoints.map((pp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold shrink-0">✕</span>
                      <span>{pp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Playbook */}
              <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-900/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>FUTech Growth Playbook</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {ind.growthPlaybook.map((sol, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold shrink-0">✓</span>
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom link */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 border-t border-slate-800">
              <span>Konsultasi strategi khusus sektor {ind.title} bersama lead strategist kami.</span>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20FUTech%20Digital,%20saya%20tertarik%20dengan%20solusi%20untuk%20sektor%20${encodeURIComponent(ind.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-white font-semibold flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Diskusikan di WhatsApp →</span>
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
