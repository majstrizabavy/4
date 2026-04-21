/* Shared behavior for all static pages. */

const pageRoutes = {
  home: 'index.html',
  'orbit-section': 'svet-zabavy.html',
  inspiracia: 'inspiracia.html',
  rok: '365-dni-zabavy.html',
  projekty: 'projekty.html',
  'navrhni-akciu': 'navrhni-si-akciu.html',
  kontakt: 'kontakt.html'
};

const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
const customCursorEnabled = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const cursorInteractiveSelector = 'a, button, .planet, .mz-planet, .reel-card, .project-card, .month-card, .command-item, .contact-channel, .priority-btn, .mz-priority-btn, .mz-activate-btn, .mz-generate-btn, .mz-cta-approve, .mz-cta-reset, .mz-ebook__btn, .page-card, .page-card-link';
const cursorCtaSelector = '.btn-primary, .nav-cta, .core-cta, .activate-navrh-btn, .mz-activate-btn, .mz-generate-btn, .mz-cta-approve, .contact-choice-card__btn--primary, .planner-offer-modal__custom, .mz-followup-submit';
const confettiColors = ['#c7ff2e', '#efff97', '#f5f5ef', '#f0d68a'];
const confettiShapes = ['circle', 'diamond'];
const confettiPoolSize = 10;
const cursorState = {
  targetX: 0,
  targetY: 0,
  dotX: 0,
  dotY: 0,
  ringX: 0,
  ringY: 0,
  prevX: 0,
  prevY: 0,
  speed: 0,
  hoverBoost: 0,
  hasStarted: false,
  lastEmitTime: 0
};
const confettiPool = [];

function setCursorMode(mode = '') {
  if (!cursor || !ring) return;

  cursor.classList.remove('is-hover', 'is-cta');
  ring.classList.remove('is-hover', 'is-cta');

  if (mode === 'hover' || mode === 'cta') {
    cursor.classList.add('is-hover');
    ring.classList.add('is-hover');
  }

  if (mode === 'cta') {
    cursor.classList.add('is-cta');
    ring.classList.add('is-cta');
  }
}

function buildConfettiPool() {
  for (let index = 0; index < confettiPoolSize; index += 1) {
    const node = document.createElement('span');
    node.className = 'cursor-confetti';
    node.hidden = true;
    document.body.appendChild(node);
    confettiPool.push({
      node,
      active: false,
      life: 0,
      ttl: 0,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      rotation: 0,
      rotationSpeed: 0,
      scale: 1
    });
  }
}

function getConfettiParticle() {
  return confettiPool.find((particle) => !particle.active) || null;
}

function emitConfetti(now, intensity) {
  const emitEvery = intensity > 1.08 ? 48 : 72;

  if (now - cursorState.lastEmitTime < emitEvery || cursorState.speed < 1.3) {
    return;
  }

  cursorState.lastEmitTime = now;

  const particleCount = 1;

  for (let index = 0; index < particleCount; index += 1) {
    const particle = getConfettiParticle();
    if (!particle) break;

    const shape = confettiShapes[(Math.random() * confettiShapes.length) | 0];
    const size = 3 + Math.random() * 2;
    const angle = Math.random() * Math.PI * 2;
    const spread = 0.22 + Math.random() * 0.42;

    particle.active = true;
    particle.life = 0;
    particle.ttl = 12 + Math.random() * 6;
    particle.x = cursorState.ringX + (Math.random() - 0.5) * 5;
    particle.y = cursorState.ringY + (Math.random() - 0.5) * 5;
    particle.vx = Math.cos(angle) * spread - (cursorState.targetX - cursorState.prevX) * 0.01;
    particle.vy = Math.sin(angle) * spread - (cursorState.targetY - cursorState.prevY) * 0.01;
    particle.rotation = Math.random() * 180;
    particle.rotationSpeed = (Math.random() - 0.5) * 7;
    particle.scale = 0.75 + Math.random() * 0.35;

    particle.node.hidden = false;
    particle.node.className = `cursor-confetti cursor-confetti--${shape}`;
    particle.node.style.width = `${size}px`;
    particle.node.style.height = shape === 'bar' ? `${Math.max(3, size - 2)}px` : `${size}px`;
    particle.node.style.background = confettiColors[(Math.random() * confettiColors.length) | 0];
    particle.node.style.opacity = '0.75';
  }
}

