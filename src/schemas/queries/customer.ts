import { z } from "zod";

/**
 * Validates variables for the customer query.
 */
export const CustomerQueryInputSchema = z.object({}).optional();

/**
 * Inferred input type for customer query variables.
 */
export type CustomerQueryInput = z.infer<typeof CustomerQueryInputSchema>;
