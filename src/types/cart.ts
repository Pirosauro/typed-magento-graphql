import type { CartAddressCountry, CartAddressRegion, GraphQLFloat, GraphQLID } from './common';

/**
 * Cart address model shared by shipping and billing.
 */
export interface CartAddress {
  /** City for this address. */
  city?: string;
  /** Company name for this address. */
  company?: string;
  /** Country details for this address. */
  country?: CartAddressCountry;
  /** Customer first name for this address. */
  firstname?: string;
  /** Customer last name for this address. */
  lastname?: string;
  /** Postal code for this address. */
  postcode?: string;
  /** Region details for this address. */
  region?: CartAddressRegion;
  /** Street lines for this address. */
  street?: string[];
  /** Telephone number for this address. */
  telephone?: string;
}

/**
 * Cart item summary for checkout flows.
 */
export interface CartItem {
  /** Cart item quantity value. */
  quantity?: GraphQLFloat;
  /** Cart item SKU value. */
  sku?: string;
}

/**
 * Lightweight shopping cart model.
 */
export interface Cart {
  /** Billing address assigned to cart. */
  billing_address?: CartAddress;
  /** Cart email address value. */
  email?: string;
  /** Unique cart identifier. */
  id?: GraphQLID;
  /** Product items included in cart. */
  items?: CartItem[];
  /** Shipping addresses assigned to cart. */
  shipping_addresses?: CartAddress[];
  /** Total quantity of cart items. */
  total_quantity?: GraphQLFloat;
}

/**
 * Response shape for cart query.
 */
export interface CartQuery {
  /** Requested cart details by id. */
  cart?: Cart;
}

/**
 * Response shape for customerCart query.
 */
export interface CustomerCartQuery {
  /** Logged in customer active cart. */
  customerCart?: Cart;
}

/**
 * Output for addProductsToCart mutation.
 */
export interface AddToCartMutation {
  /** Result payload after adding products. */
  addProductsToCart?: {
    /** Updated cart data after mutation. */
    cart?: Cart;
    /** User-facing mutation errors. */
    user_errors?: Array<{
      /** Error message for this issue. */
      message?: string;
    }>;
  };
}

/**
 * Output for placeOrder mutation.
 */
export interface PlaceOrderMutation {
  /** Place order mutation result payload. */
  placeOrder?: {
    /** Place order errors array. */
    errors?: Array<{
      /** Error code returned by backend. */
      code?: string;
      /** Error message returned by backend. */
      message?: string;
    }>;
    /** Placed order details. */
    orderV2?: {
      /** Incremental order number value. */
      number?: string;
    };
  };
}

/**
 * Output for setBillingAddressOnCart mutation.
 */
export interface SetBillingAddressMutation {
  /** Result payload for setting billing address. */
  setBillingAddressOnCart?: {
    /** Updated cart data after mutation. */
    cart?: Cart;
  };
}

/**
 * Output for setPaymentMethodOnCart mutation.
 */
export interface SetPaymentMethodMutation {
  /** Result payload for setting payment method. */
  setPaymentMethodOnCart?: {
    /** Updated cart data after mutation. */
    cart?: Cart;
  };
}

/**
 * Output for setShippingAddressesOnCart mutation.
 */
export interface SetShippingAddressMutation {
  /** Result payload for setting shipping addresses. */
  setShippingAddressesOnCart?: {
    /** Updated cart data after mutation. */
    cart?: Cart;
  };
}
