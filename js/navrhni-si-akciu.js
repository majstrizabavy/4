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
    resetBtn: document.getElementById('mz-reset-btn')
  };

  const required = Object.values(elements).every(Boolean);
  if (!required) return;

  const orbitPlanets = [
    { label: 'Kalendar', desc: 'Tvoja akcia moze byt sucastou nasho kalendara a ziskat pozornost este pred zaciatkom.', color: '#7b4dff' },
    { label: 'Reels\npromo', desc: 'Po akcii vytvorime kratke video, ktore ukaze atmosferu a oslovi dalsich ludi.', color: '#4c8dff' },
    { label: 'Video\npozvanka', desc: 'Pripravime putave video, ktore pritiahne ludi na tvoju akciu.', color: '#8e67ff' },
    { label: 'Socialne\nsiete', desc: 'Tvoja akcia moze ziskat priestor na nasich kanaloch - Facebook, Instagram, TikTok aj YouTube.', color: '#6d78ff' },
    { label: 'Podpora', desc: 'Pomahame ti s priebehom, komunikaciou aj celkovym dojmom, aby vsetko fungovalo.', color: '#9b7dff' },
    { label: 'Garancia\nkvality', desc: 'Za vysledkom si stojime. Ked je akcia pod nasou taktovkou, musi dopadnut dobre.', color: '#5c8fff' }
  ];

  const state = {
    priority: null,
    budget: 500,
    typewriterTimer: null,
    thinkingTimer: null
  };

  const tips = [
    { max: 50, zone: 'micro', pill: 'Startovaci plan', tip: 'Jednoduchy navrh na rozbeh akcie' },
    { max: 250, zone: 'low', pill: 'Sikovne riesenie', tip: 'Sikovne riesenia s malym budgetom' },
    { max: 600, zone: 'mid', pill: 'Zlaty stred', tip: 'Zlaty stred - program na mieru' },
    { max: 1200, zone: 'mid', pill: 'Vyssi standard', tip: 'Silnejsi zazitok s vacsim priestorom na program' },
    { max: 3001, zone: 'high', pill: 'Kompletna produkcia', tip: 'Kompletna produkcia a program na kluc' }
  ];

  const planDb = {
    firemny: {
      energia: [
        { icon: 'âšˇ', name: 'MZ Move', desc: 'Dynamicka zona so zivou hudbou a pohybovymi aktivitami pre cely tim', badge: 'BESTSELLER' },
        { icon: 'đźŽ™ď¸Ź', name: 'Moderator Pro', desc: 'Charizmaticky moderator s interaktivnymi hrami a live kvizmi', badge: 'ODPORUCAM' },
        { icon: 'đźŽ†', name: 'Afterparty Show', desc: 'Ohnostroj a DJ set do rana - zaver, na ktory nezabudnu', badge: 'PREMIUM' }
      ],
      elegancia: [
        { icon: 'đźŤ·', name: 'Gala Vecer', desc: 'Elegantne aranazovane stoly, ziva kapela a black tie atmosfera', badge: 'LUXUS' },
        { icon: 'đźŽ­', name: 'Artisticke Sou', desc: 'Profesionalni artisti: zongleri, akrobati a iluzionisti', badge: 'WOW EFEKT' },
        { icon: 'đź“¸', name: 'Premium Foto Zona', desc: 'Profesionalna 360 foto kabinka s tlacou a logom firmy', badge: 'BRAND' }
      ],
      pohoda: [
        { icon: 'đźŽ‰', name: 'Team Fun Zone', desc: 'Spolocenske hry, kvizy a priatelska sutaz pre cely tim', badge: 'OBLUBENE' },
        { icon: 'đźŤ•', name: 'Food Lounge', desc: 'Neformalne stolovanie, street food catering a live cooking', badge: 'KOMFORT' },
        { icon: 'đźŽµ', name: 'Live Akustika', desc: 'Zivy akusticky set - teplo a ludskost', badge: 'SRDCOVKA' }
      ]
    },
    svadba: {
      energia: [
        { icon: 'đź’', name: 'Dance Floor VIP', desc: 'DJ, svetelna sou a tanecna plocha s efektmi', badge: 'TANCOVACKA' },
        { icon: 'đźŽŠ', name: 'Konfeti Kanon', desc: 'Prvy tanec s konfetami a blikajucimi svetlami', badge: 'WOW MOMENT' },
        { icon: 'đźŽ¤', name: 'Live Band', desc: 'Svadobna kapela od prveho tanca az po ranne hodiny', badge: 'KLASIKA' }
      ],
      elegancia: [
        { icon: 'đźŚą', name: 'Luxury Decor', desc: 'Premium vyzdoba s kvetmi, svieckami a elegantnym priestretim', badge: 'LUXUS' },
        { icon: 'đźŤľ', name: 'Champagne Tower', desc: 'Sampanska veza pre nezabudnutelny moment', badge: 'ICONIC' },
        { icon: 'đźŽ»', name: 'Slacikove Kvarteto', desc: 'Klasicka hudba pocas svadobnej hostiny', badge: 'PREMIOVE' }
      ],
      pohoda: [
        { icon: 'đźŚż', name: 'Zahradna Svadoba', desc: 'Vonkajsie posedenie, prirodna atmosfera a teplo rodiny', badge: 'OBLUBENE' },
        { icon: 'đź“·', name: 'Foto a Spomienky', desc: 'Candid fotograf a polaroidova kniha podpisov hosti', badge: 'MEMORY' },
        { icon: 'đźŽ‚', name: 'Torta Sou', desc: 'Krajaci ritual s hudbou, svetlami a prekvapenim', badge: 'SWEET' }
      ]
    },
    narozeniny: {
      energia: [
        { icon: 'đźŽ‰', name: 'Party Blast', desc: 'DJ, stroboskopy a tanecny floor', badge: 'PARTY HARD' },
        { icon: 'đźŽ¤', name: 'Karaoke VIP', desc: 'Profesionalna karaoke zona s LED obrazovkou', badge: 'FUN' },
        { icon: 'đźŽ†', name: 'Surprise Show', desc: 'Surprise moment so specialnymi efektmi a tortou', badge: 'WOW' }
      ],
      elegancia: [
        { icon: 'đź’Ž', name: 'VIP Dinner', desc: 'Exkluzivna vecera s premium menu a obsluhou', badge: 'LUXUS' },
        { icon: 'đźŤľ', name: 'Bubble Bar', desc: 'Sampansky bar s vyberom premium vin', badge: 'PREMIUM' },
        { icon: 'đźŚź', name: 'Star Setup', desc: 'Hviezdicovy dekor s personalizovanymi detailmi', badge: 'PERSONAL' }
      ],
      pohoda: [
        { icon: 'đźŹˇ', name: 'Garden Party', desc: 'Zahradna oslava v uvolnenej atmosfere s grilom', badge: 'RELAXED' },
        { icon: 'đźŽµ', name: 'Playlist Live', desc: 'Curated playlist a akusticka kapela', badge: 'VIBES' },
        { icon: 'đź“¸', name: 'Photo Booth', desc: 'Fotokabinka s rekvizitami a okamzitou tlacou', badge: 'MEMORIES' }
      ]
    },
    teambuilding: {
      energia: [
        { icon: 'đźŹ†', name: 'Olympiada Timu', desc: 'Sutazne discipliny v teamoch: rychlost, sila a kreativita', badge: 'SUTAZ' },
        { icon: 'âšˇ', name: 'Escape Room XXL', desc: 'Velkoformatovy escape room priamo na mieste', badge: 'MIND GAME' },
        { icon: 'đźŽŻ', name: 'Target Challenge', desc: 'Lukostrelba, axe throwing a paintball', badge: 'ADRENALIN' }
      ],
      elegancia: [
        { icon: 'đźŤł', name: 'Cooking Battle', desc: 'Timove varenie pod vedenim sefkuchara', badge: 'KREATIVITA' },
        { icon: 'đźŽ¨', name: 'Art Workshop', desc: 'Malovanie, sculpting a dizajn v teamoch', badge: 'TVORIVOST' },
        { icon: 'đźŤ·', name: 'Wine Tasting', desc: 'Profesionalna degustacia vin so sommelierom', badge: 'KULTURA' }
      ],
      pohoda: [
        { icon: 'đźŚż', name: 'Outdoor Relax', desc: 'Turistika, piknik a hry v prirode', badge: 'PRIRODA' },
        { icon: 'đźŽ˛', name: 'Board Game Arena', desc: 'Zbierka spolocenskych hier', badge: 'FUN' },
        { icon: 'đź§', name: 'Wellness Reset', desc: 'Cvicenie, mindfulness a relaxacna zona', badge: 'WELL-BEING' }
      ]
    },
    gala: {
      energia: [
        { icon: 'đźŽ­', name: 'Grand Sou', desc: 'Sou s tanecnikmi, artistami a ohnostrojom', badge: 'SPEKTAKL' },
        { icon: 'đź’', name: 'Tanecni Soliste', desc: 'Profesionalni tanecnici s choreografiou', badge: 'PREMIUM' },
        { icon: 'đźŽ™ď¸Ź', name: 'Celebrity MC', desc: 'Renomovany moderator s charizmatickym prejavom', badge: 'HVIEZDA' }
      ],
      elegancia: [
        { icon: 'đź‘‘', name: 'Royal Setup', desc: 'Kralovska vyzdoba s kristalovymi detailmi a zlatom', badge: 'ROYAL' },
        { icon: 'đźŽ»', name: 'Orchester Live', desc: 'Zivy komorny orchester pocas vecere', badge: 'KLASIKA' },
        { icon: 'đźŤ˝ď¸Ź', name: 'Gourmet Menu', desc: 'Patchodove menu s wine pairingom', badge: 'GOURMET' }
      ],
      pohoda: [
        { icon: 'đźŚź', name: 'Stars and Stories', desc: 'Pribehy, videa a prezentacia uspechov', badge: 'EMOTIVNE' },
        { icon: 'đź“¸', name: 'Photo Memories', desc: 'Fotograf a video highlight reels', badge: 'SPOMIENKY' },
        { icon: 'đźĄ‚', name: 'Cocktail Lounge', desc: 'Premium kokteilovy bar s barmanom', badge: 'LOUNGE' }
      ]
    }
  };

  const defaultPlan = {
    energia: [
      { icon: 'âšˇ', name: 'MZ Move', desc: 'Dynamicka zona so zivou hudbou', badge: 'BESTSELLER' },
      { icon: 'đźŽ™ď¸Ź', name: 'Moderator Pro', desc: 'Profesionalny moderator s hrami', badge: 'ODPORUCAM' },
      { icon: 'đźŽ†', name: 'Zaverecna Show', desc: 'Zaverecna sou pre maximum dojmov', badge: 'PREMIUM' }
    ],
    elegancia: [
      { icon: 'đź’Ž', name: 'Premium Setup', desc: 'Luxusna vyzdoba a elegantna atmosfera', badge: 'LUXUS' },
      { icon: 'đźŽ­', name: 'Artisticke Vystupenie', desc: 'Profesionalni umelci pre WOW zazitok', badge: 'WOW' },
      { icon: 'đźŤ·', name: 'VIP Lounge', desc: 'Exkluzivna VIP zona s premium servisom', badge: 'VIP' }
    ],
    pohoda: [
      { icon: 'đźŽ‰', name: 'Fun Zone', desc: 'Aktivity pre vsetkych hosti', badge: 'FAMILY' },
      { icon: 'đźŤ•', name: 'Food Station', desc: 'Catering pre kazdy vkus', badge: 'KOMFORT' },
      { icon: 'đźŽµ', name: 'Live Music', desc: 'Ziva hudba - tepla atmosfera', badge: 'VIBES' }
    ]
  };

  const tierData = {
    low: {
      label: 'MAJSTROVSKE DOPLNKY',
      cls: 'mz-tier-badge--low',
      noteCls: 'mz-tier-note--low',
      note: 'Pre komplexny program s nasim timom je potrebny vyssi rozpocet, ale tieto doplnky spravia skvelu pracu aj tak.',
      modules: [
        { icon: 'đź¦', name: 'Maskot na mieru', desc: 'Kostymovany maskot - rozziari kazdu oslavu', badge: 'HIT U DETI' },
        { icon: 'đź“¸', name: 'Fotostena', desc: 'Fotostena s logom alebo tematickym dizajnom', badge: 'INSTAGRAMABLE' },
        { icon: 'đźŤ­', name: 'Cukrova vata', desc: 'Farebny stanok, ktory vzdy prinasa usmevy', badge: 'SLADKY HIT' },
        { icon: 'đź”Š', name: 'Prenajom techniky', desc: 'Ozvucenie, mikrofony a reproduktory', badge: 'ZAKLAD' }
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
        { icon: 'đźŹ™ď¸Ź', name: 'Mestske dni', desc: 'Kompletna produkcia mestskej slavnosti', badge: 'MEGA EVENT' },
        { icon: 'đźŹ˘', name: 'Firemny event XL', desc: 'Firemny event na kluc - od konceptu po realizaciu', badge: 'ALL-IN-ONE' },
        { icon: 'đźŽŞ', name: 'Festival Package', desc: 'Viacdenny festival s plnou produkciou', badge: 'FESTIVAL PRO' }
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

  function clearResultArtifacts() {
    window.clearInterval(state.typewriterTimer);
    elements.aiText.textContent = '';
    elements.cursor.style.display = 'none';
    elements.resultMessage.style.display = '';
    elements.resultMessage.querySelectorAll('.mz-tier-note').forEach((node) => node.remove());
    elements.modules.innerHTML = '';
    elements.summary.innerHTML = '';
  }

  function renderEbook(guestLabel, budgetLabel) {
    elements.resultMessage.style.display = 'none';
    elements.resultLabel.textContent = 'Jednoduchy plan pre vas';
    elements.ctaRow.style.display = 'none';
    elements.modules.innerHTML = [
      '<div class="mz-ebook">',
      '<div class="mz-ebook__icon">đź“</div>',
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
    const budgetLabel = state.budget >= 3000 ? '3 000 EUR +' : `${state.budget} EUR`;
    const guestLabel = guests >= 1000 ? '1000+' : `${guests}`;
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
      energia: 'Energia âšˇ',
      elegancia: 'Elegancia đź’Ž',
      pohoda: 'Pohoda đźŚż'
    };

    elements.result.style.display = 'block';
    elements.result.classList.add('mz-result--show');
    elements.card.classList.toggle('mz-card--premium', tier === 'high');

    if (tier === 'micro') {
      renderEbook(guestLabel, budgetLabel);
      return;
    }

    const tierInfo = tierData[tier];
    const modules = tier === 'low' || tier === 'high'
      ? tierInfo.modules
      : ((planDb[eventType] && planDb[eventType][priority]) ? planDb[eventType][priority] : defaultPlan[priority]);

    const messages = {
      low: `Budget ${budgetLabel} detekovany. Pre ${guestLabel} hosti som vybral 4 doplnky zabavy, ktore maximalizuju radost bez precerpania rozpoctu.`,
      mid: `Budget ${budgetLabel} odomkol Program na Mieru. Pre ${guestLabel} hosti som zostavil 3 moduly presne podla vasich preferencii.`,
      high: `Premium budget ${budgetLabel} aktivoval Produkciu na Kluc. Pre ${guestLabel} hosti nasadzujeme plnohodnotny produkcny tim od A po Z.`
    };

    elements.resultLabel.innerHTML = `Moj navrh - <span class="mz-tier-badge ${tierInfo.cls}">${tierInfo.label}</span>`;
    elements.ctaRow.style.display = 'grid';

    const message = messages[tier];
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

    modules.forEach((module) => {
      const card = document.createElement('div');
      card.className = 'mz-module';
      card.innerHTML = [
        `<div class="mz-module__icon">${module.icon}</div>`,
        '<div>',
        `<div class="mz-module__name">${module.name}</div>`,
        `<div class="mz-module__desc">${module.desc}</div>`,
        '</div>',
        `<div class="mz-module__badge">${module.badge}</div>`
      ].join('');
      elements.modules.appendChild(card);
    });

    window.setTimeout(() => {
      elements.modules.querySelectorAll('.mz-module').forEach((module, idx) => {
        window.setTimeout(() => {
          module.classList.add('mz-module--in');
        }, 300 + idx * 160);
      });
    }, 100);

    elements.summary.innerHTML = [
      `<div class="mz-sum-item"><span class="mz-sum-key">Akcia</span><span class="mz-sum-val">${typeMap[eventType] || eventType}</span></div>`,
      `<div class="mz-sum-item"><span class="mz-sum-key">Hostia</span><span class="mz-sum-val">${guestLabel} os.</span></div>`,
      `<div class="mz-sum-item"><span class="mz-sum-key">Styl</span><span class="mz-sum-val">${priorityMap[priority]}</span></div>`,
      `<div class="mz-sum-item"><span class="mz-sum-key">Rozpocet</span><span class="mz-sum-val">${budgetLabel}</span></div>`,
      `<div class="mz-sum-item"><span class="mz-sum-key">Tier</span><span class="mz-sum-val">${tierInfo.label}</span></div>`
    ].join('');
  }

  function generatePlan() {
    const eventType = elements.eventType.value;
    if (!eventType || !state.priority) {
      elements.errorHint.classList.add('mz-error-hint--show');

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

    const tier = getTier(state.budget);
    const steps = thinkingMessages[tier] || thinkingMessages.mid;
    let step = 0;
    elements.thinking.classList.add('mz-thinking--show');
    elements.thinkingLabel.textContent = steps[0];

    window.clearInterval(state.thinkingTimer);
    state.thinkingTimer = window.setInterval(() => {
      step = (step + 1) % steps.length;
      elements.thinkingLabel.textContent = steps[step];
    }, 600);

    window.setTimeout(() => {
      window.clearInterval(state.thinkingTimer);
      elements.thinking.classList.remove('mz-thinking--show');
      renderResult(eventType, parseInt(elements.guestSlider.value, 10));
    }, 2600);
  }

  function resetPlan() {
    window.clearInterval(state.thinkingTimer);
    window.clearInterval(state.typewriterTimer);
    elements.result.classList.remove('mz-result--show');
    elements.result.style.display = 'none';
    elements.planner.style.display = '';
    elements.resultLabel.textContent = defaultResultLabel;
    elements.ctaRow.style.display = 'grid';
    elements.card.classList.remove('mz-card--premium');
    elements.eventType.value = '';
    elements.budgetSlider.value = '500';
    elements.guestSlider.value = '50';
    state.priority = null;
    state.budget = 500;
    priorityButtons.forEach((button) => button.classList.remove('mz-priority-btn--active'));
    elements.errorHint.classList.remove('mz-error-hint--show');
    clearResultArtifacts();
    updateBudget();
    updateGuests();
  }

  function activateNavrhAkcie() {
    elements.overlay.classList.add('mz-overlay--active');
    window.setTimeout(() => {
      elements.cardWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.setTimeout(() => {
        elements.overlay.classList.remove('mz-overlay--active');
      }, 700);
    }, 500);
  }

  const orbitGroup = document.createElement('div');
  orbitGroup.id = 'mz-orbit-group';
  orbitGroup.style.cssText = 'position:absolute;top:50%;left:50%;transform-origin:0 0;width:0;height:0;';
  elements.planets.parentElement.insertBefore(orbitGroup, elements.planets);

  function sizeOrbit() {
    const size = isMobile() ? '300px' : (isMedium() ? '380px' : '540px');
    elements.orbit.style.width = size;
    elements.orbit.style.height = size;
  }

  function buildOrbit() {
    orbitGroup.innerHTML = '';
    const radius = isMobile() ? 105 : (isMedium() ? 148 : 193);
    const planetSize = isMobile() ? 52 : (isMedium() ? 60 : 68);
    const labelSize = isMobile() ? '7px' : (isMedium() ? '7.6px' : '8.4px');
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

      const onPlanet = () => {
        orbitGroup.querySelectorAll('.mz-orbit-track').forEach((item) => {
          item.style.animationPlayState = 'paused';
        });
        planet.style.borderColor = planetData.color;
        planet.style.background = `rgba(${hexToRgb(planetData.color)},0.15)`;
        planet.style.boxShadow = `0 0 26px ${planetData.color},0 0 55px ${planetData.color}44`;
        planet.style.transform = 'translate(-50%,-50%) scale(1.3)';
        planet.style.zIndex = '30';
        elements.orbit.classList.add('mz-orbit--active');
        elements.coreDesc.textContent = planetData.desc;
        elements.coreLogo.textContent = 'MZ';
      };

      const offPlanet = () => {
        orbitGroup.querySelectorAll('.mz-orbit-track').forEach((item) => {
          item.style.animationPlayState = 'running';
        });
        planet.style.borderColor = '';
        planet.style.background = '';
        planet.style.boxShadow = '';
        planet.style.transform = 'translate(-50%,-50%) scale(1)';
        planet.style.zIndex = '';
        elements.orbit.classList.remove('mz-orbit--active');
        elements.coreLogo.textContent = 'MZ';
        elements.coreDesc.textContent = '';
      };

      planet.addEventListener('mouseenter', onPlanet);
      planet.addEventListener('mouseleave', offPlanet);
      planet.addEventListener('touchstart', (event) => {
        event.preventDefault();
        onPlanet();
      }, { passive: false });
      planet.addEventListener('touchend', offPlanet);

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
  elements.modules.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.classList.contains('mz-ebook__btn--primary')) showToast('Navod sme vam odoslali.');
    if (target.classList.contains('mz-ebook__btn--secondary')) showToast('Ozveme sa vam do 24 hodin.');
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

  window.addEventListener('resize', () => {
    buildOrbit();
    sizeOrbit();
  });

  (function initJunePilotFollowup() {
    const followup = document.getElementById('mz-followup-form');
    const followupSection = document.getElementById('pilot-form');
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
    const params = new URLSearchParams(window.location.search);

    if (!followup || !followupSection || !title || !description || !chips || !image || !hiddenEvent || !hiddenVariant || !hiddenPrice || !hiddenEnergy || !success) return;

    const selected = {
      source: params.get('source') || '',
      event: params.get('event') || '',
      variant: params.get('variant') || '',
      price: params.get('price') || '',
      poster: params.get('poster') || ''
    };

    if (selected.source === 'jun-pilot' && selected.event) {
      title.textContent = selected.variant ? `${selected.event} / ${selected.variant}` : selected.event;
      description.textContent = selected.price
        ? `Z junskeho kalendara sme preniesli tvoju volbu aj orientacnu cenu ${selected.price}. Dopln posledne udaje a pripravime finalnu ponuku na mieru.`
        : 'Z junskeho kalendara sme preniesli tvoju volbu. Dopln posledne udaje a pripravime finalnu ponuku na mieru.';
      chips.innerHTML = [
        `<span class="mz-followup-chip">${selected.event}</span>`,
        selected.variant ? `<span class="mz-followup-chip">${selected.variant}</span>` : '',
        selected.price ? `<span class="mz-followup-chip">${selected.price}</span>` : ''
      ].join('');
      hiddenEvent.value = selected.event;
      hiddenVariant.value = selected.variant;
      hiddenPrice.value = selected.price;
      if (selected.poster) {
        image.src = selected.poster;
        image.alt = title.textContent;
        image.hidden = false;
      }

      requestAnimationFrame(() => {
        if (window.location.hash === '#pilot-form') {
          followupSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    let selectedEnergy = '';

    energyButtons.forEach((button) => {
      button.addEventListener('click', () => {
        energyButtons.forEach((item) => item.classList.remove('is-active'));
        button.classList.add('is-active');
        selectedEnergy = button.dataset.energy;
        hiddenEnergy.value = selectedEnergy;
      });
    });

    followup.addEventListener('submit', (event) => {
      event.preventDefault();
      success.hidden = false;
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      showToast('Dakujeme, finalnu ponuku pripravime do 24 hodin.');
      hiddenEnergy.value = selectedEnergy || '';
    });
  })();
})();

