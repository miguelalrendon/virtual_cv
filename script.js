/* ============================================================
   Miguel Angel López Rendón — CV Script
   Libraries: tsParticles 2, GSAP 3 + ScrollTrigger
   ============================================================ */

/* ── Translations ── */
const i18n = {
  es: {
    /* Navigation */
    'nav.home':     'Inicio',
    'nav.about':    'Sobre mí',
    'nav.exp':      'Experiencia',
    'nav.skills':   'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact':  'Contacto',

    /* Hero */
    'hero.badge':     'Disponible para nuevas oportunidades',
    'hero.role.arch': 'Arquitectura',
    'hero.pitch':     'Construyo sistemas con propósito &mdash; escalables, eficientes<br class="br-desktop"> y preparados para evolucionar.',
    'hero.cta1':      'Ver experiencia',
    'hero.cta2':      'Contactar',

    /* About */
    'about.title': 'Sobre mí',
    'about.lead':  'No me interesa ser el desarrollador que hace que las cosas funcionen. Me interesa ser el que entiende <em>por qu&eacute;</em> funcionan y <em>c&oacute;mo</em> pueden hacerlo mejor.',
    'about.p2':    'Cada tecnolog&iacute;a nueva no me genera ansiedad &mdash; me genera curiosidad. Aprendo r&aacute;pido porque aprendo con prop&oacute;sito. No colecciono conocimiento; lo integro donde tiene sentido real.',
    'about.p3':    'Trabajo con mentalidad de arquitecto: no basta con que el c&oacute;digo funcione hoy. Tiene que resistir el ma&ntilde;ana. Eso implica decisiones informadas, abstracciones correctas y la disposici&oacute;n de cuestionar lo establecido cuando corresponde.',
    'about.p4':    'La IA no es un atajo &mdash; es un multiplicador de capacidad. La integro como parte natural de mi flujo de trabajo para entregar m&aacute;s sin sacrificar el criterio t&eacute;cnico.',
    'about.stat1': 'A&ntilde;os en producci&oacute;n real',
    'about.stat2': 'Empresas en entorno profesional',
    'about.stat3': 'Tecnolog&iacute;as dominadas',
    'about.stat4': 'Disposici&oacute;n de aprendizaje',

    /* Experience */
    'exp.title':    'Experiencia Laboral',
    'exp.subtitle': 'M&aacute;s de 2 a&ntilde;os construyendo soluciones en entornos de producci&oacute;n real',
    'exp.current':  'Actual',
    'exp.fullstack': 'Desarrollador Fullstack',
    'exp.mobile':   'Desarrollador M&oacute;vil',

    'exp.reyma.period': 'Jul 2024 &mdash; Actualidad',
    'exp.reyma.d1': 'Desarrollo de aplicaciones empresariales con <strong>DevExpress</strong>, <strong>.NET Core 8</strong> y <strong>.NET Framework 4</strong> para los sistemas centrales de Grupo Reyes.',
    'exp.reyma.d2': 'Implementaci&oacute;n de interfaces modernas con <strong>Blazor</strong>, participando en la migraci&oacute;n de m&oacute;dulos legacy hacia arquitecturas contempor&aacute;neas.',
    'exp.reyma.d3': 'Optimizaci&oacute;n de flujos de trabajo e integraci&oacute;n de <strong>IA en el ciclo de desarrollo</strong> para mejorar la eficiencia y la arquitectura de los sistemas internos.',
    'exp.reyma.d4': 'Colaboraci&oacute;n en equipo bajo <strong>metodolog&iacute;a &aacute;gil</strong> con foco en entrega continua y calidad sostenible.',

    'exp.reyval.period': 'Mar 2024 &mdash; Jun 2024',
    'exp.reyval.d1': 'Redise&ntilde;o y modernizaci&oacute;n de sistemas existentes usando <strong>Laravel</strong> y <strong>VueJS</strong> bajo arquitectura MVC, priorizando escalabilidad y mantenibilidad a largo plazo.',
    'exp.reyval.d2': 'Migraci&oacute;n activa de m&oacute;dulos legacy hacia soluciones modernas dentro del ecosistema Laravel.',
    'exp.reyval.d3': 'Gesti&oacute;n y optimizaci&oacute;n de consultas en bases de datos relacionales con <strong>SQL Server</strong>.',

    'exp.itsmart.period': 'Ene 2023 &mdash; Feb 2024',
    'exp.itsmart.d1': 'Desarrollo de aplicaciones Android nativas como <strong>desarrollador principal</strong>, tomando decisiones t&eacute;cnicas de dise&ntilde;o, arquitectura y entrega.',
    'exp.itsmart.d2': 'Implementaci&oacute;n de funcionalidades complejas con <strong>Java</strong> y el ecosistema <strong>Android SDK</strong>.',
    'exp.itsmart.d3': 'Gesti&oacute;n completa del ciclo de vida de aplicaciones corporativas internas.',

    /* Skills */
    'skills.title':    'Habilidades T&eacute;cnicas',
    'skills.subtitle': 'Ecosistemas que domino &mdash; herramientas que aprovecho',
    'skills.cat.lang':  'Lenguajes',
    'skills.cat.fw':    'Frameworks &amp; Plataformas',
    'skills.cat.db':    'Bases de Datos',
    'skills.cat.arch':  'Arquitectura &amp; Pr&aacute;cticas',
    'skills.cat.ai':    'IA &amp; Productividad',
    'skills.cat.langs': 'Idiomas',
    'skills.ai.desc':   'Integro IA de forma estrat&eacute;gica como parte natural del flujo de desarrollo &mdash; no como sustituto del criterio t&eacute;cnico, sino como multiplicador de eficiencia. Tengo experiencia en la creaci&oacute;n de <strong>agentes para GitHub Copilot</strong> y <strong>Claude Code</strong>, optimizados para proyectos reales, acelerando tareas y mejorando la calidad del output generado.',

    /* Languages */
    'lang.es.name':  'Espa&ntilde;ol',
    'lang.en.name':  'Ingl&eacute;s',
    'lang.jp.name':  'Japon&eacute;s',
    'lang.native':   'Nativo',
    'lang.en.level': 'B1 &mdash; Lectura t&eacute;cnica fluida',
    'lang.jp.level': 'A1 &mdash; B&aacute;sico',

    /* Projects */
    'proj.title':    'Proyecto Destacado',
    'proj.subtitle': 'Construido por convicci&oacute;n, no por requisito',
    'proj.label':    'Proyecto personal &mdash; t&eacute;cnico y creativo',
    'proj.desc':     'Plataforma de serializaci&oacute;n de novela original de superh&eacute;roes &mdash; dise&ntilde;ada, desarrollada y mantenida de forma completamente independiente. Un espacio donde las decisiones de arquitectura son tomadas con criterio propio, sin supervisi&oacute;n y bajo condiciones reales.',
    'proj.story':    'Lo que comenz&oacute; como un proyecto creativo se convirti&oacute; en un laboratorio t&eacute;cnico de pila completa: frontend est&aacute;tico, dashboard de contenido y API propia. Cada capa elegida con intenci&oacute;n. El stack refleja decisiones arquitect&oacute;nicas deliberadas, no elecciones por defecto.',
    'proj.h1':       '<strong>Astro</strong> &mdash; Frontend est&aacute;tico con m&aacute;ximo rendimiento',
    'proj.h2':       '<strong>VueJS</strong> &mdash; Dashboard de gesti&oacute;n de contenido',
    'proj.h3':       '<strong>Flask + Python</strong> &mdash; API REST propia',
    'proj.h4':       'Autor de la historia serializada',
    'proj.btn':      'Visitar Galurian.com',

    /* Education */
    'edu.title': 'Formaci&oacute;n',
    'edu.deg1':  'Ingenier&iacute;a en Desarrollo y Gesti&oacute;n de Software',
    'edu.deg2':  'TSU en Desarrollo de Software Multiplataforma',

    /* Contact */
    'contact.title':    'Hablemos',
    'contact.subtitle': 'Abierto a oportunidades donde la arquitectura, la calidad t&eacute;cnica y el crecimiento importan.',
    'contact.email':    'Correo',
    'contact.phone':    'Tel&eacute;fono',

    /* Footer */
    'footer.by':  'Dise&ntilde;ado y desarrollado por <strong>Miguel Angel L&oacute;pez Rend&oacute;n</strong>',
    'footer.sub': 'HTML &middot; CSS &middot; JavaScript &mdash; sin frameworks, sin atajos.',

    /* Floating button */
    'fab.label': 'CV PDF',

    /* Print CV — Section titles */
    'pc.header.title': 'Ingeniero en Desarrollo y Gesti&oacute;n de Software &nbsp;&middot;&nbsp; Fullstack Developer &nbsp;&middot;&nbsp; Arquitectura &nbsp;&middot;&nbsp; IA',
    'pc.perfil.title': 'Perfil',
    'pc.perfil.body':  'Desarrollador fullstack con m&aacute;s de 2 a&ntilde;os de experiencia en entornos de producci&oacute;n real. Especializado en ecosistemas .NET y Laravel, con enfoque en arquitectura limpia y principios SOLID. Integra IA de forma estrat&eacute;gica como multiplicador de eficiencia. Aprende r&aacute;pido y con prop&oacute;sito; siempre orientado hacia soluciones escalables y sostenibles.',
    'pc.skills.title': 'Habilidades',
    'pc.skill.cat1':   'Lenguajes',
    'pc.skill.cat2':   'Frameworks',
    'pc.skill.cat3':   'Bases de datos',
    'pc.skill.cat4':   'Pr&aacute;cticas',
    'pc.skill.cat5':   'IA &amp; Agentes',
    'pc.lang.title':   'Idiomas',
    'pc.lang.es.name': 'Espa&ntilde;ol',
    'pc.lang.en.name': 'Ingl&eacute;s',
    'pc.lang.jp.name': 'Japon&eacute;s',
    'pc.lang.native':  'Nativo',
    'pc.lang.en.lvl':  'B1 &mdash; Documentaci&oacute;n t&eacute;cnica fluida',
    'pc.lang.jp.lvl':  'A1 &mdash; B&aacute;sico',
    'pc.proj.title':   'Proyecto Destacado',
    'pc.proj.body':    'Plataforma propia de novela serial &mdash; desarrollada y escrita de forma independiente. Pila completa con decisiones arquitect&oacute;nicas propias orientadas al aprendizaje real.',
    'pc.proj.stack':   'Astro &nbsp;&middot;&nbsp; VueJS (dashboard) &nbsp;&middot;&nbsp; Flask + Python (API REST)',
    'pc.exp.title':    'Experiencia Laboral',
    'pc.job1.period':  'Jul 2024 &ndash; Actualidad',
    'pc.job1.d1':      'Desarrollo empresarial con <strong>.NET Core 8</strong>, <strong>Blazor</strong> y <strong>DevExpress</strong> para los sistemas de Grupo Reyes.',
    'pc.job1.d2':      'Migraci&oacute;n de m&oacute;dulos legacy e integraci&oacute;n de IA en el ciclo de desarrollo para optimizar flujos y mejorar la arquitectura.',
    'pc.job1.d3':      'Trabajo en equipo bajo metodolog&iacute;a &aacute;gil con foco en entrega continua y calidad sostenible.',
    'pc.job2.d1':      'Modernizaci&oacute;n de sistemas con <strong>Laravel</strong> y <strong>VueJS</strong> bajo arquitectura MVC, priorizando escalabilidad y mantenibilidad.',
    'pc.job2.d2':      'Migraci&oacute;n de m&oacute;dulos legacy y optimizaci&oacute;n de consultas en <strong>SQL Server</strong>.',
    'pc.job3.period':  'Ene 2023 &ndash; Feb 2024',
    'pc.job3.d1':      'Desarrollo Android nativo como <strong>desarrollador principal</strong> &mdash; arquitectura, implementaci&oacute;n y entrega de aplicaciones corporativas.',
    'pc.job3.d2':      'Ciclo de vida completo con <strong>Java</strong> y el ecosistema <strong>Android SDK</strong>.',
    'pc.edu.title':    'Formaci&oacute;n',
  },

  en: {
    /* Navigation */
    'nav.home':     'Home',
    'nav.about':    'About',
    'nav.exp':      'Experience',
    'nav.skills':   'Skills',
    'nav.projects': 'Projects',
    'nav.contact':  'Contact',

    /* Hero */
    'hero.badge':     'Available for new opportunities',
    'hero.role.arch': 'Architecture',
    'hero.pitch':     'I build systems with purpose &mdash; scalable, efficient,<br class="br-desktop"> and ready to evolve.',
    'hero.cta1':      'View experience',
    'hero.cta2':      'Get in touch',

    /* About */
    'about.title': 'About me',
    'about.lead':  "I'm not interested in being the developer who makes things work. I'm interested in being the one who understands <em>why</em> they work and <em>how</em> they can work better.",
    'about.p2':    "Every new technology doesn't generate anxiety &mdash; it generates curiosity. I learn fast because I learn with purpose. I don't collect knowledge; I apply it where it actually matters.",
    'about.p3':    "I work with an architect's mindset: code must do more than work today &mdash; it has to hold up tomorrow. That means informed decisions, correct abstractions, and the willingness to question conventions when they deserve to be questioned.",
    'about.p4':    "AI isn't a shortcut &mdash; it's a capacity multiplier. I integrate it as a natural part of my workflow to deliver more without sacrificing technical judgment.",
    'about.stat1': 'Years in real production',
    'about.stat2': 'Companies in professional settings',
    'about.stat3': 'Technologies mastered',
    'about.stat4': 'Learning disposition',

    /* Experience */
    'exp.title':    'Work Experience',
    'exp.subtitle': 'Over 2 years building solutions in real production environments',
    'exp.current':  'Current',
    'exp.fullstack': 'Fullstack Developer',
    'exp.mobile':   'Mobile Developer',

    'exp.reyma.period': 'Jul 2024 &mdash; Present',
    'exp.reyma.d1': 'Enterprise application development with <strong>DevExpress</strong>, <strong>.NET Core 8</strong> and <strong>.NET Framework 4</strong> for Grupo Reyes\' core systems.',
    'exp.reyma.d2': 'Modern interface implementation with <strong>Blazor</strong>, contributing to the migration of legacy modules to contemporary architectures.',
    'exp.reyma.d3': 'Workflow optimization and <strong>AI integration into the development cycle</strong> to improve efficiency and internal system architecture.',
    'exp.reyma.d4': 'Team collaboration under <strong>agile methodology</strong> with a focus on continuous delivery and sustainable quality.',

    'exp.reyval.period': 'Mar 2024 &mdash; Jun 2024',
    'exp.reyval.d1': 'Redesign and modernization of existing systems using <strong>Laravel</strong> and <strong>VueJS</strong> under MVC architecture, prioritizing long-term scalability and maintainability.',
    'exp.reyval.d2': 'Active migration of legacy modules to modern solutions within the Laravel ecosystem.',
    'exp.reyval.d3': 'Management and optimization of relational database queries with <strong>SQL Server</strong>.',

    'exp.itsmart.period': 'Jan 2023 &mdash; Feb 2024',
    'exp.itsmart.d1': 'Native Android application development as <strong>lead developer</strong>, driving key technical decisions in design, architecture, and delivery.',
    'exp.itsmart.d2': 'Complex feature implementation using <strong>Java</strong> and the <strong>Android SDK</strong> ecosystem.',
    'exp.itsmart.d3': 'Full lifecycle management of internal corporate applications.',

    /* Skills */
    'skills.title':    'Technical Skills',
    'skills.subtitle': 'Ecosystems I master &mdash; tools I leverage',
    'skills.cat.lang':  'Languages',
    'skills.cat.fw':    'Frameworks &amp; Platforms',
    'skills.cat.db':    'Databases',
    'skills.cat.arch':  'Architecture &amp; Practices',
    'skills.cat.ai':    'AI &amp; Productivity',
    'skills.cat.langs': 'Languages',
    'skills.ai.desc':   'I integrate AI strategically as a natural part of the development workflow &mdash; not as a substitute for technical judgment, but as an efficiency multiplier. I create <strong>GitHub Copilot agents</strong> and <strong>Claude Code agents</strong>, optimized for real projects, accelerating repetitive tasks and improving the quality of the generated output.',

    /* Languages */
    'lang.es.name':  'Spanish',
    'lang.en.name':  'English',
    'lang.jp.name':  'Japanese',
    'lang.native':   'Native',
    'lang.en.level': 'B1 &mdash; Fluent technical reading',
    'lang.jp.level': 'A1 &mdash; Basic',

    /* Projects */
    'proj.title':    'Featured Project',
    'proj.subtitle': 'Built out of conviction, not requirement',
    'proj.label':    'Personal project &mdash; technical &amp; creative',
    'proj.desc':     'Original superhero novel serialization platform &mdash; designed, developed, and maintained entirely independently. A space where architectural decisions are made with my own judgment, without supervision, under real constraints.',
    'proj.story':    'What started as a creative project became a full-stack technical laboratory: static frontend, content dashboard, and a custom API. Each layer chosen with intent. The stack reflects deliberate architectural decisions, not defaults.',
    'proj.h1':       '<strong>Astro</strong> &mdash; Static frontend for maximum performance',
    'proj.h2':       '<strong>VueJS</strong> &mdash; Content management dashboard',
    'proj.h3':       '<strong>Flask + Python</strong> &mdash; Custom REST API',
    'proj.h4':       'Author of the serialized story',
    'proj.btn':      'Visit Galurian.com',

    /* Education */
    'edu.title': 'Education',
    'edu.deg1':  'Software Development and Management Engineering',
    'edu.deg2':  'University Technical Degree in Multiplatform Software Development',

    /* Contact */
    'contact.title':    "Let's talk",
    'contact.subtitle': 'Open to opportunities where architecture, technical quality, and growth matter.',
    'contact.email':    'Email',
    'contact.phone':    'Phone',

    /* Footer */
    'footer.by':  'Designed and developed by <strong>Miguel Angel L&oacute;pez Rend&oacute;n</strong>',
    'footer.sub': 'HTML &middot; CSS &middot; JavaScript &mdash; no frameworks, no shortcuts.',

    /* Floating button */
    'fab.label': 'CV PDF',

    /* Print CV — Section titles */
    'pc.header.title': 'Software Development and Management Engineer &nbsp;&middot;&nbsp; Fullstack Developer &nbsp;&middot;&nbsp; Architecture &nbsp;&middot;&nbsp; AI',
    'pc.perfil.title': 'Profile',
    'pc.perfil.body':  'Fullstack developer with over 2 years of experience in real production environments. Specialized in .NET and Laravel ecosystems, with a focus on clean architecture and SOLID principles. Integrates AI strategically as an efficiency multiplier. Fast and purposeful learner, always oriented toward scalable and sustainable solutions.',
    'pc.skills.title': 'Skills',
    'pc.skill.cat1':   'Languages',
    'pc.skill.cat2':   'Frameworks',
    'pc.skill.cat3':   'Databases',
    'pc.skill.cat4':   'Practices',
    'pc.skill.cat5':   'AI &amp; Agents',
    'pc.lang.title':   'Languages',
    'pc.lang.es.name': 'Spanish',
    'pc.lang.en.name': 'English',
    'pc.lang.jp.name': 'Japanese',
    'pc.lang.native':  'Native',
    'pc.lang.en.lvl':  'B1 &mdash; Fluent technical reading',
    'pc.lang.jp.lvl':  'A1 &mdash; Basic',
    'pc.proj.title':   'Featured Project',
    'pc.proj.body':    'Personal serial novel platform &mdash; independently developed and written. A full-stack project built with deliberate architectural decisions, oriented toward real learning.',
    'pc.proj.stack':   'Astro &nbsp;&middot;&nbsp; VueJS (dashboard) &nbsp;&middot;&nbsp; Flask + Python (REST API)',
    'pc.exp.title':    'Work Experience',
    'pc.job1.period':  'Jul 2024 &ndash; Present',
    'pc.job1.d1':      'Enterprise development with <strong>.NET Core 8</strong>, <strong>Blazor</strong> and <strong>DevExpress</strong> for Grupo Reyes\' core systems.',
    'pc.job1.d2':      'Legacy module migration and AI integration into the development cycle to optimize workflows and improve system architecture.',
    'pc.job1.d3':      'Team collaboration under agile methodology focused on continuous delivery and sustainable quality.',
    'pc.job2.d1':      'System modernization with <strong>Laravel</strong> and <strong>VueJS</strong> under MVC architecture, prioritizing scalability and maintainability.',
    'pc.job2.d2':      'Legacy module migration and query optimization with <strong>SQL Server</strong>.',
    'pc.job3.period':  'Jan 2023 &ndash; Feb 2024',
    'pc.job3.d1':      'Native Android development as <strong>lead developer</strong> &mdash; architecture, implementation, and delivery of internal corporate applications.',
    'pc.job3.d2':      'Full lifecycle management with <strong>Java</strong> and the <strong>Android SDK</strong> ecosystem.',
    'pc.edu.title':    'Education',
  }
};

