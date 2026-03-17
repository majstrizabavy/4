/* Shared behavior for all static pages. */

const pageRoutes = {
  home: 'index.html',
  'orbit-section': 'svet-zabavy.html',
  inspiracia: 'inspiracia.html',
  rok: 'rok-plny-zabavy.html',
  projekty: 'projekty.html',
  'navrhni-akciu': 'navrhni-si-akciu.html',
  kontakt: 'kontakt.html'
};

const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0;
let my = 0;
let rx = 0;
let ry = 0;

if (cursor && ring) {
  document.addEventListener('mousemove', (event) => {
    mx = event.clientX;
    my = event.clientY;
    cursor.style.left = `${mx}px`;
    cursor.style.top = `${my}px`;
  });

  (function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = `${rx}px`;
    ring.style.top = `${ry}px`;
    requestAnimationFrame(animateRing);
  })();

  document.querySelectorAll('a, button, .planet, .mz-planet, .reel-card, .project-card, .month-card, .command-item, .contact-channel, .priority-btn, .mz-priority-btn, .mz-activate-btn, .mz-generate-btn, .mz-cta-approve, .mz-cta-reset, .mz-ebook__btn, .page-card, .page-card-link').forEach((element) => {
    element.addEventListener('mouseenter', () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      cursor.style.background = 'var(--cyan)';
      ring.style.width = '60px';
      ring.style.height = '60px';
      ring.style.borderColor = 'rgba(0,212,255,0.5)';
    });

    element.addEventListener('mouseleave', () => {
      cursor.style.width = '12px';
      cursor.style.height = '12px';
      cursor.style.background = 'var(--violet)';
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(123,47,255,0.5)';
    });
  });
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

document.querySelectorAll('[data-video-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('.reels-grid--video');
  const prevButton = carousel.querySelector('[data-carousel-prev]');
  const nextButton = carousel.querySelector('[data-carousel-next]');

  if (!track || !prevButton || !nextButton) return;

  function getStep() {
    const firstCard = track.querySelector('.reel-card');
    if (!firstCard) return 0;

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || '0') || 0;
    return firstCard.getBoundingClientRect().width + gap;
  }

  function updateButtons() {
    const maxScroll = Math.max(track.scrollWidth - track.clientWidth, 0);
    const atStart = track.scrollLeft <= 4;
    const atEnd = track.scrollLeft >= maxScroll - 4;

    prevButton.classList.toggle('is-disabled', atStart);
    nextButton.classList.toggle('is-disabled', atEnd);
    prevButton.disabled = atStart;
    nextButton.disabled = atEnd;
  }

  prevButton.addEventListener('click', () => {
    track.scrollBy({ left: -getStep(), behavior: 'smooth' });
  });

  nextButton.addEventListener('click', () => {
    track.scrollBy({ left: getStep(), behavior: 'smooth' });
  });

  track.addEventListener('scroll', updateButtons, { passive: true });
  window.addEventListener('resize', updateButtons);
  updateButtons();
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
