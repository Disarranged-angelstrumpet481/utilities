import {
  APP_ENV,
  APP_HOST
} from "./global"

/**
 * The domain name of the **academy**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string used for routing, client-server communication, and environment-specific configuration
 *
 * **Value**
 * - `protocol://academy.[domain]` - for production environment
 * - `protocol://academy-preview.[domain]` - for preview environment
 * - `protocol://academy.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain name
 * import { ACADEMY_DOMAIN } from "@obvia/utilities/next"
 *
 * // Build a link to a custom academy page
 * const academyCustomHref = new URL("/onboarding/step", ACADEMY_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", ACADEMY_DOMAIN)
 *
 * // Logging the current environment domain
 * console.log("Current academy domain:", ACADEMY_DOMAIN)
 * ```
 */
export const ACADEMY_DOMAIN =
  APP_ENV === "production"
    ? `https://academy.${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://academy-preview.${APP_HOST}`
      : `https://academy.${APP_HOST}`

/**
 * The domain name of the **admin**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string pointing to the admin server for the current deployment context
 *
 * **Value**
 * - `protocol://admin.[domain]` - for production environment
 * - `protocol://admin-preview.[domain]` - for preview environment
 * - `protocol://admin.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain name
 * import { ADMIN_DOMAIN } from "@obvia/utilities/next"
 *
 * // Build a link to a custom admin page
 * const adminCustomHref = new URL("/onboarding/step", ADMIN_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", ADMIN_DOMAIN)
 *
 * // Logging the current environment domain
 * console.log("Current admin domain:", ADMIN_DOMAIN)
 * ```
 */
export const ADMIN_DOMAIN =
  APP_ENV === "production"
    ? `https://admin.${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://admin-preview.${APP_HOST}`
      : `https://admin.${APP_HOST}`

/**
 * The domain name of the **auth**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string used for routing, client-server communication, and environment-specific configuration
 *
 * **Value**
 * - `protocol://academy.[domain]` - for production environment
 * - `protocol://academy-preview.[domain]` - for preview environment
 * - `protocol://auth.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain name
 * import { AUTH_DOMAIN } from "@obvia/utilities/next"
 *
 * // Build a link to a custom academy page
 * const authCustomHref = new URL("/onboarding/step", AUTH_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", AUTH_DOMAIN)
 *
 * // Logging the current environment domain
 * console.log("Current auth domain :", AUTH_DOMAIN)
 * ```
 */
export const AUTH_DOMAIN =
  APP_ENV === "production"
    ? `https://auth.${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://auth-preview.${APP_HOST}`
      : `https://auth.${APP_HOST}`

/**
 * The domain name of the **api**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string pointing to the API server for the current deployment context
 *
 * **Value**
 * - `protocol://api.[domain]` - for production environment
 * - `protocol://api-preview.[domain]` - for preview environment
 * - `protocol://api.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain name
 * import { API_DOMAIN } from "@obvia/utilities/next"
 *
 * // Build a link to a custom api page
 * const apiCustomHref = new URL("/onboarding/step", API_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", API_DOMAIN)
 *
 * // Logging the current environment domain
 * console.log("Current api domain:", API_DOMAIN)
 * ```
 */
export const API_DOMAIN =
  APP_ENV === "production"
    ? `https://api.${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://api-preview.${APP_HOST}`
      : `https://api.${APP_HOST}`

/**
 * The domain name of the **app**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string used for routing, client-server communication, and environment-specific configuration
 *
 * **Value**
 * - `protocol://app.[domain]` - for production environment
 * - `protocol://app-preview.[domain]` - for preview environment
 * - `protocol://app.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain name
 * import { APP_DOMAIN } from "@obvia/utilities/next"
 *
 * // Build a link to a custom app page
 * const appCustomHref = new URL("/onboarding/step", APP_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", APP_DOMAIN)
 *
 * // Logging the current environment domain
 * console.log("Current app domain:", APP_DOMAIN)
 * ```
 */
