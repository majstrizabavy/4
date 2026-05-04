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
let clientOrdersHaveProgramColumns = true;

const CLIENT_ORDER_BASE_SELECT = [
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

const CLIENT_ORDER_PROGRAM_SELECT = [
  CLIENT_ORDER_BASE_SELECT,
  'program_text',
  'program_status',
  'program_sent_at',
  'client_response_note',
  'client_response_at'
].join(', ');

const CLIENT_STATUS_LABELS = {
  draft: 'Rozpracovane',
  sent: 'Ponuka pripravena',
  confirmed: 'Potvrdene',
  in_progress: 'V priprave',
  done: 'Dokoncene',
  cancelled: 'Zrusene'
};

const CLIENT_PROGRAM_STATUS_LABELS = {
  draft: 'Pripravujeme program',
  sent: 'Caka na tvoju reakciu',
  confirmed: 'Potvrdene',
  change_requested: 'Poziadane o upravu',
  rejected: 'Zamietnute'
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
  if (value === null || value === undefined || value === '') return 'Cena sa doplni';
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
  return window.MZSupabase?.formatEventDate(value) || value || 'Datum doplnime';
}

function showClientLogin() {
  if (clientAuthShell) clientAuthShell.hidden = false;
  if (clientDashboardShell) clientDashboardShell.hidden = true;
}

function showClientDashboard(userEmail) {
  if (clientAuthShell) clientAuthShell.hidden = true;
  if (clientDashboardShell) clientDashboardShell.hidden = false;
  if (clientCurrentUser) clientCurrentUser.textContent = userEmail || 'Moj ucet';
}

function renderClientOrderCard(order) {
  const safeTitle = window.MZSupabase.escapeHtml(order.title || 'Moj ucet');
  const safeLocation = window.MZSupabase.escapeHtml(order.location || 'Miesto doplnime');
  const safeStatus = window.MZSupabase.escapeHtml(CLIENT_STATUS_LABELS[order.status] || order.status || 'Rozpracovane');
  const safeNotes = window.MZSupabase.escapeHtml(order.notes || 'Pokyny doplnime podla dohody.').replace(/\n/g, '<br>');
  const safeProgram = window.MZSupabase.escapeHtml(order.program_text || '').replace(/\n/g, '<br>');
  const programStatus = order.program_status || 'draft';
  const safeProgramStatus = window.MZSupabase.escapeHtml(CLIENT_PROGRAM_STATUS_LABELS[programStatus] || programStatus);
  const safeClientResponse = window.MZSupabase.escapeHtml(order.client_response_note || '').replace(/\n/g, '<br>');
  const canRespondToProgram = Boolean(order.program_text) && ['sent', 'change_requested'].includes(programStatus);
  const services = splitServices(order.services);
  const serviceMarkup = services.length
    ? services.map((item) => `<li>${window.MZSupabase.escapeHtml(item)}</li>`).join('')
    : '<li>Sluzby doplnime podla dohody.</li>';
  const contactSubject = encodeURIComponent(`Uprava objednavky / ${order.title || 'Moj ucet'}`);
  const contactBody = encodeURIComponent(`Dobry den,\n\nchcem upravit objednavku: ${order.title || 'Moj ucet'}.\n\nDakujem.`);

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
          <span>Dohodnuta cena</span>
          <strong>${window.MZSupabase.escapeHtml(formatClientPrice(order.price))}</strong>
        </div>
      </div>

      <div class="client-order-card__grid">
        <div class="client-order-card__block">
          <div class="client-order-card__label">Objednane sluzby</div>
          <ul>${serviceMarkup}</ul>
        </div>
        <div class="client-order-card__block">
          <div class="client-order-card__label">Poznamka / pokyny</div>
          <p>${safeNotes}</p>
        </div>
      </div>

      ${order.program_text ? `
        <div class="client-program-panel">
          <div class="client-order-card__top">
            <div>
              <div class="client-order-card__label">Program akcie</div>
              <h3 class="client-program-panel__title">Navrh od Majstrov zabavy</h3>
            </div>
            <span class="client-order-status is-${window.MZSupabase.escapeHtml(programStatus)}">${safeProgramStatus}</span>
          </div>
          <p class="client-program-panel__text">${safeProgram}</p>
          ${safeClientResponse ? `
            <div class="client-program-panel__response">
              <div class="client-order-card__label">Tvoja posledna reakcia</div>
              <p>${safeClientResponse}</p>
            </div>
          ` : ''}
          ${canRespondToProgram ? `
            <form class="client-program-response" data-client-program-form="${order.id}">
              <label class="partner-form__field">
                <span>Poznamka pre admina</span>
                <textarea name="note" rows="3" placeholder="Ak chces upravu, napis sem co treba zmenit."></textarea>
              </label>
              <div class="client-order-card__actions">
                <button type="submit" class="btn-primary" data-client-program-response="confirmed">Potvrdit program</button>
                <button type="submit" class="btn-ghost" data-client-program-response="change_requested">Chcem upravu</button>
                <button type="submit" class="btn-ghost admin-action-btn--danger" data-client-program-response="rejected">Zamietnut</button>
              </div>
            </form>
          ` : ''}
        </div>
      ` : ''}

      <div class="client-order-card__actions">
        <a class="btn-primary" href="mailto:info@majstrizabavy.sk?subject=${contactSubject}&body=${contactBody}">Chcem nieco upravit</a>
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
    clientOrdersEmpty.textContent = 'Zatial tu nemas priradenu ziadnu akciu.';
    return;
  }

  clientOrdersEmpty.hidden = true;
  clientOrdersList.innerHTML = clientOrders.map((order) => renderClientOrderCard(order)).join('');
}

