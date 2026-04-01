import type { NextRequest } from "next/server"
import { parseQuery, parseSegment } from "@obvia-next"

export interface RequestContext {
  /** Workspace slug if applicable (on app subdomain) */
  workspace?: string
  /** Locale code if detected from the first path segment */
  locale?: string
  /** The normalized domain name extracted from the request */
  domain: string
  /** Flag indicating whether the workspace slug was derived from a subdomain */
  subdomain: boolean
  /** The pathname portion of the URL (locale/workspace removed) */
  path: string
  /** The full path including locale and query string */
  fullPath: string
  /** Query parameters represented as an object */
  query: Record<string, string>
  /** Raw query string including the leading "?" if present */
  queryRaw: string
}

/**
 * Parse a next.js request into structured metadata
 *
 * **Parameter**
 * - `request` - The next request object provided by next.js proxy or route handlers
 *
 * **Usage**
 * ```ts
 * // Parse the incoming request
 * const {
 *   locale,
 *   workspace,
 *   domain,
 *   path,
 *   fullPath,
 *   query,
 *   queryRaw
 * } = parse(request)
 *
 * // Normalized domain (obvia.studio)
 * console.log(domain)
 *
 * // Full path only (/en/obvia/dashboard?last_workspace=obvia)
 * console.log(fullPath)
 *
 * // Locale only (en)
 * console.log(locale)
 *
 * // Workspace only (obvia)
 * console.log(workspace)
 *
 * // Pathname only (/dashboard)
 * console.log(path)
 *
 * // Query parameters as an object "{ last_workspace: "obvia" }"
 * console.log(query)
 *
 * // Raw query string "?last_workspace=obvia"
 * console.log(queryRaw)
 * ```
 */
export function parseProxy(request: NextRequest): RequestContext {
  // Normalize domain
  const domain = (request.headers.get("host") ?? "")
    .replace(/^www\./, "")
    .toLowerCase()

  // Resolve effective URL
  const url = new URL(
    request.nextUrl.toString()
  )

  // Parse segments (locale, workspace, pathname, subdomain)
  const { locale, workspace, pathname, subdomain } = parseSegment(url.pathname, domain)

  // Parse query parameters
  const { query, queryRaw } = parseQuery(url)

  // Construct full path including locale, workspace, and query string
  const fullPath = !subdomain
    ? `${url.pathname}${queryRaw}`
    : `/${workspace}${pathname}${queryRaw}`

  return {
    locale    : locale,
    workspace : workspace,
    domain    : domain,
    subdomain : subdomain,
    path      : pathname,
    fullPath  : fullPath,
    query     : query,
    queryRaw  : queryRaw
  } as RequestContext
}
