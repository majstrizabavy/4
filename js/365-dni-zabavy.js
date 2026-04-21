/* 365 dni zabavy
   Tento subor drzi len stabilnu logiku plannera pre rezim "Naplanuj si akciu".
   Verejne akcie pre "Kam za zabavou" maju oddelene data aj logiku.
*/

const yearPlannerData = window.yearPlannerData;
const plannerOfferData = window.plannerOfferData;
function createCustomMonthCard(item) {
  const hasPlannerEvents = Array.isArray(item.plannerEvents) && item.plannerEvents.length;
  const patternMarkup = hasPlannerEvents ? '' : `<div class="month-card__pattern">${item.title}</div>`;
  const plannerEventsMarkup = hasPlannerEvents
    ? `
      <div class="month-card__offer-label">Klikni na akciu:</div>
      <div class="month-card__events">
        ${item.plannerEvents.map((eventItem) => `
          <button type="button" class="month-card__event-btn" data-planner-event="${eventItem.id}">
            <span>${eventItem.label}</span>
          </button>
        `).join('')}
      </div>
      <a href="navrhni-si-akciu.html" class="month-card__alt-link">Ina akcia</a>
    `
    : `
      <div class="month-card__offer-label">MZ odporucaju:</div>
      <div class="month-card__offer">${item.hint}</div>
      <a href="#yearPlannerContact" class="month-card__cta">Cenov&aacute; ponuka</a>
    `;

  return `
    <article class="month-card month-card--custom${hasPlannerEvents ? ' month-card--planner' : ''}">
      <div class="month-num">${item.number}</div>
      <div class="month-name">${item.name}</div>
      ${patternMarkup}
      <div class="month-card__divider" aria-hidden="true"></div>
      ${plannerEventsMarkup}
    </article>
  `;
}

function renderYearPlannerMode(modeKey) {
  const mode = yearPlannerData[modeKey];
  if (!mode) return;

  const grid = document.getElementById(mode.gridId);
  if (!grid) return;

  grid.innerHTML = mode.months.map((item) => createCustomMonthCard(item)).join('');
}

function syncYearPlannerMode(selectedMode) {
  const url = new URL(window.location.href);
  url.searchParams.set('mode', selectedMode);

  if (selectedMode !== 'public') {
    url.searchParams.delete('month');
    url.searchParams.delete('event');
  }

  url.hash = 'rok';
  history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
}

function setYearPlannerMode(selectedMode, options = {}) {
  const { syncUrl = true } = options;

  document.querySelectorAll('[data-year-mode-group]').forEach((group) => {
    const buttons = group.querySelectorAll('[data-year-mode]');
    buttons.forEach((button) => {
      button.classList.toggle('active', button.dataset.yearMode === selectedMode);
    });
  });

  document.querySelectorAll('[data-year-mode-panel]').forEach((panel) => {
    const matches = panel.dataset.yearModePanel === selectedMode;
    panel.classList.toggle('is-hidden', !matches);
  });

  if (syncUrl) syncYearPlannerMode(selectedMode);

  window.dispatchEvent(new CustomEvent('year-mode-change', {
    detail: { selectedMode, syncUrl }
  }));
}

function initYearPlannerModes() {
  document.querySelectorAll('[data-year-mode-group]').forEach((group) => {
    const buttons = group.querySelectorAll('[data-year-mode]');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        setYearPlannerMode(button.dataset.yearMode);
      });
    });
  });
}

function createPlannerOfferPreview(offer, offerGroup) {
  const theme = offer.previewTheme || offerGroup.previewTheme || 'default';
  const posterTag = offer.previewTag || offerGroup.previewTag || 'MZ';
  const posterKicker = offer.previewKicker || offerGroup.previewKicker || 'Naplanuj si akciu';
  const posterNote = offer.posterNote || offer.posterLabel || 'Vizualny nahlad bez fotky';

  return `
    <div class="planner-offer-card__poster-art planner-offer-card__poster-art--${theme}">
      <div class="planner-offer-card__poster-top">
        <span class="planner-offer-card__poster-chip">${posterTag}</span>
        <span class="planner-offer-card__poster-chip planner-offer-card__poster-chip--ghost">${offerGroup.eyebrow}</span>
      </div>
      <div class="planner-offer-card__poster-main">
        <div class="planner-offer-card__poster-kicker">${posterKicker}</div>
        <div class="planner-offer-card__poster-event">${offerGroup.title}</div>
        <div class="planner-offer-card__poster-package">${offer.name}</div>
      </div>
      <div class="planner-offer-card__poster-bottom">
        <span class="planner-offer-card__poster-price">${offer.price}</span>
        <span class="planner-offer-card__poster-note">${posterNote}</span>
      </div>
    </div>
  `;
}

function buildPlannerOfferHref(offer, offerGroup) {
  if (!offer.orderHref) return '#';

  const [rawBase, rawHash = ''] = offer.orderHref.split('#');
  const [pathname, rawQuery = ''] = rawBase.split('?');
  const params = new URLSearchParams(rawQuery);

  params.set('scopeLabel', offerGroup.label || '');
  params.set('package', offer.name || '');
  params.set('lead', offer.lead || '');
  params.set('bullets', (offer.bullets || []).join('||'));

  return `${pathname}?${params.toString()}${rawHash ? `#${rawHash}` : ''}`;
}

