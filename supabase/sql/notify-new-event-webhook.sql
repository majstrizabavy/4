-- Replace the placeholder values before running this in Supabase SQL Editor.
-- 1. Put your real project ref into the function URL if needed.
-- 2. Use the same WEBHOOK_SECRET value here and in your Edge Function secrets.

drop trigger if exists notify_new_event_webhook on public.events;

create trigger notify_new_event_webhook
after insert on public.events
for each row
execute function supabase_functions.http_request(
  'https://cuvcypjsphkcpherljrw.supabase.co/functions/v1/notify-new-event',
  'POST',
  '{"Content-Type":"application/json","x-webhook-secret":"REPLACE_WITH_RANDOM_SECRET"}',
  '{}',
  '5000'
);
