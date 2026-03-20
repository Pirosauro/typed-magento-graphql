import { z } from 'zod';

/**
 * Validates variables for the customerCart query.
 */
export const CustomerCartQueryInputSchema = z.object({}).optional();

/**
 * Inferred input type for customerCart query variables.
 */
export type CustomerCartQueryInput = z.infer<typeof CustomerCartQueryInputSchema>;
