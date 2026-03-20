import { z } from "zod";

/**
 * Validates variables for the route query.
 */
export const RouteQueryInputSchema = z
  .object({
    /** Relative storefront URL to resolve. */
    url: z.string(),
  })
  .optional();

/**
 * Inferred input type for route query variables.
 */
export type RouteQueryInput = z.infer<typeof RouteQueryInputSchema>;
