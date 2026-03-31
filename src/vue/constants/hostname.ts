import { APP_HOST } from "./global"

/**
 * A set of allowed hostnames for **academy** access, used for domain validation
 *
 * **Syntax**
 * - `Set<string>` – A collection of valid hostnames that the application can recognize and respond to
 *
 * **Value**
 * - `academy.[domain]` - for production environment
 * - `academy-preview.[domain]` - for preview environment
 * - `academy.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { ACADEMY_HOSTNAMES } from "@obvia/utilities/vue"
 *
 * // Check if the request originated from a valid hostname
 * if (ACADEMY_HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return academyProxy(request)
 * }
 * ```
 */
export const ACADEMY_HOSTNAMES = new Set([
  `academy.${APP_HOST}`,
  `academy-preview.${APP_HOST}`
])

/**
 * A set of allowed hostnames for **admin** access, used for domain validation
 *
 * **Syntax**
 * - `Set<string>` – A collection of valid hostnames that the application may recognize or respond to
 *
 * **Value**
 * - `admin.[domain]` - for production environment
 * - `admin-preview.[domain]` - for preview environment
 * - `admin.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { ADMIN_HOSTNAMES } from "@obvia/utilities/vue"
 *
 * // Check if the request originated from a valid hostname
 * if (ADMIN_HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return adminProxy(request)
 * }
 * ```
 */
export const ADMIN_HOSTNAMES = new Set([
  `admin.${APP_HOST}`,
  `admin-preview.${APP_HOST}`
])

/**
 * A set of allowed hostnames for **api** access, used for domain validation
 *
 * **Syntax**
 * - `Set<string>` – A collection of valid hostnames that the application may recognize or respond to
 *
 * **Value**
 * - `api.[domain]` - for production environment
 * - `api-preview.[domain]` - for preview environment
 * - `api.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { API_HOSTNAMES } from "@obvia/utilities/vue"
 *
 * // Check if the request originated from a valid hostname
 * if (API_HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return apiProxy(request)
 * }
 * ```
 */
export const API_HOSTNAMES = new Set([
  `api.${APP_HOST}`,
  `api-preview.${APP_HOST}`
])

/**
 * A set of allowed hostnames for **app** access, used for domain validation
 *
 * **Syntax**
 * - `Set<string>` – A collection of valid hostnames that the application may recognize or respond to
 *
 * **Value**
 * - `app.[domain]` - for production environment
 * - `app-preview.[domain]` - for preview environment
 * - `app.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { APP_HOSTNAMES } from "@obvia/utilities/vue"
 *
 * // Check if the request originated from a valid hostname
 * if (APP_HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return appProxy(request)
 * }
 * ```
 */
export const APP_HOSTNAMES = new Set([
  `app.${APP_HOST}`,
  `app-preview.${APP_HOST}`
])

/**
 * A set of allowed hostnames for **blog** access, used for domain validation
 *
 * **Syntax**
 * - `Set<string>` – A collection of valid hostnames that the application can recognize and respond to
 *
 * **Value**
 * - `blog.[domain]` - for production environment
 * - `blog-preview.[domain]` - for preview environment
 * - `blog.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { BLOG_HOSTNAMES } from "@obvia/utilities/vue"
 *
 * // Check if the request originated from a valid hostname
 * if (BLOG_HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return blogProxy(request)
 * }
 * ```
 */
export const BLOG_HOSTNAMES = new Set([
  `blog.${APP_HOST}`,
  `blog-preview.${APP_HOST}`
])

/**
 * A set of allowed hostnames for **career** access, used for domain validation
 *
 * **Syntax**
 * - `Set<string>` – A collection of valid hostnames that the application can recognize and respond to
 *
 * **Value**
 * - `career.[domain]` - for production environment
 * - `career-preview.[domain]` - for preview environments
 * - `career.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { CAREER_HOSTNAMES } from "@obvia/utilities/vue"
 *
 * // Check if the request originated from a valid hostname
 * if (CAREER_HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return careerProxy(request)
 * }
 * ```
 */
export const CAREER_HOSTNAMES = new Set([
  `career.${APP_HOST}`,
  `career-preview.${APP_HOST}`
])

/**
 * A set of allowed hostnames for **dev** access, used for domain validation
 *
 * **Syntax**
 * - `Set<string>` – A collection of valid hostnames that the application can recognize and respond to
 *
 * **Value**
 * - `dev.[domain]` - for production environment
 * - `dev-preview.[domain]` - for preview environment
 * - `dev.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { DEV_HOSTNAMES } from "@obvia/utilities/vue"
 *
 * // Check if the request originated from a valid hostname
 * if (DEV_HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return devProxy(request)
 * }
 * ```
 */
export const DEV_HOSTNAMES = new Set([
  `dev.${APP_HOST}`,
  `dev-preview.${APP_HOST}`
])

/**
 * A set of allowed hostnames for **docs** access, used for domain validation
 *
 * **Syntax**
 * - `Set<string[]>` – A collection of valid hostnames that the application may recognize or respond to
 *
 * **Value**
 * - `docs.[domain]` - for production environment
 * - `docs-preview.[domain]` - for preview environment
 * - `docs.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { DOCS_HOSTNAMES } from "@obvia/utilities/vue"
 *
 * // Check if the request originated from a valid hostname
 * if (DOCS_HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return docsProxy(request)
 * }
 * ```
 */
export const DOCS_HOSTNAMES = new Set([
  `docs.${APP_HOST}`,
  `docs-preview.${APP_HOST}`
])

