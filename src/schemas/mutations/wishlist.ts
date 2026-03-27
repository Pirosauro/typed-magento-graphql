import { z } from "zod";
import { GraphQLFloatSchema } from "../common.js";

/**
 * Validates EnteredOptionInput values for wishlist items.
 */
export const EnteredOptionInputSchema = z
  .object({
    /** The unique ID of the entered option. */
    uid: z.string().optional(),
    /** The entered value for the option. */
    value: z.string().optional(),
  })
  .passthrough()
  .optional();

/**
 * Inferred input type for EnteredOptionInput values.
 */
export type EnteredOptionInput = z.infer<typeof EnteredOptionInputSchema>;

/**
 * Validates WishlistItemInput values for wishlist mutations.
 */
export const WishlistItemInputSchema = z
  .object({
    /** Entered options list for product customization. */
    entered_options: z.array(EnteredOptionInputSchema).optional(),
    /** Parent SKU value for child products. */
    parent_sku: z.string().optional(),
    /** Quantity value for the wishlist item (required). */
    quantity: GraphQLFloatSchema,
    /** Selected options list for product variants. */
    selected_options: z.array(z.string()).optional(),
    /** SKU value for the wishlist item (required). */
    sku: z.string(),
  })
  .strict();

/**
 * Inferred input type for WishlistItemInput values.
 */
export type WishlistItemInput = z.infer<typeof WishlistItemInputSchema>;

/**
 * Validates variables for addProductsToWishlist mutation.
 */
export const AddProductsToWishlistMutationInputSchema = z
  .object({
    /** Wishlist identifier value. */
    wishlistId: z.string(),
    /** Wishlist item input payload value. */
    wishlistItems: z.array(WishlistItemInputSchema),
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
    wishlistItems: z.array(WishlistItemInputSchema),
  })
  .optional();

/**
 * Inferred input type for updateProductsInWishlist mutation variables.
 */
export type UpdateProductsInWishlistMutationInput = z.infer<
  typeof UpdateProductsInWishlistMutationInputSchema
>;
