import {
  APP_LOCALE,
  APP_LOCALES,
  parseTenant
} from "@obvia-next"

/**
 * Parse URL segments into locale, workspace, normalized pathname, and subdomain flag
 *
 * **Parameters**
 * - `path`    - The raw pathname string from the URL (e.g., "/en/obvia/dashboard")
 * - `domain`  - The normalized domain string (e.g., "app.obvia.studio" or "team1.obvia.studio")
 *
 * **Usage**
 * ```ts
 * // Parse target request segment
 * const { locale, workspace, pathname, subdomain } =
 *   parseSegment("/en/obvia/dashboard", "app.obvia.studio")
 *
 * // Locale only (en)
 * console.log(locale)
 *
 * // Workspace (obvia)
 * console.log(workspace)
 *
 * // Path (/dashboard)
 * console.log(pathname)
 *
 * // Subdomain flag (false in this case, true if workspace came from subdomain)
 * console.log(subdomain)
 * ```
 */
export function parseSegment(path: string, domain: string): {
  locale: string
  workspace: string
  pathname: string
  subdomain: boolean
} {
  // Split the incoming path into segments (remove empty parts)
  const segments = path.split("/").filter(Boolean)

  // Default locale is the application-wide locale
  let locale = APP_LOCALE
  let hasLocale = false

  // First segment is a supported locale
  if (segments.length > 0 && segments[0] && APP_LOCALES.has(segments[0])) {
    locale = segments[0]
    hasLocale = true
  }

  // Delegate workspace/subdomain/pathname parsing to parseTenant
  const { workspace, subdomain, pathname } = parseTenant(segments, domain, hasLocale)

  return {
    locale,
    workspace,
    pathname,
    subdomain
  }
}
