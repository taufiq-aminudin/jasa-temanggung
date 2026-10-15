import React, { useState } from 'react';
import { SERVICES, ARTICLES, SITE_CONFIG } from '../data/siteData';

interface ServiceDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, navigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const cleanSlug = slug.replace(/\.html$/, '');
  const service = SERVICES.find(s => s.slug === cleanSlug || s.id === cleanSlug) || SERVICES[0];

  const relatedArticles = ARTICLES.filter(art => {
    if (service.relatedArticleSlugs?.includes(art.slug)) return true;
    return art.relatedServiceId === service.id;
  });

  const waMessage = `Halo Jasa Temanggung, saya ingin konsultasi mengenai ${service.title}. Mohon info estimasi biaya dan alurnya.`;

  return (
    <main>
      <section className="service-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a> /{' '}
            <a href="/jasa" onClick={(e) => { e.preventDefault(); navigate('/jasa'); }}>Semua Jasa</a> /{' '}
            {service.title}
          </div>
          <div className="service-head">
            <span className="eyebrow">{service.badge}</span>
            <h1>{service.title}</h1>
            <p className="hero-sub">{service.desc}</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '35px' }}>
        <div className="container service-layout">
          <div>
            {/* Scope / Ruang Lingkup Panel */}
            <div className="panel">
              <span className="eyebrow">{service.scopeTitle || 'Ruang Lingkup'}</span>
              <h2>{service.tagline || 'Layanan Profesional & Terarah'}</h2>
              <p>{service.scopeDesc || 'Kami membantu menyiapkan seluruh berkas dan alur koordinasi agar urusan Anda selesai tanpa hambatan di Kabupaten Temanggung.'}</p>
              
              {service.scopes && (
                <div className="mini-grid" style={{ marginTop: '20px' }}>
                  {service.scopes.map((sc, idx) => (
                    <div key={idx} className="mini-card">
                      <strong>{sc.title}</strong>
                      <p>{sc.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Workflow Process Panel */}
            {service.steps && (
              <div className="panel" style={{ marginTop: '24px' }}>
                <span className="eyebrow">Alur Kerja</span>
                <h2>Tahapan Pengerjaan Layanan</h2>
                <div className="process" style={{ gridTemplateColumns: '1fr', gap: '12px', marginTop: '16px' }}>
                  {service.steps.map((st) => (
                    <div key={st.no} className="process-step">
                      <span className="step-no">{st.no}</span>
                      <h3>{st.title}</h3>
                      <p>{st.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pricing & Duration Transparency Panel */}
            {service.pricingTable && (
              <div className="panel" style={{ marginTop: '24px' }}>
                <span className="eyebrow">Transparansi</span>
                <h2>Perkiraan Biaya &amp; Estimasi Durasi</h2>
                <div style={{ overflowX: 'auto', marginTop: '14px' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--line)', textAlign: 'left' }}>
                        <th style={{ padding: '10px 12px' }}>Rincian Layanan</th>
                        <th style={{ padding: '10px 12px' }}>Estimasi Waktu</th>
                        <th style={{ padding: '10px 12px' }}>Keterangan Biaya</th>
                      </tr>
                    </thead>
                    <tbody>
                      {service.pricingTable.map((row, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                          <td style={{ padding: '10px 12px' }}><strong>{row.service}</strong></td>
                          <td style={{ padding: '10px 12px' }}>{row.time}</td>
                          <td style={{ padding: '10px 12px' }}>{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* FAQs Panel */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="panel" style={{ marginTop: '24px' }}>
                <span className="eyebrow">Pertanyaan Umum</span>
                <h2>FAQ {service.title}</h2>
                <div className="faq-list" style={{ marginTop: '14px' }}>
                  {service.faqs.map((f, idx) => (
                    <div key={idx} className={`faq-item ${openFaqIndex === idx ? 'open' : ''}`}>
                      <button
                        type="button"
                        className="faq-q"
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      >
                        <span>{f.q}</span>
                        <span>{openFaqIndex === idx ? '×' : '+'}</span>
                      </button>
                      <div className="faq-a">
                        <p>{f.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Articles Panel */}
            {relatedArticles.length > 0 && (
              <div className="panel" style={{ marginTop: '24px' }}>
                <span className="eyebrow">Panduan Lengkap Terkait</span>
                <h2>Artikel &amp; Regulasi {service.title}</h2>
                <ul style={{ margin: '12px 0 0 20px', lineHeight: 1.8 }}>
                  {relatedArticles.map((art) => (
                    <li key={art.slug}>
                      <button
                        type="button"
                        className="text-link"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', fontWeight: 600 }}
                        onClick={() => navigate(`/artikel/${art.slug}`)}
                      >
                        {art.title} →
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <aside>
            {/* Required Documents Checklist */}
            {service.docsRequired && (
              <div className="panel">
                <span className="eyebrow">Syarat Dokumen</span>
                <h2>Siapkan Berkas</h2>
                <ul className="check-list">
                  {service.docsRequired.map((doc, idx) => (
                    <li key={idx}>{doc}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Instant Consultation Card */}
            <div className="panel" style={{ marginTop: '24px', background: 'linear-gradient(135deg,#f8faff,#eef4ff)', border: '1px solid #cedcff' }}>
              <span className="eyebrow small" style={{ background: '#dbeafe', color: '#1e40af' }}>
                KONSULTASI LANGSUNG
              </span>
              <h2 style={{ fontSize: '20px', margin: '8px 0 10px' }}>Butuh Pendampingan Cepat?</h2>
              <p style={{ fontSize: '14px', marginBottom: '16px' }}>
                Konsultasikan situasi dan kebutuhan Anda langsung kepada tim Jasa Temanggung via WhatsApp. Estimasi awal transparan dan bebas biaya tersembunyi.
              </p>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', marginBottom: '10px' }}
              >
                💬 Chat WhatsApp Sekarang →
              </a>

              <button
                type="button"
                className="btn btn-secondary"
                style={{ width: '100%' }}
                onClick={() => navigate('/kontak')}
              >
                Isi Formulir Konsultasi
              </button>

              <div style={{ marginTop: '16px', borderTop: '1px solid #cedcff', paddingTop: '14px', fontSize: '12px', color: '#475569' }}>
                <div>📍 <strong>Cakupan:</strong> Seluruh 20 Kecamatan Temanggung</div>
                <div>⏱ <strong>Jam Kerja:</strong> {SITE_CONFIG.operatingHours}</div>
                <div>🔒 <strong>Kerahasiaan Berkas:</strong> 100% Terjaga</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};
