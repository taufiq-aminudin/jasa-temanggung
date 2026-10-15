import React from 'react';
import { CASE_STUDIES, SITE_CONFIG } from '../data/siteData';
import { 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  BarChart2, 
  MessageSquare,
  ShieldCheck,
  Building
} from 'lucide-react';

interface CaseStudiesPageProps {
  navigate: (path: string) => void;
  openAuditModal: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ navigate, openAuditModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Hero Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          <TrendingUp className="w-3.5 h-3.5 animate-pulse" />
          <span>Hasil Klien Terverifikasi & Terukur</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Studi Kasus <span className="text-gradient-cyan">Transformasi & Skalasi Omzet</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          Ketahui data nyata di balik keberhasilan klien kami: dari pemulihan akun iklan yang terancam boncos hingga melipatgandakan return of ad spend (ROAS) dan volume lead terverifikasi.
        </p>
      </div>

      {/* Case Studies Detailed Cards */}
      <div className="space-y-10">
        {CASE_STUDIES.map((cs) => (
          <div 
            key={cs.id}
            className="glass-panel glass-glow-cyan shimmer-card rounded-3xl p-6 sm:p-10 border border-slate-700/80 space-y-8 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                    {cs.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {cs.industry} · {cs.location}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {cs.title}
                </h2>
                <div className="text-xs text-slate-400 mt-1">
                  Klien: <strong className="text-slate-200">{cs.client}</strong> ({cs.clientType})
                </div>
              </div>

              <button
                onClick={openAuditModal}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold self-start sm:self-auto flex items-center gap-2 shadow-lg shadow-blue-600/20 hover:scale-105 transition-all"
              >
                <span>Terapkan Strategi Ini</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[11px] text-slate-400 font-mono">Hasil ROAS</span>
                <div className="text-lg sm:text-xl font-black text-cyan-400 font-mono mt-1">
                  {cs.metrics.roas}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[11px] text-slate-400 font-mono">Pertumbuhan Omzet</span>
                <div className="text-lg sm:text-xl font-black text-emerald-400 font-mono mt-1">
                  {cs.metrics.revenueGrowth}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[11px] text-slate-400 font-mono">Efisiensi Biaya (CPA)</span>
                <div className="text-lg sm:text-xl font-black text-blue-400 font-mono mt-1">
                  {cs.metrics.cpaReduction}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[11px] text-slate-400 font-mono">Volume Hasil</span>
                <div className="text-lg sm:text-xl font-black text-indigo-400 font-mono mt-1">
                  {cs.metrics.leadsOrSales}
                </div>
              </div>
            </div>

            {/* Challenge & Strategy Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="space-y-2 p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <h4 className="font-bold text-white uppercase font-mono tracking-wider text-xs text-rose-400">
                  Tantangan Sebelum FUTech:
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {cs.challenge}
                </p>
              </div>

              <div className="space-y-2 p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <h4 className="font-bold text-white uppercase font-mono tracking-wider text-xs text-blue-400">
                  Intervensi Strategis Kami:
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {cs.strategy}
                </p>
              </div>
            </div>

            {/* 4 Execution Steps */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Langkah Eksekusi Lapangan:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cs.executionSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Quote Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 to-slate-900/60 border border-blue-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="italic text-xs sm:text-sm text-slate-200">
                "{cs.testimonial.quote}"
                <span className="block not-italic font-bold text-blue-300 mt-1">
                  — {cs.testimonial.author}, {cs.testimonial.role}
                </span>
              </div>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20FUTech%20Digital,%20saya%20tertarik%20dengan%20hasil%20studi%20kasus%20${encodeURIComponent(cs.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white shrink-0 flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Konsultasikan Hasil Ini</span>
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
