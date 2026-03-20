import { z } from "zod";

/**
 * Validates PaymentMethodInput values for payment mutations.
 */
export const PaymentMethodInputSchema = z
  .object({
    /** Internal payment method code value. */
    code: z.string(),
    /** Optional purchase order number value. */
    purchase_order_number: z.string().optional(),
  })
  .catchall(z.unknown())
  .optional();

/**
 * Inferred input type for PaymentMethodInput values.
 */
export type PaymentMethodInput = z.infer<typeof PaymentMethodInputSchema>;

/**
 * Validates variables for setPaymentMethodOnCart mutation.
 */
export const SetPaymentMethodMutationInputSchema = z
  .object({
    /** Input payload for payment method mutation. */
    input: z.object({
      /** Unique cart identifier value. */
      cart_id: z.string(),
      /** Payment method payload object. */
      payment_method: PaymentMethodInputSchema.unwrap(),
    }),
  })
  .optional();

/**
 * Inferred input type for setPaymentMethodOnCart mutation variables.
 */
export type SetPaymentMethodMutationInput = z.infer<
  typeof SetPaymentMethodMutationInputSchema
>;
