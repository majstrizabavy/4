-- Povoli adminom mazat kalendarove akcie a ich plagaty.
-- Spusti v Supabase SQL Editore, ak tlacidlo "Vymazat" hlasi chybu opravneni.
-- Vyuziva public.is_admin() z client-orders.sql.

drop policy if exists "Admins can delete events" on public.events;
create policy "Admins can delete events"
on public.events
for delete
to authenticated
using (public.is_admin());

drop policy if exists "Admins can delete event posters" on storage.objects;
create policy "Admins can delete event posters"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'event-posters'
  and public.is_admin()
);
