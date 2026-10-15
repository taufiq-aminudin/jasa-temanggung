import { ServiceItem, IndustryItem, CaseStudyItem, ArticleItem, LeadItem, TestimonialItem } from '../types';

export const SITE_CONFIG = {
  brand: 'FUTech Digital Indonesia',
  shortBrand: 'FUTech',
  tagline: 'Pemasaran Lebih Cerdas. Pertumbuhan Nyata Terukur.',
  subtagline: 'Agensi Performance Advertising, Google & Meta Ads, SEO, dan Konversi Digital Berkinerja Tinggi untuk Bisnis & UMKM Indonesia.',
  whatsappNumber: '6281382000412',
  whatsappDisplay: '+62 813-8200-0412',
  email: 'growth@futech.my.id',
  altEmail: 'halo@jasatemanggung.my.id',
  location: 'Jakarta & Jawa Tengah, Indonesia',
  operatingHours: 'Senin - Sabtu: 08.30 - 20.00 WIB',
  stats: {
    totalAdSpendManaged: 'Rp 24,8 Miliar+',
    averageRoas: '4.8x',
    activeCampaigns: '180+',
    retentionRate: '98.2%',
    leadsGenerated: '380.000+',
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'google-ads',
    slug: 'google-ads-management',
    title: 'Google Ads Management',
    category: 'paid-ads',
    categoryLabel: 'Paid Media',
    badge: 'High Intent Traffic',
    shortDesc: 'Jangkau calon pembeli berintensitas tinggi tepat saat mereka mencari produk atau jasa Anda di Google Search, Performance Max, dan Maps.',
    fullDesc: 'Google Ads adalah instrumen akuisisi pelanggan dengan niat beli (intent) tertinggi. Tim bersertifikasi kami mengelola riset kata kunci negatif ketat, struktur kampanye single-theme, bidding berbasis nilai konversi (tROAS/tCPA), serta integrasi feed Google Merchant Center.',
    iconName: 'Search',
    deliverables: [
      { title: 'Historical & Search Term Audit', desc: 'Pembersihan search terms boros biaya dan eliminasi kebocoran budget pada kata kunci tidak relevan.' },
      { title: 'Tracking & Value Signal Calibration', desc: 'Setup Google Tag Manager, GA4 enhanced conversion, dan offline conversion import via CRM.' },
      { title: 'Re-Architecting Campaigns', desc: 'Segmentasi ketat Search, Performance Max dengan asset group terisolasi, dan remarketing dinamis.' },
      { title: 'Systematic Bid & Budget Optimization', desc: 'Penerapan Smart Bidding dengan first-party data signals untuk memaksimalkan ROAS.' }
    ],
    process: [
      { step: '01', title: 'Audit Akun & Setup Tracking', desc: 'Validasi histori iklan 90 hari terakhir dan perbaikan conversion tracking.', duration: 'Hari 1 - 3' },
      { step: '02', title: 'Riset Keyword & Competitor', desc: 'Pemetaan intent komersial, kata kunci negatif, dan analisis penawaran pesaing.', duration: 'Hari 4 - 6' },
      { step: '03', title: 'Struktur & Peluncuran Kampanye', desc: 'Pembuatan ad copy persuasif, aset ekstensi lengkap, dan penyesuaian target geolokasi.', duration: 'Hari 7 - 9' },
      { step: '04', title: 'Scaling & Daily Optimization', desc: 'Penyesuaian bid tROAS bertahap, optimasi landing page, dan pelaporan berkala.', duration: 'Berkelanjutan' }
    ],
    metrics: [
      { label: 'Rata-rata Penurunan CPA', value: '-38%', benchmark: 'Industri Indonesia' },
      { label: 'Peningkatan Conversion Rate', value: '+45%', benchmark: 'Landing Page Optimized' },
      { label: 'Quality Score Rata-rata', value: '8.6/10', benchmark: 'Google Search Ads' }
    ],
    faqs: [
      { q: 'Berapa minimal anggaran iklan bulanan yang direkomendasikan?', a: 'Untuk hasil optimal pada Google Search dan PMax, kami menyarankan modal iklan minimal Rp 5.000.000 s/d Rp 15.000.000 per bulan agar algoritma Google memiliki data konversi yang cukup.' },
      { q: 'Siapa pemilik akun Google Ads dan data kampanye?', a: 'Anda adalah pemilik 100% dari akun iklan, data tracking, dan seluruh aset kampanye. Kami hanya mengakses via Google Ads Manager (MCC).' },
      { q: 'Apakah melayani kampanye lokal per kota / kabupaten?', a: 'Sangat bisa. Kami memiliki keahlian geo-targeting radius spesifik per kota, kabupaten (seperti wilayah Jabodetabek, Temanggung, Semarang, Jogja, Surabaya), hingga per kecamatan.' }
    ],
    startingPrice: 'Mulai Rp 3.500.000 / bln',
    durationEst: 'Setup 7 hari kerja + Manajemen bulanan'
  },
  {
    id: 'meta-ads',
    slug: 'meta-ads-management',
    title: 'Meta Ads (Facebook & Instagram)',
    category: 'paid-ads',
    categoryLabel: 'Paid Media',
    badge: 'Scalable Demand Generation',
    shortDesc: 'Ciptakan permintaan masif dan skala omzet melalui funnel iklan visual kreatif di Facebook Feed, Instagram Reels, dan Stories.',
    fullDesc: 'Kami menerapkan metode testing kreatif sistematis (Creative Sandbox), arsitektur kampanye terkonsolidasi Advantage+, serta sinkronisasi server-side Meta Conversions API (CAPI) untuk mengatasi penurunan sinyal akibat privasi iOS.',
    iconName: 'TrendingUp',
    deliverables: [
      { title: 'Infrastructure & Signal Audit', desc: 'Konfigurasi Meta Pixel + Conversions API (CAPI) dengan deduplikasi data 100% akurat.' },
      { title: 'Creative Testing Sandbox', desc: 'Pengujian terisolasi untuk hook 3 detik awal, format sudut pandang (UGC, edukasi, direct offer).' },
      { title: 'Consolidated Scaling Engine', desc: 'Skalasi bertahap pada aset dengan ROAS stabil tanpa merusak stabilitas pembelajaran machine learning.' },
      { title: 'Retention & Remarketing Funnel', desc: 'Segmentasi penonton video 75%, cart abandoners, dan re-engagement pembeli lama.' }
    ],
    process: [
      { step: '01', title: 'Audit Domain & CAPI Setup', desc: 'Verifikasi domain bisnis, setup Aggregated Event Measurement dan server-side CAPI.', duration: 'Hari 1 - 2' },
      { step: '02', title: 'Creative Direction & Angle Brief', desc: 'Penyusunan panduan visual, headline, dan angle copywriting yang memicu klik.', duration: 'Hari 3 - 5' },
      { step: '03', title: 'Deploy Sandbox Testing', desc: 'Peluncuran batch variasi kreatif untuk menemukan winning angle dengan CPA terendah.', duration: 'Hari 6 - 8' },
      { step: '04', title: 'Horizontal & Vertical Scaling', desc: 'Peningkatan budget pada winning adset sebesar 15-20% per 48 jam secara stabil.', duration: 'Berkelanjutan' }
    ],
    metrics: [
      { label: 'Rata-rata ROAS Dihasilkan', value: '4.6x', benchmark: 'E-commerce & Retail' },
      { label: 'Hook Rate (3s View)', value: '38.4%', benchmark: 'Video Ads Reels/Feed' },
      { label: 'Event Match Quality Meta CAPI', value: '8.8/10', benchmark: 'Server-Side Validated' }
    ],
    faqs: [
      { q: 'Bagaimana mengatasi tracking pixel yang tidak akurat setelah update iOS?', a: 'Kami mengimplementasikan Meta Conversions API (CAPI) berbasis server gateway sehingga konversi web dan WhatsApp tetap terbaca 90%+ akurat tanpa terblokir ad-blocker atau browser cookie policy.' },
      { q: 'Apakah FUTech juga memproduksi konten foto dan videonya?', a: 'Ya, paket kami mencakup pengarahan konsep kreatif (creative briefing), copywriting persuasif, dan editing template/video UGC iklan.' }
    ],
    startingPrice: 'Mulai Rp 3.500.000 / bln',
    durationEst: 'Setup 5 hari kerja + Manajemen bulanan'
  },
  {
    id: 'tiktok-ads',
    slug: 'tiktok-ads-management',
    title: 'TikTok Ads Management',
    category: 'paid-ads',
    categoryLabel: 'Paid Media',
    badge: 'Viral Hook & Velocity',
    shortDesc: 'Manfaatkan laju konsumsi konten video vertikal tercepat di Indonesia dengan Spark Ads, TikTok Shop Shopping Ads, dan UGC berdaya konversi tinggi.',
    fullDesc: 'TikTok bukan hanya media hiburan, melainkan pendorong keputusan belanja impulsif nomor satu bagi konsumen modern Indonesia. Kami memadukan riset tren sound lokal, hook visual 2 detik awal, dan strategi penawaran GMV/ROAS.',
    iconName: 'Video',
    deliverables: [
      { title: 'TikTok Events API Server Sync', desc: 'Koneksi server-side event tracking untuk melacak event AddToCart, InitiateCheckout, dan Purchase.' },
      { title: 'Native Spark Ads Amplification', desc: 'Amplifikasi postingan organik kreator/influencer lokal dengan authorization code resmi.' },
      { title: 'Weekly Creative Sprint', desc: 'Pembaruan 3-5 variasi kreatif baru setiap minggu untuk mencegah kelelahan iklan (creative fatigue).' },
      { title: 'TikTok Shop ROAS Optimization', desc: 'Optimasi kampanye LIVE shopping dan Product Shopping Ads di aplikasi TikTok.' }
    ],
    process: [
      { step: '01', title: 'Analisis Tren & Pesaing', desc: 'Bedah winning creatives di TikTok Creative Center dan analisa angle kompetitor.', duration: 'Hari 1 - 3' },
      { step: '02', title: 'Produksi Script & Hook', desc: 'Pembuatan naskah video gaya native TikTok yang tidak terasa seperti iklan kaku.', duration: 'Hari 4 - 6' },
      { step: '03', title: 'Uji Coba & Launching', desc: 'Pengetesan penargetan broad vs interest kelompok minat lokal.', duration: 'Hari 7 - 9' },
      { step: '04', title: 'Skalasi Budget GMV', desc: 'Fokuskan alokasi anggaran pada format dengan Cost Per Checkout terendah.', duration: 'Berkelanjutan' }
    ],
    metrics: [
      { label: 'First 2s Hook Rate', value: '42.1%', benchmark: 'Top 10% TikTok Ads' },
      { label: 'Rata-rata CPC TikTok', value: 'Rp 650', benchmark: 'Traffic Indonesia' },
      { label: 'Hold Rate (ThruPlay)', value: '29.3%', benchmark: 'Format Video Vertikal' }
    ],
    faqs: [
      { q: 'Apakah TikTok hanya cocok untuk produk remaja / Gen Z?', a: 'Mitos. Data pengguna aktif TikTok di Indonesia saat ini didominasi usia 22-45 tahun dengan daya beli tinggi untuk produk rumah tangga, fashion, klinik, properti, hingga kuliner.' },
      { q: 'Berapa lama sebuah materi video iklan TikTok bisa bertahan?', a: 'Umur efektif video di TikTok adalah 10-18 hari sebelum frekuensi saturasi tercapai. Itulah sebabnya sprint kreatif mingguan sangat vital.' }
    ],
    startingPrice: 'Mulai Rp 3.000.000 / bln',
    durationEst: 'Setup 5 hari kerja'
  },
  {
    id: 'seo-topical',
    slug: 'search-engine-optimization',
    title: 'SEO & Topical Authority',
    category: 'organic-seo',
    categoryLabel: 'Organic Search',
    badge: 'Long-Term Inbound Asset',
    shortDesc: 'Bangun dominasi halaman 1 Google secara permanen tanpa risiko penalti dengan arsitektur Topical Authority, Content Hub, dan Technical SEO.',
    fullDesc: 'Lupakan trik backlink spam PBN yang rentan musnah saat algoritma Google update. Kami mengimplementasikan kerangka kerja Semantic Search & Topical Authority: memetakan entitas bisnis Anda, membangun siloing konten menyeluruh, dan mengoptimasi Core Web Vitals.',
    iconName: 'Globe',
    deliverables: [
      { title: 'Topical Map & Keyword Cluster', desc: 'Peta semantik menyeluruh mencakup 100+ intent pencarian calon pembeli lokal dan nasional.' },
      { title: 'Content Silo & Internal Linking', desc: 'Arsitektur website hierarkis untuk transfer PageRank internal yang efisien ke halaman layanan komersial.' },
      { title: 'On-Page Entity Optimization', desc: 'Penyesuaian semantic tag, Schema.org JSON-LD terstruktur, dan penulisan standar E-E-A-T.' },
      { title: 'Authority Building & Digital PR', desc: 'Penempatan ulasan dan brand mention di media berita lokal dan portal terpercaya Indonesia.' }
    ],
    process: [
      { step: '01', title: 'Full Technical & Content Audit', desc: 'Crawl 100% halaman website, eliminasi duplicate content, dan perbaikan error index.', duration: 'Minggu 1' },
      { step: '02', title: 'Penyusunan Topical Map', desc: 'Pengelompokan klaster topik utama (Pillar) dan topik turunan (Cluster Articles).', duration: 'Minggu 2' },
      { step: '03', title: 'Eksekusi On-Page & Schema', desc: 'Implementasi JSON-LD Organization, LocalBusiness, Service, dan FAQ schema.', duration: 'Minggu 3' },
      { step: '04', title: 'Siklus Publikasi & Authority Boost', desc: 'Penerbitan artikel edukasi mendalam berkala dan optimasi ranking di Google Search Console.', duration: 'Bulan 2 - 6' }
    ],
    metrics: [
      { label: 'Kenaikan Trafik Organik', value: '+340%', benchmark: 'Periode 6 Bulan' },
      { label: 'Keywords Halaman 1', value: '85+', benchmark: 'Commercial Intent' },
      { label: 'Domain Authority Score', value: '42+', benchmark: 'White-Hat SEO' }
    ],
    faqs: [
      { q: 'Berapa lama SEO mulai menunjukkan hasil nyata?', a: 'Untuk website baru, hasil mulai terlihat di bulan ke-2 hingga ke-4. Untuk website yang sudah memiliki histori domain, optimasi on-page dan topical clustering dapat mendongkrak ranking dalam 3-6 minggu.' },
      { q: 'Apakah ranking di Google dijamin ranking #1?', a: 'Tidak ada agensi etis yang bisa membeli ranking dari Google, tetapi metodologi Semantic SEO kami terbukti konsisten mendudukkan puluhan kata kunci komersial di 3 posisi teratas.' }
    ],
    startingPrice: 'Mulai Rp 4.500.000 / bln',
    durationEst: 'Retainer 3 - 6 bulan'
  },
  {
    id: 'technical-seo',
    slug: 'technical-seo-website-audits',
    title: 'Audit Teknis Website & SEO',
    category: 'organic-seo',
    categoryLabel: 'Technical & Speed',
    badge: 'Zero-Friction Crawling',
    shortDesc: 'Diagnosa mendalam kode, Core Web Vitals, indeksasi, JavaScript rendering, dan struktur data untuk melipatgandakan kecepatan dan performa bot Google.',
    fullDesc: 'Website yang lambat atau memiliki kesalahan rendering JavaScript kehilangan 40% calon pelanggan sebelum halaman selesai dimuat. Kami memberikan solusi kode konkret bagi tim developer Anda.',
    iconName: 'Terminal',
    deliverables: [
      { title: 'Full Site Crawl Simulation', desc: 'Audit bot Googlebot mobile & desktop mengungkap crawl depth, orphan pages, dan status code 4xx/5xx.' },
      { title: 'Core Web Vitals Optimization', desc: 'Peningkatan skor LCP (Largest Contentful Paint), INP (Interaction to Next Paint), dan CLS ke zona hijau.' },
      { title: 'Robots.txt & Sitemap Re-engineering', desc: 'Efisiensi crawl budget bot pencari agar halaman penting terindeks dalam hitungan jam.' },
      { title: 'Mobile Responsiveness & Viewport Fixes', desc: 'Penghapusan elemen layout shift dan script pemblokir rendering (render-blocking assets).' }
    ],
    process: [
      { step: '01', title: 'Bot Crawl & Log Analysis', desc: 'Simulasi bot Googlebot dengan Screaming Frog & Chrome DevTools.', duration: 'Hari 1 - 2' },
      { step: '02', title: 'Laporan Masalah Prioritas', desc: 'Pemetaan isu teknis dari tingkat kritis (Blocking) hingga minor.', duration: 'Hari 3 - 4' },
      { step: '03', title: 'Implementasi Kode / Panduan Dev', desc: 'Optimasi script, kompresi aset gambar WebP, dan caching policy.', duration: 'Hari 5 - 7' },
      { step: '04', title: 'Validasi Google Search Console', desc: 'Pengajuan validasi perbaikan error pada Google Search Console.', duration: 'Hari 8 - 10' }
    ],
    metrics: [
      { label: 'Mobile PageSpeed Score', value: '96/100', benchmark: 'Google Lighthouse' },
      { label: 'Penurunan Waktu Muat (LCP)', value: '1.2 detik', benchmark: 'Dari semula 4.8s' },
      { label: 'Indexation Efficiency', value: '99.4%', benchmark: 'Crawl Budget Max' }
    ],
    faqs: [
      { q: 'Apakah tim FUTech langsung memperbaiki kodenya?', a: 'Ya, tim kami dapat langsung melakukan perubahan kode pada CMS (WordPress, Shopify) maupun framework modern (React, Next.js, HTML/Node), atau menyediakan panduan teknis siap pakai untuk tim in-house Anda.' }
    ],
    startingPrice: 'Mulai Rp 2.500.000 / audit',
    durationEst: 'Selesai dalam 5 hari kerja'
  },
  {
    id: 'landing-page-cro',
    slug: 'landing-page-design-cro',
    title: 'Desain Landing Page & CRO',
    category: 'conversion-cro',
    categoryLabel: 'Conversion Rate',
    badge: 'Conversion Engine',
    shortDesc: 'Ubah klik berbayar menjadi pembeli loyal dengan landing page berkecepatan tinggi, tata letak berbasis psikologi persuasi, dan tombol WhatsApp instan.',
    fullDesc: 'Trafik mahal sia-sia jika dialirkan ke halaman yang membingungkan. Kami mendesain landing page dengan standar industri tertinggi: zero-pill distraction, hierarki visual tegas, social proof di atas lipatan layar (above the fold), serta formulir order instan via WhatsApp CRM.',
    iconName: 'Layout',
    deliverables: [
      { title: 'Persuasive Copywriting & Storyline', desc: 'Struktur naskah PAS (Problem - Agitate - Solution) dengan penegasan penawaran irresistable.' },
      { title: 'High-Converting UI/UX Design', desc: 'Desain clean, modern, mobile-first yang dioptimasi untuk jempol pengguna smartphone Indonesia.' },
      { title: 'Sub-second Loading Speed', desc: 'Optimasi aset, lazy load gambar, dan code splitting sehingga halaman terbuka di bawah 1.5 detik.' },
      { title: 'Direct WhatsApp & Payment Integration', desc: 'Tombol CTA dinamis dengan autofill template pesan WhatsApp sesuai nama produk.' }
    ],
    process: [
      { step: '01', title: 'Riset Pembeli & Hambatan Mental', desc: 'Identifikasi 3 ketakutan utama pelanggan saat hendak membeli.', duration: 'Hari 1 - 2' },
      { step: '02', title: 'Penyusunan Wireframe & Copy', desc: 'Penyusunan naskah penjualan dan tata letak struktur penawaran.', duration: 'Hari 3 - 4' },
      { step: '03', title: 'Coding & Desain Visual', desc: 'Pengembangan halaman interaktif responsif mobile dan tablet.', duration: 'Hari 5 - 7' },
      { step: '04', title: 'Tracking Setup & A/B Test Launch', desc: 'Pemasangan heatmap Clarity/Hotjar dan uji coba headline berbeda.', duration: 'Hari 8 - 10' }
    ],
    metrics: [
      { label: 'Peningkatan Conversion Rate', value: '2.8x - 4.1x', benchmark: 'Rata-rata Klien' },
      { label: 'Mobile Bounce Rate', value: '< 24%', benchmark: 'Traffic Iklan Paid' },
      { label: 'Waktu Load Pertama', value: '0.9 detik', benchmark: 'Koneksi 4G Indonesia' }
    ],
    faqs: [
      { q: 'Apakah landing page ini bisa dihubungkan ke domain saya sendiri?', a: 'Tentu saja. Kami dapat menghubungkan landing page ke domain Anda (misal: promo.namabisnis.com) atau diintegrasikan langsung ke platform yang Anda gunakan.' }
    ],
    startingPrice: 'Mulai Rp 2.500.000 / halaman',
    durationEst: '5 - 7 hari kerja'
  },
  {
    id: 'lead-generation',
    slug: 'lead-generation-services',
    title: 'Lead Generation B2B & High-Ticket',
    category: 'conversion-cro',
    categoryLabel: 'Inbound Leads',
    badge: 'Qualified Pipeline',
    shortDesc: 'Sistem akuisisi prospek berdaya beli tinggi untuk bisnis B2B, properti, legalitas, konsultan, dan layanan bernilai jutaan rupiah.',
    fullDesc: 'Prospek B2B membutuhkan pendekatan berbeda dibanding e-commerce retail. Kami merancang funnel edukasi, kuis kualifikasi otomatis (lead qualification form), dan notifikasi seketika ke tim sales via WhatsApp Business API.',
    iconName: 'UserCheck',
    deliverables: [
      { title: 'Multi-Step Qualification Form', desc: 'Formulir pintar yang memfilter lead spam dan memprioritaskan calon klien dengan budget valid.' },
      { title: 'Lead Magnet & Case Study Gated Asset', desc: 'Penyusunan panduan / proposal pengantar yang meningkatkan reputasi profesional Anda.' },
      { title: 'Instant WhatsApp Routing to Sales', desc: 'Begitu lead mengisi data, pesan notifikasi instan langsung masuk ke nomor tim sales terkait.' },
      { title: 'Cost Per Qualified Lead (CPQL) Tracking', desc: 'Optimasi kampanye berfokus pada prospek yang benar-benar siap closing, bukan sekadar klik murah.' }
    ],
    process: [
      { step: '01', title: 'Pemetaan Ideal Customer Profile (ICP)', desc: 'Penetapan profil jabatan pengambil keputusan (Owner, Direktur, Manajer).', duration: 'Hari 1 - 3' },
      { step: '02', title: 'Pembangunan Funnel & Lead Magnet', desc: 'Pembuatan landing page kualifikasi dan aset penarik minat profesional.', duration: 'Hari 4 - 7' },
      { step: '03', title: 'Aktivasi Iklan Google Search & LinkedIn', desc: 'Menargetkan kata kunci solusi spesifik dengan filter wilayah ketat.', duration: 'Hari 8 - 10' },
      { step: '04', title: 'Review Pipeline & Sales Feedback Loop', desc: 'Sinkronisasi mingguan kualitas lead dengan tim sales Anda.', duration: 'Berkelanjutan' }
    ],
    metrics: [
      { label: 'Lead Qualification Rate', value: '74%', benchmark: 'Prospek B2B Valid' },
      { label: 'Penurunan Cost Per Lead', value: '-52%', benchmark: 'Google Search Ads' },
      { label: 'Sales Closing Speed', value: '2x Lebih Cepat', benchmark: 'Warm Inbound Funnel' }
    ],
    faqs: [
      { q: 'Apakah cocok untuk jasa lokal seperti notaris, perizinan usaha, atau kontraktor?', a: 'Sangat cocok. Model lead generation terarah inilah yang paling efektif mendatangkan klien bernilai puluhan juta untuk jasa lokal berkelas.' }
    ],
    startingPrice: 'Mulai Rp 4.000.000 / bln',
    durationEst: 'Setup 7 hari kerja'
  },
  {
    id: 'analytics-tracking',
    slug: 'marketing-analytics-conversion-tracking',
    title: 'Marketing Analytics & Server-Side Tracking',
    category: 'analytics-tech',
    categoryLabel: 'Data & Tracking',
    badge: '100% Attribution Truth',
    shortDesc: 'Setup Google Analytics 4 (GA4), Server-Side Google Tag Manager, Meta CAPI, dan dashboard Looker Studio untuk pelacakan omzet tanpa tebak-tebakan.',
    fullDesc: 'Tanpa data atribusi yang presisi, Anda sedang membakar uang iklan di dalam kegelapan. Kami membangun arsitektur tracking enterprise yang kebal terhadap ad-blocker dan pembatasan cookie pihak ketiga.',
    iconName: 'BarChart2',
    deliverables: [
      { title: 'Server-Side GTM Deployment', desc: 'Hosting container GTM di server Cloud (Cloudflare/GCP) untuk kecepatan web dan akurasi data.' },
      { title: 'Unified DataLayer Schema', desc: 'Standarisasi variabel e-commerce: view_item, add_to_cart, purchase beserta margin laba.' },
      { title: 'Cross-Domain & WhatsApp Event Tracking', desc: 'Pelacakan klik WhatsApp per nomor CS dan konversi pembayaran payment gateway lokal.' },
      { title: 'Automated Looker Studio Dashboard', desc: 'Laporan visual real-time yang memadukan data Google Ads, Meta Ads, TikTok, dan penjualan riil.' }
    ],
    process: [
      { step: '01', title: 'Audit DataLayer & Tag Lama', desc: 'Pembersihan script ganda yang membuat data terhitung dua kali (double counting).', duration: 'Hari 1 - 2' },
      { step: '02', title: 'Setup Server Container', desc: 'Konfigurasi subdomain tracking first-party dan koneksi API.', duration: 'Hari 3 - 4' },
      { step: '03', title: 'Pengujian QA & Debug Mode', desc: 'Simulasi transaksi riil dan verifikasi sinyal event match quality 8.0+.', duration: 'Hari 5 - 6' },
      { step: '04', title: 'Serah Terima Dashboard', desc: 'Pemberian akses dashboard bisnis dengan panduan membaca matriks penting.', duration: 'Hari 7' }
    ],
    metrics: [
      { label: 'Data Recovery Rate', value: '+35%', benchmark: 'Pasca Server-Side CAPI' },
      { label: 'Event Match Quality', value: '9.1 / 10', benchmark: 'Meta Event Manager' },
      { label: 'Waktu Muat Tag', value: '0 ms di Browser', benchmark: 'Offloaded to Server' }
    ],
    faqs: [
      { q: 'Apakah setup server-side membutuhkan biaya hosting server mahal?', a: 'Tidak. Kami menggunakan arsitektur serverless (seperti Cloudflare Workers atau Google Cloud Free Tier) yang gratis atau biayanya di bawah Rp 50.000/bulan untuk sebagian besar bisnis.' }
    ],
    startingPrice: 'Mulai Rp 2.500.000 / one-time',
    durationEst: 'Selesai dalam 5 hari kerja'
  },
  {
    id: 'performance-marketing',
    slug: 'performance-marketing',
    title: 'Performance Marketing Full-Funnel',
    category: 'paid-ads',
    categoryLabel: 'Omnichannel Scale',
    badge: 'End-to-End Growth',
    shortDesc: 'Pengelolaan holistik lintas Google, Meta, TikTok, dan retensi CRM untuk bisnis yang siap melipatgandakan omzet secara agresif.',
    fullDesc: 'Layanan terlengkap bagi pemilik bisnis yang ingin menyerahkan pertumbuhan akuisisi pelanggan kepada tim ahli berdedikasi. Kami memadukan strategi paid media, pengujian kreatif tanpa henti, dan optimalisasi margin keuntungan.',
    iconName: 'Zap',
    deliverables: [
      { title: 'Omnichannel Budget Allocation', desc: 'Distribusi dinamis anggaran ke saluran yang sedang menghasilkan ROAS tertinggi di minggu tersebut.' },
      { title: 'Full Funnel Architecture', desc: 'Sinkronisasi Top-of-Funnel (awareness), Middle-of-Funnel (consideration), dan Bottom-of-Funnel (closing).' },
      { title: 'Dedicated Media Buyer & Copywriter', desc: 'Tim spesialis yang memantau performa kampanye Anda setiap hari kerja.' },
      { title: 'Weekly Strategy & Growth Sync', desc: 'Meeting evaluasi mingguan membahas performa, stok produk, dan strategi promosi berikutnya.' }
    ],
    process: [
      { step: '01', title: 'Diagnostic & Economics Audit', desc: 'Hitung Break-Even ROAS, margin kotor, dan target blended CPA bisnis Anda.', duration: 'Minggu 1' },
      { step: '02', title: 'Infrastruktur & Creative Engine', desc: 'Deploy landing page, tracking server-side, dan bank materi iklan batch pertama.', duration: 'Minggu 2' },
      { step: '03', title: 'Peluncuran Multi-Channel', desc: 'Aktivasi serentak kampanye Google Search, Meta Prospecting, dan TikTok Spark.', duration: 'Minggu 3' },
      { step: '04', title: 'Skalasi Agresif Berbasis Profit', desc: 'Tingkatkan omzet secara terprediksi dengan tetap menjaga laba bersih bisnis.', duration: 'Bulan 2+' }
    ],
    metrics: [
      { label: 'Peningkatan Omzet Bersih', value: '3.2x', benchmark: 'Rata-rata 90 Hari' },
      { label: 'Blended MER (Marketing Efficiency)', value: '5.8x', benchmark: 'Total Revenue / Spend' },
      { label: 'Waktu Respon Tim Agensi', value: '< 15 Menit', benchmark: 'Grup WhatsApp Eksklusif' }
    ],
    faqs: [
      { q: 'Apakah ada kontrak minimal durasi kerja sama?', a: 'Kami menyarankan komitmen awal 3 bulan agar siklus pengujian, penyesuaian algoritma, dan skalasi dapat bekerja maksimal mencapai hasil terbaik.' }
    ],
    startingPrice: 'Mulai Rp 7.500.000 / bln',
    durationEst: 'Program pertumbuhan berkelanjutan'
  },
  {
    id: 'ad-creative-copy',
    slug: 'advertising-creative-ad-copywriting',
    title: 'Ad Creative & Direct-Response Copywriting',
    category: 'creative-copy',
    categoryLabel: 'Creative Lab',
    badge: 'High CTR & Engagement',
    shortDesc: 'Materi visual dan naskah iklan berbasis psikologi keputusan yang menghentikan scroll, memicu rasa ingin tahu, dan mendorong tindakan beli.',
    fullDesc: 'Kreatif iklan adalah faktor 70% keberhasilan kampanye modern. Kami menyusun headline dengan teknik open-loop, penawaran hook kontroversial yang aman dari kebijakan iklan, dan visual yang beresonansi kuat dengan karakter pasar lokal Indonesia.',
    iconName: 'PenTool',
    deliverables: [
      { title: 'Direct-Response Headline Bank', desc: 'Kumpulan 20+ variasi judul dan teks iklan pendek/panjang teruji untuk testing.' },
      { title: 'Storyboarding & Video Hook Direction', desc: 'Panduan adegan 0-3 detik untuk pembuat konten agar penonton tidak skip.' },
      { title: 'Static Feed & Carousel Assets', desc: 'Desain visual high-converting dengan perbandingan fitur, bukti nyata, dan penawaran berbatas waktu.' },
      { title: 'Compliance & Policy Assurance', desc: 'Penulisan yang patuh terhadap Pedoman Iklan Meta dan Google agar akun terhindar dari suspend.' }
    ],
    process: [
      { step: '01', title: 'Customer Sentiment Mining', desc: 'Riset komentar media sosial dan ulasan kompetitor untuk menemukan kata-kata asli calon pembeli.', duration: 'Hari 1 - 2' },
      { step: '02', title: 'Penyusunan Angle Persuasi', desc: 'Perumusan 4 sudut penawaran: Logika Finansial, Status Sosial, Solusi Cepat, dan Hindari Kerugian.', duration: 'Hari 3 - 4' },
      { step: '03', title: 'Desain & Produksi Aset', desc: 'Pembuatan variasi format 1:1, 9:16 vertikal, dan 16:9.', duration: 'Hari 5 - 7' },
      { step: '04', title: 'Pengujian di Akun Iklan', desc: 'Evaluasi metrik Outbound CTR dan Cost Per Add to Cart.', duration: 'Berkelanjutan' }
    ],
    metrics: [
      { label: 'Outbound CTR', value: '3.4% - 5.8%', benchmark: 'Di atas rata-rata industri' },
      { label: 'Penurunan Cost Per Click (CPC)', value: '-35%', benchmark: 'Kreatif Relevansi Tinggi' },
      { label: 'Kepuasan Naskah & Aset', value: '99%', benchmark: 'Revisi Cepat' }
    ],
    faqs: [
      { q: 'Apakah FUTech menyediakan talent model untuk video iklan?', a: 'Kami bekerja sama dengan jaringan kreator UGC lokal di berbagai kota besar dan daerah yang siap memproduksi video autentik sesuai naskah kami.' }
    ],
    startingPrice: 'Mulai Rp 2.000.000 / paket',
    durationEst: 'Selesai dalam 5 hari kerja'
  },
  {
    id: 'social-media-growth',
    slug: 'social-media-marketing',
    title: 'Social Media & Brand Organic Growth',
    category: 'organic-seo',
    categoryLabel: 'Content & Brand',
    badge: 'Trust & Community',
    shortDesc: 'Bangun kepercayaan mendalam dan interaksi organik melalui konten Reels, Carousel edukasi, dan manajemen akun profesional.',
    fullDesc: 'Sebelum calon pelanggan mengklik checkout atau mentransfer pembayaran bernilai besar, mereka akan memeriksa akun media sosial Anda. Kami memastikan profil bisnis Anda memancarkan otoritas, profesionalisme, dan ulasan positif yang meyakinkan.',
    iconName: 'Share2',
    deliverables: [
      { title: 'Strategic Content Pillars', desc: 'Perencanaan proporsi konten: 40% Edukasi Masalah, 30% Studi Kasus & Bukti, 20% Hiburan/Tren, 10% Penjualan Langsung.' },
      { title: 'Monthly Editorial Calendar', desc: 'Jadwal publikasi rapi lengkap dengan caption persuasif, hashtag relevan, dan call-to-action.' },
      { title: 'Professional Graphic & Video Editing', desc: 'Desain visual elegan sesuai panduan warna brand dan video Reels format vertikal.' },
      { title: 'Community & DM Protocol', desc: 'Panduan membalas pesan masuk dan komentar agar cepat terkonversi menjadi prospek di WhatsApp.' }
    ],
    process: [
      { step: '01', title: 'Brand Tone & Visual Identity', desc: 'Penetapan warna, tipografi, dan gaya bahasa komunikasi.', duration: 'Hari 1 - 3' },
      { step: '02', title: 'Penyusunan Konten 30 Hari', desc: 'Pembuatan naskah dan desain konten 1 bulan ke depan untuk approval.', duration: 'Hari 4 - 8' },
      { step: '03', title: 'Publikasi Terjadwal', desc: 'Posting otomatis pada jam tayang dengan tingkat interaksi tertinggi.', duration: 'Hari 9 - 30' },
      { step: '04', title: 'Laporan Interaksi Bulanan', desc: 'Analisis pertumbuhan followers riil, reach, dan engagement rate.', duration: 'Bulanan' }
    ],
    metrics: [
      { label: 'Rata-rata Pertumbuhan Reach', value: '+210%', benchmark: 'Organik Instagram & TikTok' },
      { label: 'Engagement Rate', value: '6.4%', benchmark: 'Akun Bisnis Terverifikasi' },
      { label: 'Inbound DM Inquiries', value: '3x Lipat', benchmark: 'Pesan Calon Pembeli' }
    ],
    faqs: [
      { q: 'Apakah followers yang didapatkan adalah akun asli atau bot?', a: '100% orang asli Indonesia yang tertarik dengan konten Anda. Kami pantang menggunakan bot atau suntik followers yang merusak reputasi akun.' }
    ],
    startingPrice: 'Mulai Rp 2.800.000 / bln',
    durationEst: 'Retainer bulanan'
  },
  {
    id: 'crm-automation',
    slug: 'marketing-automation-crm-integration',
    title: 'Marketing Automation & WhatsApp CRM',
    category: 'analytics-tech',
    categoryLabel: 'Retention & Sales',
    badge: 'Automated Follow-up',
    shortDesc: 'Otomatisasi alur follow-up prospek, pengingat keranjang belanja, dan broadcast penawaran tertarget via WhatsApp Business API.',
    fullDesc: '90% keputusan beli di Indonesia terjadi di ruang obrolan WhatsApp. Jangan biarkan lead dingin karena respons lambat. Kami membangun sistem perpesanan otomatis yang menyapa calon pelanggan dalam 5 detik, mengirim pengingat follow-up berkala, dan mencatat status deal secara rapi.',
    iconName: 'MessageSquare',
    deliverables: [
      { title: 'WhatsApp Business API Integration', desc: 'Setup centang hijau resmi (Verified Badge) dan integrasi webhook ke website.' },
      { title: 'Automated Drip Follow-Up Sequence', desc: 'Rangkaian 3-5 pesan pengingat persuasif terjadwal untuk prospek yang belum sempat transfer.' },
      { title: 'Lead Pipeline Kanban Board', desc: 'Papan status prospek: Kontak Masuk -> Follow Up 1 -> Negosiasi -> Closing -> Repeat Order.' },
      { title: 'Cart Recovery via WhatsApp', desc: 'Pengingat otomatis bagi pengunjung web yang meninggalkan data di formulir pemesanan.' }
    ],
    process: [
      { step: '01', title: 'Audit Flow Chat & Masalah CS', desc: 'Analisis alasan utama calon pembeli batal bayar (abandoned checkout).', duration: 'Hari 1 - 2' },
      { step: '02', title: 'Setup Template Pesan Terverifikasi', desc: 'Penyusunan naskah broadcast dan template pesan notifikasi resmi.', duration: 'Hari 3 - 4' },
      { step: '03', title: 'Integrasi Webhook & CRM', desc: 'Koneksi data formulir landing page langsung ke nomor CS yang aktif.', duration: 'Hari 5 - 6' },
      { step: '04', title: 'Training Tim Sales / CS', desc: 'Pelatihan singkat tim CS Anda agar mampu menutup closing 2x lebih banyak.', duration: 'Hari 7' }
    ],
    metrics: [
      { label: 'Response Time Prospek', value: '< 10 Detik', benchmark: 'Automated Greeting' },
      { label: 'Tingkat Recovery Transaksi', value: '+28%', benchmark: 'Keranjang Terbengkalai' },
      { label: 'Open Rate Pesan', value: '94.2%', benchmark: 'WhatsApp vs 18% Email' }
    ],
    faqs: [
      { q: 'Apakah aman dari risiko blokir WhatsApp?', a: 'Sangat aman karena kami mengutamakan WhatsApp Business Platform API resmi yang telah disetujui Meta dengan nomor bisnis terverifikasi.' }
    ],
    startingPrice: 'Mulai Rp 2.500.000 / setup',
    durationEst: 'Selesai dalam 7 hari kerja'
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'ecommerce',
    slug: 'ecommerce-retail',
    title: 'E-Commerce & Retail D2C Indonesia',
    badge: 'Scale to 8-Figure Monthly',
    desc: 'Solusi akuisisi pelanggan agresif untuk brand fashion, kecantikan, herbal, elektronik, dan produk konsumen yang ingin mendominasi pasar online nasional.',
    painPoints: [
      'ROAS iklan Meta dan TikTok fluktuatif dan sering drop di akhir bulan',
      'Tingkat retur (COD) tinggi dan margin tergerus biaya diskon marketplace',
      'Kelelahan materi kreatif video iklan dalam waktu kurang dari 2 minggu'
    ],
    growthPlaybook: [
      'Pembangunan funnel website mandiri dengan penawaran bundle eksklusif',
      'Testing kreatif sandbox 5 video UGC baru per minggu',
      'Integrasi Meta CAPI + Google Shopping PMax untuk akuisisi pembeli berulang'
    ],
    averageRoas: '4.8x - 6.2x',
    caseStudyRef: 'b2b-fashion-scale'
  },
  {
    id: 'b2b',
    slug: 'b2b-professional-services',
    title: 'B2B & Layanan Profesional',
    badge: 'High-Ticket Client Acquisition',
    desc: 'Akuisisi klien bernilai tinggi untuk konsultan manajemen, kantor hukum/notaris, vendor pabrik, logistik ekspor-impor, dan penyedia jasa korporat.',
    painPoints: [
      'Siklus negosiasi lama dan sulit menyaring lead kaleng-kaleng yang tidak punya anggaran',
      'Bergantung hanya pada referensi mulut ke mulut (word of mouth) yang tidak pasti',
      'Iklan media sosial biasa tidak menjangkau pengambil keputusan level direktur'
    ],
    growthPlaybook: [
      'Kampanye Google Search berbasis niat spesifik (commercial intent keywords)',
      'Landing page kualifikasi multi-step dengan filter anggaran dan NPWP',
      'Lead nurturing via studi kasus B2B dan booking jadwal konsultasi terintegrasi'
    ],
    averageRoas: '9.4x (LTV to CAC)',
    caseStudyRef: 'b2b-distribution-legal'
  },
  {
    id: 'saas-tech',
    slug: 'saas-technology',
    title: 'SaaS, Startup & Teknologi Digital',
    badge: 'Product-Led & Demand Gen',
    desc: 'Percepat laju pendaftaran demo software, free trial, dan adopsi produk digital dengan funnel akuisisi berbasis data analitik presisi.',
    painPoints: [
      'Biaya per registrasi (CAC) terus membengkak sementara churn rate tinggi',
      'Kesulitan mengukur atribusi konversi dari klik pertama hingga upgrade berbayar',
      'Edukasi produk yang rumit membuat calon user enggan mencoba'
    ],
    growthPlaybook: [
      'Optimasi kampanye Search & YouTube Ads fokus pada use-case solusi masalah',
      'Setup tracking Cohort dan atribusi multi-touch terintegrasi GA4 & BigQuery',
      'CRO landing page memangkas form isian menjadi email sekali klik'
    ],
    averageRoas: '3.6x Payback',
    caseStudyRef: 'saas-inbound-scale'
  },
  {
    id: 'local-services',
    slug: 'local-service-businesses',
    title: 'Bisnis Jasa & Layanan Lokal',
    badge: 'Dominate Your Region',
    desc: 'Dominasi pencarian kota Anda untuk klinik estetika, dokter gigi, kantor notaris & perizinan, kontraktor bangunan, agen properti, bengkel, hingga kuliner kafe/restoran.',
    painPoints: [
      'Kalah bersaing dengan kompetitor baru yang agresif beriklan di Google Maps dan Instagram',
      'Banyak calon pasien / pelanggan bertanya di WhatsApp tapi tidak pernah datang ke lokasi',
      'Budget iklan terbuang ke pengguna di luar wilayah jangkauan layanan'
    ],
    growthPlaybook: [
      'Radius geotargeting ketat 5-15 km sekitar lokasi fisik Anda',
      'Optimasi Google Profil Bisnis (Google Maps) dengan puluhan ulasan bintang 5 lokal',
      'Tombol reservasi langsung terhubung ke nomor customer service klinik/kantor'
    ],
    averageRoas: '5.2x ROI Lokal',
    caseStudyRef: 'klinik-lokal-boost'
  },
  {
    id: 'startups',
    slug: 'startups-growing-businesses',
    title: 'UMKM & Bisnis Bertumbuh',
    badge: 'Lean Growth Framework',
    desc: 'Pendampingan pemasaran digital bagi bisnis bertumbuh yang membutuhkan efisiensi modal maksimal tanpa biaya eksperimen yang sia-sia.',
    painPoints: [
      'Modal iklan terbatas dan takut rugi karena pernah coba pasang iklan sendiri tapi boncos',
      'Tidak punya tim desainer, copywriter, dan media buyer profesional sendiri',
      'Belum memiliki sistem pencatatan omzet dan analisis performa yang rapi'
    ],
    growthPlaybook: [
      'Mulai dari 1 saluran berkinerja tertinggi (misal Google Search atau Meta Ads)',
      'Paket lengkap didukung tim agensi: landing page, naskah, desain, dan manajemen',
      'Fokus pada Break-Even ROAS dan pertumbuhan laba bersih riil sejak bulan pertama'
    ],
    averageRoas: '4.1x Rata-rata',
    caseStudyRef: 'b2b-fashion-scale'
  },
  {
    id: 'market-expansion',
    slug: 'international-market-entry',
    title: 'Ekspansi Pasar Nasional & Ekspor',
    badge: 'Cross-Regional Scaling',
    desc: 'Bawa produk unggulan daerah Anda (seperti kopi, tembakau, kerajinan, fashion lokal) menembus pasar nasional di seluruh Indonesia hingga pasar ekspor Asia Tenggara.',
    painPoints: [
      'Pasar lokal daerah sudah jenuh dan pertumbuhan penjualan melandai',
      'Kurang memahami preferensi konsumen dan tren belanja di kota-kota metropolitan',
      'Tantangan kepercayaan pembeli jarak jauh terhadap brand luar kota'
    ],
    growthPlaybook: [
      'Kampanye branding digital nasional mengangkat keaslian dan mutu produk lokal',
      'Social proof masif dari testimoni pelanggan dan sertifikasi resmi (Halal, BPOM, NIB)',
      'Kerja sama ekspedisi dan sistem pembayaran aman terverifikasi'
    ],
    averageRoas: '4.5x Skala Nasional',
    caseStudyRef: 'b2b-distribution-legal'
  }
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'fashion-scale',
    slug: 'brand-fashion-d2c-scale',
    title: 'Skalasi Omzet Brand Fashion D2C Nasional dari 1.8x Menjadi 5.4x ROAS',
    client: 'Nusa Apparel Co.',
    clientType: 'Brand Fashion & Streetwear Lokal',
    location: 'Bandung & Pasar Seluruh Indonesia',
    industry: 'E-Commerce & Retail Fashion',
    badge: '+420% Penjualan',
    challenge: 'Klien mengalami stagnasi penjualan di marketplace karena perang harga ekstrem. Iklan Meta yang dijalankan sendiri hanya menghasilkan ROAS 1.8x dengan frekuensi kelelahan materi iklan setiap 10 hari.',
    strategy: 'Membangun ekosistem website mandiri dengan promo bundling eksklusif, migrasi ke Meta Conversions API (CAPI), dan menjalankan Creative Testing Sandbox dengan 4 format video UGC vertikal setiap minggu.',
    executionSteps: [
      'Implementasi CAPI server-side untuk memulihkan 38% data pembelian yang hilang dari browser iOS.',
      'Restrukturisasi kampanye Meta menjadi Advantage+ Shopping Campaign dengan target ROAS 4.0x.',
      'Peluncuran 12 variasi video hook unboxing dan styling outfit oleh kreator mikro.',
      'Setup automasi WhatsApp Cart Recovery yang memulihkan 31% calon pembeli yang meninggalkan keranjang.'
    ],
    metrics: {
      roas: '5.4x (Sebelumnya 1.8x)',
      revenueGrowth: '+420% dalam 90 Hari',
      cpaReduction: '-46% Biaya Per Akuisisi',
      leadsOrSales: '8.450+ Transaksi Berhasil'
    },
    testimonial: {
      quote: 'FUTech merevolusi cara kami berjualan. Kami tidak lagi bergantung pada diskon marketplace, omzet toko online kami melonjak 4 kali lipat dengan laba bersih yang jauh lebih tebal.',
      author: 'Aditya Pratama',
      role: 'Founder & CEO Nusa Apparel'
    }
  },
  {
    id: 'b2b-legal',
    slug: 'perusahaan-b2b-distribusi-legalitas',
    title: 'Penurunan 72% Biaya Per Prospek untuk Jasa B2B & Legalitas Bisnis',
    client: 'Mitra Perizinan & Konsultan Bisnis Mandiri',
    clientType: 'Penyedia Jasa Legalitas, OSS, Pajak & Notaris',
    location: 'Semarang, Temanggung, & Jawa Tengah',
    industry: 'B2B & Professional Services',
    badge: '310+ Leads B2B / Bln',
    challenge: 'Klien kesulitan mendapatkan klien baru bernilai besar (PT, CV, Sertifikasi Halal, PBG) secara online. Iklan sebelumnya mendapatkan banyak klik tapi 80% adalah pencari informasi gratis tanpa daya bayar.',
    strategy: 'Membangun landing page berkecepatan tinggi dengan Multi-Step Qualification Form yang menanyakan modal usaha, jenis badan hukum, dan kelengkapan dokumen. Menjalankan Google Search Ads dengan kata kunci komersial presisi tinggi.',
    executionSteps: [
      'Penyusunan 120 kata kunci negatif ketat untuk menyaring pencari jasa gratisan / info skripsi.',
      'Pemasangan landing page zero-distraction dengan skor Google Lighthouse 98/100.',
      'Integrasi notifikasi seketika ke WhatsApp Business tim konsultan senior.',
      'Remarketing Google Display berfokus pada ulasan testimoni klien ternama.'
    ],
    metrics: {
      roas: '8.6x LTV to CAC Ratio',
      revenueGrowth: '+290% Nilai Kontrak Baru',
      cpaReduction: '-72% Biaya Per Lead Valid',
      leadsOrSales: '310+ Prospek B2B Kualifikasi / Bln'
    },
    testimonial: {
      quote: 'Kualitas prospek yang masuk benar-benar berbeda. Mereka adalah direktur dan pemilik usaha yang siap tanda tangan kontrak, bukan penanya harga yang hilang setelah dikabari.',
      author: 'Bambang Sudiro, S.H.',
      role: 'Managing Partner'
    }
  },
  {
    id: 'klinik-lokal',
    slug: 'klinik-kesehatan-estetika-multicabang',
    title: 'Lonjakan 280% Reservasi Pasien Baru untuk Jaringan Klinik Lokal',
    client: 'Dermacare Aesthetic & Dental Clinic',
    clientType: 'Jaringan Klinik Estetika & Gigi',
    location: 'Yogyakarta & Magelang',
    industry: 'Layanan Kesehatan & Klinik Lokal',
    badge: '+280% Pasien Baru',
    challenge: 'Cabang baru klinik di wilayah suburban sepi kunjungan karena masyarakat belum mengenal dokter dan fasilitasnya. Iklan spanduk jalanan tidak efektif dan memakan biaya besar.',
    strategy: 'Menjalankan kampanye lokal radius 10 km di Instagram Reels dan TikTok Ads mengangkat video edukasi dokter, dipadukan dengan Google Search Ads untuk kata kunci "klinik gigi terdekat" dan "perawatan jerawat terbaik".',
    executionSteps: [
      'Penerbitan 10 video tanya-jawab langsung bersama dokter spesialis klinik.',
      'Penawaran voucher konsultasi pertama via tombol interaktif WhatsApp.',
      'Pengelolaan profil Google Maps hingga meraih 450+ ulasan bintang 5.',
      'Sistem booking terintegrasi pengingat H-1 jadwal konsultasi otomatis.'
    ],
    metrics: {
      roas: '6.1x Return on Spend',
      revenueGrowth: '+280% Reservasi Pasien Baru',
      cpaReduction: '-39% Biaya Akuisisi Pasien',
      leadsOrSales: '640+ Reservasi Per Bulan'
    },
    testimonial: {
      quote: 'Jadwal dokter kami sekarang selalu penuh setiap akhir pekan. Strategi radius lokal dari tim FUTech sangat jitu menyasar pasien berkualitas di sekitar klinik.',
      author: 'drg. Maya Anggraini',
      role: 'Operational Director'
    }
  },
  {
    id: 'saas-software',
    slug: 'software-saas-manajemen-bisnis',
    title: 'Akselerasi 340 Demo Software B2B Per Bulan dengan Biaya Akuisisi Terendah',
    client: 'KasirKu Cloud System',
    clientType: 'Software POS & Manajemen Toko Multicabang',
    location: 'Jakarta & Seluruh Indonesia',
    industry: 'SaaS & Teknologi',
    badge: '340+ Demo Booking / Bln',
    challenge: 'Tingkat konversi pengunjung website menjadi pendaftar demo software sangat rendah (hanya 0.8%). Kampanye Google Ads PMax banyak menghabiskan anggaran pada penempatan game anak yang tidak relevan.',
    strategy: 'Membersihkan penempatan iklan PMax dengan brand safety exclusions, merancang ulang landing page perbandingan fitur vs pesaing, dan menyusun kampanye Search kata kunci kompetitor.',
    executionSteps: [
      'Audit log penempatan Google Ads dan memblokir 4.000+ domain aplikasi/game sampah.',
      'Penyusunan landing page interaktif dengan kalkulator penghematan biaya operasional.',
      'Pemasangan tracking lifecycle event di GA4 (Signup -> Demo Attended -> Paid License).',
      'Email & WhatsApp follow-up otomatis bagi user yang belum menyelesaikan registrasi.'
    ],
    metrics: {
      roas: '4.2x Customer LTV Ratio',
      revenueGrowth: '+310% Recurring Revenue (MRR)',
      cpaReduction: '-54% Biaya Per Demo Valid',
      leadsOrSales: '340+ Demo Terverifikasi / Bln'
    },
    testimonial: {
      quote: 'FUTech memahami seluk-beluk metrik SaaS. Mereka tidak cuma peduli lead form, tapi sampai demo dihadiri dan user beralih ke langganan berbayar.',
      author: 'Reza Fahlevi',
      role: 'Head of Growth KasirKu'
    }
  }
];

