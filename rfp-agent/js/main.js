/* ================================================
   RFP AGENT - Main JavaScript
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollProgress();
  initScrollAnimations();
  initParticles();
  initCounters();
  initMobileNav();
  initTypingEffect();
  initDemoBar();
  initFormSubmit();
});

/* --- Navbar scroll effect --- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Highlight active nav link based on current page
  const links = document.querySelectorAll('.nav-links a');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* --- Scroll progress bar --- */
function initScrollProgress() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    bar.style.width = progress + '%';
  }, { passive: true });
}

/* --- Intersection Observer for scroll animations --- */
function initScrollAnimations() {
  const els = document.querySelectorAll('.animate-on-scroll');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* --- Floating particles in hero --- */
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (Math.random() * 15 + 10) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    p.style.width = p.style.height = (Math.random() * 3 + 1) + 'px';
    p.style.opacity = (Math.random() * 0.5 + 0.1).toString();
    container.appendChild(p);
  }
}

/* --- Counter animation --- */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const duration = 2000;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = eased * target;
          el.textContent = prefix + (Number.isInteger(target) ? Math.round(current) : current.toFixed(1)) + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* --- Mobile nav --- */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const closeBtn = document.getElementById('mobile-nav-close');

  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  function closeMobileNav() {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeMobileNav);

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });
}

/* --- Typing effect in hero --- */
function initTypingEffect() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const phrases = [
    'Win More RFPs',
    'Save 70% Time',
    'Impress Every Client',
    'Close More Deals',
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPausing = false;

  function type() {
    const phrase = phrases[phraseIndex];

    if (isPausing) {
      isPausing = false;
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }

    if (!isDeleting) {
      charIndex++;
      el.textContent = phrase.slice(0, charIndex);
      if (charIndex === phrase.length) {
        isPausing = true;
        setTimeout(type, 80);
      } else {
        setTimeout(type, 80);
      }
    } else {
      charIndex--;
      el.textContent = phrase.slice(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 400);
      } else {
        setTimeout(type, 40);
      }
    }
  }

  type();
}

/* --- Demo bar dismiss --- */
function initDemoBar() {
  const bar = document.getElementById('demo-bar');
  const closeBtn = document.getElementById('demo-bar-close');
  if (!bar || !closeBtn) return;

  closeBtn.addEventListener('click', () => {
    bar.style.height = bar.offsetHeight + 'px';
    requestAnimationFrame(() => {
      bar.style.transition = 'height 0.3s ease, opacity 0.3s ease';
      bar.style.height = '0';
      bar.style.opacity = '0';
      bar.style.overflow = 'hidden';
    });
  });
}

/* --- Form submission --- */
function initFormSubmit() {
  const form = document.getElementById('demo-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const originalText = btn.textContent;

    btn.disabled = true;
    btn.textContent = 'Sending...';

    setTimeout(() => {
      btn.textContent = '✓ Request Sent!';
      btn.style.background = '#10B981';
      form.querySelectorAll('input, textarea, select').forEach(i => i.value = '');

      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = originalText;
        btn.style.background = '';
      }, 3000);
    }, 1800);
  });
}

/* --- Tab functionality (reusable) --- */
function initTabs(groupId) {
  const group = document.getElementById(groupId);
  if (!group) return;

  const tabs = group.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll(`[data-panel-group="${groupId}"]`);

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.tab;
      panels.forEach(p => {
        p.style.display = p.dataset.panel === target ? 'block' : 'none';
      });
    });
  });
}

/* --- Pricing toggle (monthly/annual) --- */
function initPricingToggle() {
  const toggle = document.getElementById('pricing-toggle');
  if (!toggle) return;

  const prices = {
    monthly: { starter: 49, pro: 149, enterprise: 399 },
    annual: { starter: 39, pro: 119, enterprise: 319 },
  };

  toggle.addEventListener('change', () => {
    const period = toggle.checked ? 'annual' : 'monthly';
    document.querySelectorAll('[data-price]').forEach(el => {
      const tier = el.dataset.price;
      el.textContent = prices[period][tier];
    });
    const label = document.getElementById('billing-label');
    if (label) label.textContent = toggle.checked ? 'Billed Annually' : 'Billed Monthly';
  });
}

window.initTabs = initTabs;
window.initPricingToggle = initPricingToggle;
