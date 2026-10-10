-- Apply in the Supabase SQL Editor before setting production credentials.
-- Public clients have no access; only the server-side service role uses these tables.
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null default '',
  phone text,
  organization text,
  service_interest text not null,
  message text,
  source text,
  created_at timestamptz not null default now()
);

create table if not exists public.learners (
  id uuid primary key default gen_random_uuid(),
  auth_user_id text not null unique,
  full_name text not null,
  email text not null,
  phone text,
  organization text,
  role_title text,
  created_at timestamptz not null default now()
);

create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  learner_id uuid references public.learners(id) on delete set null,
  full_name text not null,
  email text not null default '',
  phone text,
  organization text,
  course_id text not null,
  cohort_id text,
  preferred_format text not null default 'online',
  registration_status text not null default 'pending',
  payment_status text not null default 'pending',
  transaction_reference text,
  created_at timestamptz not null default now()
);

create table if not exists public.form_submissions (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('lead', 'registration')),
  payload jsonb not null,
  status text not null default 'pending' check (status in ('pending', 'processing', 'sent')),
  attempts integer not null default 0,
  next_attempt_at timestamptz not null default now(),
  claimed_at timestamptz,
  sent_at timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists form_submissions_retry_idx
  on public.form_submissions (status, next_attempt_at, created_at);

alter table public.leads enable row level security;
alter table public.learners enable row level security;
alter table public.registrations enable row level security;
alter table public.form_submissions enable row level security;

create or replace function public.claim_form_submission(p_id uuid default null)
returns setof public.form_submissions
language sql security definer set search_path = '' as $$
  update public.form_submissions
  set status = 'processing', claimed_at = now(), attempts = attempts + 1
  where id in (
    select id from public.form_submissions
    where (p_id is null or id = p_id)
      and next_attempt_at <= now()
      and (status = 'pending' or (status = 'processing' and claimed_at < now() - interval '10 minutes'))
    order by created_at
    for update skip locked
    limit 1
  )
  returning *;
$$;

create or replace function public.complete_form_submission(p_id uuid, p_success boolean)
returns void
language sql security definer set search_path = '' as $$
  update public.form_submissions
  set status = case when p_success then 'sent' else 'pending' end,
      sent_at = case when p_success then now() else null end,
      next_attempt_at = case when p_success then now()
        else now() + make_interval(mins => least(60, 5 * attempts)) end
  where id = p_id and status = 'processing';
$$;

revoke all on public.leads, public.learners, public.registrations, public.form_submissions from anon, authenticated;
grant select, insert, update, delete on public.leads, public.learners, public.registrations, public.form_submissions to service_role;
revoke all on function public.claim_form_submission(uuid) from public, anon, authenticated;
revoke all on function public.complete_form_submission(uuid, boolean) from public, anon, authenticated;
grant execute on function public.claim_form_submission(uuid) to service_role;
grant execute on function public.complete_form_submission(uuid, boolean) to service_role;
