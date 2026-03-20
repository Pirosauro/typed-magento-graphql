import { z } from 'zod';

import { CartItemInputSchema } from '../common';

/**
 * Validates variables for addProductsToCart mutation.
 */
export const AddToCartMutationInputSchema = z
  .object({
    /** Items to be added to the cart. */
    cartItems: z.array(CartItemInputSchema.unwrap()),
    /** Unique cart identifier value. */
    cartId: z.string()
  })
  .optional();

/**
 * Inferred input type for addProductsToCart mutation variables.
 */
export type AddToCartMutationInput = z.infer<typeof AddToCartMutationInputSchema>;
