import { z } from "zod";

/**
 * Validates variables for the cart query.
 */
export const CartQueryInputSchema = z
  .object({
    /** Unique cart identifier value. */
    cart_id: z.string(),
  })
  .optional();

/**
 * Inferred input type for cart query variables.
 */
export type CartQueryInput = z.infer<typeof CartQueryInputSchema>;
