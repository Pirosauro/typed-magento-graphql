/**
 * Frequently used storefront configuration values.
 */
export interface StoreConfig {
  /** Base currency code for the store. */
  base_currency_code?: string;
  /** Store base media URL value. */
  base_media_url?: string;
  /** Store base static URL value. */
  base_static_url?: string;
  /** Store base URL value. */
  base_url?: string;
  /** Cart subtotal display preference. */
  cart_summary_display_quantity?: string;
  /** Checkout terms and conditions enabled flag. */
  checkout_enable_terms_and_conditions?: boolean;
  /** Current locale code for storefront. */
  locale?: string;
  /** Store code identifier value. */
  store_code?: string;
  /** Store display name value. */
  store_name?: string;
  /** Weight unit for catalog products. */
  weight_unit?: string;
}

/**
 * Response shape for storeConfig query.
 */
export interface StoreConfigQuery {
  /** Storefront configuration payload. */
  storeConfig?: StoreConfig;
}
