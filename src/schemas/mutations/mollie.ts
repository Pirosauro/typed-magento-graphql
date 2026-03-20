import { z } from 'zod';

/**
 * Validates variables for mollieApplePayValidation mutation.
 */
export const MollieApplePayValidationMutationInputSchema = z
  .object({
    /** Input payload for Mollie Apple Pay validation mutation. */
    input: z.record(z.string(), z.unknown())
  })
  .optional();

/**
 * Inferred input type for mollieApplePayValidation mutation variables.
 */
export type MollieApplePayValidationMutationInput = z.infer<typeof MollieApplePayValidationMutationInputSchema>;

/**
 * Validates variables for molliePaymentLinkRedirect mutation.
 */
export const MolliePaymentLinkRedirectMutationInputSchema = z
  .object({
    /** Input payload for Mollie payment link redirect mutation. */
    input: z.record(z.string(), z.unknown())
  })
  .optional();

/**
 * Inferred input type for molliePaymentLinkRedirect mutation variables.
 */
export type MolliePaymentLinkRedirectMutationInput = z.infer<typeof MolliePaymentLinkRedirectMutationInputSchema>;

/**
 * Validates variables for mollieProcessTransaction mutation.
 */
export const MollieProcessTransactionMutationInputSchema = z
  .object({
    /** Input payload for Mollie transaction processing mutation. */
    input: z.record(z.string(), z.unknown())
  })
  .optional();

/**
 * Inferred input type for mollieProcessTransaction mutation variables.
 */
export type MollieProcessTransactionMutationInput = z.infer<typeof MollieProcessTransactionMutationInputSchema>;

/**
 * Validates variables for mollieRestoreCart mutation.
 */
export const MollieRestoreCartMutationInputSchema = z
  .object({
    /** Input payload for Mollie cart restore mutation. */
    input: z.record(z.string(), z.unknown())
  })
  .optional();

/**
 * Inferred input type for mollieRestoreCart mutation variables.
 */
export type MollieRestoreCartMutationInput = z.infer<typeof MollieRestoreCartMutationInputSchema>;
