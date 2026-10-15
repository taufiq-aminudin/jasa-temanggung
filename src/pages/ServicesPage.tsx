import React, { useState } from 'react';
import { SERVICES } from '../data/siteData';

interface ServicesPageProps {
  navigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ navigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = SERVICES.filter((service) => {
    const matchesCat = selectedCategory === 'all' || service.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCat;
    const terms = q.split(/\s+/).filter(Boolean);
    const haystack = `${service.title} ${service.desc} ${service.search}`.toLowerCase();
    const matchesSearch = terms.every(term => haystack.includes(term));
    return matchesCat && matchesSearch;
  });

  return (
    <main>
      <section className="service-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a> / Semua Jasa
          </div>
          <div className="service-head">
            <span className="eyebrow">Direktori Layanan Lokal</span>
            <h1>Semua Jasa di Temanggung</h1>
            <p className="hero-sub">
              Temukan bantuan untuk urusan iklan online, konsultasi bisnis, perizinan OSS, notaris, properti tanah, perpajakan, kendaraan, hingga penyediaan tenaga kerja di Temanggung.
            </p>

            <div className="finder">
              <input
                type="text"
                placeholder="Cari layanan (contoh: iklan, konsultasi, NIB, STNK, PT, tanah, ads, website, tenaga kerja)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label="Filter kategori"
              >
                <option value="all">Semua Kategori ({SERVICES.length})</option>
                <option value="marketing">Pemasaran, Iklan &amp; Kreatif</option>
                <option value="bisnis">Bisnis &amp; Analisis Data</option>
                <option value="dokumen">Dokumen &amp; Legalitas Usaha</option>
                <option value="properti">Properti &amp; Pertanahan</option>
                <option value="kendaraan">Administrasi Kendaraan</option>
                <option value="digital">Website &amp; IT</option>
              </select>
            </div>

            <div style={{ marginTop: '10px', color: 'var(--muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', fontSize: '13px' }}>
              <span>Menampilkan {filteredServices.length} dari {SERVICES.length} layanan yang cocok.</span>
              {(searchQuery || selectedCategory !== 'all') && (
                <button
                  type="button"
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: 700 }}
                >
                  ✕ Reset Pencarian
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '35px' }}>
        <div className="container">
          {filteredServices.length === 0 && (
            <div className="callout" style={{ textAlign: 'center', padding: '36px 20px', margin: '20px 0' }}>
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>🔍</div>
              <h3 style={{ marginBottom: '6px', fontSize: '18px' }}>Layanan tidak ditemukan</h3>
              <p style={{ margin: '0 auto 16px', color: 'var(--muted)', fontSize: '14px', maxWidth: '540px' }}>
                Tidak ada layanan yang cocok dengan kata kunci atau filter tersebut. Anda bisa reset pencarian atau konsultasikan langsung kebutuhan Anda kepada kami.
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

          <div className="grid-3">
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
        </div>
      </section>
    </main>
  );
};