/* ── Language system ── */
let currentLang = 'es';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key] !== undefined) {
      el.innerHTML = i18n[lang][key];
    }
  });

  /* Update lang toggle label: shows the OTHER language */
  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = lang === 'es' ? 'EN' : 'ES';

  /* Update toggle button visual */
  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
}

(function initLang() {
  const saved = localStorage.getItem('lang');
  applyLang(saved || 'es');
})();

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'es' ? 'en' : 'es');
});

/* ── Theme ── */
const html      = document.documentElement;
const themeBtn  = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function applyTheme(theme) {
  html.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  themeIcon.className = theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
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

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── Active nav link tracking ── */
const sections    = document.querySelectorAll('section[id]');
const navLinkEls  = document.querySelectorAll('.nav-link');

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
      opacity: { value: 0.22, random: { enable: true, minimumValue: 0.08 } },
      size:    { value: { min: 1, max: 3 }, random: true },
      move:    { enable: true, speed: 0.6, direction: 'none', random: true, straight: false, outModes: 'out' },
      links:   { enable: true, color: '#00b4ff', opacity: 0.10, distance: 130, width: 1 },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: 'grab' }, onClick: { enable: false } },
      modes:  { grab: { distance: 140, links: { opacity: 0.25 } } },
    },
    detectRetina: true,
  });
}

