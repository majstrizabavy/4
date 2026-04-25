const clientAuthShell = document.getElementById('clientAuthShell');
const clientDashboardShell = document.getElementById('clientDashboardShell');
const clientAuthForm = document.getElementById('clientAuthForm');
const clientAuthStatus = document.getElementById('clientAuthStatus');
const clientRegisterButton = document.getElementById('clientRegisterButton');
const clientLogoutButton = document.getElementById('clientLogoutButton');
const clientRefreshButton = document.getElementById('clientRefreshButton');
const clientCurrentUser = document.getElementById('clientCurrentUser');
const clientOrdersList = document.getElementById('clientOrdersList');
const clientOrdersEmpty = document.getElementById('clientOrdersEmpty');

let clientSession = null;
let clientOrders = [];

const CLIENT_ORDER_SELECT = [
  'id',
  'title',
  'event_date',
  'location',
  'status',
  'price',
  'services',
  'notes',
  'created_at',
  'updated_at'
].join(', ');

const CLIENT_STATUS_LABELS = {
  draft: 'Rozpracované',
  sent: 'Ponuka odoslaná',
  confirmed: 'Potvrdené',
  in_progress: 'V príprave',
  done: 'Dokončené',
  cancelled: 'Zrušené'
};

function setClientStatus(type, message) {
  if (!clientAuthStatus) return;
  clientAuthStatus.className = `admin-auth__status${type ? ` is-${type}` : ''}`;
  clientAuthStatus.textContent = message;
}

function getClientSupabase() {
  return window.MZSupabase?.getClient();
}

function formatClientPrice(value) {
  if (value === null || value === undefined || value === '') return 'Cena sa doplní';
  const numberValue = Number(value);
  if (Number.isNaN(numberValue)) return String(value);

  return new Intl.NumberFormat('sk-SK', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: numberValue % 1 === 0 ? 0 : 2
  }).format(numberValue);
}

function splitServices(value) {
  return String(value || '')
    .split(/\r?\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function formatClientDate(value) {
  return window.MZSupabase?.formatEventDate(value) || value || 'Dátum doplníme';
}

function showClientLogin() {
  if (clientAuthShell) clientAuthShell.hidden = false;
  if (clientDashboardShell) clientDashboardShell.hidden = true;
}

function showClientDashboard(userEmail) {
  if (clientAuthShell) clientAuthShell.hidden = true;
  if (clientDashboardShell) clientDashboardShell.hidden = false;
  if (clientCurrentUser) clientCurrentUser.textContent = userEmail || 'Moja akcia';
}

function renderClientOrderCard(order) {
  const safeTitle = window.MZSupabase.escapeHtml(order.title || 'Moja akcia');
  const safeLocation = window.MZSupabase.escapeHtml(order.location || 'Miesto doplníme');
  const safeStatus = window.MZSupabase.escapeHtml(CLIENT_STATUS_LABELS[order.status] || order.status || 'Rozpracované');
  const safeNotes = window.MZSupabase.escapeHtml(order.notes || 'Pokyny doplníme podľa dohody.').replace(/\n/g, '<br>');
  const services = splitServices(order.services);
  const serviceMarkup = services.length
    ? services.map((item) => `<li>${window.MZSupabase.escapeHtml(item)}</li>`).join('')
    : '<li>Služby doplníme podľa dohody.</li>';
  const contactSubject = encodeURIComponent(`Úprava objednávky / ${order.title || 'Moja akcia'}`);
  const contactBody = encodeURIComponent(`Dobrý deň,\n\nchcem upraviť objednávku: ${order.title || 'Moja akcia'}.\n\nĎakujem.`);

  return `
    <article class="client-order-card">
      <div class="client-order-card__top">
        <div>
          <div class="client-order-card__eyebrow">${window.MZSupabase.escapeHtml(formatClientDate(order.event_date))}</div>
          <h2 class="client-order-card__title">${safeTitle}</h2>
        </div>
        <span class="client-order-status is-${window.MZSupabase.escapeHtml(order.status || 'draft')}">${safeStatus}</span>
      </div>

      <div class="client-order-card__meta">
        <div>
          <span>Miesto</span>
          <strong>${safeLocation}</strong>
        </div>
        <div>
          <span>Dohodnutá cena</span>
          <strong>${window.MZSupabase.escapeHtml(formatClientPrice(order.price))}</strong>
        </div>
      </div>

      <div class="client-order-card__grid">
        <div class="client-order-card__block">
          <div class="client-order-card__label">Objednané služby</div>
          <ul>${serviceMarkup}</ul>
        </div>
        <div class="client-order-card__block">
          <div class="client-order-card__label">Poznámka / pokyny</div>
          <p>${safeNotes}</p>
        </div>
      </div>

      <div class="client-order-card__actions">
        <a class="btn-primary" href="mailto:info@majstrizabavy.sk?subject=${contactSubject}&body=${contactBody}">Chcem niečo upraviť</a>
        <a class="btn-ghost" href="kontakt.html#kontakt">Kontakt</a>
      </div>
    </article>
  `;
}

function renderClientOrders() {
  if (!clientOrdersList || !clientOrdersEmpty) return;

  if (!clientOrders.length) {
    clientOrdersList.innerHTML = '';
    clientOrdersEmpty.hidden = false;
    clientOrdersEmpty.textContent = 'Zatiaľ tu nemáš priradenú žiadnu akciu.';
    return;
  }

  clientOrdersEmpty.hidden = true;
  clientOrdersList.innerHTML = clientOrders.map((order) => renderClientOrderCard(order)).join('');
}

async function loadClientOrders() {
  const supabaseClient = getClientSupabase();
  if (!supabaseClient) return;

  const { data, error } = await supabaseClient
    .from('client_orders')
    .select(CLIENT_ORDER_SELECT)
    .order('event_date', { ascending: true, nullsFirst: false })
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error('Objednávky sa nepodarilo načítať.');
  }

  clientOrders = data || [];
  renderClientOrders();
}

async function refreshClientOrdersSafely() {
  try {
    await loadClientOrders();
  } catch (error) {
    setClientStatus('error', error.message || 'Objednávky sa nepodarilo načítať.');
  }
}

async function handleClientAuth(event) {
  event.preventDefault();
  const supabaseClient = getClientSupabase();
  if (!clientAuthForm || !supabaseClient) return;

  const formData = new FormData(clientAuthForm);
  const email = String(formData.get('email') || '').trim();
  const password = String(formData.get('password') || '');

  setClientStatus('', 'Prihlasujem...');
  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });

  if (error) {
    setClientStatus('error', 'Prihlásenie sa nepodarilo. Skontroluj email a heslo.');
    return;
  }

  setClientStatus('success', 'Prihlásenie prebehlo úspešne.');
}

