import type { GraphQLBoolean, GraphQLInt, GraphQLString } from "./common.js";

/** Frequently used storefront configuration values. */
export interface StoreConfig {
  /** Additional store configuration values returned by the backend. */
  [key: string]: GraphQLBoolean | GraphQLInt | GraphQLString | undefined;
  /** Contains scripts that must be included before the closing `<body>` tag. */
  absolute_footer?: GraphQLString;
  /** Indicates whether guests can write product reviews. */
  allow_guests_to_write_product_reviews?: GraphQLString;
  /** Controls gift messages availability on order items. */
  allow_items?: GraphQLString;
  /** Controls gift messages availability on order level. */
  allow_order?: GraphQLString;
  /** Enables autocomplete on login and forgot password forms. */
  autocomplete_on_storefront?: GraphQLBoolean;
  /** The base currency code. */
  base_currency_code?: GraphQLString;
  /** Base URL for relative links to the `base_url`. */
  base_link_url?: GraphQLString;
  /** Fully-qualified base URL for media files. */
  base_media_url?: GraphQLString;
  /** Fully-qualified base URL for static view files. */
  base_static_url?: GraphQLString;
  /** Fully-qualified base URL for this store view. */
  base_url?: GraphQLString;
  /** checkout/cart/delete_quote_after: quote lifetime in days. */
  cart_expires_in_days?: GraphQLInt;
  /** Controls how cart summary quantities are displayed. */
  cart_summary_display_quantity?: GraphQLInt;
  /** The default sort order of the search results list. */
  catalog_default_sort_by?: GraphQLString;
  /** Indicates whether the Contact Us form is enabled. */
  contact_enabled?: GraphQLBoolean;
  /** The copyright statement shown at the bottom of pages. */
  copyright?: GraphQLString;
  /** Indicates whether new customer accounts need confirmation. */
  create_account_confirmation?: GraphQLBoolean;
  /** Customer access token lifetime. */
  customer_access_token_lifetime?: GraphQLInt;
  /** Default country for your store. */
  default_country?: GraphQLString;
  /** Default site meta description. */
  default_description?: GraphQLString;
  /** Default currency code displayed to customers. */
  default_display_currency_code?: GraphQLString;
  /** Store meta keywords (comma-separated). */
  default_keywords?: GraphQLString;
  /** Default site title. */
  default_title?: GraphQLString;
  /** Controls the display of the demo store notice at the top of pages. */
  demonotice?: GraphQLInt;
  /** Display product prices in catalog configuration. */
  display_product_prices_in_catalog?: GraphQLInt;
  /** Display shipping prices configuration. */
  display_shipping_prices?: GraphQLInt;
  /** Indicates whether checkout agreements are enabled. */
  is_checkout_agreements_enabled?: GraphQLBoolean;
  /** Indicates whether guest checkout is enabled. */
  is_guest_checkout_enabled?: GraphQLBoolean;
  /** Indicates whether one-page checkout is enabled. */
  is_one_page_checkout_enabled?: GraphQLBoolean;
  /** The store locale. */
  locale?: GraphQLString;
  /** Minicart display flag in the checkout sidebar. */
  minicart_display?: GraphQLBoolean;
  /** Maximum number of items in the minicart. */
  minicart_max_items?: GraphQLInt;
  /** Minimum number of characters required for a valid password. */
  minimum_password_length?: GraphQLString;
  /** Whether newsletters are enabled. */
  newsletter_enabled?: GraphQLBoolean;
  /** Default 404 page that displays when routes are not matched. */
  no_route?: GraphQLString;
  /** Store code identifier (Store header scope). */
  store_code?: GraphQLString;
  /** Store display name. */
  store_name?: GraphQLString;
  /** The unit of weight. */
  weight_unit?: GraphQLString;
}

/**
 * Response shape for storeConfig query.
 */
export interface StoreConfigQuery {
  /** Storefront configuration payload. */
  storeConfig?: StoreConfig;
}
