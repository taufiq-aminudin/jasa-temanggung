import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/siteData';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  ShieldAlert, 
  MessageSquare,
  Activity,
  Layers
} from 'lucide-react';
import { LeadItem } from '../types';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeadSubmitted?: (lead: LeadItem) => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ 
  isOpen, 
  onClose,
  onLeadSubmitted 
}) => {
  const [step, setStep] = useState<number>(1);
  
  // Form Responses
  const [industry, setIndustry] = useState<string>('E-Commerce & Retail D2C');
  const [channels, setChannels] = useState<string[]>(['Meta Ads (FB/IG)']);
  const [painPoints, setPainPoints] = useState<string>('ROAS fluktuatif & biaya akuisisi makin mahal');
  const [budget, setBudget] = useState<string>('Rp 10 - 25 Juta / bulan');
  
  // Contact
  const [name, setName] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [city, setCity] = useState<string>('Temanggung');
  const [phone, setPhone] = useState<string>('');
  
  // Results
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  const [auditScore, setAuditScore] = useState<number>(68);

  if (!isOpen) return null;

  const toggleChannel = (ch: string) => {
    if (channels.includes(ch)) {
      if (channels.length > 1) {
        setChannels(channels.filter(c => c !== ch));
      }
    } else {
      setChannels([...channels, ch]);
    }
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Calculate simulated score based on criteria
    let score = 65;
    if (budget.includes('50') || budget.includes('100')) score += 10;
    if (channels.length >= 2) score += 8;
    if (painPoints.includes('tracking')) score -= 12;
    if (painPoints.includes('banned')) score -= 15;
    score = Math.min(88, Math.max(45, score));
    setAuditScore(score);

    // Create lead item for pipeline demo
    const newLead: LeadItem = {
      id: `LEAD-${Date.now().toString().slice(-4)}`,
      createdAt: new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }) + ' WIB',
      name: name,
      company: company || 'Bisnis ' + name,
      city: city || 'Indonesia',
      phone: phone,
      email: `${name.toLowerCase().replace(/\s+/g, '')}@gmail.com`,
      monthlyBudget: budget,
      targetService: `${industry} (${channels.join(', ')})`,
      status: 'Baru Masuk',
      notes: `Masalah: ${painPoints}. Hasil skor audit: ${score}/100.`
    };

    // Save to local storage
    try {
      const existing = JSON.parse(localStorage.getItem('futech_leads') || '[]');
      localStorage.setItem('futech_leads', JSON.stringify([newLead, ...existing]));
    } catch (err) {
      console.error(err);
    }

    if (onLeadSubmitted) {
      onLeadSubmitted(newLead);
    }

    setIsCalculated(true);
  };

  const getWhatsAppBriefLink = () => {
    const text = `Halo FUTech Digital,%0A%0ASaya telah menyelesaikan Form Audit Kesiapan Iklan di website:%0A- Nama: ${name}%0A- Bisnis: ${company || '-'} (${city})%0A- Industri: ${industry}%0A- Channel Aktif: ${channels.join(', ')}%0A- Masalah Utama: ${painPoints}%0A- Budget Media: ${budget}%0A- Skor Diagnosa: ${auditScore}/100%0A%0AMohon bantu review detail kebocoran funnel dan jadwal diskusinya.`;
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-2xl rounded-3xl border border-blue-500/40 p-6 sm:p-8 relative max-h-[92vh] overflow-y-auto shadow-2xl shadow-blue-900/30">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-4 h-4" />
        </button>

        {!isCalculated ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Growth Readiness Diagnostic (Langkah {step} dari 4)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Audit Kesiapan Funnel & Iklan Digital
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Jawab 4 pertanyaan singkat untuk mengidentifikasi kebocoran konversi pada kampanye pemasaran Anda.
              </p>
            </div>

            {/* Step 1: Industry */}
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <label className="text-sm font-semibold text-slate-200 block">
                  1. Pilih sektor atau model bisnis yang paling mewakili Anda:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'E-Commerce & Retail D2C',
                    'B2B & Layanan Profesional',
                    'Bisnis Jasa / Klinik Lokal',
                    'SaaS & Teknologi Digital',
                    'UMKM & Produk Makanan/Herbal',
                    'Properti & Konstruksi'
                  ].map((ind) => (
                    <button
                      key={ind}
                      type="button"
                      onClick={() => setIndustry(ind)}
                      className={`p-3 rounded-xl text-left text-xs sm:text-sm font-medium transition-all border ${
                        industry === ind 
                          ? 'bg-blue-600/20 border-blue-500 text-white shadow-md shadow-blue-500/10' 
                          : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold flex items-center gap-2"
                  >
                    <span>Lanjut ke Saluran Iklan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Channels */}
            {step === 2 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <label className="text-sm font-semibold text-slate-200 block">
                  2. Saluran pemasaran apa yang sedang atau ingin Anda prioritaskan? (Pilih satu atau lebih):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Google Search & PMax',
                    'Meta Ads (FB/IG)',
                    'TikTok Ads & Shop',
                    'SEO & Website Organik',
                    'WhatsApp CRM Follow-up',
                    'Belum Pernah Beriklan'
                  ].map((ch) => {
                    const isSelected = channels.includes(ch);
                    return (
                      <button
                        key={ch}
                        type="button"
                        onClick={() => toggleChannel(ch)}
                        className={`p-3 rounded-xl text-left text-xs sm:text-sm font-medium transition-all border flex items-center justify-between ${
                          isSelected 
                            ? 'bg-cyan-600/20 border-cyan-500 text-white' 
                            : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span>{ch}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs sm:text-sm flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Kembali</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold flex items-center gap-2"
                  >
                    <span>Lanjut ke Hambatan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Pain Points */}
            {step === 3 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <label className="text-sm font-semibold text-slate-200 block">
                  3. Apa hambatan atau kebocoran terbesar yang paling mengkhawatirkan Anda?
                </label>
                <div className="space-y-2">
                  {[
                    'ROAS fluktuatif & biaya akuisisi makin mahal',
                    'Banyak klik / pesan WhatsApp tapi sedikit yang bayar',
                    'Akun iklan sering dibatasi (restricted) atau terkena penalti',
                    'Tracking pixel & data konversi tidak akurat setelah update browser',
                    'Website atau landing page lambat dan membingungkan pembeli'
                  ].map((pp) => (
                    <button
                      key={pp}
                      type="button"
                      onClick={() => setPainPoints(pp)}
                      className={`w-full p-3 rounded-xl text-left text-xs sm:text-sm font-medium transition-all border ${
                        painPoints === pp 
                          ? 'bg-blue-600/20 border-blue-500 text-white' 
                          : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {pp}
                    </button>
                  ))}
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs sm:text-sm flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Kembali</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold flex items-center gap-2"
                  >
                    <span>Langkah Terakhir</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Budget & Contact */}
            {step === 4 && (
              <form onSubmit={handleCalculate} className="space-y-4 animate-in fade-in duration-200">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Estimasi Anggaran Iklan Bulanan:
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Rp 3 - 5 Juta / bulan">Rp 3 - 5 Juta / bulan (Tahap Awal)</option>
                    <option value="Rp 5 - 15 Juta / bulan">Rp 5 - 15 Juta / bulan (Tumbuh)</option>
                    <option value="Rp 15 - 40 Juta / bulan">Rp 15 - 40 Juta / bulan (Scale Up)</option>
                    <option value="Rp 40 - 100 Juta+ / bulan">Rp 40 - 100 Juta+ / bulan (Aggressive)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Nama Anda *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Nomor WhatsApp Aktif *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812-xxxx-xxxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Nama Bisnis / Brand
                    </label>
                    <input
                      type="text"
                      placeholder="Nama Toko / Perusahaan"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Kota Operasional
                    </label>
                    <input
                      type="text"
                      placeholder="Temanggung, Semarang, Jakarta, dll"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs sm:text-sm flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Kembali</span>
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-600/30"
                  >
                    <span>Kalkulasi Skor Audit Sekarang</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

          </div>
        ) : (
          /* Diagnostic Results View */
          <div className="space-y-6 animate-in zoom-in-95 duration-200">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                Hasil Diagnosa Kesiapan Pertumbuhan
              </span>
              <h3 className="text-2xl font-black text-white">
                Skor Efisiensi Corong Pemasaran Anda
              </h3>
            </div>

            {/* Score Big Meter */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-around gap-4 text-center sm:text-left">
              <div className="relative flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-4 border-slate-800 flex items-center justify-center bg-slate-950">
                  <span className="text-3xl font-black font-mono text-blue-400">
                    {auditScore}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">/100</span>
                </div>
              </div>

              <div className="space-y-1 max-w-sm">
                <div className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-1.5">
                  <Activity className="w-4 h-4 text-amber-400" />
                  <span>Potensi Pertumbuhan Sangat Terbuka</span>
                </div>
                <p className="text-xs text-slate-400">
                  Funnel bisnis Anda memiliki dasar yang baik di sektor <strong className="text-slate-200">{industry}</strong>, tetapi terdapat setidaknya 2 kebocoran konversi yang menaikkan biaya akuisisi Anda.
                </p>
              </div>
            </div>

            {/* 3 Diagnosed Funnel Leaks */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                3 Titik Kebocoran Teridentifikasi:
              </h4>

              <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-900/40 text-xs text-slate-300 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-rose-300 block mb-0.5">Sinyal Konversi Terputus di Browser</strong>
                  <span>Sebanyak 25-35% transaksi tidak terlacak oleh algoritma Meta/Google karena belum terpasangnya Server-Side CAPI Gateway.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-900/40 text-xs text-slate-300 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300 block mb-0.5">Friksi Konversi pada Alur WhatsApp</strong>
                  <span>Calon pembeli yang masuk dari iklan tidak mendapatkan respons salam otomatis di bawah 10 detik dan tanpa kualifikasi form awal.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-950/20 border border-blue-900/40 text-xs text-slate-300 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-blue-300 block mb-0.5">Rekomendasi Skalasi Budget ({budget})</strong>
                  <span>Alokasikan 70% pada winning angle penawaran dan 30% untuk sandbox kreatif mingguan guna mencegah penurunan ROAS.</span>
                </div>
              </div>
            </div>

            {/* Next Steps CTA */}
            <div className="pt-2 space-y-2.5">
              <a
                href={getWhatsAppBriefLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Klaim Hasil Audit & Diskusi Solusi di WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-xl text-xs text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
              >
                Selesai & Tutup Jendela
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