/**
 * A set of allowed hostnames for **help** access, used for domain validation
 *
 * **Syntax**
 * - `Set<string[]>` – A collection of valid hostnames that the application may recognize or respond to
 *
 * **Value**
 * - `help.[domain]` - for production environment
 * - `help-preview.[domain]` - for preview environment
 * - `help.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { HELP_HOSTNAMES } from "@obvia/utilities/vue"
 *
 * // Check if the request originated from a valid hostname
 * if (HELP_HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return HelpMiddleware(request)
 * }
 * ```
 */
export const HELP_HOSTNAMES = new Set([
  `help.${APP_HOST}`,
  `help-preview.${APP_HOST}`
])

/**
 * A set of allowed hostnames for **id** access, used for domain validation
 *
 * **Syntax**
 * - `Set<string>` – A collection of valid hostnames that the application can recognize and respond to
 *
 * **Value**
 * - `id.[domain]` - for production environment
 * - `id-preview.[domain]` - for preview environment
 * - `id.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { ID_HOSTNAMES } from "@obvia/utilities/vue"
 *
 * // Check if the request originated from a valid hostname
 * if (ID_HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return IdMiddleware(request)
 * }
 * ```
 */
export const ID_HOSTNAMES = new Set([
  `id.${APP_HOST}`,
  `id-preview.${APP_HOST}`
])

/**
 * A set of allowed hostnames for **partner** access, used for domain validation
 *
 * **Syntax**
 * - `Set<string>` – A collection of valid hostnames that the application can recognize and respond to
 *
 * **Value**
 * - `partner.[domain]` - for production environment
 * - `partner-preview.[domain]` - for preview environment
 * - `partner.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { PARTNER_HOSTNAMES } from "@obvia/utilities/vue"
 *
 * // Check if the request originated from a valid hostname
 * if (PARTNER_HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return partnerProxy(request)
 * }
 * ```
 */
export const PARTNER_HOSTNAMES = new Set([
  `partner.${APP_HOST}`,
  `partner-preview.${APP_HOST}`
])

/**
 * A set of allowed hostnames for **roadmap** access, used for domain validation
 *
 * **Syntax**
 * - `Set<string>` – A collection of valid hostnames that the application can recognize and respond to
 *
 * **Value**
 * - `roadmap.[domain]` - for production environment
 * - `roadmap-preview.[domain]` - for preview environment
 * - `roadmap.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { ROADMAP_HOSTNAMES } from "@obvia/utilities/vue"
 *
 * // Check if the request originated from a valid hostname
 * if (ROADMAP_HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return roadmapProxy(request)
 * }
 * ```
 */
export const ROADMAP_HOSTNAMES = new Set([
  `roadmap.${APP_HOST}`,
  `roadmap-preview.${APP_HOST}`
])

/**
 * A set of allowed hostnames for **status** access, used for domain validation
 *
 * **Syntax**
 * - `Set<string>` – A collection of valid hostnames that the application may recognize or respond to
 *
 * **Value**
 * - `status.[domain]` - for production environment
 * - `status-preview.[domain]` - for preview environment
 * - `status.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { STATUS_HOSTNAMES } from "@obvia/utilities/vue"
 *
 * // Check if the request originated from a valid hostname
 * if (STATUS_HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return statusProxy(request)
 * }
 * ```
 */
export const STATUS_HOSTNAMES = new Set([
  `status.${APP_HOST}`,
  `status-preview.${APP_HOST}`
])

/**
 * A set of allowed hostnames for **team** access, used for domain validation
 *
 * **Syntax**
 * - `Set<string>` – A collection of valid hostnames that the application can recognize and respond to
 *
 * **Value**
 * - `team.[domain]` - for production environment
 * - `team-preview.[domain]` - for preview environment
 * - `team.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { TEAM_HOSTNAMES } from "@obvia/utilities/vue"
 *
 * // Check if the request originated from a valid hostname
 * if (TEAM_HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return teamProxy(request)
 * }
 * ```
 */
export const TEAM_HOSTNAMES = new Set([
  `team.${APP_HOST}`,
  `team-preview.${APP_HOST}`
])

/**
 * A set of allowed hostnames for **web** access, used for domain validation
 *
 * **Syntax**
 * - `Set<string>` – A collection of valid hostnames that the application may recognize or respond to
 *
 * **Value**
 * - `[domain]` - for production environment
 * - `preview.[domain]` - for preview environment
 * - `obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { WEB_HOSTNAMES } from "@obvia/utilities/vue"
 *
 * // Check if the request originated from a valid hostname
 * if (WEB_HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return webProxy(request)
 * }
 * ```
 */
export const WEB_HOSTNAMES = new Set([
  `${APP_HOST}`,
  `preview.${APP_HOST}`
])

/**
 * A set of allowed hostnames for access, used for domain validation
 *
 * **Syntax**
 * - `Set<string>` – A collection of valid hostnames that the application may recognize or respond to
 *
 * **Value**
 * - `[domain]` - for production environment
 * - `preview.[domain]` - for preview environment
 * - `*.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { HOSTNAMES } from "@obvia/utilities/vue"
 *
 * // Check if the request originated from a valid hostname
 * if (HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return webProxy(request)
 * }
 * ```
 */
export const HOSTNAMES = [
  ...ACADEMY_HOSTNAMES,
  ...ADMIN_HOSTNAMES,
  ...API_HOSTNAMES,
  ...APP_HOSTNAMES,
  ...BLOG_HOSTNAMES,
  ...CAREER_HOSTNAMES,
  ...DEV_HOSTNAMES,
  ...DOCS_HOSTNAMES,
  ...ID_HOSTNAMES,
  ...PARTNER_HOSTNAMES,
  ...ROADMAP_HOSTNAMES,
  ...STATUS_HOSTNAMES,
  ...TEAM_HOSTNAMES,
  ...WEB_HOSTNAMES
]
