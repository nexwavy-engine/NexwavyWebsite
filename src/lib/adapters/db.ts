import type {
  Lead,
  Learner,
  Registration,
  Course,
  Cohort,
} from "@/lib/types";
import { COURSES, COHORTS } from "@/lib/data/catalog";

// ---------------------------------------------------------------------------
// Database adapter (ADR-001): PostgreSQL via Supabase in production; an
// in-memory store for local dev/tests when no DATABASE/SUPABASE env is set.
// The app only ever talks to the `Db` interface, so swapping to RDS/Prisma
// later touches nothing in the UI or route handlers.
// ---------------------------------------------------------------------------

export interface RegistrationFilter {
  registrationStatus?: string;
  paymentStatus?: string;
  courseId?: string;
  cohortId?: string;
  search?: string; // matches name/email/organization
  from?: string; // ISO date inclusive
  to?: string; // ISO date inclusive
}

export interface Db {
  createLead(input: Omit<Lead, "id" | "createdAt">): Promise<Lead>;
  listLeads(): Promise<Lead[]>;

  upsertLearner(input: Omit<Learner, "id" | "createdAt">): Promise<Learner>;
  getLearnerByAuthId(authUserId: string): Promise<Learner | null>;

  createRegistration(
    input: Omit<Registration, "id" | "createdAt" | "registrationStatus" | "paymentStatus"> &
      Partial<Pick<Registration, "registrationStatus" | "paymentStatus">>,
  ): Promise<Registration>;
  listRegistrations(filter?: RegistrationFilter): Promise<Registration[]>;
  listRegistrationsForEmail(email: string): Promise<Registration[]>;
  updateRegistration(
    id: string,
    patch: Partial<Pick<Registration, "registrationStatus" | "paymentStatus" | "transactionReference" | "cohortId">>,
  ): Promise<Registration | null>;

  listCourses(): Promise<Course[]>;
  listCohorts(courseId?: string): Promise<Cohort[]>;
}

function uid(): string {
  // crypto.randomUUID exists in Node 18+, edge, and modern browsers.
  return (globalThis.crypto?.randomUUID?.() ??
    "id-" + Math.random().toString(36).slice(2) + Date.now().toString(36));
}

function withinRange(iso: string, from?: string, to?: string): boolean {
  const t = iso.slice(0, 10);
  if (from && t < from) return false;
  if (to && t > to) return false;
  return true;
}

export function applyRegistrationFilter(
  rows: Registration[],
  f: RegistrationFilter = {},
): Registration[] {
  const search = f.search?.trim().toLowerCase();
  return rows.filter((r) => {
    if (f.registrationStatus && r.registrationStatus !== f.registrationStatus) return false;
    if (f.paymentStatus && r.paymentStatus !== f.paymentStatus) return false;
    if (f.courseId && r.courseId !== f.courseId) return false;
    if (f.cohortId && r.cohortId !== f.cohortId) return false;
    if (!withinRange(r.createdAt, f.from, f.to)) return false;
    if (search) {
      const hay = `${r.fullName} ${r.email} ${r.organization ?? ""}`.toLowerCase();
      if (!hay.includes(search)) return false;
    }
    return true;
  });
}

// ----------------------------- In-memory impl ------------------------------

export class MemoryDb implements Db {
  private leads: Lead[] = [];
  private learners: Learner[] = [];
  private registrations: Registration[] = [];
  private courses: Course[] = [...COURSES];
  private cohorts: Cohort[] = [...COHORTS];

  async createLead(input: Omit<Lead, "id" | "createdAt">): Promise<Lead> {
    const lead: Lead = { ...input, id: uid(), createdAt: new Date().toISOString() };
    this.leads.unshift(lead);
    return lead;
  }
  async listLeads(): Promise<Lead[]> {
    return [...this.leads];
  }

