/**
 * Common response type aliases for GraphQL scalars.
 */
export type GraphQLID = string;
export type GraphQLInt = number;
export type GraphQLFloat = number;

/**
 * Monetary amount with currency code.
 */
export interface Money {
  /** Currency code in ISO format. */
  currency?: string;
  /** Numeric amount value. */
  value?: GraphQLFloat;
}

/**
 * Generic search pagination details.
 */
export interface SearchResultPageInfo {
  /** Current page number in the result set. */
  current_page?: GraphQLInt;
  /** Number of items requested per page. */
  page_size?: GraphQLInt;
  /** Total number of pages available. */
  total_pages?: GraphQLInt;
}

/**
 * Minimal country information used by cart addresses.
 */
export interface CartAddressCountry {
  /** Two-letter country code. */
  code?: string;
  /** Display label for the country. */
  label?: string;
}

/**
 * Minimal region information used by cart addresses.
 */
export interface CartAddressRegion {
  /** Region code value. */
  code?: string;
  /** Region display label. */
  label?: string;
  /** Internal region identifier. */
  region_id?: GraphQLInt;
}
