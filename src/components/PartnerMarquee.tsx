import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Flame, 
  Zap, 
  Award, 
  ShieldCheck, 
  BarChart, 
  Globe 
} from 'lucide-react';

interface PartnerBadge {
  name: string;
  role: string;
  icon: React.ElementType;
  colorClass: string;
  glowClass: string;
  tag: string;
}

const PARTNERS: PartnerBadge[] = [
  {
    name: 'Google Premier Partner',
    role: 'Search & Performance Max',
    icon: Globe,
    colorClass: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    glowClass: 'group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]',
    tag: 'Top 3% Agensi'
  },
  {
    name: 'Meta Business Partner',
    role: 'FB & IG Conversion API',
    icon: Zap,
    colorClass: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
    glowClass: 'group-hover:border-indigo-400 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]',
    tag: 'Official Meta Pro'
  },
  {
    name: 'TikTok Ads Partner',
    role: 'Live Shopping & Spark Ads',
    icon: Flame,
    colorClass: 'text-pink-400 bg-pink-500/10 border-pink-500/30',
    glowClass: 'group-hover:border-pink-400 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]',
    tag: 'Viral Scale'
  },
  {
    name: 'Shopify Plus Partner',
    role: 'E-Commerce Infrastructure',
    icon: Award,
    colorClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    glowClass: 'group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]',
    tag: 'Certified CRO'
  },
  {
    name: 'Google Analytics 4',
    role: 'Measurement & BigQuery',
    icon: BarChart,
    colorClass: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    glowClass: 'group-hover:border-amber-400 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]',
    tag: 'Server CAPI'
  },
  {
    name: 'HubSpot Solution',
    role: 'CRM & Lead Automation',
    icon: Sparkles,
    colorClass: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
    glowClass: 'group-hover:border-orange-400 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]',
    tag: 'Inbound Growth'
  },
  {
    name: 'Marketplace Ads Pro',
    role: 'Shopee & Tokopedia Boost',
    icon: ShieldCheck,
    colorClass: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    glowClass: 'group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]',
    tag: 'GMV Accelerator'
  }
];

export const PartnerMarquee: React.FC = () => {
  // Duplicate array for seamless infinite looping
  const duplicatedPartners = [...PARTNERS, ...PARTNERS];

  return (
    <div className="relative w-full py-8 overflow-hidden select-none">
      {/* Left and right fade gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[var(--bg-dark)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[var(--bg-dark)] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-2">
        {duplicatedPartners.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.name}-${index}`}
              className={`group flex items-center gap-3 px-4 sm:px-5 py-3 rounded-xl glass-panel border transition-all duration-300 ${item.glowClass} whitespace-nowrap cursor-pointer hover:-translate-y-0.5`}
            >
              {/* Vibrant Colored Icon Container */}
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${item.colorClass} transition-transform group-hover:scale-110 duration-200`}>
                <Icon className="w-4 h-4" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${item.colorClass}`}>
                    {item.tag}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">
                  {item.role}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