  async upsertLearner(input: Omit<Learner, "id" | "createdAt">): Promise<Learner> {
    const existing = this.learners.find((l) => l.authUserId === input.authUserId);
    if (existing) {
      Object.assign(existing, input);
      return existing;
    }
    const learner: Learner = { ...input, id: uid(), createdAt: new Date().toISOString() };
    this.learners.push(learner);
    return learner;
  }
  async getLearnerByAuthId(authUserId: string): Promise<Learner | null> {
    return this.learners.find((l) => l.authUserId === authUserId) ?? null;
  }

  async createRegistration(input: any): Promise<Registration> {
    const reg: Registration = {
      registrationStatus: "pending",
      paymentStatus: "pending",
      ...input,
      id: uid(),
      createdAt: new Date().toISOString(),
    };
    this.registrations.unshift(reg);
    return reg;
  }
  async listRegistrations(filter?: RegistrationFilter): Promise<Registration[]> {
    return applyRegistrationFilter([...this.registrations], filter);
  }
  async listRegistrationsForEmail(email: string): Promise<Registration[]> {
    const e = email.toLowerCase();
    return this.registrations.filter((r) => r.email.toLowerCase() === e);
  }
  async updateRegistration(id: string, patch: any): Promise<Registration | null> {
    const reg = this.registrations.find((r) => r.id === id);
    if (!reg) return null;
    Object.assign(reg, patch);
    return reg;
  }

  async listCourses(): Promise<Course[]> {
    return this.courses.filter((c) => c.isActive);
  }
  async listCohorts(courseId?: string): Promise<Cohort[]> {
    return this.cohorts.filter((c) => !courseId || c.courseId === courseId);
  }
}

// ----------------------------- Supabase impl -------------------------------
// Lazily imported so the in-memory path has zero runtime dependency on the
// supabase client (keeps tests light and the bundle clean).

class SupabaseDb implements Db {
  private clientPromise: Promise<any> | null = null;
  private url: string;
  private key: string;
  constructor(url: string, key: string) {
    this.url = url;
    this.key = key;
  }

  private async client() {
    if (!this.clientPromise) {
      this.clientPromise = import("@supabase/supabase-js").then(({ createClient }) =>
        createClient(this.url, this.key, { auth: { persistSession: false } }),
      );
    }
    return this.clientPromise;
  }

