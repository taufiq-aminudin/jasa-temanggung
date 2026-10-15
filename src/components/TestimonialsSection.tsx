import React, { useState, useEffect, useRef } from 'react';
import { INITIAL_REVIEWS, SITE_CONFIG } from '../data/siteData';
import { ReviewItem } from '../types';

const STORAGE_KEY = 'jasa_temanggung_user_reviews';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return [...parsed, ...INITIAL_REVIEWS];
        }
      }
    } catch (_) {}
    return INITIAL_REVIEWS;
  });

  const [filterCat, setFilterCat] = useState<string>('all');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  // Form State
  const [authorName, setAuthorName] = useState('');
  const [authorRole, setAuthorRole] = useState('');
  const [serviceTag, setServiceTag] = useState('Jasa Perizinan OSS NIB');
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState('');
  const [consent, setConsent] = useState(true);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);

  const filteredReviews = reviews.filter(rev => {
    if (filterCat === 'all') return true;
    return rev.category === filterCat;
  });

  const totalSlides = filteredReviews.length;

  const scrollToIndex = (index: number) => {
    if (!trackRef.current) return;
    const cards = trackRef.current.querySelectorAll('.testimonial-card');
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      setCurrentSlideIndex(index);
    }
  };

  const handleNext = () => {
    const nextIdx = (currentSlideIndex + 1) % totalSlides;
    scrollToIndex(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    scrollToIndex(prevIdx);
  };

  // Submit Review Form
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewText.trim()) return;

    let category = 'dokumen';
    if (serviceTag.includes('Pajak') || serviceTag.includes('STNK')) category = 'kendaraan';
    else if (serviceTag.includes('Iklan') || serviceTag.includes('Web') || serviceTag.includes('Data')) category = 'digital';

    const newRev: ReviewItem = {
      id: 'rev_' + Date.now(),
      name: authorName.trim(),
      role: authorRole.trim() || 'Wirausaha Temanggung',
      category,
      serviceTag,
      rating,
      text: reviewText.trim(),
      verified: true,
      createdAt: new Date().toISOString()
    };

    const updated = [newRev, ...reviews];
    setReviews(updated);

    try {
      const userCreated = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      userCreated.unshift(newRev);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userCreated));
    } catch (_) {}

    setShowSuccessAlert(true);
    setAuthorName('');
    setAuthorRole('');
    setReviewText('');
    setFilterCat('all');
    setCurrentSlideIndex(0);

    setTimeout(() => {
      if (trackRef.current) {
        trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const ratingDescriptions: Record<number, string> = {
    5: '★★★★★ (5.0 / 5.0 - Sangat Memuaskan)',
    4: '★★★★☆ (4.0 / 5.0 - Puas & Rekomendasi)',
    3: '★★★☆☆ (3.0 / 5.0 - Cukup Baik)',
    2: '★★☆☆☆ (2.0 / 5.0 - Kurang Memuaskan)',
    1: '★☆☆☆☆ (1.0 / 5.0 - Perlu Banyak Peningkatan)'
  };

  return (
    <section className="section" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
      <div className="container">
        {/* Testimonial Stats Row */}
        <div className="testi-stats-row">
          <div className="testi-stat-card">
            <div className="testi-stat-num">4.9 / 5.0</div>
            <div className="testi-stat-label">Rating Kepuasan Klien</div>
          </div>
          <div className="testi-stat-card">
            <div className="testi-stat-num">500+</div>
            <div className="testi-stat-label">Konsultasi Selesai</div>
          </div>
          <div className="testi-stat-card">
            <div className="testi-stat-num">100%</div>
            <div className="testi-stat-label">Transparansi Estimasi</div>
          </div>
          <div className="testi-stat-card">
            <div className="testi-stat-num">20</div>
            <div className="testi-stat-label">Kecamatan di Temanggung</div>
          </div>
        </div>

        <div className="section-head" style={{ marginBottom: '16px' }}>
          <div>
            <span className="eyebrow">Pengalaman Klien Temanggung</span>
            <h2>Apa Kata Pelaku Usaha &amp; Warga Temanggung?</h2>
            <p>Ulasan autentik dari mitra UMKM, pemilik kedai kopi, pelaku properti, hingga wirausaha yang telah menggunakan layanan kami.</p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="testi-filter-wrap">
          <button
            type="button"
            className={`testi-filter-btn ${filterCat === 'all' ? 'active' : ''}`}
            onClick={() => { setFilterCat('all'); setCurrentSlideIndex(0); }}
          >
            Semua Ulasan ({reviews.length})
          </button>
          <button
            type="button"
            className={`testi-filter-btn ${filterCat === 'dokumen' ? 'active' : ''}`}
            onClick={() => { setFilterCat('dokumen'); setCurrentSlideIndex(0); }}
          >
            Legalitas &amp; Dokumen Usaha
          </button>
          <button
            type="button"
            className={`testi-filter-btn ${filterCat === 'kendaraan' ? 'active' : ''}`}
            onClick={() => { setFilterCat('kendaraan'); setCurrentSlideIndex(0); }}
          >
            Samsat Kendaraan
          </button>
          <button
            type="button"
            className={`testi-filter-btn ${filterCat === 'digital' ? 'active' : ''}`}
            onClick={() => { setFilterCat('digital'); setCurrentSlideIndex(0); }}
          >
            Iklan, Data &amp; Digital
          </button>
        </div>

        {/* Carousel Slider */}
        <div className="testi-carousel-wrapper">
          <div className="testi-carousel-track" ref={trackRef}>
            {filteredReviews.map((rev) => {
              const stars = '★'.repeat(rev.rating) + '☆'.repeat(5 - rev.rating);
              const initials = rev.name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
              return (
                <div key={rev.id} className="testimonial-card">
                  <div>
                    <div className="testi-header">
                      <div className="testi-stars">{stars}</div>
                      <span className="testi-service-tag" style={{ color: '#1d4ed8', background: '#eff6ff' }}>
                        {rev.serviceTag}
                      </span>
                    </div>
                    <p>“{rev.text}”</p>
                  </div>
                  <div className="testi-author">
                    <div className="testi-avatar" style={{ background: '#dbeafe', color: '#1e40af' }}>
                      {initials}
                    </div>
                    <div>
                      <strong style={{ fontSize: '13px', display: 'block' }}>{rev.name}</strong>
                      <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{rev.role}</span>
                      <span className="testi-badge" style={{ display: 'block' }}>
                        ✓ Klien Terverifikasi
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="testi-nav-bar">
            <div className="testi-counter-wrap">
              <span className="testi-counter-badge">
                {currentSlideIndex + 1} / {totalSlides || 1}
              </span>
              <span>{filteredReviews.length} Ulasan Pelaku Bisnis &amp; Warga Temanggung</span>
            </div>

            <div className="testi-arrow-btns">
              <button
                type="button"
                className="testi-arrow-btn"
                onClick={handlePrev}
                aria-label="Ulasan sebelumnya"
              >
                ‹
              </button>
              <button
                type="button"
                className="testi-arrow-btn"
                onClick={handleNext}
                aria-label="Ulasan berikutnya"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Review Form Submission Card */}
        <div className="review-form-box">
          {showSuccessAlert && (
            <div className="review-success-alert">
              <div className="review-success-icon">✓</div>
              <div style={{ flex: 1 }}>
                <strong style={{ color: '#065f46', display: 'block', fontSize: '14px' }}>
                  Terima kasih atas ulasan Anda!
                </strong>
                <p style={{ margin: 0, fontSize: '13px', color: '#047857' }}>
                  Ulasan Anda telah ditambahkan ke etalase pengalaman klien Jasa Temanggung.
                </p>
              </div>
              <button
                type="button"
                className="review-close-alert"
                onClick={() => setShowSuccessAlert(false)}
              >
                ✕
              </button>
            </div>
          )}

          <div className="review-form-header">
            <div>
              <span className="eyebrow small" style={{ marginBottom: '6px' }}>Partisipasi Komunitas</span>
              <h3 style={{ fontSize: '22px', margin: 0 }}>Pernah Menggunakan Layanan Kami? Berikan Ulasan Anda</h3>
              <p style={{ margin: '6px 0 0', fontSize: '14px' }}>
                Pengalaman nyata Anda membantu pelaku UMKM dan warga Temanggung lainnya memilih solusi terbaik.
              </p>
            </div>
            <div className="review-verified-pill">
              🛡 Terbuka untuk Klien &amp; Mitra
            </div>
          </div>

          <form onSubmit={handleSubmitReview} className="review-form">
            <div className="review-form-grid">
              <div className="form-group">
                <label>
                  Nama Anda / Pemilik Usaha <span className="req-star">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Pak Slamet / Ibu Rahayu"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>
                  Nama Usaha &amp; Kecamatan di Temanggung <span className="req-star">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Toko Berkah, Parakan"
                  value={authorRole}
                  onChange={(e) => setAuthorRole(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>
                  Jenis Layanan yang Digunakan <span className="req-star">*</span>
                </label>
                <select
                  value={serviceTag}
                  onChange={(e) => setServiceTag(e.target.value)}
                >
                  <option value="Jasa Perizinan OSS NIB">Jasa Perizinan OSS &amp; NIB</option>
                  <option value="Izin Edar P-IRT Dinkes">Izin Edar P-IRT Dinkes Temanggung</option>
                  <option value="Sertifikasi Halal (SEHATI)">Sertifikasi Halal (SEHATI BPJPH)</option>
                  <option value="Pendirian PT Perorangan">Pendirian PT Perorangan</option>
                  <option value="Notaris & Transaksi Tanah">Notaris &amp; PPAT Pertanahan</option>
                  <option value="Pajak 5 Tahunan & Mutasi STNK">Samsat STNK &amp; Administrasi Kendaraan</option>
                  <option value="Jasa Meta Ads & Iklan Online">Iklan Online Meta &amp; Google Ads</option>
                  <option value="Jasa Analis Data Bisnis">Analis Data Bisnis &amp; Dashboard POS</option>
                  <option value="Pembuatan Website & SEO">Pembuatan Website Bisnis &amp; SEO</option>
                  <option value="Agen Tenaga Kerja Temanggung">Agen Tenaga Kerja (Pabrik/Driver/ART)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Rating Kepuasan Layanan</label>
                <div className="star-rating-widget">
                  <div className="star-buttons">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`star-btn ${(hoverRating || rating) >= star ? 'active' : ''}`}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                  <span className="star-rating-label">
                    {ratingDescriptions[rating]}
                  </span>
                </div>
              </div>
            </div>

            <div className="form-group" style={{ marginTop: '16px' }}>
              <label>
                Ulasan &amp; Kesan Anda <span className="req-star">*</span>
              </label>
              <textarea
                required
                rows={3}
                maxLength={400}
                placeholder="Ceritakan bagaimana tim Jasa Temanggung mendampingi urusan Anda (kecepatan, keramahan, kejelasan estimasi, dll)..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
              <span className="form-hint" style={{ textAlign: 'right', display: 'block' }}>
                {reviewText.length} / 400 karakter
              </span>
            </div>

            <div className="review-consent-wrap">
              <label className="review-checkbox-label">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <span>Saya menyatakan bahwa ulasan ini ditulis berdasarkan pengalaman riil dan setuju ditampilkan di website Jasa Temanggung.</span>
              </label>
            </div>

            <div className="review-form-actions">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!consent || !authorName.trim() || !reviewText.trim()}
              >
                Kirim Ulasan Sekarang →
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  const msg = `Halo Jasa Temanggung, saya ${authorName || 'pelaku usaha'} ingin mengirim ulasan:\n\n*Layanan:* ${serviceTag}\n*Rating:* ${rating} Bintang\n*Ulasan:* ${reviewText || 'Layanan memuaskan dan terpercaya'}`;
                  window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
                }}
              >
                Bagikan Juga via WhatsApp 💬
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
