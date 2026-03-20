import { z } from "zod";
import { GraphQLIntSchema } from "../common.js";

/**
 * Validates variables for cancelOrder mutation.
 */
export const CancelOrderMutationInputSchema = z
  .object({
    /** Input payload for order cancellation mutation. */
    input: z
      .object({
        /** Order increment identifier value. */
        order_id: z.string().optional(),
      })
      .catchall(z.unknown()),
  })
  .optional();

/**
 * Inferred input type for cancelOrder mutation variables.
 */
export type CancelOrderMutationInput = z.infer<
  typeof CancelOrderMutationInputSchema
>;

/**
 * Validates variables for contactUs mutation.
 */
export const ContactUsMutationInputSchema = z
  .object({
    /** Input payload for contact request mutation. */
    input: z
      .object({
        /** Contact email address value. */
        email: z.string().email(),
        /** Contact message text value. */
        message: z.string(),
        /** Contact name value. */
        name: z.string().optional(),
      })
      .catchall(z.unknown()),
  })
  .optional();

/**
 * Inferred input type for contactUs mutation variables.
 */
export type ContactUsMutationInput = z.infer<
  typeof ContactUsMutationInputSchema
>;

/**
 * Validates variables for deletePaymentToken mutation.
 */
export const DeletePaymentTokenMutationInputSchema = z
  .object({
    /** Stored payment token hash value. */
    public_hash: z.string(),
  })
  .optional();

/**
 * Inferred input type for deletePaymentToken mutation variables.
 */
export type DeletePaymentTokenMutationInput = z.infer<
  typeof DeletePaymentTokenMutationInputSchema
>;

/**
 * Validates variables for reorderItems mutation.
 */
export const ReorderItemsMutationInputSchema = z
  .object({
    /** Order number value to reorder from. */
    orderNumber: z.string(),
  })
  .optional();

/**
 * Inferred input type for reorderItems mutation variables.
 */
export type ReorderItemsMutationInput = z.infer<
  typeof ReorderItemsMutationInputSchema
>;

/**
 * Validates variables for sendEmailToFriend mutation.
 */
export const SendEmailToFriendMutationInputSchema = z
  .object({
    /** Input payload for email to friend mutation. */
    input: z
      .object({
        /** Product identifier value. */
        product_id: GraphQLIntSchema.optional(),
        /** Recipient addresses value. */
        recipients: z.array(z.string().email()).optional(),
        /** Sender information payload value. */
        sender: z.record(z.string(), z.unknown()).optional(),
      })
      .catchall(z.unknown()),
  })
  .optional();

/**
 * Inferred input type for sendEmailToFriend mutation variables.
 */
export type SendEmailToFriendMutationInput = z.infer<
  typeof SendEmailToFriendMutationInputSchema
>;
