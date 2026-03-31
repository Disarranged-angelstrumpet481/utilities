/**
 * Disallowed usernames for account creation and form inputs
 *
 * **Syntax**
 * - `Set<string>` – A collection of disallowed usernames that the application can recognize and respond to
 *
 * **Usage**
 * ```ts
 * // Import the set of disallowed usernames
 * import { BLACKLIST_USERNAME } from "@obvia/utilities"
 *
 * // Validate user input against blacklist usernames
 * if (BLACKLIST_USERNAME.has(keyword)) {
 *  // Reject the request or show an error message
 *  throw new Error("Username is not allowed")
 * }
 * ```
 */
export const BLACKLIST_USERNAME = new Set([])

/**
 * Disallowed slugs for account creation and form inputs
 *
 * **Syntax**
 * - `Set<string>` – A collection of disallowed slugs that the application can recognize and respond to
 *
 * **Usage**
 * ```ts
 * // Import the set of disallowed slugs
 * import { BLACKLIST_SLUG } from "@obvia/utilities"
 *
 * // Validate user input against blacklist slugs
 * if (BLACKLIST_SLUG.has(keyword)) {
 *  // Reject the request or show an error message
 *  throw new Error("Subdomain is not allowed")
 * }
 * ```
 */
export const BLACKLIST_SLUG = new Set([])

/**
 * Disallowed subdomains for account creation and form inputs
 *
 * **Syntax**
 * - `Set<string>` – A collection of disallowed subdomains that the application can recognize and respond to
 *
 * **Usage**
 * ```ts
 * // Import the set of disallowed subdomains
 * import { BLACKLIST_SUBDOMAIN } from "@obvia/utilities"
 *
 * // Validate user input against blacklist subdomains
 * if (BLACKLIST_SUBDOMAIN.has(keyword)) {
 *  // Reject the request or show an error message
 *  throw new Error("Subdomain is not allowed")
 * }
 * ```
 */
export const BLACKLIST_SUBDOMAIN = new Set([])

/**
 * Disallowed email identifiers for account creation and form inputs
 *
 * **Syntax**
 * - `Set<string>` – A collection of disallowed email identifiers that the application can recognize and respond to
 *
 * **Usage**
 * ```ts
 * // Import the set of disallowed email identifiers
 * import { BLACKLIST_EMAIL } from "@obvia/utilities"
 *
 * // Validate user input against blacklist email identifiers
 * if (BLACKLIST_EMAIL.has(keyword)) {
 *  // Reject the request or show an error message
 *  throw new Error("E-mail address is not allowed")
 * }
 * ```
 */
export const BLACKLIST_EMAIL = new Set([])

/**
 * Disallowed phone number for account creation and form inputs
 *
 * **Syntax**
 * - `Set<string>` – A collection of disallowed phone numbers that the application can recognize and respond to
 *
 * **Usage**
 * ```ts
 * // Import the set of disallowed phone numbers
 * import { BLACKLIST_PHONE } from "@obvia/utilities"
 *
 * // Validate user input against blacklist phone numbers
 * if (BLACKLIST_PHONE.has(keyword)) {
 *  // Reject the request or show an error message
 *  throw new Error("Phone number is not allowed")
 * }
 * ```
 */
export const BLACKLIST_PHONE = new Set([])

/**
 * Disallowed domains for account creation and form inputs
 *
 * **Syntax**
 * - `Set<string>` – A collection of disallowed domains that the application can recognize and respond to
 *
 * **Usage**
 * ```ts
 * // Import the set of disallowed domains
 * import { BLACKLIST_DOMAIN } from "@obvia/utilities"
 *
 * // Validate user input against blacklist domains
 * if (BLACKLIST_DOMAIN.has(keyword)) {
 *  // Reject the request or show an error message
 *  throw new Error("Domain is not allowed")
 * }
 * ```
 */
export const BLACKLIST_DOMAIN = new Set([])

/**
 * Disallowed keywords for account creation and form inputs
 *
 * **Syntax**
 * - `Set<string>` – A collection of disallowed keywords that the application can recognize and respond to
 *
 * **Usage**
 * ```ts
 * // Import the set of disallowed keywords
 * import { BLACKLIST_KEYWORDS } from "@obvia/utilities"
 *
 * // Validate user input against blacklist keywords
 * if (BLACKLIST_KEYWORDS.has(keyword)) {
 *  // Reject the request or show an error message
 *  throw new Error("Domain is not allowed")
 * }
 * ```
 */
export const BLACKLIST_KEYWORDS = new Set([])
