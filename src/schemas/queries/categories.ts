import { z } from "zod";
import {
  FilterEqualTypeInputSchema,
  FilterMatchTypeInputSchema,
  GraphQLIntSchema,
} from "../common.js";

/**
 * Validates category filter attributes used by Magento search.
 */
export const CategoryFilterInputSchema = z
  .object({
    /** Filter by the unique category ID for a `CategoryInterface` object. */
    category_uid: FilterEqualTypeInputSchema,
    /** Deprecated: use 'category_uid' to filter uniquely identifiers of categories. */
    ids: FilterEqualTypeInputSchema,
    /** Filter by the display name of the category. */
    name: FilterMatchTypeInputSchema,
    /** Filter by the unique parent category ID for a `CategoryInterface` object. */
    parent_category_uid: FilterEqualTypeInputSchema,
    /** Filter by the unique parent category ID for a `CategoryInterface` object (alternative). */
    parent_id: FilterEqualTypeInputSchema,
    /** Filter by the part of the URL that identifies the category. */
    url_key: FilterEqualTypeInputSchema,
    /** Filter by the URL path for the category. */
    url_path: FilterEqualTypeInputSchema,
  })
  .optional();

/**
 * Inferred input type for category attribute filtering.
 */
export type CategoryFilterInput = z.infer<typeof CategoryFilterInputSchema>;

/**
 * Validates variables for the categories query.
 */
export const CategoriesQueryInputSchema = z
  .object({
    /** Requested page number for category results. */
    currentPage: GraphQLIntSchema.optional(),
    /** Category filters applied to search. */
    filters: CategoryFilterInputSchema,
    /** Requested page size for category results. */
    pageSize: GraphQLIntSchema.optional(),
  })
  .optional();

/**
 * Inferred input type for categories query variables.
 */
export type CategoriesQueryInput = z.infer<typeof CategoriesQueryInputSchema>;
