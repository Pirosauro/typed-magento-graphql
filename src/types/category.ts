import type { GraphQLFloat, GraphQLInt, SearchResultPageInfo } from './common';
import type { CmsBlock } from './cms';
import type { Product } from './product';

/**
 * Single breadcrumb item for category navigation.
 */
export interface Breadcrumb {
  /** Category level for this breadcrumb. */
  category_level?: GraphQLInt;
  /** Category name for this breadcrumb. */
  category_name?: string;
  /** Category URL key for this breadcrumb. */
  category_url_key?: string;
  /** Category URL path for this breadcrumb. */
  category_url_path?: string;
}

/** 
 * Category products collection with pagination details. 
 */
export interface CategoryProducts {
  /** Product items assigned to this category. */
  items?: Product[];
  /** Pagination information for category products. */
  page_info?: SearchResultPageInfo;
  /** Total number of visible category products. */
  total_count?: GraphQLInt;
}

/**
 * Single category node in a category tree.
 */
export interface CategoryTree {
  /** Available sort keys for category product listings. */
  available_sort_by?: string[];
  /** Breadcrumbs for this category location. */
  breadcrumbs?: Breadcrumb[];
  /** Canonical URL for this category page. */
  canonical_url?: string;
  /** Child categories under the current node. */
  children?: CategoryTree[];
  /** Number of child categories in string form. */
  children_count?: string;
  /** CMS block attached to this category. */
  cms_block?: CmsBlock;
  /** Custom layout update file value. */
  custom_layout_update_file?: string;
  /** Default sort field for this category. */
  default_sort_by?: string;
  /** Category description text. */
  description?: string;
  /** Display mode value for this category. */
  display_mode?: string;
  /** Category filter price range step value. */
  filter_price_range?: GraphQLFloat;
  /** Category image URL value. */
  image?: string;
  /** Menu visibility flag as integer. */
  include_in_menu?: GraphQLInt;
  /** Anchor flag as integer value. */
  is_anchor?: GraphQLInt;
  /** Landing page identifier value. */
  landing_page?: GraphQLInt;
  /** Depth level of this category node. */
  level?: GraphQLInt;
  /** Meta description value for SEO. */
  meta_description?: string;
  /** Meta keywords value for SEO. */
  meta_keywords?: string;
  /** Meta title value for SEO. */
  meta_title?: string;
  /** Category name displayed to users. */
  name?: string;
  /** Full category path value. */
  path?: string;
  /** Category path within the current store. */
  path_in_store?: string;
  /** Position among sibling categories. */
  position?: GraphQLInt;
  /** Number of visible products in this category. */
  product_count?: GraphQLInt;
  /** Product collection for this category. */
  products?: CategoryProducts;
  /** Redirect code for routed category URLs. */
  redirect_code?: GraphQLInt;
  /** Relative routed URL for this category. */
  relative_url?: string;
  /** Routed entity type value. */
  type?: string;
  /** Unique category identifier. */
  uid?: string;
  /** Category URL key segment. */
  url_key?: string;
  /** Category URL path in storefront. */
  url_path?: string;
  /** Category URL suffix value. */
  url_suffix?: string;
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