export const APP_DOMAIN =
  APP_ENV === "production"
    ? `https://app.${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://app-preview.${APP_HOST}`
      : `https://app.${APP_HOST}`

/**
 * The domain name of the **blog**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string pointing to the blog server for the current deployment context
 *
 * **Value**
 * - `protocol://blog.[domain]` - for production environment
 * - `protocol://blog-preview.[domain]` - for preview environment
 * - `protocol://blog.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain name
 * import { BLOG_DOMAIN } from "@obvia/utilities/next"
 *
 * // Build a link to a custom blog page
 * const blogCustomHref = new URL("/onboarding/step", BLOG_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", BLOG_DOMAIN)
 *
 * // Logging the current environment domain
 * console.log("Current blog domain:", BLOG_DOMAIN)
 * ```
 */
export const BLOG_DOMAIN =
  APP_ENV === "production"
    ? `https://blog.${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://blog-preview.${APP_HOST}`
      : `https://blog.${APP_HOST}`

/**
 * The domain name of the **career**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string pointing to the career server for the current deployment context
 *
 * **Value**
 * - `protocol://career.[domain]` - for production environment
 * - `protocol://career-preview.[domain]` - for preview environment
 * - `protocol://career.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain name
 * import { CAREER_DOMAIN } from "@obvia/utilities/next"
 *
 * // Build a link to a custom career page
 * const careerCustomHref = new URL("/onboarding/step", CAREER_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", CAREER_DOMAIN)
 *
 * // Logging the current environment domain
 * console.log("Current career domain:", CAREER_DOMAIN)
 * ```
 */
export const CAREER_DOMAIN =
  APP_ENV === "production"
    ? `https://career.${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://career-preview.${APP_HOST}`
      : `https://career.${APP_HOST}`

/**
 * The domain name of the **dev**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string pointing to the developer server for the current deployment context
 *
 * **Value**
 * - `protocol://dev.[domain]` - for production environment
 * - `protocol://dev-preview.[domain]` - for preview environment
 * - `protocol://dev.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain name
 * import { DEV_DOMAIN } from "@obvia/utilities/next"
 *
 * // Build a link to a custom dev page
 * const devCustomHref = new URL("/onboarding/step", DEV_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", DEV_DOMAIN)
 *
 * // Logging the current environment domain
 * console.log("Current dev domain:", DEV_DOMAIN)
 * ```
 */
export const DEV_DOMAIN =
  APP_ENV === "production"
    ? `https://dev.${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://dev-preview.${APP_HOST}`
      : `https://dev.${APP_HOST}`

/**
 * The domain name of the **docs**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string pointing to the documentation server for the current deployment context
 *
 * **Value**
 * - `protocol://docs.[domain]` - for production environment
 * - `protocol://docs-preview.[domain]` - for preview environment
 * - `protocol://docs.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain name
 * import { DOCS_DOMAIN } from "@obvia/utilities/next"
 *
 * // Build a link to a custom docs page
 * const docsCustomHref = new URL("/onboarding/step", DOCS_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", DOCS_DOMAIN)
 *
 * // Logging the current environment domain
 * console.log("Current docs domain:", DOCS_DOMAIN)
 * ```
 */
export const DOCS_DOMAIN =
  APP_ENV === "production"
    ? `https://docs.${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://docs-preview.${APP_HOST}`
      : `https://docs.${APP_HOST}`

/**
 * The domain name of the **help**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string pointing to the documentation server for the current deployment context
 *
 * **Value**
 * - `protocol://help.[domain]` - for production environment
 * - `protocol://help-preview.[domain]` - for preview environment
 * - `protocol://help.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain name
 * import { HELP_DOMAIN } from "@obvia/utilities/next"
 *
 * // Build a link to a custom help page
 * const helpCustomHref = new URL("/onboarding/step", HELP_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", HELP_DOMAIN)
 *
 * // Logging the current environment domain
 * console.log("Current help domain:", HELP_DOMAIN)
 * ```
 */
export const HELP_DOMAIN =
  APP_ENV === "production"
    ? `https://help.${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://help-preview.${APP_HOST}`
      : `https://help.${APP_HOST}`

