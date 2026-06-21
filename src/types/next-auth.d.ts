import "next-auth";

// Expose the provider user id on the session (set in the jwt/session callbacks).
declare module "next-auth" {
  interface Session {
    user?: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
