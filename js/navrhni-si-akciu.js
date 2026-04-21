(function () {
  'use strict';

  const root = document.getElementById('navrhni-akciu-section');
  if (!root) return;

  const pricingApi = window.MZPricing || null;

  const elements = {
    orbit: document.getElementById('mz-orbit'),
    coreLogo: document.getElementById('mz-core-logo'),
    coreDesc: document.getElementById('mz-core-desc'),
    planets: document.getElementById('mz-planets'),
    overlay: document.getElementById('mz-overlay'),
    overlayTitle: document.getElementById('mz-overlay-title'),
    overlayText: document.getElementById('mz-overlay-text'),
    toast: document.getElementById('mz-toast'),
    wizard: document.getElementById('mz-wizard'),
    budgetInput: document.getElementById('mz-wizard-budget'),
    budgetValue: document.getElementById('mz-wizard-budget-value'),
    summary: document.getElementById('mz-wizard-summary'),
    offers: document.getElementById('mz-wizard-offers'),
    resultIntro: document.getElementById('mz-wizard-result-intro'),
    resetWizard: document.getElementById('mz-wizard-reset')
  };

  const required = [
    elements.orbit,
    elements.coreLogo,
    elements.coreDesc,
    elements.planets,
    elements.overlay,
    elements.overlayTitle,
    elements.overlayText,
    elements.toast,
    elements.wizard,
    elements.budgetInput,
    elements.budgetValue,
    elements.summary,
    elements.offers,
    elements.resultIntro,
    elements.resetWizard
  ].every(Boolean);
  if (!required) return;

  const orbitPlanets = [
    { label: 'Kalendar', desc: 'Tvoja akcia bude v našom kalendári', color: '#c7ff2e' },
    { label: 'Reels\npromo', desc: 'Po akcii vytvorime kratke video, ktore ukaze atmosferu a oslovi dalsich ludi.', color: '#9edb1f' },
    { label: 'Video\npozvanka', desc: 'Pripravime putave video, ktore pritiahne ludi na tvoju akciu.', color: '#d8ff5a' },
    { label: 'Socialne\nsiete', desc: 'Dostaneme tvoju akciu medzi ľudí', color: '#efff97' },
    { label: 'Podpora', desc: 'Sme pri tebe pred aj po akcii', color: '#c7ff2e' },
    { label: 'Garancia\nkvality', desc: 'Ideme na 125 %. Menej u nás nečakaj.', color: '#9edb1f' }
  ];

  const wizardState = {
    step: 0,
    audience: '',
    need: '',
    guests: '',
    vibe: '',
    budget: Number(elements.budgetInput.value) || 800,
    promo: ''
  };

  const panels = Array.from(root.querySelectorAll('[data-wizard-step]'));
  const progressDots = Array.from(root.querySelectorAll('[data-step-dot]'));
  const choiceButtons = Array.from(root.querySelectorAll('[data-field]'));
  const nextButtons = Array.from(root.querySelectorAll('[data-wizard-next]'));
  const backButtons = Array.from(root.querySelectorAll('[data-wizard-back]'));

  function formatEuro(value) {
    return `${Number(value).toLocaleString('sk-SK')} €`;
  }

  function isMobile() {
    return window.innerWidth < 601;
  }

  function isMedium() {
    return window.innerWidth >= 601 && window.innerWidth <= 860;
  }

  function showToast(message) {
    elements.toast.textContent = message;
    elements.toast.classList.add('mz-toast--show');
    window.setTimeout(() => {
      elements.toast.classList.remove('mz-toast--show');
    }, 3000);
  }

  function showOverlay(brand, message) {
    elements.overlayTitle.textContent = brand || 'MAJSTRI ZÁBAVY';
    elements.overlayText.textContent = message || 'Pripravujeme ponuku...';
    document.body.classList.add('mz-overlay-open');
    elements.overlay.setAttribute('aria-hidden', 'false');
    elements.overlay.classList.add('mz-overlay--active');
  }

  function hideOverlay() {
    elements.overlay.classList.remove('mz-overlay--active');
    elements.overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('mz-overlay-open');
  }

  function getKompletSavingsContext(pricing) {
    if (!pricing || pricing.scope !== 'komplet' || !pricing.discountAmount) return [];

    return [
      `samostatne ${pricing.listPriceText}`,
      `usetrite ${pricing.discountAmountText}`,
      pricing.discountLabel || 'balikove zvyhodnenie'
    ];
  }

  const orbitGroup = document.createElement('div');
  orbitGroup.id = 'mz-orbit-group';
  orbitGroup.style.cssText = 'position:absolute;top:50%;left:50%;transform-origin:0 0;width:0;height:0;';
  elements.planets.parentElement.insertBefore(orbitGroup, elements.planets);
  let activePlanet = null;

  function sizeOrbit() {
    const size = isMobile() ? '300px' : (isMedium() ? '340px' : '600px');
    elements.orbit.style.width = size;
    elements.orbit.style.height = size;
  }

  function setOrbitCoreState(planetData) {
    if (!planetData) {
      elements.orbit.classList.remove('mz-orbit--active');
      elements.coreLogo.textContent = 'MZ';
      elements.coreDesc.textContent = '';
      return;
    }

    elements.orbit.classList.add('mz-orbit--active');
    elements.coreLogo.textContent = 'MZ';
    elements.coreDesc.textContent = planetData.desc;
  }

  function clearActiveOrbitPlanet() {
    orbitGroup.querySelectorAll('.mz-orbit-track').forEach((item) => {
      item.style.animationPlayState = 'running';
    });

    if (activePlanet) {
      activePlanet.classList.remove('is-active');
      activePlanet.style.transform = 'translate(-50%,-50%) scale(1)';
      activePlanet.style.zIndex = '';
    }

    activePlanet = null;
    setOrbitCoreState(null);
  }

  function buildOrbit() {
    orbitGroup.innerHTML = '';
    const radius = isMobile() ? 118 : (isMedium() ? 152 : 220);
    const planetSize = isMobile() ? 60 : (isMedium() ? 66 : 80);
    const labelSize = isMobile() ? '7.8px' : (isMedium() ? '8.6px' : '9.6px');
    let keyframes = '';

    orbitPlanets.forEach((planetData, index) => {
      const total = orbitPlanets.length;
      const degrees = (index / total) * 360;

      keyframes += `@keyframes mz-fo-${index}{`;
      keyframes += `from{transform:rotate(${degrees}deg) translateX(${radius}px) rotate(${-degrees}deg);}`;
      keyframes += `to{transform:rotate(${degrees + 360}deg) translateX(${radius}px) rotate(${-(degrees + 360)}deg);}}`;

      const track = document.createElement('div');
      track.className = 'mz-orbit-track';
      track.style.cssText = `position:absolute;width:0;height:0;top:0;left:0;animation:mz-fo-${index} 18s linear infinite;`;

      const planet = document.createElement('div');
      planet.className = 'mz-planet';
      planet.style.cssText = `width:${planetSize}px;height:${planetSize}px;--planet-color:${planetData.color};`;
      planet.innerHTML = `<div class="mz-planet__label" style="font-size:${labelSize}">${planetData.label.split('\n').join('<br>')}</div>`;

      const activatePlanet = () => {
        if (activePlanet && activePlanet !== planet) {
          activePlanet.classList.remove('is-active');
          activePlanet.style.transform = 'translate(-50%,-50%) scale(1)';
          activePlanet.style.zIndex = '';
        }

        orbitGroup.querySelectorAll('.mz-orbit-track').forEach((item) => {
          item.style.animationPlayState = 'paused';
        });
        planet.classList.add('is-active');
        planet.style.transform = 'translate(-50%,-50%) scale(1.3)';
        planet.style.zIndex = '30';
        activePlanet = planet;
        setOrbitCoreState(planetData);
      };

      planet.addEventListener('mouseenter', activatePlanet);
      planet.addEventListener('click', activatePlanet);
      planet.addEventListener('touchstart', (event) => {
        event.preventDefault();
        activatePlanet();
      }, { passive: false });

      track.appendChild(planet);
      orbitGroup.appendChild(track);
    });

    let styleTag = document.getElementById('mz-orbit-kf');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'mz-orbit-kf';
      document.head.appendChild(styleTag);
    }
    styleTag.textContent = keyframes;
  }

  function updateWizardProgress() {
    progressDots.forEach((dot) => {
      const dotStep = Number(dot.dataset.stepDot);
      dot.classList.toggle('is-active', wizardState.step === dotStep);
      dot.classList.toggle('is-done', wizardState.step > dotStep);
    });
  }

  function showWizardStep(step) {
    wizardState.step = Math.max(0, Math.min(step, 6));
    panels.forEach((panel) => {
      panel.classList.toggle('is-active', Number(panel.dataset.wizardStep) === wizardState.step);
    });
    elements.wizard.classList.toggle('mz-wizard--result', wizardState.step === 6);
    updateWizardProgress();
  }

  function updateBudgetValue() {
    wizardState.budget = Number(elements.budgetInput.value);
    elements.budgetValue.textContent = wizardState.budget >= 5000 ? '5 000+ €' : formatEuro(wizardState.budget);
    const percent = ((wizardState.budget - 200) / (5000 - 200)) * 100;
    elements.budgetInput.style.background = `linear-gradient(90deg, var(--brand-primary) ${percent}%, #1e1e2e ${percent}%)`;
  }

  function setChoice(field, value, button) {
    wizardState[field] = value;
    choiceButtons
      .filter((item) => item.dataset.field === field)
      .forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
  }

  function getOfferPrice(multiplier) {
    const base = wizardState.budget || 800;
    const from = Math.max(200, Math.round((base * multiplier) / 50) * 50);
    const to = Math.round((from * 1.25) / 50) * 50;
    return `${formatEuro(from)} - ${formatEuro(to)}`;
  }

  function getOfferBullets(tier) {
    const promoBullet = wizardState.promo === 'Áno'
      ? 'promo podpora pre prilakanie ludi'
      : 'bez promo balika';
    const common = [
      wizardState.need || 'program na mieru',
      wizardState.vibe ? `vibe: ${wizardState.vibe}` : 'vibe podla dohody',
      promoBullet
    ];

    if (tier === 'basic') return common;
    if (tier === 'best') return common.concat(['silnejsi zazitok pre hosti']);
    return common.concat(['najvacsi rozsah a kompletnejsie riesenie', 'priestor na doladenie detailov']);
  }

  function renderWizardSummary() {
    const items = [
      wizardState.audience,
      wizardState.need,
      wizardState.guests,
      wizardState.vibe,
      formatEuro(wizardState.budget),
      wizardState.promo ? `promo: ${wizardState.promo}` : ''
    ].filter(Boolean);

    elements.summary.innerHTML = items
      .map((item) => `<span class="mz-wizard-summary__chip">${item}</span>`)
      .join('');
  }

  function renderWizardOffers() {
    const offers = [
      {
        key: 'start',
        tier: 'Základ',
        headline: 'MZ Start',
        price: getOfferPrice(0.75),
        desc: 'Jednoduchý smer pre menšiu alebo úspornejšiu akciu.',
        bullets: getOfferBullets('basic'),
        recommended: false
      },
      {
        key: 'show',
        tier: 'Odporúčaná',
        badge: 'BEST VALUE',
        headline: 'MZ Show',
        price: getOfferPrice(1),
        desc: 'Vyvážený variant s dobrým pomerom zážitku, rozsahu a rozpočtu.',
        bullets: getOfferBullets('best'),
        recommended: true
      },
      {
        key: 'majster',
        tier: 'Prémiová',
        badge: 'PREMIUM',
        headline: 'MZ Majster',
        price: getOfferPrice(1.45),
        desc: 'Silnejší zážitok pre väčší dojem a väčší rozsah akcie.',
        bullets: getOfferBullets('premium'),
        recommended: false
      }
    ];

    elements.offers.innerHTML = offers.map((offer) => `
      <article class="mz-wizard-offer${offer.recommended ? ' is-recommended' : ''}">
        ${offer.badge ? `<div class="mz-wizard-offer__badge">${offer.badge}</div>` : ''}
        <div class="mz-wizard-offer__top">
          <div>
            <div class="mz-wizard-offer__tier">${offer.tier}</div>
            <h4 class="mz-wizard-offer__title">${offer.headline}</h4>
          </div>
          <div class="mz-wizard-offer__price">${offer.price}</div>
        </div>
        <p class="mz-wizard-offer__desc">${offer.desc}</p>
        <div class="mz-wizard-offer__items">
          ${offer.bullets.map((item, index) => `
            <div class="mz-wizard-offer__item">
              <span>${String(index + 1).padStart(2, '0')}</span>
              ${item}
            </div>
          `).join('')}
        </div>
        <button type="button" class="mz-wizard-offer__cta" data-wizard-offer="${offer.key}" data-wizard-offer-name="${offer.headline}" data-wizard-offer-price="${offer.price}" data-wizard-offer-bullets="${encodeURIComponent(offer.bullets.join('||'))}">
          ${offer.recommended ? 'Vybrať túto ponuku' : 'Mám záujem'}
        </button>
      </article>
    `).join('');
  }

  function renderWizardResult() {
    elements.resultIntro.textContent = 'Vybrali sme smer podľa tvojich odpovedí. Detailnú ponuku doladíme spolu.';
    renderWizardSummary();
    renderWizardOffers();
    showWizardStep(6);
  }

  function finishWizard() {
    showOverlay('MAJSTRI ZÁBAVY', 'Pripravujeme 3 ponuky...');
    window.setTimeout(() => {
      hideOverlay();
      renderWizardResult();
    }, 3000);
  }

  choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const field = button.dataset.field;
      const value = button.dataset.value;
      if (!field || !value) return;
      setChoice(field, value, button);

      if (field === 'promo') {
        finishWizard();
        return;
      }

      window.setTimeout(() => showWizardStep(wizardState.step + 1), 120);
    });
  });

  backButtons.forEach((button) => {
    button.addEventListener('click', () => showWizardStep(wizardState.step - 1));
  });

  nextButtons.forEach((button) => {
    button.addEventListener('click', () => showWizardStep(wizardState.step + 1));
  });

  elements.budgetInput.addEventListener('input', updateBudgetValue);
  elements.resetWizard.addEventListener('click', () => {
    Object.assign(wizardState, {
      step: 0,
      audience: '',
      need: '',
      guests: '',
      vibe: '',
      budget: 800,
      promo: ''
    });
    elements.budgetInput.value = '800';
    choiceButtons.forEach((button) => button.classList.remove('is-active'));
    updateBudgetValue();
    showWizardStep(0);
    elements.wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  elements.offers.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const button = target.closest('[data-wizard-offer]');
    if (!(button instanceof HTMLElement)) return;

    const packageName = button.dataset.wizardOfferName || 'MZ Show';
    const price = button.dataset.wizardOfferPrice || '';
    const bullets = decodeURIComponent(button.dataset.wizardOfferBullets || '').split('||').filter(Boolean);

    if (typeof window.MZApplyFollowupSelection === 'function') {
      window.MZApplyFollowupSelection({
        event: 'Akcia na mieru',
        scope: wizardState.need,
        scopeLabel: wizardState.need,
        packageName,
        variant: packageName,
        price,
        audience: wizardState.audience,
        guests: wizardState.guests,
        energy: wizardState.vibe,
        budget: formatEuro(wizardState.budget),
        promo: wizardState.promo,
        lead: `Vybral si ${packageName} pre ${wizardState.audience || 'akciu na mieru'}.`,
        bullets
      });
      return;
    }

    showToast('Vybrany variant si mozeme doladit cez kontakt.');
  });

  buildOrbit();
  sizeOrbit();
  updateBudgetValue();
  showWizardStep(0);

  elements.orbit.addEventListener('mouseleave', clearActiveOrbitPlanet);
  document.addEventListener('touchstart', (event) => {
    if (!elements.orbit.contains(event.target)) {
      clearActiveOrbitPlanet();
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    buildOrbit();
    sizeOrbit();
    clearActiveOrbitPlanet();
  });

  (function initPlannerFollowup() {
    const followup = document.getElementById('mz-followup-form');
    const followupSection = document.getElementById('planner-form');
    const title = document.getElementById('mz-followup-title');
    const description = document.getElementById('mz-followup-description');
    const chips = document.getElementById('mz-followup-chips');
    const image = document.getElementById('mz-followup-image');
    const hiddenEvent = document.getElementById('mz-followup-hidden-event');
    const hiddenVariant = document.getElementById('mz-followup-hidden-variant');
    const hiddenPrice = document.getElementById('mz-followup-hidden-price');
    const hiddenEnergy = document.getElementById('mz-followup-hidden-energy');
    const hiddenAudience = document.getElementById('mz-followup-hidden-audience');
    const hiddenGuests = document.getElementById('mz-followup-hidden-guests');
    const hiddenBudget = document.getElementById('mz-followup-hidden-budget');
    const hiddenPromo = document.getElementById('mz-followup-hidden-promo');
    const success = document.getElementById('mz-followup-success');
    const energyButtons = Array.from(document.querySelectorAll('.mz-followup-energy__btn'));
    const offerBox = document.getElementById('mz-followup-offer');
    const offerSelection = document.getElementById('mz-offer-selection');
    const offerDescription = document.getElementById('mz-offer-description');
    const offerPrice = document.getElementById('mz-offer-price');
    const offerIncludes = document.getElementById('mz-offer-includes');
    const offerContext = document.getElementById('mz-offer-context');
    const offerNote = document.getElementById('mz-offer-note');
    const orderLink = document.getElementById('mz-offer-order');
    const editButton = document.getElementById('mz-offer-edit');
    const contactLink = document.getElementById('mz-offer-contact');
    const dateField = document.getElementById('mz-followup-date');
    const addressField = document.getElementById('mz-followup-address');
    const guestsField = document.getElementById('mz-followup-guests');
    const audienceField = document.getElementById('mz-followup-audience');
    const nameField = document.getElementById('mz-followup-name');
    const contactField = document.getElementById('mz-followup-contact');
    const noteField = document.getElementById('mz-followup-note');
    const transferredFields = {
      guests: followup ? followup.querySelector('[data-followup-field="guests"]') : null,
      audience: followup ? followup.querySelector('[data-followup-field="audience"]') : null,
      energy: followup ? followup.querySelector('[data-followup-field="energy"]') : null
    };
    const params = new URLSearchParams(window.location.search);

    if (!followup || !followupSection || !title || !description || !chips || !image || !hiddenEvent || !hiddenVariant || !hiddenPrice || !hiddenEnergy || !hiddenAudience || !hiddenGuests || !hiddenBudget || !hiddenPromo || !success || !offerBox || !offerSelection || !offerDescription || !offerPrice || !offerIncludes || !offerContext || !offerNote || !orderLink || !editButton || !contactLink || !dateField || !addressField || !guestsField || !audienceField || !nameField || !contactField || !noteField) return;

    const selected = {
      source: params.get('source') || '',
      event: params.get('event') || '',
      scope: params.get('scope') || '',
      scopeLabel: params.get('scopeLabel') || '',
      packageName: params.get('package') || '',
      variant: params.get('variant') || '',
      price: params.get('price') || '',
      lead: params.get('lead') || '',
      poster: params.get('poster') || '',
      audience: params.get('audience') || '',
      guests: params.get('guests') || '',
      energy: params.get('energy') || '',
      budget: params.get('budget') || '',
      promo: params.get('promo') || '',
      bullets: (params.get('bullets') || '').split('||').filter(Boolean)
    };

    const fallbackBullets = {
      program: ['moderovanie alebo animacia', 'programovy blok podla vyberu', 'priestor na doladenie detailov'],
      atrakcie: ['vybrane atrakcie a doplnky', 'nasadenie podla priestoru akcie', 'doladenie rozsahu podla poctu ludi'],
      komplet: ['program aj atrakcie v jednom', 'zakladna organizacia akcie', 'doladenie detailov podla lokality a terminu']
    };

    function mapAudienceToFieldValue(value) {
      const normalized = (value || '').toLowerCase();
      if (normalized.includes('firma') || normalized.includes('hotel')) return 'firma';
      if (normalized.includes('obec') || normalized.includes('mesto')) return 'obec';
      if (normalized.includes('skola') || normalized.includes('škola') || normalized.includes('centrum')) return 'skola';
      if (normalized.includes('rodin') || normalized.includes('verej')) return 'rodina';
      return '';
    }

    function mapEnergyToFieldValue(value) {
      const normalized = (value || '').toLowerCase();
      if (normalized.includes('show') || normalized.includes('veľk') || normalized.includes('velk')) return 'show';
      if (normalized.includes('zabav') || normalized.includes('zábav')) return 'zabava';
      if (normalized.includes('pohod')) return 'pokoj';
      return '';
    }

    function setTransferredField(name, isTransferred) {
      if (!transferredFields[name]) return;
      transferredFields[name].classList.toggle('is-transferred', Boolean(isTransferred));
    }

    function getPricingGuests(value) {
      const numbers = String(value || '').match(/\d+/g);
      if (!numbers || !numbers.length) return value;
      return Math.max(...numbers.map((item) => Number(item)));
    }

    function normalizePlannerScope(value) {
      const raw = String(value || '').toLowerCase().trim();
      if (raw.includes('komplet')) return 'komplet';
      if (raw.includes('program') && raw.includes('atrak')) return 'komplet';
      if (raw.includes('atrak')) return 'atrakcie';
      if (raw.includes('program')) return 'program';
      return value || '';
    }

    function formatScopeParam(value) {
      const normalized = normalizePlannerScope(value);
      const labels = {
        program: 'Program',
        atrakcie: 'Atrakcie',
        komplet: 'Kompletná akcia'
      };
      return labels[normalized] || value || '';
    }

    function getScopeDisplayLabel() {
      return selected.scopeLabel || formatScopeParam(selected.scope);
    }

    function getScopeKey() {
      return getScopeDisplayLabel().toLowerCase().trim();
    }

    function getSelectionLabel() {
      return [selected.event, getScopeDisplayLabel(), selected.packageName || selected.variant].filter(Boolean).join(' / ') || 'Akcia na mieru';
    }

    let selectedEnergy = '';

    function applySelection(nextSelected, options = {}) {
      Object.assign(selected, {
        source: '',
        event: '',
        scope: '',
        scopeLabel: '',
        packageName: '',
        variant: '',
        price: '',
        lead: '',
        poster: '',
        audience: '',
        guests: '',
        energy: '',
        budget: '',
        promo: '',
        bullets: []
      }, nextSelected || {});

      title.textContent = getSelectionLabel();
      description.textContent = selected.source === 'quick-calc'
        ? 'Výber z kalkulačky máme uložený. Doplň už len posledné detaily.'
        : 'Ešte pár detailov a tvoja ponuka je pripravená.';
      chips.innerHTML = [
        selected.event ? `<span class="mz-followup-chip">${selected.event}</span>` : '',
        getScopeDisplayLabel() ? `<span class="mz-followup-chip">${getScopeDisplayLabel()}</span>` : '',
        selected.packageName ? `<span class="mz-followup-chip">${selected.packageName}</span>` : (selected.variant ? `<span class="mz-followup-chip">${selected.variant}</span>` : ''),
        selected.price ? `<span class="mz-followup-chip">${selected.price}</span>` : '',
        selected.audience ? `<span class="mz-followup-chip">${selected.audience}</span>` : '',
        selected.guests ? `<span class="mz-followup-chip">${selected.guests} ľudí</span>` : '',
        selected.energy ? `<span class="mz-followup-chip">${selected.energy}</span>` : '',
        selected.budget ? `<span class="mz-followup-chip">rozpočet ${selected.budget}</span>` : '',
        selected.promo ? `<span class="mz-followup-chip">promo: ${selected.promo}</span>` : ''
      ].join('');
      hiddenEvent.value = selected.event;
      hiddenVariant.value = selected.packageName || selected.variant;
      hiddenPrice.value = selected.price;
      hiddenAudience.value = selected.audience;
      hiddenGuests.value = selected.guests;
      hiddenBudget.value = selected.budget;
      hiddenPromo.value = selected.promo;

      if (selected.audience) {
        audienceField.value = mapAudienceToFieldValue(selected.audience);
        audienceField.required = false;
        setTransferredField('audience', true);
      } else {
        audienceField.required = true;
        setTransferredField('audience', false);
      }

      if (selected.guests) {
        guestsField.value = '';
        guestsField.required = false;
        setTransferredField('guests', true);
      } else {
        guestsField.required = true;
        setTransferredField('guests', false);
      }

      if (selected.energy) {
        selectedEnergy = mapEnergyToFieldValue(selected.energy);
        hiddenEnergy.value = selected.energy;
        energyButtons.forEach((button) => {
          button.classList.toggle('is-active', button.dataset.energy === selectedEnergy);
        });
        setTransferredField('energy', true);
      } else {
        selectedEnergy = '';
        hiddenEnergy.value = '';
        energyButtons.forEach((button) => button.classList.remove('is-active'));
        setTransferredField('energy', false);
      }

      if (selected.poster) {
        image.src = selected.poster;
        image.alt = title.textContent;
        image.hidden = false;
      } else {
        image.hidden = true;
        image.removeAttribute('src');
      }

      if (options.scroll) {
        requestAnimationFrame(() => {
          followupSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    }

    function getOfferBullets() {
      if (selected.bullets.length) return selected.bullets;
      const scopeKey = getScopeKey();
      if ((scopeKey.includes('program') && scopeKey.includes('atrak')) || scopeKey.includes('komplet')) return fallbackBullets.komplet;
      if (scopeKey.includes('program')) return fallbackBullets.program;
      if (scopeKey.includes('atrak')) return fallbackBullets.atrakcie;
      return fallbackBullets.komplet;
    }

    function formatAudience(value) {
      const audienceMap = {
        rodina: 'rodinna akcia',
        firma: 'firemny klient',
        obec: 'mesto alebo obec',
        skola: 'skola alebo centrum',
        ine: 'individualne zadanie'
      };

      return audienceMap[value] || value || '';
    }

    function formatEnergy(value) {
      const energyMap = {
        pokoj: 'styl: pohoda',
        zabava: 'styl: zabava',
        show: 'styl: show a energia'
      };

      return energyMap[value] || value || '';
    }

    function formatDate(value) {
      if (!value) return '';
      const parsed = new Date(`${value}T12:00:00`);
      if (Number.isNaN(parsed.getTime())) return value;
      return parsed.toLocaleDateString('sk-SK', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    }

    function buildOfferContext(formData) {
      const items = [];

      if (formData.guests) items.push(`${formData.guests} ľudí`);
      if (formData.address) items.push(formData.address);
      if (formData.audience) items.push(formatAudience(formData.audience));
      if (formData.energy) items.push(formatEnergy(formData.energy));
      if (formData.budget) items.push(`rozpočet ${formData.budget}`);
      if (formData.promo) items.push(`promo: ${formData.promo}`);
      if (formData.date) items.push(`termin ${formatDate(formData.date)}`);

      return items.filter(Boolean);
    }

    function createMailtoHref(offerData, formData) {
      const subject = `Objednavka / ${offerData.selection}`;
      const bodyLines = [
        'Dobry den,',
        '',
        'mam zaujem o tuto ponuku od Majstrov Zabavy:',
        `${offerData.selection}`,
        `Predbezna cena: ${offerData.price}`,
        '',
        'Zakladne udaje:',
        formData.date ? `Datum akcie: ${formatDate(formData.date)}` : '',
        formData.address ? `Miesto akcie: ${formData.address}` : '',
        formData.guests ? `Pocet ludi: ${formData.guests}` : '',
        formData.audience ? `Pre koho je akcia: ${formatAudience(formData.audience)}` : '',
        formData.energy ? `Styl energie: ${formatEnergy(formData.energy).replace('styl: ', '')}` : '',
        formData.budget ? `Rozpocet: ${formData.budget}` : '',
        formData.promo ? `Promo: ${formData.promo}` : '',
        formData.name ? `Meno: ${formData.name}` : '',
        formData.contact ? `Kontakt: ${formData.contact}` : '',
        formData.note ? `Poznamka: ${formData.note}` : '',
        '',
        'Prosim o doladenie detailov.',
        '',
        'Dakujem.'
      ].filter(Boolean);

      return `mailto:info@majstrizabavy.sk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    }

    window.MZApplyFollowupSelection = function applyQuickSelection(data) {
      applySelection({
        source: 'quick-calc',
        ...data
      }, { scroll: true });
    };

    if (selected.event && (selected.scope || selected.scopeLabel)) {
      applySelection(selected, { scroll: window.location.hash === '#planner-form' });
    }

    function autoResizeTextarea(field) {
      if (!field) return;
      field.style.height = 'auto';
      field.style.height = `${field.scrollHeight}px`;
    }

    function renderOfferResult() {
      const formData = {
        date: dateField.value,
        address: addressField.value.trim(),
        guests: selected.guests || guestsField.value.trim(),
        audience: selected.audience || audienceField.value,
        energy: selected.energy || selectedEnergy,
        budget: selected.budget,
        promo: selected.promo,
        name: nameField.value.trim(),
        contact: contactField.value.trim(),
        note: noteField.value.trim()
      };

      const selection = getSelectionLabel();
      const pricing = pricingApi
        ? pricingApi.calculateOffer({
            scope: normalizePlannerScope(selected.scopeLabel || selected.scope),
            eventName: selected.event,
            audience: formData.audience,
            guests: getPricingGuests(formData.guests),
            budget: formData.budget,
            packageName: selected.packageName || selected.variant,
            price: selected.price
          })
        : null;
      const price = pricing ? pricing.priceText : (selected.price || 'Cena na vyziadanie');
      const bullets = getOfferBullets();
      const contextItems = buildOfferContext(formData).concat(
        pricing ? pricing.reasons.slice(0, 3) : [],
        ...getKompletSavingsContext(pricing)
      );

      offerSelection.textContent = selection;
      offerDescription.textContent = selected.lead
        ? `${selected.lead} Ponuku sme pripravili podla tvojho vyberu a zadanych udajov.`
        : 'Ponuku sme pripravili podla tvojho vyberu a zadanych udajov.';
      offerPrice.textContent = price;
      offerIncludes.innerHTML = bullets.map((item) => `<li>${item}</li>`).join('');
      offerContext.innerHTML = contextItems.length
        ? contextItems.map((item) => `<span class="mz-followup-offer__context-chip">${item}</span>`).join('')
        : '<span class="mz-followup-offer__context-chip">Finalne detaily doladime spolu</span>';
      offerNote.textContent = pricing && pricing.scope === 'komplet' && pricing.discountAmount
        ? `Komplet akcia je cenovo zvyhodnena oproti samostatnemu objednaniu sluzieb. Samostatne by ta tato kombinacia vysla na ${pricing.listPriceText}, teraz ju vidis za ${pricing.exactPriceText}. Ak ti vyhovuje, mozes pokracovat v objednavke alebo s nami doladit posledne detaily.`
        : 'Ponuka bola pripravena podla vybraneho variantu a zadanych udajov. Ak ti vyhovuje, mozes pokracovat v objednavke alebo s nami doladit posledne detaily.';
      orderLink.href = createMailtoHref({ selection, price }, formData);
      success.hidden = true;
      offerBox.hidden = false;

      requestAnimationFrame(() => {
        offerBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    energyButtons.forEach((button) => {
      button.addEventListener('click', () => {
        energyButtons.forEach((item) => item.classList.remove('is-active'));
        button.classList.add('is-active');
        selectedEnergy = button.dataset.energy;
        hiddenEnergy.value = selectedEnergy;
      });
    });

    autoResizeTextarea(noteField);
    noteField.addEventListener('input', () => autoResizeTextarea(noteField));

    followup.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!followup.reportValidity()) {
        showToast('Dopln prosim vsetky dolezite udaje.');
        return;
      }
      hiddenEnergy.value = selected.energy || selectedEnergy || '';
      showOverlay('MAJSTRI ZÁBAVY', 'Pripravujeme vašu ponuku...');
      window.setTimeout(() => {
        hideOverlay();
        renderOfferResult();
        showToast('Predbezna ponuka je pripravena.');
      }, 2200);
    });

    editButton.addEventListener('click', () => {
      offerBox.hidden = true;
      success.hidden = true;
      followupSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    orderLink.addEventListener('click', () => {
      success.hidden = false;
      showToast('Otvarame predvyplneny email s objednavkou.');
    });

    contactLink.addEventListener('click', () => {
      showToast('Otvarame kontakt na Majstrov Zabavy.');
    });
  })();
})();
