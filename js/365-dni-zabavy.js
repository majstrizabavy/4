/* 365 dni zabavy
   Tento subor drzi len stabilny planner pre rezim "Naplanuj si akciu".
   Verejne akcie pre "Kam za zabavou" maju oddelene data aj logiku.
*/

const yearPlannerData = {
  custom: {
    gridId: 'yearGridCustom',
    months: [
      // JANUAR
      { number: '01', name: 'JANUAR', title: 'novoro&#269;n&eacute; oslavy, karnevaly, plesy, firemn&eacute; ve&#269;ierky', hint: 'Moderovanie &bull; Program &bull; Maskoti &bull; Animatori', accent: 'var(--violet)' },
      // FEBRUAR
      { number: '02', name: 'FEBRUAR', title: 'karnevaly, valent&iacute;nske eventy, plesy, firemn&eacute; eventy', hint: 'Maskoti &bull; Animatori &bull; Hudobny program &bull; Sutaze', accent: 'var(--pink)' },
      // MAREC
      { number: '03', name: 'MAREC', title: 'MD&#381;, de&#328; u&#269;ite&#318;ov, DOD', hint: 'Sutaze &bull; Moderovanie &bull; Sportove aktivity &bull; Program pre rodiny', accent: 'var(--cyan)' },
      // APRIL
      { number: '04', name: 'APRIL', title: 'DOD pre skoly, materske skolky, firemne akcie', hint: 'Tvorive dielne &bull; Rodinne zony &bull; Sprievodny program &bull; Animatori', accent: 'var(--violet)' },
      // MAJ
      { number: '05', name: 'MAJ', title: '1.m&aacute;j, De&#328; matiek, De&#328; rodiny, rodinn&eacute; dni, svadby, maj&aacute;lesy', hint: 'Stage program &bull; Family day &bull; Chill zony &bull; Moderovanie', accent: 'var(--pink)' },
      // JUN
      {
        number: '06',
        name: 'JUN',
        title: 'De&#328; det&iacute;, &scaron;kolsk&eacute; akcie, rozl&uacute;&#269;ky so &scaron;kolou, Vitaj leto, firemn&eacute; dni',
        hint: 'Atrakcie &bull; Animatori &bull; Detske vystupenia &bull; Moderovanie',
        accent: 'var(--cyan)',
        pilotEvents: [
          { id: 'den-deti', label: 'Den deti' },
          { id: 'skolske-akcie', label: 'Skolske akcie' },
          { id: 'rozlucky-so-skolou', label: 'Rozlucky so skolou' },
          { id: 'vitaj-leto', label: 'Vitaj leto' }
        ]
      },
      // JUL
      { number: '07', name: 'JUL', title: 'letn&eacute; t&aacute;bory, festivaly, &scaron;portov&eacute; dni, jarmoky', hint: 'Stage show &bull; Turnaje &bull; Vecerny program &bull; Moderovanie', accent: 'var(--violet)' },
      // AUGUST
      { number: '08', name: 'AUGUST', title: 'letne tabory, letn&eacute; eventy, dni obc&iacute; a miest, rozl&uacute;&#269;ka s letom, outdoor programy', hint: 'Hudba &bull; Gastro zony &bull; Zazitkove aktivity &bull; Program na podium', accent: 'var(--cyan)' },
      // SEPTEMBER
      { number: '09', name: 'SEPTEMBER', title: 'n&aacute;vrat do &scaron;koly, DOD, dni obc&iacute; a miest, vinobrania, vyst&uacute;penia', hint: 'Folklor &bull; Moderovanie &bull; Komunitny program &bull; Rodinne zony', accent: 'var(--violet)' },
      // OKTOBER
      { number: '10', name: 'OKTOBER', title: 'Halloween programy, stra&scaron;ideln&eacute; eventy, jesenn&eacute; podujatia', hint: 'Dekor &bull; Show &bull; Hostesky &bull; Game zony', accent: 'var(--pink)' },
      // NOVEMBER
      { number: '11', name: 'NOVEMBER', title: 'husacie hody, firemn&eacute; eventy, teambuildingy', hint: 'Quizy &bull; Turnaje &bull; Firemny program &bull; Moderovanie', accent: 'var(--violet)' },
      // DECEMBER
      { number: '12', name: 'DECEMBER', title: 'Mikul&aacute;&scaron;, viano&#269;n&eacute; show, detsk&eacute; diskot&eacute;ky, viano&#269;n&eacute; ve&#269;ierky, Silvester', hint: 'Mikulas &bull; Gala vecer &bull; Vianocny program &bull; Animatori', accent: 'var(--violet)' }
    ]
  }
};

