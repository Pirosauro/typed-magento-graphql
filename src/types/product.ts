import type {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  Money,
  SearchResultPageInfo
} from './common';

/** Product description text that may contain HTML. */
export interface ComplexTextValue {
  /** Text that can contain HTML tags. */
  html?: GraphQLString;
}

/** Attribute value metadata used by the `custom_attributesV2` field. */
export interface AttributeValueInterface {
  /** Attribute code value. */
  code?: GraphQLString;
}

/** Product custom attributes container. */
export interface ProductCustomAttributes {
  /** Errors when retrieving custom attributes metadata. */
  errors?: Array<{
    /** Attribute metadata error code value. */
    code?: GraphQLString;
    /** Error message value. */
    message?: GraphQLString;
  }>;
  /** Requested custom attributes. */
  items?: AttributeValueInterface[];
}

/** Product discount values. */
export interface ProductDiscount {
  /** Absolute discount amount for the product. */
  amount_off?: GraphQLFloat;
  /** Discount percent off for the product. */
  percent_off?: GraphQLFloat;
}

/** Represents a price tier used for quantity-based pricing. */
export interface TierPrice {
  /** Price tier discount definition. */
  discount?: ProductDiscount;
  /** Final tier price. */
  final_price?: Money;
  /** Minimum quantity needed to reach this tier. */
  quantity?: GraphQLFloat;
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
    label?: GraphQLString;
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
  label?: GraphQLString;
  /** Image URL for display. */
  url?: GraphQLString;
}

/** Represents a link between products. */
export interface ProductLinksInterface {
  /** Link type (related, associated, upsell, crosssell). */
  link_type?: GraphQLString;
  /** SKU of the linked product. */
  linked_product_sku?: GraphQLString;
  /** Linked product type (simple, virtual, etc.). */
  linked_product_type?: GraphQLString;
  /** Position within the list of product links. */
  position?: GraphQLInt;
  /** Identifier of the linked product. */
  sku?: GraphQLString;
}

/** URL rewrite details for product/category routes. */
export interface UrlRewrite {
  /** Request parameters for the rewrite. */
  parameters?: Array<{
    /** Parameter name. */
    name?: GraphQLString;
    /** Parameter value. */
    value?: GraphQLString;
  }>;
  /** Request URL. */
  url?: GraphQLString;
}

/** Minimal product media gallery entry. */
export interface MediaGalleryEntry {
  /** Entry content payload. */
  content?: {
    /** Image content (base64) value. */
    base64_encoded_data?: GraphQLString;
    /** Image file name value. */
    name?: GraphQLString;
    /** Image media type value. */
    type?: GraphQLString;
  } | {
    /** Media type for videos. */
    media_type?: GraphQLString;
    /** Video description value. */
    video_description?: GraphQLString;
    /** Video metadata value. */
    video_metadata?: GraphQLString;
    /** Video provider value. */
    video_provider?: GraphQLString;
    /** Video title value. */
    video_title?: GraphQLString;
    /** Video URL value. */
    video_url?: GraphQLString;
  };
  /** Indicates whether the image is hidden from view. */
  disabled?: GraphQLBoolean;
  /** File path value. */
  file?: GraphQLString;
  /** Alternative label for the entry. */
  label?: GraphQLString;
  /** Media type (image or video). */
  media_type?: GraphQLString;
  /** Entry position. */
  position?: GraphQLInt;
  /** Unique ID for this media gallery entry. */
  uid?: GraphQLID;
  /** Video content when the entry is a video. */
  video_content?: {
    /** Must be external-video when used. */
    media_type?: GraphQLString;
    /** Video description value. */
    video_description?: GraphQLString;
    /** Optional metadata. */
    video_metadata?: GraphQLString;
    /** Video provider. */
    video_provider?: GraphQLString;
    /** Video title. */
    video_title?: GraphQLString;
    /** Video URL. */
    video_url?: GraphQLString;
  };
}

/** Stock availability status for products. */
export type ProductStockStatus = 'IN_STOCK' | 'OUT_OF_STOCK';

/** Product interface representation for storefront queries. */
export interface Product {
  /** Relative canonical URL for the product. */
  canonical_url?: GraphQLString;
  /** Categories assigned to a product. */
  categories?: Array<{
    /** Category name. */
    name?: GraphQLString;
    /** Unique category identifier. */
    uid?: GraphQLID;
    /** Category URL key. */
    url_key?: GraphQLString;
    /** Category URL path. */
    url_path?: GraphQLString;
  }>;
  /** Product country of origin value. */
  country_of_manufacture?: GraphQLString;
  /** Crosssell products list. */
  crosssell_products?: Product[];
  /** Product custom attributes container. */
  custom_attributesV2?: ProductCustomAttributes;
  /** Detailed product description (may contain HTML). */
  description?: ComplexTextValue;
  /** Gift message availability indicator. */
  gift_message_available?: GraphQLBoolean;
  /** Main product image for the PDP. */
  image?: ProductImage;
  /** Maximum quantity allowed in shopping cart. */
  max_sale_qty?: GraphQLFloat;
  /** Product media gallery entries. */
  media_gallery?: MediaGalleryEntry[];
  /** Product meta description value. */
  meta_description?: GraphQLString;
  /** Product meta keyword value. */
  meta_keyword?: GraphQLString;
  /** Product meta title value. */
  meta_title?: GraphQLString;
  /** Minimum quantity allowed in shopping cart. */
  min_sale_qty?: GraphQLFloat;
  /** Product name. */
  name?: GraphQLString;
  /** Product new listing start date. */
  new_from_date?: GraphQLString;
  /** Product new listing end date. */
  new_to_date?: GraphQLString;
  /** Amount of available stock. */
  only_x_left_in_stock?: GraphQLFloat;
  /** Options container placement info. */
  options_container?: GraphQLString;
  /** Range of prices for this product. */
  price_range?: PriceRange;
  /** Product price tiers (quantity-based). */
  price_tiers?: TierPrice[];
  /** Product links for related/upsell blocks. */
  product_links?: ProductLinksInterface[];
  /** Product available quantity. */
  quantity?: GraphQLFloat;
  /** Average rating summary. */
  rating_summary?: GraphQLFloat;
  /** Related products list. */
  related_products?: Product[];
  /** Product review count. */
  review_count?: GraphQLInt;
  /** Short description (may contain HTML). */
  short_description?: ComplexTextValue;
  /** Product SKU. */
  sku?: GraphQLString;
  /** Product small image. */
  small_image?: ProductImage;
  /** Discounted price of the product. */
  special_price?: GraphQLFloat;
  /** End date for special pricing. */
  special_to_date?: GraphQLString;
  /** Stock status. */
  stock_status?: ProductStockStatus;
  /** File name of swatch image. */
  swatch_image?: GraphQLString;
  /** Product thumbnail image. */
  thumbnail?: ProductImage;
  /** Unique ID for this product. */
  uid?: GraphQLID;
  /** Product upsell products. */
  upsell_products?: Product[];
  /** URL key for routing. */
  url_key?: GraphQLString;
  /** URL rewrites list. */
  url_rewrites?: UrlRewrite[];
  /** URL suffix for routing. */
  url_suffix?: GraphQLString;
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
