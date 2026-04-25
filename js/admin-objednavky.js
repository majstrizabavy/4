const adminOrdersLoginShell = document.getElementById('adminOrdersLoginShell');
const adminOrdersDashboardShell = document.getElementById('adminOrdersDashboardShell');
const adminOrdersLoginForm = document.getElementById('adminOrdersLoginForm');
const adminOrdersStatus = document.getElementById('adminOrdersStatus');
const adminOrdersCurrentUser = document.getElementById('adminOrdersCurrentUser');
const adminOrdersLogoutButton = document.getElementById('adminOrdersLogoutButton');
const adminOrdersRefreshButton = document.getElementById('adminOrdersRefreshButton');
const adminOrderForm = document.getElementById('adminOrderForm');
const adminOrderId = document.getElementById('adminOrderId');
const adminOrderFormMode = document.getElementById('adminOrderFormMode');
const adminOrderFormStatus = document.getElementById('adminOrderFormStatus');
const adminOrderClientEmail = document.getElementById('adminOrderClientEmail');
const adminOrderClientEmails = document.getElementById('adminOrderClientEmails');
const adminOrderStatus = document.getElementById('adminOrderStatus');
const adminOrderTitle = document.getElementById('adminOrderTitle');
const adminOrderDate = document.getElementById('adminOrderDate');
const adminOrderLocation = document.getElementById('adminOrderLocation');
const adminOrderPrice = document.getElementById('adminOrderPrice');
const adminOrderServices = document.getElementById('adminOrderServices');
const adminOrderNotes = document.getElementById('adminOrderNotes');
const adminOrderResetButton = document.getElementById('adminOrderResetButton');
const adminOrdersSearch = document.getElementById('adminOrdersSearch');
const adminOrdersList = document.getElementById('adminOrdersList');
const adminOrdersEmpty = document.getElementById('adminOrdersEmpty');

let adminOrdersSession = null;
let adminClientOrders = [];

const ADMIN_CLIENT_ORDER_SELECT = [
  'id',
  'client_email',
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

const ADMIN_ORDER_STATUS_LABELS = {
  draft: 'Rozpracované',
  sent: 'Ponuka odoslaná',
  confirmed: 'Potvrdené',
  in_progress: 'V príprave',
  done: 'Dokončené',
  cancelled: 'Zrušené'
};

function setAdminOrdersStatus(type, message) {
  if (!adminOrdersStatus) return;
  adminOrdersStatus.className = `admin-auth__status${type ? ` is-${type}` : ''}`;
  adminOrdersStatus.textContent = message;
}

function setAdminOrderFormStatus(type, message) {
  if (!adminOrderFormStatus) return;
  adminOrderFormStatus.className = `partner-form__status${type ? ` is-${type}` : ''}`;
  adminOrderFormStatus.textContent = message;
}

function getAdminOrdersSupabase() {
  const supabaseClient = window.MZSupabase?.getClient();
  console.log('[admin-objednavky] supabase client exists', Boolean(supabaseClient), supabaseClient);
  return supabaseClient;
}

function formatAdminOrderDate(value) {
  return window.MZSupabase?.formatEventDate(value) || value || 'Bez dátumu';
}

function formatAdminOrderPrice(value) {
  if (value === null || value === undefined || value === '') return 'Cena nie je zadaná';
  const numberValue = Number(value);
  if (Number.isNaN(numberValue)) return String(value);

  return new Intl.NumberFormat('sk-SK', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: numberValue % 1 === 0 ? 0 : 2
  }).format(numberValue);
}

function showAdminOrdersLogin() {
  if (adminOrdersLoginShell) adminOrdersLoginShell.hidden = false;
  if (adminOrdersDashboardShell) adminOrdersDashboardShell.hidden = true;
}

