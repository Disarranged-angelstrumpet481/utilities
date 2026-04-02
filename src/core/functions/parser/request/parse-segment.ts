import { parseTenant } from "@obvia-core"

/**
 * Configuration options for parsing locale and workspace segments
 */
export interface SegmentOptions {
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
   */
  defaultLocale: string

  /**
   * Supported locales set
   */
  supportedLocales: Set<string>
}

/**
 * Result object returned by parse segment
 */
export interface SegmentResult {
  /**
   * The parsed locale string (e.g., "en")
   */
  locale: string

  /**
   * The parsed workspace slug (e.g., "obvia")
   */
  workspace: string

  /**
   * Normalized pathname string (e.g., "/dashboard")
   */
  pathname: string

  /**
   * Boolean flag indicating if workspace came from subdomain
   */
  subdomain: boolean
}

/**
 * Parse URL segments into locale, workspace, normalized pathname, and subdomain flag
 */
export function parseSegment(
  path: string,
  domain: string,
  options: SegmentOptions
): SegmentResult {
  // Extract options with safe defaults
  const {
    hostnames,
    localeSegment = 0,
    workspaceSegment = 1,
    defaultLocale,
    supportedLocales
  } = options

  // Split the incoming path into segments, removing empty parts
  const segments = path.split("/").filter(Boolean)

  // Initialize locale with provided default
  let locale = defaultLocale
  let hasLocale = false

  // Safely check if the candidate locale exists and is supported
  const candidateLocale = segments[localeSegment]
  if (candidateLocale && supportedLocales.has(candidateLocale)) {
    locale = candidateLocale
    hasLocale = true
  }

  // Delegate workspace, subdomain, and pathname parsing to parseTenant
  const { workspace, subdomain, pathname } = parseTenant(segments, domain, {
    hostnames: hostnames,
    hasLocale: hasLocale,
    localeSegment: localeSegment,
    workspaceSegment: workspaceSegment,
    defaultLocale: defaultLocale
  })

  // Return the parsed result object
  return { locale, workspace, pathname, subdomain }
}
