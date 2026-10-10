# Durable form delivery

Contact enquiries and training registrations are saved to Supabase before any email is attempted. A failed team notification stays in `form_submissions` as `pending`; a daily Vercel cron retries pending work. Resend idempotency keys reduce duplicate emails during retries. The legacy `leads` and `registrations` tables remain admin-facing projections; `form_submissions` is the recovery record.

## Production setup

1. Create a Supabase project owned by Nexwavy and run `supabase/migrations/20261010_form_storage.sql` in its SQL Editor.
2. Add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to the Vercel project's **Production** environment. Keep the service-role key server-side and mark it sensitive. Do not use the anon/publishable key for this adapter.
3. Add a random `CRON_SECRET` to Vercel Production. Vercel sends it as `Authorization: Bearer <secret>` when invoking `/api/cron/form-delivery`.
4. Redeploy Production after adding the variables. Do not deploy the fail-closed form routes before the database and schema are ready.
5. Submit one labeled contact enquiry and one labeled training registration. Check that each has a row in `form_submissions` with `status = 'sent'`, and confirm the team inboxes received the notification.

Supabase Free projects may pause after inactivity. For a production site that must accept occasional enquiries reliably, use an always-available plan or choose a provider without that pause behavior.

The job runs daily at 07:00 UTC (08:00 Lagos), which fits Vercel Hobby's daily cron limit. During an outage, a manager can invoke the same authenticated endpoint manually after fixing the cause. This is not a substitute for an uptime monitor: review pending rows regularly, and consider a more frequent worker if notification latency becomes critical.

## Checks

```sql
select id, kind, status, attempts, created_at, sent_at
from public.form_submissions
order by created_at desc
limit 50;

select id, kind, status, attempts, created_at
from public.form_submissions
where status <> 'sent'
order by created_at;
```

The migration enables RLS and does not grant public access to stored personal information. Production admin login requires a real Google OAuth provider; the development credentials login is disabled in production.
