/**
 * Configuration options for parsing query parameters
 */
export interface QueryOptions {
  /**
   * List of query parameter keys to explicitly include
   */
  include?: string[]

  /**
   * List of query parameter keys to ignore
   */
  exclude?: string[]

  /**
   * Custom parsing function for values
   * @default auto‑convert to boolean/number/null/string
   */
  onParsing?: (val: string | undefined) => unknown
}

/**
 * Parse query parameters from a given URL into structured metadata.
 *
 * **Parameters**
 * - `url` — The URL object to parse
 * - `options` — Optional configuration
 *    - `include` — List of query parameter keys to explicitly include
 *    - `exclude` — List of query parameter keys to ignore
 *    - `onParsing` — Custom parsing function for values (default: auto‑convert to boolean/number/null/string)
 *
 * **Returns**
 * - `query` — Parsed query parameters as an object
 * - `queryRaw` — Raw query string including the leading "?" if present
 *
 * **Usage**
 * ```ts
 * // Example with include
 * const { query } = parseQuery(new URL("https://example.com?foo=1&bar=true"), {
 *   include: ["foo"]
 * })
 * console.log(query) // { foo: 1 }
 *
 * // Example with exclude
 * const { query } = parseQuery(new URL("https://example.com?foo=1&bar=true"), {
 *   exclude: ["bar"]
 * })
 * console.log(query) // { foo: 1 }
 * ```
 */
export function parseQuery(
  url: URL,
  options?: QueryOptions
): {
  query: Record<string, unknown>
  queryRaw: string
} {
  // Convert search parameters to string
  const parameters = url.searchParams.toString()
  const query: Record<string, unknown> = {}

  // Default parsing logic: convert to boolean, number, or null if possible
  const defaultParse = (val: string | undefined): string | number | boolean | null => {
    if (val == null || val === "") return null
    if (val === "true") return true
    if (val === "false") return false
    if (/^-?\d+$/.test(val)) return Number(val)
    return val
  }

  // Use custom parsing function if provided, otherwise default
  const parseValue = options?.onParsing ?? defaultParse

  for (const key of url.searchParams.keys()) {
    // Apply include filter (if provided, only allow listed keys)
    if (options?.include && !options.include.includes(key)) continue
    // Apply exclude filter (ignore listed keys)
    if (options?.exclude && options.exclude.includes(key)) continue

    const values = url.searchParams.getAll(key)
    query[key] = values.length > 1
      ? values.map(parseValue)
      : parseValue(values[0])
  }

  // Construct raw query string with leading "?" if parameters exist
  const queryRaw = parameters.length > 0 ? `?${parameters}` : ""
  return { query, queryRaw }
}
