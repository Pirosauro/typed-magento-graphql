import { z } from "zod";

/**
 * Validates variables for compareList query.
 */
export const CompareListQueryInputSchema = z
  .object({
    /** Compare list unique identifier value. */
    uid: z.string(),
  })
  .optional();

/**
 * Inferred input type for compareList query variables.
 */
export type CompareListQueryInput = z.infer<typeof CompareListQueryInputSchema>;

/**
 * Validates variables for customerDownloadableProducts query.
 */
export const CustomerDownloadableProductsQueryInputSchema = z
  .object({})
  .optional();

/**
 * Inferred input type for customerDownloadableProducts query variables.
 */
export type CustomerDownloadableProductsQueryInput = z.infer<
  typeof CustomerDownloadableProductsQueryInputSchema
>;

/**
 * Validates variables for customerPaymentTokens query.
 */
export const CustomerPaymentTokensQueryInputSchema = z.object({}).optional();

/**
 * Inferred input type for customerPaymentTokens query variables.
 */
export type CustomerPaymentTokensQueryInput = z.infer<
  typeof CustomerPaymentTokensQueryInputSchema
>;

/**
 * Validates variables for wishlist query.
 */
export const WishlistQueryInputSchema = z.object({}).optional();

/**
 * Inferred input type for wishlist query variables.
 */
export type WishlistQueryInput = z.infer<typeof WishlistQueryInputSchema>;
