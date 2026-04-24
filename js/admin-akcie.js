const adminLoginShell = document.getElementById('adminLoginShell');
const adminDashboardShell = document.getElementById('adminDashboardShell');
const adminLoginForm = document.getElementById('adminLoginForm');
const adminLoginStatus = document.getElementById('adminLoginStatus');
const adminEventsList = document.getElementById('adminEventsList');
const adminEventsEmpty = document.getElementById('adminEventsEmpty');
const adminFilterGroup = document.getElementById('adminFilterGroup');
const adminLogoutButton = document.getElementById('adminLogoutButton');
const adminRefreshButton = document.getElementById('adminRefreshButton');
const adminCurrentUser = document.getElementById('adminCurrentUser');
const adminSummaryPending = document.getElementById('adminSummaryPending');
const adminSummaryApproved = document.getElementById('adminSummaryApproved');
const adminSummaryRejected = document.getElementById('adminSummaryRejected');
const adminPendingBadge = document.getElementById('adminPendingBadge');

let adminSession = null;
let adminEvents = [];
let adminFilter = 'pending';
let adminAutoRefreshTimer = null;

function setAdminLoginStatus(type, message) {
  if (!adminLoginStatus) return;

  adminLoginStatus.className = `admin-auth__status${type ? ` is-${type}` : ''}`;
  adminLoginStatus.textContent = message;
}

function showAdminLogin() {
  if (adminLoginShell) adminLoginShell.hidden = false;
  if (adminDashboardShell) adminDashboardShell.hidden = true;
}

function showAdminDashboard(userEmail) {
  if (adminLoginShell) adminLoginShell.hidden = true;
  if (adminDashboardShell) adminDashboardShell.hidden = false;
  if (adminCurrentUser) adminCurrentUser.textContent = userEmail || 'Prihlásený admin';
}

function formatAdminDescription(value) {
  const safeText = window.MZSupabase.escapeHtml(value || '');
  return safeText.replace(/\n/g, '<br>');
}

function renderAdminSummary() {
  if (!adminSummaryPending || !adminSummaryApproved || !adminSummaryRejected) return;

  const pendingCount = adminEvents.filter((eventItem) => eventItem.status === 'pending').length;
  const approvedCount = adminEvents.filter((eventItem) => eventItem.status === 'approved').length;
  const rejectedCount = adminEvents.filter((eventItem) => eventItem.status === 'rejected').length;

  adminSummaryPending.textContent = String(pendingCount);
  adminSummaryApproved.textContent = String(approvedCount);
  adminSummaryRejected.textContent = String(rejectedCount);

  if (adminPendingBadge) {
    adminPendingBadge.textContent = `${pendingCount} čaká na schválenie`;
  }

  if (adminFilterGroup) {
    adminFilterGroup.querySelectorAll('[data-admin-filter]').forEach((button) => {
      const baseLabel = button.dataset.adminLabel || button.textContent || '';
      const filterKey = button.dataset.adminFilter;
      let countValue = adminEvents.length;

      if (filterKey === 'pending') countValue = pendingCount;
      if (filterKey === 'approved') countValue = approvedCount;
      if (filterKey === 'rejected') countValue = rejectedCount;

      button.textContent = `${baseLabel} (${countValue})`;
    });
  }

  document.title = pendingCount > 0
    ? `(${pendingCount}) Majstri zábavy | Admin akcie`
    : 'Majstri zábavy | Admin akcie';
}

