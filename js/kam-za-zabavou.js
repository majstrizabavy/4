const publicCitySelect = document.getElementById('publicCitySelect');
const publicMonthGrid = document.getElementById('publicMonthGrid');
const publicEventList = document.getElementById('publicEventList');
const publicEventListShell = document.querySelector('.event-browser__list-shell');
const publicEventMonthLabel = document.getElementById('publicEventMonthLabel');
const publicEventListTitle = document.getElementById('publicEventListTitle');

const eventModal = document.getElementById('eventModal');
const eventModalTitle = document.getElementById('eventModalTitle');
const eventModalMeta = document.getElementById('eventModalMeta');
const eventModalPoster = document.getElementById('eventModalPoster');
const eventModalPosterImage = document.getElementById('eventModalPosterImage');
const eventModalPosterFallback = document.getElementById('eventModalPosterFallback');
const eventModalMoreInfo = document.getElementById('eventModalMoreInfo');
const eventModalShare = document.getElementById('eventModalShare');

let activePublicMonth = null;
let activePublicEventId = null;
let activePublicCity = 'all';

function decodeHtmlEntities(value) {
  const parser = document.createElement('textarea');
  parser.innerHTML = value;
  return parser.value;
}

function getPublicMonth(monthKey) {
  return publicEventMonths.find((month) => month.key === monthKey) || publicEventMonths[0];
}

function getPublicCity(cityKey) {
  return publicEventCities.find((city) => city.key === cityKey) || publicEventCities[0];
}

function getPublicEvent(eventId) {
  return publicEvents.find((eventItem) => eventItem.id === eventId) || null;
}

function matchesActiveCity(eventItem, cityKey = activePublicCity) {
  return cityKey === 'all' || eventItem.cityKey === cityKey;
}

function getPublicEventsForMonth(monthKey, cityKey = activePublicCity) {
  return publicEvents.filter((eventItem) => eventItem.month === monthKey && matchesActiveCity(eventItem, cityKey));
}

function getFirstMonthWithEvents(cityKey = activePublicCity) {
  const firstEvent = publicEvents.find((eventItem) => matchesActiveCity(eventItem, cityKey));
  return firstEvent?.month || publicEventMonths[0].key;
}

function buildPublicEventUrl(eventItem) {
  const url = new URL(window.location.href);
  url.searchParams.set('mode', 'public');
  url.searchParams.set('month', eventItem.month);
  url.searchParams.set('city', eventItem.cityKey || 'all');
  url.searchParams.set('event', eventItem.id);
  url.hash = 'rok';
  return `${url.pathname}${url.search}${url.hash}`;
}

function syncPublicEventBrowserUrl() {
  const url = new URL(window.location.href);
  url.searchParams.set('mode', 'public');

  if (activePublicMonth) {
    url.searchParams.set('month', activePublicMonth);
  } else {
    url.searchParams.delete('month');
  }

  if (activePublicCity && activePublicCity !== 'all') {
    url.searchParams.set('city', activePublicCity);
  } else {
    url.searchParams.delete('city');
  }

  if (activePublicEventId) {
    url.searchParams.set('event', activePublicEventId);
  } else {
    url.searchParams.delete('event');
  }

  url.hash = 'rok';
  history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
}

