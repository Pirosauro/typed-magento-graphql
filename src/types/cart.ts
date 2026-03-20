import type {
  CartAddressCountry,
  CartAddressRegion,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  Money,
  SearchResultPageInfo,
} from "./common.js";
import type { Product, ProductDiscount } from "./product.js";

/**
 * Recipient-sender gift message attached to the cart or cart item.
 */
export interface GiftMessage {
  /** Sender name. */
  from?: GraphQLString;
  /** Gift message text. */
  message?: GraphQLString;
  /** Recipient name. */
  to?: GraphQLString;
}

/**
 * Cart item error details.
 */
export interface CartItemError {
  /** Error code describing the cart item issue. */
  code?: CartItemErrorType;
  /** Localized error message. */
  message?: GraphQLString;
}

/**
 * Cart item error code enumeration.
 */
export type CartItemErrorType = "UNDEFINED" | "ITEM_QTY" | "ITEM_INCREMENTS";

/** Cart user input error code enumeration. */
export type CartUserInputErrorType =
  | "COULD_NOT_FIND_CART_ITEM"
  | "INSUFFICIENT_STOCK"
  | "INVALID_PARAMETER_VALUE"
  | "NOT_SALABLE"
  | "PRODUCT_NOT_FOUND"
  | "REQUIRED_PARAMETER_MISSING"
  | "UNDEFINED";

/** Cart user input error details. */
export interface CartUserInputError {
  /** Cart-specific error code value. */
  code?: CartUserInputErrorType;
  /** Localized error message. */
  message?: GraphQLString;
}

/** Contains tax information for items in the cart. */
export interface CartTaxItem {
  /** Amount of tax applied to the item. */
  amount?: Money;
  /** Tax label description. */
  label?: GraphQLString;
}

/** Represents a discount applied to cart item pricing. */
export interface Discount {
  /** Entity type this discount is applied to. */
  applied_to?: "ITEM" | "SHIPPING" | GraphQLString;
  /** Discount amount. */
  amount?: Money;
  /** Coupon related to the discount, if any. */
  coupon?: AppliedCoupon;
  /** Discount label value. */
  label?: GraphQLString;
}

/** A fixed product tax entry that can be applied to a product price. */
export interface FixedProductTax {
  /** Tax amount. */
  amount?: Money;
  /** Tax label. */
  label?: GraphQLString;
}

/** Contains details about the final price of an item, including discounts and tax. */
export interface CartItemPrices {
  /** Catalog discount applied to the unit price. */
  catalog_discount?: ProductDiscount;
  /** Discounts to apply to this cart item. */
  discounts?: Discount[];
  /** Fixed product taxes applied to this cart item. */
  fixed_product_taxes?: FixedProductTax[];
  /** Original unit price including discounts. */
  original_item_price?: Money;
  /** Original row total for the item. */
  original_row_total?: Money;
  /** Price before discounts (may include tax depending on settings). */
  price?: Money;
  /** Price before discounts including tax. */
  price_including_tax?: Money;
  /** Catalog discount applied to the row total. */
  row_catalog_discount?: ProductDiscount;
  /** Row total for the item. */
  row_total?: Money;
  /** Row total including tax. */
  row_total_including_tax?: Money;
  /** Total discount amount applied to the item. */
  total_item_discount?: Money;
}

/** An interface for products in a cart (cart item). */
export interface CartItemInterface {
  /** Errors encountered while loading the cart item. */
  errors?: CartItemError[];
  /** True if requested quantity is less than available stock. */
  is_available?: GraphQLBoolean;
  /** Message shown when the product is not available with this selected option. */
  not_available_message?: GraphQLString;
  /** Detailed price breakdown for this item. */
  prices?: CartItemPrices;
  /** Product associated with this cart item. */
  product?: Product;
  /** Quantity of this item in the cart. */
  quantity?: GraphQLFloat;
  /** Unique ID for a `CartItemInterface` object. */
  uid?: GraphQLString;
}

/** Contains cart item collection with pagination metadata. */
export interface CartItems {
  /** Array of cart item interfaces. */
  items?: CartItemInterface[];
  /** Pagination information for cart items. */
  page_info?: SearchResultPageInfo;
  /** Number of returned cart items. */
  total_count?: GraphQLInt;
}

