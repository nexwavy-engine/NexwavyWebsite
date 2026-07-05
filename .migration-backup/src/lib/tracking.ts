export function trackEvent(name: string, data?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const va = (window as typeof window & { va?: { track?: (event: string, payload?: Record<string, unknown>) => void } }).va;
  va?.track?.(name, data);
}