function scrollPublicEventsIntoView() {
  if (!publicEventListShell) return;
  if (!window.matchMedia('(max-width: 980px)').matches) return;

  publicEventListShell.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderPublicCities() {
  if (publicCitySelect) {
    publicCitySelect.innerHTML = publicEventCities.map((city) => {
      const optionLabel = city.key === 'all' ? 'Lokalita - Vsetky mesta' : city.name;
      return `<option value="${city.key}"${city.key === activePublicCity ? ' selected' : ''}>${optionLabel}</option>`;
    }).join('');
  }
}

function renderPublicMonths() {
  if (!publicMonthGrid) return;

  publicMonthGrid.innerHTML = publicEventMonths.map((month) => {
    const eventCount = getPublicEventsForMonth(month.key).length;
    const isActive = month.key === activePublicMonth;

    return `
      <button
        type="button"
        class="public-month-card${isActive ? ' is-active' : ''}"
        data-public-month="${month.key}"
      >
        <span class="public-month-card__num" style="color:${month.accent}">${month.number}</span>
        <span class="public-month-card__name">${month.name}</span>
        <span class="public-month-card__count">${eventCount} ${eventCount === 1 ? 'akcia' : eventCount >= 2 && eventCount <= 4 ? 'akcie' : 'akcii'}</span>
      </button>
    `;
  }).join('');
}

function createPublicEventCard(eventItem) {
  return `
    <article class="public-event-card">
      <div class="public-event-card__meta">${eventItem.when} &bull; ${eventItem.where}</div>
      <h4 class="public-event-card__title">${eventItem.title}</h4>
      <div class="public-event-card__actions">
        <button type="button" class="public-event-card__action" data-public-event-open="${eventItem.id}">Viac info</button>
        <button type="button" class="public-event-card__action public-event-card__action--ghost" data-public-event-share="${eventItem.id}">Zdie&#318;a&#357;</button>
      </div>
    </article>
  `;
}

function renderPublicEventList() {
  if (!publicEventList || !publicEventMonthLabel || !publicEventListTitle || !activePublicMonth) return;

  const month = getPublicMonth(activePublicMonth);
  const city = getPublicCity(activePublicCity);
  const monthEvents = getPublicEventsForMonth(activePublicMonth);

  publicEventMonthLabel.innerHTML = activePublicCity === 'all'
    ? `Mesiac ${month.name}`
    : `Mesiac ${month.name} &bull; ${city.name}`;

  publicEventListTitle.textContent = monthEvents.length
    ? `Akcie pre ${decodeHtmlEntities(month.name)}`
    : activePublicCity === 'all'
      ? 'Zatial bez zverejnenych akcii'
      : `Zatial bez akcii pre mesto ${city.name}`;

  if (!monthEvents.length) {
    publicEventList.innerHTML = `
      <div class="public-event-card public-event-card--empty">
        <div class="public-event-card__empty-title">Tento vyber je pripraveny na doplnenie.</div>
        <div class="public-event-card__empty-copy">Po doplneni akcie pre ${decodeHtmlEntities(month.name)}${activePublicCity === 'all' ? '' : ` v meste ${city.name}`} sa sem automaticky prida prehlad s tlacidlami Viac info a Zdie&#318;a&#357;.</div>
      </div>
    `;
    return;
  }

  publicEventList.innerHTML = monthEvents.map((eventItem) => createPublicEventCard(eventItem)).join('');
}

function renderPublicEventBrowser() {
  renderPublicCities();
  renderPublicMonths();
  renderPublicEventList();
}

function setModalMoreInfoState(eventItem) {
  const hasMoreInfo = Boolean(eventItem.moreInfoUrl || eventItem.poster);
  const moreInfoHref = eventItem.moreInfoUrl || eventItem.poster || '';

  if (!eventModalMoreInfo) return;

  if (hasMoreInfo) {
    eventModalMoreInfo.href = moreInfoHref;
    eventModalMoreInfo.removeAttribute('aria-disabled');
    eventModalMoreInfo.classList.remove('is-disabled');
    return;
  }

  eventModalMoreInfo.removeAttribute('href');
  eventModalMoreInfo.setAttribute('aria-disabled', 'true');
  eventModalMoreInfo.classList.add('is-disabled');
}

function populateEventModal(eventItem) {
  if (!eventModalTitle || !eventModalMeta || !eventModalPoster || !eventModalPosterImage || !eventModalPosterFallback) return;

  eventModalTitle.innerHTML = eventItem.title;
  eventModalMeta.innerHTML = `${eventItem.when} &bull; ${eventItem.where}`;
  if (eventModalShare) eventModalShare.textContent = 'Zdielat';

  if (eventItem.poster) {
    eventModalPoster.href = eventItem.moreInfoUrl || eventItem.poster;
    eventModalPosterImage.src = eventItem.poster;
    eventModalPosterImage.alt = `${decodeHtmlEntities(eventItem.title)} plagat`;
    eventModalPosterImage.hidden = false;
    eventModalPosterFallback.hidden = true;
    eventModalPoster.classList.remove('is-placeholder');
  } else {
    eventModalPoster.removeAttribute('href');
    eventModalPosterImage.removeAttribute('src');
    eventModalPosterImage.hidden = true;
    eventModalPosterFallback.hidden = false;
    eventModalPoster.classList.add('is-placeholder');
  }

  setModalMoreInfoState(eventItem);
}

function openEventModal(eventId, options = {}) {
  const { syncUrl = true, preserveFilters = true } = options;
  const eventItem = getPublicEvent(eventId);

  if (!eventItem || !eventModal) return;

  activePublicEventId = eventItem.id;
  activePublicMonth = eventItem.month;
  if (!preserveFilters) {
    activePublicCity = eventItem.cityKey || 'all';
  }
  renderPublicEventBrowser();

  populateEventModal(eventItem);
  eventModal.classList.add('is-open');
  eventModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  if (syncUrl) syncPublicEventBrowserUrl();
}

function closeEventModal(options = {}) {
  const { syncUrl = true } = options;
  if (!eventModal) return;

  eventModal.classList.remove('is-open');
  eventModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  activePublicEventId = null;

  if (syncUrl && activePublicMonth) syncPublicEventBrowserUrl();
}

function setActivePublicMonth(monthKey, options = {}) {
  const { syncUrl = true, scrollList = false } = options;

  activePublicMonth = getPublicMonth(monthKey).key;
  renderPublicEventBrowser();

  if (syncUrl) syncPublicEventBrowserUrl();
  if (scrollList) scrollPublicEventsIntoView();
}

function setActivePublicCity(cityKey, options = {}) {
  const { syncUrl = true } = options;

  activePublicCity = getPublicCity(cityKey).key;

  if (!getPublicEventsForMonth(activePublicMonth, activePublicCity).length) {
    activePublicMonth = getFirstMonthWithEvents(activePublicCity);
  }

  renderPublicEventBrowser();

  if (syncUrl) syncPublicEventBrowserUrl();
}

async function sharePublicEvent(eventId) {
  const eventItem = getPublicEvent(eventId);
  if (!eventItem) return;

  const shareUrl = new URL(buildPublicEventUrl(eventItem), window.location.href).href;
  const shareData = {
    title: decodeHtmlEntities(eventItem.title),
    text: `${decodeHtmlEntities(eventItem.when)} - ${decodeHtmlEntities(eventItem.where)}`,
    url: shareUrl
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(shareUrl);
      if (eventModalShare) eventModalShare.textContent = 'Link skopirovany';
      window.setTimeout(() => {
        if (eventModalShare) eventModalShare.textContent = 'Zdielat';
      }, 1800);
    }
  } catch (error) {
    // Bezpecne ticho. Ak pouzivatel zdielanie zavrie, nechceme hlasit chybu.
  }
}