function updateConfetti() {
  confettiPool.forEach((particle) => {
    if (!particle.active) return;

    particle.life += 1;
    if (particle.life >= particle.ttl) {
      particle.active = false;
      particle.node.hidden = true;
      particle.node.style.opacity = '0';
      return;
    }

    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.vy += 0.008;
    particle.rotation += particle.rotationSpeed;

    const progress = particle.life / particle.ttl;
    const opacity = 1 - progress;
    const scale = particle.scale * (0.94 + progress * 0.22);

    particle.node.style.opacity = `${opacity}`;
    particle.node.style.transform = `translate3d(${particle.x}px, ${particle.y}px, 0) rotate(${particle.rotation}deg) scale(${scale})`;
  });
}

if (cursor && ring && customCursorEnabled) {
  buildConfettiPool();

  document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;

    if (!cursorState.hasStarted) {
      cursorState.targetX = clientX;
      cursorState.targetY = clientY;
      cursorState.dotX = clientX;
      cursorState.dotY = clientY;
      cursorState.ringX = clientX;
      cursorState.ringY = clientY;
      cursorState.prevX = clientX;
      cursorState.prevY = clientY;
      cursorState.hasStarted = true;
      document.body.classList.add('cursor-active');
    }

    cursorState.prevX = cursorState.targetX;
    cursorState.prevY = cursorState.targetY;
    cursorState.targetX = clientX;
    cursorState.targetY = clientY;
    cursorState.speed = Math.hypot(cursorState.targetX - cursorState.prevX, cursorState.targetY - cursorState.prevY);
  });

  document.addEventListener('mouseleave', () => {
    document.body.classList.remove('cursor-active');
  });

  document.addEventListener('mouseenter', () => {
    if (cursorState.hasStarted) {
      document.body.classList.add('cursor-active');
    }
  });

  (function animateCursor(now = 0) {
    cursorState.dotX += (cursorState.targetX - cursorState.dotX) * 0.22;
    cursorState.dotY += (cursorState.targetY - cursorState.dotY) * 0.22;
    cursorState.ringX += (cursorState.targetX - cursorState.ringX) * 0.12;
    cursorState.ringY += (cursorState.targetY - cursorState.ringY) * 0.12;
    cursorState.hoverBoost *= 0.88;

    cursor.style.left = `${cursorState.dotX}px`;
    cursor.style.top = `${cursorState.dotY}px`;
    ring.style.left = `${cursorState.ringX}px`;
    ring.style.top = `${cursorState.ringY}px`;

    if (cursorState.hasStarted) {
      emitConfetti(now, 1 + cursorState.hoverBoost);
      updateConfetti();
    }

    requestAnimationFrame(animateCursor);
  })();

  document.querySelectorAll(cursorInteractiveSelector).forEach((element) => {
    element.addEventListener('mouseenter', () => {
      const isCta = element.matches(cursorCtaSelector);
      setCursorMode(isCta ? 'cta' : 'hover');
      cursorState.hoverBoost = isCta ? 0.45 : 0.22;
    });

    element.addEventListener('mouseleave', () => {
      setCursorMode();
    });
  });
} else if (cursor && ring) {
  cursor.style.display = 'none';
  ring.style.display = 'none';
}

function resolveRoute(target) {
  return pageRoutes[target] || target;
}

