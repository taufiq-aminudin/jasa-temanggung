import React from 'react';
import { SITE_CONFIG } from '../data/siteData';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <img
                src="/assets/favicon.svg"
                alt="Logo Jasa Temanggung"
                className="brand-logo-img"
                width={36}
                height={36}
              />
              <strong style={{ fontSize: '18px', color: '#fff' }}>Jasa Temanggung</strong>
            </div>
            <p>
              Pusat layanan profesional, direktori jasa terpercaya, pendampingan perizinan usaha OSS, notaris, properti, kendaraan, dan solusi digital di Kabupaten Temanggung, Jawa Tengah.
            </p>
            <p style={{ marginTop: '12px', fontSize: '12.5px', color: '#94a3b8' }}>
              📍 <strong>Area Layanan:</strong> Temanggung, Parakan, Kedu, Pringsurat, Ngadirejo, Kranggan, Kaloran, Bulu, Candiroto, Bansari, Kledung, dan sekitarnya.
            </p>
          </div>

          <div>
            <h3>Layanan Utama</h3>
            <a href="/jasa/perizinan" onClick={(e) => { e.preventDefault(); navigate('/jasa/perizinan'); }}>Jasa Perizinan OSS NIB</a>
            <a href="/jasa/notaris-ppat" onClick={(e) => { e.preventDefault(); navigate('/jasa/notaris-ppat'); }}>Notaris & PPAT</a>
            <a href="/jasa/stnk-sim" onClick={(e) => { e.preventDefault(); navigate('/jasa/stnk-sim'); }}>Samsat STNK & SIM</a>
            <a href="/jasa/iklan-online" onClick={(e) => { e.preventDefault(); navigate('/jasa/iklan-online'); }}>Iklan Online & Ads</a>
            <a href="/jasa/analis-data" onClick={(e) => { e.preventDefault(); navigate('/jasa/analis-data'); }}>Analis Data Bisnis</a>
            <a href="/jasa/properti" onClick={(e) => { e.preventDefault(); navigate('/jasa/properti'); }}>Jual Beli Properti</a>
            <a href="/jasa/website" onClick={(e) => { e.preventDefault(); navigate('/jasa/website'); }}>Pembuatan Website & SEO</a>
            <a href="/jasa/agen-tenaga-kerja-temanggung" onClick={(e) => { e.preventDefault(); navigate('/jasa/agen-tenaga-kerja-temanggung'); }}>Agen Tenaga Kerja</a>
          </div>

          <div>
            <h3>Informasi & Panduan</h3>
            <a href="/artikel" onClick={(e) => { e.preventDefault(); navigate('/artikel'); }}>Artikel & Panduan Bisnis</a>
            <a href="/blog" onClick={(e) => { e.preventDefault(); navigate('/blog'); }}>Blog Temanggung</a>
            <a href="/bagaimana-caranya" onClick={(e) => { e.preventDefault(); navigate('/bagaimana-caranya'); }}>Cara Kerja & Alur</a>
            <a href="/tentang" onClick={(e) => { e.preventDefault(); navigate('/tentang'); }}>Tentang Kami</a>
            <a href="/faq" onClick={(e) => { e.preventDefault(); navigate('/faq'); }}>Pertanyaan Umum (FAQ)</a>
            <a href="/syarat-ketentuan" onClick={(e) => { e.preventDefault(); navigate('/syarat-ketentuan'); }}>Syarat & Ketentuan</a>
            <a href="/privasi" onClick={(e) => { e.preventDefault(); navigate('/privasi'); }}>Kebijakan Privasi</a>
          </div>

          <div>
            <h3>Kontak & Bantuan</h3>
            <p style={{ margin: '0 0 10px' }}>
              Punya pertanyaan seputar layanan atau butuh estimasi biaya khusus?
            </p>
            <div style={{ marginBottom: '14px' }}>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20Jasa%20Temanggung%2C%20saya%20ingin%20konsultasi`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  padding: '9px 16px',
                  fontSize: '13px',
                  background: '#22c55e',
                  borderColor: '#22c55e',
                  boxShadow: '0 4px 14px rgba(34,197,94,.3)'
                }}
              >
                💬 WhatsApp: {SITE_CONFIG.whatsappDisplay}
              </a>
            </div>
            <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>
              ⏱ Jam Operasional: {SITE_CONFIG.operatingHours}
            </p>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>&copy; {new Date().getFullYear()} Jasa Temanggung. Hak Cipta Dilindungi Undang-Undang.</span>
          <span>Dibuat untuk memajukan UMKM &amp; Perekonomian Lokal Kabupaten Temanggung</span>
        </div>
      </footer>

      {/* Sticky Mobile CTA Bar */}
      <a
        href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20Jasa%20Temanggung%2C%20saya%20ingin%20konsultasi`}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-cta"
      >
        <span>Konsultasi Cepat Temanggung</span>
        <span style={{ background: 'rgba(255,255,255,.2)', padding: '5px 12px', borderRadius: '8px', fontSize: '13px' }}>
          Chat WA →
        </span>
      </a>
    </>
  );
};