function initPublicEventBrowser() {
  if (!publicMonthGrid || !publicEventList || !publicCitySelect) return;

  const requestedParams = new URLSearchParams(window.location.search);
  const requestedEventId = requestedParams.get('event');
  const requestedMonth = requestedParams.get('month');
  const requestedCity = requestedParams.get('city');

  activePublicCity = getPublicCity(requestedCity || 'all').key;
  activePublicMonth = requestedMonth && getPublicMonth(requestedMonth).key
    ? getPublicMonth(requestedMonth).key
    : getFirstMonthWithEvents(activePublicCity);

  if (!getPublicEventsForMonth(activePublicMonth, activePublicCity).length) {
    activePublicMonth = getFirstMonthWithEvents(activePublicCity);
  }

  renderPublicEventBrowser();

  publicCitySelect.addEventListener('change', () => {
    closeEventModal({ syncUrl: false });
    setActivePublicCity(publicCitySelect.value);
  });

  publicMonthGrid.addEventListener('click', (event) => {
    const monthButton = event.target.closest('[data-public-month]');
    if (!monthButton) return;

    closeEventModal({ syncUrl: false });
    setActivePublicMonth(monthButton.dataset.publicMonth, { scrollList: true });
  });

  publicEventList.addEventListener('click', (event) => {
    const openButton = event.target.closest('[data-public-event-open]');
    if (openButton) {
      openEventModal(openButton.dataset.publicEventOpen);
      return;
    }

    const shareButton = event.target.closest('[data-public-event-share]');
    if (shareButton) {
      sharePublicEvent(shareButton.dataset.publicEventShare);
    }
  });

  if (eventModal) {
    eventModal.querySelectorAll('[data-event-close]').forEach((element) => {
      element.addEventListener('click', () => closeEventModal());
    });
  }

  if (eventModalShare) {
    eventModalShare.addEventListener('click', () => {
      if (activePublicEventId) sharePublicEvent(activePublicEventId);
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeEventModal();
  });

  window.addEventListener('year-mode-change', (event) => {
    const { selectedMode, syncUrl } = event.detail || {};
    if (selectedMode !== 'public') {
      closeEventModal({ syncUrl: false });
      return;
    }

    if (syncUrl) syncPublicEventBrowserUrl();
  });

  if (requestedEventId && getPublicEvent(requestedEventId)) {
    openEventModal(requestedEventId, { syncUrl: false, preserveFilters: false });
  }
}

initPublicEventBrowser();
