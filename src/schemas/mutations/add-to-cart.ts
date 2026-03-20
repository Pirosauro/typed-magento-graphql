import { z } from 'zod';

import { CartItemInputSchema } from '../common';

/**
 * Validates variables for addProductsToCart mutation.
 */
export const AddToCartMutationInputSchema = z
  .object({
    /** Unique cart identifier value. */
    cartId: z.string(),
    /** Items to be added to the cart. */
    cartItems: z.array(CartItemInputSchema.unwrap())
  })
  .optional();

/**
 * Inferred input type for addProductsToCart mutation variables.
 */
export type AddToCartMutationInput = z.infer<typeof AddToCartMutationInputSchema>;
