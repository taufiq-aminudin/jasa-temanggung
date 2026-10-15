import React, { useState } from 'react';
import { 
  SERVICES, 
  INDUSTRIES, 
  CASE_STUDIES, 
  ARTICLES, 
  TESTIMONIALS, 
  GENERAL_FAQS, 
  SITE_CONFIG 
} from '../data/siteData';
import { RoasCalculator } from '../components/RoasCalculator';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Zap, 
  Target, 
  ShieldCheck, 
  BarChart3, 
  Users, 
  Award, 
  Search, 
  Play, 
  Sparkles, 
  MessageSquare,
  Building,
  HelpCircle,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

interface HomePageProps {
  navigate: (path: string) => void;
  openAuditModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate, openAuditModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="space-y-24 pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 lg:pt-24 overflow-hidden radial-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-mono font-medium shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Performance Marketing & Pertumbuhan Digital Indonesia #1</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
              Pemasaran Lebih Cerdas.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                Pertumbuhan Nyata Terukur.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Kami merancang sistem <strong>Google Ads</strong>, <strong>Meta Ads (FB & IG)</strong>, <strong>TikTok Ads</strong>, <strong>SEO Otoritas Topik</strong>, dan <strong>Optimasi Konversi (CRO)</strong> berkinerja tinggi untuk mengakuisisi pelanggan berkualitas dan melipatgandakan omzet bisnis & UMKM Indonesia.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={openAuditModal}
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 group"
              >
                <span>Mulai Audit Iklan Gratis</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  const elem = document.getElementById('kalkulator-section');
                  elem?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <span>Hitung Potensi ROAS (Kalkulator)</span>
              </button>
            </div>