const plannerOfferData = {
  'den-deti': {
    eyebrow: 'JUN PILOT',
    title: 'Den deti',
    subtitle: '3 odporucane varianty od Majstrov Zabavy',
    customHref: 'navrhni-si-akciu.html?preset=den-deti',
    offers: [
      {
        name: 'Mini',
        lead: 'Zakladny program pre mensiu akciu',
        price: 'od 800 EUR',
        posterLabel: 'Sem doplnis plagat Mini',
        bullets: ['animator a sutaze', 'zakladny flow programu', 'rychly start bez komplikacii'],
        orderHref: 'kontakt.html?program=den-deti-mini'
      },
      {
        name: 'Optimal',
        lead: 'Najcastejsia volba s atrakciami a animaciou',
        price: 'od 1 500 EUR',
        posterLabel: 'Sem doplnis plagat Optimal',
        bullets: ['vyvazeny program pre deti', 'atrakcia alebo wow prvok', 'energia, ktoru citit pocas celej akcie'],
        orderHref: 'kontakt.html?program=den-deti-optimal'
      },
      {
        name: 'Maxi',
        lead: 'Silny celodenny koncept pre vacsi termin',
        price: 'od 3 000 EUR',
        posterLabel: 'Sem doplnis plagat Maxi',
        bullets: ['vacsi rozsah a viac stanovist', 'silny vizual aj atmosfera', 'riesenie pre akciu, na ktorej zalezi'],
        orderHref: 'kontakt.html?program=den-deti-maxi'
      }
    ]
  },
  'skolske-akcie': {
    eyebrow: 'JUN PILOT',
    title: 'Skolske akcie',
    subtitle: 'Pilotna ukazka 3 odporucanych variantov',
    customHref: 'navrhni-si-akciu.html?preset=skolske-akcie',
    offers: [
      {
        name: 'Start',
        lead: 'Jednoduchy program pre skolsky den',
        price: 'od 700 EUR',
        posterLabel: 'Sem doplnis plagat Start',
        bullets: ['moderovany blok', 'sutaze a aktivacia', 'rychla organizacia'],
        orderHref: 'kontakt.html?program=skolske-akcie-start'
      },
      {
        name: 'Plus',
        lead: 'Vyvazeny skolsky program s tahom',
        price: 'od 1 300 EUR',
        posterLabel: 'Sem doplnis plagat Plus',
        bullets: ['program s vacsou energiou', 'interaktivne vstupy', 'silnejsi wow efekt'],
        orderHref: 'kontakt.html?program=skolske-akcie-plus'
      },
      {
        name: 'Stage',
        lead: 'Vacsi skolsky koncept s podium energiu',
        price: 'od 2 400 EUR',
        posterLabel: 'Sem doplnis plagat Stage',
        bullets: ['viac casti programu', 'vacsi rozsah a rezia', 'vhodne pre vacsie podujatie'],
        orderHref: 'kontakt.html?program=skolske-akcie-stage'
      }
    ]
  },
  'rozlucky-so-skolou': {
    eyebrow: 'JUN PILOT',
    title: 'Rozlucky so skolou',
    subtitle: 'Pilotna ukazka 3 odporucanych variantov',
    customHref: 'navrhni-si-akciu.html?preset=rozlucky-so-skolou',
    offers: [
      {
        name: 'Easy',
        lead: 'Kratsi zabavny blok na uzavretie roka',
        price: 'od 600 EUR',
        posterLabel: 'Sem doplnis plagat Easy',
        bullets: ['uvesi atmosferu', 'moderovanie a zabava', 'jednoduchy format'],
        orderHref: 'kontakt.html?program=rozlucky-easy'
      },
      {
        name: 'Party',
        lead: 'Rozlucka s vacsou energiou a tempom',
        price: 'od 1 200 EUR',
        posterLabel: 'Sem doplnis plagat Party',
        bullets: ['hudba a aktivacie', 'sutaze a zapojenie', 'vacsia eventova nalada'],
        orderHref: 'kontakt.html?program=rozlucky-party'
      },
      {
        name: 'Finale',
        lead: 'Silny zaver skolskeho roka',
        price: 'od 2 100 EUR',
        posterLabel: 'Sem doplnis plagat Finale',
        bullets: ['vacsi efekt a dramaturgia', 'viacero vstupov', 'program pre vacsi priestor'],
        orderHref: 'kontakt.html?program=rozlucky-finale'
      }
    ]
  },
  'vitaj-leto': {
    eyebrow: 'JUN PILOT',
    title: 'Vitaj leto',
    subtitle: 'Pilotna ukazka 3 odporucanych variantov',
    customHref: 'navrhni-si-akciu.html?preset=vitaj-leto',
    offers: [
      {
        name: 'Warm Up',
        lead: 'Jednoduchy uvod do letnej atmosfery',
        price: 'od 750 EUR',
        posterLabel: 'Sem doplnis plagat Warm Up',
        bullets: ['letna energia', 'lahky programovy vstup', 'rychle oivenie akcie'],
        orderHref: 'kontakt.html?program=vitaj-leto-warm-up'
      },
      {
        name: 'Open Air',
        lead: 'Vyraznejsi letny blok pre publikum',
        price: 'od 1 400 EUR',
        posterLabel: 'Sem doplnis plagat Open Air',
        bullets: ['vyvazeny outdoor koncept', 'zabava aj pohyb', 'cititelny eventovy efekt'],
        orderHref: 'kontakt.html?program=vitaj-leto-open-air'
      },
      {
        name: 'Summer Show',
        lead: 'Silne letne otvorenie s wow efektom',
        price: 'od 2 600 EUR',
        posterLabel: 'Sem doplnis plagat Summer Show',
        bullets: ['vacsi rozsah programu', 'vizualny efekt a tah', 'vhodne pre silny letny termin'],
        orderHref: 'kontakt.html?program=vitaj-leto-summer-show'
      }
    ]
  }
};

