# Jasa Temanggung

Website static multi-page untuk konsep **one-stop service / lead generation lokal Temanggung**.

## Riset & validasi
- Masalah utama yang disasar: pencarian jasa tersebar, istilah teknis membingungkan, ketidakjelasan dokumen/proses, dan sulit membandingkan scope.
- Model produk: katalog layanan + halaman detail SEO + satu form konsultasi + routing ke WhatsApp.
- Untuk layanan teregulasi (notaris/PPAT, perizinan resmi, pertanahan, SIM/STNK), copy menggunakan posisi **pendamping/koordinator**, bukan klaim sebagai instansi atau pemegang kewenangan.
- Prioritas MVP: jasa perizinan, property, STNK/SIM, notaris/PPAT, Meta Ads, website; kategori lain menjadi demand expansion.

## UX / user flow
1. Landing dari Google/social/referral.
2. Cari kategori atau langsung klik layanan populer.
3. Baca problem → scope → alur → catatan penting.
4. Klik **Konsultasi**.
5. Isi nama, lokasi, jasa, kebutuhan.
6. Form membuat draft WhatsApp.
7. Lead dikualifikasi: kebutuhan → data → scope → estimasi → order.

## Design system
- Primary: #1457D9
- Ink: #0B1220
- Background: #F7F9FC
- Font: Manrope (heading), DM Sans (body)
- Radius: 14–30px
- Mobile sticky CTA
- No stock image dependency; hero menggunakan CSS visual sehingga cepat.

## Launch checklist
- [ ] Isi nomor WhatsApp di `assets/js/site-config.js`.
- [ ] Ganti `YOUR-DOMAIN.example` pada `robots.txt` dan `sitemap.xml`.
- [ ] Pasang domain + HTTPS.
- [ ] Tambahkan GA4/Search Console sesuai kebutuhan.
- [ ] Uji form WhatsApp, semua internal link, 404, favicon, metadata, dan OG image.
- [ ] Tambahkan foto asli, logo final, alamat bisnis, dan legal copy aktual.
- [ ] Uji mobile/tablet/desktop dan PageSpeed.

## Struktur
- `index.html` home
- `jasa/index.html` semua layanan
- `jasa/*.html` 12 halaman layanan
- `bagaimana-caranya.html` cara kerja
- `tentang.html` tentang
- `faq.html` FAQ
- `kontak.html` form konsultasi
- `privasi.html`, `syarat-ketentuan.html`, `404.html`
- `assets/css/style.css`
- `assets/js/site-config.js`
- `assets/js/app.js`
- `robots.txt`, `sitemap.xml`

Built as a lightweight static site, suitable for GitHub Pages, Netlify, Cloudflare Pages, or cPanel static hosting.
