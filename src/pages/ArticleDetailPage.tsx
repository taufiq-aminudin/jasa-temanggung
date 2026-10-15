import React from 'react';
import { ARTICLES, SERVICES, SITE_CONFIG } from '../data/siteData';

interface ArticleDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ slug, navigate }) => {
  const cleanSlug = slug.replace(/\.html$/, '');
  const article = ARTICLES.find(a => a.slug === cleanSlug) || ARTICLES[0];

  const relatedArticles = ARTICLES.filter(a => a.slug !== article.slug && (a.category === article.category || a.relatedServiceId === article.relatedServiceId)).slice(0, 3);
  const relatedService = SERVICES.find(s => s.id === article.relatedServiceId);

  return (
    <main className="section" style={{ paddingTop: '24px' }}>
      <div className="container article-container">
        <div className="breadcrumb">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a> /{' '}
          <a href="/artikel" onClick={(e) => { e.preventDefault(); navigate('/artikel'); }}>Artikel</a> /{' '}
          {article.title}
        </div>

        <header className="article-header">
          <span
            className="article-badge"
            style={{ background: article.badgeBg, color: article.badgeColor, marginTop: '8px' }}
          >
            {article.categoryLabel}
          </span>
          <h1 style={{ fontSize: 'clamp(28px,4vw,44px)', marginTop: '10px' }}>
            {article.title}
          </h1>
          <div className="article-meta-row">
            <span>✍️ Ditulis oleh <strong>{article.author}</strong></span>
            <span>📅 {article.date}</span>
            <span>⏱️ Waktu Baca: {article.readTime}</span>
            <span style={{ color: '#059669', fontWeight: 700 }}>✓ Terverifikasi Regulasi Daerah</span>
          </div>
        </header>

        {/* Table of Contents */}
        <div className="toc-box">
          <strong>Daftar Isi Panduan:</strong>
          <ol>
            {article.content.map((sec, idx) => (
              <li key={idx}>
                <a href={`#sec-${idx}`}>{sec.heading}</a>
              </li>
            ))}
          </ol>
        </div>

        {/* Article Body */}
        <article className="article-body">
          <p style={{ fontSize: '17px', color: '#1e293b', fontWeight: 500, lineHeight: 1.7 }}>
            {article.description}
          </p>

          {article.content.map((sec, idx) => (
            <div key={idx} id={`sec-${idx}`} style={{ scrollMarginTop: '90px' }}>
              <h2>{sec.heading}</h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
              {sec.bullets && (
                <ul>
                  {sec.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Author Bio Box */}
          <div className="author-box">
            <div className="author-avatar">JT</div>
            <div>
              <strong style={{ display: 'block', fontSize: '15px' }}>{article.author}</strong>
              <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--muted)' }}>
                Tim praktisi perizinan, legalitas hukum, dan konsultan pemasaran lokal Jasa Temanggung. Berpengalaman mendampingi ratusan pelaku usaha mikro dan menengah di Kabupaten Temanggung.
              </p>
            </div>
          </div>

          {/* Direct Service CTA */}
          {relatedService && (
            <div className="callout" style={{ marginTop: '28px', background: 'linear-gradient(135deg,#eff6ff,#dbeafe)', border: '1px solid #bfdbfe' }}>
              <span className="eyebrow small" style={{ background: '#bfdbfe', color: '#1e40af' }}>
                LAYANAN TERKAIT
              </span>
              <h3 style={{ fontSize: '18px', margin: '8px 0 6px' }}>
                Butuh Pendampingan {relatedService.title}?
              </h3>
              <p style={{ margin: '0 0 14px', fontSize: '14px', color: '#334155' }}>
                {relatedService.desc}
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ fontSize: '13px', padding: '9px 16px' }}
                  onClick={() => navigate(`/jasa/${relatedService.slug}`)}
                >
                  Lihat Detail Layanan →
                </button>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Halo Jasa Temanggung, saya membaca artikel "${article.title}" dan ingin konsultasi mengenai ${relatedService.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ fontSize: '13px', padding: '9px 16px', background: '#fff' }}
                >
                  💬 Tanya via WhatsApp
                </a>
              </div>
            </div>
          )}

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div style={{ marginTop: '36px', borderTop: '1px solid var(--line)', paddingTop: '24px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '14px' }}>Baca Juga Panduan Terkait:</h3>
              <div className="article-hub-grid" style={{ marginTop: '12px' }}>
                {relatedArticles.map((rel) => (
                  <article key={rel.slug} className="article-card" style={{ padding: '18px' }}>
                    <span className="article-badge" style={{ background: rel.badgeBg, color: rel.badgeColor }}>
                      {rel.categoryLabel}
                    </span>
                    <h4 style={{ fontSize: '15px', margin: '6px 0 8px', lineHeight: 1.35 }}>
                      <a
                        href={`/artikel/${rel.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(`/artikel/${rel.slug}`);
                        }}
                      >
                        {rel.title}
                      </a>
                    </h4>
                    <p style={{ fontSize: '13px', marginBottom: '12px' }}>{rel.description}</p>
                    <a
                      href={`/artikel/${rel.slug}`}
                      className="text-link"
                      style={{ fontSize: '12px' }}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/artikel/${rel.slug}`);
                      }}
                    >
                      Baca Selengkapnya →
                    </a>
                  </article>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </main>
  );
};