  async createLead(input: Omit<Lead, "id" | "createdAt">): Promise<Lead> {
    const sb = await this.client();
    const { data, error } = await sb
      .from("leads")
      .insert({
        name: input.name,
        email: input.email,
        phone: input.phone,
        organization: input.organization,
        service_interest: input.serviceInterest,
        message: input.message,
        source: input.source,
      })
      .select()
      .single();
    if (error) throw error;
    return mapLead(data);
  }
  async listLeads(): Promise<Lead[]> {
    const sb = await this.client();
    const { data, error } = await sb.from("leads").select().order("created_at", { ascending: false });
    if (error) throw error;
    return (data ?? []).map(mapLead);
  }
  async upsertLearner(input: Omit<Learner, "id" | "createdAt">): Promise<Learner> {
    const sb = await this.client();
    const { data, error } = await sb
      .from("learners")
      .upsert(
        {
          auth_user_id: input.authUserId,
          full_name: input.fullName,
          email: input.email,
          phone: input.phone,
          organization: input.organization,
          role_title: input.roleTitle,
        },
        { onConflict: "auth_user_id" },
      )
      .select()
      .single();
    if (error) throw error;
    return mapLearner(data);
  }
  async getLearnerByAuthId(authUserId: string): Promise<Learner | null> {
    const sb = await this.client();
    const { data } = await sb.from("learners").select().eq("auth_user_id", authUserId).maybeSingle();
    return data ? mapLearner(data) : null;
  }
  async createRegistration(input: any): Promise<Registration> {
    const sb = await this.client();
    const { data, error } = await sb
      .from("registrations")
      .insert({
        learner_id: input.learnerId,
        full_name: input.fullName,
        email: input.email,
        phone: input.phone,
        organization: input.organization,
        course_id: input.courseId,
        cohort_id: input.cohortId,
        preferred_format: input.preferredFormat,
        registration_status: input.registrationStatus ?? "pending",
        payment_status: input.paymentStatus ?? "pending",
      })
      .select()
      .single();
    if (error) throw error;
    return mapRegistration(data);
  }
  async listRegistrations(filter?: RegistrationFilter): Promise<Registration[]> {
    const sb = await this.client();
    let q = sb.from("registrations").select().order("created_at", { ascending: false });
    if (filter?.registrationStatus) q = q.eq("registration_status", filter.registrationStatus);
    if (filter?.paymentStatus) q = q.eq("payment_status", filter.paymentStatus);
    if (filter?.courseId) q = q.eq("course_id", filter.courseId);
    if (filter?.cohortId) q = q.eq("cohort_id", filter.cohortId);
    const { data, error } = await q;
    if (error) throw error;
    // date range + search applied in-process to keep one code path authoritative
    return applyRegistrationFilter((data ?? []).map(mapRegistration), {
      search: filter?.search,
      from: filter?.from,
      to: filter?.to,
    });
  }
  async listRegistrationsForEmail(email: string): Promise<Registration[]> {
    const sb = await this.client();
    const { data, error } = await sb
      .from("registrations")
      .select()
      .ilike("email", email)
      .order("created_at", { ascending: false });
    if (error) throw error;
    return (data ?? []).map(mapRegistration);
  }
  async updateRegistration(id: string, patch: any): Promise<Registration | null> {
    const sb = await this.client();
    const row: any = {};
    if (patch.registrationStatus) row.registration_status = patch.registrationStatus;
    if (patch.paymentStatus) row.payment_status = patch.paymentStatus;
    if (patch.transactionReference !== undefined) row.transaction_reference = patch.transactionReference;
    if (patch.cohortId !== undefined) row.cohort_id = patch.cohortId;
    const { data, error } = await sb.from("registrations").update(row).eq("id", id).select().maybeSingle();
    if (error) throw error;
    return data ? mapRegistration(data) : null;
  }
  async listCourses(): Promise<Course[]> {
    return COURSES.filter((c) => c.isActive);
  }
  async listCohorts(courseId?: string): Promise<Cohort[]> {
    return COHORTS.filter((c) => !courseId || c.courseId === courseId);
  }
}

function mapLead(d: any): Lead {
  return {
    id: d.id,
    name: d.name,
    email: d.email,
    phone: d.phone ?? undefined,
    organization: d.organization ?? undefined,
    serviceInterest: d.service_interest,
    message: d.message ?? undefined,
    source: d.source ?? undefined,
    createdAt: d.created_at,
  };
}
function mapLearner(d: any): Learner {
  return {
    id: d.id,
    authUserId: d.auth_user_id,
    fullName: d.full_name,
    email: d.email,
    phone: d.phone ?? undefined,
    organization: d.organization ?? undefined,
    roleTitle: d.role_title ?? undefined,
    createdAt: d.created_at,
  };
}
function mapRegistration(d: any): Registration {
  return {
    id: d.id,
    learnerId: d.learner_id ?? null,
    fullName: d.full_name,
    email: d.email,
    phone: d.phone ?? undefined,
    organization: d.organization ?? undefined,
    courseId: d.course_id,
    cohortId: d.cohort_id ?? undefined,
    preferredFormat: d.preferred_format,
    registrationStatus: d.registration_status,
    paymentStatus: d.payment_status,
    transactionReference: d.transaction_reference ?? undefined,
    createdAt: d.created_at,
  };
}

// ------------------------------- Factory -----------------------------------

let singleton: Db | null = null;

export function getDb(env: NodeJS.ProcessEnv = process.env): Db {
  if (singleton) return singleton;
  const url = env.SUPABASE_URL;
  const key = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_ANON_KEY;
  singleton = url && key ? new SupabaseDb(url, key) : new MemoryDb();
  return singleton;
}

/** Test helper to reset the cached instance. */
export function __resetDb() {
  singleton = null;
}