/* ── GSAP + ScrollTrigger ── */
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  /* Hero entrance */
  const heroAnims  = document.querySelectorAll('.hero [data-anim="fade-up"]');
  const heroVisual = document.querySelector('.hero-visual');

  gsap.fromTo(heroAnims,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.2,
      onComplete: () => heroAnims.forEach(el => el.removeAttribute('data-anim')) }
  );

  if (heroVisual) {
    gsap.fromTo(heroVisual,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.4 }
    );
  }

  /* Scroll hint — appears once, then fades */
  const scrollHint = document.querySelector('.scroll-hint');
  if (scrollHint) {
    gsap.to(scrollHint, {
      opacity: 0.5, duration: 1, delay: 1.8, ease: 'power2.out',
      onComplete: () => gsap.to(scrollHint, { opacity: 0, duration: 0.6, delay: 2.5, ease: 'power2.in' })
    });
  }

  /* Generic fade-up reveals */
  document.querySelectorAll(':not(.hero) [data-anim="fade-up"]').forEach((el, i) => {
    ScrollTrigger.create({
      trigger: el, start: 'top 88%', once: true,
      onEnter: () => {
        gsap.fromTo(el, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: i % 4 * 0.07 });
        el.removeAttribute('data-anim');
      }
    });
  });

  /* Fade-right (timeline) */
  document.querySelectorAll('[data-anim="fade-right"]').forEach((el, i) => {
    ScrollTrigger.create({
      trigger: el, start: 'top 85%', once: true,
      onEnter: () => {
        gsap.fromTo(el, { opacity: 0, x: -24 }, { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out', delay: i * 0.08 });
        el.removeAttribute('data-anim');
      }
    });
  });

  /* Slide-left (avatar) */
  document.querySelectorAll('[data-anim="slide-left"]').forEach(el => {
    ScrollTrigger.create({
      trigger: el, start: 'top 85%', once: true,
      onEnter: () => {
        gsap.fromTo(el, { opacity: 0, x: 36 }, { opacity: 1, x: 0, duration: 0.85, ease: 'power2.out' });
        el.removeAttribute('data-anim');
      }
    });
  });

  /* Skill tags stagger */
  document.querySelectorAll('.skill-group').forEach(group => {
    const tags = group.querySelectorAll('.stag, .lang-item');
    ScrollTrigger.create({
      trigger: group, start: 'top 85%', once: true,
      onEnter: () => gsap.fromTo(tags, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', stagger: 0.04 })
    });
  });

  /* Language bar fill */
  document.querySelectorAll('.lang-fill').forEach(bar => {
    const target = bar.dataset.fill;
    ScrollTrigger.create({
      trigger: bar, start: 'top 90%', once: true,
      onEnter: () => gsap.to(bar, { width: target + '%', duration: 1.2, ease: 'power2.out' })
    });
  });

  /* Stat counter */
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    ScrollTrigger.create({
      trigger: el, start: 'top 90%', once: true,
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: target, duration: 1.4, ease: 'power2.out',
          onUpdate: function() { el.textContent = Math.round(this.targets()[0].val); }
        });
      }
    });
  });

  /* Parallax hero */
  gsap.to('.hero-text', {
    yPercent: -8, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  });

  /* Browser mockup entrance */
  const mockup = document.querySelector('.browser-mockup');
  if (mockup) {
    ScrollTrigger.create({
      trigger: mockup, start: 'top 80%', once: true,
      onEnter: () => gsap.fromTo(mockup, { opacity: 0, y: 30, rotateY: 8 }, { opacity: 1, y: 0, rotateY: 0, duration: 1, ease: 'power3.out' })
    });
  }

  /* Timeline items */
  document.querySelectorAll('.tl-item').forEach((item, i) => {
    ScrollTrigger.create({
      trigger: item, start: 'top 87%', once: true,
      onEnter: () => {
        gsap.fromTo(item, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.65, ease: 'power2.out', delay: i * 0.1 });
        item.removeAttribute('data-anim');
      }
    });
  });

  document.fonts.ready.then(() => ScrollTrigger.refresh());

} else {
  /* Fallback: show all if GSAP fails to load */
  document.querySelectorAll('[data-anim]').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}
