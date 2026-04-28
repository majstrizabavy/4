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
const adminOrderSaveButton = document.getElementById('adminOrderSaveButton');
const adminOrdersSearch = document.getElementById('adminOrdersSearch');
const adminOrdersList = document.getElementById('adminOrdersList');
const adminOrdersEmpty = document.getElementById('adminOrdersEmpty');
const adminRequestsBadge = document.getElementById('adminRequestsBadge');
const adminRequestsList = document.getElementById('adminRequestsList');
const adminRequestsEmpty = document.getElementById('adminRequestsEmpty');

let adminOrdersSession = null;
let adminClientOrders = [];
let adminClientRequests = [];
let adminPriceWasEdited = false;
let adminManualPriceValue = '';
let adminOrderSaveInProgress = false;
const adminOrderSaveButtonLabel = adminOrderSaveButton?.textContent || 'Ulozit objednavku';
const ADMIN_SAVE_TIMEOUT_MS = 25000;

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

const ADMIN_CLIENT_REQUEST_SELECT = [
  'id',
  'status',
  'contact_name',
  'contact_email',
  'contact_phone',
  'title',
  'event_date',
  'location',
  'audience',
  'guest_count',
  'energy',
  'budget',
  'promo',
  'selected_variant',
  'selected_price',
  'services',
  'notes',
  'admin_note',
  'created_at',
  'approved_order_id'
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
  return window.MZSupabase?.getClient();
}

function setAdminOrderSavingState(isSaving) {
  if (!adminOrderSaveButton) return;
  adminOrderSaveButton.disabled = isSaving;
  adminOrderSaveButton.textContent = isSaving ? 'Ukladam objednavku...' : adminOrderSaveButtonLabel;
}

async function withAdminSaveTimeout(requestPromise, contextLabel) {
  let timeoutId = null;
  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = window.setTimeout(() => {
      console.warn('[MZ admin orders] Save timeout fired:', {
        mode: contextLabel,
        timeoutMs: ADMIN_SAVE_TIMEOUT_MS
      });
      reject(new Error(`${contextLabel} trva prilis dlho. Skontroluj konzolu a Supabase RPC/policies.`));
    }, ADMIN_SAVE_TIMEOUT_MS);
  });

  try {
    const result = await Promise.race([requestPromise, timeoutPromise]);
    console.log('[MZ admin orders] Save request resolved:', {
      mode: contextLabel,
      result
    });
    return result;
  } finally {
    if (timeoutId) window.clearTimeout(timeoutId);
  }
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
  adminOrderForm.removeAttribute('data-source-request-id');
  adminPriceWasEdited = false;
  adminManualPriceValue = '';
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
      .concat(adminClientRequests.map((request) => String(request.contact_email || '').trim().toLowerCase()))
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

