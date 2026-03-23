(function () {
  'use strict';

  const root = document.getElementById('mzv2-calculator');
  if (!root) return;

  const els = {
    intentButtons: Array.from(root.querySelectorAll('.mzv2-intent')),
    typeSelect: document.getElementById('mzv2-type'),
    locationSelect: document.getElementById('mzv2-location'),
    customWrap: document.getElementById('mzv2-custom-wrap'),
    customInput: document.getElementById('mzv2-custom'),
    guestRange: document.getElementById('mzv2-guests'),
    guestValue: document.getElementById('mzv2-guests-value'),
    budgetRange: document.getElementById('mzv2-budget'),
    budgetValue: document.getElementById('mzv2-budget-value'),
    budgetPill: document.getElementById('mzv2-budget-pill'),
    expectationButtons: Array.from(root.querySelectorAll('.mzv2-expect')),
    generateBtn: document.getElementById('mzv2-generate'),
    error: document.getElementById('mzv2-error'),
    result: document.getElementById('mzv2-result'),
    summary: document.getElementById('mzv2-summary'),
    offers: document.getElementById('mzv2-offers')
  };

  const state = {
    intent: '',
    expectation: 'balanced'
  };

  const optionSets = {
    full: [
      { value: 'firemna-akcia', label: 'Firemna akcia', multiplier: 1.35 },
      { value: 'den-deti', label: 'Den deti / rodinny den', multiplier: 1.1 },
      { value: 'mesto-obec', label: 'Mestska alebo obecna akcia', multiplier: 1.5 },
      { value: 'svadba-oslava', label: 'Svadba alebo vacsia oslava', multiplier: 1.25 },
      { value: 'skolska-akcia', label: 'Skolska akcia', multiplier: 0.86 }
    ],
    program: [
      { value: 'karneval', label: 'Karneval alebo tematicky program', multiplier: 0.95 },
      { value: 'svadobny-program', label: 'Program na svadbu alebo oslavu', multiplier: 1.1 },
      { value: 'firemny-program', label: 'Program pre firmu alebo team', multiplier: 1.25 },
      { value: 'mikulas', label: 'Mikulas alebo vianocny program', multiplier: 1.05 },
      { value: 'den-deti-program', label: 'Program na Den deti', multiplier: 1.0 }
    ],
    addons: [
      { value: 'maskoti', label: 'Maskoti a postavicky', multiplier: 0.9 },
      { value: 'penove-delo', label: 'Penove delo alebo efekt', multiplier: 1.15 },
      { value: 'skakaci-hrad', label: 'Skakaci hrad alebo atrakcia', multiplier: 1.05 },
      { value: 'moderatorka', label: 'Moderator alebo animatori', multiplier: 1.0 },
      { value: 'sladky-kutik', label: 'Cukrova vata, popcorn, sladky kutik', multiplier: 0.95 }
    ],
    custom: [
      { value: 'vlastne-zadanie', label: 'Vlastny event alebo koncept', multiplier: 1.2 }
    ]
  };

  const baseByIntent = {
    full: [900, 1800, 3200],
    program: [350, 750, 1450],
    addons: [150, 320, 650],
    custom: [1000, 2100, 3600]
  };

  const expectationCopy = {
    practical: {
      label: 'Prakticke riesenie',
      multiplier: 0.92,
      names: ['Zaklad', 'Vyvazene riesenie', 'Silnejsi upgrade']
    },
    balanced: {
      label: 'Silny program',
      multiplier: 1,
      names: ['Smart start', 'Program na mieru', 'Signature']
    },
    wow: {
      label: 'Wow efekt',
      multiplier: 1.18,
      names: ['Start s efektom', 'Wow program', 'Majstri Zabavy VIP']
    }
  };

  const locationFactors = {
    ba: 1.16,
    tt: 1.04,
    tn: 1.03,
    nr: 1.02,
    za: 1.04,
    bb: 1.05,
    po: 1.07,
    ke: 1.1
  };

  function formatEur(value) {
    return `${Math.round(value).toLocaleString('sk-SK')} EUR`;
  }

  function setIntent(intent) {
    state.intent = intent;
    els.intentButtons.forEach((button) => {
      button.classList.toggle('is-active', button.dataset.intent === intent);
    });

    const options = optionSets[intent] || [];
    els.typeSelect.innerHTML = '<option value="">Vyber konkretnejsie zadanie</option>' + options
      .map((option) => `<option value="${option.value}">${option.label}</option>`)
      .join('');

    const isCustom = intent === 'custom';
    els.customWrap.hidden = !isCustom;
    if (!isCustom) els.customInput.value = '';
  }

  function setExpectation(value) {
    state.expectation = value;
    els.expectationButtons.forEach((button) => {
      button.classList.toggle('is-active', button.dataset.expectation === value);
    });
  }

  function updateGuest() {
    const value = parseInt(els.guestRange.value, 10);
    els.guestValue.textContent = value >= 3000 ? '3000+ osob' : `${value} osob`;
  }

  function getBudgetBand(value) {
    if (value <= 400) return 'Doplnky';
    if (value <= 900) return 'Zaklad';
    if (value <= 1800) return 'Na mieru';
    if (value <= 3000) return 'Vyssi standard';
    return 'Produkcia';
  }

  function updateBudget() {
    const value = parseInt(els.budgetRange.value, 10);
    els.budgetValue.textContent = formatEur(value);
    els.budgetPill.textContent = getBudgetBand(value);
  }

  function getSelectedOption() {
    const selected = els.typeSelect.value;
    const options = optionSets[state.intent] || [];
    return options.find((option) => option.value === selected);
  }

  function computeGuestFactor(guests) {
    if (guests <= 50) return 0.9;
    if (guests <= 150) return 1;
    if (guests <= 350) return 1.12;
    if (guests <= 700) return 1.24;
    return 1.38;
  }

  function getRecommendedIndex(prices, budget) {
    let bestIndex = 0;
    let bestDiff = Number.POSITIVE_INFINITY;
    prices.forEach((price, index) => {
      const diff = Math.abs(price - budget);
      if (diff < bestDiff) {
        bestDiff = diff;
        bestIndex = index;
      }
    });
    return bestIndex;
  }

  function getOfferBullets(intent, optionLabel, expectation, locationLabel) {
    const bulletsByIntent = {
      full: [
        `Navrh celeho konceptu pre ${optionLabel.toLowerCase()}`,
        `Koordinacia programu a produkcie v lokalite ${locationLabel}`,
        `Jasny vysledok podla urovene: ${expectation.label}`
      ],
      program: [
        `Programovy blok vyskladany pre ${optionLabel.toLowerCase()}`,
        `Tempo, energia a dramaturgia podla publika`,
        `Moznost rozsireni podla lokality ${locationLabel}`
      ],
      addons: [
        `Doplnky vybrate pre ${optionLabel.toLowerCase()}`,
        `Jednoducha logistika a rychle nasadenie na miesto`,
        `Moznost vyskladat viac prvkov podla rozpoctu`
      ],
      custom: [
        `Vlastny koncept uchopeny do jasneho smeru`,
        `Priestor na individualnu cenovu ponuku a doplnenie detailov`,
        `Realne riesenie pre lokalitu ${locationLabel}`
      ]
    };

    return bulletsByIntent[intent] || bulletsByIntent.custom;
  }

  function renderOffers() {
    const option = getSelectedOption();
    const location = els.locationSelect.value;
    const budget = parseInt(els.budgetRange.value, 10);
    const guests = parseInt(els.guestRange.value, 10);
    const customText = els.customInput.value.trim();

    if (!state.intent || !option || !location || (state.intent === 'custom' && !customText)) {
      els.error.classList.add('is-visible');
      els.result.hidden = true;
      return;
    }

    els.error.classList.remove('is-visible');

    const expectation = expectationCopy[state.expectation] || expectationCopy.balanced;
    const locationLabel = els.locationSelect.options[els.locationSelect.selectedIndex].text;
    const locationFactor = locationFactors[location] || 1;
    const guestFactor = computeGuestFactor(guests);
    const subtypeFactor = option.multiplier || 1;
    const prices = (baseByIntent[state.intent] || baseByIntent.custom).map((base) =>
      Math.round(base * subtypeFactor * guestFactor * locationFactor * expectation.multiplier)
    );

    const recommendedIndex = getRecommendedIndex(prices, budget);
    const bullets = getOfferBullets(state.intent, option.label, expectation, locationLabel);

    els.summary.innerHTML = [
      `<span class="mzv2-chip">${option.label}</span>`,
      `<span class="mzv2-chip">${locationLabel}</span>`,
      `<span class="mzv2-chip">${guests >= 3000 ? '3000+' : guests} hosti</span>`,
      `<span class="mzv2-chip">${expectation.label}</span>`
    ].join('');

    els.offers.innerHTML = prices.map((price, index) => {
      const min = Math.max(0, price - Math.round(price * 0.08));
      const max = price + Math.round(price * 0.12);
      const isRecommended = index === recommendedIndex;
      const fitText = isRecommended
        ? 'Toto je momentalne najblizsie tomu, co si zadal. Najlepsi pomer medzi typom akcie, rozsahom a rozpoctom.'
        : index < recommendedIndex
          ? 'Jednoduchsia verzia pre klienta, ktory chce usetrit a stale mat funkcny vysledok.'
          : 'Silnejsi smer pre klienta, ktory chce vacsi efekt, istotu alebo viac sluzieb navyse.';

      return [
        `<article class="mzv2-offer${isRecommended ? ' is-recommended' : ''}">`,
        `<div class="mzv2-offer__badge">${isRecommended ? 'Odporucame' : `Variant ${index + 1}`}</div>`,
        `<h4 class="mzv2-offer__name">${expectation.names[index]}</h4>`,
        `<div class="mzv2-offer__price">${formatEur(min)} - ${formatEur(max)}</div>`,
        `<p class="mzv2-offer__fit">${fitText}</p>`,
        '<ul class="mzv2-offer__list">',
        bullets.map((bullet) => `<li>${bullet}</li>`).join(''),
        '</ul>',
        '</article>'
      ].join('');
    }).join('');

    els.result.hidden = false;
  }

  els.intentButtons.forEach((button) => {
    button.addEventListener('click', () => setIntent(button.dataset.intent));
  });

  els.expectationButtons.forEach((button) => {
    button.addEventListener('click', () => setExpectation(button.dataset.expectation));
  });

  els.guestRange.addEventListener('input', updateGuest);
  els.budgetRange.addEventListener('input', updateBudget);
  els.generateBtn.addEventListener('click', renderOffers);

  setExpectation('balanced');
  updateGuest();
  updateBudget();
})();