function createCustomMonthCard(item) {
  const hasPilotEvents = Array.isArray(item.pilotEvents) && item.pilotEvents.length;
  const patternMarkup = hasPilotEvents ? '' : `<div class="month-card__pattern">${item.title}</div>`;
  const pilotEventsMarkup = hasPilotEvents
    ? `
      <div class="month-card__offer-label">Klikni na akciu:</div>
      <div class="month-card__events">
        ${item.pilotEvents.map((eventItem) => `
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
    <article class="month-card month-card--custom${hasPilotEvents ? ' month-card--pilot' : ''}">
      <div class="month-num">${item.number}</div>
      <div class="month-name">${item.name}</div>
      ${patternMarkup}
      <div class="month-card__divider" aria-hidden="true"></div>
      ${pilotEventsMarkup}
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

function createPlannerOfferCard(offer) {
  const bullets = offer.bullets.map((item) => `<li>${item}</li>`).join('');
  const poster = offer.posterSrc
    ? `<img src="${offer.posterSrc}" alt="${offer.name}" class="planner-offer-card__image">`
    : `<div class="planner-offer-card__poster-copy">${offer.posterLabel}</div>`;

  return `
    <article class="planner-offer-card">
      <div class="planner-offer-card__poster">${poster}</div>
      <div class="planner-offer-card__body">
        <div class="planner-offer-card__name">${offer.name}</div>
        <div class="planner-offer-card__lead">${offer.lead}</div>
        <div class="planner-offer-card__price">${offer.price}</div>
        <ul class="planner-offer-card__list">${bullets}</ul>
        <a href="${offer.orderHref}" class="btn-primary planner-offer-card__cta">Objednat tento program</a>
      </div>
    </article>
  `;
}

function openPlannerOfferModal(eventKey) {
  const data = plannerOfferData[eventKey];
  const modal = document.getElementById('plannerOfferModal');
  const eyebrow = document.getElementById('plannerOfferEyebrow');
  const title = document.getElementById('plannerOfferTitle');
  const subtitle = document.getElementById('plannerOfferSubtitle');
  const grid = document.getElementById('plannerOfferGrid');
  const customLink = document.getElementById('plannerOfferCustomLink');

  if (!data || !modal || !eyebrow || !title || !subtitle || !grid || !customLink) return;

  eyebrow.textContent = data.eyebrow;
  title.textContent = data.title;
  subtitle.textContent = data.subtitle;
  grid.innerHTML = data.offers.map((offer) => createPlannerOfferCard(offer)).join('');
  customLink.href = data.customHref;

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
}

function initPlannerOfferPilot() {
  const grid = document.getElementById('yearGridCustom');
  const modal = document.getElementById('plannerOfferModal');

  if (!grid || !modal) return;

  grid.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-planner-event]');
    if (!trigger) return;

    openPlannerOfferModal(trigger.dataset.plannerEvent);
  });

  modal.addEventListener('click', (event) => {
    if (event.target.closest('[data-planner-offer-close]') || event.target.classList.contains('planner-offer-modal__backdrop')) {
      closePlannerOfferModal();
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
initPlannerOfferPilot();

const requestedMode = new URLSearchParams(window.location.search).get('mode');
if (requestedMode === 'public' || requestedMode === 'custom') {
  setYearPlannerMode(requestedMode, { syncUrl: false });
}
