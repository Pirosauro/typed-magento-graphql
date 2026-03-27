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
        /** Contact message text value (required). */
        comment: z.string(),
        /** Contact email address value (required). */
        email: z.email(),
        /** Contact name value (required). */
        name: z.string(),
        /** Contact telephone number value (optional). */
        telephone: z.string().optional(),
      })
      .strict(),
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
 * Validates SendEmailToFriendRecipientInput values.
 */
export const SendEmailToFriendRecipientInputSchema = z
  .object({
    /** Recipient email address value. */
    email: z.email(),
    /** Recipient name value. */
    name: z.string(),
  })
  .strict();

/**
 * Inferred input type for SendEmailToFriendRecipientInput values.
 */
export type SendEmailToFriendRecipientInput = z.infer<
  typeof SendEmailToFriendRecipientInputSchema
>;

/**
 * Validates SendEmailToFriendSenderInput values.
 */
export const SendEmailToFriendSenderInputSchema = z
  .object({
    /** Sender email address value. */
    email: z.email(),
    /** Message text to be sent. */
    message: z.string(),
    /** Sender name value. */
    name: z.string(),
  })
  .strict();

/**
 * Inferred input type for SendEmailToFriendSenderInput values.
 */
export type SendEmailToFriendSenderInput = z.infer<
  typeof SendEmailToFriendSenderInputSchema
>;

/**
 * Validates variables for sendEmailToFriend mutation.
 */
export const SendEmailToFriendMutationInputSchema = z
  .object({
    /** Input payload for email to friend mutation. */
    input: z
      .object({
        /** Product identifier value (required). */
        product_id: GraphQLIntSchema,
        /** Recipient addresses value (required). */
        recipients: z.array(SendEmailToFriendRecipientInputSchema),
        /** Sender information payload value (required). */
        sender: SendEmailToFriendSenderInputSchema,
      })
      .strict(),
  })
  .optional();

/**
 * Inferred input type for sendEmailToFriend mutation variables.
 */
export type SendEmailToFriendMutationInput = z.infer<
  typeof SendEmailToFriendMutationInputSchema
>;
