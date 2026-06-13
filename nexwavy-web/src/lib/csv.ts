// Minimal, dependency-free CSV serializer used by the admin export (PRD: CSV export).
// Handles quoting, embedded commas/quotes/newlines per RFC 4180.

export interface CsvColumn<T> {
  header: string;
  value: (row: T) => unknown;
}

function escapeCell(raw: unknown): string {
  const s = raw === null || raw === undefined ? "" : String(raw);
  if (/[",\n\r]/.test(s)) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

export function toCsv<T>(rows: T[], columns: CsvColumn<T>[]): string {
  const head = columns.map((c) => escapeCell(c.header)).join(",");
  const body = rows
    .map((row) => columns.map((c) => escapeCell(c.value(row))).join(","))
    .join("\r\n");
  return body ? `${head}\r\n${body}` : head;
}
