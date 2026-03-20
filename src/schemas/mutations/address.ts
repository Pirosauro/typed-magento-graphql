import { z } from 'zod';

import { CartAddressInputSchema, GraphQLIntSchema } from '../common';

/**
 * Validates BillingAddressInput values for billing mutations.
 */
export const BillingAddressInputSchema = z
  .object({
    /** Full billing address object value. */
    address: CartAddressInputSchema,
    /** Saved customer address id for billing. */
    customer_address_id: GraphQLIntSchema.optional(),
    /** Flag for using shipping as billing address. */
    same_as_shipping: z.boolean().optional(),
    /** Flag for using billing as shipping address. */
    use_for_shipping: z.boolean().optional()
  })
  .optional();

/**
 * Inferred input type for BillingAddressInput values.
 */
export type BillingAddressInput = z.infer<typeof BillingAddressInputSchema>;

/**
 * Validates ShippingAddressInput values for shipping mutations.
 */
export const ShippingAddressInputSchema = z
  .object({
    /** Full shipping address object value. */
    address: CartAddressInputSchema,
    /** Saved customer address id for shipping. */
    customer_address_id: GraphQLIntSchema.optional(),
    /** Optional customer notes for shipping address. */
    customer_notes: z.string().optional(),
    /** Optional pickup location code value. */
    pickup_location_code: z.string().optional()
  })
  .optional();

/**
 * Inferred input type for ShippingAddressInput values.
 */
export type ShippingAddressInput = z.infer<typeof ShippingAddressInputSchema>;

/**
 * Validates variables for setBillingAddressOnCart mutation.
 */
export const SetBillingAddressMutationInputSchema = z
  .object({
    /** Input payload for billing address mutation. */
    input: z.object({
      /** Billing address payload object. */
      billing_address: BillingAddressInputSchema.unwrap(),
      /** Unique cart identifier value. */
      cart_id: z.string()
    })
  })
  .optional();

/**
 * Inferred input type for setBillingAddressOnCart mutation variables.
 */
export type SetBillingAddressMutationInput = z.infer<typeof SetBillingAddressMutationInputSchema>;

/**
 * Validates variables for setShippingAddressesOnCart mutation.
 */
export const SetShippingAddressMutationInputSchema = z
  .object({
    /** Input payload for shipping addresses mutation. */
    input: z.object({
      /** Unique cart identifier value. */
      cart_id: z.string(),
      /** Shipping addresses array payload. */
      shipping_addresses: z.array(ShippingAddressInputSchema.unwrap())
    })
  })
  .optional();

/**
 * Inferred input type for setShippingAddressesOnCart mutation variables.
 */
export type SetShippingAddressMutationInput = z.infer<typeof SetShippingAddressMutationInputSchema>;
