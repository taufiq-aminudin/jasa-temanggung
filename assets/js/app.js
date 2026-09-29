document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  const t = document.querySelector('.menu-toggle'),
        n = document.querySelector('.nav-links');
  if (t && n) {
    t.onclick = () => {
      const o = n.classList.toggle('open');
      t.setAttribute('aria-expanded', o ? 'true' : 'false');
    };
  }

  document.querySelectorAll('.faq-q').forEach(b => {
    b.onclick = () => b.closest('.faq-item').classList.toggle('open');
  });

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
      if (note) note.textContent = `Menampilkan ${z} layanan.`;
    };
    s.addEventListener('input', f);
    if (sel) sel.addEventListener('change', f);
    f();
  }

  const form = document.querySelector('#consultation-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const cfg = window.SITE_CONFIG || {};
      const num = cfg.whatsappNumber || '6281220002026';

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
        <div style="font-weight:800;color:#1457d9;margin-bottom:8px">✓ Pesan Konsultasi Siap Dikirim</div>
        <p style="margin:0 0 12px;font-size:14px;color:#3b4758">Layanan: <strong>${service}</strong><br>Pengirim: <strong>${name}</strong> (${loc || 'Temanggung'})</p>
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="display:inline-flex;padding:10px 18px;font-size:13px">Lanjutkan Chat WhatsApp →</a>
      `;

      try {
        window.open(waUrl, '_blank');
      } catch (err) {
        console.log('Popup handled gracefully.', err);
      }
    });
  }
});
