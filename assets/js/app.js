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

  // 4. Service Directory Search & Category Filter
  const s = document.querySelector('[data-service-search]'),
        sel = document.querySelector('.finder select'),
        c = [...document.querySelectorAll('.service-card[data-search]')],
        note = document.querySelector('[data-results-note]');
  if (s) {
    const f = () => {
      const q = s.value.toLowerCase().trim(),
            cat = sel ? sel.value : 'all';
      let z = 0;
      c.forEach(x => {
        const ok = (!q || x.dataset.search.includes(q)) && (cat === 'all' || x.dataset.category === cat);
        x.classList.toggle('hidden', !ok);
        if (ok) z++;
      });
      if (note) note.textContent = `Menampilkan ${z} dari ${c.length} layanan yang tersedia.`;
    };
    s.addEventListener('input', f);
    if (sel) sel.addEventListener('change', f);
    f();
  }

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
});