async function loadClientOrders() {
  const supabaseClient = getClientSupabase();
  if (!supabaseClient) return;

  let response = await supabaseClient
    .from('client_orders')
    .select(CLIENT_ORDER_PROGRAM_SELECT)
    .order('event_date', { ascending: true, nullsFirst: false })
    .order('created_at', { ascending: false });

  if (response.error && /program_|client_response_/i.test(String(response.error.message || ''))) {
    clientOrdersHaveProgramColumns = false;
    response = await supabaseClient
      .from('client_orders')
      .select(CLIENT_ORDER_BASE_SELECT)
      .order('event_date', { ascending: true, nullsFirst: false })
      .order('created_at', { ascending: false });
  }

  if (response.error) {
    throw new Error('Objednavky sa nepodarilo nacitat.');
  }

  clientOrders = response.data || [];
  renderClientOrders();
}

async function refreshClientOrdersSafely() {
  try {
    await loadClientOrders();
  } catch (error) {
    setClientStatus('error', error.message || 'Objednavky sa nepodarilo nacitat.');
  }
}

async function submitClientProgramResponse(orderId, responseStatus, note) {
  const supabaseClient = getClientSupabase();
  if (!supabaseClient) return;

  if (!clientOrdersHaveProgramColumns) {
    throw new Error('Reakcie na program budu dostupne po spusteni SQL migracie client-programs.sql.');
  }

  const { error } = await supabaseClient.rpc('respond_to_client_program', {
    p_order_id: orderId,
    p_response: responseStatus,
    p_note: note || null
  });

  if (error) {
    throw new Error(error.message || 'Reakciu sa nepodarilo ulozit.');
  }

  await refreshClientOrdersSafely();
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
    setClientStatus('error', 'Prihlasenie sa nepodarilo. Skontroluj email a heslo.');
    return;
  }

  setClientStatus('success', 'Prihlasenie prebehlo uspesne.');
}

async function handleClientRegister() {
  const supabaseClient = getClientSupabase();
  if (!clientAuthForm || !supabaseClient) return;

  const formData = new FormData(clientAuthForm);
  const email = String(formData.get('email') || '').trim();
  const password = String(formData.get('password') || '');

  if (!email || password.length < 6) {
    setClientStatus('error', 'Zadaj email a heslo aspon so 6 znakmi.');
    return;
  }

  setClientStatus('', 'Registrujem ucet...');
  const { data, error } = await supabaseClient.auth.signUp({ email, password });

  if (error) {
    setClientStatus('error', 'Registracia sa nepodarila. Skus iny email alebo heslo.');
    return;
  }

  setClientStatus('success', data.session
    ? 'Registracia prebehla uspesne.'
    : 'Registracia prebehla. Ak Supabase vyzaduje potvrdenie emailu, skontroluj schranku.');
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

  if (clientOrdersList) {
    clientOrdersList.addEventListener('submit', async (event) => {
      const form = event.target.closest('[data-client-program-form]');
      if (!form) return;
      event.preventDefault();

      const submitter = event.submitter;
      const responseStatus = submitter?.dataset.clientProgramResponse || 'change_requested';
      const formData = new FormData(form);
      const note = String(formData.get('note') || '').trim();

      if (responseStatus === 'change_requested' && !note) {
        setClientStatus('error', 'Pri uprave napis prosim, co mame zmenit.');
        return;
      }

      try {
        setClientStatus('', 'Ukladam tvoju reakciu...');
        await submitClientProgramResponse(form.dataset.clientProgramForm, responseStatus, note);
        setClientStatus('success', 'Reakcia je ulozena. Dakujeme.');
      } catch (error) {
        setClientStatus('error', error.message || 'Reakciu sa nepodarilo ulozit.');
      }
    });
  }
}

async function initClientZone() {
  const supabaseClient = getClientSupabase();
  if (!supabaseClient) return;

  bindClientZone();
  setClientStatus('', 'Prihlas sa alebo si vytvor ucet.');

  const {
    data: { session }
  } = await supabaseClient.auth.getSession();

  supabaseClient.auth.onAuthStateChange(async (_eventName, nextSession) => {
    await syncClientSession(nextSession);
  });

  await syncClientSession(session);
}

initClientZone().catch((error) => {
  setClientStatus('error', error.message || 'Klientska zona sa nepodarila spustit.');
});
