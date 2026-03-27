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
 * Validates AttributeValueInput for custom attributes.
 */
export const AttributeValueInputSchema = z
  .object({
    /** The attribute code. */
    attribute_code: z.string().optional(),
    /** The attribute value. */
    value: z.unknown().optional(),
  })
  .passthrough()
  .optional();

/**
 * Inferred input type for AttributeValueInput.
 */
export type AttributeValueInput = z.infer<typeof AttributeValueInputSchema>;

/**
 * Validates variables for createCustomerV2 mutation.
 */
export const CreateCustomerMutationInputSchema = z
  .object({
    /** Input payload for customer creation mutation. */
    input: z
      .object({
        /** Customer email address value (required). */
        email: z.email(),
        /** Customer first name value (required). */
        firstname: z.string(),
        /** Customer last name value (required). */
        lastname: z.string(),
        /** Customer password value. */
        password: z.string().optional(),
        /** Customer's date of birth value. */
        date_of_birth: z.string().optional(),
        /** Customer's date of birth value (alternative format). */
        dob: z.string().optional(),
        /** Customer's gender value (Male - 1, Female - 2). */
        gender: GraphQLIntSchema.optional(),
        /** Customer's middle name value. */
        middlename: z.string().optional(),
        /** Customer's prefix/title value (e.g., Dr., Mr., Mrs.). */
        prefix: z.string().optional(),
        /** Customer's suffix value (e.g., Sr., Jr., III). */
        suffix: z.string().optional(),
        /** Customer's Tax/VAT number value. */
        taxvat: z.string().optional(),
        /** Newsletter subscription preference. */
        is_subscribed: z.boolean().optional(),
        /** Remote shopping assistance preference. */
        allow_remote_shopping_assistance: z.boolean().optional(),
        /** Custom attributes array value. */
        custom_attributes: z.array(AttributeValueInputSchema).optional(),
      })
      .strict(),
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
    email: z.email(),
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
    email: z.email(),
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
    email: z.email(),
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
    email: z.email(),
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
        /** Customer's date of birth value. */
        date_of_birth: z.string().optional(),
        /** Customer's date of birth value (alternative format). */
        dob: z.string().optional(),
        /** Customer first name value. */
        firstname: z.string().optional(),
        /** Customer's gender value (Male - 1, Female - 2). */
        gender: GraphQLIntSchema.optional(),
        /** Newsletter subscription preference. */
        is_subscribed: z.boolean().optional(),
        /** Customer last name value. */
        lastname: z.string().optional(),
        /** Customer's middle name value. */
        middlename: z.string().optional(),
        /** Customer's prefix/title value (e.g., Dr., Mr., Mrs.). */
        prefix: z.string().optional(),
        /** Customer's suffix value (e.g., Sr., Jr., III). */
        suffix: z.string().optional(),
        /** Customer's Tax/VAT number value. */
        taxvat: z.string().optional(),
        /** Remote shopping assistance preference. */
        allow_remote_shopping_assistance: z.boolean().optional(),
        /** Custom attributes array value. */
        custom_attributes: z.array(AttributeValueInputSchema).optional(),
      })
      .strict(),
  })
  .optional();

/**
 * Inferred input type for updateCustomerV2 mutation variables.
 */
export type UpdateCustomerMutationInput = z.infer<
  typeof UpdateCustomerMutationInputSchema
>;

/**
 * Validates variables for revokeCustomerToken mutation.
 * This mutation takes no parameters.
 */
export const RevokeCustomerTokenMutationInputSchema = z.object({}).optional();

/**
 * Inferred input type for revokeCustomerToken mutation variables.
 */
export type RevokeCustomerTokenMutationInput = z.infer<
  typeof RevokeCustomerTokenMutationInputSchema
>;
