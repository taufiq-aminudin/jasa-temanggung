export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: 'marketing' | 'bisnis' | 'dokumen' | 'properti' | 'kendaraan' | 'digital';
  badge: string;
  desc: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  search: string;
  tagline?: string;
  scopeTitle?: string;
  scopeDesc?: string;
  scopes?: Array<{ title: string; desc: string }>;
  steps?: Array<{ no: number; title: string; desc: string }>;
  pricingTable?: Array<{ service: string; time: string; note: string }>;
  faqs?: Array<{ q: string; a: string }>;
  docsRequired?: string[];
  relatedArticleSlugs?: string[];
}

export interface ArticleItem {
  slug: string;
  title: string;
  category: 'legalitas' | 'sertifikasi' | 'properti' | 'otomotif' | 'digital';
  categoryLabel: string;
  badgeBg: string;
  badgeColor: string;
  date: string;
  readTime: string;
  author: string;
  description: string;
  search: string;
  content: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  relatedServiceId?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  category: string;
  serviceTag: string;
  rating: number;
  text: string;
  verified: boolean;
  createdAt?: string;
}
