// ─── SERVICE ACCORDION ──────────────────────────────
function toggleService(el) {
  const isActive = el.classList.contains('active');
  document.querySelectorAll('.service-item').forEach(i => i.classList.remove('active'));
  if (!isActive) el.classList.add('active');
}

// ─── SCROLL REVEAL ───────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.skill-card, .cert-card, .project-card, .edu-card, .intern-card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ─── ACTIVE NAV LINK ON SCROLL ───────────────────────
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});