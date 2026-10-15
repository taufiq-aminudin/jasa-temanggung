import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/siteData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { LeadItem } from '../types';

interface ContactPageProps {
  onLeadSubmitted?: (lead: LeadItem) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onLeadSubmitted }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('Rp 10 - 25 Juta / bulan');
  const [service, setService] = useState('Google Ads Management');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const newLead: LeadItem = {
      id: `LEAD-${Date.now().toString().slice(-4)}`,
      createdAt: new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }) + ' WIB',
      name: name,
      company: company || 'Bisnis ' + name,
      city: 'Indonesia',
      phone: phone,
      email: email || `${name.toLowerCase().replace(/\s+/g, '')}@gmail.com`,
      monthlyBudget: budget,
      targetService: service,
      status: 'Baru Masuk',
      notes: message || 'Mengirim pesan formulir konsultasi kontak.'
    };

    try {
      const existing = JSON.parse(localStorage.getItem('futech_leads') || '[]');
      localStorage.setItem('futech_leads', JSON.stringify([newLead, ...existing]));
    } catch (err) {
      console.error(err);
    }

    if (onLeadSubmitted) {
      onLeadSubmitted(newLead);
    }

    setSubmitted(true);
  };

  const getWhatsAppContactLink = () => {
    const text = `Halo FUTech Digital Indonesia,%0A%0ASaya ingin konsultasi strategi periklanan:%0A- Nama: ${name}%0A- Perusahaan: ${company || '-'}%0A- Layanan: ${service}%0A- Rencana Budget: ${budget}%0A- Pesan: ${message || 'Ingin evaluasi akun & potensi ROAS'}`;
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Hero Head */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Mulai Langkah Pertumbuhan Terukur</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Konsultasi & Kontak Tim Ahli
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Diskusikan tantangan akuisisi pelanggan Anda bersama senior performance strategist kami. Kami menjamin respons cepat di bawah 15 menit pada jam kerja.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Contact Info & Office */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 border-slate-700">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Pusat Komunikasi & Kantor
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white">Wilayah Operasional Utama</strong>
                  <span>Jakarta Selatan & Jawa Tengah (Temanggung, Semarang, Yogyakarta)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white">WhatsApp & Telepon Resmi</strong>
                  <a href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`} className="text-emerald-400 hover:underline font-mono">
                    {SITE_CONFIG.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white">Email Proposal & Kerjasama</strong>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-cyan-400 hover:underline">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white">Jam Operasional Tim Media</strong>
                  <span>{SITE_CONFIG.operatingHours}</span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/30 space-y-2">
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Konsultasi Cepat via WhatsApp</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Hubungi langsung untuk respon kilat tanpa perlu mengisi form panjang.
              </p>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20FUTech%20Digital%20Indonesia,%20saya%20ingin%20jadwalkan%20konsultasi%20strategi%20iklan`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-1"
              >
                <span>Buka Obrolan WhatsApp Sekarang →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Consultation Booking Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border-slate-700 space-y-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Jadwalkan Diskusi Audit Akun Anda
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Silakan isi kebutuhan bisnis Anda di bawah ini untuk menerima evaluasi awal.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Nama Lengkap *</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Perusahaan / Brand</label>
                    <input
                      type="text"
                      placeholder="Nama PT, CV, atau Toko"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Nomor WhatsApp Aktif *</label>
                    <input
                      type="tel"
                      required
                      placeholder="0812-xxxx-xxxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Alamat Email Bisnis</label>
                    <input
                      type="email"
                      placeholder="nama@bisnisanda.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Fokus Layanan</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="Google Ads Management">Google Ads & PMax</option>
                      <option value="Meta Ads Management">Meta Ads (FB & IG)</option>
                      <option value="TikTok Ads Management">TikTok Ads Management</option>
                      <option value="SEO & Topical Authority">SEO & Topical Authority</option>
                      <option value="Lead Generation B2B">Lead Generation B2B</option>
                      <option value="Desain Landing Page CRO">Desain Landing Page CRO</option>
                      <option value="Server-Side Tracking CAPI">Server-Side Tracking CAPI</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Rencana Anggaran Media</label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="Rp 5 - 10 Juta / bulan">Rp 5 - 10 Juta / bulan</option>
                      <option value="Rp 10 - 25 Juta / bulan">Rp 10 - 25 Juta / bulan</option>
                      <option value="Rp 25 - 50 Juta / bulan">Rp 25 - 50 Juta / bulan</option>
                      <option value="Rp 50 Juta+ / bulan">Rp 50 Juta+ / bulan</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Tantangan Utama / Catatan Khusus</label>
                  <textarea
                    rows={3}
                    placeholder="Ceritakan singkat target omzet, kendala iklan saat ini, atau tujuan kampanye..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                  >
                    <span>Kirim Pengajuan Diskusi Strategi</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Permintaan Terkirim!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Terima kasih, <strong>{name}</strong>. Data Anda telah masuk ke sistem kami. Senior media buyer kami akan menghubungi Anda melalui WhatsApp di nomor <strong>{phone}</strong> dalam 1-2 jam kerja.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppContactLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-600/20"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Lanjutkan Langsung di WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs"
                  >
                    Kirim Form Baru
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