function goTo(target) {
  const route = resolveRoute(target);
  const localSection = route.startsWith('#') ? document.querySelector(route) : document.getElementById(target);

  if (localSection) {
    localSection.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  window.location.href = route;
}

function activateNavrhAkcie() {
  closeCommand();
  const overlay = document.getElementById('navrhni-akciu-transition');
  const navrhSection = document.getElementById('navrhni-akciu-section');

  if (!overlay) {
    goTo('navrhni-akciu');
    return;
  }

  overlay.classList.add('active');
  setTimeout(() => {
    if (navrhSection) {
      navrhSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => overlay.classList.remove('active'), 700);
      return;
    }

    window.location.href = resolveRoute('navrhni-akciu');
  }, 600);
}

const commandOverlay = document.getElementById('command-overlay');
const commandInput = document.getElementById('command-input');
const videoModal = document.getElementById('videoModal');
const videoModalFrame = document.getElementById('videoModalFrame');
const videoModalTitle = document.getElementById('videoModalTitle');
const videoModalLink = document.getElementById('videoModalLink');

function openCommand() {
  if (!commandOverlay || !commandInput) return;
  commandOverlay.classList.add('open');
  commandInput.focus();
  document.body.style.overflow = 'hidden';
}

function closeCommand() {
  if (!commandOverlay) return;
  commandOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function openVideoModal(videoId, title, url) {
  if (!videoModal || !videoModalFrame) return;

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`;
  videoModalFrame.src = embedUrl;
  if (videoModalTitle) videoModalTitle.textContent = title || 'YouTube Shorts';
  if (videoModalLink) videoModalLink.href = url || `https://www.youtube.com/watch?v=${videoId}`;
  videoModal.classList.add('is-open');
  videoModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  if (!videoModal || !videoModalFrame) return;

  videoModal.classList.remove('is-open');
  videoModal.setAttribute('aria-hidden', 'true');
  videoModalFrame.src = '';
  document.body.style.overflow = '';
}

if (commandOverlay) {
  commandOverlay.addEventListener('click', (event) => {
    if (event.target === commandOverlay) closeCommand();
  });
}

document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    openCommand();
  }

  if (event.key === 'Escape') {
    closeCommand();
    closeMobile();
    closeVideoModal();
  }
});

if (commandInput) {
  commandInput.addEventListener('input', function onInput() {
    const query = this.value.toLowerCase();
    document.querySelectorAll('.command-item').forEach((item) => {
      const name = item.querySelector('.cmd-item-name')?.textContent.toLowerCase() || '';
      const desc = item.querySelector('.cmd-item-desc')?.textContent.toLowerCase() || '';
      item.style.display = !query || name.includes(query) || desc.includes(query) ? 'flex' : 'none';
    });
  });
}

function navigateTo(target) {
  closeCommand();
  setTimeout(() => goTo(target), 150);
}

function toggleMobile() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

function closeMobile() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.remove('open');
}

document.querySelectorAll('[data-nav]').forEach((link) => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const expectedPage = resolveRoute(link.dataset.nav);
  if (expectedPage === currentPage) {
    link.classList.add('active');
  }
});

if (videoModal) {
  videoModal.querySelectorAll('[data-video-close]').forEach((element) => {
    element.addEventListener('click', closeVideoModal);
  });
}

document.querySelectorAll('[data-video-open]').forEach((card) => {
  card.addEventListener('click', () => {
    openVideoModal(card.dataset.youtubeId, card.dataset.videoTitle, card.dataset.videoUrl);
  });
});

const revealElements = document.querySelectorAll('.reveal');
if (revealElements.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  revealElements.forEach((element) => revealObserver.observe(element));
}

// Hlavny filter medzi sekciami Video / Blog / Galeria / Specialy / Kam za zabavou.
document.querySelectorAll('[data-inspiration-filter-group]').forEach((group) => {
  const buttons = group.querySelectorAll('[data-inspiration-filter]');
  const sections = document.querySelectorAll('[data-inspiration-section]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.inspirationFilter;

      buttons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');

      sections.forEach((section) => {
        const matches = filter === 'all' || section.dataset.inspirationSection === filter;
        section.classList.toggle('is-hidden', !matches);
      });
    });
  });
});

