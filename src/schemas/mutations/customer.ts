import { z } from "zod";
import { GraphQLIntSchema } from "../common.js";

/**
 * Validates variables for changeCustomerPassword mutation.
 */
export const ChangeCustomerPasswordMutationInputSchema = z
  .object({
    /** Current customer password value. */
    currentPassword: z.string(),
    /** New customer password value. */
    newPassword: z.string(),
  })
  .optional();

/**
 * Inferred input type for changeCustomerPassword mutation variables.
 */
export type ChangeCustomerPasswordMutationInput = z.infer<
  typeof ChangeCustomerPasswordMutationInputSchema
>;

/**
 * Validates basic customer address values for customer address mutations.
 */
export const CustomerAddressMutationInputSchema = z
  .object({
    /** Address city value. */
    city: z.string().optional(),
    /** Address company value. */
    company: z.string().optional(),
    /** Address country code value. */
    country_code: z.string(),
    /** Address fax value. */
    fax: z.string().optional(),
    /** Address first name value. */
    firstname: z.string(),
    /** Address last name value. */
    lastname: z.string(),
    /** Address middle name value. */
    middlename: z.string().optional(),
    /** Address postal code value. */
    postcode: z.string().optional(),
    /** Address prefix value. */
    prefix: z.string().optional(),
    /** Address region value. */
    region: z.string().optional(),
    /** Address region id value. */
    region_id: GraphQLIntSchema.optional(),
    /** Address street lines value. */
    street: z.array(z.string()),
    /** Address suffix value. */
    suffix: z.string().optional(),
    /** Address telephone value. */
    telephone: z.string().optional(),
    /** Address VAT id value. */
    vat_id: z.string().optional(),
  })
  .optional();

/**
 * Inferred input type for customer address mutation values.
 */
export type CustomerAddressMutationInput = z.infer<
  typeof CustomerAddressMutationInputSchema
>;

/**
 * Validates variables for createCustomerAddress mutation.
 */
export const CreateCustomerAddressMutationInputSchema = z
  .object({
    /** Input payload for customer address creation mutation. */
    input: CustomerAddressMutationInputSchema.unwrap(),
  })
  .optional();

/**
 * Inferred input type for createCustomerAddress mutation variables.
 */
export type CreateCustomerAddressMutationInput = z.infer<
  typeof CreateCustomerAddressMutationInputSchema
>;

/**
 * Validates variables for createCustomerV2 mutation.
 */
export const CreateCustomerMutationInputSchema = z
  .object({
    /** Input payload for customer creation mutation. */
    input: z
      .object({
        /** Customer email address value. */
        email: z.string().email(),
        /** Customer first name value. */
        firstname: z.string(),
        /** Customer last name value. */
        lastname: z.string(),
        /** Customer password value. */
        password: z.string(),
      })
      .catchall(z.unknown()),
  })
  .optional();

/**
 * Inferred input type for createCustomerV2 mutation variables.
 */
export type CreateCustomerMutationInput = z.infer<
  typeof CreateCustomerMutationInputSchema
>;

/**
 * Validates variables for deleteCustomerAddress mutation.
 */
export const DeleteCustomerAddressMutationInputSchema = z
  .object({
    /** Customer address identifier value. */
    id: GraphQLIntSchema,
  })
  .optional();

/**
 * Inferred input type for deleteCustomerAddress mutation variables.
 */
export type DeleteCustomerAddressMutationInput = z.infer<
  typeof DeleteCustomerAddressMutationInputSchema
>;

/**
 * Validates variables for generateCustomerToken mutation.
 */
export const GenerateCustomerTokenMutationInputSchema = z
  .object({
    /** Customer email address value. */
    email: z.string().email(),
    /** Customer password value. */
    password: z.string(),
  })
  .optional();

/**
 * Inferred input type for generateCustomerToken mutation variables.
 */
export type GenerateCustomerTokenMutationInput = z.infer<
  typeof GenerateCustomerTokenMutationInputSchema
>;

/**
 * Validates variables for requestPasswordResetEmail mutation.
 */
export const RequestPasswordResetEmailMutationInputSchema = z
  .object({
    /** Customer email address value. */
    email: z.string().email(),
  })
  .optional();

/**
 * Inferred input type for requestPasswordResetEmail mutation variables.
 */
export type RequestPasswordResetEmailMutationInput = z.infer<
  typeof RequestPasswordResetEmailMutationInputSchema
>;

/**
 * Validates variables for resetPassword mutation.
 */
export const ResetPasswordMutationInputSchema = z
  .object({
    /** Customer email address value. */
    email: z.string().email(),
    /** New customer password value. */
    newPassword: z.string(),
    /** Reset password token value. */
    resetPasswordToken: z.string(),
  })
  .optional();

/**
 * Inferred input type for resetPassword mutation variables.
 */
export type ResetPasswordMutationInput = z.infer<
  typeof ResetPasswordMutationInputSchema
>;

/**
 * Validates variables for subscribeEmailToNewsletter mutation.
 */
export const SubscribeEmailToNewsletterMutationInputSchema = z
  .object({
    /** Newsletter email address value. */
    email: z.string().email(),
  })
  .optional();

/**
 * Inferred input type for subscribeEmailToNewsletter mutation variables.
 */
export type SubscribeEmailToNewsletterMutationInput = z.infer<
  typeof SubscribeEmailToNewsletterMutationInputSchema
>;

/**
 * Validates variables for updateCustomerAddress mutation.
 */
export const UpdateCustomerAddressMutationInputSchema = z
  .object({
    /** Customer address identifier value. */
    id: GraphQLIntSchema,
    /** Input payload for customer address update mutation. */
    input: CustomerAddressMutationInputSchema,
  })
  .optional();

/**
 * Inferred input type for updateCustomerAddress mutation variables.
 */
export type UpdateCustomerAddressMutationInput = z.infer<
  typeof UpdateCustomerAddressMutationInputSchema
>;

/**
 * Validates variables for updateCustomerV2 mutation.
 */
export const UpdateCustomerMutationInputSchema = z
  .object({
    /** Input payload for customer update mutation. */
    input: z
      .object({
        /** Customer first name value. */
        firstname: z.string().optional(),
        /** Customer last name value. */
        lastname: z.string().optional(),
      })
      .catchall(z.unknown()),
  })
  .optional();

/**
 * Inferred input type for updateCustomerV2 mutation variables.
 */
export type UpdateCustomerMutationInput = z.infer<
  typeof UpdateCustomerMutationInputSchema
>;
