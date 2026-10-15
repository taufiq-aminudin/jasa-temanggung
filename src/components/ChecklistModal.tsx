import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../data/siteData';

interface ChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChecklistModal: React.FC<ChecklistModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const generateAndDownloadPdf = (userName: string) => {
    const safeName = (userName || 'Pelaku Usaha Temanggung').replace(/[^a-zA-Z0-9\s.,]/g, '');
    const today = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

    const textContent = 
`%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>
endobj
4 0 obj
<< /Length %LENGTH% >>
stream
BT
/F1 18 Tf
40 790 Td
(CHECKLIST LEGALITAS USAHA TEMANGGUNG 2026) Tj
0 -24 Td
/F2 10 Tf
(Panduan Lengkap Standar Dokumen Perizinan & Regulasi Daerah Kab. Temanggung) Tj
0 -16 Td
(Penerima: ${safeName}  |  Tanggal: ${today}  |  JasaTemanggung.my.id) Tj
0 -36 Td
/F1 12 Tf
(1. PERIZINAN DASAR BERUSAHA (OSS-RBA)) Tj
0 -18 Td
/F2 10 Tf
([  ] Identitas KTP & NPWP Pemilik Usaha / Pengurus Aktif) Tj
0 -15 Td
([  ] Registrasi Akun OSS-RBA melalui oss.go.id) Tj
0 -15 Td
([  ] Penentuan Kode KBLI 5 Digit Sesuai Kegiatan Usaha Riil di Temanggung) Tj
0 -15 Td
([  ] Penerbitan NIB (Nomor Induk Berusaha) & Pernyataan Mandiri K3L) Tj
0 -30 Td
/F1 12 Tf
(2. SERTIFIKASI PANGAN & OLAHAN (P-IRT & SERTIFIKAT HALAL)) Tj
0 -18 Td
/F2 10 Tf
([  ] Sertifikat Penyuluhan Keamanan Pangan (PKP) dari Dinas Kesehatan Temanggung) Tj
0 -15 Td
([  ] Uji Higiene Sarana Produksi Makanan / Kopi / Olahan Lokal) Tj
0 -15 Td
([  ] Pengajuan Sertifikat Standar SPP-IRT OSS) Tj
0 -15 Td
([  ] Pendaftaran Sertifikasi Halal Gratis (SEHATI) melalui Pendamping PPH Temanggung) Tj
0 -15 Td
([  ] Standar Label Kemasan (Komposisi, Netto, Kode Produksi, Expired Date)) Tj
0 -30 Td
/F1 12 Tf
(3. LEGALITAS BANGUNAN & TEMPAT USAHA (PBG & SLF)) Tj
0 -18 Td
/F2 10 Tf
([  ] Bukti Hak Atas Tanah (Sertifikat SHM / Perjanjian Sewa Notariil)) Tj
0 -15 Td
([  ] Gambar Kerja Arsitektur, Mekanikal Elektrikal, & Struktur Tahan Gempa) Tj
0 -15 Td
([  ] Registrasi Akun SIMBG dan Pengajuan Persetujuan Bangunan Gedung (PBG)) Tj
0 -15 Td
([  ] Uji Kelaikan Fungsi Bangunan hingga Terbit Sertifikat Laik Fungsi (SLF)) Tj
0 -30 Td
/F1 12 Tf
(4. BADAN HUKUM & REKENING BISNIS) Tj
0 -18 Td
/F2 10 Tf
([  ] Pilihan Badan Usaha: PT Perorangan (1 Pendiri UMKM) atau PT Biasa / CV) Tj
0 -15 Td
([  ] Pendaftaran AHU Online Kemenkumham & SK Kemenkumham Resmi) Tj
0 -15 Td
([  ] NPWP Badan Usaha di KPP Pratama Temanggung) Tj
0 -15 Td
([  ] Pemisahan Rekening Pribadi & Pembukaan Rekening Giro Bank) Tj
0 -30 Td
/F1 12 Tf
(5. PUSAT LAYANAN TERPADU TEMANGGUNG) Tj
0 -18 Td
/F2 10 Tf
(- Mall Pelayanan Publik (MPP): Eks Gedung Pemuda, Jl. Suyoto No. 1, Temanggung) Tj
0 -15 Td
(- DPMPTSP Kab. Temanggung: Pelayanan Perizinan Terpadu & Pendampingan NIB) Tj
0 -15 Td
(- Dinkes Temanggung: Bidang Sumber Daya Kesehatan & Kefarmasian / P-IRT) Tj
0 -35 Td
/F1 11 Tf
(KONSULTASI & PENDAMPINGAN RESMI: JASA TEMANGGUNG) Tj
0 -16 Td
/F2 10 Tf
(Website: https://jasatemanggung.my.id  |  WhatsApp: 0813-8200-0412) Tj
0 -14 Td
/F2 9 Tf
(Layanan: Pendampingan NIB OSS, Notaris & PPAT, Pajak, Iklan Ads, & Website Bisnis) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
6 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000242 00000 n 
0000002800 00000 n 
0000002875 00000 n 
trailer
<< /Size 7 /Root 1 0 R >>
startxref
2950
%%EOF`;

