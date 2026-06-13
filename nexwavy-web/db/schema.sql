-- Nexwavy Website MVP — PostgreSQL schema (ADR-001)
-- Target: Supabase (preferred) or Neon. Run this once in the SQL editor.
-- Column names are snake_case; the app's SupabaseDb adapter maps them to
-- camelCase domain types (see src/lib/adapters/db.ts).

create extension if not exists "pgcrypto";

-- Business leads from the contact form ---------------------------------------
create table if not exists leads (
  id               uuid primary key default gen_random_uuid(),
  name             text not null,
  email            text not null,
  phone            text,
  organization     text,
  service_interest text not null,
  message          text,
  source           text,
  created_at       timestamptz not null default now()
);
create index if not exists leads_created_at_idx on leads (created_at desc);

-- Learners (created on first sign-in; keyed by the auth provider's user id) ---
create table if not exists learners (
  id            uuid primary key default gen_random_uuid(),
  auth_user_id  text not null unique,
  full_name     text not null,
  email         text not null,
  phone         text,
  organization  text,
  role_title    text,
  created_at    timestamptz not null default now()
);
create index if not exists learners_email_idx on learners (lower(email));

-- AI training registrations --------------------------------------------------
create table if not exists registrations (
  id                    uuid primary key default gen_random_uuid(),
  learner_id            uuid references learners (id) on delete set null,
  full_name             text not null,
  email                 text not null,
  phone                 text,
  organization          text,
  course_id             text not null,
  cohort_id             text,
  preferred_format      text not null default 'online',
  registration_status   text not null default 'pending'
                          check (registration_status in ('pending','confirmed','waitlisted','cancelled')),
  payment_status        text not null default 'pending'
                          check (payment_status in ('pending','paid','refunded','failed')),
  transaction_reference text,
  created_at            timestamptz not null default now()
);
create index if not exists registrations_created_at_idx on registrations (created_at desc);
create index if not exists registrations_email_idx on registrations (lower(email));
create index if not exists registrations_course_idx on registrations (course_id);

-- Notes
-- * Courses and cohorts are seeded in code (src/lib/data/catalog.ts) for the
--   MVP, so there are no course/cohort tables yet. Add them in Phase 2 if the
--   catalog needs to be editable from the admin UI.
-- * The app uses the Supabase SERVICE ROLE key on the server only. If you would
--   rather use the anon key with Row Level Security, add RLS policies here and
--   set SUPABASE_ANON_KEY instead. The MVP keeps all DB access server-side.
