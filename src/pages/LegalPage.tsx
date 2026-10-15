import React from 'react';

interface LegalPageProps {
  type: 'terms' | 'privacy';
  navigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, navigate }) => {
  const isTerms = type === 'terms';

  return (
    <main className="section" style={{ paddingTop: '30px' }}>
      <div className="container article-container">
        <div className="breadcrumb">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a> / {isTerms ? 'Syarat & Ketentuan' : 'Kebijakan Privasi'}
        </div>

        <header className="article-header">
          <span className="eyebrow">{isTerms ? 'Aturan Penggunaan' : 'Perlindungan Data'}</span>
          <h1 style={{ fontSize: 'clamp(28px,4vw,40px)', marginTop: '8px' }}>
            {isTerms ? 'Syarat & Ketentuan Layanan' : 'Kebijakan Privasi'}
          </h1>
          <div className="article-meta-row">
            <span>📅 Terakhir Diperbarui: 1 Oktober 2026</span>
            <span>📍 Jasa Temanggung</span>
          </div>
        </header>

        <article className="article-body">
          {isTerms ? (
            <>
              <h2>1. Ketentuan Umum</h2>
              <p>
                Selamat datang di platform Jasa Temanggung. Dengan mengakses situs web ini dan/atau menggunakan layanan yang kami sediakan, Anda menyatakan setuju untuk terikat oleh Syarat dan Ketentuan ini.
              </p>

              <h2>2. Ruang Lingkup Layanan</h2>
              <p>
                Jasa Temanggung menyediakan jasa pendampingan administrasi perizinan usaha (OSS-RBA), koordinasi dokumen notaris dan PPAT, asistensi administrasi kendaraan bermotor di Samsat Temanggung, penyusunan strategi pemasaran digital, pembuatan website, serta konsultasi bisnis dan ketenagakerjaan.
              </p>

              <h2>3. Kewajiban &amp; Tanggung Jawab Pengguna</h2>
              <p>
                Pengguna jasa wajib memberikan data, informasi identitas, dan dokumen yang sah, akurat, dan sesuai dengan hukum yang berlaku di Republik Indonesia. Jasa Temanggung berhak membatalkan pendampingan jika ditemukan pemalsuan dokumen atau pelanggaran hukum pidana.
              </p>

              <h2>4. Pembayaran &amp; Biaya Resmi</h2>
              <p>
                Setiap perkiraan biaya pendampingan dan biaya resmi negara (seperti PNBP Kemenkumham, retribusi daerah, atau pajak resmi SKPD Samsat) akan diinformasikan secara terbuka sebelum pengerjaan dimulai. Pembayaran jasa dilakukan sesuai kesepakatan bertahap atau setelah verifikasi selesai.
              </p>

              <h2>5. Pembatalan &amp; Garansi</h2>
              <p>
                Apabila terjadi kendala teknis atau penolakan sistem perizinan yang bukan diakibatkan oleh data palsu dari pemohon, tim kami akan mendampingi revisi data hingga selesai atau mengembalikan biaya jasa sesuai proporsi pekerjaan yang telah berjalan.
              </p>
            </>
          ) : (
            <>
              <h2>1. Pengumpulan Informasi Pribadi</h2>
              <p>
                Kami mengumpulkan informasi identitas yang Anda berikan secara sukarela melalui formulir konsultasi, pengunduhan dokumen panduan, atau pesan WhatsApp, seperti nama lengkap, nomor telepon, alamat email, jenis usaha, dan kecamatan tempat tinggal Anda di Kabupaten Temanggung.
              </p>

              <h2>2. Penggunaan Informasi</h2>
              <p>
                Informasi yang Anda berikan semata-mata digunakan untuk:
              </p>
              <ul>
                <li>Memfasilitasi komunikasi konsultasi dan proses pengurusan layanan yang Anda minta.</li>
                <li>Menghubungi Anda terkait status permohonan dokumen legalitas atau perizinan.</li>
                <li>Mengirimkan informasi edukasi dan update regulasi penting daerah Temanggung apabila Anda menyetujuinya.</li>
              </ul>

              <h2>3. Keamanan &amp; Perlindungan Data</h2>
              <p>
                Kami berkomitmen menjaga keamanan informasi pribadi Anda. Dokumen pendukung seperti KTP, NPWP, atau sertifikat tanah tidak akan pernah dijual, disewakan, atau dibagikan kepada pihak ketiga di luar instansi berwenang yang diperlukan untuk proses legalitas Anda.
              </p>

              <h2>4. Hak Pengguna</h2>
              <p>
                Anda berhak meminta pembaruan, perbaikan, atau penghapusan data kontak Anda dari sistem kami kapan saja dengan menghubungi customer service kami via WhatsApp.
              </p>
            </>
          )}

          <div style={{ marginTop: '36px', paddingTop: '20px', borderTop: '1px solid var(--line)' }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate('/')}
            >
              ← Kembali ke Beranda
            </button>
          </div>
        </article>
      </div>
    </main>
  );
};
