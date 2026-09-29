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
  res.sendFile(path.join(__dirname, 'jasa', 'index.html'));
});

app.get(['/artikel', '/artikel/', '/artikel/index.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'artikel', 'index.html'));
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
