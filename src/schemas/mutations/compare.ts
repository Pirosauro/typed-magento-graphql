import { z } from 'zod';

/**
 * Validates variables for addProductsToCompareList mutation.
 */
export const AddProductsToCompareListMutationInputSchema = z
  .object({
    /** Input payload for adding products to compare list mutation. */
    input: z.object({
      /** Product identifiers to add value. */
      products: z.array(z.string()).optional(),
      /** Compare list unique identifier value. */
      uid: z.string()
    })
  })
  .optional();

/**
 * Inferred input type for addProductsToCompareList mutation variables.
 */
export type AddProductsToCompareListMutationInput = z.infer<typeof AddProductsToCompareListMutationInputSchema>;

/**
 * Validates variables for assignCompareListToCustomer mutation.
 */
export const AssignCompareListToCustomerMutationInputSchema = z
  .object({
    /** Compare list unique identifier value. */
    uid: z.string()
  })
  .optional();

/**
 * Inferred input type for assignCompareListToCustomer mutation variables.
 */
export type AssignCompareListToCustomerMutationInput = z.infer<typeof AssignCompareListToCustomerMutationInputSchema>;

/**
 * Validates variables for createCompareList mutation.
 */
export const CreateCompareListMutationInputSchema = z
  .object({
    /** Input payload for compare list creation mutation. */
    input: z
      .object({
        /** Optional compare list item identifiers value. */
        products: z.array(z.string()).optional()
      })
      .optional()
  })
  .optional();

/**
 * Inferred input type for createCompareList mutation variables.
 */
export type CreateCompareListMutationInput = z.infer<typeof CreateCompareListMutationInputSchema>;

/**
 * Validates variables for deleteCompareList mutation.
 */
export const DeleteCompareListMutationInputSchema = z
  .object({
    /** Compare list unique identifier value. */
    uid: z.string()
  })
  .optional();

/**
 * Inferred input type for deleteCompareList mutation variables.
 */
export type DeleteCompareListMutationInput = z.infer<typeof DeleteCompareListMutationInputSchema>;

/**
 * Validates variables for removeProductsFromCompareList mutation.
 */
export const RemoveProductsFromCompareListMutationInputSchema = z
  .object({
    /** Input payload for removing products from compare list mutation. */
    input: z.object({
      /** Product identifiers to remove value. */
      products: z.array(z.string()).optional(),
      /** Compare list unique identifier value. */
      uid: z.string()
    })
  })
  .optional();

/**
 * Inferred input type for removeProductsFromCompareList mutation variables.
 */
export type RemoveProductsFromCompareListMutationInput = z.infer<typeof RemoveProductsFromCompareListMutationInputSchema>;
