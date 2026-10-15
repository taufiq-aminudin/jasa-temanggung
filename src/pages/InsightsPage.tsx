import React, { useState } from 'react';
import { ARTICLES } from '../data/siteData';
import { 
  BookOpen, 
  Search, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Tag 
} from 'lucide-react';

interface InsightsPageProps {
  navigate: (path: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ navigate }) => {
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const allTags = ['all', 'Google Ads', 'Meta Ads', 'CAPI', 'Technical SEO', 'B2B Marketing', 'CRO', 'GA4'];

  const filtered = ARTICLES.filter(a => {
    const matchesTag = selectedTag === 'all' || a.tags.some(t => t.toLowerCase() === selectedTag.toLowerCase());
    const matchesQuery = !query || 
      a.title.toLowerCase().includes(query.toLowerCase()) || 
      a.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchesTag && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Hero Head */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Knowledge Hub & Rekayasa Pemasaran</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Wawasan Teknis & Panduan Pertumbuhan Terukur
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Kumpulan panduan teknis mendalam seputar arsitektur Google Performance Max, implementasi Meta Conversions API (CAPI), optimasi Core Web Vitals, dan ekonomi B2B lead generation di Indonesia.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-panel p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 border-slate-700">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari panduan (PMax, CAPI, CRO, SEO)..."
            className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto text-xs">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedTag === tag 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {tag === 'all' ? 'Semua Topik' : tag}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((art) => (
          <article
            key={art.id}
            onClick={() => navigate(`/wawasan/${art.slug}`)}
            className="glass-panel rounded-2xl p-6 flex flex-col justify-between cursor-pointer group hover:-translate-y-1 hover:border-blue-500/50"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-cyan-400 font-semibold">{art.category}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span>{art.readTime}</span>
                </span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                  {art.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-2.5 line-clamp-3 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-1 pt-2">
                {art.tags.slice(0, 3).map((t, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-600/30 border border-blue-500/40 flex items-center justify-center font-mono text-[10px] font-bold text-blue-300">
                  {art.author.avatar}
                </div>
                <span>{art.author.name}</span>
              </div>

              <div className="flex items-center gap-1 text-blue-400 font-semibold group-hover:text-cyan-300">
                <span>Baca</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
};
