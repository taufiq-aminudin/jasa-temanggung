import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/siteData';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Interactive Tooltip Toast */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 p-3 bg-slate-900/95 border border-blue-500/40 rounded-2xl shadow-xl shadow-black/60 text-xs text-white max-w-xs animate-in slide-in-from-bottom-3 duration-300">
          <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-ping"></div>
          <div>
            <strong className="block text-slate-100 font-semibold">Senior Strategist Online</strong>
            <span className="text-slate-400 text-[11px]">Butuh review cepat kampanye iklan Anda?</span>
          </div>
          <button 
            onClick={() => setShowTooltip(false)}
            className="p-1 rounded text-slate-400 hover:text-white ml-1"
            aria-label="Tutup Notifikasi"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20FUTech%20Digital%20Indonesia,%20saya%20ingin%20konsultasi%20mengenai%20optimasi%20dan%20skalasi%20iklan`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 rounded-full text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-950/80 hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300 border border-emerald-400/40"
        aria-label="Chat WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-4 h-4 fill-white" />
        <span className="tracking-wide">Konsultasi WhatsApp</span>
      </a>
    </div>
  );
};
