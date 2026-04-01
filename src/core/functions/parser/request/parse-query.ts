/**
 * Parse query parameters from a URL into structured metadata
 *
 * **Parameter**
 * - `url` - The resolved URL object containing search parameters
 *
 * **Usage**
 * ```ts
 * // Create a new URL instance
 * const { query, queryRaw } = parseQuery(
 *   new URL("https://obvia.studio/?last_workspace=obvia")
 * )
 *
 * // Query object ({ last_workspace: "obvia" })
 * console.log(query)
 *
 * // Query raw "?last_workspace=obvia"
 * console.log(queryRaw)
 * ```
 */
export function parseQuery(url: URL): {
  query: Record<string, string>
  queryRaw: string
} {
  // Convert search parameters to a raw string (without leading "?")
  const parameters = url.searchParams.toString()

  // Transform search parameters into a key-value object
  const query = Object.fromEntries(url.searchParams)

  // Add leading "?" if parameters exist, otherwise return an empty string
  const queryRaw = parameters.length > 0 ? `?${parameters}` : ""

  // Return both structured and raw query representations
  return { query, queryRaw }
}