/** Contains details about prices of a cart. */
export interface CartPrices {
  /** Array of cart taxes applied to each item. */
  applied_taxes?: CartTaxItem[];
  /** Discounts applied to the cart. */
  discounts?: Discount[];
  /** Grand total including discounts, taxes, shipping, and other fees. */
  grand_total?: Money;
  /** Grand total excluding tax. */
  grand_total_excluding_tax?: Money;
  /** Subtotal excluding tax. */
  subtotal_excluding_tax?: Money;
  /** Subtotal including tax. */
  subtotal_including_tax?: Money;
  /** Subtotal with discount applied but not taxes. */
  subtotal_with_discount_excluding_tax?: Money;
}

/** Coupon applied to a cart. */
export interface AppliedCoupon {
  /** Coupon code applied by the shopper. */
  code?: GraphQLString;
}

/** Available payment method displayed during checkout. */
export interface AvailablePaymentMethod {
  /** Payment method code. */
  code?: GraphQLString;
  /** If the payment method is an online integration. */
  is_deferred?: GraphQLBoolean;
  /** Payment method title. */
  title?: GraphQLString;
}

/** Selected payment method details. */
export interface SelectedPaymentMethod {
  /** Payment method code. */
  code?: GraphQLString;
  /** Purchase order number provided by the shopper. */
  purchase_order_number?: GraphQLString;
  /** Payment method title. */
  title?: GraphQLString;
}

/** Contains details about the selected shipping method and carrier. */
export interface SelectedShippingMethod {
  /** Total amount for this shipping method. */
  amount?: Money;
  /** Carrier code value. */
  carrier_code?: GraphQLString;
  /** Carrier title value. */
  carrier_title?: GraphQLString;
  /** Method code value. */
  method_code?: GraphQLString;
  /** Method title value. */
  method_title?: GraphQLString;
  /** Price excluding tax value. */
  price_excl_tax?: Money;
  /** Price including tax value. */
  price_incl_tax?: Money;
}

/** Cart address model shared by shipping and billing. */
export interface CartAddress {
  /** Available shipping methods for this address. */
  available_shipping_methods?: AvailablePaymentMethod[];
  /** City for this address. */
  city?: GraphQLString;
  /** Company name for this address. */
  company?: GraphQLString;
  /** Country details for this address. */
  country?: CartAddressCountry;
  /** Customer notes (shipping-only in schema). */
  customer_notes?: GraphQLString;
  /** Address fax number. */
  fax?: GraphQLString;
  /** Customer first name for this address. */
  firstname?: GraphQLString;
  /** Customer address internal id (address book). */
  id?: GraphQLInt;
  /** Customer last name for this address. */
  lastname?: GraphQLString;
  /** Customer middle name for this address. */
  middlename?: GraphQLString;
  /** Address pickup location code for in-store pickup. */
  pickup_location_code?: GraphQLString;
  /** Postal code for this address. */
  postcode?: GraphQLString;
  /** Address prefix value. */
  prefix?: GraphQLString;
  /** Region details for this address. */
  region?: CartAddressRegion;
  /** Indicates whether shipping address is same as billing address. */
  same_as_billing?: GraphQLBoolean;
  /** Selected shipping method for this address. */
  selected_shipping_method?: SelectedShippingMethod;
  /** Street lines for this address. */
  street?: GraphQLString[];
  /** Address suffix value. */
  suffix?: GraphQLString;
  /** Telephone number for this address. */
  telephone?: GraphQLString;
  /** Address unique identifier. */
  uid?: GraphQLString;
  /** VAT company number for billing or shipping. */
  vat_id?: GraphQLString;
}

/** Lightweight shopping cart model. */
export interface Cart {
  /** Applied coupons on the cart. */
  applied_coupons?: AppliedCoupon[];
  /** Available payment methods for the cart. */
  available_payment_methods?: AvailablePaymentMethod[];
  /** Billing address assigned to cart. */
  billing_address?: CartAddress;
  /** Cart email address value. */
  email?: GraphQLString;
  /** Gift message entered for the cart. */
  gift_message?: GiftMessage;
  /** Unique cart identifier. */
  id?: GraphQLID;
  /** Indicates whether the cart contains only virtual products. */
  is_virtual?: GraphQLBoolean;
  /** Cart item collection for the cart. */
  itemsV2?: CartItems;
  /** Pricing details for the quote. */
  prices?: CartPrices;
  /** Selected payment method for checkout. */
  selected_payment_method?: SelectedPaymentMethod;
  /** Shipping addresses assigned to the cart. */
  shipping_addresses?: CartAddress[];
  /** Total quantity of cart items. */
  total_quantity?: GraphQLFloat;
}

