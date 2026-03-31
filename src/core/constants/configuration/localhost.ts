/**
 * Geolocation data for the local **development** environment
 *
 * **Syntax**
 * - `object` – Contains continent, country, city, region, latitude, and longitude information
 *
 * **Usage**
 * ```ts
 * // Import the local geolocation data
 * import { LOCALHOST_GEO_DATA } from "@obvia/utilities"
 *
 * // Get geolocation data from the request object or fallback to local data
 * const geo = process.env.VERCEL === "1" ? geolocation(request) : LOCALHOST_GEO_DATA
 *
 * // Or, use destructuring to access specific fields directly
 * const { country } = process.env.VERCEL === "1" ? geolocation(request) : LOCALHOST_GEO_DATA
 * ```
 */
export const LOCALHOST_GEO_DATA = {
  continent   : "EU",
  country     : "TR",
  city        : "Istanbul",
  flag        : "tr",
  region      : "34",
  latitude    : "41.0082",
  longitude   : "28.9784",
  postalCode  : "34000"
}

/**
 * IP address for the local **development** environment
 *
 * **Syntax**
 * - `string` – Represents the IP address
 *
 * **Usage**
 * ```ts
 * // Import the local IP address
 * import { LOCALHOST_IP } from "@obvia/utilities"
 *
 * // Get the IP address from the request object or fallback to local value
 * const ip = process.env.VERCEL === "1" ? ipAddress(request) : LOCALHOST_IP
 * ```
 */
export const LOCALHOST_IP = "127.0.0.1"
