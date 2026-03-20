import type { GraphQLInt, Money, SearchResultPageInfo } from './common';

/** Product description text that may contain HTML. */
export interface ComplexTextValue {
  /** Text that can contain HTML tags. */
  html?: string;
}

/** Attribute value metadata used by the `custom_attributesV2` field. */
export interface AttributeValueInterface {
  /** Attribute code value. */
  code?: string;
}

/** Product custom attributes container. */
export interface ProductCustomAttributes {
  /** Errors when retrieving custom attributes metadata. */
  errors?: Array<{
    /** Attribute metadata error code value. */
    code?: string;
    /** Error message value. */
    message?: string;
  }>;
  /** Requested custom attributes. */
  items?: AttributeValueInterface[];
}

/** Product discount values. */
export interface ProductDiscount {
  /** Absolute discount amount for the product. */
  amount_off?: number;
  /** Discount percent off for the product. */
  percent_off?: number;
}

/** Represents a price tier used for quantity-based pricing. */
export interface TierPrice {
  /** Price tier discount definition. */
  discount?: ProductDiscount;
  /** Final tier price. */
  final_price?: Money;
  /** Minimum quantity needed to reach this tier. */
  quantity?: number;
}

/** Price discount data used by product price ranges. */
export interface ProductPrice {
  /** Product price discount for this price. */
  discount?: ProductDiscount;
  /** Final product price after discounts. */
  final_price?: Money;
  /** Fixed product taxes that can be applied to the price. */
  fixed_product_taxes?: Array<{
    /** Tax amount. */
    amount?: Money;
    /** Tax label. */
    label?: string;
  }>;
  /** Regular product price before discounts. */
  regular_price?: Money;
}

/** Product price range from minimum to maximum. */
export interface PriceRange {
  /** Maximum price in the range. */
  maximum_price?: ProductPrice;
  /** Minimum price in the range. */
  minimum_price?: ProductPrice;
}

/** Lightweight product image model. */
export interface ProductImage {
  /** Image label shown on storefront. */
  label?: string;
  /** Image URL for display. */
  url?: string;
}

/** Represents a link between products. */
export interface ProductLinksInterface {
  /** Link type (related, associated, upsell, crosssell). */
  link_type?: string;
  /** SKU of the linked product. */
  linked_product_sku?: string;
  /** Linked product type (simple, virtual, etc.). */
  linked_product_type?: string;
  /** Position within the list of product links. */
  position?: GraphQLInt;
  /** Identifier of the linked product. */
  sku?: string;
}

/** URL rewrite details for product/category routes. */
export interface UrlRewrite {
  /** Request parameters for the rewrite. */
  parameters?: Array<{
    /** Parameter name. */
    name?: string;
    /** Parameter value. */
    value?: string;
  }>;
  /** Request URL. */
  url?: string;
}

/** Minimal product media gallery entry. */
export interface MediaGalleryEntry {
  /** Entry content payload. */
  content?: {
    /** Image content (base64) value. */
    base64_encoded_data?: string;
    /** Image file name value. */
    name?: string;
    /** Image media type value. */
    type?: string;
  } | {
    /** Media type for videos. */
    media_type?: string;
    /** Video description value. */
    video_description?: string;
    /** Video metadata value. */
    video_metadata?: string;
    /** Video provider value. */
    video_provider?: string;
    /** Video title value. */
    video_title?: string;
    /** Video URL value. */
    video_url?: string;
  };
  /** Indicates whether the image is hidden from view. */
  disabled?: boolean;
  /** File path value. */
  file?: string;
  /** Alternative label for the entry. */
  label?: string;
  /** Media type (image or video). */
  media_type?: string;
  /** Entry position. */
  position?: GraphQLInt;
  /** Unique ID for this media gallery entry. */
  uid?: string;
  /** Video content when the entry is a video. */
  video_content?: {
    /** Must be external-video when used. */
    media_type?: string;
    /** Video description value. */
    video_description?: string;
    /** Optional metadata. */
    video_metadata?: string;
    /** Video provider. */
    video_provider?: string;
    /** Video title. */
    video_title?: string;
    /** Video URL. */
    video_url?: string;
  };
}

/** Stock availability status for products. */
export type ProductStockStatus = 'IN_STOCK' | 'OUT_OF_STOCK';

/** Product interface representation for storefront queries. */
export interface Product {
  /** Relative canonical URL for the product. */
  canonical_url?: string;
  /** Categories assigned to a product. */
  categories?: Array<{
    /** Category name. */
    name?: string;
    /** Unique category identifier. */
    uid?: string;
    /** Category URL key. */
    url_key?: string;
    /** Category URL path. */
    url_path?: string;
  }>;
  /** Product country of origin value. */
  country_of_manufacture?: string;
  /** Crosssell products list. */
  crosssell_products?: Product[];
  /** Product custom attributes container. */
  custom_attributesV2?: ProductCustomAttributes;
  /** Detailed product description (may contain HTML). */
  description?: ComplexTextValue;
  /** Gift message availability indicator. */
  gift_message_available?: boolean;
  /** Main product image for the PDP. */
  image?: ProductImage;
  /** Maximum quantity allowed in shopping cart. */
  max_sale_qty?: number;
  /** Product media gallery entries. */
  media_gallery?: MediaGalleryEntry[];
  /** Product meta description value. */
  meta_description?: string;
  /** Product meta keyword value. */
  meta_keyword?: string;
  /** Product meta title value. */
  meta_title?: string;
  /** Minimum quantity allowed in shopping cart. */
  min_sale_qty?: number;
  /** Product name. */
  name?: string;
  /** Product new listing start date. */
  new_from_date?: string;
  /** Product new listing end date. */
  new_to_date?: string;
  /** Amount of available stock. */
  only_x_left_in_stock?: number;
  /** Options container placement info. */
  options_container?: string;
  /** Range of prices for this product. */
  price_range?: PriceRange;
  /** Product price tiers (quantity-based). */
  price_tiers?: TierPrice[];
  /** Product links for related/upsell blocks. */
  product_links?: ProductLinksInterface[];
  /** Product available quantity. */
  quantity?: number;
  /** Average rating summary. */
  rating_summary?: number;
  /** Related products list. */
  related_products?: Product[];
  /** Product review count. */
  review_count?: GraphQLInt;
  /** Short description (may contain HTML). */
  short_description?: ComplexTextValue;
  /** Product SKU. */
  sku?: string;
  /** Product small image. */
  small_image?: ProductImage;
  /** Discounted price of the product. */
  special_price?: number;
  /** End date for special pricing. */
  special_to_date?: string;
  /** Stock status. */
  stock_status?: ProductStockStatus;
  /** File name of swatch image. */
  swatch_image?: string;
  /** Product thumbnail image. */
  thumbnail?: ProductImage;
  /** Unique ID for this product. */
  uid?: string;
  /** Product upsell products. */
  upsell_products?: Product[];
  /** URL key for routing. */
  url_key?: string;
  /** URL rewrites list. */
  url_rewrites?: UrlRewrite[];
  /** URL suffix for routing. */
  url_suffix?: string;
}

/** Product search response payload. */
export interface Products {
  /** Product list for current page. */
  items?: Product[];
  /** Pagination information for products. */
  page_info?: SearchResultPageInfo;
  /** Total number of matching products. */
  total_count?: GraphQLInt;
}

/** Response shape for products query. */
export interface ProductsQuery {
  /** Product search result collection. */
  products?: Products;
}
