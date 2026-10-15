import React from 'react';
import { SITE_CONFIG } from '../data/siteData';

interface WorkflowPageProps {
  navigate: (path: string) => void;
}

export const WorkflowPage: React.FC<WorkflowPageProps> = ({ navigate }) => {
  return (
    <main>
      <section className="service-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a> / Cara Kerja
          </div>
          <div className="service-head">
            <span className="eyebrow">Alur Pelayanan Jasa Temanggung</span>
            <h1>Bagaimana Cara Kerjanya?</h1>
            <p className="hero-sub">
              Kami merancang tahapan konsultasi dan pendampingan yang transparan, mudah dipahami, dan bebas dari kebingungan birokrasi di Kabupaten Temanggung.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div className="panel">
            <span className="eyebrow">4 Tahapan Sistematis</span>
            <h2>Dari Konsultasi Hingga Dokumen Tuntas</h2>
            <div className="process" style={{ marginTop: '24px' }}>
              <div className="process-step">
                <span className="step-no">1</span>
                <h3>Konsultasi Awal &amp; Pemetaan Masalah</h3>
                <p>
                  Sampaikan kebutuhan Anda melalui WhatsApp atau formulir website. Kami mendengarkan detail situasi, menganalisis aturan dinas/instansi terkait, dan memberikan penjelasan opsi solusi terbaik.
                </p>
              </div>

              <div className="process-step">
                <span className="step-no">2</span>
                <h3>Verifikasi Berkas &amp; Penetapan Biaya</h3>
                <p>
                  Kami memverifikasi kelengkapan identitas KTP, NPWP, atau sertifikat tanah. Estimasi biaya resmi dan jangka waktu pengerjaan disepakati secara terbuka tanpa biaya tersembunyi.
                </p>
              </div>

              <div className="process-step">
                <span className="step-no">3</span>
                <h3>Pelaksanaan &amp; Update Progres Rutin</h3>
                <p>
                  Tim kami menjalankan proses pendaftaran sistem online (OSS/SIMBG/Coretax), koordinasi ke loket kantor dinas di Temanggung, atau penyiapan materi digital dengan laporan berkala.
                </p>
              </div>

              <div className="process-step">
                <span className="step-no">4</span>
                <h3>Penyerahan Hasil &amp; Evaluasi Tuntas</h3>
                <p>
                  Dokumen legalitas (NIB, SK Kemenkumham, STNK), dashboard bisnis, atau akses website diserahkan dalam kondisi lengkap dan bergaransi kepatuhan regulasi.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Pillars of Guarantee */}
          <div className="kicker-box" style={{ marginTop: '30px' }}>
            <div>
              <span style={{ fontSize: '24px' }}>🛡️</span>
              <strong style={{ display: 'block', margin: '8px 0 4px', fontSize: '16px' }}>Kerahasiaan Berkas Terjamin</strong>
              <p style={{ margin: 0, fontSize: '13px', color: 'var(--muted)' }}>
                Identitas pribadi, nomor rekening, dan data rahasia bisnis Anda dilindungi dengan standar privasi ketat.
              </p>
            </div>
            <div>
              <span style={{ fontSize: '24px' }}>⏱️</span>
              <strong style={{ display: 'block', margin: '8px 0 4px', fontSize: '16px' }}>Komitmen Waktu Jelas</strong>
              <p style={{ margin: 0, fontSize: '13px', color: 'var(--muted)' }}>
                Setiap pekerjaan memiliki target waktu penyelesaian terukur sesuai standar alur instansi daerah Temanggung.
              </p>
            </div>
            <div>
              <span style={{ fontSize: '24px' }}>🤝</span>
              <strong style={{ display: 'block', margin: '8px 0 4px', fontSize: '16px' }}>Pendampingan Nyata</strong>
              <p style={{ margin: 0, fontSize: '13px', color: 'var(--muted)' }}>
                Tidak sekadar perantara, kami mendampingi teknis pengisian data hingga tuntas dan siap pakai.
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <h3 style={{ fontSize: '22px', marginBottom: '8px' }}>Siap Memulai Urusan Anda Hari Ini?</h3>
            <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '20px' }}>
              Konsultasikan sekarang secara langsung tanpa komitmen awal.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate('/kontak')}
              >
                Isi Form Kebutuhan →
              </button>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20Jasa%20Temanggung%2C%20saya%20ingin%20konsultasi%20layanan`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                💬 Chat Konsultan via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
