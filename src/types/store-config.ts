/** Frequently used storefront configuration values. */
export interface StoreConfig {
  /** Contains scripts that must be included before the closing `<body>` tag. */
  absolute_footer?: string;
  /** Indicates whether guests can write product reviews. */
  allow_guests_to_write_product_reviews?: string;
  /** Enables autocomplete on login and forgot password forms. */
  autocomplete_on_storefront?: boolean;
  /** The base currency code. */
  base_currency_code?: string;
  /** Base URL for relative links to the `base_url`. */
  base_link_url?: string;
  /** Fully-qualified base URL for media files. */
  base_media_url?: string;
  /** Fully-qualified base URL for static view files. */
  base_static_url?: string;
  /** Fully-qualified base URL for this store view. */
  base_url?: string;
  /** checkout/cart/delete_quote_after: quote lifetime in days. */
  cart_expires_in_days?: number;
  /** Controls how cart summary quantities are displayed. */
  cart_summary_display_quantity?: number;
  /** The default sort order of the search results list. */
  catalog_default_sort_by?: string;
  /** Indicates whether the Contact Us form is enabled. */
  contact_enabled?: boolean;
  /** The copyright statement shown at the bottom of pages. */
  copyright?: string;
  /** Indicates whether new customer accounts need confirmation. */
  create_account_confirmation?: boolean;
  /** Customer access token lifetime. */
  customer_access_token_lifetime?: number;
  /** Default country for your store. */
  default_country?: string;
  /** Default site meta description. */
  default_description?: string;
  /** Default currency code displayed to customers. */
  default_display_currency_code?: string;
  /** Store meta keywords (comma-separated). */
  default_keywords?: string;
  /** Default site title. */
  default_title?: string;
  /** Controls the display of the demo store notice at the top of pages. */
  demonotice?: number;
  /** Display product prices in catalog configuration. */
  display_product_prices_in_catalog?: number;
  /** Display shipping prices configuration. */
  display_shipping_prices?: number;
  /** Indicates whether checkout agreements are enabled. */
  is_checkout_agreements_enabled?: boolean;
  /** Indicates whether guest checkout is enabled. */
  is_guest_checkout_enabled?: boolean;
  /** Indicates whether one-page checkout is enabled. */
  is_one_page_checkout_enabled?: boolean;
  /** The store locale. */
  locale?: string;
  /** Minicart display flag in the checkout sidebar. */
  minicart_display?: boolean;
  /** Maximum number of items in the minicart. */
  minicart_max_items?: number;
  /** Minimum number of characters required for a valid password. */
  minimum_password_length?: string;
  /** Whether newsletters are enabled. */
  newsletter_enabled?: boolean;
  /** Default 404 page that displays when routes are not matched. */
  no_route?: string;
  /** Store code identifier (Store header scope). */
  store_code?: string;
  /** Store display name. */
  store_name?: string;
  /** The unit of weight. */
  weight_unit?: string;
}

/**
 * Response shape for storeConfig query.
 */
export interface StoreConfigQuery {
  /** Storefront configuration payload. */
  storeConfig?: StoreConfig;
}
