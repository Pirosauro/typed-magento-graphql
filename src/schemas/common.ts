import { z } from 'zod';

/**
 * Shared schema for GraphQL identifier values.
 */
export const GraphQLIDSchema = z.string();

/**
 * Shared schema for GraphQL integer values.
 */
export const GraphQLIntSchema = z.number().int();

/**
 * Shared schema for GraphQL float values.
 */
export const GraphQLFloatSchema = z.number();

/**
 * Shared schema for equal filter inputs.
 */
export const FilterEqualTypeInputSchema = z
  .object({
    /** Filter value to compare with equality. */
    eq: z.string().optional(),
    /** Multiple values to compare with inclusion. */
    in: z.array(z.string()).optional()
  })
  .optional();

/**
 * Shared schema for match filter inputs.
 */
export const FilterMatchTypeInputSchema = z
  .object({
    /** Match value for text search. */
    match: z.string().optional()
  })
  .optional();

/**
 * Shared schema for range filter inputs.
 */
export const FilterRangeTypeInputSchema = z
  .object({
    /** Lower bound for range filtering. */
    from: z.string().optional(),
    /** Upper bound for range filtering. */
    to: z.string().optional()
  })
  .optional();

/**
 * Shared schema for cart address input fields.
 */
export const CartAddressInputSchema = z
  .object({
    /** City value for the address. */
    city: z.string(),
    /** Company value for the address. */
    company: z.string().optional(),
    /** Country code value for the address. */
    country_code: z.string(),
    /** Fax value for the address. */
    fax: z.string().optional(),
    /** First name value for the address. */
    firstname: z.string(),
    /** Last name value for the address. */
    lastname: z.string(),
    /** Middle name value for the address. */
    middlename: z.string().optional(),
    /** Postal code value for the address. */
    postcode: z.string().optional(),
    /** Prefix value for the address. */
    prefix: z.string().optional(),
    /** Region name value for the address. */
    region: z.string().optional(),
    /** Region id value for the address. */
    region_id: GraphQLIntSchema.optional(),
    /** Save in address book preference. */
    save_in_address_book: z.boolean().optional(),
    /** Street lines for the address. */
    street: z.array(z.string()),
    /** Suffix value for the address. */
    suffix: z.string().optional(),
    /** Telephone value for the address. */
    telephone: z.string().optional(),
    /** VAT id value for the address. */
    vat_id: z.string().optional()
  })
  .optional();

/**
 * Shared schema for cart item input fields.
 */
export const CartItemInputSchema = z
  .object({
    /** Entered options list for product customization. */
    entered_options: z.array(z.object({ uid: z.string().optional(), value: z.string().optional() })).optional(),
    /** Parent SKU value for child products. */
    parent_sku: z.string().optional(),
    /** Quantity value for cart item. */
    quantity: GraphQLFloatSchema,
    /** Selected options list for product variants. */
    selected_options: z.array(z.string()).optional(),
    /** SKU value for cart item. */
    sku: z.string()
  })
  .optional();
