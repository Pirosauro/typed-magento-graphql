import { z } from "zod";

/**
 * Validates variables for addProductsToWishlist mutation.
 */
export const AddProductsToWishlistMutationInputSchema = z
  .object({
    /** Wishlist identifier value. */
    wishlistId: z.string(),
    /** Wishlist item input payload value. */
    wishlistItems: z.array(z.record(z.string(), z.unknown())),
  })
  .optional();

/**
 * Inferred input type for addProductsToWishlist mutation variables.
 */
export type AddProductsToWishlistMutationInput = z.infer<
  typeof AddProductsToWishlistMutationInputSchema
>;

/**
 * Validates variables for addWishlistItemsToCart mutation.
 */
export const AddWishlistItemsToCartMutationInputSchema = z
  .object({
    /** Wishlist identifier value. */
    wishlistId: z.string(),
    /** Wishlist item identifiers to add value. */
    wishlistItemIds: z.array(z.string()).optional(),
  })
  .optional();

/**
 * Inferred input type for addWishlistItemsToCart mutation variables.
 */
export type AddWishlistItemsToCartMutationInput = z.infer<
  typeof AddWishlistItemsToCartMutationInputSchema
>;

/**
 * Validates variables for removeProductsFromWishlist mutation.
 */
export const RemoveProductsFromWishlistMutationInputSchema = z
  .object({
    /** Wishlist identifier value. */
    wishlistId: z.string(),
    /** Wishlist item identifiers to remove value. */
    wishlistItemsIds: z.array(z.string()),
  })
  .optional();

/**
 * Inferred input type for removeProductsFromWishlist mutation variables.
 */
export type RemoveProductsFromWishlistMutationInput = z.infer<
  typeof RemoveProductsFromWishlistMutationInputSchema
>;

/**
 * Validates variables for updateProductsInWishlist mutation.
 */
export const UpdateProductsInWishlistMutationInputSchema = z
  .object({
    /** Wishlist identifier value. */
    wishlistId: z.string(),
    /** Wishlist item updates payload value. */
    wishlistItems: z.array(z.record(z.string(), z.unknown())),
  })
  .optional();

/**
 * Inferred input type for updateProductsInWishlist mutation variables.
 */
export type UpdateProductsInWishlistMutationInput = z.infer<
  typeof UpdateProductsInWishlistMutationInputSchema
>;
