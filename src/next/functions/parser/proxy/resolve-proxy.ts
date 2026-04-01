import type { NextFetchEvent, NextRequest } from "next/server"
import {
  proxyLog,
  type RequestContext,
} from "../../../index"

/**
 * Type definition for a proxy function used in the proxy layer
 */
type ProxyFn = (request: NextRequest, event: NextFetchEvent, context: RequestContext) => Response | Promise<Response>

/**
 * Resolver interface definition
 */
export interface ProxyConfig {
  // A readable identifier for the proxy
  name: string

  // A collection of domain names that should be routed through this proxy
  hostnames: Set<string>

  // The function that handles requests when the domain matches
  proxy: ProxyFn
}

/**
 * Resolves the proxy function to run based on the incoming request's domain
 *
 * **Parameter**
 * - `request` - Next.js incoming request (used for request manipulation)
 * - `event` - Next.js fetch event (used for background tasks)
 * - `context` - Parsed request context (domain, path, query, etc.)
 *
 * **Usage**
 * ```ts
 * // Use it in your proxy layer
 * export default async function proxy(request: NextRequest, event: NextFetchEvent) {
 *    // Parse the incoming request
 *    const context = parse(request)
 *
 *    // Run the proxy function
 *    return resolveProxy(request, event, context)
 * }
 * ```
 */
export function resolveProxy(
  request: NextRequest,
  event: NextFetchEvent,
  context: RequestContext,
  proxyConfig: ProxyConfig[]
) {
  // Iterate over the resolver registry
  for (const { name, hostnames, proxy } of proxyConfig) {
    // Check if the current domain matches any of the hostnames in the resolver registry
    if (hostnames.has(context.domain)) {
      // Log the event to the console
      proxyLog({ name, request, context })

      // Run the proxy function
      return proxy(request, event, context)
    }
  }
}
