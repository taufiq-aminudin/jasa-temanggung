import React from 'react';
import { ARTICLES, SITE_CONFIG } from '../data/siteData';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  Calendar, 
  Share2, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  BookOpen 
} from 'lucide-react';

interface ArticleDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
  openAuditModal: () => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ 
  slug, 
  navigate, 
  openAuditModal 
}) => {
  const article = ARTICLES.find(a => a.slug === slug) || ARTICLES[0];
  const relatedArticles = ARTICLES.filter(a => a.id !== article.id).slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Tautan panduan berhasil disalin ke clipboard!');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Back button */}
      <div>
        <button
          onClick={() => navigate('/wawasan')}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Knowledge Hub</span>
        </button>
      </div>

      {/* Header Article */}
      <div className="space-y-4 border-b border-slate-800 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="px-3 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
            {article.category}
          </span>
          <span className="text-slate-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </span>
          <span className="text-slate-500">·</span>
          <span className="text-slate-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.publishedDate}</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {article.excerpt}
        </p>

        {/* Author bar */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center font-mono font-bold text-xs text-white">
              {article.author.avatar}
            </div>
            <div>
              <div className="text-sm font-bold text-white">{article.author.name}</div>
              <div className="text-xs text-slate-400">{article.author.role}</div>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white flex items-center gap-1.5 text-xs font-mono"
            title="Bagikan Panduan"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Bagikan</span>
          </button>
        </div>
      </div>

      {/* Table of Contents Box */}
      {article.tableOfContents && article.tableOfContents.length > 0 && (
        <div className="glass-panel p-5 rounded-2xl border-slate-700/80 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Daftar Isi Pembahasan:</span>
          </div>
          <ol className="space-y-1.5 text-xs text-slate-300 list-decimal list-inside">
            {article.tableOfContents.map((toc, idx) => (
              <li key={idx} className="hover:text-blue-300 transition-colors">
                <span>{toc}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Main Body Content */}
      <div className="space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
        {article.sections.map((sec, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-2">
              {sec.heading}
            </h2>
            
            {sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="leading-relaxed">
                {p}
              </p>
            ))}

            {sec.bulletPoints && sec.bulletPoints.length > 0 && (
              <ul className="space-y-2 pl-2">
                {sec.bulletPoints.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {sec.callout && (
              <div className="p-4 rounded-xl bg-blue-950/40 border-l-4 border-blue-500 text-xs sm:text-sm text-slate-200 italic my-4">
                {sec.callout}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Mid-Article Audit CTA */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border-blue-500/40 flex flex-col sm:flex-row items-center justify-between gap-6 my-10">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-bold text-white">
            Ingin Menerapkan Strategi Ini Pada Bisnis Anda?
          </h3>
          <p className="text-xs text-slate-400">
            Dapatkan audit gratis dari tim teknis FUTech Digital Indonesia untuk mengevaluasi akun dan website Anda.
          </p>
        </div>

        <button
          onClick={openAuditModal}
          className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shrink-0 shadow-lg shadow-blue-600/30"
        >
          Mulai Audit Iklan Gratis →
        </button>
      </div>

      {/* Related Articles */}
      <div className="pt-8 border-t border-slate-800 space-y-4">
        <h3 className="text-lg font-bold text-white">
          Panduan Terkait Lainnya
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedArticles.map(rel => (
            <div
              key={rel.id}
              onClick={() => navigate(`/wawasan/${rel.slug}`)}
              className="glass-panel p-4 rounded-xl cursor-pointer group hover:border-blue-500/50"
            >
              <span className="text-[10px] font-mono text-cyan-400">{rel.category}</span>
              <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors mt-1 line-clamp-2">
                {rel.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
