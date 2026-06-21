# Nexwavy Solutions — Website MVP

The marketing site, business lead capture, AI-training registration, Google
sign-in, learner dashboard, and admin dashboard for **Nexwavy Solutions Ltd**.

Built per **ADR-001**: Next.js + Tailwind on **Vercel**, **PostgreSQL** via
Supabase/Neon, **Resend** for email, and a hosted **Paystack/Flutterwave
payment link** for Phase 1. Every integration sits behind a thin adapter and is
chosen by environment variables — so with no keys set, the app runs entirely on
in-memory mocks for local development, and migrating to AWS later touches only
the adapter files.

## Quick start

```bash
npm install
cp .env.example .env.local   # optional — works with no keys
npm run dev                  # http://localhost:3000
```

With **no environment variables**, the app uses an in-memory database, logs
"sent" emails to your terminal, offers a **dev login** (any email) instead of
Google, and serves a placeholder payment link. This is the fastest way to click
through every flow.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` / `npm start` | Production build / serve |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | Next.js lint |
| `npm test` | Unit tests (Vitest) |
| `npm run test:e2e` | Playwright end-to-end (optional) |

## What's included

- **Marketing pages**: Home, Services, AI Training, Sample Solutions, About,
  Contact, plus Privacy and Terms. All copy lives in one editable file:
  `src/lib/content/site.ts` (and the course catalog in
  `src/lib/data/catalog.ts`). Copy is **placeholder** — swap in real bios,
  contact details, prices, and case studies.
- **Lead capture**: `/contact` → `POST /api/leads` → saved + confirmation email.
- **AI-training registration**: `/register` → `POST /api/registrations` →
  saved + confirmation email containing the payment link.
- **Google Sign-In** (`/login`) and a **learner dashboard** (`/dashboard`)
  showing the visitor's registrations and payment status.
- **Admin dashboard** (`/admin`): allowlist-gated, with search/status/date
  filters, inline status updates, and **CSV export**.

## Going live — fill these in

Open `.env.local` and add what you have. You can enable integrations one at a
time; each one independently switches off its mock.

1. **Auth** — `NEXTAUTH_SECRET` (`openssl rand -base64 32`), `NEXTAUTH_URL`,
   and the Google OAuth `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`. Set the
   Google redirect URI to `<NEXTAUTH_URL>/api/auth/callback/google`.
2. **Admin** — `ADMIN_EMAILS` (comma/space separated). Only these emails reach
   `/admin`; it's enforced server-side, never from the client.
3. **Database** — create a Supabase (or Neon) Postgres project, run
   `db/schema.sql` in its SQL editor, then set `SUPABASE_URL` and
   `SUPABASE_SERVICE_ROLE_KEY`.
4. **Email** — `RESEND_API_KEY` and `EMAIL_FROM` (verify your sending domain in
   Resend).
5. **Payments** — paste your hosted Paystack/Flutterwave link(s) into
   `PAYMENT_LINK_DEFAULT` (and/or the per-course `PAYMENT_LINK_*` variables).

See `.env.example` for the full annotated list.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, **New Project → Import** the repo (framework auto-detected as
   Next.js).
3. Add the environment variables from `.env.example` in **Project Settings →
   Environment Variables**. Set `NEXTAUTH_URL` to your production domain.
4. Deploy. Vercel auto-deploys on every push to the main branch.
5. Map your custom domain in **Settings → Domains**.

> Keep all hosting/DB/email/payment accounts under the Nexwavy company email and
> a shared password manager — admin credentials should not sit with a single
> person or contractor (see PRD Section 9 / ADR-001).

## Architecture (where to change things)

```
src/
  app/                     # routes (App Router)
    api/                   # leads, registrations, auth, admin endpoints
    admin/ dashboard/ ...  # pages
  components/              # UI (Nav, Footer, forms, admin table, …)
  lib/
    content/site.ts        # ALL marketing copy (edit here)
    data/catalog.ts        # course tracks, cohorts, prices (₦)
    validation.ts          # zod input schemas (server-side)
    auth.ts                # NextAuth config (Google + dev login)
    admin.ts               # email allowlist
    adapters/
      db.ts                # Db interface + MemoryDb + SupabaseDb (+ getDb)
      email.ts             # EmailSender + MockEmailSender + ResendSender
      payments.ts          # hosted payment link resolution
db/schema.sql              # PostgreSQL DDL for Supabase/Neon
```

The UI and route handlers only ever talk to the **interfaces** (`Db`,
`EmailSender`, `getPaymentLink`). Swapping Supabase → RDS, Resend → SES, or the
payment link → a full payment API in Phase 2 changes only the relevant adapter.

## Tests

Unit tests cover the business logic that matters most: input validation, the
admin allowlist, the registration filter, CSV serialization, the in-memory DB,
and payment-link resolution.

```bash
npm test
```

(Tests are written for Vitest and run on your machine after `npm install`.)
