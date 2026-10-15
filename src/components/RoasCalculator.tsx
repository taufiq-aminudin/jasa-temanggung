import React, { useState, useMemo } from 'react';
import { SITE_CONFIG } from '../data/siteData';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  ArrowRight, 
  Share2, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  MessageSquare
} from 'lucide-react';

interface RoasCalculatorProps {
  onBookConsultation?: () => void;
}

export const RoasCalculator: React.FC<RoasCalculatorProps> = ({ onBookConsultation }) => {
  // Calculator States
  const [budget, setBudget] = useState<number>(10000000); // 10 Juta
  const [aov, setAov] = useState<number>(250000); // 250 Ribu
  const [cvr, setCvr] = useState<number>(2.5); // 2.5%
  const [margin, setMargin] = useState<number>(55); // 55%
  const [cpc] = useState<number>(1250); // Benchmark CPC IDR 1.250

  // Presets
  const applyPreset = (preset: 'ecommerce' | 'b2b' | 'local' | 'highTicket') => {
    switch (preset) {
      case 'ecommerce':
        setBudget(15000000);
        setAov(280000);
        setCvr(2.8);
        setMargin(60);
        break;
      case 'b2b':
        setBudget(12000000);
        setAov(8500000);
        setCvr(1.2);
        setMargin(70);
        break;
      case 'local':
        setBudget(6000000);
        setAov(650000);
        setCvr(3.2);
        setMargin(65);
        break;
      case 'highTicket':
        setBudget(25000000);
        setAov(15000000);
        setCvr(0.8);
        setMargin(50);
        break;
    }
  };

  // Math Calculations
  const results = useMemo(() => {
    const estimatedClicks = Math.round(budget / cpc);
    const estimatedTransactions = Math.max(1, Math.round(estimatedClicks * (cvr / 100)));
    const projectedRevenue = estimatedTransactions * aov;
    const roas = projectedRevenue > 0 ? (projectedRevenue / budget) : 0;
    const grossProfit = projectedRevenue * (margin / 100);
    const netProfit = grossProfit - budget;
    const cpa = budget / estimatedTransactions;
    const breakEvenRoas = 100 / margin;

    return {
      estimatedClicks,
      estimatedTransactions,
      projectedRevenue,
      roas,
      grossProfit,
      netProfit,
      cpa,
      breakEvenRoas
    };
  }, [budget, aov, cvr, margin, cpc]);

  // Format IDR Helper
  const formatIDR = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // WhatsApp Share Message
  const getWhatsAppShareLink = () => {
    const text = `Halo FUTech Digital Indonesia,%0A%0ASaya baru saja melakukan simulasi di Kalkulator ROAS website Anda:%0A- Anggaran Iklan: ${formatIDR(budget)}%0A- Rata-rata Nilai Pesanan (AOV): ${formatIDR(aov)}%0A- Conversion Rate: ${cvr}%%0A- Estimasi Omzet Diproyeksikan: ${formatIDR(results.projectedRevenue)}%0A- Estimasi ROAS: ${results.roas.toFixed(2)}x%0A- Proyeksi Laba Bersih: ${formatIDR(results.netProfit)}%0A%0ASaya ingin konsultasi lebih lanjut bagaimana cara mencapai target performa ini untuk bisnis saya.`;
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-700/80 relative overflow-hidden shadow-2xl shadow-black/60">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header Widget */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulasi ROAS & Pertumbuhan Bisnis Indonesia</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Kalkulator Prediksi Hasil Iklan & ROI
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            Kalkulasikan potensi omzet, biaya per akuisisi pelanggan (CPA), dan laba bersih sebelum mengalokasikan anggaran iklan Anda.
          </p>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap gap-1.5 self-stretch md:self-auto bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => applyPreset('ecommerce')}
            className="px-2.5 py-1 text-xs rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            E-Commerce
          </button>
          <button
            onClick={() => applyPreset('b2b')}
            className="px-2.5 py-1 text-xs rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            B2B / Jasa
          </button>
          <button
            onClick={() => applyPreset('local')}
            className="px-2.5 py-1 text-xs rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Klinik / Lokal
          </button>
          <button
            onClick={() => applyPreset('highTicket')}
            className="px-2.5 py-1 text-xs rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            High-Ticket
          </button>
        </div>
      </div>

      {/* Grid Layout: Sliders (Left) vs Real-Time Results (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-8">
        
        {/* Left: Input Sliders */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Slider 1: Budget Iklan */}
          <div className="space-y-2 bg-slate-900/60 p-5 rounded-2xl border border-slate-800/80">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-white flex items-center gap-1.5">
                <span>Rencana Anggaran Iklan Bulanan</span>
              </label>
              <span className="font-mono text-base font-bold text-blue-400">
                {formatIDR(budget)}
              </span>
            </div>
            <input 
              type="range" 
              min={2000000} 
              max={150000000} 
              step={1000000}
              value={budget} 
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full cursor-pointer accent-blue-500" 
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-500">
              <span>Rp 2 Juta</span>
              <span>Rp 50 Juta</span>
              <span>Rp 150 Juta</span>
            </div>
          </div>

          {/* Slider 2: Average Order Value */}
          <div className="space-y-2 bg-slate-900/60 p-5 rounded-2xl border border-slate-800/80">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-white flex items-center gap-1.5">
                <span>Rata-rata Nilai Pesanan / Tiket Transaksi (AOV)</span>
              </label>
              <span className="font-mono text-base font-bold text-cyan-400">
                {formatIDR(aov)}
              </span>
            </div>
            <input 
              type="range" 
              min={50000} 
              max={20000000} 
              step={50000}
              value={aov} 
              onChange={(e) => setAov(Number(e.target.value))}
              className="w-full cursor-pointer accent-cyan-500" 
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-500">
              <span>Rp 50 Ribu</span>
              <span>Rp 5 Juta</span>
              <span>Rp 20 Juta</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Slider 3: Conversion Rate */}
            <div className="space-y-2 bg-slate-900/60 p-5 rounded-2xl border border-slate-800/80">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-white">
                  Conversion Rate (%)
                </label>
                <span className="font-mono text-sm font-bold text-emerald-400">
                  {cvr.toFixed(1)}%
                </span>
              </div>
              <input 
                type="range" 
                min={0.5} 
                max={10.0} 
                step={0.1}
                value={cvr} 
                onChange={(e) => setCvr(Number(e.target.value))}
                className="w-full cursor-pointer accent-emerald-500" 
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>0.5% (Awal)</span>
                <span>2.5% (Standar)</span>
                <span>10% (Tinggi)</span>
              </div>
            </div>

            {/* Slider 4: Gross Margin */}
            <div className="space-y-2 bg-slate-900/60 p-5 rounded-2xl border border-slate-800/80">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-white">
                  Margin Kotor Bisnis (%)
                </label>
                <span className="font-mono text-sm font-bold text-indigo-400">
                  {margin}%
                </span>
              </div>
              <input 
                type="range" 
                min={15} 
                max={90} 
                step={5}
                value={margin} 
                onChange={(e) => setMargin(Number(e.target.value))}
                className="w-full cursor-pointer accent-indigo-500" 
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>15%</span>
                <span>50%</span>
                <span>90%</span>
              </div>
            </div>
          </div>

          {/* Benchmark info note */}
          <div className="flex items-start gap-2 p-3.5 rounded-xl bg-blue-950/30 border border-blue-900/50 text-xs text-slate-400">
            <HelpCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <span>
              Perhitungan menggunakan standar industri CPC Indonesia (~Rp 1.250 pada Google & Meta Ads). Angka ini dapat lebih efisien dengan optimalisasi landing page dan strategi penawaran teruji.
            </span>
          </div>

        </div>

        {/* Right: Real-Time Results Card */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-blue-950/40 p-6 sm:p-7 rounded-2xl border border-blue-500/30 shadow-xl space-y-6">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Prediksi Hasil Real-Time
              </span>
              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${
                results.roas >= 4.0 
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                  : results.roas >= results.breakEvenRoas 
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
              }`}>
                {results.roas >= 4.0 ? '● Sangat Menguntungkan' : results.roas >= results.breakEvenRoas ? '● Untung Sehat' : '● Perlu Optimasi'}
              </span>
            </div>

            {/* Projected Revenue Big Metric */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-xs text-slate-400">Proyeksi Omzet Kotor (Gross Revenue)</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 font-mono-numbers">
                {formatIDR(results.projectedRevenue)}
              </div>
              <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                <span>Dari estimasi</span>
                <span className="text-blue-400 font-bold font-mono">{results.estimatedTransactions} transaksi / lead</span>
              </div>
            </div>

            {/* Two Key Metrics: ROAS & Net Profit */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[11px] text-slate-400">Estimasi ROAS</span>
                <div className="text-xl sm:text-2xl font-black text-cyan-400 font-mono-numbers mt-1">
                  {results.roas.toFixed(2)}x
                </div>
                <span className="text-[10px] text-slate-500">BEP: {results.breakEvenRoas.toFixed(2)}x</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[11px] text-slate-400">Estimasi Laba Bersih</span>
                <div className={`text-xl sm:text-2xl font-black font-mono-numbers mt-1 ${
                  results.netProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'
                }`}>
                  {formatIDR(results.netProfit)}
                </div>
                <span className="text-[10px] text-slate-500">Setelah budget & COGS</span>
              </div>
            </div>

            {/* Secondary Breakdown */}
            <div className="space-y-2 text-xs border-t border-slate-800 pt-3 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Estimasi Pengunjung / Klik:</span>
                <span className="font-mono font-medium">{results.estimatedClicks.toLocaleString('id-ID')} klik</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Biaya Akuisisi Per Pelanggan (CPA):</span>
                <span className="font-mono font-bold text-blue-400">{formatIDR(results.cpa)}</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-2">
            <a
              href={getWhatsAppShareLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Kirim Hasil Simulasi ke WhatsApp</span>
            </a>

            {onBookConsultation && (
              <button
                onClick={onBookConsultation}
                className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition-all flex items-center justify-center gap-1.5 border border-slate-700"
              >
                <span>Validasi Angka Ini Bersama Strategist</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