export const ARTICLES: ArticleItem[] = [
  {
    id: 'art-pmax',
    slug: 'demystifying-google-performance-max',
    title: 'Panduan Lengkap Menguasai Google Performance Max (PMax) untuk Bisnis Indonesia 2026',
    category: 'Google Ads & Search',
    categorySlug: 'google-ads',
    excerpt: 'Kupas tuntas arsitektur PMax: cara mengisolasi asset groups, menolak placement game anak yang boros biaya, dan memberi sinyal first-party data yang tepat kepada machine learning Google.',
    readTime: '7 menit baca',
    publishedDate: '12 Oktober 2026',
    author: {
      name: 'Taufiq Aminudin',
      role: 'Principal Performance Strategist',
      avatar: 'TA'
    },
    tags: ['Google Ads', 'Performance Max', 'PMax', 'Smart Bidding', 'ROAS'],
    tableOfContents: [
      'Mengapa PMax Sering Menghabiskan Anggaran Tanpa Hasil?',
      'Langkah 1: Mengisolasi Asset Groups Berdasarkan Karakter Produk',
      'Langkah 2: Menolak Penempatan Aplikasi Mobile & Game Sampah',
      'Langkah 3: Memberikan Sinyal Audiens First-Party yang Kuat',
      'Langkah 4: Kalibrasi Target tROAS Bertahap',
      'Kesimpulan & Checklist Eksekusi'
    ],
    sections: [
      {
        heading: 'Mengapa PMax Sering Menghabiskan Anggaran Tanpa Hasil?',
        paragraphs: [
          'Google Performance Max (PMax) adalah senjata paling ampuh sekaligus paling berbahaya bagi pemilik bisnis yang belum memahaminya. Ketika Anda mengaktifkan PMax dengan pengaturan default, algoritma Google akan mencari jalan termudah menghabiskan budget harian Anda, yang sering kali berarti menampilkan iklan di dalam game mobile gratisan atau video YouTube anak-anak.',
          'Di pasar Indonesia, kebocoran budget ini mencapai 40% dari total belanja iklan jika penempatan tidak diaudit dan dibatasi secara ketat sejak hari pertama.'
        ],
        bulletPoints: [
          'Ketiadaan kata kunci negatif level akun menyebabkan PMax merebut traffic brand pencarian Anda sendiri.',
          'Aset teks dan gambar yang dicampur sembarangan membuat pesan promosi tidak konsisten.',
          'Pencatatan konversi yang belum terfilter melacak klik tombol biasa sebagai transaksi riil.'
        ],
        callout: 'Prinsip Emas: Jangan biarkan algoritma menebak target audiens Anda. Berikan sinyal data pembeli terbaik Anda sebagai pedoman awal.'
      },
      {
        heading: 'Langkah 1: Mengisolasi Asset Groups Berdasarkan Karakter Produk',
        paragraphs: [
          'Banyak pengiklan membuat satu Asset Group tunggal berisi semua produk mereka. Ini adalah kesalahan fatal. Buatlah Asset Group terpisah untuk kategori produk terlaris (Hero Products), kategori dengan margin tinggi, dan kategori clearance.',
          'Dengan memisahkan asset group, Google dapat memadukan headline, gambar, dan video yang 100% relevan dengan niat pencari.'
        ]
      },
      {
        heading: 'Langkah 2: Menolak Penempatan Aplikasi Mobile & Game Sampah',
        paragraphs: [
          'Salah satu penyebab CPA melonjak di Indonesia adalah klik tidak sengaja (accidental clicks) dari anak-anak yang sedang bermain game mobile. Anda wajib menambahkan Account-Level Placement Exclusion list untuk memblokir penempatan di kategori aplikasi game.',
          'Langkah sederhana ini terbukti memangkas biaya per konversi sebesar 25% hingga 40% dalam waktu kurang dari 14 hari.'
        ]
      },
      {
        heading: 'Langkah 3: Memberikan Sinyal Audiens First-Party yang Kuat',
        paragraphs: [
          'Unggah daftar pelanggan lama (Customer Match List) yang telah di-hash dengan aman ke Google Ads. Berikan Google data siapa saja yang pernah bertransaksi di bisnis Anda dalam 180 hari terakhir.',
          'Algoritma Google kemudian akan mencari jutaan pengguna lain di Indonesia yang memiliki profil perilaku dan minat serupa (Lookalike/Optimized Audience).'
        ]
      }
    ]
  },
  {
    id: 'art-capi',
    slug: 'meta-ads-server-side-conversions-api',
    title: 'Solusi Akun Iklan Kena Batasan & Implementasi Meta Conversions API (CAPI) Server-Side',
    category: 'Meta & Social Ads',
    categorySlug: 'meta-ads',
    excerpt: 'Jangan biarkan 35% data penjualan Anda hilang akibat browser cookie blocks. Pelajari cara mengimplementasikan Meta CAPI server-side gateway untuk menstabilkan performa iklan Facebook & IG.',
    readTime: '9 menit baca',
    publishedDate: '08 Oktober 2026',
    author: {
      name: 'Rian Hidayat',
      role: 'Lead Tracking Engineer',
      avatar: 'RH'
    },
    tags: ['Meta Ads', 'Conversions API', 'CAPI', 'Facebook Ads', 'Server-Side GTM'],
    tableOfContents: [
      'Masalah Nyata di Balik Penurunan ROAS Meta Ads',
      'Apa Perbedaan Browser Pixel vs Server-Side CAPI?',
      'Arsitektur Gateway CAPI Tanpa Biaya Server Mahal',
      'Pentingnya Parameter Deduplikasi (Event ID)',
      'Meningkatkan Event Match Quality ke Skor 8.5+',
      'Panduan Verifikasi Domain & Aggregated Event'
    ],
    sections: [
      {
        heading: 'Masalah Nyata di Balik Penurunan ROAS Meta Ads',
        paragraphs: [
          'Banyak pebisnis di Indonesia mengeluhkan: "Dulu iklan Facebook saya untung besar, kenapa 2 tahun terakhir boncos terus?" Jawabannya bukan karena peminat produk Anda hilang, melainkan karena browser modern (Safari iOS, Chrome Privacy Sandbox, aplikasi Ad-Blocker) memblokir pengiriman cookie pixel dari browser.',
          'Akibatnya, sistem machine learning Meta menjadi "buta". Meta tidak tahu bahwa seseorang telah membeli produk Anda, sehingga algoritma terus menampilkan iklan ke audiens yang salah.'
        ]
      },
      {
        heading: 'Apa Perbedaan Browser Pixel vs Server-Side CAPI?',
        paragraphs: [
          'Browser Pixel bekerja di sisi pengguna. Jika pengguna menggunakan ad-blocker atau koneksi internet tidak stabil, sinyal konversi tidak akan pernah sampai ke Meta.',
          'Sebaliknya, Meta Conversions API (CAPI) mengirimkan data transaksi langsung dari server website Anda ke server Meta melalui koneksi API aman. Data tidak bisa diblokir oleh browser atau ekstensi ad-blocker.'
        ],
        callout: 'Kombinasi Terbaik: Jalankan Browser Pixel dan CAPI secara bersamaan (Hybrid Mode) dengan Event ID deduplikasi agar tidak ada data yang terhitung dobel.'
      }
    ]
  },
  {
    id: 'art-tech-seo',
    slug: 'modern-technical-seo-architecture',
    title: 'Modern Technical SEO Architecture: Kuasai Halaman 1 Google Tanpa Backlink Spam',
    category: 'SEO & Otoritas Organik',
    categorySlug: 'seo',
    excerpt: 'Strategi membangun website dengan skor Core Web Vitals 95+, schema markup semantik JSON-LD, dan topical authority siloing yang aman dari penalti Google.',
    readTime: '8 menit baca',
    publishedDate: '01 Oktober 2026',
    author: {
      name: 'Taufiq Aminudin',
      role: 'Principal Performance Strategist',
      avatar: 'TA'
    },
    tags: ['Technical SEO', 'Core Web Vitals', 'Schema Markup', 'Semantic Search', 'Google Search'],
    tableOfContents: [
      'Era Baru Google: Dari Kata Kunci Menuju Entitas Semantik',
      'Pilar 1: Arsitektur Silo Konten & Internal Linking',
      'Pilar 2: Optimasi Core Web Vitals (LCP, INP, CLS)',
      'Pilar 3: Implementasi Schema.org JSON-LD Terstruktur',
      'Pilar 4: Efisiensi Crawl Budget untuk Bot Mesin Pencari'
    ],
    sections: [
      {
        heading: 'Era Baru Google: Dari Kata Kunci Menuju Entitas Semantik',
        paragraphs: [
          'Google tidak lagi memandang halaman web sebagai kumpulan kata kunci yang diulang-ulang. Algoritma modern Google menggunakan Knowledge Graph dan Semantic Search untuk memahami topik bisnis Anda secara utuh.',
          'Jika Anda ingin halaman layanan Anda menduduki peringkat teratas di kota target Anda, Anda harus membuktikan bahwa situs Anda adalah otoritas terlengkap atas topik tersebut.'
        ]
      }
    ]
  },
  {
    id: 'art-b2b-economics',
    slug: 'b2b-lead-generation-economics',
    title: 'Economics of B2B Lead Generation: Menghitung CAC, LTV, dan Payback Period di Indonesia',
    category: 'B2B & Strategi Pertumbuhan',
    categorySlug: 'b2b',
    excerpt: 'Cara menghitung biaya akuisisi pelanggan bisnis (CAC) vs nilai seumur hidup (LTV) agar kampanye lead generation Anda menghasilkan keuntungan terukur bagi perusahaan.',
    readTime: '6 menit baca',
    publishedDate: '24 September 2026',
    author: {
      name: 'Aditya Pratama',
      role: 'B2B Growth Advisor',
      avatar: 'AP'
    },
    tags: ['B2B Marketing', 'Lead Gen', 'CAC', 'LTV', 'Unit Economics'],
    tableOfContents: [
      'Mengapa Banyak Kampanye B2B Terlihat Boncos Padahal Untung?',
      'Rumus Menghitung Rasio LTV to CAC yang Sehat',
      'Membedakan MQL (Marketing Qualified Lead) vs SQL (Sales Qualified Lead)',
      'Mempercepat Siklus Closing dengan WhatsApp Sales Funnel'
    ],
    sections: [
      {
        heading: 'Mengapa Banyak Kampanye B2B Terlihat Boncos Padahal Untung?',
        paragraphs: [
          'Dalam bisnis B2B atau layanan jasa bernilai tinggi (seperti pembuatan PT, notaris perizinan, atau software), Anda tidak bisa menilai efektivitas iklan dari transaksi hari itu juga.',
          'Jika Anda mengeluarkan Rp 1.500.000 untuk mendapatkan satu klien B2B yang membayar kontrak senilai Rp 25.000.000, ROI Anda adalah 1.500%+. Memahami ekonomi unit ini adalah kunci keberanian menaikkan anggaran iklan.'
        ]
      }
    ]
  },
  {
    id: 'art-cro-friction',
    slug: 'conversion-rate-optimization-friction-points',
    title: '7 Kebocoran Konversi (Friction Points) pada Landing Page Bisnis & Cara Memperbaikinya',
    category: 'Konversi & CRO',
    categorySlug: 'cro',
    excerpt: 'Bedah 7 faktor psikologis yang membuat calon pembeli menutup tab website Anda dalam 4 detik pertama dan cara memperbaikinya untuk melipatgandakan omzet.',
    readTime: '7 menit baca',
    publishedDate: '15 September 2026',
    author: {
      name: 'Siti Rahmawati',
      role: 'Lead UX & CRO Specialist',
      avatar: 'SR'
    },
    tags: ['CRO', 'Landing Page', 'Copywriting', 'Conversion Rate', 'A/B Testing'],
    tableOfContents: [
      '4 Detik Penentu: Apa yang Terjadi di Pikiran Pengunjung?',
      'Kebocoran 1: Judul Hero yang Mengambang Tanpa Manfaat Spesifik',
      'Kebocoran 2: Tidak Ada Penjelasan Apa yang Terjadi Setelah Klik Tombol',
      'Kebocoran 3: Form Isian yang Terlalu Panjang di Layar HP',
      'Kebocoran 4: Menu Navigasi Berlebihan yang Mengalihkan Perhatian',
      'Kebocoran 5: Waktu Muat Halaman Lebih dari 2.5 Detik',
      'Kebocoran 6: Tidak Ada Jawaban atas Keraguan Calon Pembeli',
      'Kebocoran 7: Alur Kerja yang Tidak Transparan'
    ],
    sections: [
      {
        heading: '4 Detik Penentu: Apa yang Terjadi di Pikiran Pengunjung?',
        paragraphs: [
          'Ketika calon pelanggan datang dari iklan ke landing page Anda, otak bawah sadar mereka secara instan menanyakan 3 hal dalam 4 detik: "Apa ini?", "Apakah ini cocok untuk orang seperti saya?", dan "Apa untungnya jika saya klik tombol ini?"',
          'Jika halaman Anda gagal menjawab ketiganya dalam 4 detik pertama, mereka akan menekan tombol kembali dan Anda kehilangan uang iklan.'
        ]
      }
    ]
  },
  {
    id: 'art-attribution',
    slug: 'multi-touch-attribution-in-privacy-era',
    title: 'Multi-Touch Attribution & Setup GA4 Akurat Pasca Regulasi Privasi iOS',
    category: 'Analitik & Data',
    categorySlug: 'analytics',
    excerpt: 'Pelajari mengapa laporan iklan Meta dan Google selalu berbeda jauh dan bagaimana memadukannya ke dalam model atribusi blended yang realistis.',
    readTime: '8 menit baca',
    publishedDate: '02 September 2026',
    author: {
      name: 'Rian Hidayat',
      role: 'Lead Tracking Engineer',
      avatar: 'RH'
    },
    tags: ['GA4', 'Attribution Modeling', 'Analytics', 'Data Driven', 'Tracking'],
    tableOfContents: [
      'Perang Klaim Atribusi: Mengapa Meta Mengaku 50 Penjualan Tapi Google Klaim 40?',
      'Kelemahan Model Last-Click Attribution Tradisional',
      'Menerapkan Model Data-Driven Attribution di GA4',
      'Mengukur Blended MER (Marketing Efficiency Ratio) sebagai Kompas Utama'
    ],
    sections: [
      {
        heading: 'Perang Klaim Atribusi: Mengapa Meta Mengaku 50 Penjualan Tapi Google Klaim 40?',
        paragraphs: [
          'Pernahkah Anda melihat dashboard Meta melaporkan 50 penjualan, Google Ads mengklaim 40 penjualan, tapi uang yang masuk ke rekening toko Anda hanya setara 60 penjualan? Ini terjadi karena kedua platform sama-sama mengklaim kredit atas pembeli yang sama.',
          'Dengan memahami multi-touch attribution dan memantau Blended MER, Anda bisa mengetahui kombinasi saluran mana yang paling efektif mendorong pertumbuhan laba riil.'
        ]
      }
    ]
  }
];