/**
 * The domain name of the **id**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string used for routing, client-server communication, and environment-specific configuration
 *
 * **Value**
 * - `protocol://id.[domain]` - for production environment
 * - `protocol://id-preview.[domain]` - for preview environment
 * - `protocol://id.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain name
 * import { ID_DOMAIN } from "@obvia/utilities/next"
 *
 * // Build a link to a custom id page
 * const idCustomHref = new URL("/onboarding/step", ID_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", ID_DOMAIN)
 *
 * // Logging the current environment domain
 * console.log("Current id domain:", ID_DOMAIN)
 * ```
 */
export const ID_DOMAIN =
  APP_ENV === "production"
    ? `https://id.${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://id-preview.${APP_HOST}`
      : `https://id.${APP_HOST}`

/**
 * The domain name of the **partner**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string pointing to the partner server for the current deployment context
 *
 * **Value**
 * - `protocol://partner.[domain]` - for production environment
 * - `protocol://partner-preview.[domain]` - for preview environment
 * - `protocol://partner.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain name
 * import { PARTNER_DOMAIN } from "@obvia/utilities/next"
 *
 * // Build a link to a custom partner page
 * const partnerCustomHref = new URL("/onboarding/step", PARTNER_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", PARTNER_DOMAIN)
 *
 * // Logging the current environment domain
 * console.log("Current partner domain:", PARTNER_DOMAIN)
 * ```
 */
export const PARTNER_DOMAIN =
  APP_ENV === "production"
    ? `https://partner.${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://partner-preview.${APP_HOST}`
      : `https://partner.${APP_HOST}`

/**
 * The domain name of the **roadmap**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string pointing to the roadmap server for the current deployment context
 *
 * **Value**
 * - `protocol://roadmap.[domain]` - for production environment
 * - `protocol://roadmap-preview.[domain]` - for preview environment
 * - `protocol://roadmap.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain name
 * import { ROADMAP_DOMAIN } from "@obvia/utilities/next"
 *
 * // Build a link to a custom roadmap page
 * const roadmapCustomHref = new URL("/onboarding/step", ROADMAP_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", ROADMAP_DOMAIN)
 *
 * // Logging the current environment domain
 * console.log("Current roadmap domain:", ROADMAP_DOMAIN)
 * ```
 */
export const ROADMAP_DOMAIN =
  APP_ENV === "production"
    ? `https://roadmap.${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://roadmap-preview.${APP_HOST}`
      : `https://roadmap.${APP_HOST}`

/**
 * The domain name of the **status**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string pointing to the status server for the current deployment context
 *
 * **Value**
 * - `protocol://status.[domain]` - for production environment
 * - `protocol://status-preview.[domain]` - for preview environment
 * - `protocol://status.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain name
 * import { STATUS_DOMAIN } from "@obvia/utilities/next"
 *
 * // Build a link to a custom status page
 * const statusCustomHref = new URL("/onboarding/step", STATUS_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", STATUS_DOMAIN)
 *
 * // Logging the current environment domain
 * console.log("Current status domain:", STATUS_DOMAIN)
 * ```
 */
export const STATUS_DOMAIN =
  APP_ENV === "production"
    ? `https://status.${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://status-preview.${APP_HOST}`
      : `https://status.${APP_HOST}`

/**
 * The domain name of the **team**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string used for routing, client-server communication, and environment-specific configuration
 *
 * **Value**
 * - `protocol://team.[domain]` - for production environment
 * - `protocol://team-preview.[domain]` - for preview environment
 * - `protocol://team.obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain name
 * import { TEAM_DOMAIN } from "@obvia/utilities/next"
 *
 * // Build a link to a custom team page
 * const teamCustomHref = new URL("/onboarding/step", TEAM_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", TEAM_DOMAIN)
 *
 * // Logging the current environment domain
 * console.log("Current team domain:", TEAM_DOMAIN)
 * ```
 */
export const TEAM_DOMAIN =
  APP_ENV === "production"
    ? `https://team.${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://team-preview.${APP_HOST}`
      : `https://team.${APP_HOST}`

