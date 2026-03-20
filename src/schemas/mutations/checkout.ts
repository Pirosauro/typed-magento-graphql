import { z } from 'zod';

/**
 * Validates ShippingMethodInput values for shipping method mutations.
 */
export const ShippingMethodInputSchema = z
  .object({
    /** Shipping carrier code value. */
    carrier_code: z.string(),
    /** Shipping method code value. */
    method_code: z.string()
  })
  .optional();

/**
 * Inferred input type for ShippingMethodInput values.
 */
export type ShippingMethodInput = z.infer<typeof ShippingMethodInputSchema>;

/**
 * Validates variables for setShippingMethodsOnCart mutation.
 */
export const SetShippingMethodsOnCartMutationInputSchema = z
  .object({
    /** Input payload for shipping method assignment mutation. */
    input: z.object({
      /** Unique cart identifier value. */
      cart_id: z.string(),
      /** Shipping methods array payload. */
      shipping_methods: z.array(ShippingMethodInputSchema.unwrap())
    })
  })
  .optional();

/**
 * Inferred input type for setShippingMethodsOnCart mutation variables.
 */
export type SetShippingMethodsOnCartMutationInput = z.infer<typeof SetShippingMethodsOnCartMutationInputSchema>;

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
