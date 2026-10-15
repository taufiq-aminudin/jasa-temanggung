import { ServiceItem, ArticleItem, ReviewItem } from '../types';

export const SITE_CONFIG = {
  brand: 'Jasa Temanggung',
  whatsappNumber: '6281382000412',
  whatsappDisplay: '0813-8200-0412',
  whatsappMessage: 'Halo Jasa Temanggung, saya ingin konsultasi mengenai ',
  city: 'Temanggung, Jawa Tengah',
  operatingHours: 'Senin – Sabtu, 08.00 – 17.00 WIB',
  officeAddress: 'Kabupaten Temanggung, Jawa Tengah (Melayani Seluruh Kecamatan)',
  kecamatanList: [
    'Temanggung Kota',
    'Parakan',
    'Kedu',
    'Pringsurat',
    'Ngadirejo',
    'Kranggan',
    'Kaloran',
    'Bulu',
    'Candiroto',
    'Bansari',
    'Tembarak',
    'Kledung',
    'Jumo',
    'Tretep',
    'Kandangan',
    'Selopampang',
    'Tlogomulyo',
    'Gemawang',
    'Bejen',
    'Wonoboyo'
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'perizinan',
    slug: 'perizinan',
    title: 'Jasa Perizinan & Legalitas Usaha',
    category: 'dokumen',
    badge: 'Usaha & Legalitas',
    desc: 'Pendampingan menyiapkan data dan alur pengurusan NIB OSS RBA, PT Perorangan, sertifikasi halal, dan izin edar resmi di Temanggung.',
    icon: '✓',
    iconBg: '#eff6ff',
    iconColor: '#1d4ed8',
    search: 'jasa perizinan legalitas usaha nib oss pt perorangan cv pirt bpom sertifikat halal pbg slf spku umkm temanggung',
    tagline: 'Legalkan bisnis, buka peluang pasar lebih luas tanpa birokrasi rumit',
    scopeTitle: 'Ruang Lingkup Perizinan',
    scopeDesc: 'Usaha dengan izin lengkap lebih mudah mengajukan pinjaman bank KUR di BRI/Bank Jateng Temanggung, mengikuti tender pengadaan, menjual produk ke toko retail modern, dan membangun kredibilitas konsumen.',
    scopes: [
      { title: 'NIB OSS RBA', desc: 'Nomor Induk Berusaha berbasis risiko untuk perorangan maupun badan usaha mikro, kecil, dan menengah.' },
      { title: 'Pendirian PT Perorangan', desc: 'Badan hukum resmi khusus UMKM dengan modal terjangkau dan pemisahan aset pribadi dari Kemenkumham.' },
      { title: 'P-IRT & Sertifikasi Halal', desc: 'Pendampingan izin edar pangan industri rumah tangga Dinkes Temanggung & sertifikasi halal SEHATI.' },
      { title: 'Izin Lingkungan SPPL & PBG', desc: 'Konsultasi awal SPPL, UKL-UPL penanganan limbah, serta alur PBG/SLF tempat usaha di dinas terkait.' }
    ],
    steps: [
      { no: 1, title: 'Identifikasi Jenis Usaha & Kode KBLI', desc: 'Menentukan kode KBLI 5 digit yang paling presisi sesuai aktivitas riil Anda di Kabupaten Temanggung.' },
      { no: 2, title: 'Penyusunan Data & Input Sistem OSS', desc: 'Validasi data pemohon di Disdukcapil/DJP, alamat kegiatan usaha, dan pengunggahan berkas persyaratan.' },
      { no: 3, title: 'Penerbitan Dokumen Legalitas Resmi', desc: 'NIB, sertifikat standar, dan lampiran komitmen resmi diserahkan dalam format siap pakai dan ber-QR code.' }
    ],
    pricingTable: [
      { service: 'NIB OSS Usaha Mikro', time: '1–2 Hari Kerja', note: 'Jasa pendampingan terjangkau, sistem OSS gratis pemerintah' },
      { service: 'Pendirian PT Perorangan', time: '2–4 Hari Kerja', note: 'Termasuk SK Kemenkumham, NIB & NPWP Badan' },
      { service: 'Sertifikasi Halal (SEHATI)', time: '14–30 Hari', note: 'Program kuota subsidi SEHATI BPJPH + jasa pendampingan berkas' },
      { service: 'Izin Edar P-IRT Dinkes', time: '7–14 Hari Kerja', note: 'Pendampingan PKP, desain label standar BPOM, & SPP-IRT' }
    ],
    faqs: [
      { q: 'Apakah usaha rumahan di Temanggung wajib memiliki NIB?', a: 'Sangat dianjurkan. NIB diperlukan saat Anda ingin mengajukan pinjaman KUR perbankan, mendaftar sertifikat Halal, mengurus izin edar P-IRT Dinkes, maupun mengikuti program pelatihan UMKM Disperindagkop UKM Temanggung.' },
      { q: 'Apa saja syarat mendirikan PT Perorangan?', a: 'Hanya membutuhkan 1 orang pendiri (WNI usia min. 21 tahun), KTP, NPWP pribadi aktif, nama PT yang belum digunakan, serta alamat usaha di Temanggung. Tidak memerlukan akta notaris, cukup pernyataan pendirian elektronik terdaftar Kemenkumham.' },
      { q: 'Berapa lama proses pembuatan NIB?', a: 'Untuk tingkat risiko rendah, proses penyiapan dan penerbitan NIB dapat selesai dalam 1 hingga 2 hari kerja setelah dokumen lengkap.' }
    ],
    docsRequired: [
      'KTP & NPWP Pemilik/Pengurus Aktif',
      'Nomor WhatsApp aktif & alamat email usaha',
      'Alamat lengkap tempat kegiatan usaha di Temanggung',
      'Foto produk dan foto sarana/tempat produksi'
    ],
    relatedArticleSlugs: [
      'panduan-izin-usaha-nib-oss-temanggung',
      'syarat-bikin-pt-perorangan-di-temanggung',
      'cara-mengurus-izin-edar-pirt-dinkes-temanggung',
      'panduan-sertifikasi-halal-gratis-sehati-temanggung'
    ]
  },
  {
    id: 'iklan-online',
    slug: 'iklan-online',
    title: 'Jasa Iklan Online & Ads',
    category: 'marketing',
    badge: 'Trending & Leads',
    desc: 'Kelola kampanye iklan Google Search, Meta Ads (IG & FB), dan TikTok Ads tertarget untuk memperbanyak chat WhatsApp dan penjualan bisnis lokal.',
    icon: '⚡',
    iconBg: '#e0f2fe',
    iconColor: '#0284c7',
    search: 'jasa iklan online ads google ads meta ads facebook instagram tiktok leads traffic penjualan temanggung',
    tagline: 'Tingkatkan omset dengan iklan terukur langsung ke target pembeli di Temanggung & sekitarnya',
    scopeTitle: 'Cakupan Layanan Iklan Digital',
    scopeDesc: 'Kami membantu bisnis kuliner, bengkel, toko retail, jasa, hingga properti di Temanggung menjangkau calon konsumen siap beli melalui kanal digital terpopuler.',
    scopes: [
      { title: 'Meta Ads (Instagram & Facebook)', desc: 'Penargetan radius kecamatan Temanggung, Magelang, Wonosobo dengan visual menarik dan CTA langsung chat WhatsApp.' },
      { title: 'Google Search Ads', desc: 'Menampilkan bisnis Anda di baris teratas Google ketika calon pelanggan mengetik kata kunci jasa atau produk Anda.' },
      { title: 'TikTok Ads', desc: 'Format video vertikal kreatif untuk menjangkau audiens muda dengan biaya per tayang ekonomis.' },
      { title: 'Copywriting & Setup Pixel', desc: 'Pembuatan teks penawaran memikat dan pelacakan konversi chat untuk optimalisasi budget.' }
    ],
    steps: [
      { no: 1, title: 'Riset Audiens & Penawaran', desc: 'Menganalisis produk, margin keuntungan, dan target demografi di Temanggung atau nasional.' },
      { no: 2, title: 'Penyusunan Konten & Kampanye', desc: 'Pembuatan materi iklan, copywriting penawaran, dan pengaturan target demografi geografis.' },
      { no: 3, title: 'Monitoring & Optimasi Harian', desc: 'Pemantauan biaya per klik, evaluasi pesan masuk WhatsApp, dan scaling kampanye berkinerja terbaik.' }
    ],
    pricingTable: [
      { service: 'Setup & Riset Iklan Awal', time: '1–2 Hari', note: 'Mulai Rp 350.000 (Konfigurasi akun, pixel, & materi penawaran)' },
      { service: 'Manajemen Meta Ads Bulanan', time: '30 Hari', note: 'Mulai Rp 500.000/bulan + saldo iklan harian sesuai budget' },
      { service: 'Google Search Ads Kampanye', time: 'Fleksibel', note: 'Penargetan kata kunci spesifik pencarian niat beli' }
    ],
    faqs: [
      { q: 'Berapa minimal saldo anggaran iklan yang diperlukan?', a: 'Untuk Meta Ads, Anda bisa mulai dengan anggaran harian Rp 25.000 – Rp 50.000 per hari, sehingga sangat ramah bagi UMKM yang baru memulai pemasaran digital.' },
      { q: 'Apakah hasil iklan langsung menghasilkan penjualan?', a: 'Iklan bertugas mendatangkan audiens tertarget ke WhatsApp Anda. Kecepatan respon dan keramahan tim admin Anda dalam menyapa calon pembeli sangat menentukan tingkat closing.' }
    ],
    docsRequired: [
      'Foto produk/jasa beresolusi jelas',
      'Nomor WhatsApp admin penjualan yang aktif dan responsif',
      'Akses akun Facebook Page atau Instagram Bisnis (bisa dibantu pembuatannya)'
    ],
    relatedArticleSlugs: [
      'strategi-iklan-meta-ads-umkm-temanggung',
      'cara-bikin-website-bisnis-temanggung-masuk-google'
    ]
  },
  {
    id: 'analis-data',
    slug: 'analis-data',
    title: 'Jasa Analis Data Bisnis',
    category: 'bisnis',
    badge: 'Data & Intelligence',
    desc: 'Visualisasi dashboard penjualan interaktif, audit margin laba HPP, dan analisis perputaran stok gudang untuk keputusan bisnis akurat.',
    icon: '📊',
    iconBg: '#e0f2fe',
    iconColor: '#0284c7',
    search: 'jasa analis data bisnis analitik dashboard looker studio power bi excel omset audit stok gudang profit hpp temanggung',
    tagline: 'Ubah tumpukan nota dan data kasir menjadi dashboard visual pengambil keputusan profit',
    scopes: [
      { title: 'Dashboard Looker Studio / Power BI', desc: 'Visualisasi grafik tren penjualan harian, mingguan, dan bulanan yang bisa dipantau langsung dari smartphone.' },
      { title: 'Analisis Pareto 80/20 & Margin HPP', desc: 'Menemukan menu atau produk terlaris yang memberikan 80% keuntungan riil bagi usaha Anda.' },
      { title: 'Manajemen Perputaran Stok Gudang', desc: 'Identifikasi produk dead stock, slow-moving, dan rekomendasi kuantitas restok optimal.' }
    ],
    steps: [
      { no: 1, title: 'Pengumpulan & Pembersihan Data', desc: 'Menggabungkan data dari sistem POS kasir, file Excel, atau nota transaksi manual.' },
      { no: 2, title: 'Pemodelan Data & Rumus Metrik', desc: 'Menghitung rasio profitabilitas, nilai rata-rata transaksi (AOV), dan frekuensi repeat order.' },
      { no: 3, title: 'Penyerahan Dashboard & Presentasi', desc: 'Akses dashboard real-time beserta ringkasan rekomendasi aksi bisnis konkret.' }
    ],
    pricingTable: [
      { service: 'Audit Data Excel & Pembersihan', time: '1–2 Hari', note: 'Mulai Rp 250.000 (Strukturisasi sheet & formula otomatis)' },
      { service: 'Dashboard Looker Studio Interaktif', time: '3–5 Hari', note: 'Mulai Rp 500.000 (Terhubung ke Google Sheets / POS)' },
      { service: 'Analisis Mendalam HPP & Profit margin', time: '3–4 Hari', note: 'Laporan komprehensif efisiensi biaya dan penetapan harga' }
    ],
    faqs: [
      { q: 'Apakah data bisnis saya dijamin kerahasiaannya?', a: 'Tentu. Kami menerapkan perjanjian kerahasiaan data (NDA) ketat. Seluruh data keuangan, pemasok, dan omset Anda 100% aman dan hanya digunakan untuk analisis internal usaha Anda.' }
    ],
    docsRequired: [
      'Rekap transaksi kasir / file Excel penjualan terdahulu',
      'Daftar harga modal (HPP) dan harga jual produk',
      'Catatan biaya operasional dasar (sewa, gaji, utilitas)'
    ],
    relatedArticleSlugs: [
      'panduan-analisis-data-bisnis-umkm-temanggung'
    ]
  },
  {
    id: 'konsultasi-bisnis',
    slug: 'konsultasi-bisnis',
    title: 'Konsultasi Bisnis & Legalitas',
    category: 'bisnis',
    badge: 'Scale-Up & Strategi',
    desc: 'Pendampingan mendalam untuk diagnosis operasional, perhitungan HPP & margin laba, restrukturisasi bisnis, serta perizinan scale-up UMKM.',
    icon: '💡',
    iconBg: '#fef3c7',
    iconColor: '#d97706',
    search: 'jasa konsultasi bisnis konsultan usaha pendampingan umkm strategi manajemen audit operasional hpp margin laba temanggung',
    tagline: 'Temukan bottleneck usaha Anda dan susun strategi ekspansi terukur di Temanggung',
    scopes: [
      { title: 'Diagnosis Operasional', desc: 'Membedah alur produksi, pelayanan pelanggan, dan efisiensi waktu kerja staf.' },
      { title: 'Perhitungan HPP Presisi', desc: 'Menghitung biaya pokok riil termasuk penyusutan alat dan biaya tersembunyi.' },
      { title: 'Kesiapan Legalitas & Kemitraan', desc: 'Persiapan pembentukan badan hukum PT/CV, perjanjian bagi hasil, dan MoU kerja sama.' }
    ],
    steps: [
      { no: 1, title: 'Sesi Diskusi & Pemetaan Masalah', desc: 'Konsultasi tatap muka di Temanggung atau daring untuk mendalami tantangan utama bisnis.' },
      { no: 2, title: 'Penyusunan Rencana Solusi (Action Plan)', desc: 'Menyusun langkah prioritas 30–90 hari ke depan dengan target capaian terukur.' },
      { no: 3, title: 'Pendampingan Implementasi', desc: 'Evaluasi berkala terhadap eksekusi rencana dan penyesuaian strategi di lapangan.' }
    ],
    pricingTable: [
      { service: 'Sesi Konsultasi Intensif 90 Menit', time: '1 Hari', note: 'Mulai Rp 250.000 / sesi tatap muka atau video call' },
      { service: 'Paket Pendampingan Bulanan', time: '30 Hari', note: 'Mulai Rp 1.500.000 (Evaluasi mingguan & review KPI)' }
    ],
    faqs: [
      { q: 'Di mana sesi konsultasi dilakukan?', a: 'Bisa dilakukan secara langsung di Temanggung (di kafe atau kantor Anda) atau daring via Google Meet / WhatsApp Call sesuai preferensi Anda.' }
    ],
    docsRequired: [
      'Profil ringkas usaha dan produk utama',
      'Catatan kendala atau target yang ingin dicapai'
    ]
  },
  {
    id: 'notaris-ppat',
    slug: 'notaris-ppat',
    title: 'Jasa Notaris & PPAT',
    category: 'dokumen',
    badge: 'Dokumen & Pertanahan',
    desc: 'Pendampingan administrasi dan koordinasi dokumen untuk notaris, PPAT, pendirian PT/CV, serta transaksi properti & akta tanah.',
    icon: '▣',
    iconBg: '#f8fafc',
    iconColor: '#1e293b',
    search: 'jasa notaris ppat pendampingan administrasi koordinasi dokumen pendirian badan usaha transaksi properti legalitas waris akta hibah tanah',
    tagline: 'Pastikan dokumen hukum dan transaksi pertanahan sah, aman, dan bebas sengketa',
    scopes: [
      { title: 'Akta Pendirian PT / CV / Yayasan', desc: 'Koordinasi perumusan anggaran dasar, pengecekan nama di Kemenkumham, hingga SK pengesahan.' },
      { title: 'Akta Jual Beli (AJB) & Hibah PPAT', desc: 'Pengecekan keaslian sertifikat di BPN Temanggung, validasi pajak BPHTB & PPh Final.' },
      { title: 'Peralihan Hak Waris & Pemisahan Sertifikat', desc: 'Pendampingan berkas surat keterangan waris, pembagian hak waris, dan pemecahan sertifikat tanah.' }
    ],
    steps: [
      { no: 1, title: 'Verifikasi Berkas Awal', desc: 'Memeriksa kelengkapan KTP, KK, sertifikat asli, dan bukti pelunasan PBB terakhir.' },
      { no: 2, title: 'Validasi & Pengecekan di BPN/Bapenda', desc: 'Memastikan sertifikat bebas sengketa, tidak dalam sita jaminan, dan koordinasi validasi BPHTB.' },
      { no: 3, title: 'Penandatanganan Akta Resmi', desc: 'Penjadwalan penandatanganan akta di hadapan Notaris / PPAT yang berwenang di Temanggung.' }
    ],
    pricingTable: [
      { service: 'Pendirian CV Lengkap', time: '3–5 Hari Kerja', note: 'Akta Notaris, SK Kemenkumham, NPWP, & NIB' },
      { service: 'Pendirian PT Biasa', time: '4–7 Hari Kerja', note: 'Modal setor, SK Kemenkumham lengkap berizin usaha' },
      { service: 'Pendampingan AJB Tanah', time: 'Sesuai Antrean BPN', note: 'Termasuk cek sertifikat, validasi pajak, & drafting akta' }
    ],
    faqs: [
      { q: 'Mengapa pengecekan sertifikat di BPN wajib dilakukan sebelum AJB?', a: 'Untuk memastikan sertifikat tidak dalam status blokir, tidak menjadi agunan kredit yang belum lunas (roya), dan nama pemegang hak sesuai dengan data di buku tanah BPN Temanggung.' }
    ],
    docsRequired: [
      'KTP & Kartu Keluarga para pihak',
      'Sertifikat Asli Tanah (SHM / SHGB)',
      'Bukti SPPT PBB tahun berjalan dan bukti lunas bayar',
      'NPWP para pihak'
    ],
    relatedArticleSlugs: [
      'tips-membeli-tanah-kebun-sertifikat-shm-temanggung'
    ]
  },
  {
    id: 'properti',
    slug: 'properti',
    title: 'Jasa Jual Beli Property',
    category: 'properti',
    badge: 'Jual Beli & Investasi',
    desc: 'Bantu pemilik dan pencari properti menemukan, menilai kesiapan data sertifikat, dan mengawal komunikasi transaksi tanah/bangunan di Temanggung.',
    icon: '⌂',
    iconBg: '#f8fafc',
    iconColor: '#1e293b',
    search: 'jasa jual beli properti tanah rumah ruko gudang sawah cek sertifikat appraisal pendampingan negosiasi transaksi temanggung parakan',
    tagline: 'Temukan aset properti potensial atau jual tanah/rumah Anda dengan pendampingan transparan',
    scopes: [
      { title: 'Pemasaran Properti Tanah & Rumah', desc: 'Dokumentasi foto/video lokasi, publikasi ke jaringan calon pembeli potensial di Temanggung dan luar daerah.' },
      { title: 'Survei Lapangan & Pengecekan Batas', desc: 'Pengecekan akses jalan, kontur lahan, patok batas fisik, dan kesesuaian dengan gambar sertifikat.' },
      { title: 'Pendampingan Negosiasi & Administrasi', desc: 'Menjembatani kesepakatan harga, uang muka (DP), dan jadwal notaris tanpa mark-up tidak wajar.' }
    ],
    steps: [
      { no: 1, title: 'Pendaftaran Properti & Cek Legalitas', desc: 'Memastikan sertifikat sudah SHM/Letter C jelas dan status kepemilikan tidak sengketa.' },
      { no: 2, title: 'Survei dan Penetapan Estimasi Nilai Pasar', desc: 'Menilai kesesuaian harga berdasarkan NJOP dan harga pasar riil di kecamatan terkait.' },
      { no: 3, title: 'Pertemuan Pihak & Transaksi Notariil', desc: 'Mendampingi proses pembayaran bertahap atau pelunasan di hadapan PPAT berwenang.' }
    ],
    pricingTable: [
      { service: 'Survei & Penilaian Awal Lahan', time: '1–2 Hari', note: 'Mulai Rp 200.000 (wilayah Temanggung)' },
      { service: 'Pendampingan Transaksi Jual Beli', time: 'Hingga selesai', note: 'Komisi standar persentase transparan atau fee pendampingan tetap' }
    ],
    faqs: [
      { q: 'Apakah bisa membantu mencari tanah kebun kopi atau tembakau?', a: 'Bisa. Kami memiliki jaringan relasi pemilik lahan di sentra perkebunan seperti Kledung, Bansari, Candiroto, dan Ngadirejo.' }
    ],
    docsRequired: [
      'Fotokopi Sertifikat Tanah (SHM) atau bukti kepemilikan sah',
      'KTP Pemilik',
      'SPPT PBB tahun terakhir'
    ],
    relatedArticleSlugs: [
      'tips-membeli-tanah-kebun-sertifikat-shm-temanggung',
      'panduan-mengurus-pbg-dan-slf-temanggung'
    ]
  },
  {
    id: 'stnk-sim',
    slug: 'stnk-sim',
    title: 'Jasa STNK & SIM',
    category: 'kendaraan',
    badge: 'Administrasi Kendaraan',
    desc: 'Bantuan persiapan berkas dan pendampingan administrasi pembayaran pajak tahunan, ganti plat 5 tahunan, balik nama, dan mutasi Samsat Temanggung.',
    icon: '▤',
    iconBg: '#f8fafc',
    iconColor: '#1e293b',
    search: 'jasa stnk sim samsat perpanjangan tahunan 5 tahunan balik nama mutasi bpkb cek fisik kendaraan motor mobil temanggung',
    tagline: 'Urus pajak kendaraan dan balik nama tanpa antre seharian di Samsat Temanggung',
    scopes: [
      { title: 'Pajak Tahunan Motor & Mobil', desc: 'Layanan titip bayar pajak tahunan cepat tanpa perlu izin cuti kerja.' },
      { title: 'Pajak 5 Tahunan & Ganti Plat Nomor', desc: 'Pendampingan cek fisik nomor rangka/mesin di Samsat Temanggung dan pencetakan plat baru.' },
      { title: 'Balik Nama (BBNKB) & Mutasi Masuk/Keluar', desc: 'Proses pengalihan kepemilikan BPKB dan STNK dari dalam atau luar wilayah plat AA Temanggung.' }
    ],
    steps: [
      { no: 1, title: 'Penyerahan & Pengecekan Berkas', desc: 'STNK asli, KTP asli/fotokopi pemilik, dan BPKB (untuk 5 tahunan/balik nama).' },
      { no: 2, title: 'Proses Loket Samsat & Pembayaran Pajak', desc: 'Petugas kami mengurus antrean loket, penetapan SKPD, dan penyetoran pajak resmi.' },
      { no: 3, title: 'Penyerahan STNK & Plat Resmi', desc: 'Dokumen STNK yang telah disahkan dan bukti pembayaran diserahkan kembali dengan aman.' }
    ],
    pricingTable: [
      { service: 'Jasa Pajak Tahunan Motor', time: '1 Hari Kerja', note: 'Jasa admin Rp 50.000 – Rp 75.000 + Pokok Pajak Resmi SKPD' },
      { service: 'Jasa Pajak Tahunan Mobil', time: '1 Hari Kerja', note: 'Jasa admin Rp 100.000 – Rp 150.000 + Pokok Pajak Resmi' },
      { service: 'Ganti Plat 5 Tahunan', time: '1–2 Hari Kerja', note: 'Termasuk cek fisik kendaraan & cetak plat nomor' },
      { service: 'Balik Nama & Mutasi Kendaraan', time: '2–4 Minggu', note: 'Cabut berkas dari daerah asal hingga terbit BPKB baru' }
    ],
    faqs: [
      { q: 'Apakah kendaraan harus dibawa saat bayar pajak 5 tahunan?', a: 'Ya, kendaraan wajib dilakukan cek fisik gesek nomor rangka dan nomor mesin di Samsat Temanggung.' }
    ],
    docsRequired: [
      'STNK Asli',
      'KTP Asli sesuai nama di STNK (atau bukti kuitansi pembelian)',
      'BPKB Asli (wajib untuk 5 tahunan & balik nama)'
    ],
    relatedArticleSlugs: [
      'biaya-balik-nama-dan-pajak-stnk-samsat-temanggung'
    ]
  },
  {
    id: 'meta-ads',
    slug: 'meta-ads',
    title: 'Jasa Meta Ads Khusus',
    category: 'marketing',
    badge: 'Marketing & Leads',
    desc: 'Manajemen kampanye Facebook & Instagram Ads spesifik untuk toko dan jasa lokal yang menginginkan chat WhatsApp melimpah.',
    icon: '◉',
    iconBg: '#f8fafc',
    iconColor: '#1e293b',
    search: 'jasa meta ads iklan facebook instagram ads lead generation whatsapp traffic penjualan bisnis lokal umkm temanggung',
    tagline: 'Fokus iklan Meta khusus lead generation WhatsApp dan penjualan lokal',
    scopes: [
      { title: 'Audience Targeting Geografis Presisi', desc: 'Membidik pelanggan di Temanggung Kota, Parakan, Kranggan, hingga kota tetangga.' },
      { title: 'Optimasi Pesan WhatsApp (Click to WA)', desc: 'Pengaturan kampanye langsung membuka chat customer service Anda dengan template pesan otomatis.' },
      { title: 'A/B Testing Gambar & Video', desc: 'Mencari konten visual dengan Cost Per Lead (CPL) paling efisien.' }
    ],
    steps: [
      { no: 1, title: 'Audit Akun & Setup Meta Business', desc: 'Menghubungkan Fanpage, akun Instagram, dan WhatsApp Bisnis secara resmi.' },
      { no: 2, title: 'Peluncuran Kampanye Iklan', desc: 'Menyiapkan 3–5 variasi visual dan penawaran promo menarik.' },
      { no: 3, title: 'Laporan Performa Berkala', desc: 'Evaluasi mingguan jumlah chat masuk, rasio konversi, dan biaya per pesan.' }
    ],
    pricingTable: [
      { service: 'Setup Akun & Peluncuran Awal', time: '2 Hari', note: 'Mulai Rp 350.000 (sekali bayar)' },
      { service: 'Retainer Manajemen Bulanan', time: '30 Hari', note: 'Mulai Rp 500.000 / bulan' }
    ],
    faqs: [
      { q: 'Apakah butuh kartu kredit untuk bayar saldo iklan?', a: 'Tidak wajib. Meta saat ini mendukung pembayaran lokal via Transfer Bank Virtual Account, GoPay, dan DANA.' }
    ],
    docsRequired: [
      'Akun Facebook & Instagram aktif',
      'Nomor WhatsApp Bisnis',
      'Foto atau video produk yang ingin diiklankan'
    ],
    relatedArticleSlugs: [
      'strategi-iklan-meta-ads-umkm-temanggung'
    ]
  },
  {
    id: 'website',
    slug: 'website',
    title: 'Pembuatan Website & SEO',
    category: 'digital',
    badge: 'Website & SEO',
    desc: 'Website company profile, landing page promosi, katalog produk, dan optimasi SEO agar bisnis Anda muncul di halaman 1 Google Temanggung.',
    icon: '⌘',
    iconBg: '#f8fafc',
    iconColor: '#1e293b',
    search: 'pembuatan website seo company profile landing page katalog toko online domain hosting ranking google temanggung',
    tagline: 'Bangun kredibilitas bisnis modern dengan website berkecepatan tinggi & ramah mesin pencari',
    scopes: [
      { title: 'Landing Page Responsif Cepat', desc: 'Tampilan rapi di HP dan komputer dengan tombol pesan langsung WhatsApp.' },
      { title: 'SEO Lokal Temanggung & Google Profil Bisnis', desc: 'Optimasi kata kunci lokal agar mudah ditemukan saat orang mencari jasa Anda di Google.' },
      { title: 'Domain .COM / .ID & Hosting Cloud', desc: 'Pemberian nama domain profesional dan hosting handal dengan sertifikat keamanan SSL gratis.' }
    ],
    steps: [
      { no: 1, title: 'Pengumpulan Materi & Riset Struktur', desc: 'Menyusun logo, profil usaha, foto layanan, dan kontak admin.' },
      { no: 2, title: 'Pengerjaan Desain & Integrasi', desc: 'Pengembangan website, penataan copywriting, dan optimasi mobile.' },
      { no: 3, title: 'Peluncuran & Daftarkan ke Google Search Console', desc: 'Website online resmi dan didaftarkan ke mesin pencari Google agar cepat terindeks.' }
    ],
    pricingTable: [
      { service: 'Landing Page Promosi Cepat', time: '2–3 Hari', note: 'Mulai Rp 750.000 (1 Halaman, Domain & Hosting 1 Thn)' },
      { service: 'Website Company Profile Lengkap', time: '4–7 Hari', note: 'Mulai Rp 1.500.000 (Multi-halaman, Galeri, Form Kontak)' },
      { service: 'Optimasi SEO Lokal & Google Maps', time: '1–2 Minggu', note: 'Verifikasi Google Bisnisku & audit struktur kata kunci' }
    ],
    faqs: [
      { q: 'Apakah saya bisa mengubah konten di kemudian hari?', a: 'Bisa. Kami menyediakan panduan mudah atau Anda dapat meminta bantuan pembaruan informasi berkala kepada tim kami.' }
    ],
    docsRequired: [
      'Logo atau nama usaha',
      'Daftar layanan atau katalog produk',
      'Nomor kontak dan alamat yang ingin dicantumkan'
    ],
    relatedArticleSlugs: [
      'cara-bikin-website-bisnis-temanggung-masuk-google'
    ]
  },
  {
    id: 'desain-branding',
    slug: 'desain-branding',
    title: 'Desain Grafis & Branding',
    category: 'marketing',
    badge: 'Desain Grafis & Identitas',
    desc: 'Pembuatan identitas visual merek, logo usaha, kemasan produk pangan UMKM, dan materi promosi siap cetak bernilai jual tinggi.',
    icon: '✦',
    iconBg: '#f8fafc',
    iconColor: '#1e293b',
    search: 'desain grafis branding logo kemasan feed instagram banner kartu nama identitas visual kemasan produk umkm temanggung',
    tagline: 'Ciptakan kesan profesional dan tingkatkan daya pikat produk Anda di mata konsumen',
    scopes: [
      { title: 'Desain Logo & Brand Guidelines', desc: 'Logo unik dalam format vektor resolusi tinggi dengan panduan warna dan font resmi.' },
      { title: 'Label Kemasan Pangan P-IRT & BPOM', desc: 'Desain stiker dan pouch kemasan sesuai regulasi label wajib pemerintah.' },
      { title: 'Spanduk, Brosur & Banner Toko', desc: 'Materi cetak promosi luar ruangan siap cetak tanpa pecah.' }
    ],
    steps: [
      { no: 1, title: 'Brief Konsep & Karakter Merek', desc: 'Memahami visi usaha, warna favorit, dan target konsumen produk Anda.' },
      { no: 2, title: 'Eksplorasi Sketsa & Alternatif Desain', desc: 'Mengajukan alternatif konsep logo/kemasan untuk dipilih dan direvisi.' },
      { no: 3, title: 'Penyerahan Master File Siap Cetak', desc: 'Format file lengkap (.AI, .PDF, .PNG transparan, dan font yang digunakan).' }
    ],
    pricingTable: [
      { service: 'Desain Logo Profesional', time: '2–4 Hari', note: 'Mulai Rp 250.000 – Rp 600.000 (3 Alternatif konsep)' },
      { service: 'Desain Label / Kemasan Produk', time: '2–3 Hari', note: 'Mulai Rp 200.000 – Rp 450.000 (Sesuai regulasi P-IRT)' },
      { service: 'Paket Identitas Bisnis Lengkap', time: '5–7 Hari', note: 'Logo, kartu nama, nota, stempel, & template sosial media' }
    ],
    faqs: [
      { q: 'Apakah file desain bisa diedit lagi nanti?', a: 'Ya, kami selalu menyertakan file master format vektor sehingga mudah diubah ukuran atau dicetak ulang kapan saja.' }
    ],
    docsRequired: [
      'Nama merek dan tagline',
      'Ukuran kemasan (jika desain stiker/kemasan)',
      'Contoh referensi gaya visual yang disukai'
    ]
  },
  {
    id: 'foto-video',
    slug: 'foto-video',
    title: 'Foto, Video & Konten',
    category: 'marketing',
    badge: 'Multimedia & Konten',
    desc: 'Produksi video promosi vertikal TikTok/Reels dan fotografi produk komersial untuk menaikkan nilai jual barang dan kuliner Anda.',
    icon: '▲',
    iconBg: '#f8fafc',
    iconColor: '#1e293b',
    search: 'foto video konten produk reels tiktok shooting company profile liputan dokumentasi acara kuliner temanggung',
    tagline: 'Tampilkan produk Anda dengan visual memikat yang membangkitkan selera dan minat beli',
    scopes: [
      { title: 'Foto Produk Katalog & Marketplace', desc: 'Foto studio berlatar bersih dengan tata cahaya profesional untuk Shopee, Tokopedia, dan website.' },
      { title: 'Short Video Reels & TikTok Ads', desc: 'Pengambilan gambar video pendek dinamis beserta editing musik tren dan voiceover.' },
      { title: 'Dokumentasi Tempat Usaha / Kafe', desc: 'Menonjolkan suasana kafe, restoran, penginapan, atau pabrik olahan Anda di Temanggung.' }
    ],
    steps: [
      { no: 1, title: 'Penyusunan Moodboard & Jadwal Sesi', desc: 'Menentukan daftar produk, sudut pengambilan gambar, dan lokasi pemotretan.' },
      { no: 2, title: 'Sesi Pemotretan & Shooting', desc: 'Eksekusi pengambilan foto/video dengan peralatan kamera dan pencahayaan profesional.' },
      { no: 3, title: 'Color Grading & Finishing', desc: 'Penyuntingan warna, pemotongan video, dan penyerahan file Google Drive resolusi asli.' }
    ],
    pricingTable: [
      { service: 'Paket Foto Produk (10–15 Item)', time: '1–2 Hari', note: 'Mulai Rp 350.000 (Termasuk editing & retouching)' },
      { service: 'Paket Video Reels Promosi (3 Video)', time: '2–3 Hari', note: 'Mulai Rp 500.000 (Format 9:16 vertikal siap tayang)' }
    ],
    faqs: [
      { q: 'Apakah fotografer bisa datang ke lokasi saya di Temanggung?', a: 'Bisa. Kami melayani sesi foto on-location di seluruh kecamatan Kabupaten Temanggung.' }
    ],
    docsRequired: [
      'Sampel fisik produk dalam kondisi terbaik',
      'Informasi keunggulan produk yang ingin ditonjolkan'
    ]
  },
  {
    id: 'akuntansi-pajak',
    slug: 'akuntansi-pajak',
    title: 'Akuntansi, Pajak & Laporan',
    category: 'bisnis',
    badge: 'Keuangan & Pajak',
    desc: 'Penyusunan pembukuan rutin, penyusunan laporan keuangan bulanan, serta asistensi pelaporan pajak tahunan tertib aturan di Temanggung.',
    icon: '▧',
    iconBg: '#f8fafc',
    iconColor: '#1e293b',
    search: 'akuntansi pajak administrasi pembukuan laporan keuangan spt tahunan npwp faktur perpajakan rekonsiliasi kas umkm bisnis temanggung',
    tagline: 'Rapikan catatan keuangan dan penuhi kewajiban pajak Anda tanpa was-was sanksi denda',
    scopes: [
      { title: 'Pembukuan Bulanan & Laba Rugi', desc: 'Pencatatan arus kas masuk/keluar, rekonsiliasi rekening koran, dan neraca keuangan.' },
      { title: 'Pelaporan SPT Tahunan Orang Pribadi & Badan', desc: 'Penghitungan PPh Final 0,5% PP 55/2022 dan pelaporan online di DJP Online / Coretax.' },
      { title: 'Aktivasi EFIN & Pengurusan NPWP Badan', desc: 'Pendampingan pendaftaran NPWP di KPP Pratama Temanggung dan administrasi perpajakan.' }
    ],
    steps: [
      { no: 1, title: 'Pengumpulan Dokumen Transaksi', desc: 'Mengumpulkan nota penjualan, bukti transfer pengeluaran, dan mutasi rekening bank.' },
      { no: 2, title: 'Klasifikasi Akun & Jurnal', desc: 'Penyusunan laporan laba rugi bulanan dan rekonsiliasi persediaan.' },
      { no: 3, title: 'Perhitungan Pajak & Pelaporan Resmi', desc: 'Pembuatan kode billing pajak dan pelaporan SPT hingga terbit Bukti Penerimaan Elektronik (BPE).' }
    ],
    pricingTable: [
      { service: 'Pelaporan SPT Tahunan UMKM (PPh Final)', time: '1–2 Hari', note: 'Mulai Rp 200.000 – Rp 400.000' },
      { service: 'Pelaporan SPT Tahunan Badan PT/CV', time: '3–5 Hari', note: 'Mulai Rp 500.000 – Rp 1.500.000 (termasuk lampiran keuangan)' },
      { service: 'Retainer Pembukuan Bulanan', time: 'Rutin Bulanan', note: 'Mulai Rp 400.000/bulan sesuai volume transaksi' }
    ],
    faqs: [
      { q: 'Apakah UMKM dengan omset di bawah Rp 500 juta per tahun bebas pajak?', a: 'Ya, untuk Wajib Pajak Orang Pribadi UMKM, omset bruto hingga Rp 500 juta dalam 1 tahun pajak tidak dikenakan PPh Final 0,5%, namun tetap wajib lapor SPT Tahunan.' }
    ],
    docsRequired: [
      'NPWP dan EFIN aktif',
      'Rekap omset bruto bulanan',
      'Mutasi rekening koran'
    ],
    relatedArticleSlugs: [
      'cara-mengurus-npwp-badan-dan-lapor-spt-pajak-temanggung'
    ]
  },
  {
    id: 'hr-rekrutmen',
    slug: 'hr-rekrutmen',
    title: 'Recruitment & HR',
    category: 'bisnis',
    badge: 'SDM & Ketenagakerjaan',
    desc: 'Bantuan publikasi info loker di Temanggung, penyaringan CV kandidat, interview awal, dan penyiapan kontrak kerja karyawan.',
    icon: '👥',
    iconBg: '#f8fafc',
    iconColor: '#1e293b',
    search: 'hr rekrutmen recruitment loker lowongan kerja seleksi kandidat interview sdm tenaga kerja staf karyawan temanggung',
    tagline: 'Temukan staf dan karyawan terpercaya untuk mempercepat pertumbuhan operasional bisnis Anda',
    scopes: [
      { title: 'Penyusunan Job Description & Iklan Loker', desc: 'Menulis kualifikasi jelas dan mempublikasikan di jaringan pencari kerja Temanggung.' },
      { title: 'Screening CV & Wawancara Awal', desc: 'Menyeleksi puluhan lamaran yang masuk dan memilih kandidat terbaik sesuai karakter kerja.' },
      { title: 'Draft Surat Perjanjian Kerja (PKWT/PKWTT)', desc: 'Menyiapkan kontrak kerja standar ketenagakerjaan yang melindungi hak kedua pihak.' }
    ],
    steps: [
      { no: 1, title: 'Konsultasi Profil Posisi', desc: 'Menetapkan tanggung jawab pekerjaan, gaji yang ditawarkan, dan kualifikasi minimum.' },
      { no: 2, title: 'Pencarian & Seleksi Kandidat', desc: 'Penyaringan berkas lamaran dan wawancara tahap pertama oleh tim kami.' },
      { no: 3, title: 'Wawancara Akhir Bersama Anda', desc: 'Menyerahkan shortlist 3–5 kandidat terbaik untuk diputuskan langsung oleh Anda.' }
    ],
    pricingTable: [
      { service: 'Paket Rekrutmen Staf Toko / Admin', time: '5–10 Hari', note: 'Mulai Rp 350.000 / posisi' },
      { service: 'Paket Rekrutmen Supervisor / Tenaga Ahli', time: '1–2 Minggu', note: 'Fee berdasarkan kesepakatan' }
    ],
    faqs: [
      { q: 'Apakah ada garansi jika kandidat tidak cocok?', a: 'Ya, kami menyediakan garansi penggantian kandidat 1 kali dalam 30 hari pertama masa kerja jika terjadi ketidaksesuaian mendasar.' }
    ],
    docsRequired: [
      'Detail posisi lowongan dan tugas harian',
      'Rentang gaji dan fasilitas yang disediakan'
    ],
    relatedArticleSlugs: [
      'agen-tenaga-kerja-temanggung'
    ]
  },
  {
    id: 'agen-tenaga-kerja-temanggung',
    slug: 'agen-tenaga-kerja-temanggung',
    title: 'Agen Tenaga Kerja Temanggung',
    category: 'bisnis',
    badge: 'Penyedia SDM & Pekerja',
    desc: 'Penyedia tenaga kerja terpercaya untuk operator pabrik, driver, telesales, admin, helper, cleaning service, hingga asisten rumah tangga (ART) di Temanggung.',
    icon: '🏢',
    iconBg: '#f0fdf4',
    iconColor: '#15803d',
    search: 'agen tenaga kerja temanggung penyedia tenaga kerja operator driver telesales helper gudang cleaning service art pembantu sdm',
    tagline: 'Solusi cepat pemenuhan tenaga kerja andal untuk pabrik, toko, gudang, kantor, dan rumah tangga',
    scopes: [
      { title: 'Tenaga Operator & Pabrik', desc: 'Tenaga operator produksi, sortir hasil bumi (kopi/tembakau), perkayuan, dan penanganan mesin.' },
      { title: 'Sopir & Driver Operasional', desc: 'Driver pengiriman barang, logistik antar kota, kendaraan dinas, serta sopir pribadi dengan SIM A/B aktif.' },
      { title: 'Telesales, Sales & Admin Toko', desc: 'Staf penjualan telepon, admin follow-up chat, pencatatan kasir, dan pelayanan pelanggan toko.' },
      { title: 'Helper, Warehouse & ART', desc: 'Tenaga bongkar muat gudang, cleaning service kantor, dan asisten rumah tangga (ART) terverifikasi identitas.' }
    ],
    steps: [
      { no: 1, title: 'Konsultasi Kebutuhan Posisi & Kuota', desc: 'Sampaikan kriteria usia, keahlian khusus, domisili kecamatan di Temanggung, dan jumlah orang.' },
      { no: 2, title: 'Verifikasi Berkas & Background Check', desc: 'Pengecekan KTP, SKCK, riwayat pengalaman kerja, dan kesiapan jam kerja/shift.' },
      { no: 3, title: 'Penempatan Kerja & Masa Percobaan', desc: 'Kandidat siap bekerja di lokasi Anda dengan pendampingan masa adaptasi.' }
    ],
    pricingTable: [
      { service: 'Penyediaan Operator Pabrik / Gudang', time: '3–7 Hari', note: 'Melayani kuota individu maupun tim massal' },
      { service: 'Penyediaan Driver / Sopir SIM A/B', time: '3–5 Hari', note: 'Uji keterampilan berkendara dan rekam jejak tertib' },
      { service: 'Penyediaan Admin & Telesales', time: '3–7 Hari', note: 'Kandidat siap kerja dengan uji komputer dasar' },
      { service: 'Penyediaan Helper & ART', time: '2–5 Hari', note: 'Verifikasi identitas keluarga dan rekam jejak aman' }
    ],
    faqs: [
      { q: 'Apakah bisa meminta tenaga kerja dalam jumlah banyak?', a: 'Bisa. Kami memfasilitasi kebutuhan rekrutmen massal untuk ekspansi gudang, musim panen tembakau/kopi, maupun industri manufaktur di Temanggung.' },
      { q: 'Apakah layanan mencakup seluruh kecamatan di Temanggung?', a: 'Ya, kami melayani penempatan untuk Temanggung Kota, Parakan, Kranggan, Pringsurat, Kedu, dan seluruh wilayah Kabupaten Temanggung.' }
    ],
    docsRequired: [
      'Kriteria posisi dan deskripsi tugas',
      'Lokasi penempatan kerja di Kabupaten Temanggung',
      'Standar upah dan jam kerja yang ditawarkan'
    ]
  },
  {
    id: 'it-komputer',
    slug: 'it-komputer',
    title: 'IT, Komputer & Digital',
    category: 'digital',
    badge: 'Teknologi & Hardware',
    desc: 'Teknisi instalasi jaringan kantor Wi-Fi, kamera CCTV online, sistem komputer kasir toko (POS), dan servis berkala di Temanggung.',
    icon: '⚙',
    iconBg: '#f8fafc',
    iconColor: '#1e293b',
    search: 'it komputer jaringan wifi cctv setup printer instalasi software maintenance kasir pos email bisnis temanggung',
    tagline: 'Pastikan infrastruktur digital dan keamanan tempat usaha Anda bekerja tanpa hambatan',
    scopes: [
      { title: 'Instalasi Jaringan Wi-Fi & Mikrotik', desc: 'Setting router kantor/kafe dengan manajemen bandwidth rapi dan minim gangguan.' },
      { title: 'Pemasangan & Setup CCTV Online', desc: 'Instalasi kamera pengawas yang bisa dipantau langsung 24 jam dari HP Anda di mana saja.' },
      { title: 'Setup Mesin Kasir & Printer Thermal', desc: 'Konfigurasi tablet kasir POS, scanner barcode, laci uang, dan pencetakan nota otomatis.' }
    ],
    steps: [
      { no: 1, title: 'Survei Lokasi & Kebutuhan Titik', desc: 'Menghitung panjang kabel, posisi kamera CCTV, atau jangkauan sinyal Wi-Fi.' },
      { no: 2, title: 'Instalasi Kabel & Perangkat Keras', desc: 'Pemasangan rapi dengan pipa pelindung dan pengujian tegangan listrik stabil.' },
      { no: 3, title: 'Konfigurasi Aplikasi & Pelatihan', desc: 'Uji coba sistem dan pelatihan singkat kepada Anda dan karyawan.' }
    ],
    pricingTable: [
      { service: 'Jasa Setting Kasir POS & Printer', time: '1 Hari', note: 'Mulai Rp 150.000 – Rp 300.000' },
      { service: 'Jasa Pemasangan CCTV per Titik', time: '1–2 Hari', note: 'Mulai Rp 100.000 – Rp 175.000 / kamera (jasa pasang)' },
      { service: 'Setting Router & Manajemen Wi-Fi', time: '1 Hari', note: 'Mulai Rp 200.000 – Rp 400.000' }
    ],
    faqs: [
      { q: 'Apakah melayani panggilan ke luar kota Temanggung?', a: 'Fokus utama kami adalah seluruh kecamatan Kabupaten Temanggung dan area perbatasan terdekat.' }
    ],
    docsRequired: [
      'Alamat lokasi pemasangan',
      'Daftar perangkat yang sudah dimiliki atau butuh pengadaan'
    ]
  },
  {
    id: 'lainnya',
    slug: 'lainnya',
    title: 'Jasa Lainnya',
    category: 'bisnis',
    badge: 'Kebutuhan Khusus',
    desc: 'Punya kebutuhan spesifik yang belum tercantum? Diskusikan dengan tim kami untuk mendapatkan jalan keluar dan vendor terbaik di Temanggung.',
    icon: '★',
    iconBg: '#f8fafc',
    iconColor: '#1e293b',
    search: 'jasa lainnya custom order sourcing vendor surveyor riset lapangan permintaan khusus temanggung',
    tagline: 'Sampaikan kendala atau kebutuhan Anda, kami bantu carikan solusi terpercaya',
    scopes: [
      { title: 'Riset Lapangan & Verifikasi Mitra', desc: 'Pengecekan fisik keaslian keberadaan toko, gudang, atau rekan bisnis di Temanggung.' },
      { title: 'Pengurusan Administrasi Khusus', desc: 'Bantuan koordinasi berkas antar instansi pemerintahan di Kabupaten Temanggung.' },
      { title: 'Sourcing Produk & Komoditas Lokal', desc: 'Menghubungkan Anda dengan sentra kopi robusta/arabika, tembakau, dan kerajinan lokal.' }
    ],
    steps: [
      { no: 1, title: 'Ceritakan Kebutuhan Spesifik', desc: 'Jelaskan apa yang ingin Anda selesaikan di Kabupaten Temanggung.' },
      { no: 2, title: 'Kajian Kelayakan & Estimasi Biaya', desc: 'Kami memeriksa ketersediaan sumber daya dan memberikan estimasi transparan.' },
      { no: 3, title: 'Pelaksanaan Tugas Bergaransi', desc: 'Tugas dijalankan dengan laporan perkembangan berkala via WhatsApp.' }
    ],
    pricingTable: [
      { service: 'Konsultasi & Sourcing Khusus', time: 'Fleksibel', note: 'Disesuaikan dengan tingkat kompleksitas dan jarak tempuh' }
    ],
    faqs: [
      { q: 'Bagaimana cara berkonsultasi untuk kebutuhan khusus?', a: 'Cukup klik tombol Konsultasi via WhatsApp dan ceritakan secara rinci apa yang Anda perlukan. Tim kami akan segera merespons.' }
    ],
    docsRequired: [
      'Penjelasan detail kebutuhan',
      'Batas waktu pengerjaan (deadline)'
    ]
  }
];