            {/* Trust Bullet Strip */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Tanpa Markup Biaya Media</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Akses 100% Milik Anda</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Infrastruktur Server-Side CAPI</span>
              </span>
            </div>

          </div>

          {/* Key Metric Tickers Card Strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-panel p-5 rounded-2xl text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-white font-mono-numbers text-gradient-blue">
                {SITE_CONFIG.stats.totalAdSpendManaged}
              </div>
              <div className="text-xs text-slate-400">Total Belanja Iklan Dikelola</div>
            </div>

            <div className="glass-panel p-5 rounded-2xl text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono-numbers">
                {SITE_CONFIG.stats.averageRoas}
              </div>
              <div className="text-xs text-slate-400">Rata-rata ROAS Portofolio Klien</div>
            </div>

            <div className="glass-panel p-5 rounded-2xl text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono-numbers">
                {SITE_CONFIG.stats.leadsGenerated}
              </div>
              <div className="text-xs text-slate-400">Transaksi & Lead Terverifikasi</div>
            </div>

            <div className="glass-panel p-5 rounded-2xl text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-indigo-400 font-mono-numbers">
                {SITE_CONFIG.stats.retentionRate}
              </div>
              <div className="text-xs text-slate-400">Tingkat Kepuasan & Retensi</div>
            </div>
          </div>

        </div>
      </section>

      {/* Embedded ROAS & ROI Calculator Section */}
      <section id="kalkulator-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RoasCalculator onBookConsultation={openAuditModal} />
      </section>

      {/* Services Showcase Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>Spesialisasi Kinerja Tinggi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              12 Solusi Rekayasa Pertumbuhan Digital
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Setiap layanan dieksekusi dengan protokol ketat berorientasi pada laba bersih, efisiensi CPA, dan skalabilitas jangka panjang.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-slate-900 p-1.5 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                activeCategory === 'all' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Semua (12)
            </button>
            <button
              onClick={() => setActiveCategory('paid-ads')}
              className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                activeCategory === 'paid-ads' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Paid Media
            </button>
            <button
              onClick={() => setActiveCategory('organic-seo')}
              className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                activeCategory === 'organic-seo' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              SEO & Konten
            </button>
            <button
              onClick={() => setActiveCategory('conversion-cro')}
              className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                activeCategory === 'conversion-cro' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Landing Page & CRO
            </button>
            <button
              onClick={() => setActiveCategory('analytics-tech')}
              className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                activeCategory === 'analytics-tech' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Data & Tracking
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => navigate(`/layanan/${service.slug}`)}
              className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
                    {service.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {service.startingPrice}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Key Deliverables bullets */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  {service.deliverables.slice(0, 2).map((del, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5"></div>
                      <span className="line-clamp-1">{del.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-cyan-300">
                <span>Rincian Ruang Lingkup & Metrik</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-2">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Pembuktian & Hasil Nyata</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Studi Kasus Transformasi Bisnis Klien
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Lihat bagaimana kami memecahkan masalah penurunan ROAS, membendung pemborosan biaya lead, dan meningkatkan omzet secara masif.
            </p>
          </div>

          <button
            onClick={() => navigate('/studi-kasus')}
            className="self-start md:self-auto text-xs font-semibold text-blue-400 hover:text-cyan-300 flex items-center gap-1"
          >
            <span>Lihat Semua Studi Kasus</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              onClick={() => navigate('/studi-kasus')}
              className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {cs.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {cs.location}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cs.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-2">
                  <strong className="text-slate-300">{cs.client}</strong> ({cs.clientType})
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div>
                  <span className="text-[11px] text-slate-400">Pencapaian ROAS</span>
                  <div className="text-base sm:text-lg font-black text-cyan-400 font-mono">
                    {cs.metrics.roas}
                  </div>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400">Pertumbuhan Omzet</span>
                  <div className="text-base sm:text-lg font-black text-emerald-400 font-mono">
                    {cs.metrics.revenueGrowth}
                  </div>
                </div>
              </div>

              {/* Quote snippet */}
              <div className="border-l-2 border-blue-500 pl-3.5 italic text-xs text-slate-300">
                "{cs.testimonial.quote}"
                <span className="block not-italic font-semibold text-slate-400 mt-1">
                  — {cs.testimonial.author}, {cs.testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Solutions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
            <Building className="w-3.5 h-3.5" />
            <span>Keahlian Vertikal Sektor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Solusi Disesuaikan untuk Model Bisnis Anda
          </h2>
          <p className="text-slate-400 text-sm">
            Strategi pemasaran e-commerce sangat berbeda dengan jasa B2B atau klinik lokal. Kami memiliki blueprint teruji untuk setiap kategori.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              onClick={() => navigate('/industri')}
              className="glass-panel rounded-2xl p-6 space-y-4 cursor-pointer group hover:border-indigo-500/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                  {ind.badge}
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  {ind.averageRoas}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                {ind.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {ind.desc}
              </p>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                <span className="font-semibold text-slate-300 block">Tantangan Utama:</span>
                <span className="line-clamp-2">{ind.painPoints[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Users className="w-3.5 h-3.5" />
            <span>Suara Para Pemilik Bisnis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Dipercaya Oleh Brand & Pebisnis Indonesia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((testi) => (
            <div key={testi.id} className="glass-panel rounded-2xl p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-400">★★★★★ 5.0</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {testi.metricBadge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  "{testi.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center font-bold text-xs text-white">
                  {testi.avatar}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{testi.name}</div>
                  <div className="text-[11px] text-slate-400">{testi.role}, {testi.company} ({testi.city})</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Insights & Technical Knowledge Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pusat Edukasi & Rekayasa Data</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Wawasan & Panduan Teknis Terkini
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Artikel mendalam seputar Google Performance Max, implementasi Meta CAPI, Technical SEO Core Web Vitals, dan ekonomi lead generation B2B.
            </p>
          </div>

          <button
            onClick={() => navigate('/wawasan')}
            className="self-start md:self-auto text-xs font-semibold text-blue-400 hover:text-cyan-300 flex items-center gap-1"
          >
            <span>Buka Semua Artikel Panduan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.slice(0, 3).map((art) => (
            <div
              key={art.id}
              onClick={() => navigate(`/wawasan/${art.slug}`)}
              className="glass-panel rounded-2xl p-6 flex flex-col justify-between cursor-pointer group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="text-blue-400">{art.category}</span>
                  <span>{art.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                  {art.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Oleh {art.author.name}</span>
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform">Baca Panduan →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tanya Jawab</span>
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        <div className="space-y-3 pt-4">
          {GENERAL_FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl overflow-hidden border border-slate-800 transition-colors"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaqIndex === idx ? 'rotate-180 text-blue-400' : ''}`} />
              </button>
              {openFaqIndex === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
