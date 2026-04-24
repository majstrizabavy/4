# Nová akcia na schválenie - email notifikácia

Toto je pripravený základ pre email adminovi, keď partner odošle novú akciu so stavom `pending`.

## Ako to funguje

1. Partner odošle akciu cez `pridat-akciu.html`.
2. Riadok sa uloží do `public.events` so stavom `pending`.
3. Database webhook po `INSERT` zavolá Edge Function `notify-new-event`.
4. Edge Function pošle email adminovi cez Resend.

## Čo treba nastaviť v Supabase

### 1. Edge Function

V Supabase vytvor alebo deployni Edge Function:

- názov: `notify-new-event`
- kód: `supabase/functions/notify-new-event/index.ts`

### 2. Function Secrets

V Supabase nastav secrets:

- `RESEND_API_KEY`
- `ADMIN_NOTIFY_EMAIL`
- `EMAIL_FROM`
- `WEBHOOK_SECRET`

Príklad:

- `ADMIN_NOTIFY_EMAIL = tvoj-admin@email.sk`
- `EMAIL_FROM = Majstri zábavy <noreply@tvoja-domena.sk>`
- `WEBHOOK_SECRET = dlhý_náhodný_tajný_reťazec`

### 3. Webhook trigger

V SQL Editore spusti:

- `supabase/sql/notify-new-event-webhook.sql`

Pred spustením vymeň:

- `REPLACE_WITH_RANDOM_SECRET`

za tú istú hodnotu, akú máš v `WEBHOOK_SECRET`.

## Poznámka

Na odosielanie emailov potrebuješ aktívny Resend účet a overeného odosielateľa/doménu.