function formatRequestCreatedAt(value) {
  if (!value) return 'Bez dátumu';
  const parsedDate = new Date(value);
  if (Number.isNaN(parsedDate.getTime())) return String(value).slice(0, 10);

  return new Intl.DateTimeFormat('sk-SK', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(parsedDate);
}

function buildRequestServices(request) {
  return [
    request.selected_variant ? `Variant: ${request.selected_variant}` : '',
    request.selected_price ? `Predbezna cena: ${request.selected_price}` : '',
    request.services || ''
  ].filter(Boolean).join('\n');
}

function buildRequestNotes(request) {
  return [
    request.notes ? `Poznamka klienta: ${request.notes}` : '',
    request.audience ? `Pre koho: ${request.audience}` : '',
    request.guest_count ? `Pocet ludi: ${request.guest_count}` : '',
    request.energy ? `Energia: ${request.energy}` : '',
    request.budget ? `Rozpocet: ${request.budget}` : '',
    request.promo ? `Promo: ${request.promo}` : '',
    request.contact_phone ? `Telefon: ${request.contact_phone}` : ''
  ].filter(Boolean).join('\n');
}

function renderAdminRequestCard(request) {
  const safeTitle = window.MZSupabase.escapeHtml(request.title || 'Bez nazvu');
  const safeEmail = window.MZSupabase.escapeHtml(request.contact_email || '');
  const safeName = window.MZSupabase.escapeHtml(request.contact_name || 'Bez mena');
  const safePhone = window.MZSupabase.escapeHtml(request.contact_phone || 'Telefon nie je zadany');
  const safeLocation = window.MZSupabase.escapeHtml(request.location || 'Miesto nie je zadane');
  const safeVariant = window.MZSupabase.escapeHtml(request.selected_variant || 'Variant nie je zadany');
  const safePrice = window.MZSupabase.escapeHtml(request.selected_price || 'Cena nie je zadana');
  const safeNotes = window.MZSupabase.escapeHtml(buildRequestNotes(request) || 'Bez poznamky').replace(/\n/g, '<br>');
  const safeServices = window.MZSupabase.escapeHtml(buildRequestServices(request) || 'Sluzby nie su zadane').replace(/\n/g, '<br>');
  const statusLabel = request.status === 'approved' ? 'Schvalene' : request.status === 'rejected' ? 'Zamietnute' : 'Caka';

  return `
    <article class="admin-event-card admin-request-card">
      <div class="admin-event-card__main">
        <div class="admin-event-card__top">
          <div>
            <div class="admin-event-card__eyebrow">${window.MZSupabase.escapeHtml(formatRequestCreatedAt(request.created_at))} · ${safeEmail}</div>
            <h3 class="admin-event-card__title">${safeTitle}</h3>
          </div>
          <span class="admin-status-pill is-${window.MZSupabase.escapeHtml(request.status || 'pending')}">${statusLabel}</span>
        </div>

        <div class="admin-event-card__meta-grid">
          <div><strong>Klient:</strong> ${safeName}</div>
          <div><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></div>
          <div><strong>Telefon:</strong> ${safePhone}</div>
          <div><strong>Datum:</strong> ${window.MZSupabase.escapeHtml(formatAdminOrderDate(request.event_date))}</div>
          <div><strong>Miesto:</strong> ${safeLocation}</div>
          <div><strong>Variant:</strong> ${safeVariant}</div>
          <div><strong>Predbezna cena:</strong> ${safePrice}</div>
        </div>

        <div class="admin-order-card__text-grid">
          <div class="admin-event-card__description">
            <div class="admin-event-card__label">Sluzby</div>
            <p>${safeServices}</p>
          </div>
          <div class="admin-event-card__description">
            <div class="admin-event-card__label">Detaily</div>
            <p>${safeNotes}</p>
          </div>
        </div>
      </div>

      <aside class="admin-event-card__side admin-order-card__side">
        <button type="button" class="btn-primary admin-action-btn" data-admin-request-prepare="${request.id}">Pripravit objednavku</button>
        <button type="button" class="btn-ghost admin-action-btn admin-action-btn--danger" data-admin-request-reject="${request.id}">Zamietnut</button>
      </aside>
    </article>
  `;
}

function renderAdminRequests() {
  if (!adminRequestsList || !adminRequestsEmpty) return;

  const pendingRequests = adminClientRequests.filter((request) => request.status === 'pending');
  if (adminRequestsBadge) adminRequestsBadge.textContent = `${pendingRequests.length} caka`;
  renderClientEmailOptions();

  if (!pendingRequests.length) {
    adminRequestsList.innerHTML = '';
    adminRequestsEmpty.hidden = false;
    adminRequestsEmpty.textContent = 'Zatial tu nie su ziadne nove dopyty.';
    return;
  }

  adminRequestsEmpty.hidden = true;
  adminRequestsList.innerHTML = pendingRequests.map((request) => renderAdminRequestCard(request)).join('');
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
  if (!supabaseClient) {
    console.error('[MZ admin orders] Supabase client is not available.');
    setAdminOrderFormStatus('error', 'Supabase klient sa nepodarilo nacitat. Obnov stranku a skus znova.');
    return;
  }

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

async function loadAdminRequests() {
  const supabaseClient = getAdminOrdersSupabase();
  if (!supabaseClient || !adminRequestsList) return;

  const { data, error } = await supabaseClient
    .from('client_requests')
    .select(ADMIN_CLIENT_REQUEST_SELECT)
    .order('created_at', { ascending: false });

  if (error) {
    adminClientRequests = [];
    renderAdminRequests();
    setAdminOrdersStatus('error', 'Dopyty sa nepodarilo nacitat. Skontroluj, ci je spusteny SQL skript client-requests.sql.');
    return;
  }

  adminClientRequests = data || [];
  renderAdminRequests();
}

async function refreshAdminOrdersSafely() {
  try {
    await loadAdminOrders();
    await loadAdminRequests();
  } catch (error) {
    console.error('[MZ admin orders] Refresh failed:', error);
    setAdminOrdersStatus('error', error.message || 'Objednávky sa nepodarilo načítať.');
  }
}

function getAdminOrderPriceValue({ requireFinalPrice = false } = {}) {
  const clientEmail = String(adminOrderClientEmail?.value || '').trim().toLowerCase();
  const title = String(adminOrderTitle?.value || '').trim();
  const rawPrice = String(adminOrderPrice?.value || '').trim();
  const normalizedPrice = rawPrice.replace(',', '.');

  if (!clientEmail || !title) {
    throw new Error('Vyplň email klienta a názov akcie.');
  }

  if (!rawPrice) {
    if (requireFinalPrice) {
      throw new Error('Zadaj finálnu cenu.');
    }

    return null;
  }

  const priceValue = Number(normalizedPrice);

  if (rawPrice && !Number.isFinite(priceValue)) {
    throw new Error('Cena musí byť číslo.');
  }

  if (priceValue < 0) {
    throw new Error('Cena nemôže byť záporná.');
  }

  console.log('[MZ admin orders] Parsed admin price:', {
    rawPrice,
    normalizedPrice,
    priceValue,
    priceType: typeof priceValue,
    isFinite: Number.isFinite(priceValue)
  });

  return priceValue;
}

function getAdminOrderPayload({ requireFinalPrice = false } = {}) {
  const clientEmail = String(adminOrderClientEmail?.value || '').trim().toLowerCase();
  const title = String(adminOrderTitle?.value || '').trim();
  const priceValue = getAdminOrderPriceValue({ requireFinalPrice });

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
  if (adminOrderSaveInProgress) {
    console.warn('[MZ admin orders] Duplicate save submit ignored while previous save is still running.');
    return;
  }

  const supabaseClient = getAdminOrdersSupabase();
  if (!supabaseClient) {
    console.error('[MZ admin orders] Supabase client is not available.');
    setAdminOrderFormStatus('error', 'Supabase klient sa nepodarilo nacitat. Obnov stranku a skus znova.');
    return;
  }

  adminOrderSaveInProgress = true;
  setAdminOrderSavingState(true);

  try {
    const orderId = adminOrderId?.value || '';
    const sourceRequestId = adminOrderForm?.dataset.sourceRequestId || '';
    const isApprovingRequest = Boolean(sourceRequestId && !orderId);
    const payload = getAdminOrderPayload({ requireFinalPrice: isApprovingRequest });
    const saveMode = sourceRequestId && !orderId
      ? 'approve_client_request'
      : orderId
        ? 'update_client_order'
        : 'create_client_order_for_email';

    setAdminOrderFormStatus('', 'Ukladam objednavku...');

    let request;
    if (sourceRequestId && !orderId) {
      const rpcPayload = {
        p_request_id: sourceRequestId,
        p_title: payload.title,
        p_event_date: payload.event_date,
        p_location: payload.location,
        p_status: payload.status,
        p_price: payload.price,
        p_services: payload.services,
        p_notes: payload.notes,
        p_admin_note: null
      };

      console.log('[MZ admin orders] approve_client_request payload:', {
        requestId: sourceRequestId,
        parsedPrice: payload.price,
        parsedPriceType: typeof payload.price,
        rpcPayload
      });
      console.log('[MZ admin orders] Starting approve_client_request RPC.');

      request = supabaseClient.rpc('approve_client_request', rpcPayload);
    } else if (orderId) {
      request = supabaseClient.from('client_orders').update(payload).eq('id', orderId);
    } else {
      request = supabaseClient.rpc('create_client_order_for_email', {
        p_client_email: payload.client_email,
        p_title: payload.title,
        p_event_date: payload.event_date,
        p_location: payload.location,
        p_status: payload.status,
        p_price: payload.price,
        p_services: payload.services,
        p_notes: payload.notes
      });
    }

    const { data, error } = await withAdminSaveTimeout(request, saveMode);
    console.log('[MZ admin orders] Save response payload:', {
      mode: saveMode,
      data,
      error
    });

    if (error) {
      console.error('[MZ admin orders] Supabase save failed:', {
        mode: saveMode,
        error,
        sourceRequestId,
        orderId,
        clientEmail: payload.client_email
      });

      if (String(error.message || '').toLowerCase().includes('este nie je registrovany')) {
        throw new Error('Objednavku blokuje stara databazova funkcia create_client_order_for_email: klient este nema ucet. Spusti prosim aktualny supabase/sql/client-requests.sql.');
      }

      throw new Error(error.message || 'Objednavku sa nepodarilo ulozit.');
    }

    resetAdminOrderForm();
    setAdminOrderFormStatus('success', 'Objednavka je ulozena.');
    await loadAdminOrders();
    await loadAdminRequests();
  } catch (error) {
    console.error('[MZ admin orders] Save flow failed:', error);
    setAdminOrderFormStatus('error', error.message || 'Objednavku sa nepodarilo ulozit. Pozri konzolu pre detail.');
  } finally {
    adminOrderSaveInProgress = false;
    setAdminOrderSavingState(false);
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
  adminPriceWasEdited = false;
  adminManualPriceValue = adminOrderPrice?.value || '';
  if (adminOrderServices) adminOrderServices.value = order.services || '';
  if (adminOrderNotes) adminOrderNotes.value = order.notes || '';
  if (adminOrderFormMode) adminOrderFormMode.textContent = 'Úprava objednávky';

  setAdminOrderFormStatus('', 'Uprav objednávku a ulož zmeny.');
  adminOrderForm?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function fillAdminOrderFormFromRequest(requestId) {
  const request = adminClientRequests.find((item) => item.id === requestId);
  if (!request) return;

  if (adminOrderId) adminOrderId.value = '';
  if (adminOrderClientEmail) adminOrderClientEmail.value = request.contact_email || '';
  if (adminOrderStatus) adminOrderStatus.value = 'sent';
  if (adminOrderTitle) adminOrderTitle.value = request.title || '';
  if (adminOrderDate) adminOrderDate.value = request.event_date || '';
  if (adminOrderLocation) adminOrderLocation.value = request.location || '';
  if (adminOrderPrice) adminOrderPrice.value = '';
  adminPriceWasEdited = false;
  adminManualPriceValue = '';
  if (adminOrderServices) adminOrderServices.value = buildRequestServices(request);
  if (adminOrderNotes) adminOrderNotes.value = buildRequestNotes(request);
  if (adminOrderFormMode) adminOrderFormMode.textContent = 'Objednavka z dopytu';

  adminOrderForm?.setAttribute('data-source-request-id', request.id);
  setAdminOrderFormStatus('', 'Dopyt je predvyplneny. Skontroluj cenu, sluzby a uloz objednavku.');
  adminOrderForm?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function rejectAdminRequest(requestId) {
  const supabaseClient = getAdminOrdersSupabase();
  if (!supabaseClient) return;

  const {
    data: { user }
  } = await supabaseClient.auth.getUser();

  const { error } = await supabaseClient
    .from('client_requests')
    .update({
      status: 'rejected',
      rejected_at: new Date().toISOString(),
      rejected_by: user?.id || null
    })
    .eq('id', requestId);

  if (error) throw new Error('Dopyt sa nepodarilo zamietnut.');
  await loadAdminRequests();
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
  if (adminOrderPrice) {
    adminOrderPrice.addEventListener('input', () => {
      adminPriceWasEdited = true;
      adminManualPriceValue = adminOrderPrice.value;
    });
  }

  if (adminOrdersList) {
    adminOrdersList.addEventListener('click', (event) => {
      const editButton = event.target.closest('[data-admin-order-edit]');
      if (!editButton) return;
      fillAdminOrderForm(editButton.dataset.adminOrderEdit);
    });
  }

  if (adminRequestsList) {
    adminRequestsList.addEventListener('click', async (event) => {
      const prepareButton = event.target.closest('[data-admin-request-prepare]');
      const rejectButton = event.target.closest('[data-admin-request-reject]');

      try {
        if (prepareButton) {
          fillAdminOrderFormFromRequest(prepareButton.dataset.adminRequestPrepare);
          return;
        }

        if (rejectButton) {
          await rejectAdminRequest(rejectButton.dataset.adminRequestReject);
          setAdminOrdersStatus('success', 'Dopyt je zamietnuty.');
        }
      } catch (error) {
        setAdminOrdersStatus('error', error.message || 'Dopyt sa nepodarilo spracovat.');
      }
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