function showAdminOrdersDashboard(userEmail) {
  if (adminOrdersLoginShell) adminOrdersLoginShell.hidden = true;
  if (adminOrdersDashboardShell) adminOrdersDashboardShell.hidden = false;
  if (adminOrdersCurrentUser) adminOrdersCurrentUser.textContent = userEmail || 'Admin objednávky';
}

function resetAdminOrderForm() {
  if (!adminOrderForm) return;

  adminOrderForm.reset();
  if (adminOrderId) adminOrderId.value = '';
  if (adminOrderStatus) adminOrderStatus.value = 'draft';
  if (adminOrderFormMode) adminOrderFormMode.textContent = 'Nová objednávka';
  setAdminOrderFormStatus('', 'Vyplň objednávku a ulož ju klientovi do zóny Moja akcia.');
}

function renderClientEmailOptions() {
  if (!adminOrderClientEmails) return;

  const emails = Array.from(new Set(
    adminClientOrders
      .map((order) => String(order.client_email || '').trim().toLowerCase())
      .filter(Boolean)
  )).sort();

  adminOrderClientEmails.innerHTML = emails
    .map((email) => `<option value="${window.MZSupabase.escapeHtml(email)}"></option>`)
    .join('');
}

function getFilteredAdminOrders() {
  const query = String(adminOrdersSearch?.value || '').trim().toLowerCase();
  if (!query) return adminClientOrders;

  return adminClientOrders.filter((order) => (
    String(order.client_email || '').toLowerCase().includes(query)
    || String(order.title || '').toLowerCase().includes(query)
    || String(order.location || '').toLowerCase().includes(query)
  ));
}

function renderAdminOrderCard(order) {
  const safeTitle = window.MZSupabase.escapeHtml(order.title || 'Bez názvu');
  const safeEmail = window.MZSupabase.escapeHtml(order.client_email || '');
  const safeLocation = window.MZSupabase.escapeHtml(order.location || 'Miesto nie je zadané');
  const safeStatus = window.MZSupabase.escapeHtml(ADMIN_ORDER_STATUS_LABELS[order.status] || order.status || 'Rozpracované');
  const safeServices = window.MZSupabase.escapeHtml(order.services || 'Služby nie sú zadané').replace(/\n/g, '<br>');
  const safeNotes = window.MZSupabase.escapeHtml(order.notes || 'Poznámka nie je zadaná').replace(/\n/g, '<br>');

  return `
    <article class="admin-event-card admin-order-card">
      <div class="admin-event-card__main">
        <div class="admin-event-card__top">
          <div>
            <div class="admin-event-card__eyebrow">${window.MZSupabase.escapeHtml(formatAdminOrderDate(order.event_date))} · ${safeEmail}</div>
            <h3 class="admin-event-card__title">${safeTitle}</h3>
          </div>
          <span class="client-order-status is-${window.MZSupabase.escapeHtml(order.status || 'draft')}">${safeStatus}</span>
        </div>

        <div class="admin-event-card__meta-grid">
          <div><strong>Klient:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></div>
          <div><strong>Miesto:</strong> ${safeLocation}</div>
          <div><strong>Cena:</strong> ${window.MZSupabase.escapeHtml(formatAdminOrderPrice(order.price))}</div>
          <div><strong>Upravené:</strong> ${window.MZSupabase.escapeHtml(formatAdminOrderDate(String(order.updated_at || '').slice(0, 10)))}</div>
        </div>

        <div class="admin-order-card__text-grid">
          <div class="admin-event-card__description">
            <div class="admin-event-card__label">Služby</div>
            <p>${safeServices}</p>
          </div>
          <div class="admin-event-card__description">
            <div class="admin-event-card__label">Poznámky</div>
            <p>${safeNotes}</p>
          </div>
        </div>
      </div>

      <aside class="admin-event-card__side admin-order-card__side">
        <button type="button" class="btn-primary admin-action-btn" data-admin-order-edit="${order.id}">Upraviť</button>
      </aside>
    </article>
  `;
}

