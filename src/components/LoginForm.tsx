"use client";

import { useEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

type Providers = Record<string, { id: string; name: string }> | null;

export default function LoginForm() {
  const [providers, setProviders] = useState<Providers>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const search = useSearchParams();
  const callbackUrl = search.get("callbackUrl") || "/dashboard";

  useEffect(() => {
    getProviders().then((p) => setProviders(p as Providers));
  }, []);

  const hasGoogle = Boolean(providers?.google);
  const hasDev = Boolean(providers?.["dev-login"]);

  return (
    <div className="bento grid gap-5 p-8">
      {hasGoogle && (
        <button onClick={() => signIn("google", { callbackUrl })} className="btn-primary w-full">
          Continue with Google
        </button>
      )}

      {hasGoogle && hasDev && (
        <div className="flex items-center gap-3 text-xs text-slate/70">
          <span className="h-px flex-1 bg-white/10" />
          or
          <span className="h-px flex-1 bg-white/10" />
        </div>
      )}

      {hasDev && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signIn("dev-login", { email, name, callbackUrl });
          }}
          className="grid gap-4"
        >
          <p className="text-sm text-slate">
            Developer sign-in (no OAuth keys configured). Use any email to preview the dashboard.
          </p>
          <div>
            <label className="field-label" htmlFor="dev-email">
              Email
            </label>
            <input
              id="dev-email"
              type="email"
              className="field-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="field-label" htmlFor="dev-name">
              Name <span className="font-normal text-slate/70">(optional)</span>
            </label>
            <input
              id="dev-name"
              className="field-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-ghost w-full">
            Continue
          </button>
        </form>
      )}

      {!hasGoogle && !hasDev && (
        <p className="text-sm text-slate">No sign-in providers are configured.</p>
      )}
    </div>
  );
}
