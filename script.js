/* ============================================================
   Miguel Angel López Rendón — CV Script
   Libraries: tsParticles 2, GSAP 3 + ScrollTrigger
   ============================================================ */

/* ── Theme ── */
const html       = document.documentElement;
const themeBtn   = document.getElementById('themeToggle');
const themeIcon  = document.getElementById('themeIcon');

function applyTheme(theme) {
  html.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  if (theme === 'light') {
    themeIcon.className = 'fa-solid fa-moon';
  } else {
    themeIcon.className = 'fa-solid fa-sun';
  }
}

(function initTheme() {
  const saved = localStorage.getItem('theme');
  const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  applyTheme(saved || preferred);
})();

themeBtn.addEventListener('click', () => {
  applyTheme(html.dataset.theme === 'dark' ? 'light' : 'dark');
});

/* ── Mobile nav ── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('open');
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
  });
});

/* ── Navbar scroll glass effect ── */
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 20);
  lastScroll = y;
}, { passive: true });

/* ── Active nav link tracking ── */
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinkEls.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* ── tsParticles ── */
if (typeof tsParticles !== 'undefined') {
  tsParticles.load('particles-js', {
    fullScreen: { enable: false },
    fpsLimit: 60,
    particles: {
      number: { value: 55, density: { enable: true, area: 900 } },
      color: { value: '#00b4ff' },
      opacity: {
        value: 0.22,
        random: { enable: true, minimumValue: 0.08 },
      },
      size: {
        value: { min: 1, max: 3 },
        random: true,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: 'none',
        random: true,
        straight: false,
        outModes: 'out',
      },
      links: {
        enable: true,
        color: '#00b4ff',
        opacity: 0.10,
        distance: 130,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
        onClick: { enable: false },
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.25 } },
      },
    },
    detectRetina: true,
  });
}

/* ── GSAP + ScrollTrigger ── */
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  /* Hero entrance — stagger in elements */
  const heroAnims = document.querySelectorAll('.hero [data-anim="fade-up"]');
  const heroVisual = document.querySelector('.hero-visual');

  gsap.fromTo(heroAnims,
    { opacity: 0, y: 30 },
    {
      opacity: 1, y: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.12,
      delay: 0.2,
      onComplete: () => heroAnims.forEach(el => el.removeAttribute('data-anim')),
    }
  );

  if (heroVisual) {
    gsap.fromTo(heroVisual,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.4 }
    );
  }

  /* Scroll hint fade-in then fade-out once */
  const scrollHint = document.querySelector('.scroll-hint');
  if (scrollHint) {
    gsap.to(scrollHint, {
      opacity: 0.5, duration: 1, delay: 1.8, ease: 'power2.out',
      onComplete: () => {
        gsap.to(scrollHint, { opacity: 0, duration: 0.6, delay: 2.5, ease: 'power2.in' });
      }
    });
  }

  /* Generic scroll reveals for non-hero sections */
  document.querySelectorAll(':not(.hero) [data-anim="fade-up"]').forEach((el, i) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.fromTo(el,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: i % 4 * 0.07 }
        );
        el.removeAttribute('data-anim');
      }
    });
  });

  document.querySelectorAll('[data-anim="fade-right"]').forEach((el, i) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.fromTo(el,
          { opacity: 0, x: -24 },
          { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out', delay: i * 0.08 }
        );
        el.removeAttribute('data-anim');
      }
    });
  });

  document.querySelectorAll('[data-anim="slide-left"]').forEach(el => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.fromTo(el,
          { opacity: 0, x: 36 },
          { opacity: 1, x: 0, duration: 0.85, ease: 'power2.out' }
        );
        el.removeAttribute('data-anim');
      }
    });
  });

  /* Skill tags stagger on scroll */
  document.querySelectorAll('.skill-group').forEach(group => {
    const tags = group.querySelectorAll('.stag, .lang-item');
    ScrollTrigger.create({
      trigger: group,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.fromTo(tags,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', stagger: 0.04 }
        );
      }
    });
  });

  /* Language bar fill animation */
  document.querySelectorAll('.lang-fill').forEach(bar => {
    const target = bar.dataset.fill;
    ScrollTrigger.create({
      trigger: bar,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(bar, { width: target + '%', duration: 1.2, ease: 'power2.out' });
      }
    });
  });

  /* Stat counter animation */
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: target,
          duration: 1.4,
          ease: 'power2.out',
          onUpdate: function() {
            el.textContent = Math.round(this.targets()[0].val);
          }
        });
      }
    });
  });

  /* Parallax on hero text (subtle) */
  gsap.to('.hero-text', {
    yPercent: -8,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });

  /* Browser mockup entrance */
  const mockup = document.querySelector('.browser-mockup');
  if (mockup) {
    ScrollTrigger.create({
      trigger: mockup,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.fromTo(mockup,
          { opacity: 0, y: 30, rotateY: 8 },
          { opacity: 1, y: 0, rotateY: 0, duration: 1, ease: 'power3.out' }
        );
      }
    });
  }

  /* Timeline items stagger */
  document.querySelectorAll('.tl-item').forEach((item, i) => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top 87%',
      once: true,
      onEnter: () => {
        gsap.fromTo(item,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.65, ease: 'power2.out', delay: i * 0.1 }
        );
        item.removeAttribute('data-anim');
      }
    });
  });

  /* Refresh on font load */
  document.fonts.ready.then(() => ScrollTrigger.refresh());

} else {
  /* Fallback: just show everything if GSAP didn't load */
  document.querySelectorAll('[data-anim]').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}

/* ── Smooth active class for nav logo ── */
document.querySelector('.nav-logo').addEventListener('click', () => {
  navLinkEls.forEach(l => l.classList.remove('active'));
});
