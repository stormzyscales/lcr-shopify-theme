/* LCR Global JS */

// Header scroll behaviour
(function () {
  const header = document.getElementById('lcr-header');
  if (!header) return;
  let last = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 60);
    header.classList.toggle('is-hidden', y > 200 && y > last);
    last = y;
  }, { passive: true });
})();

// Mobile nav toggle
(function () {
  const toggle = document.getElementById('lcr-nav-toggle');
  const nav    = document.getElementById('lcr-nav-drawer');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
    document.body.classList.toggle('nav-open', open);
  });
})();

// Intersection observer — reveal on scroll
(function () {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();
