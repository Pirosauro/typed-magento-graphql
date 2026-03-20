import { z } from 'zod';

/**
 * Validates variables for createPaypalExpressToken mutation.
 */
export const CreatePaypalExpressTokenMutationInputSchema = z
  .object({
    /** Input payload for PayPal Express token creation mutation. */
    input: z.record(z.string(), z.unknown())
  })
  .optional();

/**
 * Inferred input type for createPaypalExpressToken mutation variables.
 */
export type CreatePaypalExpressTokenMutationInput = z.infer<typeof CreatePaypalExpressTokenMutationInputSchema>;

/**
 * Validates variables for createPayflowProToken mutation.
 */
export const CreatePayflowProTokenMutationInputSchema = z
  .object({
    /** Input payload for Payflow Pro token creation mutation. */
    input: z.record(z.string(), z.unknown())
  })
  .optional();

/**
 * Inferred input type for createPayflowProToken mutation variables.
 */
export type CreatePayflowProTokenMutationInput = z.infer<typeof CreatePayflowProTokenMutationInputSchema>;

/**
 * Validates variables for handlePayflowProResponse mutation.
 */
export const HandlePayflowProResponseMutationInputSchema = z
  .object({
    /** Input payload for Payflow Pro response handling mutation. */
    input: z.record(z.string(), z.unknown())
  })
  .optional();

/**
 * Inferred input type for handlePayflowProResponse mutation variables.
 */
export type HandlePayflowProResponseMutationInput = z.infer<typeof HandlePayflowProResponseMutationInputSchema>;
