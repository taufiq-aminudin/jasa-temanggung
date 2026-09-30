// 0. Safeguard for Google AdSense TagError (availableWidth=0) in iframe & responsive views
window.addEventListener('error', (e) => {
  if (e && e.message && (e.message.includes('adsbygoogle') || e.message.includes('availableWidth=0'))) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    return true;
  }
}, true);

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // 2. Mobile Menu Toggle
  const t = document.querySelector('.menu-toggle'),
        n = document.querySelector('.nav-links');
  if (t && n) {
    t.onclick = (e) => {
      e.stopPropagation();
      const o = n.classList.toggle('open');
      t.setAttribute('aria-expanded', o ? 'true' : 'false');
    };
    // Close on click outside
    document.addEventListener('click', (e) => {
      if (n.classList.contains('open') && !n.contains(e.target) && e.target !== t) {
        n.classList.remove('open');
        t.setAttribute('aria-expanded', 'false');
      }
    });
    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && n.classList.contains('open')) {
        n.classList.remove('open');
        t.setAttribute('aria-expanded', 'false');
      }
    });
    // Close on nav link click
    n.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        n.classList.remove('open');
        t.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. FAQ Accordion Toggle
  document.querySelectorAll('.faq-q').forEach(b => {
    b.onclick = () => b.closest('.faq-item').classList.toggle('open');
  });

  // 4. Real-Time Service Search & Category Filter
  const initServiceSearch = () => {
    const searchInputs = document.querySelectorAll('[data-service-search]');
    const categorySelects = document.querySelectorAll('.finder select, #home-category-select');
    const serviceCards = [...document.querySelectorAll('.service-card[data-search]')];
    const resultsNotes = document.querySelectorAll('[data-results-note], #service-count-label');
    const clearBtn = document.getElementById('clear-search-btn');
    const noResultsCard = document.getElementById('no-services-found');
    const resetFilterBtn = document.getElementById('reset-filter-btn');
    const heroInput = document.getElementById('hero-quick-search');
    const heroBtn = document.getElementById('hero-search-btn');

    if (searchInputs.length === 0 && serviceCards.length === 0) return;

    let currentQuery = '';
    let currentCategory = 'all';

    const performFilter = (query, category) => {
      currentQuery = (query || '').toLowerCase().trim();
      currentCategory = category || 'all';

      // Sync inputs if not active
      searchInputs.forEach(input => {
        if (input.value !== query && document.activeElement !== input) {
          input.value = query;
        }
      });
      categorySelects.forEach(select => {
        if (select.value !== currentCategory) {
          select.value = currentCategory;
        }
      });

      const searchTerms = currentQuery ? currentQuery.split(/\s+/).filter(Boolean) : [];
      let visibleCount = 0;

      serviceCards.forEach(card => {
        const cardSearchText = (card.dataset.search + ' ' + card.innerText).toLowerCase();
        const matchesCategory = currentCategory === 'all' || card.dataset.category === currentCategory;
        const matchesQuery = searchTerms.length === 0 || searchTerms.every(term => cardSearchText.includes(term));

        const isVisible = matchesCategory && matchesQuery;
        card.classList.toggle('hidden', !isVisible);
        if (isVisible) visibleCount++;
      });

      // Update result counter notes
      resultsNotes.forEach(note => {
        if (searchTerms.length > 0 || currentCategory !== 'all') {
          note.textContent = `Menampilkan ${visibleCount} dari ${serviceCards.length} layanan yang cocok.`;
        } else {
          note.textContent = `Menampilkan semua ${serviceCards.length} layanan unggulan.`;
        }
      });

      // Show or hide clear button
      if (clearBtn) {
        clearBtn.classList.toggle('hidden', !currentQuery && currentCategory === 'all');
      }

      // Show or hide no results card
      if (noResultsCard) {
        noResultsCard.classList.toggle('hidden', visibleCount > 0);
      }
    };

    // Attach listeners to all search inputs
    searchInputs.forEach(input => {
      input.addEventListener('input', (e) => {
        const select = input.closest('.finder')?.querySelector('select') || document.getElementById('home-category-select');
        const cat = select ? select.value : currentCategory;
        performFilter(e.target.value, cat);
      });

      // Clear on Escape key
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          input.value = '';
          performFilter('', currentCategory);
        }
      });
    });

    // Attach listeners to category selectors
    categorySelects.forEach(select => {
      select.addEventListener('change', (e) => {
        const activeInput = document.querySelector('[data-service-search]:focus') || searchInputs[0];
        const q = activeInput ? activeInput.value : currentQuery;
        performFilter(q, e.target.value);
      });
    });

    // Reset button events
    const resetAll = () => {
      searchInputs.forEach(input => { input.value = ''; });
      categorySelects.forEach(select => { select.value = 'all'; });
      if (heroInput) heroInput.value = '';
      performFilter('', 'all');
      const firstInput = searchInputs[0];
      if (firstInput) firstInput.focus();
    };

    if (clearBtn) clearBtn.addEventListener('click', resetAll);
    if (resetFilterBtn) resetFilterBtn.addEventListener('click', resetAll);

    // Hero quick search interaction
    if (heroInput) {
      heroInput.addEventListener('input', (e) => {
        performFilter(e.target.value, currentCategory);
      });

      const scrollToServices = () => {
        const targetSection = document.getElementById('layanan-section') || document.querySelector('.grid-3');
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          const mainInput = document.getElementById('home-service-search') || searchInputs[0];
          if (mainInput) setTimeout(() => mainInput.focus(), 400);
        }
      };

      heroInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          scrollToServices();
        }
      });

      if (heroBtn) {
        heroBtn.addEventListener('click', (e) => {
          e.preventDefault();
          scrollToServices();
        });
      }
    }

    // Initial check (handles URL parameters and prefilled query)
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlQ = urlParams.get('q') || urlParams.get('search') || '';
      const urlCat = urlParams.get('kategori') || urlParams.get('cat') || urlParams.get('category') || 'all';
      if (urlQ || urlCat !== 'all') {
        performFilter(urlQ, urlCat);
      } else {
        const initialInput = searchInputs[0];
        const initialSelect = categorySelects[0];
        if (initialInput && initialInput.value) {
          performFilter(initialInput.value, initialSelect ? initialSelect.value : 'all');
        }
      }
    } catch (_) {
      const initialInput = searchInputs[0];
      const initialSelect = categorySelects[0];
      if (initialInput && initialInput.value) {
        performFilter(initialInput.value, initialSelect ? initialSelect.value : 'all');
      }
    }
  };

  initServiceSearch();

  // 5. Interactive Consultation Cost Estimator Widget
  const estService = document.getElementById('calc-service'),
        estArea = document.getElementById('calc-area'),
        estUrgency = document.getElementById('calc-urgency'),
        estBtn = document.getElementById('calc-submit'),
        estResultBox = document.getElementById('calc-result');

  if (estService && estBtn && estResultBox) {
    const updateEstimate = () => {
      const sVal = estService.value || 'Umum';
      const aVal = estArea ? estArea.value : 'Temanggung';
      const uVal = estUrgency ? estUrgency.value : 'Standar';

      let range = 'Mulai Rp 150.000 – Rp 500.000 (Pendampingan & Berkas)';
      let days = '1–3 Hari Kerja';

      if (sVal.includes('Iklan') || sVal.includes('Ads')) {
        range = 'Mulai Rp 350.000 (Setup Akun & Copywriting) + Saldo Iklan';
        days = '1–2 Hari Setup';
      } else if (sVal.includes('Konsultasi')) {
        range = 'Mulai Rp 250.000 / sesi 90 menit (Tatap Muka / Online)';
        days = 'Sesuai Jadwal';
      } else if (sVal.includes('Notaris') || sVal.includes('Legalitas') || sVal.includes('Perizinan')) {
        range = 'Estimasi Penyiapan Rp 300.000 – Rp 1.500.000 + Biaya PNBP Resmi';
        days = '3–7 Hari Kerja';
      } else if (sVal.includes('Property')) {
        range = 'Fee Pendampingan & Survei Rp 250.000 – Rp 1.000.000';
        days = '2–5 Hari';
      } else if (sVal.includes('STNK')) {
        range = 'Jasa Administrasi Rp 75.000 – Rp 250.000 + Pajak Resmi PKB';
        days = '1 Hari Kerja';
      } else if (sVal.includes('Website')) {
        range = 'Mulai Rp 750.000 – Rp 2.500.000 (Termasuk Domain .com)';
        days = '3–5 Hari Kerja';
      }

      estResultBox.innerHTML = `
        <div style="font-size:12px;font-weight:800;color:var(--primary);text-transform:uppercase;margin-bottom:4px">Estimasi Rentang Awal:</div>
        <div style="font-size:18px;font-weight:800;color:var(--ink);margin-bottom:4px">${range}</div>
        <div style="font-size:13px;color:var(--muted)">Area: <strong>${aVal}</strong> • Waktu: <strong>${days}</strong> (${uVal})</div>
      `;
    };

    estService.addEventListener('change', updateEstimate);
    if (estArea) estArea.addEventListener('change', updateEstimate);
    if (estUrgency) estUrgency.addEventListener('change', updateEstimate);

    estBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const cfg = window.SITE_CONFIG || {};
      const num = cfg.whatsappNumber || '6281382000412';
      const sVal = estService.value || 'Layanan Jasa';
      const aVal = estArea ? estArea.value : 'Temanggung';
      const uVal = estUrgency ? estUrgency.value : 'Standar';

      const text = `Halo Jasa Temanggung, saya ingin konsultasi estimasi:\n\n• Layanan: ${sVal}\n• Area/Kecamatan: ${aVal}\n• Urgensi: ${uVal}\n\nMohon info detail alur dan langkah selanjutnya. Terima kasih!`;
      const waUrl = `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
    });

    updateEstimate();
  }

  // 6. Consultation Form Handling
  const form = document.querySelector('#consultation-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const cfg = window.SITE_CONFIG || {};
      const num = cfg.whatsappNumber || '6281382000412';

      const d = new FormData(form);
      const name = d.get('name') || '';
      const loc = d.get('location') || '';
      const service = d.get('service') || '';
      const message = d.get('message') || '';

      const text = `${cfg.whatsappMessage || 'Halo, saya ingin konsultasi mengenai '}${service}.\n\nNama: ${name}\nLokasi: ${loc}\nKebutuhan: ${message}`;
      const waUrl = `https://wa.me/${num}?text=${encodeURIComponent(text)}`;

      let feedback = document.querySelector('#form-feedback');
      if (!feedback) {
        feedback = document.createElement('div');
        feedback.id = 'form-feedback';
        form.appendChild(feedback);
      }
      feedback.style.display = 'block';
      feedback.style.marginTop = '18px';
      feedback.style.padding = '18px';
      feedback.style.borderRadius = '14px';
      feedback.style.background = '#edf4ff';
      feedback.style.border = '1px solid #cedcff';
      feedback.innerHTML = `
        <div style="font-weight:800;color:#1457d9;margin-bottom:6px">✓ Permintaan Konsultasi Diterima</div>
        <p style="margin:0 0 12px;font-size:14px;color:#3b4758">Layanan: <strong>${service}</strong><br>Pengirim: <strong>${name}</strong> (${loc || 'Temanggung'})</p>
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="display:inline-flex;padding:11px 20px;font-size:14px">Lanjut Buka Chat WhatsApp →</a>
      `;

      try {
        window.open(waUrl, '_blank');
      } catch (err) {
        console.log('Window popup blocked in iframe, link provided inline.', err);
      }
    });
  }

  // 7. Slick Testimonial Carousel & Review Submission Controller
  const track = document.getElementById('testiTrack');
  const prevBtn = document.getElementById('testiPrevBtn');
  const nextBtn = document.getElementById('testiNextBtn');
  const dotsContainer = document.getElementById('testiDots');
  const counterBadge = document.getElementById('testiCounterBadge');
  const counterText = document.getElementById('testiCounterText');
  const testiTabs = document.querySelectorAll('.testi-filter-btn');

  if (track) {
    const STORAGE_KEY = 'jasa_temanggung_user_reviews';

    // Helper to generate initials & avatar color
    const getAvatarInitials = (name) => {
      const parts = (name || '').trim().split(/\s+/).filter(Boolean);
      if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
      }
      return ((parts[0] || 'U').substring(0, 2)).toUpperCase();
    };

    const avatarColors = [
      { bg: '#dbeafe', text: '#1e40af' },
      { bg: '#d1fae5', text: '#065f46' },
      { bg: '#fef3c7', text: '#92400e' },
      { bg: '#f5f3ff', text: '#6b21a8' },
      { bg: '#e0e7ff', text: '#3730a3' },
      { bg: '#ccfbf1', text: '#0f766e' },
      { bg: '#e0f2fe', text: '#0369a1' },
      { bg: '#fce7f3', text: '#9d174d' }
    ];

    const getAvatarColor = (name) => {
      let hash = 0;
      for (let i = 0; i < (name || '').length; i++) {
        hash = (hash * 31 + name.charCodeAt(i)) % avatarColors.length;
      }
      return avatarColors[Math.abs(hash)];
    };

    const escapeHtml = (str) => {
      const div = document.createElement('div');
      div.textContent = str || '';
      return div.innerHTML;
    };

    // Create a card DOM element from review data
    const createReviewCardElement = (rev, isNew = false) => {
      const card = document.createElement('div');
      card.className = 'testimonial-card user-submitted-card';
      card.setAttribute('data-testi-category', rev.category || 'jasa');

      const color = getAvatarColor(rev.name);
      const initials = getAvatarInitials(rev.name);
      const rating = Math.min(5, Math.max(1, parseInt(rev.rating, 10) || 5));
      const starsStr = '★'.repeat(rating) + '☆'.repeat(5 - rating);

      card.innerHTML = `
        <div>
          <div class="testi-header">
            <div class="testi-stars">${starsStr}</div>
            <span class="testi-service-tag" style="color:#1d4ed8;background:#eff6ff">${escapeHtml(rev.serviceTag || 'Layanan Temanggung')}</span>
          </div>
          <p>“${escapeHtml(rev.text)}”</p>
        </div>
        <div class="testi-author">
          <div class="testi-avatar" style="background:${color.bg};color:${color.text}">${initials}</div>
          <div>
            <strong style="font-size:13px;display:block">${escapeHtml(rev.name)}</strong>
            <span style="font-size:12px;color:var(--muted)">${escapeHtml(rev.role || 'Klien Temanggung')}</span>
            <span class="testi-badge ${isNew ? 'new-badge' : ''}">✓ ${isNew ? 'Ulasan Baru Terverifikasi' : 'Klien Terverifikasi'}</span>
          </div>
        </div>
      `;
      return card;
    };

    // Load persisted user reviews from localStorage
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      if (Array.isArray(saved) && saved.length > 0) {
        // Prepend saved reviews in reverse order so latest is on top
        [...saved].reverse().forEach(rev => {
          const el = createReviewCardElement(rev, false);
          track.prepend(el);
        });
      }
    } catch (e) {
      console.warn('Could not load saved reviews', e);
    }

    let autoplayTimer = null;
    let isInteracting = false;

    const getAllCards = () => track.querySelectorAll('.testimonial-card');

    const getVisibleCards = () => {
      return [...getAllCards()].filter(c => c.style.display !== 'none');
    };

    const getCardWidth = () => {
      const visible = getVisibleCards();
      if (visible.length > 0) {
        return visible[0].offsetWidth + 20; // 20px gap
      }
      return 350;
    };

    const getItemsPerView = () => {
      const w = window.innerWidth;
      if (w < 640) return 1;
      if (w < 980) return 2;
      return 3;
    };

    const updateControls = () => {
      const visible = getVisibleCards();
      const perView = getItemsPerView();
      const totalPages = Math.max(1, Math.ceil(visible.length / perView));
      
      const scrollLeft = track.scrollLeft;
      const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
      const cardW = getCardWidth();
      
      const currentPage = Math.min(totalPages, Math.max(1, Math.round(scrollLeft / (cardW * perView)) + 1));

      if (counterBadge) {
        counterBadge.textContent = `${currentPage} / ${totalPages}`;
      }
      if (counterText) {
        counterText.textContent = `${visible.length} Ulasan Pelaku Bisnis & Warga`;
      }

      // Update dots
      if (dotsContainer) {
        dotsContainer.innerHTML = '';
        if (totalPages > 1) {
          for (let i = 1; i <= totalPages; i++) {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = `testi-dot ${i === currentPage ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Ke slide ulasan ${i}`);
            dot.onclick = () => {
              const targetScroll = (i - 1) * (cardW * perView);
              track.scrollTo({ left: targetScroll, behavior: 'smooth' });
            };
            dotsContainer.appendChild(dot);
          }
        }
      }

      // Arrows
      if (prevBtn) {
        prevBtn.disabled = scrollLeft <= 5;
      }
      if (nextBtn) {
        nextBtn.disabled = maxScroll > 0 && scrollLeft >= maxScroll - 5;
      }
    };

    // Slide navigation
    const slide = (direction) => {
      const cardW = getCardWidth();
      const perView = getItemsPerView();
      const scrollAmount = cardW * perView;
      const maxScroll = track.scrollWidth - track.clientWidth;

      if (direction === 'next') {
        if (maxScroll > 0 && track.scrollLeft >= maxScroll - 15) {
          track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (track.scrollLeft <= 15) {
          track.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      }
    };

    if (nextBtn) nextBtn.addEventListener('click', () => { slide('next'); restartAutoplay(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { slide('prev'); restartAutoplay(); });

    // Track scroll event
    let scrollTimeout;
    track.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateControls, 80);
    }, { passive: true });

    // Category Tabs Filtering
    if (testiTabs.length) {
      testiTabs.forEach(btn => {
        btn.addEventListener('click', () => {
          testiTabs.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const cat = btn.getAttribute('data-testi-filter');

          getAllCards().forEach(card => {
            if (cat === 'all' || card.getAttribute('data-testi-category') === cat) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });

          track.scrollTo({ left: 0, behavior: 'auto' });
          setTimeout(updateControls, 60);
          restartAutoplay();
        });
      });
    }

    // Autoplay functionality
    const startAutoplay = () => {
      stopAutoplay();
      autoplayTimer = setInterval(() => {
        if (!isInteracting && document.visibilityState === 'visible') {
          slide('next');
        }
      }, 5000);
    };

    const stopAutoplay = () => {
      if (autoplayTimer) clearInterval(autoplayTimer);
    };

    const restartAutoplay = () => {
      stopAutoplay();
      startAutoplay();
    };

    track.addEventListener('mouseenter', () => { isInteracting = true; });
    track.addEventListener('mouseleave', () => { isInteracting = false; });
    track.addEventListener('touchstart', () => { isInteracting = true; }, { passive: true });
    track.addEventListener('touchend', () => {
      isInteracting = false;
      restartAutoplay();
    }, { passive: true });

    window.addEventListener('resize', updateControls);

    // Initial trigger
    setTimeout(updateControls, 100);
    startAutoplay();

    // 7b. 'Berikan Ulasan Anda' Form Handler
    const reviewForm = document.getElementById('publicReviewForm');
    const reviewSuccessAlert = document.getElementById('reviewSuccessAlert');
    const reviewCloseAlertBtn = document.getElementById('reviewCloseAlertBtn');
    const starBtns = document.querySelectorAll('#starRatingWidget .star-btn');
    const ratingInput = document.getElementById('reviewRatingInput');
    const ratingLabel = document.getElementById('starRatingLabel');
    const reviewTextarea = document.getElementById('reviewTextarea');
    const charCounter = document.getElementById('reviewCharCounter');
    const shareWaBtn = document.getElementById('reviewShareWaBtn');

    if (reviewForm) {
      let currentRating = 5;

      const ratingDescriptions = {
        5: '★★★★★ (5.0 / 5.0 - Sangat Memuaskan)',
        4: '★★★★☆ (4.0 / 5.0 - Puas & Rekomendasi)',
        3: '★★★☆☆ (3.0 / 5.0 - Cukup Baik)',
        2: '★★☆☆☆ (2.0 / 5.0 - Kurang Memuaskan)',
        1: '★☆☆☆☆ (1.0 / 5.0 - Perlu Banyak Peningkatan)'
      };

      const setRating = (r) => {
        currentRating = r;
        if (ratingInput) ratingInput.value = r;
        if (ratingLabel) ratingLabel.textContent = ratingDescriptions[r] || `${r}.0 / 5.0`;

        starBtns.forEach(btn => {
          const val = parseInt(btn.getAttribute('data-rating'), 10);
          btn.classList.toggle('active', val <= currentRating);
        });
      };

      starBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const val = parseInt(btn.getAttribute('data-rating'), 10);
          setRating(val);
        });

        btn.addEventListener('mouseenter', () => {
          const val = parseInt(btn.getAttribute('data-rating'), 10);
          starBtns.forEach(b => {
            const bv = parseInt(b.getAttribute('data-rating'), 10);
            b.classList.toggle('active', bv <= val);
          });
        });
      });

      const starWidget = document.getElementById('starRatingWidget');
      if (starWidget) {
        starWidget.addEventListener('mouseleave', () => {
          setRating(currentRating);
        });
      }

      // Character counter
      if (reviewTextarea && charCounter) {
        reviewTextarea.addEventListener('input', () => {
          charCounter.textContent = `${reviewTextarea.value.length} / 400`;
        });
      }

      // WhatsApp Share Button
      if (shareWaBtn) {
        shareWaBtn.addEventListener('click', () => {
          const name = (document.getElementById('reviewAuthorName')?.value || '').trim();
          const role = (document.getElementById('reviewAuthorRole')?.value || '').trim();
          const serviceSelect = document.getElementById('reviewServiceCategory');
          const serviceName = serviceSelect?.options[serviceSelect.selectedIndex]?.text || '';
          const text = (reviewTextarea?.value || '').trim();

          const message = `Halo Jasa Temanggung, saya ingin mengirimkan ulasan layanan:\n\n*Nama:* ${name || '-'}\n*Usaha / Lokasi:* ${role || '-'}\n*Layanan:* ${serviceName || '-'}\n*Rating:* ${currentRating} Bintang (★★★★★)\n*Ulasan:* ${text || 'Sangat puas dengan layanan terpercaya di Temanggung'}`;

          const url = `https://wa.me/6281382000412?text=${encodeURIComponent(message)}`;
          window.open(url, '_blank', 'noopener,noreferrer');
        });
      }

      // Close alert button
      if (reviewCloseAlertBtn && reviewSuccessAlert) {
        reviewCloseAlertBtn.addEventListener('click', () => {
          reviewSuccessAlert.style.display = 'none';
        });
      }

      // Submit Form
      reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('reviewAuthorName');
        const roleInput = document.getElementById('reviewAuthorRole');
        const serviceSelect = document.getElementById('reviewServiceCategory');
        const consentCheckbox = document.getElementById('reviewConsent');

        const name = (nameInput?.value || '').trim();
        const role = (roleInput?.value || '').trim();
        const serviceCategory = serviceSelect?.value || '';
        const selectedOption = serviceSelect?.options[serviceSelect.selectedIndex];
        const categoryFilter = selectedOption?.getAttribute('data-cat') || 'jasa';
        const serviceTag = selectedOption?.getAttribute('data-tag') || 'Layanan Temanggung';
        const text = (reviewTextarea?.value || '').trim();

        if (!name || name.length < 2) {
          nameInput?.focus();
          return;
        }
        if (!role || role.length < 2) {
          roleInput?.focus();
          return;
        }
        if (!serviceCategory) {
          serviceSelect?.focus();
          return;
        }
        if (!text || text.length < 15) {
          reviewTextarea?.focus();
          return;
        }
        if (consentCheckbox && !consentCheckbox.checked) {
          consentCheckbox.focus();
          return;
        }

        const newReview = {
          id: 'rev_' + Date.now(),
          name,
          role,
          category: categoryFilter,
          serviceTag,
          rating: currentRating,
          text,
          createdAt: new Date().toISOString()
        };

        // 1. Prepend to DOM
        const newCard = createReviewCardElement(newReview, true);
        track.prepend(newCard);

        // 2. Persist in localStorage
        try {
          const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
          saved.unshift(newReview);
          if (saved.length > 25) saved.pop();
          localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
        } catch (err) {
          console.warn('Failed to save review to storage', err);
        }

        // 3. Reset category filter tab to 'all' so new card is visible
        if (testiTabs.length) {
          testiTabs.forEach(b => b.classList.remove('active'));
          const allBtn = document.querySelector('.testi-filter-btn[data-testi-filter="all"]');
          if (allBtn) allBtn.classList.add('active');
          getAllCards().forEach(c => { c.style.display = 'flex'; });
        }

        // 4. Update controls and scroll to first item
        updateControls();
        track.scrollTo({ left: 0, behavior: 'smooth' });
        restartAutoplay();

        // 5. Show success message
        if (reviewSuccessAlert) {
          reviewSuccessAlert.style.display = 'flex';
          reviewSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // 6. Reset form
        reviewForm.reset();
        setRating(5);
        if (charCounter) charCounter.textContent = '0 / 400';
      });
    }
  }

  // 8. Progressive Image Lazy Loading Optimizer for slow connections
  const lazyImages = document.querySelectorAll('img');
  lazyImages.forEach(img => {
    if (!img.getAttribute('loading')) img.setAttribute('loading', 'lazy');
    if (!img.getAttribute('decoding')) img.setAttribute('decoding', 'async');
  });

  if (!('loading' in HTMLImageElement.prototype) && 'IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '120px' });
    lazyImages.forEach(img => imgObserver.observe(img));
  }

  // 9. Newsletter Subscription Handler
  const newsForm = document.getElementById('newsletter-form');
  if (newsForm) {
    const emailInput = document.getElementById('newsletter-email');
    const nameInput = document.getElementById('newsletter-name');
    const interestSelect = document.getElementById('newsletter-interest');
    const msgBox = document.getElementById('newsletter-message');
    const submitBtn = document.getElementById('newsletter-submit-btn');

    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput ? emailInput.value.trim() : '';
      const name = nameInput ? nameInput.value.trim() : '';
      const interest = interestSelect ? interestSelect.value : 'Semua Panduan & Promo';

      // Validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        if (msgBox) {
          msgBox.className = '';
          msgBox.style.background = '#fef2f2';
          msgBox.style.color = '#991b1b';
          msgBox.style.border = '1px solid #fecaca';
          msgBox.textContent = 'Silakan masukkan alamat email yang valid.';
        }
        if (emailInput) emailInput.focus();
        return;
      }

      // Submit loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Mendaftarkan...';
      }

      // Simulate network save & local persistence
      setTimeout(() => {
        try {
          const subscribers = JSON.parse(localStorage.getItem('jasa_newsletter_subs') || '[]');
          subscribers.push({
            name: name || 'Sahabat Temanggung',
            email,
            interest,
            subscribedAt: new Date().toISOString()
          });
          localStorage.setItem('jasa_newsletter_subs', JSON.stringify(subscribers));
        } catch (_) {}

        if (msgBox) {
          msgBox.className = '';
          msgBox.style.background = '#ecfdf5';
          msgBox.style.color = '#065f46';
          msgBox.style.border = '1px solid #a7f3d0';
          msgBox.innerHTML = `✓ <strong>Pendaftaran Berhasil!</strong> Terima kasih ${name ? name : ''}, email <em>${email}</em> telah terdaftar untuk menerima update panduan & promo terbaru.`;
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Terdaftar ✓';
          setTimeout(() => {
            submitBtn.textContent = 'Langganan Sekarang (Gratis) →';
          }, 4000);
        }

        newsForm.reset();
      }, 500);
    });
  }

  // 10. Dynamic Real-Time Article Search & Category Filter
  const initArticleSearch = () => {
    const searchInput = document.getElementById('article-search-input');
    const categorySelect = document.getElementById('article-category-select');
    const articleCards = [...document.querySelectorAll('.article-hub-grid .article-card')];
    const countLabel = document.getElementById('article-count-label');
    const clearBtn = document.getElementById('clear-article-search-btn');
    const noResultsCard = document.getElementById('no-articles-found');
    const resetBtn = document.getElementById('reset-article-filter-btn');

    if (!searchInput && articleCards.length === 0) return;

    const performArticleFilter = () => {
      const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
      const selectedCategory = categorySelect ? categorySelect.value : 'all';
      const searchTerms = query ? query.split(/\s+/).filter(Boolean) : [];
      let visibleCount = 0;

      articleCards.forEach(card => {
        const badgeText = (card.querySelector('.article-badge')?.textContent || '').toLowerCase();
        const titleText = (card.querySelector('h3')?.textContent || '').toLowerCase();
        const descText = (card.querySelector('p')?.textContent || '').toLowerCase();
        const combinedText = `${card.dataset.search || ''} ${badgeText} ${titleText} ${descText}`;
        const cardCategory = card.dataset.category || '';

        const matchesCategory = selectedCategory === 'all' || cardCategory === selectedCategory;
        const matchesQuery = searchTerms.length === 0 || searchTerms.every(term => combinedText.includes(term));

        const isVisible = matchesCategory && matchesQuery;
        card.classList.toggle('hidden', !isVisible);
        if (isVisible) visibleCount++;
      });

      // Update count label
      if (countLabel) {
        if (searchTerms.length > 0 || selectedCategory !== 'all') {
          countLabel.textContent = `Menampilkan ${visibleCount} dari ${articleCards.length} artikel yang cocok.`;
        } else {
          countLabel.textContent = `Menampilkan semua ${articleCards.length} artikel dan panduan.`;
        }
      }

      // Show/hide clear button
      if (clearBtn) {
        clearBtn.classList.toggle('hidden', !query && selectedCategory === 'all');
      }

      // Show/hide empty state
      if (noResultsCard) {
        noResultsCard.classList.toggle('hidden', visibleCount > 0);
      }
    };

    if (searchInput) {
      searchInput.addEventListener('input', performArticleFilter);
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          searchInput.value = '';
          performArticleFilter();
        }
      });
    }

    if (categorySelect) {
      categorySelect.addEventListener('change', performArticleFilter);
    }

    const resetArticleFilters = () => {
      if (searchInput) searchInput.value = '';
      if (categorySelect) categorySelect.value = 'all';
      performArticleFilter();
      if (searchInput) searchInput.focus();
    };

    if (clearBtn) clearBtn.addEventListener('click', resetArticleFilters);
    if (resetBtn) resetBtn.addEventListener('click', resetArticleFilters);

    // Initial run
    if (searchInput && searchInput.value) {
      performArticleFilter();
    }
  };

  initArticleSearch();

  // 12. Service Comparison Table Filter
  const tableFilterBtns = document.querySelectorAll('.comparison-filter-btn');
  const tableRows = document.querySelectorAll('#servicesComparisonTable tbody tr');
  if (tableFilterBtns.length && tableRows.length) {
    tableFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tableFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-table-filter');
        tableRows.forEach(row => {
          if (filter === 'all' || row.getAttribute('data-table-cat') === filter) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        });
      });
    });
  }

  // 13. Safe Google AdSense Slot Initialization
  const safeInitAds = () => {
    document.querySelectorAll('ins.adsbygoogle').forEach(ins => {
      if (!ins.hasAttribute('data-adsbygoogle-status') && ins.offsetWidth > 0) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {}
      }
    });
  };
  window.addEventListener('load', safeInitAds);
  window.addEventListener('resize', safeInitAds);
});