function createPlannerOfferCard(offer, offerGroup) {
  const bullets = offer.bullets.map((item) => `<li>${item}</li>`).join('');
  const orderHref = buildPlannerOfferHref(offer, offerGroup);
  const poster = offer.posterSrc
    ? `
      <div class="planner-offer-card__media">
        <img src="${offer.posterSrc}" alt="${offer.name}" class="planner-offer-card__image" loading="lazy" decoding="async">
      </div>
    `
    : createPlannerOfferPreview(offer, offerGroup);

  return `
    <article class="planner-offer-card">
      <div class="planner-offer-card__poster">${poster}</div>
      <div class="planner-offer-card__body">
        <div class="planner-offer-card__name">${offer.name}</div>
        <div class="planner-offer-card__lead">${offer.lead}</div>
        <div class="planner-offer-card__price">${offer.price}</div>
        <ul class="planner-offer-card__list">${bullets}</ul>
        <a href="${orderHref}" class="btn-primary planner-offer-card__cta">${offer.ctaLabel || offerGroup.ctaLabel || 'Mám záujem'}</a>
      </div>
    </article>
  `;
}

function getPlannerOfferActiveKey(data, preferredKey) {
  if (!data || !data.offerFilters) return '';
  if (preferredKey && data.offerFilters[preferredKey]) return preferredKey;
  if (data.defaultFilter && data.offerFilters[data.defaultFilter]) return data.defaultFilter;
  return Object.keys(data.offerFilters)[0] || '';
}

function renderPlannerOfferModal(eventKey, preferredFilterKey = '') {
  const data = plannerOfferData[eventKey];
  const modal = document.getElementById('plannerOfferModal');
  const eyebrow = document.getElementById('plannerOfferEyebrow');
  const title = document.getElementById('plannerOfferTitle');
  const subtitle = document.getElementById('plannerOfferSubtitle');
  const filters = document.getElementById('plannerOfferFilters');
  const note = document.getElementById('plannerOfferNote');
  const grid = document.getElementById('plannerOfferGrid');
  const customLink = document.getElementById('plannerOfferCustomLink');

  if (!data || !modal || !eyebrow || !title || !subtitle || !filters || !note || !grid || !customLink) return;

  const activeKey = getPlannerOfferActiveKey(data, preferredFilterKey);
  const activeGroup = activeKey ? data.offerFilters[activeKey] : data;
  const renderGroup = { ...data, ...activeGroup };
  const noteText = activeGroup.note || data.note || '';
  const offers = activeGroup.offers || data.offers || [];

  eyebrow.textContent = data.eyebrow;
  title.textContent = data.title;
  subtitle.textContent = activeGroup.subtitle || data.subtitle || '';

  if (data.offerFilters) {
    filters.hidden = false;
    filters.innerHTML = Object.entries(data.offerFilters).map(([key, group]) => `
      <button type="button" class="planner-offer-modal__filter${key === activeKey ? ' is-active' : ''}" data-planner-filter="${key}">
        ${group.label}
      </button>
    `).join('');
  } else {
    filters.hidden = true;
    filters.innerHTML = '';
  }

  note.hidden = !noteText;
  note.textContent = noteText;

  grid.innerHTML = offers.map((offer) => createPlannerOfferCard(offer, renderGroup)).join('');
  customLink.href = activeGroup.customHref || data.customHref || 'navrhni-si-akciu.html';
  customLink.textContent = activeGroup.customLabel || data.customLabel || 'Mám inú predstavu';

  modal.dataset.plannerEvent = eventKey;
  if (activeKey) {
    modal.dataset.plannerFilter = activeKey;
  } else {
    delete modal.dataset.plannerFilter;
  }
}

function openPlannerOfferModal(eventKey, preferredFilterKey = '') {
  const modal = document.getElementById('plannerOfferModal');
  if (!modal) return;

  renderPlannerOfferModal(eventKey, preferredFilterKey);

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closePlannerOfferModal() {
  const modal = document.getElementById('plannerOfferModal');
  if (!modal) return;

  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  delete modal.dataset.plannerEvent;
  delete modal.dataset.plannerFilter;
}

function initPlannerOfferModal() {
  const grid = document.getElementById('yearGridCustom');
  const modal = document.getElementById('plannerOfferModal');
  const closeTriggers = modal ? Array.from(modal.querySelectorAll('[data-planner-offer-close]')) : [];

  if (!grid || !modal) return;

  grid.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-planner-event]');
    if (!trigger) return;

    openPlannerOfferModal(trigger.dataset.plannerEvent);
  });

  closeTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      closePlannerOfferModal();
    });
  });

  modal.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const filterTrigger = target.closest('[data-planner-filter]');
    if (filterTrigger) {
      renderPlannerOfferModal(modal.dataset.plannerEvent, filterTrigger.dataset.plannerFilter);
      return;
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closePlannerOfferModal();
    }
  });
}

renderYearPlannerMode('custom');
initYearPlannerModes();
initPlannerOfferModal();

const requestedMode = new URLSearchParams(window.location.search).get('mode');
if (requestedMode === 'public' || requestedMode === 'custom') {
  setYearPlannerMode(requestedMode, { syncUrl: false });
}













