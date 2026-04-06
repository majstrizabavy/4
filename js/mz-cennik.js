(function () {
  'use strict';

  const AUDIENCE_LABELS = {
    rodina: 'Rodiny / verejnost',
    skola: 'Skoly / centra',
    obec: 'Mesta / obce',
    firma: 'Firmy / hotely',
    ine: 'Ine'
  };

  const PROGRAM_LADDERS = {
    small: {
      start: 250,
      show: 450,
      majster: 750
    },
    school: {
      start: 350,
      show: 500,
      majster: 750
    },
    schoolMid: {
      start: 500,
      show: 750,
      majster: 1100
    },
    large: {
      start: 500,
      show: 850,
      majster: 1400
    }
  };

  const KOMPLET_MIN = {
    rodina: 690,
    skola: 890,
    obec: 1290,
    firma: 1290,
    ine: 790
  };

  const PACKAGE_MULTIPLIERS = {
    start: 1,
    show: 1.32,
    majster: 1.68
  };

  const PACKAGE_LABELS = {
    start: 'MZ Start',
    show: 'MZ Show',
    majster: 'MZ Majster'
  };

  const ATTRACTION_LADDERS = {
    nonCommercial: {
      start: 150,
      show: 250,
      majster: 899
    },
    commercial: {
      start: 250,
      show: 400,
      majster: 1190
    }
  };

  const CHILD_EVENT_KEYWORDS = [
    'karneval',
    'mikul',
    'den deti',
    'detsk',
    'skol',
    'rozluck'
  ];

  const LARGE_PROGRAM_KEYWORDS = [
    'dni mesta',
    'den mesta',
    'dni obce',
    'den obce',
    'jarmok',
    'festival',
    'vinobran',
    'majales',
    'firemn',
    'teambuild',
    'family day',
    'roadshow',
    'showroom',
    'gala',
    'koncert',
    'silvester',
    'vianocny vecierok',
    'novoroc'
  ];

  function toNumber(value) {
    if (typeof value === 'number' && Number.isFinite(value)) return value;
    if (!value) return 0;
    const normalized = String(value).replace(/[^\d]/g, '');
    return normalized ? parseInt(normalized, 10) : 0;
  }

  function parsePriceValue(value) {
    if (!value) return 0;
    return toNumber(value);
  }

  function formatCurrency(value) {
    const number = Math.max(0, Math.round(Number(value) || 0));
    return number.toLocaleString('sk-SK');
  }

  function formatPriceText(value) {
    return `od ${formatCurrency(value)} EUR`;
  }

  function formatExactPriceText(value) {
    return `${formatCurrency(value)} EUR`;
  }

  function normalizeScope(value) {
    const raw = String(value || '').toLowerCase().trim();
    if (raw.includes('program')) return 'program';
    if (raw.includes('atrak')) return 'atrakcie';
    if (raw.includes('komplet') || raw.includes('full')) return 'komplet';
    return 'program';
  }

  function normalizeAudience(value) {
    const raw = String(value || '').toLowerCase().trim();
    if (raw.includes('rodin') || raw.includes('verej')) return 'rodina';
    if (raw.includes('skol') || raw.includes('centr')) return 'skola';
    if (raw.includes('mest') || raw.includes('obec')) return 'obec';
    if (raw.includes('firm') || raw.includes('hotel')) return 'firma';
    if (raw.includes('ine')) return 'ine';
    return 'ine';
  }

  function inferAudienceFromEventType(eventType) {
    switch (String(eventType || '').toLowerCase().trim()) {
      case 'firemny':
      case 'teambuilding':
      case 'gala':
        return 'firma';
      case 'detsky':
        return 'skola';
      case 'koncert':
        return 'obec';
      case 'svadba':
      case 'narozeniny':
        return 'rodina';
      default:
        return 'ine';
    }
  }

  function detectPackageKey(value, budget) {
    const raw = String(value || '').toLowerCase().trim();
    if (raw.includes('majster')) return 'majster';
    if (raw.includes('show')) return 'show';
    if (raw.includes('start')) return 'start';

    const amount = toNumber(budget);
    if (amount >= 1300) return 'majster';
    if (amount >= 500) return 'show';
    return 'start';
  }

  function isCommercialAudience(audience) {
    return audience === 'obec' || audience === 'firma';
  }

  function isChildProgramEvent(scope, audience, eventName, eventType) {
    if (scope !== 'program') return false;
    if (audience !== 'skola') return false;

    const source = `${eventName || ''} ${eventType || ''}`.toLowerCase();
    return CHILD_EVENT_KEYWORDS.some((keyword) => source.includes(keyword));
  }

  function isLargeProgramEvent(audience, eventName, eventType) {
    if (audience === 'obec' || audience === 'firma') return true;

    const rawType = String(eventType || '').toLowerCase().trim();
    if (rawType === 'firemny' || rawType === 'teambuilding' || rawType === 'gala' || rawType === 'koncert') {
      return true;
    }

    const source = `${eventName || ''} ${eventType || ''}`.toLowerCase();
    return LARGE_PROGRAM_KEYWORDS.some((keyword) => source.includes(keyword));
  }

  function getProgramPriceFromLadder(packageKey, ladder) {
    return (ladder && ladder[packageKey]) || (ladder && ladder.start) || 250;
  }

  function calculateProgram(ctx) {
    const basePrice = ctx.basePrice || 0;
    const reasons = [];
    let price = 250;

    if (isChildProgramEvent('program', ctx.audience, ctx.eventName, ctx.eventType)) {
      const guests = toNumber(ctx.guests);
      let childPrice = 350;

      if (guests > 100) {
        if (ctx.packageKey === 'show') childPrice = (guests * 5) + 250;
        else if (ctx.packageKey === 'majster') childPrice = (guests * 5) + 600;
        else childPrice = guests * 5;
        reasons.push('detska akcia nad 100 deti');
      } else if (guests > 80) {
        childPrice = getProgramPriceFromLadder(ctx.packageKey, PROGRAM_LADDERS.schoolMid);
        reasons.push('detska akcia od 81 do 100 deti');
      } else {
        childPrice = getProgramPriceFromLadder(ctx.packageKey, PROGRAM_LADDERS.school);
        reasons.push('detska akcia do 80 deti');
      }

      price = childPrice;
    } else if (ctx.audience === 'skola') {
      price = getProgramPriceFromLadder(ctx.packageKey, PROGRAM_LADDERS.school);
      reasons.push('skolsky klient');
    } else if (isLargeProgramEvent(ctx.audience, ctx.eventName, ctx.eventType)) {
      price = getProgramPriceFromLadder(ctx.packageKey, PROGRAM_LADDERS.large);
      reasons.push('vacsia akcia');
      if (ctx.audience === 'obec') reasons.push('mestska alebo obecna akcia');
      if (ctx.audience === 'firma') reasons.push('firemny alebo hotelovy klient');
    } else {
      price = getProgramPriceFromLadder(ctx.packageKey, PROGRAM_LADDERS.small);
      reasons.push('mensia akcia');
      if (ctx.audience === 'rodina') reasons.push('rodiny alebo verejnost');
    }

    price = Math.max(price, basePrice || 0);

    return {
      amount: price,
      reasons
    };
  }

  function calculateAttractions(ctx) {
    const basePrice = ctx.basePrice || 0;
    const commercial = isCommercialAudience(ctx.audience);
    const ladder = commercial ? ATTRACTION_LADDERS.commercial : ATTRACTION_LADDERS.nonCommercial;
    const reasons = [commercial ? 'komercne alebo verejne pouzitie' : 'sukromne alebo nekomercne pouzitie'];
    let price = getProgramPriceFromLadder(ctx.packageKey, ladder);

    if (ctx.packageKey === 'start') reasons.push('mensia atrakcia alebo doplnok');
    if (ctx.packageKey === 'show') reasons.push('vacsia atrakcia');
    if (ctx.packageKey === 'majster') reasons.push('zona alebo balik atrakcii');

    price = Math.max(price, basePrice);

    return {
      amount: price,
      reasons
    };
  }

  function calculateKomplet(ctx) {
    const program = calculateProgram({
      ...ctx,
      scope: 'program',
      basePrice: 0
    });

    const attractions = calculateAttractions({
      ...ctx,
      scope: 'atrakcie',
      basePrice: 0
    });

    const packageMultiplier = PACKAGE_MULTIPLIERS[ctx.packageKey] || 1;
    const basePrice = ctx.basePrice || 0;
    const bundleMin = KOMPLET_MIN[ctx.audience] || KOMPLET_MIN.ine;
    const listPrice = program.amount + attractions.amount;
    const bundlePrice = Math.round(listPrice * 0.9);
    let price = Math.max(bundleMin, bundlePrice, basePrice);

    if (!basePrice && packageMultiplier > 1) {
      price = Math.max(price, Math.round(price * Math.max(1, packageMultiplier - 0.08)));
    }

    const discountAmount = Math.max(0, listPrice - price);
    const discountPercent = listPrice > 0 ? Math.max(0, Math.round((discountAmount / listPrice) * 100)) : 0;

    return {
      amount: price,
      listPrice,
      discountAmount,
      discountPercent,
      reasons: [
        'balikova vyhoda pri programe a atrakciach',
        ...program.reasons.slice(0, 1),
        ...attractions.reasons.slice(0, 2)
      ]
    };
  }

  function calculateOffer(input) {
    const scope = normalizeScope(input.scope || input.need);
    const audience = normalizeAudience(input.audience || inferAudienceFromEventType(input.eventType));
    const packageKey = detectPackageKey(input.packageName || input.variant, input.budget);
    const ctx = {
      scope,
      audience,
      packageKey,
      basePrice: parsePriceValue(input.basePrice || input.price),
      budget: toNumber(input.budget),
      guests: toNumber(input.guests),
      eventName: input.eventName || input.event || '',
      eventType: input.eventType || ''
    };

    let result;
    if (scope === 'atrakcie') {
      result = calculateAttractions(ctx);
    } else if (scope === 'komplet') {
      result = calculateKomplet(ctx);
    } else {
      result = calculateProgram(ctx);
    }

    return {
      ...result,
      scope,
      audience,
      audienceLabel: AUDIENCE_LABELS[audience] || AUDIENCE_LABELS.ine,
      packageKey,
      packageLabel: PACKAGE_LABELS[packageKey] || PACKAGE_LABELS.start,
      priceText: formatPriceText(result.amount),
      exactPriceText: formatExactPriceText(result.amount),
      listPriceText: typeof result.listPrice === 'number' ? formatExactPriceText(result.listPrice) : '',
      discountAmountText: typeof result.discountAmount === 'number' ? formatExactPriceText(result.discountAmount) : '',
      discountLabel: result.discountPercent ? `Balikove zvyhodnenie ${result.discountPercent} %` : ''
    };
  }

  window.MZPricing = {
    AUDIENCE_LABELS,
    calculateOffer,
    formatCurrency,
    formatPriceText,
    formatExactPriceText,
    parsePriceValue
  };
})();
