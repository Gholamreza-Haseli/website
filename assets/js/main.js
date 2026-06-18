/* ============================================================
   ISDA — International Society of Decision Analytics
   main.js  |  Navigation, Tabs, Accordion, Forms, Newsletter
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Mobile nav toggle ── */
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav   = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open);
    });
  }

  /* ── Mobile: dropdown click ── */
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.main-nav > li > a.has-children').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdown = link.nextElementSibling;
        if (dropdown) dropdown.classList.toggle('open');
      });
    });
  }

  /* ── Sticky header shadow ── */
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 30
        ? '0 4px 20px rgba(11,31,58,.15)'
        : '0 2px 12px rgba(11,31,58,.08)';
    }, { passive: true });
  }

  /* ── Active nav link ── */
  const currentPath = window.location.pathname;
  document.querySelectorAll('.main-nav a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.closest('li')?.classList.add('active');
    }
  });

  /* ── Tabs ── */
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    const buttons = tabGroup.querySelectorAll('.tab-btn');
    const panels  = tabGroup.nextElementSibling?.querySelectorAll('.tab-panel')
                 || document.querySelectorAll('.tab-panel');

    buttons.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-selected','true');
        panels.forEach(p => p.classList.remove('active'));
        const target = document.getElementById(btn.dataset.tab);
        if (target) target.classList.add('active');
      });
    });
    if (buttons[0]) buttons[0].click();
  });

  /* ── Accordion ── */
  document.querySelectorAll('.accordion__trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      const panel  = trigger.nextElementSibling;
      // Close all
      document.querySelectorAll('.accordion__trigger').forEach(t => {
        t.setAttribute('aria-expanded', 'false');
        t.nextElementSibling?.classList.remove('open');
      });
      if (!isOpen) {
        trigger.setAttribute('aria-expanded', 'true');
        panel?.classList.add('open');
      }
    });
  });

  /* ── Newsletter form ── */
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const btn   = form.querySelector('button');
      if (!input?.value) return;

      const origText = btn.textContent;
      btn.textContent = 'Subscribing…';
      btn.disabled = true;

      await new Promise(r => setTimeout(r, 900)); // simulate API

      btn.textContent = '✓ Subscribed!';
      btn.style.background = '#22913A';
      input.value = '';
      setTimeout(() => {
        btn.textContent = origText;
        btn.style.background = '';
        btn.disabled = false;
      }, 3500);
    });
  });

  /* ── Registration / membership form ── */
  const regForm = document.getElementById('registration-form');
  if (regForm) {
    regForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = regForm.querySelector('button[type="submit"]');
      const origText = btn.textContent;
      btn.textContent = 'Processing…';
      btn.disabled = true;

      await new Promise(r => setTimeout(r, 1200));

      const success = document.getElementById('reg-success');
      if (success) { regForm.style.display = 'none'; success.style.display = 'block'; }
      else { btn.textContent = '✓ Application Submitted!'; }
    });
  }

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 90;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── Count-up animation for stats ── */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el  = entry.target;
          const end = parseInt(el.dataset.count, 10);
          const dur = 1800;
          const step = end / (dur / 16);
          let cur = 0;
          const tick = () => {
            cur = Math.min(cur + step, end);
            el.textContent = Math.round(cur).toLocaleString() + (el.dataset.suffix || '');
            if (cur < end) requestAnimationFrame(tick);
          };
          tick();
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    counters.forEach(c => observer.observe(c));
  }

  /* ── Fade-in on scroll ── */
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(el => io.observe(el));
  }

  /* ── Search box toggle ── */
  const searchToggle = document.querySelector('.search-toggle');
  const searchBox    = document.querySelector('.search-box');
  if (searchToggle && searchBox) {
    searchToggle.addEventListener('click', () => {
      searchBox.classList.toggle('open');
      if (searchBox.classList.contains('open')) searchBox.querySelector('input')?.focus();
    });
  }

});

/* ── Utility: email validation ── */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ── Utility: format date ── */
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
