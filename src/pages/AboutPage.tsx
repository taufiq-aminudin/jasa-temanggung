import React from 'react';
import { SITE_CONFIG } from '../data/siteData';

interface AboutPageProps {
  navigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  return (
    <main>
      <section className="service-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a> / Tentang Kami
          </div>
          <div className="service-head">
            <span className="eyebrow">Profil &amp; Dedikasi Lokal</span>
            <h1>Tentang Jasa Temanggung</h1>
            <p className="hero-sub">
              Platform layanan profesional terintegrasi yang didirikan untuk menjembatani pelaku usaha mikro, kecil, menengah, serta warga Kabupaten Temanggung dengan solusi perizinan, legalitas, pemasaran, dan kebutuhan operasional.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">Latar Belakang</span>
              <h2>Hadir untuk Mempermudah Urusan Anda di Temanggung</h2>
              <p>
                Banyak pelaku usaha di Temanggung menghadapi kendala dalam mengurus legalitas usaha OSS, sertifikasi pangan P-IRT, pendaftaran halal, hingga administrasi pertanahan. Regulasi yang terus berkembang dan keterbatasan waktu seringkali menjadi beban tersendiri.
              </p>
              <p>
                Jasa Temanggung hadir sebagai mitra pendamping terpercaya. Kami menggabungkan pemahaman regulasi birokrasi daerah, jaringan profesional notaris dan konsultan perpajakan, serta keahlian pemasaran digital untuk memberikan solusi menyeluruh dalam satu pintu (one-stop service).
              </p>
            </div>
            <div>
              <div className="panel" style={{ background: '#f8faff', borderColor: '#cedcff' }}>
                <h3 style={{ fontSize: '20px', marginBottom: '14px', color: 'var(--primary)' }}>Visi &amp; Komitmen Kami</h3>
                <div style={{ display: 'grid', gap: '14px' }}>
                  <div>
                    <strong>1. Legalitas Terjangkau untuk Semua</strong>
                    <p style={{ margin: '4px 0 0', fontSize: '14px' }}>Memastikan setiap UMKM di Temanggung bisa berbadan hukum dan memiliki izin resmi tanpa terbebani biaya tinggi.</p>
                  </div>
                  <div>
                    <strong>2. Transparansi Penuh Tanpa Calo</strong>
                    <p style={{ margin: '4px 0 0', fontSize: '14px' }}>Setiap biaya resmi negara (PNBP) dan jasa pendampingan dijelaskan secara rinci di awal.</p>
                  </div>
                  <div>
                    <strong>3. Menumbuhkan Ekosistem Bisnis Lokal</strong>
                    <p style={{ margin: '4px 0 0', fontSize: '14px' }}>Mendorong produk-produk unggulan kopi, tembakau, kuliner, dan kerajinan Temanggung merambah pasar nasional.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Area Coverage Showcase */}
          <div className="panel" style={{ marginTop: '40px' }}>
            <span className="eyebrow">Jangkauan Wilayah</span>
            <h2>Melayani 20 Kecamatan di Kabupaten Temanggung</h2>
            <p style={{ marginBottom: '20px' }}>
              Kami melayani pendampingan lapangan maupun koordinasi berkas di seluruh kecamatan berikut:
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: '10px'
            }}>
              {SITE_CONFIG.kecamatanList.map((kec) => (
                <div
                  key={kec}
                  style={{
                    padding: '10px 14px',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: '#334155'
                  }}
                >
                  📍 Kec. {kec}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate('/kontak')}
            >
              Hubungi Kami untuk Konsultasi →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
