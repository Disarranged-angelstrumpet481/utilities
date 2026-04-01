import {
  APP_LOCALE,
  APP_LOCALES,
  HOSTNAMES
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

  // Workspace slug, initially empty
  let workspace = ""

  // Pathname starts as the original path
  let pathname = path

  // Flag to indicate whether the workspace was derived from a subdomain
  let subdomain = false

  // First segment is a supported locale
  if (segments.length > 0 && segments[0] && APP_LOCALES.has(segments[0])) {
    locale = segments[0]

    if (domain.startsWith("app.")) {
      // app.* domains → workspace from second segment
      workspace = segments[1] ?? ""
      pathname = "/" + segments.slice(2).join("/")
    } else if (!HOSTNAMES.includes(domain)) {
      // custom subdomain → workspace from domain
      const sub = domain.split(".")
      workspace = sub[0] && sub[0] !== "www" ? sub[0] : ""
      subdomain = true
      pathname = "/" + segments.slice(1).join("/")
    } else {
      // plain hostname → workspace from second segment
      workspace = segments[1] ?? ""
      pathname = "/" + segments.slice(2).join("/")
    }
  } else {
    // No locale segment present
    if (domain.startsWith("app.")) {
      // app.* domains → workspace from first segment
      workspace = segments[0] ?? ""
      pathname = "/" + segments.slice(1).join("/")
    } else if (!HOSTNAMES.includes(domain)) {
      // custom subdomain → workspace from domain
      const sub = domain.split(".")
      workspace = sub[0] && sub[0] !== "www" ? sub[0] : ""
      subdomain = true
      pathname = "/" + segments.join("/")
    } else {
      // plain hostname → workspace from first segment
      workspace = segments[0] ?? ""
      pathname = "/" + segments.slice(1).join("/")
    }
  }

  // Ensure pathname is never empty
  if (pathname === "") pathname = "/"

  return { locale, workspace, pathname, subdomain }
}
