import React, { useState } from 'react';
import { SERVICES, SITE_CONFIG } from '../data/siteData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Zap,
  ChevronDown
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
  openAuditModal: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ 
  slug, 
  navigate, 
  openAuditModal 
}) => {
  const service = SERVICES.find(s => s.slug === slug) || SERVICES[0];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const getWhatsAppServiceInquiry = () => {
    const text = `Halo FUTech Digital Indonesia,%0A%0ASaya tertarik dengan layanan ${service.title}.%0ABisa bantu jelaskan rincian proposal, estimasi timeline, dan rekomendasi anggarannya?`;
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Back button */}
      <div>
        <button
          onClick={() => navigate('/layanan')}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Semua Layanan</span>
        </button>
      </div>

      {/* Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
              {service.badge}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Kategori: {service.categoryLabel}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {service.fullDesc}
          </p>

          {/* Key Metrics Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            {service.metrics.map((m, idx) => (
              <div key={idx} className="glass-panel p-4 rounded-xl space-y-1">
                <span className="text-[11px] text-slate-400 font-mono">{m.label}</span>
                <div className="text-xl sm:text-2xl font-black text-cyan-400 font-mono-numbers">
                  {m.value}
                </div>
                <span className="text-[10px] text-slate-500 block">{m.benchmark}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sticky Card */}
        <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border-blue-500/30 space-y-5 sticky top-24">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              Investasi & Pelaksanaan
            </span>
            <div className="text-2xl font-black text-white font-mono">
              {service.startingPrice}
            </div>
            <div className="text-xs text-slate-400 flex items-center gap-1 font-mono pt-1">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>{service.durationEst}</span>
            </div>
          </div>

          <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Dedicated Media Buyer & Strategist</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Laporan Dashboard Real-time 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Akses Penuh Akun Milik Klien</span>
            </div>
          </div>

          <div className="space-y-2.5 pt-2">
            <a
              href={getWhatsAppServiceInquiry()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Konsultasi Layanan via WhatsApp</span>
            </a>

            <button
              onClick={openAuditModal}
              className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-slate-200 bg-slate-900 border border-slate-700 hover:bg-slate-800 flex items-center justify-center gap-1.5"
            >
              <span>Minta Audit Akun Gratis</span>
            </button>
          </div>
        </div>
      </div>

      {/* Ruang Lingkup & Deliverables */}
      <div className="space-y-6 pt-6">
        <div className="space-y-1">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-bold">
            Ruang Lingkup Eksekusi
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Apa yang Kami Kerjakan untuk Anda
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.deliverables.map((item, idx) => (
            <div key={idx} className="glass-panel p-5 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pl-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4-Step Process Framework */}
      <div className="space-y-6 pt-6">
        <div className="space-y-1">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
            Alur Kerja Sistematis
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Tahapan Eksekusi Menuju Skalasi
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {service.process.map((step, idx) => (
            <div key={idx} className="glass-panel p-5 rounded-xl space-y-3 relative">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black font-mono text-blue-500/40">
                  {step.step}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                  {step.duration}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white">
                {step.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Specific Service FAQs */}
      <div className="space-y-6 pt-6 max-w-4xl">
        <div className="space-y-1">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">
            Tanya Jawab Teknis
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Pertanyaan Spesifik Seputar {service.title}
          </h2>
        </div>

        <div className="space-y-3">
          {service.faqs.map((faq, idx) => (
            <div key={idx} className="glass-panel rounded-xl overflow-hidden border border-slate-800">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-white"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-blue-400' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-slate-800 pt-2.5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
