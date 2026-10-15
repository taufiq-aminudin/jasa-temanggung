import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/siteData';
import { MessageSquare, X, Sparkles } from 'lucide-react';
import { triggerSubtleConfetti } from '../utils/confetti';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Interactive Tooltip Toast */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 p-3.5 glass-panel border border-emerald-500/40 rounded-2xl shadow-2xl text-xs text-white max-w-xs animate-in slide-in-from-bottom-3 duration-300 relative">
          <div className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <strong className="text-slate-100 font-bold text-xs">Senior Strategist Online</strong>
              <Sparkles className="w-3 h-3 text-amber-400" />
            </div>
            <span className="text-slate-400 text-[11px] block mt-0.5">Respons cepat &lt; 5 menit via WA</span>
          </div>
          <button 
            onClick={() => setShowTooltip(false)}
            className="p-1 rounded text-slate-400 hover:text-white ml-1 transition-colors"
            aria-label="Tutup Notifikasi"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button with Radiant Glow Ring */}
      <div className="relative group">
        {/* Pulsing Colorful Halo */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse"></div>

        <a
          href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20FUTech%20Digital%20Indonesia,%20saya%20ingin%20konsultasi%20mengenai%20optimasi%20dan%20skalasi%20iklan`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => triggerSubtleConfetti()}
          className="relative flex items-center gap-2.5 px-4.5 py-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-full text-white font-bold text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border border-emerald-300/40"
          aria-label="Chat WhatsApp"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-90"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="tracking-wide">Konsultasi WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
