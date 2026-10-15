import React, { useState } from 'react';
import { ARTICLES } from '../data/siteData';

interface ArticlesPageProps {
  navigate: (path: string) => void;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({ navigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCat = selectedCategory === 'all' || art.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCat;
    const terms = q.split(/\s+/).filter(Boolean);
    const haystack = `${art.title} ${art.description} ${art.search} ${art.author}`.toLowerCase();
    const matchesSearch = terms.every(term => haystack.includes(term));
    return matchesCat && matchesSearch;
  });

  return (
    <main>
      <section className="service-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a> / Artikel &amp; Panduan
          </div>
          <div className="service-head">
            <span className="eyebrow">Pusat Pengetahuan &amp; Edukasi</span>
            <h1>Panduan Bisnis, Legalitas, &amp; Layanan di Temanggung</h1>
            <p className="hero-sub">
              Dapatkan wawasan terverifikasi seputar perizinan usaha OSS-RBA, sertifikasi halal, aturan pajak Samsat, strategi pemasaran digital, hingga tips transaksi properti yang aman di Temanggung.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          {/* Search & Category Filter Toolbar */}
          <div className="finder" style={{ marginTop: 0, marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '14px', color: 'var(--muted)', fontSize: '16px' }}>
              🔍
            </div>
            <input
              type="text"
              placeholder="Cari artikel atau panduan (contoh: NIB, OSS, halal, samsat, STNK, meta ads, tanah, SEO, website)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Cari artikel dan panduan Temanggung"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Filter kategori artikel"
            >
              <option value="all">Semua Kategori ({ARTICLES.length})</option>
              <option value="legalitas">Legalitas &amp; Usaha</option>
              <option value="sertifikasi">Pangan &amp; Sertifikasi (P-IRT, Halal)</option>
              <option value="properti">Properti &amp; Bangunan (PBG, SHM)</option>
              <option value="otomotif">Otomotif &amp; Samsat</option>
              <option value="digital">Pemasaran Digital, SEO &amp; Data</option>
            </select>
          </div>

          <div style={{ marginTop: '-4px', marginBottom: '24px', color: 'var(--muted)', fontSize: '13px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Menampilkan {filteredArticles.length} dari {ARTICLES.length} artikel dan panduan.</span>
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontSize: '12px', fontWeight: 700 }}
              >
                ✕ Reset Pencarian
              </button>
            )}
          </div>

          {/* Empty Search State */}
          {filteredArticles.length === 0 && (
            <div className="callout" style={{ textAlign: 'center', padding: '36px 20px', margin: '20px 0', background: '#f8fafc', border: '1px dashed #cbd5e1' }}>
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>📖</div>
              <h3 style={{ marginBottom: '6px', fontSize: '18px' }}>Artikel tidak ditemukan</h3>
              <p style={{ margin: '0 auto 16px', color: 'var(--muted)', fontSize: '14px', maxWidth: '540px' }}>
                Tidak ada artikel yang cocok dengan kata kunci tersebut. Coba kata kunci lain atau ceritakan langsung pertanyaan Anda kepada tim kami.
              </p>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                >
                  Lihat Semua Artikel
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

          {/* Articles Hub Grid */}
          <div className="article-hub-grid">
            {filteredArticles.map((art) => (
              <article key={art.slug} className="article-card">
                <div>
                  <span
                    className="article-badge"
                    style={{ background: art.badgeBg, color: art.badgeColor }}
                  >
                    {art.categoryLabel}
                  </span>
                  <h3>
                    <a
                      href={`/artikel/${art.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/artikel/${art.slug}`);
                      }}
                    >
                      {art.title}
                    </a>
                  </h3>
                  <p>{art.description}</p>
                </div>
                <div className="article-card-footer">
                  <span>📅 {art.date} • ⏱ {art.readTime}</span>
                  <a
                    href={`/artikel/${art.slug}`}
                    className="text-link"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/artikel/${art.slug}`);
                    }}
                  >
                    Baca Selengkapnya →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