function createAdminEventCard(row) {
  const posterUrl = window.MZSupabase.getPosterPublicUrl(row.poster_path);
  const moreInfoUrl = window.MZSupabase.normalizeExternalUrl(row.more_info_url);
  const safeTitle = window.MZSupabase.escapeHtml(row.title || 'Bez názvu');
  const safePartner = window.MZSupabase.escapeHtml(row.partner_name || 'Partner nie je uvedený');
  const safeSubmitter = window.MZSupabase.escapeHtml(row.submitter_name || 'Kontakt nie je uvedený');
  const safeEmail = window.MZSupabase.escapeHtml(row.submitter_email || '');
  const safePhone = window.MZSupabase.escapeHtml(row.submitter_phone || '');
  const safeVenue = window.MZSupabase.escapeHtml(row.venue_name || 'Miesto sa doplní');
  const safeRegion = window.MZSupabase.escapeHtml(row.region_label || row.city_label || 'Lokalita sa doplní');
  const safeCategory = window.MZSupabase.escapeHtml(row.category || 'Nie je zadané');
  const safeAudience = window.MZSupabase.escapeHtml(row.audience || 'Nie je zadané');
  const safeDescription = formatAdminDescription(row.description);
  const statusLabel = window.MZSupabase.formatStatusLabel(row.status);
  const eventDate = window.MZSupabase.formatEventDate(row.event_date);

  return `
    <article class="admin-event-card">
      <div class="admin-event-card__main">
        <div class="admin-event-card__top">
          <div>
            <div class="admin-event-card__eyebrow">${window.MZSupabase.escapeHtml(eventDate)} · ${window.MZSupabase.escapeHtml(row.city_label || 'Mesto')}</div>
            <h3 class="admin-event-card__title">${safeTitle}</h3>
          </div>
          <span class="admin-status-pill is-${row.status}">${statusLabel}</span>
        </div>

        <div class="admin-event-card__meta-grid">
          <div><strong>Partner:</strong> ${safePartner}</div>
          <div><strong>Kontakt:</strong> ${safeSubmitter}</div>
          <div><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></div>
          <div><strong>Telefón:</strong> ${safePhone || 'Nie je zadaný'}</div>
          <div><strong>Miesto:</strong> ${safeVenue}</div>
          <div><strong>Obec / okolie:</strong> ${safeRegion}</div>
          <div><strong>Typ akcie:</strong> ${safeCategory}</div>
          <div><strong>Pre koho:</strong> ${safeAudience}</div>
        </div>

        <div class="admin-event-card__description">
          <div class="admin-event-card__label">Popis akcie</div>
          <p>${safeDescription || 'Popis nebol vyplnený.'}</p>
        </div>

        ${moreInfoUrl ? `
          <div class="admin-event-card__links">
            <a href="${moreInfoUrl}" target="_blank" rel="noreferrer noopener">Otvoriť link na viac info</a>
          </div>
        ` : ''}
      </div>

      <aside class="admin-event-card__side">
        <div class="admin-event-card__poster-shell${posterUrl ? '' : ' is-empty'}">
          ${posterUrl
            ? `<img src="${posterUrl}" alt="${safeTitle}" class="admin-event-card__poster" loading="lazy">`
            : '<div class="admin-event-card__poster-empty">Plagát nebol priložený.</div>'}
        </div>

        <div class="admin-event-card__actions">
          <button type="button" class="btn-primary admin-action-btn" data-admin-approve="${row.id}">Schváliť</button>
          <button type="button" class="btn-ghost admin-action-btn admin-action-btn--danger" data-admin-reject="${row.id}">Zamietnuť</button>
        </div>
      </aside>
    </article>
  `;
}

function renderAdminEvents() {
  if (!adminEventsList || !adminEventsEmpty) return;

  const filteredEvents = adminEvents.filter((eventItem) => {
    if (adminFilter === 'all') return true;
    return eventItem.status === adminFilter;
  });

  if (adminFilterGroup) {
    adminFilterGroup.querySelectorAll('[data-admin-filter]').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.adminFilter === adminFilter);
    });
  }

  renderAdminSummary();

  if (!filteredEvents.length) {
    adminEventsList.innerHTML = '';
    adminEventsEmpty.hidden = false;
    adminEventsEmpty.textContent = adminFilter === 'pending'
      ? 'Momentálne tu nie sú žiadne akcie čakajúce na schválenie.'
      : 'Pre tento filter tu momentálne nie sú žiadne akcie.';
    return;
  }

  adminEventsEmpty.hidden = true;
  adminEventsList.innerHTML = filteredEvents.map((row) => createAdminEventCard(row)).join('');
}

async function loadAdminEvents() {
  if (!window.MZSupabase) return;

  const supabaseClient = window.MZSupabase.getClient();
  const { data, error } = await supabaseClient
    .from('events')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error('Akcie sa nepodarilo načítať zo Supabase.');
  }

  adminEvents = data || [];
  renderAdminEvents();
}

