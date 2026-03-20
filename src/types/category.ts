import type { GraphQLInt, SearchResultPageInfo } from './common';

/**
 * Single category node in a category tree.
 */
export interface CategoryTree {
  /** Child categories under the current node. */
  children?: CategoryTree[];
  /** Category description text. */
  description?: string;
  /** Category name displayed to users. */
  name?: string;
  /** Category URL key segment. */
  url_key?: string;
  /** Category URL path in storefront. */
  url_path?: string;
  /** Unique category identifier. */
  uid?: string;
}

/**
 * Category query result with pagination.
 */
export interface CategoryResult {
  /** Category items matching filters. */
  items?: CategoryTree[];
  /** Pagination information for categories. */
  page_info?: SearchResultPageInfo;
  /** Total number of matching categories. */
  total_count?: GraphQLInt;
}

/**
 * Response shape for categories query.
 */
export interface CategoriesQuery {
  /** Category result payload. */
  categories?: CategoryResult;
}
