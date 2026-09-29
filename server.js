import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Explicit clean routes for directory hubs
app.get(['/jasa', '/jasa/', '/jasa/index.html'], (req, res) => {
  if (req.path === '/jasa') {
    return res.redirect(301, '/jasa/');
  }
  res.sendFile(path.join(__dirname, 'jasa', 'index.html'));
});

app.get(['/artikel', '/artikel/', '/artikel/index.html'], (req, res) => {
  if (req.path === '/artikel') {
    return res.redirect(301, '/artikel/');
  }
  res.sendFile(path.join(__dirname, 'artikel', 'index.html'));
});

// Fallback redirects for root-level service and article aliases
const serviceSlugs = [
  'iklan-online', 'konsultasi-bisnis', 'perizinan', 'notaris-ppat', 'properti',
  'stnk-sim', 'meta-ads', 'website', 'desain-branding', 'foto-video',
  'akuntansi-pajak', 'hr-rekrutmen', 'it-komputer', 'lainnya'
];
serviceSlugs.forEach(slug => {
  app.get([`/${slug}`, `/${slug}.html`], (req, res) => {
    res.redirect(301, `/jasa/${slug}.html`);
  });
});

const articleSlugs = [
  'panduan-izin-usaha-nib-oss-temanggung',
  'biaya-balik-nama-dan-pajak-stnk-samsat-temanggung',
  'strategi-iklan-meta-ads-umkm-temanggung',
  'tips-membeli-tanah-kebun-sertifikat-shm-temanggung',
  'cara-bikin-website-bisnis-temanggung-masuk-google',
  'panduan-sertifikasi-halal-gratis-sehati-temanggung'
];
articleSlugs.forEach(slug => {
  app.get([`/${slug}`, `/${slug}.html`], (req, res) => {
    res.redirect(301, `/artikel/${slug}.html`);
  });
});

// Serve static assets and HTML files with clean URL support
app.use(express.static(__dirname, {
  extensions: ['html'],
  index: 'index.html'
}));

// Fallback to 404.html for any unhandled routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Jasa Temanggung server running on http://${HOST}:${PORT}`);
});
