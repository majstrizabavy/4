const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY') ?? ''
const ADMIN_NOTIFY_EMAIL = Deno.env.get('ADMIN_NOTIFY_EMAIL') ?? ''
const EMAIL_FROM = Deno.env.get('EMAIL_FROM') ?? ''
const WEBHOOK_SECRET = Deno.env.get('WEBHOOK_SECRET') ?? ''

type EventRecord = {
  id: string
  title: string | null
  status: string | null
  event_date: string | null
  city_label: string | null
  venue_name: string | null
  submitter_name: string | null
  submitter_email: string | null
  partner_name: string | null
}

type WebhookPayload = {
  type?: 'INSERT' | 'UPDATE' | 'DELETE'
  table?: string
  schema?: string
  record?: EventRecord | null
  old_record?: EventRecord | null
}

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function formatEventDate(value: string | null) {
  if (!value) return 'Dátum nebol vyplnený'

  return new Intl.DateTimeFormat('sk-SK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(`${value}T12:00:00`))
}

function buildEmailHtml(record: EventRecord) {
  const title = record.title || 'Bez názvu'
  const eventDate = formatEventDate(record.event_date)
  const location = [record.venue_name, record.city_label].filter(Boolean).join(', ') || 'Lokalita nebola vyplnená'
  const partner = record.partner_name || 'Partner nebol vyplnený'
  const submitter = record.submitter_name || 'Kontakt nebol vyplnený'
  const submitterEmail = record.submitter_email || 'Email nebol vyplnený'

  return `
    <div style="font-family:Arial,sans-serif;padding:24px;color:#111;">
      <h2 style="margin:0 0 16px;">Prišla nová akcia na schválenie</h2>
      <p style="margin:0 0 18px;">Do kalendára Majstrov zábavy bola odoslaná nová akcia so stavom <strong>pending</strong>.</p>
      <table style="border-collapse:collapse;width:100%;max-width:620px;">
        <tr><td style="padding:8px 0;font-weight:bold;">Názov</td><td style="padding:8px 0;">${title}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;">Dátum</td><td style="padding:8px 0;">${eventDate}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;">Miesto</td><td style="padding:8px 0;">${location}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;">Partner</td><td style="padding:8px 0;">${partner}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;">Kontakt</td><td style="padding:8px 0;">${submitter}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;">Email</td><td style="padding:8px 0;">${submitterEmail}</td></tr>
      </table>
      <p style="margin:20px 0 0;">Skontroluj ju v admin časti webu.</p>
    </div>
  `
}

Deno.serve(async (request) => {
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405)
  }

  if (!RESEND_API_KEY || !ADMIN_NOTIFY_EMAIL || !EMAIL_FROM || !WEBHOOK_SECRET) {
    return jsonResponse({ error: 'Missing function secrets' }, 500)
  }

  const incomingSecret = request.headers.get('x-webhook-secret') ?? ''
  if (incomingSecret !== WEBHOOK_SECRET) {
    return jsonResponse({ error: 'Unauthorized' }, 401)
  }

  let payload: WebhookPayload

  try {
    payload = await request.json()
  } catch (_error) {
    return jsonResponse({ error: 'Invalid JSON payload' }, 400)
  }

  const record = payload.record

  if (payload.type !== 'INSERT' || !record || record.status !== 'pending') {
    return jsonResponse({ ok: true, skipped: true })
  }

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`
    },
    body: JSON.stringify({
      from: EMAIL_FROM,
      to: [ADMIN_NOTIFY_EMAIL],
      subject: `Nová akcia na schválenie: ${record.title || 'Bez názvu'}`,
      html: buildEmailHtml(record)
    })
  })

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text()
    return jsonResponse({ error: 'Email delivery failed', details: errorText }, 502)
  }

  return jsonResponse({ ok: true })
})
