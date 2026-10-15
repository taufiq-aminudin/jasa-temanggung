import React, { useState } from 'react';
import { Logo } from './Logo';
import { 
  X, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Eye, 
  Code2, 
  Palette,
  ShieldCheck,
  Globe
} from 'lucide-react';

interface BrandKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandKitModal: React.FC<BrandKitModalProps> = ({ isOpen, onClose }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'logo' | 'favicon' | 'palette'>('logo');
  const [previewTheme, setPreviewTheme] = useState<'dark' | 'light'>('dark');

  if (!isOpen) return null;

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleDownload = (filename: string, contentUrl: string) => {
    const link = document.createElement('a');
    link.href = contentUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const colors = [
    { name: 'Obsidian Navy (Primary Dark)', hex: '#0b1120', role: 'Main Background & Canvas' },
    { name: 'Royal Cyber Blue', hex: '#2563eb', role: 'Primary Brand Action & Accent' },
    { name: 'Quantum Sky', hex: '#38bdf8', role: 'Telemetry Glow & Gradient Peak' },
    { name: 'Neon Cyan', hex: '#06b6d4', role: 'Secondary Vector Wing' },
    { name: 'Growth Mint', hex: '#10b981', role: 'ROAS Vector Pulse & High Performance Indicator' },
    { name: 'Card Surface Slate', hex: '#0f172a', role: 'Elevated Component Backgrounds' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Asset Identitas Resmi</span>
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">
              Logo &amp; Favicon FUTech Digital Indonesia
            </h2>
            <p className="text-slate-400 text-sm">
              Pedoman visual resmi, aset vektor SVG resolusi tinggi, dan standarisasi favicon browser.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 border-b border-slate-800/80 my-6">
          <button
            onClick={() => setActiveTab('logo')}
            className={`pb-3 px-3 text-sm font-semibold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'logo'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>Master Logo</span>
          </button>
          <button
            onClick={() => setActiveTab('favicon')}
            className={`pb-3 px-3 text-sm font-semibold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'favicon'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Favicon &amp; Tab Preview</span>
          </button>
          <button
            onClick={() => setActiveTab('palette')}
            className={`pb-3 px-3 text-sm font-semibold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'palette'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>Palet Warna Brand</span>
          </button>
        </div>

        {/* Tab 1: Master Logo */}
        {activeTab === 'logo' && (
          <div className="space-y-6">
            {/* Preview Box with Dark / Light Switch */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono">PREVIEW REAL-TIME LOGO</span>
                <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-lg">
                  <button
                    onClick={() => setPreviewTheme('dark')}
                    className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                      previewTheme === 'dark' ? 'bg-blue-600 text-white' : 'text-slate-400'
                    }`}
                  >
                    Dark Canvas
                  </button>
                  <button
                    onClick={() => setPreviewTheme('light')}
                    className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                      previewTheme === 'light' ? 'bg-slate-200 text-slate-900' : 'text-slate-400'
                    }`}
                  >
                    Light Canvas
                  </button>
                </div>
              </div>

              <div 
                className={`p-10 rounded-2xl border transition-all flex flex-col items-center justify-center gap-8 ${
                  previewTheme === 'dark' 
                    ? 'bg-[#0b1120] border-slate-800' 
                    : 'bg-white border-slate-200 text-slate-900'
                }`}
              >
                {/* Large Logo */}
                <Logo size="xl" />

                {/* Sub-variant showcase */}
                <div className="flex flex-wrap items-center justify-center gap-8 pt-6 border-t border-slate-800/40 w-full">
                  <div className="flex flex-col items-center gap-2">
                    <Logo size="md" variant="compact" />
                    <span className="text-[10px] font-mono text-slate-500">Compact</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Logo size="md" variant="mark" />
                    <span className="text-[10px] font-mono text-slate-500">Icon Mark Only</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Logo size="sm" />
                    <span className="text-[10px] font-mono text-slate-500">Small (Header size)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rationale and Philosophy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
              <div>
                <h4 className="font-bold text-white mb-1.5 flex items-center gap-1.5 text-blue-400">
                  <ShieldCheck className="w-4 h-4" />
                  Filosofi Bentuk (Geometric F)
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  Pilar vertikal melambangkan ketahanan dan data terstruktur. Sayap horizontal miring ke depan melambangkan kecepatan adaptasi teknologi. Titik akselerasi hijau zamrud di ujung sayap merepresentasikan konversi positif (ROAS terukur).
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1.5 flex items-center gap-1.5 text-cyan-400">
                  <Layers className="w-4 h-4" />
                  Badge Indonesia
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  Elemen tag [ID] dengan indikator denyut hijau neon mengukuhkan posisi agensi sebagai mitra pertumbuhan digital terdepan berfokus pada pasar, regulasi, dan perilaku konsumen Indonesia.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => handleDownload('futech-logo.svg', '/assets/logo.svg')}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/25 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Vector Logo (SVG)</span>
              </button>

              <button
                onClick={() => handleCopy('<img src="/assets/logo.svg" alt="FUTech Digital Indonesia" />', 'html-logo')}
                className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 font-semibold text-xs flex items-center gap-2 transition-all"
              >
                {copiedType === 'html-logo' ? <Check className="w-4 h-4 text-emerald-400" /> : <Code2 className="w-4 h-4" />}
                <span>{copiedType === 'html-logo' ? 'HTML Disalin!' : 'Salin Tag HTML'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Favicon & Browser Simulation */}
        {activeTab === 'favicon' && (
          <div className="space-y-6">
            <p className="text-slate-300 text-sm">
              Favicon dirancang khusus agar tetap kontras, tajam, dan mudah dikenali pada tab browser berlatar gelap maupun terang.
            </p>

            {/* Simulated Browser Chrome Tab Preview */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400">SIMULASI TAMPILAN TAB BROWSER</span>
              
              {/* Dark mode tab */}
              <div className="bg-[#1f2937] rounded-t-xl p-3 border border-slate-700/80 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  {/* Browser Tab */}
                  <div className="ml-4 flex items-center gap-2 bg-[#0b1120] text-slate-200 px-3.5 py-1.5 rounded-t-lg text-xs font-medium border-t-2 border-blue-500 shadow-sm max-w-xs truncate">
                    <img src="/assets/favicon.svg" alt="FUTech" className="w-4 h-4 shrink-0 rounded" />
                    <span className="truncate">FUTech Digital Indonesia – Agensi Performance Advertising</span>
                    <X className="w-3 h-3 text-slate-500 shrink-0 ml-1" />
                  </div>
                </div>
              </div>

              {/* Light mode tab simulation */}
              <div className="bg-[#e2e8f0] rounded-b-xl p-3 border-x border-b border-slate-400/30 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-400" />
                    <div className="w-3 h-3 rounded-full bg-slate-400" />
                    <div className="w-3 h-3 rounded-full bg-slate-400" />
                  </div>
                  {/* Browser Tab */}
                  <div className="ml-4 flex items-center gap-2 bg-white text-slate-800 px-3.5 py-1.5 rounded-t-lg text-xs font-medium border-t-2 border-blue-600 shadow-sm max-w-xs truncate">
                    <img src="/assets/favicon.svg" alt="FUTech" className="w-4 h-4 shrink-0 rounded" />
                    <span className="truncate">FUTech Digital Indonesia</span>
                    <X className="w-3 h-3 text-slate-400 shrink-0 ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Sizes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl text-center space-y-2">
                <div className="flex justify-center">
                  <img src="/assets/favicon.svg" alt="64x64" className="w-16 h-16 drop-shadow-md" />
                </div>
                <div className="text-xs font-mono text-white font-bold">64 x 64 px</div>
                <div className="text-[10px] text-slate-400">High-DPI Retina Favicon</div>
              </div>

              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl text-center space-y-2">
                <div className="flex justify-center items-center h-16">
                  <img src="/assets/favicon.svg" alt="32x32" className="w-8 h-8 drop-shadow-md" />
                </div>
                <div className="text-xs font-mono text-white font-bold">32 x 32 px</div>
                <div className="text-[10px] text-slate-400">Standard Desktop Tab</div>
              </div>

              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl text-center space-y-2">
                <div className="flex justify-center items-center h-16">
                  <img src="/assets/favicon.svg" alt="16x16" className="w-4 h-4 drop-shadow-md" />
                </div>
                <div className="text-xs font-mono text-white font-bold">16 x 16 px</div>
                <div className="text-[10px] text-slate-400">Bookmark &amp; Address Bar</div>
              </div>

              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl text-center space-y-2">
                <div className="flex justify-center items-center h-16">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 p-2 flex items-center justify-center">
                    <img src="/assets/favicon.svg" alt="Apple Touch" className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-xs font-mono text-white font-bold">Apple Touch Icon</div>
                <div className="text-[10px] text-slate-400">iOS / Android Web Clip</div>
              </div>
            </div>

            {/* Favicon Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => handleDownload('favicon.svg', '/assets/favicon.svg')}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/25 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Favicon (SVG)</span>
              </button>

              <button
                onClick={() => handleCopy('<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">', 'html-fav')}
                className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 font-semibold text-xs flex items-center gap-2 transition-all"
              >
                {copiedType === 'html-fav' ? <Check className="w-4 h-4 text-emerald-400" /> : <Code2 className="w-4 h-4" />}
                <span>{copiedType === 'html-fav' ? 'Tag Link Disalin!' : 'Salin Tag <link> Favicon'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Color Palette */}
        {activeTab === 'palette' && (
          <div className="space-y-4">
            <p className="text-slate-300 text-sm">
              Palet warna resmi FUTech Digital Indonesia dirancang untuk merefleksikan presisi teknik data, akselerasi pertumbuhan, dan modernitas berstandar internasional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {colors.map((c) => (
                <div 
                  key={c.hex} 
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3 hover:border-slate-700 transition-all"
                >
                  <div 
                    className="w-full h-16 rounded-lg shadow-inner border border-white/10" 
                    style={{ backgroundColor: c.hex }}
                  />
                  <div>
                    <div className="font-bold text-white text-sm">{c.name}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{c.role}</div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                    <span className="font-mono text-xs text-blue-400 font-semibold">{c.hex}</span>
                    <button
                      onClick={() => handleCopy(c.hex, c.hex)}
                      className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                      title="Salin HEX Code"
                    >
                      {copiedType === c.hex ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
