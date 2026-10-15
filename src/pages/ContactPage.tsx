import React, { useState } from 'react';
import { SITE_CONFIG, SERVICES } from '../data/siteData';

interface ContactPageProps {
  navigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ navigate }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('Temanggung Kota');
  const [service, setService] = useState('Jasa Perizinan OSS & NIB');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setSubmitted(true);

    const waText = `${SITE_CONFIG.whatsappMessage}${service}.\n\n• Nama: ${name}\n• Lokasi: Kec. ${location}, Temanggung\n• Kebutuhan: ${message}`;
    const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`;

    // Open WhatsApp in new tab
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch (_) {}
  };

  return (
    <main>
      <section className="service-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a> / Kontak &amp; Konsultasi
          </div>
          <div className="service-head">
            <span className="eyebrow">Hubungi Tim Kami</span>
            <h1>Konsultasi Kebutuhan Anda di Temanggung</h1>
            <p className="hero-sub">
              Sampaikan urusan perizinan, legalitas dokumen, pajak kendaraan, atau solusi digital Anda. Kami siap merespons dengan cepat dan transparan.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container service-layout">
          <div>
            <div className="panel">
              <span className="eyebrow">Formulir Konsultasi</span>
              <h2>Ceritakan Kebutuhan Anda</h2>
              <p>
                Isi formulir ringkas di bawah ini untuk memulai pemetaan alur dan estimasi biaya. Pesan akan langsung diteruskan ke WhatsApp resmi tim Jasa Temanggung.
              </p>

              {submitted && (
                <div style={{
                  padding: '18px',
                  borderRadius: '14px',
                  background: '#edf4ff',
                  border: '1px solid #cedcff',
                  marginBottom: '20px'
                }}>
                  <div style={{ fontWeight: 800, color: '#1457d9', marginBottom: '6px' }}>
                    ✓ Permintaan Konsultasi Diteruskan
                  </div>
                  <p style={{ margin: '0 0 12px', fontSize: '14px', color: '#3b4758' }}>
                    Layanan: <strong>{service}</strong><br />
                    Pengirim: <strong>{name}</strong> (Kec. {location})
                  </p>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      `${SITE_CONFIG.whatsappMessage}${service}.\n\n• Nama: ${name}\n• Lokasi: Kec. ${location}, Temanggung\n• Kebutuhan: ${message}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ display: 'inline-flex', padding: '10px 18px', fontSize: '13.5px' }}
                  >
                    Buka Chat WhatsApp Sekarang →
                  </a>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="contact-name">
                      Nama Lengkap Anda <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Contoh: Pak Anton / Ibu Siti"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="contact-loc">Kecamatan di Temanggung</label>
                    <select
                      id="contact-loc"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      {SITE_CONFIG.kecamatanList.map((kec) => (
                        <option key={kec} value={kec}>
                          Kecamatan {kec}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="field full">
                    <label htmlFor="contact-srv">Layanan yang Dibutuhkan</label>
                    <select
                      id="contact-srv"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="field full">
                    <label htmlFor="contact-msg">
                      Detail Kebutuhan atau Pertanyaan <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <textarea
                      id="contact-msg"
                      required
                      placeholder="Jelaskan kebutuhan Anda (contoh: ingin mendaftar NIB kedai kopi, perpanjang STNK mobil 5 tahunan plat AA, atau butuh tenaga admin toko)..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Kirim &amp; Lanjut Konsultasi WhatsApp →
                  </button>
                  <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', textAlign: 'center', marginTop: '10px' }}>
                    🔒 Data Anda 100% terjaga kerahasiaannya dan hanya digunakan untuk keperluan konsultasi.
                  </span>
                </div>
              </form>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside>
            <div className="panel" style={{ background: '#f8fafc' }}>
              <span className="eyebrow">Kontak Cepat</span>
              <h3 style={{ fontSize: '18px', margin: '4px 0 12px' }}>WhatsApp Customer Support</h3>
              <p style={{ fontSize: '14px', marginBottom: '16px' }}>
                Untuk tanggapan langsung pada jam kerja, Anda dapat langsung mengirim pesan WhatsApp:
              </p>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20Jasa%20Temanggung%2C%20saya%20ingin%20konsultasi`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  background: '#22c55e',
                  borderColor: '#22c55e',
                  marginBottom: '16px',
                  boxShadow: '0 8px 20px rgba(34,197,94,.3)'
                }}
              >
                💬 WhatsApp: {SITE_CONFIG.whatsappDisplay}
              </a>

              <div style={{ fontSize: '13px', display: 'grid', gap: '8px', color: '#475569' }}>
                <div>⏱ <strong>Jam Kerja:</strong> {SITE_CONFIG.operatingHours}</div>
                <div>📍 <strong>Lokasi:</strong> Kabupaten Temanggung, Jawa Tengah</div>
                <div>⚡ <strong>Waktu Respon:</strong> Rata-rata &lt; 15 menit pada jam kerja</div>
              </div>
            </div>

            <div className="panel" style={{ marginTop: '20px' }}>
              <span className="eyebrow small">JAMINAN LAYANAN</span>
              <h3 style={{ fontSize: '17px', margin: '4px 0 10px' }}>Mengapa Memilih Jasa Temanggung?</h3>
              <ul className="check-list" style={{ fontSize: '13px' }}>
                <li>Konsultasi awal tanpa biaya tersembunyi</li>
                <li>Estimasi biaya resmi dan jasa diterangkan terbuka</li>
                <li>Mitra notaris, konsultan, dan praktisi lokal berizin</li>
                <li>Dukungan penuh hingga dokumen selesai dan terverifikasi</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};
