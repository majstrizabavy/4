-- Povoli adminom mazat navrhy klientom z tabulky client_orders.
-- Spusti v Supabase SQL Editore, ak tlacidlo "Vymazat navrh" hlasi chybu opravneni.
-- Vyuziva public.is_admin() z client-orders.sql.

drop policy if exists "Admins can delete client orders" on public.client_orders;
create policy "Admins can delete client orders"
on public.client_orders
for delete
to authenticated
using (public.is_admin());
