export interface ServiceDeliverable {
  title: string;
  desc: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  desc: string;
  duration: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: 'paid-ads' | 'organic-seo' | 'conversion-cro' | 'analytics-tech' | 'creative-copy';
  categoryLabel: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: ServiceDeliverable[];
  process: ServiceProcessStep[];
  metrics: { label: string; value: string; benchmark: string }[];
  faqs: ServiceFaq[];
  startingPrice: string;
  durationEst: string;
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  badge: string;
  desc: string;
  painPoints: string[];
  growthPlaybook: string[];
  averageRoas: string;
  caseStudyRef?: string;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  clientType: string;
  location: string;
  industry: string;
  badge: string;
  challenge: string;
  strategy: string;
  executionSteps: string[];
  metrics: {
    roas: string;
    revenueGrowth: string;
    cpaReduction: string;
    leadsOrSales: string;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  tableOfContents: string[];
  sections: {
    heading: string;
    paragraphs: string[];
    bulletPoints?: string[];
    callout?: string;
  }[];
}

export interface LeadItem {
  id: string;
  createdAt: string;
  name: string;
  company: string;
  city: string;
  phone: string;
  email: string;
  monthlyBudget: string;
  targetService: string;
  status: 'Baru Masuk' | 'Sedang Dianalisis' | 'Proposal Terkirim' | 'Deal / Aktif' | 'Arsip';
  notes: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  city: string;
  avatar: string;
  rating: number;
  text: string;
  serviceTag: string;
  metricBadge: string;
}
