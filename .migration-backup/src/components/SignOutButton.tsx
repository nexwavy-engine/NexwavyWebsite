"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton({ className = "btn-ghost" }: { className?: string }) {
  return (
    <button className={className} onClick={() => signOut({ callbackUrl: "/" })}>
      Sign out
    </button>
  );
}
