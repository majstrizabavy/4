(function initMajstriSupabase(windowObject) {
  const PROJECT_URL = 'https://cuvcypjsphkcpherljrw.supabase.co';
  const ANON_KEY = 'sb_publishable_fYvO-uRr8v2aE0GUW79t_w_dWmhjYTz';
  const POSTER_BUCKET = 'event-posters';

  const EVENT_CITIES = [
    { key: 'bratislava', name: 'Bratislava a okolie' },
    { key: 'trnava', name: 'Trnava a okolie' },
    { key: 'trencin', name: 'Trenčín a okolie' },
    { key: 'nitra', name: 'Nitra a okolie' },
    { key: 'nove-zamky', name: 'Nové Zámky a okolie' },
    { key: 'zilina', name: 'Žilina a okolie' },
    { key: 'banska-bystrica', name: 'Banská Bystrica a okolie' },
    { key: 'presov', name: 'Prešov a okolie' },
    { key: 'kosice', name: 'Košice a okolie' }
  ];

  let clientInstance = null;

  function getClient() {
    if (clientInstance) return clientInstance;

    if (!windowObject.supabase || typeof windowObject.supabase.createClient !== 'function') {
      throw new Error('Supabase knižnica sa nenačítala.');
    }

    clientInstance = windowObject.supabase.createClient(PROJECT_URL, ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });

    return clientInstance;
  }

  function slugify(value) {
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .replace(/-{2,}/g, '-');
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function normalizeExternalUrl(value) {
    const rawValue = String(value || '').trim();
    if (!rawValue) return '';

    const candidate = /^https?:\/\//i.test(rawValue) ? rawValue : `https://${rawValue}`;

    try {
      const parsedUrl = new URL(candidate);
      return ['http:', 'https:'].includes(parsedUrl.protocol) ? parsedUrl.href : '';
    } catch (error) {
      return '';
    }
  }

  function formatEventDate(value) {
    if (!value) return '';

    const date = new Date(`${value}T12:00:00`);
    if (Number.isNaN(date.getTime())) return value;

    return new Intl.DateTimeFormat('sk-SK', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  }

  function getCityOptions() {
    return EVENT_CITIES.slice();
  }

  function getCityByKey(cityKey) {
    return EVENT_CITIES.find((city) => city.key === cityKey) || null;
  }

  function buildPosterPath(fileName, slug, eventDate) {
    const safeSlug = slugify(slug) || `event-${Date.now()}`;
    const safeDate = String(eventDate || '').replace(/[^0-9-]/g, '') || 'bez-datumu';
    const extensionMatch = String(fileName || '').toLowerCase().match(/\.([a-z0-9]+)$/i);
    const extension = extensionMatch ? extensionMatch[1] : 'jpg';

    return `submissions/${safeDate}/${safeSlug}-${Date.now()}.${extension}`;
  }

  function getPosterPublicUrl(path) {
    if (!path) return '';

    const {
      data: { publicUrl } = {}
    } = getClient().storage.from(POSTER_BUCKET).getPublicUrl(path);

    return publicUrl || '';
  }

  function formatEventWhere(row) {
    const parts = [row.venue_name, row.region_label || row.city_label].filter(Boolean);
    return parts.length ? parts.join(', ') : 'Miesto doplníme čoskoro';
  }

  function mapEventRowToPublicEvent(row) {
    return {
      id: row.id,
      month: row.event_date ? row.event_date.slice(5, 7) : '01',
      isoDate: row.event_date,
      cityKey: row.city_key,
      title: escapeHtml(row.title || 'Bez názvu'),
      when: escapeHtml(formatEventDate(row.event_date)),
      where: escapeHtml(formatEventWhere(row)),
      poster: getPosterPublicUrl(row.poster_path),
      moreInfoUrl: normalizeExternalUrl(row.more_info_url),
      description: escapeHtml(row.description || ''),
      audience: escapeHtml(row.audience || ''),
      category: escapeHtml(row.category || '')
    };
  }

  function formatStatusLabel(status) {
    if (status === 'approved') return 'Schválené';
    if (status === 'rejected') return 'Zamietnuté';
    return 'Čaká na schválenie';
  }

  windowObject.MZSupabase = {
    projectUrl: PROJECT_URL,
    anonKey: ANON_KEY,
    posterBucket: POSTER_BUCKET,
    getClient,
    slugify,
    escapeHtml,
    normalizeExternalUrl,
    formatEventDate,
    getCityOptions,
    getCityByKey,
    buildPosterPath,
    getPosterPublicUrl,
    mapEventRowToPublicEvent,
    formatStatusLabel
  };
})(window);
