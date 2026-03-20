import { z } from 'zod';

import { CartItemInputSchema, GraphQLFloatSchema } from '../common';

/**
 * Validates variables for createGuestCart mutation.
 */
export const CreateGuestCartMutationInputSchema = z
  .object({
    /** Input payload for guest cart creation mutation. */
    input: z
      .object({
        /** Optional client-generated cart unique identifier value. */
        cart_uid: z.string().optional()
      })
      .optional()
  })
  .optional();

/**
 * Inferred input type for createGuestCart mutation variables.
 */
export type CreateGuestCartMutationInput = z.infer<typeof CreateGuestCartMutationInputSchema>;

/**
 * Validates CartItemUpdateInput values for cart item update mutations.
 */
export const CartItemUpdateInputSchema = z
  .object({
    /** Cart item unique identifier value. */
    cart_item_uid: z.string().optional(),
    /** New quantity value for the cart item. */
    quantity: GraphQLFloatSchema.optional()
  })
  .optional();

/**
 * Inferred input type for CartItemUpdateInput values.
 */
export type CartItemUpdateInput = z.infer<typeof CartItemUpdateInputSchema>;

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


/**
 * Validates variables for updateCartItems mutation.
 */
export const UpdateCartItemsMutationInputSchema = z
  .object({
    /** Input payload for cart items update mutation. */
    input: z.object({
      /** Cart items array payload. */
      cart_items: z.array(CartItemUpdateInputSchema.unwrap()),
      /** Unique cart identifier value. */
      cart_id: z.string()
    })
  })
  .optional();

/**
 * Inferred input type for updateCartItems mutation variables.
 */
export type UpdateCartItemsMutationInput = z.infer<typeof UpdateCartItemsMutationInputSchema>;


/**
 * Validates variables for removeItemFromCart mutation.
 */
export const RemoveItemFromCartMutationInputSchema = z
  .object({
    /** Input payload for cart item removal mutation. */
    input: z.object({
      /** Cart item unique identifier value. */
      cart_item_uid: z.string(),
      /** Unique cart identifier value. */
      cart_id: z.string()
    })
  })
  .optional();

/**
 * Inferred input type for removeItemFromCart mutation variables.
 */
export type RemoveItemFromCartMutationInput = z.infer<typeof RemoveItemFromCartMutationInputSchema>;

/**
 * Validates variables for setGuestEmailOnCart mutation.
 */
export const SetGuestEmailOnCartMutationInputSchema = z
  .object({
    /** Input payload for guest email assignment mutation. */
    input: z.object({
      /** Unique cart identifier value. */
      cart_id: z.string(),
      /** Guest email address value. */
      email: z.email()
    })
  })
  .optional();

/**
 * Inferred input type for setGuestEmailOnCart mutation variables.
 */
export type SetGuestEmailOnCartMutationInput = z.infer<typeof SetGuestEmailOnCartMutationInputSchema>;