async function handleClientRegister() {
  const supabaseClient = getClientSupabase();
  if (!clientAuthForm || !supabaseClient) return;

  const formData = new FormData(clientAuthForm);
  const email = String(formData.get('email') || '').trim();
  const password = String(formData.get('password') || '');

  if (!email || password.length < 6) {
    setClientStatus('error', 'Zadaj email a heslo aspoň so 6 znakmi.');
    return;
  }

  setClientStatus('', 'Registrujem účet...');
  const { data, error } = await supabaseClient.auth.signUp({ email, password });

  if (error) {
    setClientStatus('error', 'Registrácia sa nepodarila. Skús iný email alebo heslo.');
    return;
  }

  setClientStatus('success', data.session
    ? 'Registrácia prebehla úspešne.'
    : 'Registrácia prebehla. Ak Supabase vyžaduje potvrdenie emailu, skontroluj schránku.');
}

async function handleClientLogout() {
  const supabaseClient = getClientSupabase();
  if (!supabaseClient) return;
  await supabaseClient.auth.signOut();
}

async function syncClientSession(session) {
  clientSession = session;

  if (!session?.user) {
    clientOrders = [];
    showClientLogin();
    renderClientOrders();
    return;
  }

  showClientDashboard(session.user.email);
  await refreshClientOrdersSafely();
}

function bindClientZone() {
  if (clientAuthForm) clientAuthForm.addEventListener('submit', handleClientAuth);
  if (clientRegisterButton) clientRegisterButton.addEventListener('click', handleClientRegister);
  if (clientLogoutButton) clientLogoutButton.addEventListener('click', handleClientLogout);
  if (clientRefreshButton) clientRefreshButton.addEventListener('click', refreshClientOrdersSafely);
}

async function initClientZone() {
  const supabaseClient = getClientSupabase();
  if (!supabaseClient) return;

  bindClientZone();
  setClientStatus('', 'Prihlás sa alebo si vytvor účet.');

  const {
    data: { session }
  } = await supabaseClient.auth.getSession();

  supabaseClient.auth.onAuthStateChange(async (_eventName, nextSession) => {
    await syncClientSession(nextSession);
  });

  await syncClientSession(session);
}

initClientZone().catch((error) => {
  setClientStatus('error', error.message || 'Klientska zóna sa nepodarila spustiť.');
});