export const ARTICLES: ArticleItem[] = [
  {
    slug: 'panduan-izin-usaha-nib-oss-temanggung',
    title: 'Panduan Lengkap Cara Mengurus NIB OSS-RBA dan Izin Usaha UMKM di Temanggung (2026)',
    category: 'legalitas',
    categoryLabel: 'Perizinan & Legalitas',
    badgeBg: '#eff6ff',
    badgeColor: '#1d4ed8',
    date: '28 September 2026',
    readTime: '6 Menit',
    author: 'Tim Legalitas Jasa Temanggung',
    description: 'Ulasan tuntas proses registrasi izin usaha mikro dan kecil di DPMPTSP Temanggung tanpa calo, penentuan kode KBLI 5 digit, hingga syarat pencairan pinjaman KUR bank.',
    search: 'panduan cara mengurus nib oss rba izin usaha umkm dpmptsp temanggung kbli risiko legalitas',
    content: [
      {
        heading: 'Mengapa NIB Sangat Penting untuk Usaha di Temanggung?',
        paragraphs: [
          'Bagi pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) di Kabupaten Temanggung—mulai dari produsen kopi di Kledung, perajin tembakau di Parakan, sentra keripik jamur di Kandangan, hingga toko retail di Temanggung Kota—memiliki legalitas usaha bukan lagi sekadar formalitas, melainkan kebutuhan mendasar.',
          'Dengan berlakunya sistem Online Single Submission Risk-Based Approach (OSS-RBA), Nomor Induk Berusaha (NIB) kini berfungsi tunggal sebagai identitas usaha, Tanda Daftar Perusahaan (TDP), Angka Pengenal Importir (API), hingga hak akses kepabeanan.'
        ],
        bullets: [
          'Syarat Utama Pengajuan KUR Bank: Bank BRI, BNI, Mandiri, dan Bank Jateng di wilayah Temanggung mewajibkan NIB sebagai dokumen legalitas pencairan modal usaha bunga rendah.',
          'Akses Bantuan Pemerintah & Kuota SEHATI: Pendaftaran sertifikasi halal gratis dan program pembinaan Disperindagkop Temanggung mensyaratkan NIB aktif.',
          'Perlindungan dan Kepastian Hukum: Bisnis terdata resmi sehingga aman saat ada pemeriksaan legalitas atau perluasan skala tempat usaha.'
        ]
      },
      {
        heading: 'Dokumen Syarat Pengurusan NIB Perseorangan & Badan',
        paragraphs: [
          'Persyaratan pembuatan NIB di OSS-RBA saat ini sangat ringkas dan dapat diselesaikan tanpa perlu surat pengantar RT/RW atau kelurahan:',
          'Pastikan Nomor Induk Kependudukan (NIK) Anda telah padan dan terverifikasi di database Disdukcapil Kabupaten Temanggung, serta NPWP pribadi dalam status aktif di DJP Online.'
        ],
        bullets: [
          'KTP Elektronik (e-KTP) Pemilik Usaha yang masih berlaku.',
          'NPWP Pribadi Pemilik (untuk perorangan) atau NPWP Badan (untuk PT/CV).',
          'Nomor WhatsApp dan alamat email aktif untuk verifikasi OTP sistem.',
          'Data Alamat Lokasi Usaha (RT/RW, Desa/Kelurahan, Kecamatan di Temanggung).',
          'Prakiraan modal usaha awal (tidak termasuk tanah dan bangunan tempat usaha).'
        ]
      },
      {
        heading: 'Langkah Pembuatan Akun & Input KBLI di OSS-RBA',
        paragraphs: [
          'Buka situs resmi oss.go.id, klik tombol Daftar di pojok kanan atas, pilih kategori Usaha Mikro dan Kecil (UMK) bagi permodalan di bawah Rp 5 miliar.',
          'Isi data identitas diri dan lakukan verifikasi melalui kode OTP yang dikirimkan ke email Anda. Setelah akun aktif, login dan klik menu Perizinan Berusaha -> Permohonan Baru.',
          'Pilihlah kode KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) 5 digit yang paling mencerminkan bisnis Anda. Sebagai contoh, KBLI 47111 untuk perdagangan eceran sembako kelontong, atau KBLI 56303 untuk kedai kopi modern.'
        ]
      },
      {
        heading: 'Pendampingan Pengurusan Cepat via Jasa Temanggung',
        paragraphs: [
          'Bagi pelaku usaha yang tidak memiliki banyak waktu luang atau mengalami kendala teknis validasi NIK di sistem OSS, tim Jasa Temanggung siap memberikan pendampingan penyiapan berkas dari awal hingga NIB ber-QR code resmi diterbitkan dalam 1–2 hari kerja.'
        ]
      }
    ],
    relatedServiceId: 'perizinan'
  },
  {
    slug: 'cara-mengurus-npwp-badan-dan-lapor-spt-pajak-temanggung',
    title: 'Cara Mengurus NPWP Badan & Pelaporan SPT Pajak UMKM di KPP Pratama Temanggung (2026)',
    category: 'legalitas',
    categoryLabel: 'Perpajakan & Legalitas',
    badgeBg: '#fef3c7',
    badgeColor: '#92400e',
    date: '30 September 2026',
    readTime: '7 Menit',
    author: 'Tim Konsultan Pajak Jasa Temanggung',
    description: 'Panduan pendaftaran NPWP PT/CV, aktivasi EFIN badan, tarif PPh Final 0,5% PP 55/2022, dan pelaporan SPT Tahunan online bebas sanksi denda di KPP Pratama Temanggung.',
    search: 'cara mengurus npwp badan pelaporan spt pajak umkm kpp pratama temanggung efin tarif pph final 0.5 djp online coretax',
    content: [
      {
        heading: 'Kewajiban Perpajakan Badan Usaha di Kabupaten Temanggung',
        paragraphs: [
          'Setelah mendirikan PT Perorangan, PT Biasa, atau CV di Kabupaten Temanggung, langkah wajib selanjutnya adalah mendaftarkan Nomor Pokok Wajib Pajak (NPWP) Badan ke Kantor Pelayanan Pajak (KPP) Pratama Temanggung.',
          'NPWP Badan diperlukan untuk membuka rekening giro bank atas nama perusahaan, menerbitkan invoice resmi B2B, dan memenuhi kepatuhan regulasi perpajakan nasional.'
        ],
        bullets: [
          'Mencegah sanksi denda administrasi keterlambatan pendaftaran.',
          'Memisahkan kewajiban pajak pribadi pemilik dengan operasional badan hukum.',
          'Mendapatkan fasilitas insentif tarif PPh Final 0,5% sesuai PP 55/2022 untuk UMKM.'
        ]
      },
      {
        heading: 'Syarat & Dokumen Pembuatan NPWP Badan',
        paragraphs: [
          'Dokumen yang harus disiapkan sebelum mengajukan pendaftaran secara daring di ereg.pajak.go.id:'
        ],
        bullets: [
          'Salinan SK Kemenkumham (untuk PT Perorangan/PT Biasa) atau Surat Keterangan Terdaftar Pengadilan/AHU (untuk CV).',
          'KTP & NPWP Direktur / Penanggung Jawab Perusahaan yang aktif dan tertib SPT pribadi.',
          'Surat Keterangan Domisili Usaha atau NIB OSS-RBA.',
          'Nomor telepon dan email resmi perusahaan yang belum pernah didaftarkan ke DJP.'
        ]
      },
      {
        heading: 'Aturan Tarif PPh Final 0,5% UMKM & Pelaporan SPT Tahunan',
        paragraphs: [
          'Badan usaha yang memiliki peredaran bruto (omset) di bawah Rp 4,8 miliar dalam 1 tahun pajak dapat memanfaatkan tarif PPh Final 0,5% dari omset bulanan.',
          'Batas waktu pelaporan SPT Tahunan Badan adalah tanggal 30 April setiap tahunnya. Pastikan Anda telah mengaktifkan EFIN Badan di KPP Pratama Temanggung.'
        ]
      }
    ],
    relatedServiceId: 'akuntansi-pajak'
  },
  {
    slug: 'panduan-izin-lingkungan-sppl-amdal-dlh-temanggung',
    title: 'Panduan Pengurusan SPPL & Izin Lingkungan DLH Temanggung untuk Usaha & Gudang (2026)',
    category: 'legalitas',
    categoryLabel: 'Lingkungan & Perizinan',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857',
    date: '30 September 2026',
    readTime: '6 Menit',
    author: 'Tim Regulasi Lingkungan Jasa Temanggung',
    description: 'Standar persetujuan lingkungan hidup, komitmen SPPL otomatis di OSS, UKL-UPL penanganan limbah kopi & tembakau, dan alur verifikasi teknis DLH Temanggung.',
    search: 'panduan izin lingkungan sppl amdal ukl upl dlh dinas lingkungan hidup temanggung pengolahan limbah kopi tembakau pabrik kayu oss rba',
    content: [
      {
        heading: 'Klasifikasi Dokumen Lingkungan Hidup di Temanggung',
        paragraphs: [
          'Setiap kegiatan usaha di Kabupaten Temanggung wajib memiliki persetujuan lingkungan sesuai amanat PP No. 22 Tahun 2021. Dinas Lingkungan Hidup (DLH) Kabupaten Temanggung membagi dokumen lingkungan menjadi tiga tingkatan:',
          '1. SPPL (Surat Pernyataan Kesanggupan Pengelolaan dan Pemantauan Lingkungan Hidup) untuk usaha mikro-kecil dengan dampak minimal.',
          '2. UKL-UPL untuk kegiatan usaha berdampak sedang seperti gudang komoditas, pabrik kayu, dan pengolahan basah kopi.',
          '3. AMDAL untuk industri berskala besar yang berbatasan dengan kawasan lindung.'
        ]
      },
      {
        heading: 'Komitmen Pengelolaan Limbah Usaha Khas Temanggung',
        paragraphs: [
          'Di Temanggung, perhatian khusus diberikan kepada pengolahan limbah kulit tanduk kopi, air limbah fermentasi kopi, dan debu pengolahan tembakau agar tidak mencemari saluran irigasi pertanian lokal.'
        ],
        bullets: [
          'Penyediaan bak pengendapan air limbah sederhana sebelum dialirkan ke saluran umum.',
          'Pemisahan tempat penampungan limbah B3 (oli bekas, kemasan bahan kimia).',
          'Pernyataan tertulis komitmen menjaga kebersihan dan ketertiban lingkungan sekitar.'
        ]
      }
    ],
    relatedServiceId: 'perizinan'
  },
  {
    slug: 'panduan-izin-tanda-daftar-gudang-tdg-temanggung',
    title: 'Syarat & Cara Mengurus Tanda Daftar Gudang (TDG) di Temanggung (2026)',
    category: 'legalitas',
    categoryLabel: 'Perdagangan & Gudang',
    badgeBg: '#ede9fe',
    badgeColor: '#5b21b6',
    date: '30 September 2026',
    readTime: '6 Menit',
    author: 'Tim Legalitas Jasa Temanggung',
    description: 'Kewajiban legalitas tempat penyimpanan komoditas di Temanggung sesuai Permendag, syarat luas gudang, audit tata ruang K3, dan sanksi penutupan.',
    search: 'syarat cara mengurus tanda daftar gudang tdg temanggung disperindagkop ukm dpmptsp gudang tembakau kopi pupuk sembako kbli 52101 logistik',
    content: [
      {
        heading: 'Siapa Saja yang Wajib Memiliki TDG di Temanggung?',
        paragraphs: [
          'Berdasarkan Peraturan Menteri Perdagangan, setiap pemilik atau penyewa gudang tertutup dengan luas minimal 36 m² atau kapasitas simpan minimal 144 m³ yang digunakan untuk menyimpan komoditas pangan, tembakau, kopi, pupuk, atau barang industri wajib memiliki Tanda Daftar Gudang (TDG).',
          'Di Temanggung, pengawasan dilakukan secara berkala oleh Disperindagkop UKM bersama DPMPTSP Temanggung untuk memastikan data rantai pasok dan kelaikan tempat penyimpanan.'
        ]
      },
      {
        heading: 'Persyaratan Dokumen Pengajuan TDG',
        paragraphs: [
          'Berkas yang wajib dipersiapkan meliputi NIB dengan KBLI pergudangan (52101/52102), bukti kepemilikan atau sewa bangunan gudang, tata letak denah penyimpanan (layout), serta izin PBG/SLF bangunan gudang.'
        ]
      }
    ],
    relatedServiceId: 'perizinan'
  },
  {
    slug: 'panduan-analisis-data-bisnis-umkm-temanggung',
    title: 'Panduan Analisis Data Bisnis UMKM Temanggung: Optimalkan Omset & Efisiensi Stok (2026)',
    category: 'digital',
    categoryLabel: 'Bisnis & Analisis Data',
    badgeBg: '#e0f2fe',
    badgeColor: '#0369a1',
    date: '30 September 2026',
    readTime: '7 Menit',
    author: 'Tim Data Analyst Jasa Temanggung',
    description: 'Strategi membaca data transaksi kasir POS, audit Pareto 80/20 margin produk, dan dashboard interaktif HP untuk pertumbuhan bisnis lokal Temanggung.',
    search: 'panduan analisis data bisnis umkm temanggung optimalkan omset efisiensi stok hpp dashboard looker studio excel kasir pos profit',
    content: [
      {
        heading: 'Mengapa Bisnis UMKM di Temanggung Perlu Analisis Data?',
        paragraphs: [
          'Banyak pengusaha di Temanggung merasa omset penjualan ramai setiap hari, tetapi saat akhir bulan saldo kas tidak bertambah. Fenomena ini biasanya disebabkan oleh ketidaktahuan atas margin laba bersih riil dan dead stock yang mengendap di gudang.',
          'Dengan memanfaatkan analisis data sederhana, Anda dapat mengetahui produk mana yang menghasilkan 80% keuntungan (hukum Pareto) dan jam-jam sibuk kunjungan konsumen.'
        ]
      },
      {
        heading: 'Langkah Praktis Mengolah Data Kasir',
        paragraphs: [
          '1. Ekspor data penjualan dari aplikasi kasir Anda ke dalam format Excel/CSV.',
          '2. Hitung kontribusi margin laba kotor per item setelah dikurangi bahan baku riil.',
          '3. Hubungkan Google Sheets ke Google Looker Studio untuk mendapatkan dashboard visual grafik harian yang otomatis diperbarui.'
        ]
      }
    ],
    relatedServiceId: 'analis-data'
  },
  {
    slug: 'cara-mengurus-izin-edar-pirt-dinkes-temanggung',
    title: 'Cara & Syarat Mengurus Izin Edar P-IRT di Dinas Kesehatan Temanggung (2026)',
    category: 'sertifikasi',
    categoryLabel: 'Pangan & Sertifikasi',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857',
    date: '30 September 2026',
    readTime: '6 Menit',
    author: 'Tim Konsultan Pangan Jasa Temanggung',
    description: 'Panduan pengajuan SPP-IRT OSS, pelatihan PKP, standar label kemasan BPOM, dan uji kelayakan sarana produksi olahan kopi & makanan ringan khas Temanggung.',
    search: 'cara syarat mengurus izin edar pirt dinkes temanggung makanan umkm olahan kopi pkp sppirt pangan',
    content: [
      {
        heading: 'Pentingnya Nomor P-IRT untuk Produk Pangan Olahan',
        paragraphs: [
          'Nomor Sertifikat Produksi Pangan Industri Rumah Tangga (SPP-IRT) adalah bukti resmi kelayakan higienitas produk makanan dan minuman olahan. Tanpa P-IRT, produk Anda tidak dapat masuk ke minimarket, toko oleh-oleh, atau pameran resmi Pemkab Temanggung.'
        ],
        bullets: [
          'Memberikan rasa aman dan kepercayaan kepada konsumen.',
          'Memenuhi syarat wajib sebelum mendaftar Sertifikasi Halal.',
          'Melindungi produsen dari ancaman razia barang pangan tanpa izin edar.'
        ]
      },
      {
        heading: 'Alur Pengurusan SPP-IRT di Dinas Kesehatan Temanggung',
        paragraphs: [
          '1. Memiliki NIB OSS-RBA dengan KBLI industri pangan mikro/kecil.',
          '2. Mengikuti Penyuluhan Keamanan Pangan (PKP) yang diselenggarakan Dinkes Temanggung.',
          '3. Memenuhi standar rancangan label kemasan (mencakup komposisi, berat bersih, nama produsen, kode produksi, dan tanggal kedaluwarsa).',
          '4. Verifikasi lapangan pemeriksaan sarana produksi pangan oleh petugas sanitarian puskesmas/dinkes.'
        ]
      }
    ],
    relatedServiceId: 'perizinan'
  },
  {
    slug: 'panduan-sertifikasi-halal-gratis-sehati-temanggung',
    title: 'Panduan Sertifikasi Halal Gratis (SEHATI) Self-Declare Temanggung (2026)',
    category: 'sertifikasi',
    categoryLabel: 'Sertifikasi Halal',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857',
    date: '28 September 2026',
    readTime: '5 Menit',
    author: 'Tim Halal Center Jasa Temanggung',
    description: 'Syarat pengajuan sertifikat halal skema self-declare BPJPH bagi UMKM kuliner dan olahan kopi di Temanggung tanpa biaya pendaftaran.',
    search: 'panduan sertifikasi halal gratis sehati self declare temanggung bpjph kementerian agama kopi makanan minuman',
    content: [
      {
        heading: 'Kewajiban Sertifikasi Halal untuk Pelaku Usaha',
        paragraphs: [
          'Kewajiban sertifikasi halal tahap pertama berlaku bagi produk makanan dan minuman. Pelaku usaha mikro dan kecil di Temanggung beruntung karena dapat memanfaatkan program kuota SEHATI (Sertifikasi Halal Gratis) skema pernyataan mandiri (Self-Declare).'
        ]
      },
      {
        heading: 'Kriteria Produk yang Berhak Ikut Skema Gratis',
        paragraphs: [
          'Produk tidak berisiko atau menggunakan bahan yang sudah dipastikan kehalalannya, proses produksi sederhana, dan belum pernah menggunakan bahan hewani yang disembelih tanpa sertifikat halal RPH.'
        ]
      }
    ],
    relatedServiceId: 'perizinan'
  },
  {
    slug: 'syarat-bikin-pt-perorangan-di-temanggung',
    title: 'Syarat & Prosedur Bikin PT Perorangan di Temanggung Modal Ringan (2026)',
    category: 'legalitas',
    categoryLabel: 'Badan Hukum UMKM',
    badgeBg: '#eff6ff',
    badgeColor: '#1d4ed8',
    date: '28 September 2026',
    readTime: '6 Menit',
    author: 'Tim Notariat & Legal Jasa Temanggung',
    description: 'Solusi badan hukum resmi khusus UMKM Temanggung: 1 orang pendiri, tanpa akta notaris, pemisahan harta kekayaan pribadi, dan SK Kemenkumham elektronik.',
    search: 'syarat prosedur bikin pt perorangan temanggung modal ringan kemenkumham ahu online umkm legalitas',
    content: [
      {
        heading: 'Keunggulan PT Perorangan Dibandingkan CV atau Toko Biasa',
        paragraphs: [
          'PT Perorangan lahir melalui UU Cipta Kerja untuk memberikan perlindungan hukum bagi usaha mikro dan kecil. Cukup didirikan oleh 1 orang warga negara Indonesia, Anda sudah memiliki status badan hukum resmi dengan pemisahan aset pribadi dan aset usaha.'
        ]
      },
      {
        heading: 'Langkah Pendirian di Kemenkumham',
        paragraphs: [
          'Pengajuan nama PT melalui portal AHU Kemenkumham, pengisian formulir pernyataan pendirian elektronik, pembayaran PNBP resmi, dan pengunduhan SK Pengesahan yang langsung terintegrasi dengan penerbitan NPWP Badan.'
        ]
      }
    ],
    relatedServiceId: 'perizinan'
  },
  {
    slug: 'izin-usaha-kafe-kedai-kopi-restoran-temanggung',
    title: 'Panduan Izin Usaha Kafe, Kedai Kopi & Restoran di Temanggung (2026)',
    category: 'legalitas',
    categoryLabel: 'Kuliner & Kafe',
    badgeBg: '#fef3c7',
    badgeColor: '#92400e',
    date: '26 September 2026',
    readTime: '6 Menit',
    author: 'Tim Perizinan Jasa Temanggung',
    description: 'Panduan pemilihan kode KBLI 56303 (kedai kopi), sertifikat standar laik higiene sanitasi, izin tata ruang PBG, dan retribusi daerah Temanggung.',
    search: 'izin usaha kafe kedai kopi restoran temanggung kbli 56303 pbg higiene sanitasi dpmptsp kuliner',
    content: [
      {
        heading: 'Menjamurnya Kedai Kopi di Kabupaten Temanggung',
        paragraphs: [
          'Sebagai salah satu penghasil kopi arabika dan robusta terbaik di Indonesia, pertumbuhan kedai kopi di Temanggung sangat pesat. Memiliki izin usaha lengkap menjamin kenyamanan operasional dan memudahkan kerja sama dengan sponsor rokok atau perbankan.'
        ]
      }
    ],
    relatedServiceId: 'perizinan'
  },
  {
    slug: 'panduan-mengurus-pbg-dan-slf-temanggung',
    title: 'Panduan Mengurus PBG dan SLF Bangunan Tempat Usaha di Temanggung (2026)',
    category: 'properti',
    categoryLabel: 'Bangunan & Properti',
    badgeBg: '#ede9fe',
    badgeColor: '#5b21b6',
    date: '26 September 2026',
    readTime: '7 Menit',
    author: 'Tim Arsitektur & Perizinan Jasa Temanggung',
    description: 'Pengganti IMB: Persetujuan Bangunan Gedung (PBG) dan Sertifikat Laik Fungsi (SLF) melalui portal SIMBG di Dinas PUPR Temanggung.',
    search: 'panduan mengurus pbg slf temanggung persetujuan bangunan gedung izin mendirikan bangunan simbg pupr tata ruang',
    content: [
      {
        heading: 'Perubahan IMB Menjadi PBG dan Urgensi SLF',
        paragraphs: [
          'Sejak berlakunya PP No. 16 Tahun 2021, izin IMB resmi digantikan oleh Persetujuan Bangunan Gedung (PBG). Bagi bangunan usaha seperti ruko, kafe, gudang, dan klinik di Temanggung, kepemilikan SLF membuktikan bahwa bangunan aman digunakan secara struktural.'
        ]
      }
    ],
    relatedServiceId: 'properti'
  },
  {
    slug: 'biaya-balik-nama-dan-pajak-stnk-samsat-temanggung',
    title: 'Biaya Balik Nama (BBNKB) & Pajak STNK di Samsat Temanggung (2026)',
    category: 'otomotif',
    categoryLabel: 'Samsat & Kendaraan',
    badgeBg: '#fef3c7',
    badgeColor: '#b45309',
    date: '25 September 2026',
    readTime: '6 Menit',
    author: 'Tim Samsat Jasa Temanggung',
    description: 'Rincian biaya ganti plat 5 tahunan, penghapusan denda pajak kendaraan bermotor, alur cek fisik, dan syarat balik nama di Kantor Samsat Temanggung.',
    search: 'biaya balik nama bbnkb pajak stnk samsat temanggung plat aa ganti plat 5 tahunan cek fisik motor mobil',
    content: [
      {
        heading: 'Kenapa Harus Balik Nama Kendaraan Plat AA Temanggung?',
        paragraphs: [
          'Membeli kendaraan bekas tanpa balik nama sering merepotkan di kemudian hari karena harus meminjam KTP pemilik lama setiap kali membayar pajak tahunan. Balik nama memberikan kepemilikan mutlak dan perlindungan hukum penuh.'
        ]
      }
    ],
    relatedServiceId: 'stnk-sim'
  },
  {
    slug: 'tips-membeli-tanah-kebun-sertifikat-shm-temanggung',
    title: 'Tips Membeli Tanah Kebun Sertifikat SHM di Temanggung Bebas Sengketa (2026)',
    category: 'properti',
    categoryLabel: 'Investasi & Pertanahan',
    badgeBg: '#ecfdf5',
    badgeColor: '#047857',
    date: '24 September 2026',
    readTime: '7 Menit',
    author: 'Tim Pertanahan & PPAT Jasa Temanggung',
    description: 'Langkah aman survei tanah kebun kopi/tembakau di Kledung & Parakan, cek keaslian SHM di BPN Temanggung, dan simulasi pajak BPHTB.',
    search: 'tips membeli tanah kebun sertifikat shm temanggung bebas sengketa bpn ppat akta jual beli ajb bphtb',
    content: [
      {
        heading: 'Potensi Investasi Tanah Perkebunan di Temanggung',
        paragraphs: [
          'Tanah kebun kopi di lereng Gunung Sumbing dan Sindoro semakin diminati investor luar kota. Namun, pengecekan keabsahan batas fisik lahan dan kesesuaian dengan buku tanah di Kantor Pertanahan (BPN) Temanggung wajib dilakukan sebelum menyerahkan uang muka.'
        ]
      }
    ],
    relatedServiceId: 'properti'
  },
  {
    slug: 'cara-bikin-website-bisnis-temanggung-masuk-google',
    title: 'Cara Bikin Website Bisnis Temanggung Masuk Halaman 1 Google (2026)',
    category: 'digital',
    categoryLabel: 'Website & SEO',
    badgeBg: '#e0f2fe',
    badgeColor: '#0369a1',
    date: '22 September 2026',
    readTime: '6 Menit',
    author: 'Tim Digital Web Jasa Temanggung',
    description: 'Panduan pembuatan website bisnis lokal dengan optimasi SEO on-page, integrasi Google Maps, dan struktur mobile-friendly cepat.',
    search: 'cara bikin website bisnis temanggung masuk google seo lokal google search console profil bisnisku',
    content: [
      {
        heading: 'Peluang Besar SEO Pencarian Lokal di Temanggung',
        paragraphs: [
          'Saat wisatawan atau investor membutuhkan layanan di Temanggung, Google adalah tempat pertama yang mereka tuju. Memiliki website berkecepatan tinggi yang dioptimasi untuk kata kunci lokal memberikan keunggulan kompetitif dibandingkan kompetitor yang hanya bergantung pada media sosial.'
        ]
      }
    ],
    relatedServiceId: 'website'
  },
  {
    slug: 'strategi-iklan-meta-ads-umkm-temanggung',
    title: 'Strategi Iklan Meta Ads (Instagram & FB) untuk UMKM Temanggung (2026)',
    category: 'digital',
    categoryLabel: 'Pemasaran Digital',
    badgeBg: '#e0f2fe',
    badgeColor: '#0369a1',
    date: '20 September 2026',
    readTime: '6 Menit',
    author: 'Tim Ads Specialist Jasa Temanggung',
    description: 'Kiat mendapatkan chat pesanan WhatsApp melimpah dengan target radius kecamatan Temanggung, budget minim hasil maksimal.',
    search: 'strategi iklan meta ads umkm temanggung facebook instagram ads klik whatsapp cpl hemat',
    content: [
      {
        heading: 'Iklan Berbayar vs Postingan Organik',
        paragraphs: [
          'Jangkauan organik akun media sosial semakin menurun. Melalui Meta Ads dengan penargetan geografis presisi, toko Anda bisa langsung tampil di beranda ribuan warga Temanggung yang sedang memegang ponsel.'
        ]
      }
    ],
    relatedServiceId: 'iklan-online'
  },
  {
    slug: 'panduan-mpp-mall-pelayanan-publik-temanggung',
    title: 'Panduan Layanan di MPP (Mall Pelayanan Publik) Kabupaten Temanggung (2026)',
    category: 'legalitas',
    categoryLabel: 'Pelayanan Publik',
    badgeBg: '#eff6ff',
    badgeColor: '#1d4ed8',
    date: '18 September 2026',
    readTime: '5 Menit',
    author: 'Tim Edukasi Jasa Temanggung',
    description: 'Daftar loket instansi di Gedung Pemuda Temanggung: DPMPTSP, Disdukcapil, Samsat, KPP Pratama, BPJS, dan tips antrean cepat.',
    search: 'panduan mpp mall pelayanan publik temanggung eks gedung pemuda loket dpmptsp disdukcapil samsat',
    content: [
      {
        heading: 'One Stop Service di Eks Gedung Pemuda Temanggung',
        paragraphs: [
          'Mall Pelayanan Publik (MPP) Temanggung memadukan puluhan loket pelayanan instansi pusat dan daerah dalam satu atap untuk mempermudah warga mengurus dokumen perizinan, kependudukan, pajak, dan jaminan sosial.'
        ]
      }
    ],
    relatedServiceId: 'perizinan'
  }
];

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev_1',
    name: 'Budi Santoso',
    role: 'Pemilik Kedai Kopi Sindoro, Kledung',
    category: 'dokumen',
    serviceTag: 'Jasa Perizinan OSS NIB',
    rating: 5,
    text: 'Sangat terbantu mengurus NIB OSS dan sertifikasi Halal kedai kopi kami. Sebelumnya bingung menentukan KBLI yang pas, tim Jasa Temanggung langsung dampingi sampai terbit dan beres dalam 2 hari.',
    verified: true
  },
  {
    id: 'rev_2',
    name: 'Siti Nurjanah',
    role: 'Produser Camilan Keripik, Parakan',
    category: 'dokumen',
    serviceTag: 'Izin Edar P-IRT Dinkes',
    rating: 5,
    text: 'Alhamdulillah proses pengajuan P-IRT ke Dinas Kesehatan Temanggung dipandu detail dari label kemasan sampai pengujian higiene. Sekarang produk keripik sudah bisa masuk swalayan lokal.',
    verified: true
  },
  {
    id: 'rev_3',
    name: 'Hendra Gunawan',
    role: 'Toko Perlengkapan Rumah, Kranggan',
    category: 'digital',
    serviceTag: 'Jasa Meta Ads & Iklan Online',
    rating: 5,
    text: 'Budget harian 40 ribuan tapi chat masuk WhatsApp toko kami meningkat drastis. Penargetan radius kecamatan Temanggung sangat efektif untuk toko retail fisik seperti kami.',
    verified: true
  },
  {
    id: 'rev_4',
    name: 'Rudi Hartono',
    role: 'Wirausaha, Temanggung Kota',
    category: 'kendaraan',
    serviceTag: 'Pajak 5 Tahunan & Mutasi STNK',
    rating: 5,
    text: 'Cepat dan transparan. Tidak perlu izin cuti kerja antre di Samsat Temanggung. Gesek nomor rangka mobil dan plat nomor baru langsung diantar ke rumah dengan aman.',
    verified: true
  },
  {
    id: 'rev_5',
    name: 'Agus Wibowo',
    role: 'Pengusaha Properti & Kebun, Bansari',
    category: 'dokumen',
    serviceTag: 'Notaris & Transaksi Tanah',
    rating: 5,
    text: 'Pengecekan sertifikat di BPN Temanggung sangat cermat sebelum kami tanda tangan AJB. Bebas dari risiko sengketa batas tanah kebun. Komunikasi ramah dan transparan.',
    verified: true
  }
];

