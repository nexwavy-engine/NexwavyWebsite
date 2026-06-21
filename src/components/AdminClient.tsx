"use client";

import { useEffect, useMemo, useState } from "react";
import type { Course, Registration } from "@/lib/types";
import StatusBadge from "@/components/StatusBadge";

const REG_STATUSES = ["pending", "confirmed", "waitlisted", "cancelled"];
const PAY_STATUSES = ["pending", "paid", "refunded", "failed"];

interface Filters {
  registrationStatus: string;
  paymentStatus: string;
  courseId: string;
  search: string;
  from: string;
  to: string;
}

const EMPTY: Filters = {
  registrationStatus: "",
  paymentStatus: "",
  courseId: "",
  search: "",
  from: "",
  to: "",
};

export default function AdminClient({
  initialRows,
  courses,
}: {
  initialRows: Registration[];
  courses: Course[];
}) {
  const [rows, setRows] = useState<Registration[]>(initialRows);
  const [filters, setFilters] = useState<Filters>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const courseTitle = useMemo(() => {
    const map: Record<string, string> = {};
    for (const c of courses) map[c.id] = c.title;
    return (id: string) => map[id] ?? id;
  }, [courses]);

  const query = useMemo(() => {
    const p = new URLSearchParams();
    for (const [k, v] of Object.entries(filters)) if (v) p.set(k, v);
    return p.toString();
  }, [filters]);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/registrations?${query}`, { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to load");
      const data = await res.json();
      setRows(data.rows);
    } catch {
      setError("Could not load registrations.");
    } finally {
      setLoading(false);
    }
  }

  // Reload whenever filters change (debounced lightly for the search box).
  useEffect(() => {
    const t = setTimeout(load, 250);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  async function patch(id: string, body: Record<string, string>) {
    // optimistic
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...(body as Partial<Registration>) } : r)));
    try {
      const res = await fetch(`/api/admin/registrations/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setRows((prev) => prev.map((r) => (r.id === id ? data.row : r)));
    } catch {
      setError("Update failed — reloading.");
      load();
    }
  }

  function set<K extends keyof Filters>(key: K, value: string) {
    setFilters((f) => ({ ...f, [key]: value }));
  }

  return (
    <div className="grid gap-5">
      {/* Filter bar */}
      <div className="bento grid gap-4 p-5 md:grid-cols-3 lg:grid-cols-6">
        <input
          className="field-input lg:col-span-2"
          placeholder="Search name, email, org…"
          value={filters.search}
          onChange={(e) => set("search", e.target.value)}
        />
        <select className="field-input" value={filters.registrationStatus} onChange={(e) => set("registrationStatus", e.target.value)}>
          <option value="">All reg. status</option>
          {REG_STATUSES.map((s) => (
            <option key={s} value={s} className="capitalize">
              {s}
            </option>
          ))}
        </select>
        <select className="field-input" value={filters.paymentStatus} onChange={(e) => set("paymentStatus", e.target.value)}>
          <option value="">All payment</option>
          {PAY_STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <select className="field-input" value={filters.courseId} onChange={(e) => set("courseId", e.target.value)}>
          <option value="">All courses</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title}
            </option>
          ))}
        </select>
        <div className="flex gap-2">
          <input type="date" className="field-input" value={filters.from} onChange={(e) => set("from", e.target.value)} aria-label="From date" />
          <input type="date" className="field-input" value={filters.to} onChange={(e) => set("to", e.target.value)} aria-label="To date" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-ink/60">
          {loading ? "Loading…" : `${rows.length} registration${rows.length === 1 ? "" : "s"}`}
          {error && <span className="ml-3 text-red-600">{error}</span>}
        </p>
        <div className="flex gap-3">
          <button className="btn-ghost" onClick={() => setFilters(EMPTY)}>
            Clear filters
          </button>
          <a className="btn-primary" href={`/api/admin/export?${query}`}>
            Export CSV
          </a>
        </div>
      </div>

      {/* Table */}
      <div className="bento overflow-x-auto p-0">
        <table className="w-full min-w-[820px] text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-wide text-ink/50">
              <th className="px-5 py-3 font-medium">Registrant</th>
              <th className="px-5 py-3 font-medium">Course</th>
              <th className="px-5 py-3 font-medium">Format</th>
              <th className="px-5 py-3 font-medium">Registration</th>
              <th className="px-5 py-3 font-medium">Payment</th>
              <th className="px-5 py-3 font-medium">Created</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b border-slate-50 align-top">
                <td className="px-5 py-3">
                  <p className="font-medium text-ink">{r.fullName}</p>
                  <p className="text-xs text-ink/50">{r.email}</p>
                  {r.organization && <p className="text-xs text-ink/40">{r.organization}</p>}
                </td>
                <td className="px-5 py-3 text-ink/80">{courseTitle(r.courseId)}</td>
                <td className="px-5 py-3 capitalize text-ink/70">{r.preferredFormat}</td>
                <td className="px-5 py-3">
                  <div className="flex flex-col gap-2">
                    <StatusBadge value={r.registrationStatus} />
                    <select
                      className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs"
                      value={r.registrationStatus}
                      onChange={(e) => patch(r.id, { registrationStatus: e.target.value })}
                    >
                      {REG_STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </td>
                <td className="px-5 py-3">
                  <div className="flex flex-col gap-2">
                    <StatusBadge value={r.paymentStatus} />
                    <select
                      className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs"
                      value={r.paymentStatus}
                      onChange={(e) => patch(r.id, { paymentStatus: e.target.value })}
                    >
                      {PAY_STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </td>
                <td className="px-5 py-3 text-xs text-ink/50">
                  {new Date(r.createdAt).toLocaleDateString("en-NG")}
                </td>
              </tr>
            ))}
            {rows.length === 0 && !loading && (
              <tr>
                <td colSpan={6} className="px-5 py-10 text-center text-ink/50">
                  No registrations match these filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
