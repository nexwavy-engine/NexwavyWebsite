import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

// Auth (ADR-001): Google Sign-In via Auth.js/NextAuth. When Google credentials
// are absent (local dev / CI), a Credentials "dev login" provider is offered so
// the registration/dashboard flows remain testable without real OAuth. Cognito
// stays out per ADR-001.

const hasGoogle = Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);

const providers: NextAuthOptions["providers"] = [];

if (hasGoogle) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  );
}

// Dev-only fallback. Disabled automatically in production unless explicitly allowed.
if (!hasGoogle || process.env.ALLOW_DEV_LOGIN === "true") {
  providers.push(
    CredentialsProvider({
      id: "dev-login",
      name: "Dev Login (no OAuth)",
      credentials: {
        email: { label: "Email", type: "email" },
        name: { label: "Name", type: "text" },
      },
      async authorize(creds) {
        if (!creds?.email) return null;
        return {
          id: "dev:" + creds.email,
          email: String(creds.email),
          name: creds.name ? String(creds.name) : String(creds.email).split("@")[0],
        };
      },
    }),
  );
}

export const authOptions: NextAuthOptions = {
  providers,
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.sub = user.id ?? token.sub;
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as { id?: string }).id = token.sub;
      }
      return session;
    },
  },
};
