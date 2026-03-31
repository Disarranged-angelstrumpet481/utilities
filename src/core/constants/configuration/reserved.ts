/**
 * Reserved usernames that are restricted for accounts or forms
 *
 * **Syntax**
 * - `Set<string>` – A collection of reserved usernames that the application can recognize and respond to
 *
 * **Usage**
 * ```ts
 * // Import the set of reserved usernames
 * import { RESERVED_USERNAME } from "@obvia/utilities"
 *
 * // Validate user input against reserved usernames
 * if (RESERVED_USERNAME.has(keyword)) {
 *  // Reject the request or show an error message
 *  throw new Error("Username is reserved")
 * }
 * ```
 */
export const RESERVED_USERNAME = new Set([])

/**
 * Reserved slugs that are restricted for accounts or forms
 *
 * **Syntax**
 * - `Set<string>` – A collection of reserved slugs that the application can recognize and respond to
 *
 * **Usage**
 * ```ts
 * // Import the set of reserved slugs
 * import { RESERVED_SLUG } from "@obvia/utilities"
 *
 * // Validate user input against reserved slugs
 * if (RESERVED_SLUG.has(keyword)) {
 *  // Reject the request or show an error message
 *  throw new Error("Slug is reserved")
 * }
 * ```
 */
export const RESERVED_SLUG = new Set([])

/**
 * Reserved subdomains that are restricted for accounts or forms
 *
 * **Syntax**
 * - `Set<string>` – A collection of reserved subdomains that the application can recognize and respond to
 *
 * **Usage**
 * ```ts
 * // Import the set of reserved subdomains
 * import { RESERVED_SUBDOMAIN } from "@obvia/utilities"
 *
 * // Validate user input against reserved subdomains
 * if (RESERVED_SUBDOMAIN.has(keyword)) {
 *  // Reject the request or show an error message
 *  throw new Error("Subdomain is reserved")
 * }
 * ```
 */
export const RESERVED_SUBDOMAIN = new Set([])

/**
 * Reserved email identifiers that are restricted for accounts or forms
 *
 * **Syntax**
 * - `Set<string>` – A collection of reserved email identifiers that the application can recognize and respond to
 *
 * **Usage**
 * ```ts
 * // Import the set of reserved email identifiers
 * import { RESERVED_EMAIL } from "@obvia/utilities"
 *
 * // Validate user input against reserved email identifiers
 * if (RESERVED_EMAIL.has(keyword)) {
 *  // Reject the request or show an error message
 *  throw new Error("Email adress is reserved")
 * }
 * ```
 */
export const RESERVED_EMAIL = new Set([])

/**
 * Reserved phone numbers that are restricted for accounts or forms
 *
 * **Syntax**
 * - `Set<string>` – A collection of reserved phone numbers that the application can recognize and respond to
 *
 * **Usage**
 * ```ts
 * // Import the set of reserved phone numbers
 * import { RESERVED_PHONE } from "@obvia/utilities"
 *
 * // Validate user input against reserved phone numbers
 * if (RESERVED_PHONE.has(keyword)) {
 *  // Reject the request or show an error message
 *  throw new Error("Phone number is reserved")
 * }
 * ```
 */
export const RESERVED_PHONE = new Set([])

/**
 * Reserved domains that are restricted for accounts or forms
 *
 * **Syntax**
 * - `Set<string>` – A collection of reserved domains that the application can recognize and respond to
 *
 * **Usage**
 * ```ts
 * // Import the set of reserved domains
 * import { RESERVED_DOMAIN } from "@obvia/utilities"
 *
 * // Validate user input against reserved domains
 * if (RESERVED_DOMAIN.has(keyword)) {
 *  // Reject the request or show an error message
 *  throw new Error("Domain is reserved")
 * }
 * ```
 */
export const RESERVED_DOMAIN = new Set([])

/**
 * Reserved keywords that are restricted for accounts or forms
 *
 * **Syntax**
 * - `Set<string>` – A collection of reserved keywords that the application can recognize and respond to
 *
 * **Usage**
 * ```ts
 * // Import the set of reserved keywords
 * import { RESERVED_KEYWORDS } from "@obvia/utilities"
 *
 * // Validate user input against reserved keywords
 * if (RESERVED_KEYWORDS.has(keyword)) {
 *  // Reject the request or show an error message
 *  throw new Error("Keyword is reserved")
 * }
 * ```
 */
export const RESERVED_KEYWORDS = new Set([])