export const COMPARISON_DATA = [
  {
    id: 'comp_1',
    name: 'NIB OSS Usaha Mikro',
    category: 'dokumen',
    categoryName: 'Legalitas & Dokumen',
    cost: 'Mulai Rp 150rb',
    costNum: 150000,
    duration: '1–2 Hari',
    durationNum: 1,
    output: 'Dokumen NIB Resmi QR-Code OSS',
    serviceId: 'perizinan'
  },
  {
    id: 'comp_2',
    name: 'Pendirian PT Perorangan',
    category: 'dokumen',
    categoryName: 'Legalitas & Dokumen',
    cost: 'Mulai Rp 750rb',
    costNum: 750000,
    duration: '2–4 Hari',
    durationNum: 2,
    output: 'SK Kemenkumham, NIB & NPWP Badan',
    serviceId: 'perizinan'
  },
  {
    id: 'comp_3',
    name: 'Sertifikasi Halal (SEHATI)',
    category: 'dokumen',
    categoryName: 'Legalitas & Dokumen',
    cost: 'Mulai Rp 250rb (Pendampingan)',
    costNum: 250000,
    duration: '14–30 Hari',
    durationNum: 14,
    output: 'Sertifikat Halal Resmi BPJPH RI',
    serviceId: 'perizinan'
  },
  {
    id: 'comp_4',
    name: 'Pajak STNK Tahunan Motor',
    category: 'kendaraan',
    categoryName: 'Samsat Kendaraan',
    cost: 'Mulai Rp 50rb + PKB Resmi',
    costNum: 50000,
    duration: '1 Hari',
    durationNum: 1,
    output: 'STNK Pengesahan & SKPD Lunas',
    serviceId: 'stnk-sim'
  },
  {
    id: 'comp_5',
    name: 'Ganti Plat 5 Tahunan Mobil',
    category: 'kendaraan',
    categoryName: 'Samsat Kendaraan',
    cost: 'Mulai Rp 150rb + PKB',
    costNum: 150000,
    duration: '1–2 Hari',
    durationNum: 1,
    output: 'STNK Baru, Lembar Cek Fisik & Plat Baru',
    serviceId: 'stnk-sim'
  },
  {
    id: 'comp_6',
    name: 'Setup Iklan Meta Ads (WA Leads)',
    category: 'digital',
    categoryName: 'Digital & Pemasaran',
    cost: 'Mulai Rp 350rb (Setup)',
    costNum: 350000,
    duration: '1–2 Hari',
    durationNum: 1,
    output: 'Kampanye Aktif, Pixel & Teks Penawaran',
    serviceId: 'iklan-online'
  },
  {
    id: 'comp_7',
    name: 'Dashboard Analisis Bisnis POS',
    category: 'digital',
    categoryName: 'Digital & Pemasaran',
    cost: 'Mulai Rp 500rb',
    costNum: 500000,
    duration: '3–5 Hari',
    durationNum: 3,
    output: 'Dashboard Looker Studio Interaktif di HP',
    serviceId: 'analis-data'
  },
  {
    id: 'comp_8',
    name: 'Website Company Profile & SEO',
    category: 'digital',
    categoryName: 'Digital & Pemasaran',
    cost: 'Mulai Rp 1.5 Jt',
    costNum: 1500000,
    duration: '4–7 Hari',
    durationNum: 4,
    output: 'Website Domain .COM, SSL, & Index Google',
    serviceId: 'website'
  }
];

