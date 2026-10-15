import React, { useState } from 'react';
import { GENERAL_FAQS, SITE_CONFIG } from '../data/siteData';

interface FaqPageProps {
  navigate: (path: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ navigate }) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    '0-0': true, // Open first question by default
  });
  const [faqSearch, setFaqSearch] = useState('');

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredCategories = GENERAL_FAQS.map(cat => {
    const q = faqSearch.toLowerCase().trim();
    if (!q) return cat;
    const items = cat.items.filter(it =>
      it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q)
    );
    return { ...cat, items };
  }).filter(cat => cat.items.length > 0);

  return (
    <main>
      <section className="service-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a> / FAQ
          </div>
          <div className="service-head">
            <span className="eyebrow">Pusat Bantuan &amp; Informasi</span>
            <h1>Pertanyaan yang Sering Diajukan</h1>
            <p className="hero-sub">
              Temukan jawaban cepat seputar legalitas usaha, notaris, pajak kendaraan Samsat, sistem kerja sama, dan tata cara konsultasi di Jasa Temanggung.
            </p>

            <div className="finder" style={{ marginTop: '18px' }}>
              <input
                type="text"
                placeholder="Cari pertanyaan (contoh: NIB, biaya, waktu, WhatsApp, kecamatan)..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
              />
              {faqSearch && (
                <button
                  type="button"
                  onClick={() => setFaqSearch('')}
                  style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: 700, padding: '0 12px' }}
                >
                  ✕ Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          {filteredCategories.length === 0 ? (
            <div className="callout" style={{ textAlign: 'center', padding: '36px 20px' }}>
              <p>Tidak ada pertanyaan yang sesuai dengan kata kunci pencarian Anda.</p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setFaqSearch('')}
              >
                Lihat Semua FAQ
              </button>
            </div>
          ) : (
            filteredCategories.map((cat, catIdx) => (
              <div key={cat.category} style={{ marginBottom: '36px' }}>
                <h2 style={{ fontSize: '22px', borderBottom: '2px solid var(--soft)', paddingBottom: '8px', marginBottom: '18px' }}>
                  {cat.category}
                </h2>
                <div className="faq-list">
                  {cat.items.map((item, itemIdx) => {
                    const key = `${catIdx}-${itemIdx}`;
                    const isOpen = !!openItems[key];
                    return (
                      <div key={key} className={`faq-item ${isOpen ? 'open' : ''}`}>
                        <button
                          type="button"
                          className="faq-q"
                          onClick={() => toggleItem(key)}
                        >
                          <span>{item.q}</span>
                          <span>{isOpen ? '×' : '+'}</span>
                        </button>
                        <div className="faq-a">
                          <p>{item.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}

          {/* Need custom help */}
          <div className="panel" style={{ marginTop: '40px', textAlign: 'center', background: '#f8faff' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '6px' }}>Pertanyaan Anda Belum Terjawab?</h3>
            <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '18px' }}>
              Tim konsultan kami siap berdiskusi langsung dan menjawab setiap keraguan Anda.
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate('/kontak')}
              >
                Kirim Pertanyaan via Form →
              </button>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20Jasa%20Temanggung%2C%20saya%20punya%20pertanyaan%20mengenai%20layanan`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                💬 Chat Langsung WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
