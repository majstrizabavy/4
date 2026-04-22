/* ============================================================
   orbit.js - Interaktivna mapa sekcii pre stranku Svet Zabavy
   ============================================================ */

const planets = [
  {
    icon: '',
    core: 'MZ',
    label: 'SVET\nZÁBAVY',
    desc: 'Objednaj si program, atrakcie a služby od Majstrov Zábavy.',
    cta: 'Objaviť svet',
    target: 'svet-zabavy.html',
    color: '#c7ff2e'
  },
  {
    icon: '',
    core: 'MZ',
    label: 'INŠPIRÁCIA',
    desc: 'Hľadáš nápad na akciu? Inšpiruj sa.',
    cta: 'Pozrieť inšpiráciu',
    target: 'inspiracia',
    color: '#9edb1f'
  },
  {
    icon: '',
    core: '365',
    label: '365 DNÍ',
    desc: 'Hľadáš zábavu? Objav ju tu.',
    cta: 'Objaviť 365 dní',
    target: 'rok',
    color: '#d8ff5a'
  },
  {
    icon: '',
    core: 'MZ',
    label: 'PROJEKTY',
    desc: 'Pozri si, čo všetko vzniká pod značkou Majstri zábavy.',
    cta: 'Pozrieť projekty',
    target: 'projekty',
    color: '#efff97'
  },
  {
    icon: '',
    core: 'MZ',
    label: 'KONTAKT',
    desc: 'Sme pripravení poradiť vám.',
    cta: 'Prejsť na kontakt',
    target: 'kontakt',
    color: '#c7ff2e'
  },
  {
    icon: '',
    core: 'MZ',
    label: 'TVOJA\nAKCIA',
    desc: 'Navrhni si svoju akciu.',
    cta: 'Navrhnúť akciu',
    target: 'navrhni-akciu',
    color: '#efff97'
  }
];

const container = document.getElementById('orbitContainer');
const coreDesc = document.getElementById('coreDesc');
const coreCta = document.getElementById('coreCta');
const coreLogo = document.getElementById('coreLogo');
const planetsWrapper = document.getElementById('planetsWrapper');
const isMobile = () => window.innerWidth < 700;
let activePlanetDiv = null;

const orbitGroup = document.createElement('div');
orbitGroup.id = 'orbitGroup';
orbitGroup.style.cssText = 'position:absolute;top:50%;left:50%;transform-origin:0 0;width:0;height:0;';
planetsWrapper.parentElement.insertBefore(orbitGroup, planetsWrapper);

function setCoreState(planet) {
  if (!planet) {
    container.classList.remove('planet-active');
    container.classList.add('orbit-idle');
    coreLogo.textContent = 'MZ';
    coreDesc.textContent = 'Vyber si planétu';
    coreCta.textContent = 'Otvoriť sekciu';
    coreCta.onclick = () => navigateTo('kontakt');
    coreCta.disabled = false;
    return;
  }

  container.classList.add('planet-active');
  container.classList.remove('orbit-idle');
  coreLogo.textContent = planet.core || planet.icon;
  coreDesc.textContent = planet.desc;
  coreCta.textContent = planet.cta;
  coreCta.disabled = false;
  coreCta.onclick = () => navigateTo(planet.target);
}

function clearActivePlanet() {
  orbitGroup.querySelectorAll('.orbit-planet-track').forEach((track) => {
    track.style.animationPlayState = 'running';
  });

  if (activePlanetDiv) {
    activePlanetDiv.classList.remove('is-active');
    activePlanetDiv.style.transform = 'translate(-50%, -50%) scale(1)';
    activePlanetDiv.style.zIndex = '';
  }

  activePlanetDiv = null;
  setCoreState(null);
}

function buildOrbit() {
  orbitGroup.innerHTML = '';

  const radius = isMobile() ? 118 : 198;
  const size = isMobile() ? 60 : 74;
  const iconSize = isMobile() ? '11.5px' : '13px';
  const labelSize = isMobile() ? '7.4px' : '8.5px';
  let keyframes = '';

  planets.forEach((planet, index) => {
    const total = planets.length;
    const startAngleDeg = (index / total) * 360;

    keyframes += `@keyframes full-orbit-${index}{
      from { transform: rotate(${startAngleDeg}deg) translateX(${radius}px) rotate(${-startAngleDeg}deg); }
      to   { transform: rotate(${startAngleDeg + 360}deg) translateX(${radius}px) rotate(${-(startAngleDeg + 360)}deg); }
    }`;

    const orbitTrack = document.createElement('div');
    orbitTrack.className = 'orbit-planet-track';
    orbitTrack.style.cssText = `
      position: absolute;
      width: 0;
      height: 0;
      top: 0;
      left: 0;
      animation: full-orbit-${index} 18s linear infinite;
    `;

    const planetDiv = document.createElement('div');
    planetDiv.className = 'planet';
    planetDiv.style.cssText = `
      --planet-color: ${planet.color};
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      transform: translate(-50%, -50%);
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
    `;

    const iconMarkup = planet.icon
      ? `<div class="planet-icon" style="font-size:${iconSize}">${planet.icon}</div>`
      : '';

    planetDiv.innerHTML = `
      ${iconMarkup}
      <div class="planet-label" style="font-size:${labelSize}">${planet.label.replace('\n', '<br>')}</div>
    `;

    function activatePlanet() {
      if (activePlanetDiv && activePlanetDiv !== planetDiv) {
        activePlanetDiv.classList.remove('is-active');
        activePlanetDiv.style.transform = 'translate(-50%, -50%) scale(1)';
        activePlanetDiv.style.zIndex = '';
      }

      orbitGroup.querySelectorAll('.orbit-planet-track').forEach((track) => {
        track.style.animationPlayState = 'paused';
      });

      planetDiv.classList.add('is-active');
      planetDiv.style.transform = 'translate(-50%, -50%) scale(1.24)';
      planetDiv.style.zIndex = '30';
      activePlanetDiv = planetDiv;
      setCoreState(planet);
    }

    planetDiv.addEventListener('mouseenter', activatePlanet);
    planetDiv.addEventListener('touchstart', (event) => {
      event.preventDefault();
      activatePlanet();
    }, { passive: false });

    orbitTrack.appendChild(planetDiv);
    orbitGroup.appendChild(orbitTrack);
  });

  let styleEl = document.getElementById('orbit-keyframes');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'orbit-keyframes';
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = keyframes;
}

function sizeOrbit() {
  const orbitContainer = document.getElementById('orbitContainer');
  if (window.innerWidth < 700) {
    orbitContainer.style.width = '300px';
    orbitContainer.style.height = '300px';
  } else if (window.innerWidth < 900) {
    orbitContainer.style.width = '340px';
    orbitContainer.style.height = '340px';
  } else {
    orbitContainer.style.width = '540px';
    orbitContainer.style.height = '540px';
  }
}

setCoreState(null);
buildOrbit();
sizeOrbit();

if (container) {
  container.addEventListener('mouseleave', clearActivePlanet);
}

document.addEventListener('touchstart', (event) => {
  if (container && !container.contains(event.target)) {
    clearActivePlanet();
  }
}, { passive: true });

window.addEventListener('resize', () => {
  buildOrbit();
  sizeOrbit();
  clearActivePlanet();
  setCoreState(null);
});