export const GENERAL_FAQS = [
  {
    category: 'Umum & Layanan',
    items: [
      {
        q: 'Apakah Jasa Temanggung adalah biro jasa resmi?',
        a: 'Jasa Temanggung adalah platform layanan profesional independen berbasis di Temanggung yang menghubungkan pelaku usaha dan masyarakat dengan konsultan, praktisi legalitas, mitra notaris/PPAT, dan tenaga ahli digital yang terpercaya.'
      },
      {
        q: 'Wilayah mana saja di Temanggung yang dapat dilayani?',
        a: 'Kami melayani seluruh 20 kecamatan di Kabupaten Temanggung: Temanggung Kota, Parakan, Kedu, Pringsurat, Ngadirejo, Kranggan, Kaloran, Bulu, Candiroto, Bansari, Tembarak, Kledung, Jumo, Tretep, Kandangan, Selopampang, Tlogomulyo, Gemawang, Bejen, dan Wonoboyo.'
      },
      {
        q: 'Bagaimana alur konsultasi dan pembayarannya?',
        a: 'Konsultasi awal untuk pemetaan masalah dan estimasi biaya dilakukan secara transparan tanpa pungutan liar. Pembayaran jasa dilakukan melalui rekening resmi bertahap atau setelah dokumen/tahapan diverifikasi.'
      }
    ]
  },
  {
    category: 'Perizinan & Usaha',
    items: [
      {
        q: 'Berapa lama proses pendirian PT Perorangan?',
        a: 'Proses penyiapan data, pengecekan nama di Kemenkumham, pendaftaran AHU online, hingga terbit SK Kemenkumham dan NPWP Badan memakan waktu rata-rata 2 hingga 4 hari kerja.'
      },
      {
        q: 'Apakah usaha rumahan makanan wajib sertifikat Halal?',
        a: 'Ya, seluruh produk makanan dan minuman wajib bersertifikat Halal. Pelaku usaha mikro dan kecil di Temanggung dapat memanfaatkan program gratis BPJPH (SEHATI) dengan pendampingan tim kami.'
      }
    ]
  },
  {
    category: 'Pemasaran Digital & IT',
    items: [
      {
        q: 'Berapa budget minimal untuk mulai beriklan di Meta Ads?',
        a: 'Anda bisa mulai dengan anggaran iklan Rp 25.000 – Rp 50.000 per hari yang disetorkan langsung ke saldo iklan Anda.'
      },
      {
        q: 'Berapa lama pembuatan website bisnis?',
        a: 'Untuk landing page promosi selesai dalam 2–3 hari kerja, sedangkan website company profile multi-halaman sekitar 4–7 hari kerja.'
      }
    ]
  }
];
