import { z } from 'zod';

/**
 * Validates variables for applyCouponToCart mutation.
 */
export const ApplyCouponToCartMutationInputSchema = z
  .object({
    /** Input payload for coupon application mutation. */
    input: z.object({
      /** Unique cart identifier value. */
      cart_id: z.string(),
      /** Coupon code value to apply. */
      coupon_code: z.string()
    })
  })
  .optional();

/**
 * Inferred input type for applyCouponToCart mutation variables.
 */
export type ApplyCouponToCartMutationInput = z.infer<typeof ApplyCouponToCartMutationInputSchema>;

/**
 * Validates variables for removeCouponFromCart mutation.
 */
export const RemoveCouponFromCartMutationInputSchema = z
  .object({
    /** Input payload for coupon removal mutation. */
    input: z.object({
      /** Unique cart identifier value. */
      cart_id: z.string()
    })
  })
  .optional();

/**
 * Inferred input type for removeCouponFromCart mutation variables.
 */
export type RemoveCouponFromCartMutationInput = z.infer<typeof RemoveCouponFromCartMutationInputSchema>;
