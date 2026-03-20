import { z } from "zod";
import {
  FilterEqualTypeInputSchema,
  FilterMatchTypeInputSchema,
  FilterRangeTypeInputSchema,
  GraphQLIntSchema,
} from "../common.js";

/**
 * Validates product filter attributes used by Magento search.
 */
export const ProductAttributeFilterInputSchema = z
  .object({
    /** Filter by category unique identifier. */
    category_uid: FilterEqualTypeInputSchema,
    /** Filter by product description text. */
    description: FilterMatchTypeInputSchema,
    /** Filter by product display name text. */
    name: FilterMatchTypeInputSchema,
    /** Filter by product price range values. */
    price: FilterRangeTypeInputSchema,
    /** Filter by product short description text. */
    short_description: FilterMatchTypeInputSchema,
    /** Filter by product SKU value. */
    sku: FilterEqualTypeInputSchema,
    /** Filter by product URL key value. */
    url_key: FilterEqualTypeInputSchema,
  })
  .optional();

/**
 * Inferred input type for product attribute filtering.
 */
export type ProductAttributeFilterInput = z.infer<
  typeof ProductAttributeFilterInputSchema
>;

/**
 * Validates variables for the products query.
 */
export const ProductsQueryInputSchema = z
  .object({
    /** Requested page number for product results. */
    currentPage: GraphQLIntSchema.optional(),
    /** Product attribute filters applied to search. */
    filter: ProductAttributeFilterInputSchema,
    /** Requested page size for product results. */
    pageSize: GraphQLIntSchema.optional(),
    /** Full text search term for products. */
    search: z.string().optional(),
    /** Product sort definition by attributes. */
    sort: z.record(z.string(), z.enum(["ASC", "DESC"])).optional(),
  })
  .optional();

/**
 * Inferred input type for products query variables.
 */
export type ProductsQueryInput = z.infer<typeof ProductsQueryInputSchema>;
