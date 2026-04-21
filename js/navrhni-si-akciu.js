(function () {
  'use strict';

  const root = document.getElementById('navrhni-akciu-section');
  if (!root) return;

  const elements = {
    orbit: document.getElementById('mz-orbit'),
    coreLogo: document.getElementById('mz-core-logo'),
    coreDesc: document.getElementById('mz-core-desc'),
    planets: document.getElementById('mz-planets'),
    activateBtn: document.getElementById('mz-activate-btn'),
    overlay: document.getElementById('mz-overlay'),
    overlayTitle: document.getElementById('mz-overlay-title'),
    overlayText: document.getElementById('mz-overlay-text'),
    cardWrap: root.querySelector('.mz-card-wrap'),
    planner: document.getElementById('mz-planner'),
    result: document.getElementById('mz-result'),
    resultLabel: root.querySelector('.mz-result__label'),
    resultMessage: document.getElementById('mz-result-msg'),
    aiText: document.getElementById('mz-ai-text'),
    cursor: document.getElementById('mz-cursor'),
    modules: document.getElementById('mz-modules'),
    summary: document.getElementById('mz-summary'),
    ctaRow: document.getElementById('mz-cta-row'),
    thinking: document.getElementById('mz-thinking'),
    thinkingLabel: document.getElementById('mz-thinking-label'),
    toast: document.getElementById('mz-toast'),
    needGrid: document.getElementById('mz-need-grid'),
    eventType: document.getElementById('mz-event-type'),
    budgetSlider: document.getElementById('mz-budget-slider'),
    budgetAmount: document.getElementById('mz-budget-amount'),
    budgetPill: document.getElementById('mz-budget-pill'),
    budgetTip: document.getElementById('mz-budget-tip'),
    guestSlider: document.getElementById('mz-guest-slider'),
    guestValue: document.getElementById('mz-guest-val'),
    errorHint: document.getElementById('mz-error-hint'),
    card: document.getElementById('mz-card'),
    approveBtn: document.getElementById('mz-approve-btn'),
    resetBtn: document.getElementById('mz-reset-btn'),
    quickOffer: document.getElementById('mz-quick-offer'),
    quickSelection: document.getElementById('mz-quick-selection'),
    quickDescription: document.getElementById('mz-quick-description'),
    quickContext: document.getElementById('mz-quick-context'),
    quickCards: document.getElementById('mz-quick-cards'),
    quickNote: document.getElementById('mz-quick-note'),
    quickEdit: document.getElementById('mz-quick-edit'),
    quickContact: document.getElementById('mz-quick-contact')
  };

  const required = [
    elements.orbit,
    elements.coreLogo,
    elements.coreDesc,
    elements.planets,
    elements.activateBtn,
    elements.overlay,
    elements.overlayTitle,
    elements.overlayText,
    elements.cardWrap,
    elements.planner,
    elements.result,
    elements.resultLabel,
    elements.resultMessage,
    elements.aiText,
    elements.cursor,
    elements.summary,
    elements.toast,
    elements.needGrid,
    elements.eventType,
    elements.budgetSlider,
    elements.budgetAmount,
    elements.budgetPill,
    elements.budgetTip,
    elements.guestSlider,
    elements.guestValue,
    elements.errorHint,
    elements.card,
    elements.approveBtn,
    elements.resetBtn,
    elements.quickOffer,
    elements.quickSelection,
    elements.quickDescription,
    elements.quickContext,
    elements.quickCards,
    elements.quickNote,
    elements.quickEdit,
    elements.quickContact
  ].every(Boolean);
  if (!required) return;

  const needButtons = Array.from(root.querySelectorAll('.mz-need-btn'));
  const orbitPlanets = [
    { label: 'Kalendar', desc: 'Tvoja akcia moze byt sucastou nasho kalendara a ziskat pozornost este pred zaciatkom.', color: '#7b4dff' },
    { label: 'Reels\npromo', desc: 'Po akcii vytvorime kratke video, ktore ukaze atmosferu a oslovi dalsich ludi.', color: '#4c8dff' },
    { label: 'Video\npozvanka', desc: 'Pripravime putave video, ktore pritiahne ludi na tvoju akciu.', color: '#8e67ff' },
    { label: 'Socialne\nsiete', desc: 'Tvoja akcia moze ziskat priestor na nasich kanaloch - Facebook, Instagram, TikTok aj YouTube.', color: '#6d78ff' },
    { label: 'Podpora', desc: 'Pomahame ti s priebehom, komunikaciou aj celkovym dojmom, aby vsetko fungovalo.', color: '#9b7dff' },
    { label: 'Garancia\nkvality', desc: 'Za vysledkom si stojime. Ked je akcia pod nasou taktovkou, musi dopadnut dobre.', color: '#5c8fff' }
  ];

  const state = {
    need: '',
    priority: null,
    budget: 500,
    lastPricing: null,
    typewriterTimer: null,
    thinkingTimer: null
  };

  const pricingApi = window.MZPricing || null;

  const tips = [
    { max: 50, zone: 'micro', pill: 'Startovaci plan', tip: 'Jednoduchy navrh na rozbeh akcie' },
    { max: 250, zone: 'low', pill: 'Doplnky', tip: 'Doplnky a mensie oivenie akcie' },
    { max: 600, zone: 'mid', pill: 'Program', tip: 'Programovy variant pre mensie a stredne akcie' },
    { max: 1200, zone: 'mid', pill: 'Program', tip: 'Silnejsi program s vacsim priestorom na zazitok' },
    { max: 3001, zone: 'high', pill: 'Komplet akcia', tip: 'Program aj atrakcie v jednom rieseni' }
  ];

  const planDb = {
    firemny: {
      energia: [
        { icon: '⚡', name: 'MZ Move', desc: 'Dynamicka zona so zivou hudbou a pohybovymi aktivitami pre cely tim', badge: 'BESTSELLER' },
        { icon: '🎙️', name: 'Moderator Pro', desc: 'Charizmaticky moderator s interaktivnymi hrami a live kvizmi', badge: 'ODPORUCAM' },
        { icon: '🎆', name: 'Afterparty Show', desc: 'Ohnostroj a DJ set do rana - zaver, na ktory nezabudnu', badge: 'PREMIUM' }
      ],
      elegancia: [
        { icon: '🍷', name: 'Gala Vecer', desc: 'Elegantne aranazovane stoly, ziva kapela a black tie atmosfera', badge: 'LUXUS' },
        { icon: '🎭', name: 'Artisticke Sou', desc: 'Profesionalni artisti: zongleri, akrobati a iluzionisti', badge: 'WOW EFEKT' },
        { icon: '📸', name: 'Premium Foto Zona', desc: 'Profesionalna 360 foto kabinka s tlacou a logom firmy', badge: 'BRAND' }
      ],
      pohoda: [
        { icon: '🎉', name: 'Team Fun Zone', desc: 'Spolocenske hry, kvizy a priatelska sutaz pre cely tim', badge: 'OBLUBENE' },
        { icon: '🍕', name: 'Food Lounge', desc: 'Neformalne stolovanie, street food catering a live cooking', badge: 'KOMFORT' },
        { icon: '🎵', name: 'Live Akustika', desc: 'Zivy akusticky set - teplo a ludskost', badge: 'SRDCOVKA' }
      ]
    },
    svadba: {
      energia: [
        { icon: '💃', name: 'Dance Floor VIP', desc: 'DJ, svetelna sou a tanecna plocha s efektmi', badge: 'TANCOVACKA' },
        { icon: '🎊', name: 'Konfeti Kanon', desc: 'Prvy tanec s konfetami a blikajucimi svetlami', badge: 'WOW MOMENT' },
        { icon: '🎤', name: 'Live Band', desc: 'Svadobna kapela od prveho tanca az po ranne hodiny', badge: 'KLASIKA' }
      ],
      elegancia: [
        { icon: '🌹', name: 'Luxury Decor', desc: 'Premium vyzdoba s kvetmi, svieckami a elegantnym priestretim', badge: 'LUXUS' },
        { icon: '🍾', name: 'Champagne Tower', desc: 'Sampanska veza pre nezabudnutelny moment', badge: 'ICONIC' },
        { icon: '🎻', name: 'Slacikove Kvarteto', desc: 'Klasicka hudba pocas svadobnej hostiny', badge: 'PREMIOVE' }
      ],
      pohoda: [
        { icon: '🌿', name: 'Zahradna Svadoba', desc: 'Vonkajsie posedenie, prirodna atmosfera a teplo rodiny', badge: 'OBLUBENE' },
        { icon: '📷', name: 'Foto a Spomienky', desc: 'Candid fotograf a polaroidova kniha podpisov hosti', badge: 'MEMORY' },
        { icon: '🎂', name: 'Torta Sou', desc: 'Krajaci ritual s hudbou, svetlami a prekvapenim', badge: 'SWEET' }
      ]
    },
    narozeniny: {
      energia: [
        { icon: '🎉', name: 'Party Blast', desc: 'DJ, stroboskopy a tanecny floor', badge: 'PARTY HARD' },
        { icon: '🎤', name: 'Karaoke VIP', desc: 'Profesionalna karaoke zona s LED obrazovkou', badge: 'FUN' },
        { icon: '🎆', name: 'Surprise Show', desc: 'Surprise moment so specialnymi efektmi a tortou', badge: 'WOW' }
      ],
      elegancia: [
        { icon: '💎', name: 'VIP Dinner', desc: 'Exkluzivna vecera s premium menu a obsluhou', badge: 'LUXUS' },
        { icon: '🍾', name: 'Bubble Bar', desc: 'Sampansky bar s vyberom premium vin', badge: 'PREMIUM' },
        { icon: '🌟', name: 'Star Setup', desc: 'Hviezdicovy dekor s personalizovanymi detailmi', badge: 'PERSONAL' }
      ],
      pohoda: [
        { icon: '🏡', name: 'Garden Party', desc: 'Zahradna oslava v uvolnenej atmosfere s grilom', badge: 'RELAXED' },
        { icon: '🎵', name: 'Playlist Live', desc: 'Curated playlist a akusticka kapela', badge: 'VIBES' },
        { icon: '📸', name: 'Photo Booth', desc: 'Fotokabinka s rekvizitami a okamzitou tlacou', badge: 'MEMORIES' }
      ]
    },
    teambuilding: {
      energia: [
        { icon: '🏆', name: 'Olympiada Timu', desc: 'Sutazne discipliny v teamoch: rychlost, sila a kreativita', badge: 'SUTAZ' },
        { icon: '⚡', name: 'Escape Room XXL', desc: 'Velkoformatovy escape room priamo na mieste', badge: 'MIND GAME' },
        { icon: '🎯', name: 'Target Challenge', desc: 'Lukostrelba, axe throwing a paintball', badge: 'ADRENALIN' }
      ],
      elegancia: [
        { icon: '🍳', name: 'Cooking Battle', desc: 'Timove varenie pod vedenim sefkuchara', badge: 'KREATIVITA' },
        { icon: '🎨', name: 'Art Workshop', desc: 'Malovanie, sculpting a dizajn v teamoch', badge: 'TVORIVOST' },
        { icon: '🍷', name: 'Wine Tasting', desc: 'Profesionalna degustacia vin so sommelierom', badge: 'KULTURA' }
      ],
      pohoda: [
        { icon: '🌿', name: 'Outdoor Relax', desc: 'Turistika, piknik a hry v prirode', badge: 'PRIRODA' },
        { icon: '🎲', name: 'Board Game Arena', desc: 'Zbierka spolocenskych hier', badge: 'FUN' },
        { icon: '🧘', name: 'Wellness Reset', desc: 'Cvicenie, mindfulness a relaxacna zona', badge: 'WELL-BEING' }
      ]
    },
    gala: {
      energia: [
        { icon: '🎭', name: 'Grand Sou', desc: 'Sou s tanecnikmi, artistami a ohnostrojom', badge: 'SPEKTAKL' },
        { icon: '💃', name: 'Tanecni Soliste', desc: 'Profesionalni tanecnici s choreografiou', badge: 'PREMIUM' },
        { icon: '🎙️', name: 'Celebrity MC', desc: 'Renomovany moderator s charizmatickym prejavom', badge: 'HVIEZDA' }
      ],
      elegancia: [
        { icon: '👑', name: 'Royal Setup', desc: 'Kralovska vyzdoba s kristalovymi detailmi a zlatom', badge: 'ROYAL' },
        { icon: '🎻', name: 'Orchester Live', desc: 'Zivy komorny orchester pocas vecere', badge: 'KLASIKA' },
        { icon: '🍽️', name: 'Gourmet Menu', desc: 'Patchodove menu s wine pairingom', badge: 'GOURMET' }
      ],
      pohoda: [
        { icon: '🌟', name: 'Stars and Stories', desc: 'Pribehy, videa a prezentacia uspechov', badge: 'EMOTIVNE' },
        { icon: '📸', name: 'Photo Memories', desc: 'Fotograf a video highlight reels', badge: 'SPOMIENKY' },
        { icon: '🥂', name: 'Cocktail Lounge', desc: 'Premium kokteilovy bar s barmanom', badge: 'LOUNGE' }
      ]
    }
  };

  const defaultPlan = {
    energia: [
      { icon: '⚡', name: 'MZ Move', desc: 'Dynamicka zona so zivou hudbou', badge: 'BESTSELLER' },
      { icon: '🎙️', name: 'Moderator Pro', desc: 'Profesionalny moderator s hrami', badge: 'ODPORUCAM' },
      { icon: '🎆', name: 'Zaverecna Show', desc: 'Zaverecna sou pre maximum dojmov', badge: 'PREMIUM' }
    ],
    elegancia: [
      { icon: '💎', name: 'Premium Setup', desc: 'Luxusna vyzdoba a elegantna atmosfera', badge: 'LUXUS' },
      { icon: '🎭', name: 'Artisticke Vystupenie', desc: 'Profesionalni umelci pre WOW zazitok', badge: 'WOW' },
      { icon: '🍷', name: 'VIP Lounge', desc: 'Exkluzivna VIP zona s premium servisom', badge: 'VIP' }
    ],
    pohoda: [
      { icon: '🎉', name: 'Fun Zone', desc: 'Aktivity pre vsetkych hosti', badge: 'FAMILY' },
      { icon: '🍕', name: 'Food Station', desc: 'Catering pre kazdy vkus', badge: 'KOMFORT' },
      { icon: '🎵', name: 'Live Music', desc: 'Ziva hudba - tepla atmosfera', badge: 'VIBES' }
    ]
  };

  const tierData = {
    low: {
      label: 'MAJSTROVSKE DOPLNKY',
      cls: 'mz-tier-badge--low',
      noteCls: 'mz-tier-note--low',
      note: 'Pre komplexny program s nasim timom je potrebny vyssi rozpocet, ale tieto doplnky spravia skvelu pracu aj tak.',
      modules: [
        { icon: '🦁', name: 'Maskot na mieru', desc: 'Kostymovany maskot - rozziari kazdu oslavu', badge: 'HIT U DETI' },
        { icon: '📸', name: 'Fotostena', desc: 'Fotostena s logom alebo tematickym dizajnom', badge: 'INSTAGRAMABLE' },
        { icon: '🍭', name: 'Cukrova vata', desc: 'Farebny stanok, ktory vzdy prinasa usmevy', badge: 'SLADKY HIT' },
        { icon: '🔊', name: 'Prenajom techniky', desc: 'Ozvucenie, mikrofony a reproduktory', badge: 'ZAKLAD' }
      ]
    },
    mid: {
      label: 'PROGRAM NA MIERU',
      cls: 'mz-tier-badge--mid',
      noteCls: 'mz-tier-note--mid',
      note: null,
      modules: null
    },
    high: {
      label: 'PRODUKCIA NA KLUC',
      cls: 'mz-tier-badge--high',
      noteCls: 'mz-tier-note--high',
      note: null,
      modules: [
        { icon: '🏙️', name: 'Mestske dni', desc: 'Kompletna produkcia mestskej slavnosti', badge: 'MEGA EVENT' },
        { icon: '🏢', name: 'Firemny event XL', desc: 'Firemny event na kluc - od konceptu po realizaciu', badge: 'ALL-IN-ONE' },
        { icon: '🎪', name: 'Festival Package', desc: 'Viacdenny festival s plnou produkciou', badge: 'FESTIVAL PRO' }
      ]
    }
  };

  const thinkingMessages = {
    micro: ['Detekujem micro-budget...', 'Hladam kreativne riesenia...', 'Pripravujem eBook...', 'Hotovo!'],
    low: ['Analyzujem budget...', 'Vyberam doplnky zabavy...', 'Zostavujem ponuku...', 'Hotovo!'],
    mid: ['Analyzujem rozpocet...', 'Prechadzam databazu eventov...', 'Filtrujem dostupne moduly...', 'Zostavujem vas plan...'],
    high: ['Aktivujem premium mod...', 'Kontaktujem produkcny tim...', 'Kalkulujem full package...', 'Hotovo!']
  };

  const priorityButtons = Array.from(root.querySelectorAll('.mz-priority-btn'));
  const budgetBars = {
    low: root.querySelector('.mz-bz--low'),
    mid: root.querySelector('.mz-bz--mid'),
    high: root.querySelector('.mz-bz--high')
  };
  const defaultResultLabel = elements.resultLabel.textContent;
  const needMap = {
    program: 'Program',
    atrakcie: 'Atrakcie',
    komplet: 'Komplet akcia'
  };
  const typeMap = {
    firemny: 'Firemny event',
    svadba: 'Svadba',
    narozeniny: 'Narodeninova party',
    teambuilding: 'Teambuilding',
    koncert: 'Koncert / Show',
    detsky: 'Detsky event',
    gala: 'Galavecer'
  };
  const priorityMap = {
    energia: 'Show a energia',
    elegancia: 'Pohoda',
    pohoda: 'Zabava'
  };

  function hexToRgb(hex) {
    return [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)).join(',');
  }

  function isMobile() {
    return window.innerWidth < 601;
  }

  function isMedium() {
    return window.innerWidth >= 601 && window.innerWidth <= 860;
  }

  function getTier(value) {
    if (value <= 50) return 'micro';
    if (value < 250) return 'low';
    if (value <= 1000) return 'mid';
    return 'high';
  }

  function showToast(message) {
    elements.toast.textContent = message;
    elements.toast.classList.add('mz-toast--show');
    window.setTimeout(() => {
      elements.toast.classList.remove('mz-toast--show');
    }, 3000);
  }

  function showOverlay(brand, message) {
    if (elements.overlayTitle) elements.overlayTitle.textContent = brand || 'MAJSTRI ZÁBAVY';
    if (elements.overlayText) elements.overlayText.textContent = message || 'Pripravujeme ponuku...';
    document.body.classList.add('mz-overlay-open');
    elements.overlay.setAttribute('aria-hidden', 'false');
    elements.overlay.classList.add('mz-overlay--active');
  }

  function hideOverlay() {
    elements.overlay.classList.remove('mz-overlay--active');
    elements.overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('mz-overlay-open');
  }

  function updateBudget() {
    const value = parseInt(elements.budgetSlider.value, 10);
    state.budget = value;
    elements.budgetAmount.textContent = value >= 3000 ? '3 000 EUR +' : `${value} EUR`;

    const entry = tips.find((tip) => value <= tip.max) || tips[tips.length - 1];
    const tier = getTier(value);
    elements.budgetPill.textContent = entry.pill;
    elements.budgetPill.className = `mz-budget__pill zone-${tier}`;
    elements.budgetTip.textContent = entry.tip;

    Object.values(budgetBars).forEach((bar) => bar.classList.remove('mz-bz--active'));
    if (tier === 'micro' || tier === 'low') budgetBars.low.classList.add('mz-bz--active');
    if (tier === 'mid') budgetBars.mid.classList.add('mz-bz--active');
    if (tier === 'high') budgetBars.high.classList.add('mz-bz--active');
  }

  function updateGuests() {
    const value = parseInt(elements.guestSlider.value, 10);
    elements.guestValue.textContent = value >= 1000 ? '1000+ osob' : `${value} osob`;
    const pct = ((value - 10) / (1000 - 10)) * 100;
    elements.guestSlider.style.background = `linear-gradient(90deg,#b44dff ${pct}%,rgba(255,255,255,0.1) ${pct}%)`;
  }

  function selectPriority(button) {
    priorityButtons.forEach((item) => item.classList.remove('mz-priority-btn--active'));
    button.classList.add('mz-priority-btn--active');
    state.priority = button.dataset.value;
    elements.errorHint.classList.remove('mz-error-hint--show');
  }

  function selectNeed(button) {
    needButtons.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    state.need = button.dataset.value;
    elements.errorHint.classList.remove('mz-error-hint--show');
  }

  function clearResultArtifacts() {
    window.clearInterval(state.typewriterTimer);
    elements.aiText.textContent = '';
    elements.cursor.style.display = 'none';
    elements.resultMessage.style.display = '';
    if (elements.quickOffer) elements.quickOffer.hidden = true;
    elements.resultMessage.querySelectorAll('.mz-tier-note').forEach((node) => node.remove());
    elements.modules.innerHTML = '';
    elements.summary.innerHTML = '';
  }

  function getQuickOfferBullets(need, modules) {
    if (Array.isArray(modules) && modules.length >= 3) {
      return modules.slice(0, 3).map((item) => item.name || item.desc).filter(Boolean);
    }

    if (need === 'atrakcie') {
      return [
        'vyber atrakcii podla rozpoctu a velkosti akcie',
        'moznost sukromneho aj verejneho rezimu',
        'doladenie konkretneho typu atrakcii podla priestoru'
      ];
    }

    if (need === 'komplet') {
      return [
        'program aj atrakcie v jednom',
        'balikova vyhoda oproti samostatnemu vyberu',
        'doladenie detailov podla miesta a terminu'
      ];
    }

    return [
      'programovy blok podla typu akcie',
      'moderovanie alebo animacia podla zvolenej energie',
      'rozsah doladime podla priestoru a ciela akcie'
    ];
  }

  function getQuickOfferDescription(need, eventLabel, packageLabel) {
    if (need === 'atrakcie') {
      return `Na zaklade tvojho vyberu odporucame ${packageLabel} pre ${eventLabel.toLowerCase()}. Tento smer dava rychly prehlad, ake atrakcie sa k tvojej akcii hodia najviac.`;
    }

    if (need === 'komplet') {
      return `Na zaklade tvojho vyberu odporucame ${packageLabel} pre ${eventLabel.toLowerCase()}. Je to najjednoduchsi sposob, ako dostat program aj atrakcie v jednom rieseni.`;
    }

    return `Na zaklade tvojho vyberu odporucame ${packageLabel} pre ${eventLabel.toLowerCase()}. Tento variant dava zmysel, ak chces rychlo vediet realny smer aj cenovu hladinu programu.`;
  }

  function renderQuickOffer(config) {
    if (!elements.quickOffer) return;

    const contextItems = config.context.filter(Boolean);
    elements.quickSelection.textContent = config.selection;
    elements.quickDescription.textContent = config.description;
    elements.quickContext.innerHTML = contextItems
      .map((item) => `<span class="mz-followup-offer__context-chip">${item}</span>`)
      .join('');
    elements.quickCards.innerHTML = config.cards.map((card) => `
      <article class="mz-quick-card${card.recommended ? ' is-recommended' : ''}">
        <div class="mz-quick-card__top">
          <div class="mz-quick-card__name">${card.name}</div>
          ${card.recommended ? '<div class="mz-quick-card__badge">Odporucame</div>' : ''}
        </div>
        <div class="mz-quick-card__price">${card.price}</div>
        <p class="mz-quick-card__desc">${card.description}</p>
        <button type="button" class="btn-primary mz-quick-card__cta" data-quick-package="${card.key}" data-quick-package-name="${card.name}" data-quick-price="${card.price}" data-quick-bullets="${encodeURIComponent(card.bullets.join('||'))}" data-quick-lead="${encodeURIComponent(card.lead)}">Mám záujem</button>
      </article>
    `).join('');
    elements.quickNote.textContent = config.note;
    elements.quickOffer.hidden = false;
  }

  function getKompletSavingsContext(pricing) {
    if (!pricing || pricing.scope !== 'komplet' || !pricing.discountAmount) return [];

    return [
      `samostatne ${pricing.listPriceText}`,
      `usetrite ${pricing.discountAmountText}`,
      pricing.discountLabel || 'balikove zvyhodnenie'
    ];
  }

  function getPackageOfferDescription(need, packageKey) {
    const copy = {
      program: {
        start: 'Zakladny programovy variant pre mensiu akciu alebo kratsi blok.',
        show: 'Silnejsi zazitok s vacsou energiou a odporucanym pomerom cena / vykon.',
        majster: 'Najvacsi programovy rozsah pre vacsie publikum alebo silnejsi wow efekt.'
      },
      atrakcie: {
        start: 'Mensia atrakcia alebo doplnok, ktory rychlo ozivi akciu.',
        show: 'Vacsia atrakcia s viditelnejsim efektom pre hosti.',
        majster: 'Zona alebo balik atrakcii pre najsilnejsi zazitok.'
      },
      komplet: {
        start: 'Zakladna kombinacia programu a atrakcii v jednom.',
        show: 'Najcastejsia volba s vyvazenym komplet riesenim.',
        majster: 'Najsilnejsie kompletne riesenie s vacsim rozsahom a vyhodou balika.'
      }
    };

    return (copy[need] && copy[need][packageKey]) || 'Predbezny variant podla tvojho vyberu.';
  }

  function renderEbook(guestLabel, budgetLabel) {
    elements.resultMessage.style.display = 'none';
    elements.resultLabel.textContent = 'Jednoduchy plan pre vas';
    elements.ctaRow.style.display = 'none';
    elements.modules.innerHTML = [
      '<div class="mz-ebook">',
      '<div class="mz-ebook__icon">📘</div>',
      '<div class="mz-ebook__title">Prakticky navod: Ako pripravit oslavu svojpomocne</div>',
      `<div class="mz-ebook__desc">Budget ${budgetLabel} je v micro zone. Pripravili sme sprievodcu, ako usporiadat skvelu oslavu vlastnymi silami - pre ${guestLabel} hosti.</div>`,
      '<div class="mz-ebook__btns">',
      '<button type="button" class="mz-ebook__btn mz-ebook__btn--primary">Ziskat eBook zdarma</button>',
      '<button type="button" class="mz-ebook__btn mz-ebook__btn--secondary">Konzultacia</button>',
      '</div>',
      '</div>'
    ].join('');
    elements.summary.innerHTML = [
      '<div class="mz-sum-item"><span class="mz-sum-key">Mod</span><span class="mz-sum-val">eBook</span></div>',
      `<div class="mz-sum-item"><span class="mz-sum-key">Budget</span><span class="mz-sum-val">${budgetLabel}</span></div>`,
      `<div class="mz-sum-item"><span class="mz-sum-key">Hostia</span><span class="mz-sum-val">${guestLabel} os.</span></div>`
    ].join('');
  }

  function renderResult(eventType, guests) {
    clearResultArtifacts();

    const priority = state.priority;
    const tier = getTier(state.budget);
    const effectiveTier = tier === 'micro' ? 'low' : tier;
    const budgetLabel = state.budget >= 3000 ? '3 000 EUR +' : `${state.budget} EUR`;
    const guestLabel = guests >= 1000 ? '1000+' : `${guests}`;
    const eventLabel = typeMap[eventType] || eventType;
    const needLabel = needMap[state.need] || state.need;
    const priorityLabel = priorityMap[priority] || priority;
    const packageKeys = ['start', 'show', 'majster'];
    const packageOffers = pricingApi
      ? packageKeys.map((packageKey) => pricingApi.calculateOffer({
          need: state.need,
          eventType,
          eventName: eventLabel,
          guests,
          budget: state.budget,
          packageName: `MZ ${packageKey === 'start' ? 'Start' : packageKey === 'show' ? 'Show' : 'Majster'}`
        }))
      : [];
    const pricing = packageOffers.length
      ? packageOffers.reduce((best, current) => {
          if (!best) return current;
          return Math.abs(current.amount - state.budget) < Math.abs(best.amount - state.budget) ? current : best;
        }, null)
      : null;

    elements.result.style.display = 'block';
    elements.result.classList.add('mz-result--show');
    elements.card.classList.toggle('mz-card--premium', effectiveTier === 'high');
    state.lastPricing = pricing;

    const tierInfo = tierData[effectiveTier];
    const modules = effectiveTier === 'low' || effectiveTier === 'high'
      ? tierInfo.modules
      : ((planDb[eventType] && planDb[eventType][priority]) ? planDb[eventType][priority] : defaultPlan[priority]);

    const messages = {
      low: `Pre rozpocet ${budgetLabel} a ${guestLabel} hosti som vybral rychly set doplnkov, ktory vie akciu pekne rozhybat. ${pricing ? `Predbezna cena zacina na ${pricing.priceText}.` : ''}`,
      mid: `Pre rozpocet ${budgetLabel} a ${guestLabel} hosti odporucam variant ${pricing ? pricing.packageLabel : 'na mieru'}, ktory vie dobre spojit zazitok aj rozpocet. ${pricing ? `Predbezna cena zacina na ${pricing.priceText}.` : ''}`,
      high: `Pri rozpocte ${budgetLabel} vieme nasadit silnejsi eventovy setup pre ${guestLabel} hosti. ${pricing ? `Predbezna cena zacina na ${pricing.priceText}.` : ''}`
    };

    elements.resultLabel.textContent = 'Tvoja predbezna ponuka';
    elements.ctaRow.style.display = 'none';
    elements.ctaRow.hidden = true;
    elements.modules.hidden = true;
    elements.summary.hidden = true;

    const message = messages[effectiveTier] || messages.low;
    let index = 0;
    elements.cursor.style.display = 'inline-block';
    state.typewriterTimer = window.setInterval(() => {
      if (index < message.length) {
        elements.aiText.textContent += message[index];
        index += 1;
        return;
      }

      window.clearInterval(state.typewriterTimer);
      window.setTimeout(() => {
        elements.cursor.style.display = 'none';
      }, 900);

      if (tierInfo.note) {
        const note = document.createElement('div');
        note.className = `mz-tier-note ${tierInfo.noteCls}`;
        note.textContent = tierInfo.note;
        note.style.marginTop = '12px';
        elements.resultMessage.appendChild(note);
      }
    }, 22);

    renderQuickOffer({
      selection: `${needLabel} / ${eventLabel}`,
      description: 'Vyber si variant, ktory je najblizsie tvojej predstave a rozpoctu.',
      context: [
        `${guestLabel} hosti`,
        `rozpocet ${budgetLabel}`,
        priorityLabel.toLowerCase(),
        ...(pricing ? pricing.reasons.slice(0, 2) : []),
        ...getKompletSavingsContext(pricing)
      ],
      cards: packageOffers.map((offer, index) => {
        const cardKey = packageKeys[index];
        return {
          key: cardKey,
          name: offer.packageLabel,
          price: offer.priceText,
          description: getPackageOfferDescription(state.need, cardKey),
          lead: getQuickOfferDescription(state.need, eventLabel, offer.packageLabel),
          bullets: getQuickOfferBullets(state.need, modules),
          recommended: pricing ? offer.packageKey === pricing.packageKey : index === 0
        };
      }),
      note: pricing && pricing.scope === 'komplet' && pricing.discountAmount
        ? `Komplet akcia je cenovo zvyhodnena oproti samostatnemu objednaniu sluzieb. Ak ti tento smer sedi, dopln posledne detaily a pripravime presnejsiu ponuku pre tvoju akciu.`
        : 'Ak ti tento smer sedi, dopln posledne detaily a pripravime presnejsiu ponuku pre tvoju akciu.'
    });
  }

  function generatePlan() {
    const eventType = elements.eventType.value;
    if (!state.need || !eventType || !state.priority) {
      elements.errorHint.classList.add('mz-error-hint--show');

      if (!state.need) {
        needButtons.forEach((button) => {
          button.style.borderColor = 'rgba(255,107,107,0.5)';
          window.setTimeout(() => {
            button.style.borderColor = '';
          }, 1800);
        });
      }

      if (!eventType) {
        elements.eventType.style.borderColor = '#ff6b6b';
        window.setTimeout(() => {
          elements.eventType.style.borderColor = '';
        }, 1800);
      }

      if (!state.priority) {
        priorityButtons.forEach((button) => {
          button.style.borderColor = 'rgba(255,107,107,0.5)';
          window.setTimeout(() => {
            button.style.borderColor = '';
          }, 1800);
        });
      }

      return;
    }

    elements.errorHint.classList.remove('mz-error-hint--show');
    elements.planner.style.display = 'none';
    elements.result.classList.remove('mz-result--show');
    elements.result.style.display = 'none';
    clearResultArtifacts();
    elements.thinking.classList.remove('mz-thinking--show');
    window.clearInterval(state.thinkingTimer);
    showOverlay('MAJSTRI ZÁBAVY', 'Pripravujeme vašu ponuku...');

    window.setTimeout(() => {
      hideOverlay();
      renderResult(eventType, parseInt(elements.guestSlider.value, 10));
    }, 2200);
  }

  function resetPlan() {
    window.clearInterval(state.thinkingTimer);
    window.clearInterval(state.typewriterTimer);
    elements.result.classList.remove('mz-result--show');
    elements.result.style.display = 'none';
    elements.planner.style.display = '';
    elements.resultLabel.textContent = defaultResultLabel;
    elements.ctaRow.style.display = 'none';
    elements.ctaRow.hidden = true;
    elements.modules.hidden = true;
    elements.summary.hidden = true;
    elements.card.classList.remove('mz-card--premium');
    state.need = '';
    needButtons.forEach((button) => button.classList.remove('is-active'));
    elements.eventType.value = '';
    elements.budgetSlider.value = '500';
    elements.guestSlider.value = '50';
    state.priority = null;
    state.budget = 500;
    state.lastPricing = null;
    priorityButtons.forEach((button) => button.classList.remove('mz-priority-btn--active'));
    elements.errorHint.classList.remove('mz-error-hint--show');
    clearResultArtifacts();
    updateBudget();
    updateGuests();
  }

  function activateNavrhAkcie() {
    showOverlay('MAJSTRI ZÁBAVY', 'Pripravujeme návrh...');
    window.setTimeout(() => {
      elements.cardWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.setTimeout(() => {
        hideOverlay();
      }, 700);
    }, 500);
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
      activePlanet.style.borderColor = '';
      activePlanet.style.background = '';
      activePlanet.style.boxShadow = '';
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
          activePlanet.style.borderColor = '';
          activePlanet.style.background = '';
          activePlanet.style.boxShadow = '';
          activePlanet.style.transform = 'translate(-50%,-50%) scale(1)';
          activePlanet.style.zIndex = '';
        }

        orbitGroup.querySelectorAll('.mz-orbit-track').forEach((item) => {
          item.style.animationPlayState = 'paused';
        });
        planet.style.borderColor = planetData.color;
        planet.style.background = `rgba(${hexToRgb(planetData.color)},0.15)`;
        planet.style.boxShadow = `0 0 26px ${planetData.color},0 0 55px ${planetData.color}44`;
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

  elements.activateBtn.addEventListener('click', activateNavrhAkcie);
  elements.budgetSlider.addEventListener('input', updateBudget);
  elements.guestSlider.addEventListener('input', updateGuests);
  elements.approveBtn.addEventListener('click', () => showToast('Dakujeme, ozveme sa vam co najskor.'));
  elements.resetBtn.addEventListener('click', resetPlan);
  if (elements.quickEdit) {
    elements.quickEdit.addEventListener('click', resetPlan);
  }
  if (elements.quickContact) {
    elements.quickContact.addEventListener('click', () => showToast('Otvarame kontakt na Majstrov Zabavy.'));
  }
  if (elements.quickCards) {
    elements.quickCards.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const button = target.closest('[data-quick-package]');
      if (!(button instanceof HTMLElement)) return;

      const eventType = elements.eventType.value;
      const eventLabel = typeMap[eventType] || eventType || 'Akcia na mieru';
      const packageLabel = button.dataset.quickPackageName || 'MZ Start';
      const price = button.dataset.quickPrice || '';
      const lead = decodeURIComponent(button.dataset.quickLead || '');
      const bullets = decodeURIComponent(button.dataset.quickBullets || '').split('||').filter(Boolean);

      if (typeof window.MZApplyFollowupSelection === 'function') {
        window.MZApplyFollowupSelection({
          event: eventLabel,
          scope: state.need,
          scopeLabel: needMap[state.need] || state.need,
          packageName: packageLabel,
          variant: packageLabel,
          price,
          lead,
          bullets
        });
      }
    });
  }
  elements.modules.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.classList.contains('mz-ebook__btn--primary')) showToast('Navod sme vam odoslali.');
    if (target.classList.contains('mz-ebook__btn--secondary')) showToast('Ozveme sa vam do 24 hodin.');
  });
  needButtons.forEach((button) => {
    button.addEventListener('click', () => selectNeed(button));
  });

  priorityButtons.forEach((button) => {
    button.addEventListener('click', () => selectPriority(button));
  });

  const generateButton = document.getElementById('mz-generate-btn');
  if (generateButton) {
    generateButton.addEventListener('click', generatePlan);
  }

  buildOrbit();
  sizeOrbit();
  updateBudget();
  updateGuests();

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
    const params = new URLSearchParams(window.location.search);

    if (!followup || !followupSection || !title || !description || !chips || !image || !hiddenEvent || !hiddenVariant || !hiddenPrice || !hiddenEnergy || !success || !offerBox || !offerSelection || !offerDescription || !offerPrice || !offerIncludes || !offerContext || !offerNote || !orderLink || !editButton || !contactLink || !dateField || !addressField || !guestsField || !audienceField || !nameField || !contactField || !noteField) return;

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
      bullets: (params.get('bullets') || '').split('||').filter(Boolean)
    };

    const fallbackBullets = {
      program: ['moderovanie alebo animacia', 'programovy blok podla vyberu', 'priestor na doladenie detailov'],
      atrakcie: ['vybrane atrakcie a doplnky', 'nasadenie podla priestoru akcie', 'doladenie rozsahu podla poctu ludi'],
      komplet: ['program aj atrakcie v jednom', 'zakladna organizacia akcie', 'doladenie detailov podla lokality a terminu']
    };

    function getScopeKey() {
      return (selected.scope || selected.scopeLabel || '').toLowerCase().trim();
    }

    function getSelectionLabel() {
      return [selected.event, selected.scopeLabel, selected.packageName || selected.variant].filter(Boolean).join(' / ') || 'Akcia na mieru';
    }

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
        bullets: []
      }, nextSelected || {});

      title.textContent = getSelectionLabel();
      description.textContent = 'Ešte pár detailov a tvoja ponuka je pripravená.';
      chips.innerHTML = [
        selected.event ? `<span class="mz-followup-chip">${selected.event}</span>` : '',
        selected.scopeLabel ? `<span class="mz-followup-chip">${selected.scopeLabel}</span>` : '',
        selected.packageName ? `<span class="mz-followup-chip">${selected.packageName}</span>` : (selected.variant ? `<span class="mz-followup-chip">${selected.variant}</span>` : ''),
        selected.price ? `<span class="mz-followup-chip">${selected.price}</span>` : ''
      ].join('');
      hiddenEvent.value = selected.event;
      hiddenVariant.value = selected.packageName || selected.variant;
      hiddenPrice.value = selected.price;

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
      if (scopeKey.includes('program')) return fallbackBullets.program;
      if (scopeKey.includes('atrak')) return fallbackBullets.atrakcie;
      if (scopeKey.includes('komplet')) return fallbackBullets.komplet;
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

      return audienceMap[value] || '';
    }

    function formatEnergy(value) {
      const energyMap = {
        pokoj: 'styl: pohoda',
        zabava: 'styl: zabava',
        show: 'styl: show a energia'
      };

      return energyMap[value] || '';
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

    function buildOfferContext(formData, selectedEnergy) {
      const items = [];

      if (formData.guests) items.push(`${formData.guests} hosti`);
      if (formData.address) items.push(formData.address);
      if (formData.audience) items.push(formatAudience(formData.audience));
      if (selectedEnergy) items.push(formatEnergy(selectedEnergy));
      if (formData.date) items.push(`termin ${formatDate(formData.date)}`);

      return items.filter(Boolean);
    }

    function createMailtoHref(offerData, formData, selectedEnergy) {
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
        selectedEnergy ? `Styl energie: ${formatEnergy(selectedEnergy).replace('styl: ', '')}` : '',
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

    let selectedEnergy = '';

    function autoResizeTextarea(field) {
      if (!field) return;
      field.style.height = 'auto';
      field.style.height = `${field.scrollHeight}px`;
    }

    function renderOfferResult() {
      const formData = {
        date: dateField.value,
        address: addressField.value.trim(),
        guests: guestsField.value.trim(),
        audience: audienceField.value,
        name: nameField.value.trim(),
        contact: contactField.value.trim(),
        note: noteField.value.trim()
      };

      const selection = getSelectionLabel();
      const pricing = pricingApi
        ? pricingApi.calculateOffer({
            scope: selected.scopeLabel || selected.scope,
            eventName: selected.event,
            audience: formData.audience,
            guests: formData.guests,
            packageName: selected.packageName || selected.variant,
            price: selected.price
          })
        : null;
      const price = pricing ? pricing.priceText : (selected.price || 'Cena na vyziadanie');
      const bullets = getOfferBullets();
      const contextItems = buildOfferContext(formData, selectedEnergy).concat(
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
      orderLink.href = createMailtoHref({ selection, price }, formData, selectedEnergy);
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
      hiddenEnergy.value = selectedEnergy || '';
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



