import { createClient } from "@supabase/supabase-js";

export type SubmissionKind = "lead" | "registration";
export type SubmissionStatus = "pending" | "processing" | "sent";

export interface StoredSubmission {
  id: string;
  kind: SubmissionKind;
  payload: Record<string, unknown>;
  status: SubmissionStatus;
  attempts: number;
  created_at: string;
}

export function hasDurableStorage(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return Boolean(env.SUPABASE_URL && env.SUPABASE_SERVICE_ROLE_KEY);
}

function client(env: NodeJS.ProcessEnv = process.env) {
  if (!hasDurableStorage(env))
    throw new Error("Durable form storage is not configured");
  return createClient(env.SUPABASE_URL!, env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false },
  });
}

export async function saveSubmission(
  kind: SubmissionKind,
  payload: Record<string, unknown>,
  env: NodeJS.ProcessEnv = process.env,
): Promise<StoredSubmission> {
  const { data, error } = await client(env)
    .from("form_submissions")
    .insert({ kind, payload })
    .select("id, kind, payload, status, attempts, created_at")
    .single();
  if (error) throw error;
  return data as StoredSubmission;
}

export async function claimSubmission(
  id?: string,
  env: NodeJS.ProcessEnv = process.env,
): Promise<StoredSubmission | null> {
  const { data, error } = await client(env).rpc("claim_form_submission", {
    p_id: id ?? null,
  });
  if (error) throw error;
  return (data?.[0] as StoredSubmission | undefined) ?? null;
}

export async function finishSubmission(
  id: string,
  success: boolean,
  env: NodeJS.ProcessEnv = process.env,
): Promise<void> {
  const { error } = await client(env).rpc("complete_form_submission", {
    p_id: id,
    p_success: success,
  });
  if (error) throw error;
}
