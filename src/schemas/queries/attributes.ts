import { z } from 'zod';

/**
 * Validates variables for attributesForm query.
 */
export const AttributesFormQueryInputSchema = z
  .object({
    /** Form code value for attribute metadata lookup. */
    formCode: z.string()
  })
  .optional();

/**
 * Inferred input type for attributesForm query variables.
 */
export type AttributesFormQueryInput = z.infer<typeof AttributesFormQueryInputSchema>;

/**
 * Validates variables for attributesList query.
 */
export const AttributesListQueryInputSchema = z
  .object({
    /** Entity type value for attribute metadata lookup. */
    entityType: z.string(),
    /** Optional attribute filter payload value. */
    filters: z.record(z.string(), z.unknown()).optional()
  })
  .optional();

/**
 * Inferred input type for attributesList query variables.
 */
export type AttributesListQueryInput = z.infer<typeof AttributesListQueryInputSchema>;

/**
 * Validates variables for checkoutAgreements query.
 */
export const CheckoutAgreementsQueryInputSchema = z.object({}).optional();

/**
 * Inferred input type for checkoutAgreements query variables.
 */
export type CheckoutAgreementsQueryInput = z.infer<typeof CheckoutAgreementsQueryInputSchema>;

/**
 * Validates variables for customAttributeMetadataV2 query.
 */
export const CustomAttributeMetadataV2QueryInputSchema = z
  .object({
    /** Attribute definitions payload value. */
    attributes: z.array(z.record(z.string(), z.unknown())).optional()
  })
  .optional();

/**
 * Inferred input type for customAttributeMetadataV2 query variables.
 */
export type CustomAttributeMetadataV2QueryInput = z.infer<typeof CustomAttributeMetadataV2QueryInputSchema>;
