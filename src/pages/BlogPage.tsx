import React, { useState } from 'react';
import { ARTICLES } from '../data/siteData';

interface BlogPageProps {
  navigate: (path: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ navigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const featuredArticle = ARTICLES[0]; // Panduan Lengkap Cara Mengurus NIB OSS-RBA

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCat = selectedCategory === 'all' || art.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCat;
    const terms = q.split(/\s+/).filter(Boolean);
    const haystack = `${art.title} ${art.description} ${art.search}`.toLowerCase();
    const matchesSearch = terms.every(term => haystack.includes(term));
    return matchesCat && matchesSearch;
  });

  return (
    <main>
      <section className="service-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a> / Blog Bisnis Temanggung
          </div>
          <div className="service-head">
            <span className="eyebrow">Wawasan &amp; Regulasi Daerah</span>
            <h1>Blog &amp; Panduan Terkini Temanggung</h1>
            <p className="hero-sub">
              Kumpulan tulisan mendalam seputar perizinan usaha OSS-RBA, legalitas PT Perorangan, izin edar P-IRT, PBG bangunan, pajak Samsat, dan strategi pengembangan UMKM di Kabupaten Temanggung.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Editor's Choice Hero Post */}
      <section className="section" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg,#0f172a,#1e3a8a)',
            color: '#ffffff',
            borderRadius: '24px',
            padding: '32px',
            boxShadow: '0 10px 25px rgba(15,23,42,0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ maxWidth: '700px' }}>
              <span style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.15)',
                color: '#93c5fd',
                fontSize: '12px',
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: '999px',
                marginBottom: '12px',
                letterSpacing: '0.5px'
              }}>
                ARTIKEL UTAMA PILIHAN REDAKSI
              </span>
              <h2 style={{ fontSize: 'clamp(22px,3vw,30px)', color: '#ffffff', margin: '8px 0 14px', lineHeight: 1.3 }}>
                <a
                  href={`/artikel/${featuredArticle.slug}`}
                  style={{ color: '#ffffff', textDecoration: 'none' }}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/artikel/${featuredArticle.slug}`);
                  }}
                >
                  {featuredArticle.title}
                </a>
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>
                {featuredArticle.description}
              </p>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ background: '#3b82f6', borderColor: '#3b82f6' }}
                  onClick={() => navigate(`/artikel/${featuredArticle.slug}`)}
                >
                  Baca Panduan Lengkap →
                </button>
                <span style={{ fontSize: '13px', color: '#94a3b8' }}>
                  ⏱ {featuredArticle.readTime} Baca &bull; Terverifikasi DPMPTSP
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          {/* Dynamic Search & Category Filter Toolbar */}
          <div className="finder" style={{ marginTop: 0, marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '14px', color: 'var(--muted)', fontSize: '16px' }}>
              🔍
            </div>
            <input
              type="text"
              placeholder="Cari topik blog (contoh: NIB, OSS, PIRT, kafe, PBG, PT perorangan, halal, samsat, tanah)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Cari artikel blog Temanggung"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Filter kategori blog"
            >
              <option value="all">Semua Kategori ({ARTICLES.length})</option>
              <option value="legalitas">Perizinan &amp; Legalitas Usaha</option>
              <option value="sertifikasi">Pangan &amp; Sertifikasi (P-IRT, Halal)</option>
              <option value="properti">Properti &amp; Bangunan (PBG, SHM)</option>
              <option value="otomotif">Samsat &amp; Kendaraan</option>
              <option value="digital">Pemasaran, Digital &amp; Analisis Data</option>
            </select>
          </div>

          <div style={{ marginTop: '-4px', marginBottom: '24px', color: 'var(--muted)', fontSize: '13px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Menampilkan semua {filteredArticles.length} artikel dan ulasan blog.</span>
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

          {/* Grid Articles */}
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
                  <span>📅 {art.date}</span>
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
