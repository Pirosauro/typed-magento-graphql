import { z } from "zod";
import { GraphQLIntSchema } from "../common.js";

/**
 * Validates variables for the categories query.
 */
export const CategoriesQueryInputSchema = z
  .object({
    /** Requested page number for category results. */
    currentPage: GraphQLIntSchema.optional(),
    /** Category filters applied to search. */
    filters: z.record(z.string(), z.unknown()).optional(),
    /** Requested page size for category results. */
    pageSize: GraphQLIntSchema.optional(),
  })
  .optional();

/**
 * Inferred input type for categories query variables.
 */
export type CategoriesQueryInput = z.infer<typeof CategoriesQueryInputSchema>;
