import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/siteData';

interface EstimatorWidgetProps {
  navigate: (path: string) => void;
}

export const EstimatorWidget: React.FC<EstimatorWidgetProps> = ({ navigate }) => {
  const [service, setService] = useState('Jasa Perizinan OSS');
  const [area, setArea] = useState('Temanggung Kota');
  const [urgency, setUrgency] = useState('Standar');

  const calculateEstimate = () => {
    let range = 'Mulai Rp 150.000 – Rp 500.000 (Pendampingan & Berkas)';
    let days = '1–3 Hari Kerja';

    if (service.includes('Iklan') || service.includes('Ads')) {
      range = 'Mulai Rp 350.000 (Setup Akun & Copywriting) + Saldo Iklan';
      days = '1–2 Hari Setup';
    } else if (service.includes('Analis') || service.includes('Data')) {
      range = 'Mulai Rp 350.000 – Rp 750.000 (Dashboard & Cleaning Data)';
      days = '2–4 Hari Kerja';
    } else if (service.includes('Konsultasi')) {
      range = 'Mulai Rp 250.000 / sesi 90 menit (Tatap Muka / Online)';
      days = 'Sesuai Jadwal';
    } else if (service.includes('Notaris') || service.includes('Perizinan')) {
      range = 'Estimasi Penyiapan Rp 300.000 – Rp 1.500.000 + Biaya PNBP Resmi';
      days = '3–7 Hari Kerja';
    } else if (service.includes('Property') || service.includes('Properti')) {
      range = 'Fee Pendampingan & Survei Rp 250.000 – Rp 1.000.000';
      days = '2–5 Hari';
    } else if (service.includes('STNK')) {
      range = 'Jasa Administrasi Rp 75.000 – Rp 250.000 + Pajak Resmi PKB';
      days = '1 Hari Kerja';
    } else if (service.includes('Website')) {
      range = 'Mulai Rp 750.000 – Rp 2.500.000 (Termasuk Domain .com)';
      days = '3–5 Hari Kerja';
    } else if (service.includes('Tenaga Kerja')) {
      range = 'Biaya Administrasi & Seleksi Terjangkau per Penempatan';
      days = '2–7 Hari';
    }

    return { range, days };
  };

  const { range, days } = calculateEstimate();

  const handleWhatsAppConsult = (e: React.MouseEvent) => {
    e.preventDefault();
    const text = `Halo Jasa Temanggung, saya ingin konsultasi estimasi:\n\n• Layanan: ${service}\n• Area/Kecamatan: ${area}\n• Urgensi: ${urgency}\n\nMohon info detail alur dan langkah selanjutnya. Terima kasih!`;
    const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="estimator-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
        <div>
          <span className="eyebrow small">Kalkulator Estimasi Cepat</span>
          <h2 style={{ fontSize: '24px', marginBottom: '6px' }}>Hitung Perkiraan Biaya &amp; Konsultasi Langsung</h2>
          <p style={{ margin: 0, fontSize: '14px' }}>Pilih jenis layanan dan kecamatan Anda di Kabupaten Temanggung untuk mendapatkan gambaran awal.</p>
        </div>
        <button
          type="button"
          className="btn btn-secondary"
          style={{ fontSize: '13px', padding: '9px 16px' }}
          onClick={() => navigate('/kontak')}
        >
          Form Lengkap →
        </button>
      </div>

      <div className="estimator-grid">
        <div className="field">
          <label htmlFor="calc-service">Pilih Layanan</label>
          <select
            id="calc-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="Jasa Perizinan OSS">Jasa Perizinan OSS &amp; NIB</option>
            <option value="Jasa Iklan Online & Ads">Jasa Iklan Online (Google &amp; Meta Ads)</option>
            <option value="Jasa Analis Data Bisnis">Jasa Analis Data Bisnis &amp; Dashboard</option>
            <option value="Jasa Konsultasi Bisnis">Jasa Konsultasi Bisnis &amp; Scale-Up UMKM</option>
            <option value="Jasa Notaris & PPAT">Jasa Notaris &amp; PPAT Pertanahan</option>
            <option value="Jasa Property">Jasa Jual Beli Properti &amp; Tanah</option>
            <option value="Jasa STNK SIM">Jasa STNK &amp; Administrasi Kendaraan</option>
            <option value="Pembuatan Website">Pembuatan Website &amp; SEO</option>
            <option value="Jasa Agen Tenaga Kerja">Agen Tenaga Kerja (Operator/Driver/ART)</option>
            <option value="Lainnya">Layanan Kebutuhan Khusus Lainnya</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="calc-area">Kecamatan Domisili di Temanggung</label>
          <select
            id="calc-area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            {SITE_CONFIG.kecamatanList.map((kec) => (
              <option key={kec} value={kec}>
                Kecamatan {kec}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="calc-urgency">Tingkat Kebutuhan Waktu</label>
          <select
            id="calc-urgency"
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
          >
            <option value="Standar">Standar (Sesuai Alur Regulasi Normal)</option>
            <option value="Mendesak / Cepat">Mendesak / Prioritas Cepat</option>
            <option value="Terjadwal">Terjadwal untuk Bulan Depan</option>
          </select>
        </div>

        <div className="field" style={{ display: 'flex', alignItems: 'flex-end' }}>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%', height: '44px' }}
            onClick={handleWhatsAppConsult}
          >
            Konsultasikan via WhatsApp →
          </button>
        </div>
      </div>

      <div className="estimator-result">
        <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
          Estimasi Rentang Awal:
        </div>
        <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink)', marginBottom: '4px' }}>
          {range}
        </div>
        <div style={{ fontSize: '13px', color: 'var(--muted)' }}>
          Area: <strong>{area}</strong> • Waktu: <strong>{days}</strong> ({urgency})
        </div>
      </div>
    </div>
  );
};
