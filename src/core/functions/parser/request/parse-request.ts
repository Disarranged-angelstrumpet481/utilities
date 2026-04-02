import type { SegmentOptions } from "./parse-segment"
import type { QueryOptions } from "./parse-query"
import type { TenantOptions } from "./parse-tenant"
import { parseQuery, parseSegment } from "@obvia-core"
import { proxyLog } from "@obvia-next"

/**
 * Configuration options for parsing query parameters
 */
export interface RequestContext {
  /**
   * Optional response object returned by translationProxy
   */
  response?: Response

  /**
   * Workspace slug if applicable (on app subdomain)
   */
  workspace?: string

  /**
   * Locale code if detected from the first path segment
   */
  locale?: string

  /**
   * The normalized domain name extracted from the request
   */
  domain: string

  /**
   * Flag indicating whether the workspace slug was derived from a subdomain
   */
  subdomain: boolean

  /**
   * The pathname portion of the URL (locale/workspace removed)
   */
  path: string

  /**
   * The full path including locale and query string
   */
  fullPath: string

  /**
   * Query parameters represented as an object
   */
  query: Record<string, string>

  /**
   * Raw query string including the leading "?" if present
   */
  queryRaw: string
}

/**
 * Configuration options for parsing query parameters
 */
export interface ParseRequest extends SegmentOptions, QueryOptions, Pick<TenantOptions, "hostnames">  {
  /**
   * Optional translation proxy function
   */
  translationProxy?: (request: Request) => Promise<Response> | Response
}

/**
 * Parse a request into structured metadata
 *
 * **Parameters**
 * - `request` — The incoming request object
 * - `options` — Optional configuration
 *    - `translationProxy` - Optional proxy function that can rewrite or enrich the request
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
 *   queryRaw,
 *   response
 * } = await parseRequest(request, { translationProxy })
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
 *
 * // Translation proxy response (if provided)
 * console.log(response)
 *
 * // Access headers from the proxy response
 * console.log(response.headers.get("Location"))
 * console.log(response.headers.get("x-middleware-rewrite"))
 * ```
 */
export async function parseRequest(
  request: Request,
  options: ParseRequest
): Promise<RequestContext> {
  // Normalize the domain name from the "host" header
  const domain = (request.headers.get("host") ?? "")
  .replace(/^www\./, "")
  .toLowerCase()

  let url: URL
  let response: Response | undefined

  if (options?.translationProxy) {
    // If a translation proxy is provided, call it with the request
    response = await options.translationProxy(request)

    // Resolve the effective URL using headers returned by the proxy
    // Priority: "Location" → "x-middleware-rewrite" → fallback to request.url
    url = new URL(
      response.headers.get("Location") ||
      response.headers.get("x-middleware-rewrite") ||
      request.url.toString()
    )

    proxyLog({
      name    : "Translation",
      request : request,
      context : {
        domain  : domain,
        headers : response.headers
      }
    })
  } else {
    // Default effective URL when no translation proxy is used
    url = new URL(request.url.toString())
  }

  // Parse path segments to extract locale, workspace, pathname, and subdomain flag
  const { locale, workspace, pathname, subdomain } = parseSegment(url.pathname, domain, options)

  // Parse query parameters into object and raw string form
  const { query, queryRaw } = parseQuery(url)

  // Construct the full path including locale/workspace and query string
  const fullPath = !subdomain
    ? `${url.pathname}${queryRaw}`
    : `/${workspace}${pathname}${queryRaw}`

  // Return structured request context metadata
  return {
    locale,
    workspace,
    domain,
    subdomain,
    path: pathname,
    fullPath,
    query,
    queryRaw,
    ...(response ? { response } : {}),
  } as RequestContext
}