/** Response shape for cart query. */
export interface CartQuery {
  /** Requested cart details by id. */
  cart?: Cart;
}

/** Response shape for customerCart query. */
export interface CustomerCartQuery {
  /** Logged in customer active cart. */
  customerCart?: Cart;
}

/** Output for applyCouponToCart mutation. */
export interface ApplyCouponToCartMutation {
  /** Result payload after applying coupon. */
  applyCouponToCart?: {
    /** Updated cart data after mutation. */
    cart?: Cart;
  };
}

/** Output for addProductsToCart mutation. */
export interface AddToCartMutation {
  /** Result payload after adding products. */
  addProductsToCart?: {
    /** Updated cart data after mutation. */
    cart?: Cart;
    /** User-facing mutation errors. */
    user_errors?: Array<{
      /** Error code for the specific issue. */
      code?: GraphQLString;
      /** Localized error message. */
      message?: GraphQLString;
    }>;
  };
}

/** Output for createGuestCart mutation. */
export interface CreateGuestCartMutation {
  /** Result payload after creating guest cart. */
  createGuestCart?: {
    /** Newly created cart data. */
    cart?: Cart;
  };
}

/** Output for placeOrder mutation. */
export interface PlaceOrderMutation {
  /** Place order mutation result payload. */
  placeOrder?: {
    /** Place order errors returned by backend. */
    errors?: Array<{
      /** Error code value. */
      code?: GraphQLString;
      /** Localized error message. */
      message?: GraphQLString;
    }>;
    /** Full order information (selected subset). */
    orderV2?: {
      /** Order incremental number. */
      number?: GraphQLString;
      /** Unique order identifier. */
      uid?: GraphQLString;
    };
  };
}

/** Output for removeCouponFromCart mutation. */
export interface RemoveCouponFromCartMutation {
  /** Result payload after removing coupon. */
  removeCouponFromCart?: {
    /** Updated cart data after mutation. */
    cart?: Cart;
  };
}

/** Output for removeItemFromCart mutation. */
export interface RemoveItemFromCartMutation {
  /** Result payload after removing cart item. */
  removeItemFromCart?: {
    /** Updated cart data after mutation. */
    cart?: Cart;
  };
}

/** Output for setBillingAddressOnCart mutation. */
export interface SetBillingAddressMutation {
  /** Result payload for setting billing address. */
  setBillingAddressOnCart?: {
    /** Updated cart data after mutation. */
    cart?: Cart;
  };
}

/** Output for setGuestEmailOnCart mutation. */
export interface SetGuestEmailOnCartMutation {
  /** Result payload for setting guest email. */
  setGuestEmailOnCart?: {
    /** Updated cart data after mutation. */
    cart?: Cart;
  };
}

/** Output for setPaymentMethodOnCart mutation. */
export interface SetPaymentMethodMutation {
  /** Result payload for setting payment method. */
  setPaymentMethodOnCart?: {
    /** Updated cart data after mutation. */
    cart?: Cart;
  };
}

/** Output for setShippingAddressesOnCart mutation. */
export interface SetShippingAddressMutation {
  /** Result payload for setting shipping addresses. */
  setShippingAddressesOnCart?: {
    /** Updated cart data after mutation. */
    cart?: Cart;
  };
}

/** Output for setShippingMethodsOnCart mutation. */
export interface SetShippingMethodsMutation {
  /** Result payload for setting shipping methods. */
  setShippingMethodsOnCart?: {
    /** Updated cart data after mutation. */
    cart?: Cart;
  };
}

/** Output for updateCartItems mutation. */
export interface UpdateCartItemsMutation {
  /** Result payload after updating cart items. */
  updateCartItems?: {
    /** Updated cart data after mutation. */
    cart?: Cart;
    /** User-facing mutation errors. */
    errors?: CartUserInputError[];
  };
}
