import React from 'react';
import { SITE_CONFIG } from '../data/siteData';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  navigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, navigate }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Beranda</span>
        </button>
      </div>

      <div className="space-y-3 border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Informasi Hukum & Kepatuhan Data</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          {isPrivacy ? 'Kebijakan Privasi & Keamanan Data' : 'Syarat & Ketentuan Layanan'}
        </h1>
        <p className="text-xs text-slate-400 font-mono">
          Pembaruan Terakhir: Oktober 2026 · Berlaku untuk seluruh klien FUTech Digital Indonesia
        </p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
        {isPrivacy ? (
          <>
            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-white">1. Komitmen Privasi dan Perlindungan Data</h2>
              <p>
                FUTech Digital Indonesia ({SITE_CONFIG.brand}) berkomitmen menjaga kerahasiaan data bisnis, akses akun periklanan, dan informasi pelanggan Anda sesuai dengan Undang-Undang Pelindungan Data Pribadi (UU PDP No. 27 Tahun 2022) Republik Indonesia.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-white">2. Kepemilikan Akun & Data Iklan</h2>
              <p>
                Seluruh akun periklanan (Google Ads, Meta Ads Manager, TikTok For Business, Google Analytics) dibuat atas nama klien atau dihubungkan melalui Business Manager resmi. Klien memegang kepemilikan mutlak 100% atas seluruh data kampanye, data audiens first-party, dan histori transaksi. FUTech tidak pernah menahan akses akun klien.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-white">3. Penggunaan Server-Side Tracking & Hashing</h2>
              <p>
                Dalam implementasi Meta Conversions API (CAPI) dan Google Enhanced Conversions, seluruh parameter data pelanggan (seperti email dan nomor telepon) dienkripsi secara otomatis menggunakan algoritma hashing SHA-256 satu arah sebelum dikirimkan ke server platform, menjaga kerahasiaan identitas konsumen.
              </p>
            </section>
          </>
        ) : (
          <>
            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-white">1. Ruang Lingkup Perjanjian</h2>
              <p>
                Syarat dan ketentuan ini mengatur hubungan kerja sama antara FUTech Digital Indonesia sebagai agensi penyedia jasa dan Anda sebagai pihak pengguna jasa/klien dalam pengelolaan kampanye periklanan, optimasi SEO, serta desain aset konversi.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-white">2. Alokasi dan Pembayaran Anggaran Media</h2>
              <p>
                Anggaran belanja media (ad spend) dibayarkan langsung oleh klien ke platform Google, Meta, atau TikTok menggunakan metode pembayaran resmi klien (Kartu Kredit/Debit/Virtual Account). Biaya manajemen jasa dibayarkan ke rekening resmi FUTech sesuai termin invoice yang disepakati.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-white">3. Standar Kinerja & Komitmen Etika</h2>
              <p>
                FUTech menjamin standar eksekusi teknis terbaik (white-hat SEO, compliance pedoman iklan resmi, setup tracking terverifikasi). Kami tidak menggunakan praktik manipulatif, suntik bot, atau teknik terlarang yang dapat membahayakan reputasi domain dan akun bisnis Anda.
              </p>
            </section>
          </>
        )}
      </div>
    </div>
  );
};
