import kleur from "kleur"

/**
 * Options for proxyLog function
 */
export interface ProxyLogOptions {
  domain: string
  headers?: Headers
  path?: string
}

/**
 * Options for proxy log function
 */
export interface ProxyLog {
  /** Proxy name identifier */
  name: string
  /** Incoming request object */
  request: Request
  /** Parsed request context metadata */
  context: ProxyLogOptions
}

/**
 * Format a proxy log message with timestamp and request details
 *
 * **Parameters**
 * - `name` – Proxy name
 * - `request` – Incoming next.js request object
 * - `context` – Parsed request metadata (e.g. domain, path)
 *
 * **Usage**
 * ```ts
 * import { proxyLog } from "@obvia/utilities"
 *
 * // Log a proxy request with domain and path
 * proxyLog({
 *   name: "my-proxy",
 *   request,
 *   context: { domain: "example.com", path: "/api" }
 * })
 * ```
 */
export function proxyLog({
  name,
  request,
  context,
}: ProxyLog) {
  // Timestamp
  const time = new Date().toLocaleString()

  // Domain
  const domain = context.domain || context.headers?.get('x-middleware-request-host') || "obvia.dev"

  console.log(
    // Timestamp + Tag
    kleur.gray(`[${time}]`) + " " + kleur.cyan().bold("[Proxy]") + " " +
    // Middleware
    kleur.yellow().bold(name) + " → " +
    // Method
    `Method = ${kleur.green().bold(request.method)} | ` +
    // Domain
    `Domain = ${kleur.magenta(domain)} | ` +
    // Path
    `Path = ${kleur.blue().bold(context?.path ?? "")} ` +
    // Rewrite
    `→ (${kleur.gray(`${context?.domain || ""}${context?.path == "/" ? "" : context?.path || "-"}`)})`
  )
}
