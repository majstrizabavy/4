/* ============================================================
   orbit.js - Interaktivna mapa sekcii pre stranku Svet Zabavy
   ============================================================ */

const planets = [
  {
    icon: '',
    core: 'MZ',
    label: 'SVET\nZABAVY',
    desc: 'Objednaj si akcie, atrakcie a sluzby pod jednou strechou.',
    cta: 'OTVORIŤ SVET ZÁBAVY',
    target: 'svet-zabavy.html',
    color: '#7b2fff'
  },
  {
    icon: '',
    core: 'MZ',
    label: 'INSPIRACIA',
    desc: 'Hľadáš nápad na akciu? Nechaj sa inšpirovať tým najlepším zo sveta zábavy.',
    cta: 'OTVORIT INSPIRACIU',
    target: 'inspiracia',
    color: '#00d4ff'
  },
  {
    icon: '',
    core: '365',
    label: '365 DNI',
    desc: 'Zábava nikdy nekončí. Objav, kam ísť dnes, tento víkend alebo celý rok.',
    cta: 'OTVORIT KALENDAR',
    target: 'rok',
    color: '#57b8ff'
  },
  {
    icon: '',
    core: 'MZ',
    label: 'PROJEKTY',
    desc: 'Pozri si, čo všetko vzniká pod značkou Majstri Zábavy.',
    cta: 'OTVORIT PROJEKTY',
    target: 'projekty',
    color: '#bf7fff'
  },
  {
    icon: '',
    core: 'MZ',
    label: 'KONTAKT',
    desc: 'Začni svoju akciu ešte dnes. Stačí sa ozvať a my sa postaráme o zvyšok.',
    cta: 'PREJST NA KONTAKT',
    target: 'kontakt',
    color: '#ff6bb5'
  },
  {
    icon: '',
    core: 'MZ',
    label: 'TVOJA\nAKCIA',
    desc: 'Navrhni si akciu na mieru a zisti, ako môže vyzerať tvoja ideálna zábava.',
    cta: 'NAVRHNI SI AKCIU',
    target: 'navrhni-akciu',
    color: '#8dc8ff'
  }
];

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

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
    coreLogo.textContent = 'MZ';
    coreDesc.textContent = '';
    coreCta.textContent = 'OTVORIT SEKCIU';
    coreCta.onclick = () => navigateTo('kontakt');
    coreCta.disabled = false;
    return;
  }

  container.classList.add('planet-active');
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
    activePlanetDiv.style.borderColor = '';
    activePlanetDiv.style.background = '';
    activePlanetDiv.style.boxShadow = '';
    activePlanetDiv.style.transform = 'translate(-50%, -50%) scale(1)';
    activePlanetDiv.style.zIndex = '';
  }

  activePlanetDiv = null;
  setCoreState(null);
}

function buildOrbit() {
  orbitGroup.innerHTML = '';

  const radius = isMobile() ? 115 : 210;
  const size = isMobile() ? 56 : 72;
  const iconSize = isMobile() ? '11px' : '12px';
  const labelSize = isMobile() ? '6px' : '7px';
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
        activePlanetDiv.style.borderColor = '';
        activePlanetDiv.style.background = '';
        activePlanetDiv.style.boxShadow = '';
        activePlanetDiv.style.transform = 'translate(-50%, -50%) scale(1)';
        activePlanetDiv.style.zIndex = '';
      }

      orbitGroup.querySelectorAll('.orbit-planet-track').forEach((track) => {
        track.style.animationPlayState = 'paused';
      });

      planetDiv.style.borderColor = planet.color;
      planetDiv.style.background = `rgba(${hexToRgb(planet.color)}, 0.15)`;
      planetDiv.style.boxShadow = `0 0 28px ${planet.color}, 0 0 60px ${planet.color}44, inset 0 0 20px ${planet.color}22`;
      planetDiv.style.transform = 'translate(-50%, -50%) scale(1.3)';
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
    orbitContainer.style.width = '600px';
    orbitContainer.style.height = '600px';
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