function renderAdminOrders() {
  if (!adminOrdersList || !adminOrdersEmpty) return;

  renderClientEmailOptions();
  const filteredOrders = getFilteredAdminOrders();

  if (!filteredOrders.length) {
    adminOrdersList.innerHTML = '';
    adminOrdersEmpty.hidden = false;
    adminOrdersEmpty.textContent = adminClientOrders.length
      ? 'Pre hľadanie nie je žiadna objednávka.'
      : 'Zatiaľ tu nie sú žiadne klientské objednávky.';
    return;
  }

  adminOrdersEmpty.hidden = true;
  adminOrdersList.innerHTML = filteredOrders.map((order) => renderAdminOrderCard(order)).join('');
}

async function loadAdminOrders() {
  const supabaseClient = getAdminOrdersSupabase();
  if (!supabaseClient) return;

  const { data, error } = await supabaseClient
    .from('client_orders')
    .select(ADMIN_CLIENT_ORDER_SELECT)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error('Objednávky sa nepodarilo načítať. Skontroluj RLS a admin prístup.');
  }

  adminClientOrders = data || [];
  renderAdminOrders();
}

async function refreshAdminOrdersSafely() {
  try {
    await loadAdminOrders();
  } catch (error) {
    setAdminOrdersStatus('error', error.message || 'Objednávky sa nepodarilo načítať.');
  }
}

function getAdminOrderPayload() {
  const clientEmail = String(adminOrderClientEmail?.value || '').trim().toLowerCase();
  const title = String(adminOrderTitle?.value || '').trim();
  const rawPrice = String(adminOrderPrice?.value || '').trim();
  const priceValue = rawPrice ? Number(rawPrice) : null;

  if (!clientEmail || !title) {
    throw new Error('Vyplň email klienta a názov akcie.');
  }

  if (rawPrice && !Number.isFinite(priceValue)) {
    throw new Error('Cena musí byť číslo.');
  }

  return {
    client_email: clientEmail,
    title,
    event_date: adminOrderDate?.value || null,
    location: String(adminOrderLocation?.value || '').trim() || null,
    status: adminOrderStatus?.value || 'draft',
    price: priceValue,
    services: String(adminOrderServices?.value || '').trim() || null,
    notes: String(adminOrderNotes?.value || '').trim() || null
  };
}

async function saveAdminOrder(event) {
  event.preventDefault();
  const supabaseClient = getAdminOrdersSupabase();
  if (!supabaseClient) return;

  try {
    const payload = getAdminOrderPayload();
    const orderId = adminOrderId?.value || '';
    setAdminOrderFormStatus('', 'Ukladám objednávku...');
    console.log('[admin-objednavky] save payload', { orderId, payload });
    console.log('supabaseClient', supabaseClient);
    console.log('[admin-objednavky] rpc function name', 'create_client_order_for_email');

    const request = orderId
      ? supabaseClient.from('client_orders').update(payload).eq('id', orderId)
      : supabaseClient.rpc('create_client_order_for_email', {
        p_client_email: payload.client_email,
        p_title: payload.title,
        p_event_date: payload.event_date,
        p_location: payload.location,
        p_status: payload.status,
        p_price: payload.price,
        p_services: payload.services,
        p_notes: payload.notes
      });

    let data = null;
    let error = null;

    try {
      const response = await request;
      data = response.data;
      error = response.error;
    } catch (requestError) {
      console.error('[admin-objednavky] request await failed', requestError);
      throw requestError;
    }

    console.log('[admin-objednavky] save response', {
      mode: orderId ? 'update' : 'rpc:create_client_order_for_email',
      data,
      error
    });

    if (error) throw new Error(error.message || 'Objednávku sa nepodarilo uložiť.');

    resetAdminOrderForm();
    setAdminOrderFormStatus('success', 'Objednávka je uložená.');
    await loadAdminOrders();
  } catch (error) {
    setAdminOrderFormStatus('error', error.message || 'Objednávku sa nepodarilo uložiť.');
  }
}

