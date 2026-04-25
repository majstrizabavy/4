-- Klientska zona "Moja akcia" - MVP.
-- Spusti v Supabase SQL Editore.
-- Pred pouzitim vloz admin email do public.admin_users.

create table if not exists public.admin_users (
  email text primary key,
  created_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;

drop policy if exists "Admins can read admin users" on public.admin_users;
create policy "Admins can read admin users"
on public.admin_users
for select
to authenticated
using (lower(email) = lower(auth.jwt() ->> 'email'));

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_users
    where lower(email) = lower(auth.jwt() ->> 'email')
  );
$$;

create table if not exists public.client_orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  client_email text not null,
  title text not null,
  event_date date,
  location text,
  status text not null default 'draft',
  price numeric,
  services text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint client_orders_status_check check (
    status in ('draft', 'sent', 'confirmed', 'in_progress', 'done', 'cancelled')
  )
);

create index if not exists client_orders_user_id_idx on public.client_orders(user_id);
create index if not exists client_orders_client_email_idx on public.client_orders(lower(client_email));
create index if not exists client_orders_event_date_idx on public.client_orders(event_date);

create or replace function public.set_client_orders_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_client_orders_updated_at on public.client_orders;
create trigger set_client_orders_updated_at
before update on public.client_orders
for each row
execute function public.set_client_orders_updated_at();

alter table public.client_orders enable row level security;

drop policy if exists "Clients can read own orders" on public.client_orders;
create policy "Clients can read own orders"
on public.client_orders
for select
to authenticated
using (
  user_id = auth.uid()
  or public.is_admin()
);

drop policy if exists "Admins can create client orders" on public.client_orders;
create policy "Admins can create client orders"
on public.client_orders
for insert
to authenticated
with check (public.is_admin());

drop policy if exists "Admins can update client orders" on public.client_orders;
create policy "Admins can update client orders"
on public.client_orders
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- Priklad:
-- insert into public.admin_users(email) values ('tvoj-admin-email@example.com')
-- on conflict (email) do nothing;