async function updateEventStatus(eventId, nextStatus) {
  if (!window.MZSupabase) return;

  const supabaseClient = window.MZSupabase.getClient();
  const {
    data: { user }
  } = await supabaseClient.auth.getUser();

  if (!user) {
    throw new Error('Admin session vypršala. Prihlás sa prosím znova.');
  }

  const payload = nextStatus === 'approved'
    ? {
        status: 'approved',
        approved_at: new Date().toISOString(),
        approved_by: user.id,
        rejected_at: null,
        rejected_by: null
      }
    : {
        status: 'rejected',
        rejected_at: new Date().toISOString(),
        rejected_by: user.id,
        approved_at: null,
        approved_by: null
      };

  const { error } = await supabaseClient
    .from('events')
    .update(payload)
    .eq('id', eventId);

  if (error) {
    throw new Error('Stav akcie sa nepodarilo uložiť.');
  }

  await loadAdminEvents();
}

async function handleAdminLogin(event) {
  event.preventDefault();
  if (!adminLoginForm || !window.MZSupabase) return;

  const formData = new FormData(adminLoginForm);
  const email = String(formData.get('email') || '').trim();
  const password = String(formData.get('password') || '');

  setAdminLoginStatus('', 'Prihlasujem ťa do admin časti...');

  const supabaseClient = window.MZSupabase.getClient();
  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });

  if (error) {
    setAdminLoginStatus('error', 'Prihlásenie sa nepodarilo. Skontroluj email a heslo.');
    return;
  }

  setAdminLoginStatus('success', 'Prihlásenie prebehlo úspešne.');
}

async function handleAdminLogout() {
  if (!window.MZSupabase) return;

  const supabaseClient = window.MZSupabase.getClient();
  await supabaseClient.auth.signOut();
}

function startAdminAutoRefresh() {
  if (adminAutoRefreshTimer) return;

  adminAutoRefreshTimer = window.setInterval(async () => {
    if (!adminSession?.user || document.hidden) return;
    await loadAdminEvents();
  }, 30000);
}

function stopAdminAutoRefresh() {
  if (!adminAutoRefreshTimer) return;

  window.clearInterval(adminAutoRefreshTimer);
  adminAutoRefreshTimer = null;
}

async function syncAdminSession(session) {
  adminSession = session;

  if (!session?.user) {
    stopAdminAutoRefresh();
    showAdminLogin();
    return;
  }

  showAdminDashboard(session.user.email);
  startAdminAutoRefresh();
  await loadAdminEvents();
}

function bindAdminEvents() {
  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', handleAdminLogin);
  }

  if (adminLogoutButton) {
    adminLogoutButton.addEventListener('click', handleAdminLogout);
  }

  if (adminRefreshButton) {
    adminRefreshButton.addEventListener('click', async () => {
      await loadAdminEvents();
    });
  }

  if (adminFilterGroup) {
    adminFilterGroup.addEventListener('click', (event) => {
      const trigger = event.target.closest('[data-admin-filter]');
      if (!trigger) return;

      adminFilter = trigger.dataset.adminFilter || 'pending';
      renderAdminEvents();
    });
  }

  if (adminEventsList) {
    adminEventsList.addEventListener('click', async (event) => {
      const approveButton = event.target.closest('[data-admin-approve]');
      const rejectButton = event.target.closest('[data-admin-reject]');

      try {
        if (approveButton) {
          await updateEventStatus(approveButton.dataset.adminApprove, 'approved');
        }

        if (rejectButton) {
          await updateEventStatus(rejectButton.dataset.adminReject, 'rejected');
        }
      } catch (error) {
        setAdminLoginStatus('error', error.message || 'Zmena stavu zlyhala.');
      }
    });
  }

  window.addEventListener('focus', async () => {
    if (!adminSession?.user) return;
    await loadAdminEvents();
  });
}

async function initAdminEventsPage() {
  if (!window.MZSupabase) return;

  bindAdminEvents();
  setAdminLoginStatus('', 'Prihlás sa ako admin a potom schvaľuj alebo zamietaj nové akcie.');

  const supabaseClient = window.MZSupabase.getClient();
  const {
    data: { session }
  } = await supabaseClient.auth.getSession();

  supabaseClient.auth.onAuthStateChange(async (_eventName, nextSession) => {
    await syncAdminSession(nextSession);
  });

  await syncAdminSession(session);
}

initAdminEventsPage().catch((error) => {
  setAdminLoginStatus('error', error.message || 'Admin časť sa nepodarilo spustiť.');
});