function fillAdminOrderForm(orderId) {
  const order = adminClientOrders.find((item) => item.id === orderId);
  if (!order) return;

  if (adminOrderId) adminOrderId.value = order.id;
  if (adminOrderClientEmail) adminOrderClientEmail.value = order.client_email || '';
  if (adminOrderStatus) adminOrderStatus.value = order.status || 'draft';
  if (adminOrderTitle) adminOrderTitle.value = order.title || '';
  if (adminOrderDate) adminOrderDate.value = order.event_date || '';
  if (adminOrderLocation) adminOrderLocation.value = order.location || '';
  if (adminOrderPrice) adminOrderPrice.value = order.price ?? '';
  if (adminOrderServices) adminOrderServices.value = order.services || '';
  if (adminOrderNotes) adminOrderNotes.value = order.notes || '';
  if (adminOrderFormMode) adminOrderFormMode.textContent = 'Úprava objednávky';

  setAdminOrderFormStatus('', 'Uprav objednávku a ulož zmeny.');
  adminOrderForm?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function handleAdminOrdersLogin(event) {
  event.preventDefault();
  const supabaseClient = getAdminOrdersSupabase();
  if (!adminOrdersLoginForm || !supabaseClient) return;

  const formData = new FormData(adminOrdersLoginForm);
  const email = String(formData.get('email') || '').trim();
  const password = String(formData.get('password') || '');

  setAdminOrdersStatus('', 'Prihlasujem sa do admin časti...');
  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });

  if (error) {
    setAdminOrdersStatus('error', 'Prihlásenie sa nepodarilo. Skontroluj email a heslo.');
    return;
  }

  setAdminOrdersStatus('success', 'Prihlásenie prebehlo úspešne.');
}

async function handleAdminOrdersLogout() {
  const supabaseClient = getAdminOrdersSupabase();
  if (!supabaseClient) return;
  await supabaseClient.auth.signOut();
}

async function syncAdminOrdersSession(session) {
  adminOrdersSession = session;

  if (!session?.user) {
    showAdminOrdersLogin();
    return;
  }

  showAdminOrdersDashboard(session.user.email);
  resetAdminOrderForm();
  await refreshAdminOrdersSafely();
}

function bindAdminOrders() {
  if (adminOrdersLoginForm) adminOrdersLoginForm.addEventListener('submit', handleAdminOrdersLogin);
  if (adminOrdersLogoutButton) adminOrdersLogoutButton.addEventListener('click', handleAdminOrdersLogout);
  if (adminOrdersRefreshButton) adminOrdersRefreshButton.addEventListener('click', refreshAdminOrdersSafely);
  if (adminOrderForm) adminOrderForm.addEventListener('submit', saveAdminOrder);
  if (adminOrderResetButton) adminOrderResetButton.addEventListener('click', resetAdminOrderForm);
  if (adminOrdersSearch) adminOrdersSearch.addEventListener('input', renderAdminOrders);

  if (adminOrdersList) {
    adminOrdersList.addEventListener('click', (event) => {
      const editButton = event.target.closest('[data-admin-order-edit]');
      if (!editButton) return;
      fillAdminOrderForm(editButton.dataset.adminOrderEdit);
    });
  }
}

async function initAdminOrdersPage() {
  const supabaseClient = getAdminOrdersSupabase();
  if (!supabaseClient) return;

  bindAdminOrders();
  setAdminOrdersStatus('', 'Prihlás sa ako admin a spravuj klientské objednávky.');

  const {
    data: { session }
  } = await supabaseClient.auth.getSession();

  supabaseClient.auth.onAuthStateChange(async (_eventName, nextSession) => {
    await syncAdminOrdersSession(nextSession);
  });

  await syncAdminOrdersSession(session);
}

initAdminOrdersPage().catch((error) => {
  setAdminOrdersStatus('error', error.message || 'Admin objednávky sa nepodarilo spustiť.');
});
