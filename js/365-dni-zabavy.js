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
      { number: '06', name: 'JUN', title: 'De&#328; det&iacute;, &scaron;kolsk&eacute; akcie, rozl&uacute;&#269;ky so &scaron;kolou, Vitaj leto, firemn&eacute; dni', hint: 'Atrakcie &bull; Animatori &bull; Detske vystupenia &bull; Moderovanie', accent: 'var(--cyan)' },
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

function createCustomMonthCard(item) {
  return `
    <article class="month-card month-card--custom">
      <div class="month-num">${item.number}</div>
      <div class="month-name">${item.name}</div>
      <div class="month-card__pattern">${item.title}</div>
      <div class="month-card__divider" aria-hidden="true"></div>
      <div class="month-card__offer-label">MZ odporucaju:</div>
      <div class="month-card__offer">${item.hint}</div>
      <a href="#yearPlannerContact" class="month-card__cta">Cenov&aacute; ponuka</a>
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

renderYearPlannerMode('custom');
initYearPlannerModes();

const requestedMode = new URLSearchParams(window.location.search).get('mode');
if (requestedMode === 'public' || requestedMode === 'custom') {
  setYearPlannerMode(requestedMode, { syncUrl: false });
}
