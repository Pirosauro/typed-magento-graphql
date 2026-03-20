import { z } from 'zod';

/**
 * Validates variables for placeOrder mutation.
 */
export const PlaceOrderMutationInputSchema = z
  .object({
    /** Input payload for order placement. */
    input: z.object({
      /** Unique cart identifier value. */
      cart_id: z.string()
    })
  })
  .optional();

/**
 * Inferred input type for placeOrder mutation variables.
 */
export type PlaceOrderMutationInput = z.infer<typeof PlaceOrderMutationInputSchema>;
