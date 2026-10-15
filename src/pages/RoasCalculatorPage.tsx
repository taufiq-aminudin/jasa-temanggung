import React from 'react';
import { RoasCalculator } from '../components/RoasCalculator';
import { 
  Calculator, 
  HelpCircle, 
  BookOpen, 
  TrendingUp, 
  ShieldCheck,
  CheckCircle2,
  DollarSign
} from 'lucide-react';

interface RoasCalculatorPageProps {
  openAuditModal: () => void;
}

export const RoasCalculatorPage: React.FC<RoasCalculatorPageProps> = ({ openAuditModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Intro */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <Calculator className="w-3.5 h-3.5" />
          <span>Alat Perencanaan Finansial Iklan</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Kalkulator ROAS & Proyeksi Laba Iklan Digital
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Jangan pernah memulai kampanye periklanan digital tanpa mengetahui batas Break-Even ROAS Anda. Gunakan kalkulator ini untuk menguji kelayakan model bisnis Anda sebelum belanja media dimulai.
        </p>
      </div>

      {/* Main Interactive Tool Component */}
      <RoasCalculator onBookConsultation={openAuditModal} />

      {/* Educational Guide on ROAS & Economics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div className="glass-panel p-6 rounded-2xl space-y-3 border-slate-700">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>Rumus Break-Even ROAS</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Break-Even ROAS adalah titik impas di mana laba kotor Anda sama persis dengan biaya iklan yang dikeluarkan.
          </p>
          <div className="p-3 bg-slate-950 rounded-xl font-mono text-xs text-cyan-300 border border-slate-800">
            BEP ROAS = 100 / Margin Kotor (%)
          </div>
          <span className="text-[11px] text-slate-400 block">
            Contoh: Margin kotor 50% butuh minimal ROAS 2.0x untuk tidak rugi.
          </span>
        </div>

        <div className="glass-panel p-6 rounded-2xl space-y-3 border-slate-700">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <DollarSign className="w-4 h-4" />
            <span>Benchmark CPC di Indonesia</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Rata-rata biaya per klik (CPC) berdasarkan riset kampanye kami di Indonesia:
          </p>
          <ul className="space-y-1 text-xs text-slate-300 font-mono">
            <li>• Google Search: Rp 1.200 - Rp 3.500</li>
            <li>• Meta Ads (FB/IG): Rp 800 - Rp 2.200</li>
            <li>• TikTok Ads: Rp 500 - Rp 1.400</li>
          </ul>
        </div>

        <div className="glass-panel p-6 rounded-2xl space-y-3 border-slate-700">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>3 Pengungkit Laba Cepat</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Cara paling cepat menaikkan ROAS tanpa menambah budget:
          </p>
          <ul className="space-y-1.5 text-xs text-slate-300">
            <li className="flex items-start gap-1.5">
              <span className="text-emerald-400">1.</span>
              <span>Naikkan AOV dengan strategi bundling & upsell di keranjang.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-emerald-400">2.</span>
              <span>Percepat load landing page ke bawah 1.5 detik (+30% konversi).</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-emerald-400">3.</span>
              <span>Follow-up WhatsApp otomatis dalam 5 detik pertama.</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};
