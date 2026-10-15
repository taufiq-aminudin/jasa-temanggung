# Jasa Temanggung (React Application)

A modern, high-performance **React SPA** rewrite on **Vite and TypeScript** for **Jasa Temanggung** — the one-stop service directory and lead generation platform for Kabupaten Temanggung, Central Java.

## Features

- **One-Stop Service Directory**: 16 dedicated service modules covering business licensing (OSS NIB, PT Perorangan, P-IRT, Halal SEHATI), Notary & PPAT, vehicle taxes (Samsat STNK/SIM), digital marketing (Meta Ads, Google Ads), web development, business data analysis, and workforce staffing (`Agen Tenaga Kerja Temanggung`).
- **Interactive Consultation Cost Estimator**: Real-time calculation of estimated fee ranges and turnaround durations based on selected service, Temanggung subdistrict (kecamatan), and urgency level, with one-click pre-filled WhatsApp quotes.
- **Service Comparison Table**: Sortable by fee (Biaya) and processing duration (Waktu Kerja), filterable by industry sector, with dynamic statistical summaries and full client-side CSV file download.
- **Dynamic Real-Time Search & Category Filters**: Instant client-side search across all 16 services and 15 educational guides with zero-result fallback states and filter reset.
- **Testimonial Carousel & Review Submission**: Dynamic multi-card carousel with filterable categories, interactive 5-star rating widget, and instant local persistence via `localStorage`.
- **Exit-Intent & Inactivity Lead Generation**: Automatically triggers the "Checklist Legalitas Usaha Temanggung 2026" modal with client-side PDF document generation.
- **Direct WhatsApp Lead Routing**: Seamless pre-filled consultation message generation across services and contact forms.
- **Client-Side Routing & Clean URLs**: HTML5 History API client-side router supporting `/jasa`, `/jasa/:slug`, `/artikel`, `/artikel/:slug`, `/blog`, `/bagaimana-caranya`, `/tentang`, `/faq`, `/kontak`, `/syarat-ketentuan`, and `/privasi`.

## Technology Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite
- **Design System**: Vanilla CSS tokens matching the original design
- **State Management**: React hooks (`useState`, `useMemo`, `useRef`, `useEffect`) and browser `localStorage`

## Development

```bash
# Start development server on port 3000
npm run dev

# Build production bundle
npm run build

# Typecheck and lint
npm run lint

# Preview production build
npm run preview
```
