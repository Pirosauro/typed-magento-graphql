import { z } from 'zod';

/**
 * Validates variables for the storeConfig query.
 */
export const StoreConfigQueryInputSchema = z.object({}).optional();

/**
 * Inferred input type for storeConfig query variables.
 */
export type StoreConfigQueryInput = z.infer<typeof StoreConfigQueryInputSchema>;
