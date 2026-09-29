document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // 2. Mobile Menu Toggle
  const t = document.querySelector('.menu-toggle'),
        n = document.querySelector('.nav-links');
  if (t && n) {
    t.onclick = () => {
      const o = n.classList.toggle('open');
      t.setAttribute('aria-expanded', o ? 'true' : 'false');
    };
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

    // Initial check (handles prefilled query if any)
    const initialInput = searchInputs[0];
    const initialSelect = categorySelects[0];
    if (initialInput && initialInput.value) {
      performFilter(initialInput.value, initialSelect ? initialSelect.value : 'all');
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

  // 7. Slick Testimonial Carousel & Filter Controller
  const track = document.getElementById('testiTrack');
  const prevBtn = document.getElementById('testiPrevBtn');
  const nextBtn = document.getElementById('testiNextBtn');
  const dotsContainer = document.getElementById('testiDots');
  const counterBadge = document.getElementById('testiCounterBadge');
  const counterText = document.getElementById('testiCounterText');
  const testiTabs = document.querySelectorAll('.testi-filter-btn');
  const allCards = document.querySelectorAll('#testiTrack .testimonial-card');

  if (track && allCards.length) {
    let autoplayTimer = null;
    let isInteracting = false;

    const getVisibleCards = () => {
      return [...allCards].filter(c => c.style.display !== 'none');
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
        counterText.textContent = `${visible.length} Ulasan Terverifikasi`;
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

          allCards.forEach(card => {
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
});
