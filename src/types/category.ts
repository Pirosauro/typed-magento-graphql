import type { GraphQLFloat, GraphQLInt, GraphQLString, SearchResultPageInfo } from './common';
import type { CmsBlock } from './cms';
import type { Product } from './product';

/**
 * Single breadcrumb item for category navigation.
 */
export interface Breadcrumb {
  /** Category level for this breadcrumb. */
  category_level?: GraphQLInt;
  /** Category name for this breadcrumb. */
  category_name?: GraphQLString;
  /** Category unique identifier for this breadcrumb. */
  category_uid?: GraphQLString;
  /** Category URL key for this breadcrumb. */
  category_url_key?: GraphQLString;
  /** Category URL path for this breadcrumb. */
  category_url_path?: GraphQLString;
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
  available_sort_by?: GraphQLString[];
  /** Breadcrumbs for this category location. */
  breadcrumbs?: Breadcrumb[];
  /** Canonical URL for this category page. */
  canonical_url?: GraphQLString;
  /** Child categories under the current node. */
  children?: CategoryTree[];
  /** Number of child categories in string form. */
  children_count?: GraphQLString;
  /** CMS block attached to this category. */
  cms_block?: CmsBlock;
  /** Custom layout update file value. */
  custom_layout_update_file?: GraphQLString;
  /** Default sort field for this category. */
  default_sort_by?: GraphQLString;
  /** Category description text. */
  description?: GraphQLString;
  /** Display mode value for this category. */
  display_mode?: GraphQLString;
  /** Category filter price range step value. */
  filter_price_range?: GraphQLFloat;
  /** Category image URL value. */
  image?: GraphQLString;
  /** Menu visibility flag as integer. */
  include_in_menu?: GraphQLInt;
  /** Anchor flag as integer value. */
  is_anchor?: GraphQLInt;
  /** Landing page identifier value. */
  landing_page?: GraphQLInt;
  /** Depth level of this category node. */
  level?: GraphQLInt;
  /** Meta description value for SEO. */
  meta_description?: GraphQLString;
  /** Meta keywords value for SEO. */
  meta_keywords?: GraphQLString;
  /** Meta title value for SEO. */
  meta_title?: GraphQLString;
  /** Category name displayed to users. */
  name?: GraphQLString;
  /** Full category path value. */
  path?: GraphQLString;
  /** Category path within the current store. */
  path_in_store?: GraphQLString;
  /** Position among sibling categories. */
  position?: GraphQLInt;
  /** Number of visible products in this category. */
  product_count?: GraphQLInt;
  /** Product collection for this category. */
  products?: CategoryProducts;
  /** Redirect code for routed category URLs. */
  redirect_code?: GraphQLInt;
  /** Relative routed URL for this category. */
  relative_url?: GraphQLString;
  /** Routed entity type value. */
  type?: GraphQLString;
  /** Unique category identifier. */
  uid?: GraphQLString;
  /** Category URL key segment. */
  url_key?: GraphQLString;
  /** Category URL path in storefront. */
  url_path?: GraphQLString;
  /** Category URL suffix value. */
  url_suffix?: GraphQLString;
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
