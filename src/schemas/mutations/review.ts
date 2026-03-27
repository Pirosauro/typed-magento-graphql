import { z } from "zod";

/**
 * Validates ProductReviewRatingInput values for product review mutations.
 */
export const ProductReviewRatingInputSchema = z
  .object({
    /** An encoded rating ID. */
    id: z.string(),
    /** An encoded rating value ID. */
    value_id: z.string(),
  })
  .strict();

/**
 * Inferred input type for ProductReviewRatingInput values.
 */
export type ProductReviewRatingInput = z.infer<
  typeof ProductReviewRatingInputSchema
>;

/**
 * Validates variables for createProductReview mutation.
 */
export const CreateProductReviewMutationInputSchema = z
  .object({
    /** Input payload for product review creation mutation. */
    input: z
      .object({
        /** Customer's nickname. Defaults to customer name if logged in. */
        nickname: z.string(),
        /** Ratings details by category (e.g., Price: 5 stars, Quality: 4 stars). */
        ratings: z.array(ProductReviewRatingInputSchema),
        /** Product SKU value for the review. */
        sku: z.string(),
        /** Review summary (title) value. */
        summary: z.string(),
        /** Review text value. */
        text: z.string(),
      })
      .strict(),
  })
  .optional();

/**
 * Inferred input type for createProductReview mutation variables.
 */
export type CreateProductReviewMutationInput = z.infer<
  typeof CreateProductReviewMutationInputSchema
>;
