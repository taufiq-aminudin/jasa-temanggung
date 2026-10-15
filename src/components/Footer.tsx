import React from 'react';
import { SITE_CONFIG } from '../data/siteData';
import { 
  ArrowUpRight, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  MessageSquare, 
  Calculator, 
  Layers, 
  Sparkles 
} from 'lucide-react';

interface FooterProps {
  navigate: (path: string) => void;
  openAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate, openAuditModal }) => {
  return (
    <footer className="bg-[#070b14] border-t border-slate-800/80 text-slate-400 text-sm">
      {/* Top Pre-Footer Callout */}
      <div className="border-b border-slate-800/60 bg-gradient-to-b from-transparent to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="glass-panel rounded-2xl p-8 sm:p-10 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 border-blue-500/30">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Konsultasi Pertumbuhan & Diagnosa Gratis</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Siap Melipatgandakan Omzet Bisnis Anda dengan Data Terukur?
              </h3>
              <p className="text-slate-400 text-sm max-w-2xl">
                Dapatkan evaluasi histori kampanye iklan dan 3 rekomendasi taktis mengatasi kebocoran budget dalam 48 jam kerja.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <button
                onClick={openAuditModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2"
              >
                <span>Mulai Audit Iklan Gratis</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20FUTech%20Digital,%20saya%20ingin%20jadwalkan%20sesi%20konsultasi%20pertumbuhan`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Langsung</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => navigate('/')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#0b1120] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-lg">
                    FU
                  </span>
                </div>
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">FUTech Digital</span>
                <span className="block text-xs text-blue-400 font-mono">Indonesia Performance Agency</span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Kami merekayasa sistem akuisisi pelanggan berbasis data presisi: Google Ads, Meta Ads (FB & IG), TikTok Ads, SEO Topical Authority, dan Server-Side Tracking untuk mengakselerasi pertumbuhan bisnis di Indonesia.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Jakarta & Jawa Tengah (Temanggung, Semarang, Yogyakarta)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.whatsappDisplay} (WhatsApp Resmi)
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Layanan Paid & Organic */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase font-mono text-blue-400">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navigate('/layanan/google-ads-management')} className="hover:text-white transition-colors text-left">
                  Google Ads & PMax
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/layanan/meta-ads-management')} className="hover:text-white transition-colors text-left">
                  Meta Ads (FB & Instagram)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/layanan/tiktok-ads-management')} className="hover:text-white transition-colors text-left">
                  TikTok Ads & Spark Ads
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/layanan/search-engine-optimization')} className="hover:text-white transition-colors text-left">
                  SEO & Topical Authority
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/layanan/technical-seo-website-audits')} className="hover:text-white transition-colors text-left">
                  Audit Teknis Website
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/layanan/performance-marketing')} className="hover:text-white transition-colors text-left">
                  Performance Omnichannel
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Konversi & Teknologi */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase font-mono text-cyan-400">
              Konversi & Data
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navigate('/layanan/landing-page-design-cro')} className="hover:text-white transition-colors text-left">
                  Desain Landing Page & CRO
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/layanan/lead-generation-services')} className="hover:text-white transition-colors text-left">
                  Lead Gen B2B & High-Ticket
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/layanan/marketing-analytics-conversion-tracking')} className="hover:text-white transition-colors text-left">
                  Server-Side Tracking (CAPI)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/layanan/marketing-automation-crm-integration')} className="hover:text-white transition-colors text-left">
                  WhatsApp CRM & Automasi
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/layanan/advertising-creative-ad-copywriting')} className="hover:text-white transition-colors text-left">
                  Kreatif & Direct Copywriting
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/layanan/social-media-marketing')} className="hover:text-white transition-colors text-left">
                  Social Media & Brand Trust
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Solusi & Alat Interaktif */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase font-mono text-emerald-400">
              Alat & Navigasi
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navigate('/kalkulator-roas')} className="hover:text-white transition-colors text-left flex items-center gap-1.5 text-cyan-300">
                  <Calculator className="w-3 h-3" />
                  <span>Kalkulator ROI & ROAS</span>
                </button>
              </li>
              <li>
                <button onClick={openAuditModal} className="hover:text-white transition-colors text-left flex items-center gap-1.5 text-blue-300">
                  <Sparkles className="w-3 h-3" />
                  <span>Diagnosa Funnel Gratis</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/industri')} className="hover:text-white transition-colors text-left">
                  Solusi Sektor Industri
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/studi-kasus')} className="hover:text-white transition-colors text-left">
                  Studi Kasus Pembuktian
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/wawasan')} className="hover:text-white transition-colors text-left">
                  Knowledge Hub & Artikel
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/admin-portal')} className="hover:text-white transition-colors text-left flex items-center gap-1 text-slate-300 font-mono">
                  <Layers className="w-3 h-3 text-emerald-400" />
                  <span>Lead Pipeline Demo</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} FUTech Digital Indonesia. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => navigate('/kebijakan-privasi')} className="hover:text-slate-300 transition-colors">
              Kebijakan Privasi
            </button>
            <button onClick={() => navigate('/syarat-ketentuan')} className="hover:text-slate-300 transition-colors">
              Syarat & Ketentuan
            </button>
            <button onClick={() => navigate('/kontak')} className="hover:text-slate-300 transition-colors">
              Hubungi Tim Kami
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
