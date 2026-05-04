-- Program pre klienta v "Moja akcia".
-- Spusti v Supabase SQL Editore po client-orders.sql a client-requests.sql.
-- Tato migracia iba rozsiri client_orders, nemeni existujuci Resend webhook pre akcie do kalendara.

alter table public.client_orders
add column if not exists program_text text,
add column if not exists program_status text not null default 'draft',
add column if not exists program_sent_at timestamptz,
add column if not exists client_response_note text,
add column if not exists client_response_at timestamptz;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'client_orders_program_status_check'
  ) then
    alter table public.client_orders
    add constraint client_orders_program_status_check check (
      program_status in ('draft', 'sent', 'confirmed', 'change_requested', 'rejected')
    );
  end if;
end;
$$;

create index if not exists client_orders_program_status_idx
on public.client_orders(program_status);

create or replace function public.respond_to_client_program(
  p_order_id uuid,
  p_response text,
  p_note text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_order public.client_orders%rowtype;
begin
  if p_response not in ('confirmed', 'change_requested', 'rejected') then
    raise exception 'Neplatna reakcia klienta.';
  end if;

  select *
  into v_order
  from public.client_orders
  where id = p_order_id
  for update;

  if v_order.id is null then
    raise exception 'Objednavka neexistuje.';
  end if;

  if lower(v_order.client_email) <> lower(auth.jwt() ->> 'email')
     and v_order.user_id is distinct from auth.uid() then
    raise exception 'Nemas opravnenie reagovat na tuto objednavku.';
  end if;

  if v_order.program_text is null or trim(v_order.program_text) = '' then
    raise exception 'Objednavka este nema pripraveny program.';
  end if;

  if v_order.program_status not in ('sent', 'change_requested') then
    raise exception 'Na tento program teraz nie je mozne reagovat.';
  end if;

  update public.client_orders
  set
    program_status = p_response,
    client_response_note = nullif(trim(coalesce(p_note, '')), ''),
    client_response_at = now()
  where id = p_order_id;
end;
$$;

revoke execute on function public.respond_to_client_program(uuid, text, text) from public;
revoke execute on function public.respond_to_client_program(uuid, text, text) from anon;
grant execute on function public.respond_to_client_program(uuid, text, text) to authenticated;