export const INITIAL_LEADS: LeadItem[] = [
  {
    id: 'LEAD-101',
    createdAt: '14 Okt 2026, 14:20 WIB',
    name: 'Budi Santoso',
    company: 'PT Sentra Abadi Logistik',
    city: 'Semarang',
    phone: '081234567890',
    email: 'budi@sentraabadi.co.id',
    monthlyBudget: 'Rp 15 - 30 Juta / bln',
    targetService: 'Google Ads & B2B Lead Generation',
    status: 'Baru Masuk',
    notes: 'Klien ingin ekspansi layanan pergudangan dan butuh lead valid dari pengusaha pabrik Jawa Tengah.'
  },
  {
    id: 'LEAD-102',
    createdAt: '14 Okt 2026, 10:15 WIB',
    name: 'Citra Permata',
    company: 'Glow Botanic Skincare',
    city: 'Jakarta Selatan',
    phone: '081987654321',
    email: 'citra@glowbotanic.id',
    monthlyBudget: 'Rp 30 - 50 Juta / bln',
    targetService: 'Meta Ads & TikTok Ads Scale',
    status: 'Sedang Dianalisis',
    notes: 'Brand skincare lokal ingin menaikkan ROAS dari 2.1x menjadi 4.5x jelang promo akhir tahun.'
  },
  {
    id: 'LEAD-103',
    createdAt: '13 Okt 2026, 16:45 WIB',
    name: 'dr. Hendra Wicaksono',
    company: 'Klinik Gigi Sehat Temanggung',
    city: 'Temanggung',
    phone: '085712349988',
    email: 'klinik.hendra@gmail.com',
    monthlyBudget: 'Rp 5 - 10 Juta / bln',
    targetService: 'Bisnis Jasa & Layanan Lokal (Google Maps + IG Ads)',
    status: 'Proposal Terkirim',
    notes: 'Butuh akuisisi pasien ortodonti & estetika gigi di wilayah Temanggung, Parakan, dan sekitarnya.'
  },
  {
    id: 'LEAD-104',
    createdAt: '12 Okt 2026, 09:30 WIB',
    name: 'Arya Nugraha',
    company: 'Nusantara Heritage Coffee',
    city: 'Yogyakarta',
    phone: '081399887766',
    email: 'arya@nusantaracoffee.com',
    monthlyBudget: 'Rp 10 - 20 Juta / bln',
    targetService: 'Desain Landing Page & CRO + SEO Topical',
    status: 'Deal / Aktif',
    notes: 'Landing page ekspor biji kopi dan wholesale sudah live, sedang tahap setup Google Search B2B.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Aditya Pratama',
    role: 'Founder & CEO',
    company: 'Nusa Apparel Co.',
    city: 'Bandung',
    avatar: 'AP',
    rating: 5,
    text: 'Sebelum bekerja sama dengan tim FUTech, kami menghabiskan jutaan per hari di Facebook Ads tapi ROAS cuma pas-pasan 1.8x. Setelah mereka merapikan CAPI dan melatih tim kami dengan strategi sandbox, omzet kami tembus 5.4x ROAS secara konsisten.',
    serviceTag: 'Meta Ads & CAPI Scale',
    metricBadge: '+420% Omzet Penjualan'
  },
  {
    id: 'testi-2',
    name: 'Bambang Sudiro, S.H.',
    role: 'Managing Partner',
    company: 'Mitra Perizinan Mandiri',
    city: 'Semarang & Temanggung',
    avatar: 'BS',
    rating: 5,
    text: 'Sistem kualifikasi formulir Google Ads dari FUTech menghemat waktu tim sales kami secara drastis. Prospek yang masuk sudah terverifikasi punya PT dan anggaran siap closing. Biaya akuisisi per lead kami turun lebih dari 70%.',
    serviceTag: 'B2B Lead Generation',
    metricBadge: '-72% Biaya Per Lead'
  },
  {
    id: 'testi-3',
    name: 'drg. Maya Anggraini',
    role: 'Direktur Operasional',
    company: 'Dermacare Aesthetic & Dental',
    city: 'Yogyakarta',
    avatar: 'MA',
    rating: 5,
    text: 'Strategi penargetan radius lokal per kecamatan sangat luar biasa. Pasien baru yang datang ke klinik selalu menyebut melihat video Reels dokter kami. Pasien reservasi naik hampir 3 kali lipat dalam 3 bulan.',
    serviceTag: 'Layanan Jasa Lokal & Maps',
    metricBadge: '+280% Reservasi Pasien'
  },
  {
    id: 'testi-4',
    name: 'Reza Fahlevi',
    role: 'Head of Growth',
    company: 'KasirKu Cloud System',
    city: 'Jakarta',
    avatar: 'RF',
    rating: 5,
    text: 'Keahlian teknis tim FUTech dalam membersihkan penempatan PMax dan tracking server-side GA4 berada di level enterprise. Pelacakan CAC dan LTV kami sekarang 100% transparan.',
    serviceTag: 'Analytics & Tracking',
    metricBadge: '340+ Demo B2B / Bln'
  },
  {
    id: 'testi-5',
    name: 'Linda Kusuma',
    role: 'Owner',
    company: 'Batik Pesona Kencana',
    city: 'Solo',
    avatar: 'LK',
    rating: 5,
    text: 'Landing page yang dibuatkan sangat cepat dan enak dilihat di HP. Ditambah tombol langsung ke WhatsApp CS yang sudah ada teks pesan otomatisnya, konversi penjualan kami meningkat 2.5 kali lipat.',
    serviceTag: 'Landing Page & CRO',
    metricBadge: '2.5x Conversion Rate'
  },
  {
    id: 'testi-6',
    name: 'Irfan Hakim',
    role: 'Managing Director',
    company: 'Kopi Sindoro Sumbing',
    city: 'Temanggung',
    avatar: 'IH',
    rating: 5,
    text: 'Sebagai brand kopi asli lereng Gunung Sindoro Temanggung, berkat strategi digital FUTech kami sekarang menyuplai biji kopi ke ratusan coffeeshop di Jakarta, Surabaya, bahkan diekspor ke Singapura.',
    serviceTag: 'Ekspansi Nasional & SEO',
    metricBadge: 'Penetrasi Pasar Nasional'
  }
];