    const streamStart = textContent.indexOf('stream\n') + 7;
    const streamEnd = textContent.indexOf('\nendstream');
    const streamData = textContent.substring(streamStart, streamEnd);
    const streamLength = streamData.length;

    const finalPdf = textContent.replace('%LENGTH%', streamLength.toString());
    const blob = new Blob([finalPdf], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Checklist-Legalitas-Usaha-Temanggung-2026.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    try {
      localStorage.setItem('temanggung_checklist_downloaded', 'true');
    } catch (_) {}

    generateAndDownloadPdf(name || 'Pelaku Usaha Temanggung');
    setIsSuccess(true);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop open" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Tutup modal"
        >
          ✕
        </button>

        {!isSuccess ? (
          <div>
            <span className="modal-badge">GRATIS DOKUMEN PDF</span>
            <h2 style={{ fontSize: '22px', margin: '4px 0 10px', color: 'var(--ink)' }}>
              Checklist Lengkap Legalitas Usaha Temanggung (2026)
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--muted)', margin: '0 0 16px', lineHeight: 1.5 }}>
              Daftar periksa resmi standar berkas NIB OSS-RBA, sertifikasi Halal, P-IRT Dinkes, hingga PBG/SLF tempat usaha di Kabupaten Temanggung.
            </p>

            <div className="modal-checklist-preview">
              <div><span className="check">✓</span> Standar Pemilihan Kode KBLI 5 Digit OSS-RBA</div>
              <div><span className="check">✓</span> Syarat Pendirian PT Perorangan Modal Terjangkau</div>
              <div><span className="check">✓</span> Alur Uji Higiene P-IRT &amp; Halal SEHATI Gratis</div>
              <div><span className="check">✓</span> Alamat Loket Pelayanan Terpadu &amp; MPP Temanggung</div>
            </div>

            <form onSubmit={handleDownloadSubmit}>
              <div className="modal-input-group">
                <label>Nama Lengkap / Nama Usaha</label>
                <input
                  type="text"
                  placeholder="Contoh: Mas Budi / Kopi Kledung"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="modal-input-group">
                <label>Alamat Email Anda <span style={{ color: '#ef4444' }}>*</span></label>
                <input
                  type="email"
                  required
                  placeholder="nama@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="modal-input-group">
                <label>Nomor WhatsApp (Opsional)</label>
                <input
                  type="tel"
                  placeholder="0812-xxxx-xxxx"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                />
              </div>

              <button type="submit" className="modal-submit-btn">
                📥 Unduh Checklist Legalitas (PDF) →
              </button>
              <div className="modal-privacy-note">
                🔒 Data Anda aman dan tidak akan disebarluaskan.
              </div>
            </form>
          </div>
        ) : (
          <div className="modal-success-box">
            <div className="modal-success-icon">✓</div>
            <h3 style={{ fontSize: '20px', margin: '0 0 8px' }}>Checklist Berhasil Diunduh!</h3>
            <p style={{ fontSize: '14px', color: 'var(--muted)', margin: '0 0 20px', lineHeight: 1.6 }}>
              File PDF telah tersimpan di perangkat Anda. Jika unduhan tidak berjalan otomatis, klik tombol di bawah ini.
            </p>

            <div style={{ display: 'grid', gap: '10px' }}>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ width: '100%' }}
                onClick={() => generateAndDownloadPdf(name)}
              >
                Unduh Ulang PDF
              </button>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  `Halo Jasa Temanggung, saya ${name || 'pelaku usaha'} (${email}). Saya sudah mengunduh Checklist Legalitas Usaha Temanggung dan ingin konsultasi lebih lanjut.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', textDecoration: 'none' }}
              >
                Konsultasikan Checklist via WhatsApp →
              </a>

              <button
                type="button"
                className="btn btn-secondary"
                style={{ border: 'none', background: 'transparent', color: 'var(--muted)', fontSize: '13px' }}
                onClick={onClose}
              >
                Selesai &amp; Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
