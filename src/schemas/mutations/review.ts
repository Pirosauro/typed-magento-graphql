import { z } from "zod";

/**
 * Validates variables for createProductReview mutation.
 */
export const CreateProductReviewMutationInputSchema = z
  .object({
    /** Input payload for product review creation mutation. */
    input: z
      .object({
        /** Product SKU value for the review. */
        sku: z.string(),
        /** Review summary value. */
        summary: z.string(),
        /** Review text value. */
        text: z.string(),
      })
      .catchall(z.unknown()),
  })
  .optional();

/**
 * Inferred input type for createProductReview mutation variables.
 */
export type CreateProductReviewMutationInput = z.infer<
  typeof CreateProductReviewMutationInputSchema
>;
