/**
 * Configuration options for parsing tenant (workspace) slug
 */
export interface TenantOptions {
  /**
   * Flag indicating whether the first segment is a locale
   *
   * @default false
   */
  hasLocale?: boolean

  /**
   * Supported hostnames list
   *
   * @default new Set(["en"])
   */
  hostnames?: string[]

  /**
   * Index of the locale segment in path
   *
   * @default 0
   */
  localeSegment?: number

  /**
   * Index of the workspace segment in path
   *
   * @default 1 if hasLocale, else 0
   */
  workspaceSegment?: number

  /**
   * Default locale to use if none is found in path
   *
   * @default en
   */
  defaultLocale?: string
}

/**
 * Result object returned by parse tenant
 */
export interface TenantResult {
  /**
   * The parsed workspace slug (e.g., "obvia")
   */
  workspace: string

  /**
   * Boolean flag indicating if workspace came from subdomain (true if extracted from domain, false if from path)
   */
  subdomain: boolean

  /**
   * Normalized pathname string (e.g., "/dashboard")
   */
  pathname: string
}

/**
 * Parse tenant (workspace) slug from path/domain
 *
 * **Parameters**
 * - `segments` – Path segments array (e.g., ["en", "obvia", "dashboard"])
 * - `domain` – Normalized domain string (e.g., "app.obvia.studio" or "team1.obvia.studio")
 * - `options` – Optional configuration
 *    - `hasLocale` – Boolean flag indicating whether the first segment is a locale (default: false)
 *    - `hostnames` – Supported hostnames list (default: HOSTNAMES)
 *    - `localeSegment` – Index of the locale segment in path (default: 0)
 *    - `workspaceSegment` – Index of the workspace segment in path (default: 1 if hasLocale, else 0)
 *    - `locale` – Default locale to use if none is found (default: APP_LOCALE)
 *
 * **Usage**
 * ```ts
 * // Parse tenant from path/domain
 * const { workspace, subdomain, pathname } = parseTenant(
 *   ["en", "obvia", "dashboard"],
 *   "app.obvia.studio",
 *   { hasLocale: true }
 * )
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
  options: TenantOptions
): TenantResult {
  const {
    hasLocale = false,
    hostnames = [],
    localeSegment = 0,
    workspaceSegment = hasLocale ? 1 : 0,
    defaultLocale = "en"
  } = options

  // Initialize workspace as empty string
  let workspace = ""

  // Initialize subdomain flag as false
  let subdomain = false

  // Default pathname is the full segments joined with "/"
  let pathname = "/" + segments.join("/")

  // Case 1: Domain starts with "app."
  if (domain.startsWith("app.")) {
    // For app.* domains, tenant always comes from path
    workspace = segments[workspaceSegment] ?? ""

    // Pathname excludes locale and workspace if present
    pathname = "/" + segments.slice(hasLocale ? workspaceSegment + 1 : workspaceSegment + 1).join("/")
  }
  // Case 2: Domain is not in hostnames (custom subdomain)
  else if (!hostnames.includes(domain)) {
    // Extract subdomain parts (e.g., team1.obvia.studio → ["team1","obvia","studio"])
    const sub = domain.split(".")

    // Use the first part of the domain as workspace slug if available
    workspace = sub[0] && sub[0] !== "www" ? sub[0] : defaultLocale

    // Mark that the workspace came from a subdomain
    subdomain = true

    // Pathname excludes locale if present
    pathname = "/" + segments.slice(hasLocale ? localeSegment + 1 : localeSegment).join("/")
  }
  // Case 3: Plain hostname (in hostnames)
  else {
    // Workspace comes from path
    workspace = segments[workspaceSegment] ?? defaultLocale

    // Pathname excludes locale and workspace if present
    pathname = "/" + segments.slice(hasLocale ? workspaceSegment + 1 : workspaceSegment + 1).join("/")
  }

  // Ensure pathname is never empty
  if (pathname === "") pathname = "/"

  // Return parsed values
  return { workspace, subdomain, pathname }
}