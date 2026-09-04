-- ProvaNorte — pagamentos, preço, validade e liberação automática por curso
-- Execute UMA vez no Supabase > SQL Editor.

alter table public.courses
  add column if not exists price_cents integer not null default 0;

update public.courses set price_cents = 1990 where price_cents = 0;

alter table public.user_courses
  add column if not exists expires_at timestamptz;

create unique index if not exists user_courses_user_course_uidx
  on public.user_courses(user_id, course_id);

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
create policy purchases_admin_all on public.purchases for all to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists purchases_self_select on public.purchases;
create policy purchases_self_select on public.purchases for select to authenticated using (user_id = auth.uid() or public.is_admin());
drop policy if exists purchases_self_insert_pending on public.purchases;
create policy purchases_self_insert_pending on public.purchases for insert to authenticated with check (user_id = auth.uid() and status = 'pending');

create or replace function public.grant_course_on_paid()
returns trigger language plpgsql security definer set search_path = public as $$
declare v_start timestamptz; v_expiry timestamptz;
begin
  if new.status = 'paid' and (tg_op = 'INSERT' or old.status is distinct from 'paid') then
    v_start := coalesce(new.paid_at, now());
    v_expiry := v_start + interval '1 year';
    insert into public.user_courses (user_id, course_id, status, purchased_at, expires_at)
    values (new.user_id, new.course_id, 'active', v_start, v_expiry)
    on conflict (user_id, course_id) do update set status='active', purchased_at=excluded.purchased_at, expires_at=excluded.expires_at;
  end if;
  return new;
end;
$$;

drop trigger if exists purchases_paid_grant_access on public.purchases;
create trigger purchases_paid_grant_access after insert or update of status on public.purchases for each row execute procedure public.grant_course_on_paid();

create or replace function public.revoke_course_on_refund()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if new.status in ('refunded','cancelled') and old.status is distinct from new.status then
    update public.user_courses set status='blocked' where user_id=new.user_id and course_id=new.course_id;
  end if;
  return new;
end;
$$;

drop trigger if exists purchases_refund_revoke_access on public.purchases;
create trigger purchases_refund_revoke_access after update of status on public.purchases for each row execute procedure public.revoke_course_on_refund();

create or replace function public.has_course_access(p_course_id bigint)
returns boolean language sql stable security definer set search_path = '' as $$
  select public.is_admin()
    or exists (
      select 1 from public.user_courses uc
      where uc.user_id = auth.uid()
        and uc.course_id = p_course_id
        and uc.status = 'active'
        and (uc.expires_at is null or uc.expires_at > now())
    );
$$;

revoke execute on function public.has_course_access(bigint) from public, anon;
grant execute on function public.has_course_access(bigint) to authenticated;

update public.user_courses
set expires_at = coalesce(purchased_at, created_at, now()) + interval '1 year'
where status='active' and expires_at is null;
