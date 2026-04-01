import { HOSTNAMES } from "@obvia-next"

/**
 * Parse tenant (workspace) slug from path/domain
 *
 * **Parameters**
 * - `segments`- Path segments array (e.g., ["en", "obvia", "dashboard"])
 * - `domain` - Normalized domain string (e.g., "app.obvia.studio" or "team1.obvia.studio")
 * - `hasLocale` - Boolean flag indicating whether the first segment is a locale
 *
 * **Usage**
 * ```ts
 * // Parse tenant from path/domain
 * const { workspace, subdomain, pathname } =
 *   parseTenant(["en", "obvia", "dashboard"], "app.obvia.studio", true)
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
export function parseTenant(
  segments: string[],
  domain: string,
  hasLocale: boolean
): {
  workspace: string
  subdomain: boolean
  pathname: string
} {
  // Initialize workspace as empty string
  let workspace = ""

  // Initialize subdomain flag as false
  let subdomain = false

  // Default pathname is the full segments joined with "/"
  let pathname = "/" + segments.join("/")

  // Case 1: Domain starts with "app."
  if (domain.startsWith("app.")) {
    // For app.* domains, tenant always comes from path
    workspace = hasLocale ? segments[1] ?? "" : segments[0] ?? ""

    // Pathname excludes locale and workspace if present
    pathname = "/" + segments.slice(hasLocale ? 2 : 1).join("/")
  }
  // Case 2: Domain is not in HOSTNAMES (custom subdomain)
  else if (!HOSTNAMES.includes(domain)) {
    // Extract subdomain parts (e.g., team1.obvia.studio → ["team1","obvia","studio"])
    const sub = domain.split(".")

    // Use the first part of the domain as workspace slug if available
    workspace = sub[0] && sub[0] !== "www" ? sub[0] : ""

    // Mark that the workspace came from a subdomain
    subdomain = true

    // Pathname excludes locale if present
    pathname = "/" + segments.slice(hasLocale ? 1 : 0).join("/")
  }
  // Case 3: Plain hostname (in HOSTNAMES)
  else {
    // Workspace comes from path
    workspace = hasLocale ? segments[1] ?? "" : segments[0] ?? ""

    // Pathname excludes locale and workspace if present
    pathname = "/" + segments.slice(hasLocale ? 2 : 1).join("/")
  }

  // Ensure pathname is never empty
  if (pathname === "") pathname = "/"

  // Return parsed values
  return { workspace, subdomain, pathname }
}
