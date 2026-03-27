/**
 * Common response type aliases for GraphQL scalars.
 */
export type GraphQLID = string;
export type GraphQLInt = number;
export type GraphQLFloat = number;
export type GraphQLString = string;
export type GraphQLBoolean = boolean;

/**
 * Monetary amount with currency code.
 */
export interface Money {
  /** Currency code in ISO format. */
  currency?: GraphQLString;
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
  code?: GraphQLString;
  /** Display label for the country. */
  label?: GraphQLString;
}

/**
 * Minimal region information used by cart addresses.
 */
export interface CartAddressRegion {
  /** Region code value. */
  code?: GraphQLString;
  /** Region display label. */
  label?: GraphQLString;
  /** Internal region identifier. */
  region_id?: GraphQLInt;
}

/**
 * Discount type enumeration for cart operations.
 */
export type CartDiscountType = "ITEM" | "SHIPPING" | GraphQLString;

/**
 * Price type enumeration for product pricing.
 */
export type PriceTypeEnum = "FIXED" | "PERCENT" | GraphQLString;

/**
 * Scope type enumeration for store configuration.
 */
export type ScopeTypeEnum = "GLOBAL" | "WEBSITE" | "STORE";

/**
 * Sort order enumeration.
 */
export type SortEnum = "ASC" | "DESC" | GraphQLString;
