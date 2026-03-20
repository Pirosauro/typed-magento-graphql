import { z } from 'zod';

/**
 * Validates variables for availableStores query.
 */
export const AvailableStoresQueryInputSchema = z
  .object({
    /** Flag to filter by current store group value. */
    useCurrentGroup: z.boolean().optional()
  })
  .optional();

/**
 * Inferred input type for availableStores query variables.
 */
export type AvailableStoresQueryInput = z.infer<typeof AvailableStoresQueryInputSchema>;

/**
 * Validates variables for countries query.
 */
export const CountriesQueryInputSchema = z.object({}).optional();

/**
 * Inferred input type for countries query variables.
 */
export type CountriesQueryInput = z.infer<typeof CountriesQueryInputSchema>;

/**
 * Validates variables for country query.
 */
export const CountryQueryInputSchema = z
  .object({
    /** Country identifier value. */
    id: z.string().optional()
  })
  .optional();

/**
 * Inferred input type for country query variables.
 */
export type CountryQueryInput = z.infer<typeof CountryQueryInputSchema>;

/**
 * Validates variables for currency query.
 */
export const CurrencyQueryInputSchema = z.object({}).optional();

/**
 * Inferred input type for currency query variables.
 */
export type CurrencyQueryInput = z.infer<typeof CurrencyQueryInputSchema>;

/**
 * Validates variables for isEmailAvailable query.
 */
export const IsEmailAvailableQueryInputSchema = z
  .object({
    /** Email address value to check. */
    email: z.string().email()
  })
  .optional();

/**
 * Inferred input type for isEmailAvailable query variables.
 */
export type IsEmailAvailableQueryInput = z.infer<typeof IsEmailAvailableQueryInputSchema>;
