-- AprovaAI — pagamentos e liberação automática por curso
-- Execute UMA vez no Supabase > SQL Editor.

alter table public.courses add column if not exists price_cents integer not null default 0;

create table if not exists public.purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id bigint not null references public.courses(id) on delete restrict,
  amount_cents integer not null check (amount_cents >= 0),
  currency text not null default 'BRL',
  status text not null default 'pending' check (status in ('pending','paid','failed','cancelled','refunded')),
  provider text,
  provider_payment_id text unique,
  payment_method text,
  paid_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists purchases_user_idx on public.purchases(user_id, created_at desc);
create index if not exists purchases_course_idx on public.purchases(course_id, created_at desc);
create index if not exists purchases_status_idx on public.purchases(status, created_at desc);

alter table public.purchases enable row level security;
drop policy if exists purchases_admin_all on public.purchases;
create policy purchases_admin_all on public.purchases
for all to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists purchases_self_select on public.purchases;
create policy purchases_self_select on public.purchases
for select to authenticated
using (user_id = auth.uid() or public.is_admin());

drop policy if exists purchases_self_insert_pending on public.purchases;
create policy purchases_self_insert_pending on public.purchases
for insert to authenticated
with check (user_id = auth.uid() and status = 'pending');

-- Pagamento confirmado = libera SOMENTE o curso escolhido naquela compra.
create or replace function public.grant_course_on_paid()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if tg_op = 'INSERT' then
    if new.status = 'paid' then
      insert into public.user_courses (user_id, course_id, status, purchased_at)
      values (new.user_id, new.course_id, 'active', coalesce(new.paid_at, now()))
      on conflict (user_id, course_id)
      do update set status = 'active', purchased_at = coalesce(excluded.purchased_at, public.user_courses.purchased_at);
    end if;
  elsif tg_op = 'UPDATE' then
    if new.status = 'paid' and old.status is distinct from 'paid' then
      insert into public.user_courses (user_id, course_id, status, purchased_at)
      values (new.user_id, new.course_id, 'active', coalesce(new.paid_at, now()))
      on conflict (user_id, course_id)
      do update set status = 'active', purchased_at = coalesce(excluded.purchased_at, public.user_courses.purchased_at);
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists purchases_paid_grant_access on public.purchases;
create trigger purchases_paid_grant_access
after insert or update of status on public.purchases
for each row execute procedure public.grant_course_on_paid();

-- Reembolso/cancelamento = bloqueia somente o curso daquela compra.
create or replace function public.revoke_course_on_refund()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.status in ('refunded','cancelled') and old.status is distinct from new.status then
    update public.user_courses
    set status = 'blocked'
    where user_id = new.user_id and course_id = new.course_id;
  end if;
  return new;
end;
$$;

drop trigger if exists purchases_refund_revoke_access on public.purchases;
create trigger purchases_refund_revoke_access
after update of status on public.purchases
for each row execute procedure public.revoke_course_on_refund();