export const GENERAL_FAQS = [
  {
    q: 'Apa perbedaan mendasar FUTech Digital Indonesia dibanding agensi digital lainnya?',
    a: 'Kami adalah agensi performance-first yang berfokus pada hasil finansial nyata (ROAS, omzet bersih, penurunan CPA, dan jumlah kontrak closing), bukan sekadar metrik semu seperti tayangan (impressions) atau like. Kami juga membangun infrastruktur tracking server-side first-party agar data bisnis Anda 100% akurat.'
  },
  {
    q: 'Apakah FUTech melayani bisnis lokal dan UMKM di daerah?',
    a: 'Tentu saja. Kami memiliki pengalaman mendalam menangani bisnis lokal (klinik, notaris, perizinan, properti, kuliner, UMKM) di berbagai wilayah Indonesia termasuk Jawa Tengah (Temanggung, Semarang, Solo, Magelang, Jogja) hingga kota metropolitan Jabodetabek dan Surabaya.'
  },
  {
    q: 'Bagaimana cara memulai kerja sama dan konsultasi?',
    a: 'Cukup gunakan alat Audit Gratis di website ini atau hubungi tim kami via WhatsApp di 0813-8200-0412. Kami akan menganalisis histori kampanye Anda, mengidentifikasi kebocoran anggaran, dan menyajikan roadmap aksi dalam 24-48 jam kerja.'
  },
  {
    q: 'Siapa yang memegang kendali atas akun iklan dan kartu kredit?',
    a: 'Anda memegang kendali 100%. Akun iklan Google, Meta, dan TikTok tetap atas nama Anda sendiri. Tagihan iklan langsung dibayarkan ke platform terkait melalui kartu kredit/debit bisnis Anda, sehingga tidak ada markup biaya media yang tersembunyi.'
  },
  {
    q: 'Apakah ada jaminan hasil atau garansi?',
    a: 'Kami menjamin standar eksekusi tertinggi: setup tracking bebas error, pengujian kreatif sistematis mingguan, dan optimasi harian. Jika metrik kunci tidak mencapai benchmark awal dalam 30 hari pertama, tim senior kami memberikan audit mendalam dan perbaikan strategi tanpa biaya tambahan.'
  }
];
