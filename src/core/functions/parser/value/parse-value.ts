/**
 * Default parsing logic for query parameter values.
 *
 * Converts a raw string into:
 * - null (empty or undefined)
 * - boolean (true/false)
 * - number (integer)
 * - string (fallback)
 */
export function parseValue(val: string | undefined): string | number | boolean | null {
  if (val == null || val === "") return null
  if (val === "true") return true
  if (val === "false") return false
  if (/^-?\d+$/.test(val)) return Number(val)
  return val
}