/**
 * The domain name of the **web**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string used for routing, client-server communication, and environment-specific configuration
 *
 * **Value**
 * - `protocol://[domain]` - for production environment
 * - `protocol://preview.[domain]` - for preview environment
 * - `protocol://obvia.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain name
 * import { WEB_DOMAIN } from "@obvia/utilities/next"
 *
 * // Build a link to a custom web page
 * const webCustomHref = new URL("/onboarding/step", WEB_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", WEB_DOMAIN)
 *
 * // Logging the current environment domain
 * console.log("Current web domain:", WEB_DOMAIN)
 * ```
 */
export const WEB_DOMAIN =
  APP_ENV === "production"
    ? `https://${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://preview.${APP_HOST}`
      : `https://${APP_HOST}`

/**
 * Collection of all application domain constants, dynamically resolved based on the current environment.
 *
 * **Syntax**
 * - `string[]` – An array of valid domain strings used for routing, client-server communication, and environment-specific configuration.
 *
 * **Value**
 * - `protocol://[*]` – for production environment
 * - `protocol://*-preview.[*]` – for preview environment
 * - `protocol://*` – for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain names
 * import { DOMAINS } from "@obvia/utilities/next"
 *
 * // Example: checking if the current host is allowed to access the application
 * const currentHost = window.location.origin
 *
 * // If the current host is allowed, proceed with the rest of the logic
 * if (DOMAINS.includes(currentHost)) {
 *   // The current host is allowed, so we can proceed with the rest of the logic
 *   console.log("Valid domain:", currentHost)
 * } else {
 *   // The current host is not allowed, so we should redirect the user to a valid domain
 *   console.warn("Invalid domain:", currentHost)
 * }
 *
 * // API request validation: ensure the target URL starts with an allowed domain
 * function isAllowedDomain(url: string) {
 *   // Check if the URL starts with one of the allowed domains
 *   return DOMAINS.some(domain => url.startsWith(domain))
 * }
 *
 * // Example: checking if a given URL is allowed to access the application
 * console.log(isAllowedDomain("https://app.sirketio.com")) // true
 *
 * // Environment-based redirect: choose the correct domain depending on environment
 * const redirectDomain =
 *   process.env.NODE_ENV === "production"
 *     ? "https://app.sirketio.com"
 *     : "https://app.sirketio.dev"
 *
 * // Redirect the user to the correct domain
 * window.location.href = redirectDomain
 *
 * // Example: checking if a given preview domain is valid
 * const previewDomain = "https://feature-preview.sirketio.com"
 *
 * // Check if the preview domain is valid
 * if (DOMAINS.includes(previewDomain)) {
 *   // The preview domain is valid, so we can proceed with the rest of the logic
 *   console.log("Preview domain is valid:", previewDomain)
 * }
 * ```
 */
export const DOMAINS: readonly Domain[] = [
  ACADEMY_DOMAIN,
  ADMIN_DOMAIN,
  API_DOMAIN,
  APP_DOMAIN,
  BLOG_DOMAIN,
  CAREER_DOMAIN,
  DEV_DOMAIN,
  DOCS_DOMAIN,
  ID_DOMAIN,
  PARTNER_DOMAIN,
  ROADMAP_DOMAIN,
  STATUS_DOMAIN,
  TEAM_DOMAIN,
  WEB_DOMAIN
] as const

/**
 * The type of all application domain constants
 */
export type Domain =
  | typeof ACADEMY_DOMAIN
  | typeof ADMIN_DOMAIN
  | typeof API_DOMAIN
  | typeof APP_DOMAIN
  | typeof BLOG_DOMAIN
  | typeof CAREER_DOMAIN
  | typeof DEV_DOMAIN
  | typeof DOCS_DOMAIN
  | typeof ID_DOMAIN
  | typeof PARTNER_DOMAIN
  | typeof ROADMAP_DOMAIN
  | typeof STATUS_DOMAIN
  | typeof TEAM_DOMAIN
  | typeof WEB_DOMAIN
