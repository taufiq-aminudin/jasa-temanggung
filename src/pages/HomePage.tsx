import React, { useState } from 'react';
import { SERVICES, GENERAL_FAQS, SITE_CONFIG } from '../data/siteData';
import { EstimatorWidget } from '../components/EstimatorWidget';
import { ComparisonTable } from '../components/ComparisonTable';
import { TestimonialsSection } from '../components/TestimonialsSection';

interface HomePageProps {
  navigate: (path: string) => void;
  openChecklistModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate, openChecklistModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Newsletter State
  const [newsEmail, setNewsEmail] = useState('');
  const [newsName, setNewsName] = useState('');
  const [newsSuccess, setNewsSuccess] = useState(false);

  const filteredServices = SERVICES.filter((service) => {
    const matchesCat = selectedCategory === 'all' || service.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCat;
    const terms = q.split(/\s+/).filter(Boolean);
    const haystack = `${service.title} ${service.desc} ${service.search}`.toLowerCase();
    const matchesSearch = terms.every(term => haystack.includes(term));
    return matchesCat && matchesSearch;
  });

  const handleHeroQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const el = document.getElementById('layanan-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;
    setNewsSuccess(true);
    setNewsEmail('');
    setNewsName('');
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="hero-section">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Pusat Layanan Terpadu Temanggung</span>
            <h1 style={{ fontSize: 'clamp(28px,3.8vw,42px)', lineHeight: 1.22, margin: '12px 0 16px' }}>
              Pusat Layanan Jasa di Temanggung:{' '}
              <span style={{ color: 'var(--primary)' }}>Solusi Terpercaya Kebutuhan Usaha &amp; Legalitas</span>
            </h1>
            <p className="hero-sub">
              Layanan bantuan profesional dan pendampingan terpercaya di Kabupaten Temanggung: perizinan usaha OSS NIB, notaris &amp; PPAT, properti tanah, pajak STNK Samsat, iklan digital (Meta &amp; Google Ads), website, hingga penyediaan tenaga kerja.
            </p>
            <div className="hero-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate('/kontak')}
              >
                Ceritakan Kebutuhan →
              </button>
              <a
                className="btn btn-secondary"
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20Jasa%20Temanggung%2C%20saya%20ingin%20konsultasi`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderColor: '#86efac', color: '#15803d', background: '#f0fdf4' }}
              >
                <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }} />
                WA: {SITE_CONFIG.whatsappDisplay}
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate('/jasa')}
              >
                Jelajahi Semua Jasa
              </button>
            </div>
            <div className="trust-row">
              <span>✓ Berbasis di Temanggung</span>
              <span>✓ Konsultasi Awal Transparan</span>
              <span>✓ Scope &amp; Estimasi Dijelaskan Terbuka</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="orb orb-a" />
            <div className="orb orb-b" />
            <div className="hero-card-inner">
              <span className="mini-label">SIMULASI CEPAT &amp; PRAKTIS</span>
              <strong>Pilih layanan, dapatkan pemetaan langsung.</strong>
              <p>Hemat waktu Anda tanpa harus bertanya dari satu kantor ke kantor lain.</p>
              
              <form onSubmit={handleHeroQuickSearch} className="fake-search">
                <input
                  type="text"
                  placeholder="Cari jasa (cth: NIB, ads, STNK, website)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ border: 0, outline: 0, flex: 1, padding: '8px 10px', fontSize: '13px', background: 'transparent' }}
                  aria-label="Cari jasa cepat di Temanggung"
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ padding: '7px 14px', fontSize: '12px', borderRadius: '10px', whiteSpace: 'nowrap' }}
                >
                  Cari ↓
                </button>
              </form>

              <div style={{ marginTop: '14px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={openChecklistModal}
                  style={{
                    background: '#eff6ff',
                    border: '1px solid #bfdbfe',
                    color: '#1d4ed8',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  📄 Download Checklist PDF Gratis
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Estimator Widget */}
      <section className="section" style={{ paddingTop: '20px', paddingBottom: '30px' }}>
        <div className="container">
          <EstimatorWidget navigate={navigate} />
        </div>
      </section>

      {/* Services Directory Section */}
      <section className="section" id="layanan-section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Katalog Layanan Temanggung</span>
              <h2>Temukan Bantuan Sesuai Kebutuhan Anda</h2>
              <p>Pilih kategori atau ketik kebutuhan Anda untuk menemukan jasa pendampingan yang tepat.</p>
            </div>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate('/jasa')}
            >
              Lihat Direktori Penuh ({SERVICES.length}) →
            </button>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="finder">
            <input
              type="text"
              placeholder="Cari layanan (contoh: iklan, konsultasi, NIB, STNK, PT, tanah, ads, website)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Filter kategori layanan"
            >
              <option value="all">Semua Kategori ({SERVICES.length})</option>
              <option value="marketing">Pemasaran, Iklan &amp; Kreatif</option>
              <option value="bisnis">Bisnis, SDM &amp; Analisis Data</option>
              <option value="dokumen">Dokumen &amp; Legalitas Usaha</option>
              <option value="properti">Properti &amp; Pertanahan</option>
              <option value="kendaraan">Administrasi Kendaraan</option>
              <option value="digital">Website &amp; IT</option>
            </select>
          </div>

          <div style={{ marginTop: '10px', color: 'var(--muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
            <span>Menampilkan {filteredServices.length} dari {SERVICES.length} layanan yang cocok.</span>
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: 700 }}
              >
                ✕ Reset Filter
              </button>
            )}
          </div>

          {/* Empty Search State */}
          {filteredServices.length === 0 && (
            <div className="callout" style={{ textAlign: 'center', padding: '36px 20px', margin: '20px 0' }}>
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>🔍</div>
              <h3 style={{ marginBottom: '6px', fontSize: '18px' }}>Layanan tidak ditemukan</h3>
              <p style={{ margin: '0 auto 16px', color: 'var(--muted)', fontSize: '14px', maxWidth: '540px' }}>
                Tidak ada layanan yang cocok dengan kata kunci atau filter tersebut. Anda bisa reset filter atau ceritakan langsung kebutuhan Anda.
              </p>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                >
                  Lihat Semua Layanan
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => navigate('/kontak')}
                >
                  Konsultasi Kebutuhan Khusus →
                </button>
              </div>
            </div>
          )}

          {/* Service Cards Grid */}
          <div className="grid-3" style={{ marginTop: '24px' }}>
            {filteredServices.map((srv) => (
              <article key={srv.id} className="service-card">
                <div className="service-icon" style={{ background: srv.iconBg, color: srv.iconColor }}>
                  {srv.icon}
                </div>
                <div>
                  <span className="eyebrow small" style={{ background: srv.iconBg, color: srv.iconColor }}>
                    {srv.badge}
                  </span>
                  <h3>{srv.title}</h3>
                  <p>{srv.desc}</p>
                  <button
                    type="button"
                    className="text-link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    onClick={() => navigate(`/jasa/${srv.slug}`)}
                  >
                    Lihat detail layanan →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Comparison Table Section */}
          <ComparisonTable navigate={navigate} />
        </div>
      </section>

      {/* Workflow Process Section */}
      <section className="section" style={{ background: '#f8fafc', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Alur Pelayanan Transparan</span>
              <h2>4 Tahapan Mudah &amp; Terarah</h2>
              <p>Proses pendampingan terstruktur agar urusan Anda di Temanggung selesai sesuai ekspektasi.</p>
            </div>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate('/bagaimana-caranya')}
            >
              Penjelasan Alur Lengkap →
            </button>
          </div>

          <div className="process">
            <div className="process-step">
              <span className="step-no">1</span>
              <h3>Konsultasi &amp; Analisis Kebutuhan</h3>
              <p>Ceritakan apa yang ingin diurus atau dicapai. Kami petakan regulasi, syarat berkas, dan estimasi biaya di awal secara terbuka.</p>
            </div>
            <div className="process-step">
              <span className="step-no">2</span>
              <h3>Verifikasi &amp; Penyiapan Dokumen</h3>
              <p>Pemeriksaan keabsahan berkas (KTP, sertifikat tanah, atau data usaha) untuk menghindari penolakan dari dinas/instansi terkait.</p>
            </div>
            <div className="process-step">
              <span className="step-no">3</span>
              <h3>Eksekusi Pendampingan Profesional</h3>
              <p>Proses pendaftaran, koordinasi loket dinas, pembuatan materi iklan, atau setting teknis dijalankan dengan pembaruan berkala via WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Showcase */}
      <TestimonialsSection />

      {/* Free Checklist Lead Magnet Card */}
      <section className="section" style={{ paddingTop: '10px', paddingBottom: '30px' }}>
        <div className="container">
          <div className="newsletter-card">
            <div className="newsletter-content">
              <span className="eyebrow small">PANDUAN &amp; CHECKLIST GRATIS</span>
              <h2>Checklist Standar Legalitas Usaha Temanggung 2026</h2>
              <p>
                Panduan praktis perizinan usaha bagi pemilik kafe, UMKM olahan pangan, toko kelontong, dan gudang di Temanggung. Ketahui syarat NIB OSS, sertifikasi halal, P-IRT Dinkes, hingga izin lingkungan.
              </p>
              <div className="newsletter-benefits">
                <div>✓ Format PDF Resmi, Praktis Dicetak</div>
                <div>✓ Referensi Standar Kode KBLI 5 Digit</div>
                <div>✓ Alur Loket MPP &amp; Kontak Instansi Terkait</div>
              </div>
            </div>

            <div className="newsletter-form-box">
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Unduh Langsung Sekarang</h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px' }}>
                Klik tombol di bawah untuk membuka form unduh instan dokumen PDF.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={openChecklistModal}
              >
                📄 Buka Form Download Checklist (PDF) →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Pertanyaan Populer</span>
              <h2>FAQ Seputar Jasa Temanggung</h2>
              <p>Jawaban atas pertanyaan yang paling sering diajukan klien dan pelaku usaha di Temanggung.</p>
            </div>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate('/faq')}
            >
              Lihat Semua FAQ →
            </button>
          </div>

          <div className="faq-list">
            {GENERAL_FAQS[0].items.map((item, idx) => (
              <div key={idx} className={`faq-item ${openFaqIndex === idx ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                >
                  <span>{item.q}</span>
                  <span>{openFaqIndex === idx ? '×' : '+'}</span>
                </button>
                <div className="faq-a">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="section" style={{ paddingTop: '10px' }}>
        <div className="container">
          <div className="band">
            <div className="split">
              <div>
                <span className="eyebrow small" style={{ background: 'rgba(255,255,255,.15)', color: '#93c5fd' }}>
                  MULAI HARI INI
                </span>
                <h2 style={{ fontSize: 'clamp(24px,3.5vw,38px)', margin: '10px 0 14px' }}>
                  Punya Kebutuhan Jasa di Temanggung? Ceritakan Sekarang.
                </h2>
                <p>
                  Dapatkan konsultasi awal secara transparan. Hemat waktu dan energi Anda dengan pendampingan yang berpengalaman di wilayah Temanggung.
                </p>
                <div className="cta-row">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => navigate('/kontak')}
                  >
                    Kirim Pesan Konsultasi →
                  </button>
                  <a
                    className="btn btn-secondary"
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20Jasa%20Temanggung%2C%20saya%20ingin%20konsultasi`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💬 WhatsApp Sekarang
                  </a>
                </div>
              </div>
              <div>
                <ul className="check-list" style={{ color: '#e2e8f0' }}>
                  <li style={{ color: '#e2e8f0' }}>Melayani seluruh 20 kecamatan di Kabupaten Temanggung</li>
                  <li style={{ color: '#e2e8f0' }}>Penjelasan alur resmi dan estimasi biaya terbuka tanpa biaya tersembunyi</li>
                  <li style={{ color: '#e2e8f0' }}>Jaminan kerahasiaan berkas identitas dan data bisnis Anda</li>
                  <li style={{ color: '#e2e8f0' }}>Didampingi tenaga konsultan lokal yang mengerti medan birokrasi &amp; pasar daerah</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
