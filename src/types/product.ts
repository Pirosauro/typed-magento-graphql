import type { GraphQLInt, Money, SearchResultPageInfo } from './common';

/**
 * Product price values used in listings.
 */
export interface ProductPrice {
  /** Final product price after discounts. */
  final_price?: Money;
  /** Regular product price before discounts. */
  regular_price?: Money;
}

/**
 * Product price range from minimum to maximum.
 */
export interface PriceRange {
  /** Maximum price in the range. */
  maximum_price?: ProductPrice;
  /** Minimum price in the range. */
  minimum_price?: ProductPrice;
}

/**
 * Lightweight product image model.
 */
export interface ProductImage {
  /** Image label shown on storefront. */
  label?: string;
  /** Image URL for display. */
  url?: string;
}

/**
 * Lightweight product representation for product queries.
 */
export interface Product {
  /** Product canonical name. */
  name?: string;
  /** Product price range details. */
  price_range?: PriceRange;
  /** Product small image data. */
  small_image?: ProductImage;
  /** Product stock keeping unit. */
  sku?: string;
  /** Product URL key segment. */
  url_key?: string;
}

/**
 * Product search response payload.
 */
export interface Products {
  /** Product list for current page. */
  items?: Product[];
  /** Pagination information for products. */
  page_info?: SearchResultPageInfo;
  /** Total number of matching products. */
  total_count?: GraphQLInt;
}

/**
 * Response shape for products query.
 */
export interface ProductsQuery {
  /** Product search result collection. */
  products?: Products;
}
