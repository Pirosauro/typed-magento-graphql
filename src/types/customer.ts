import type {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  SearchResultPageInfo,
} from "./common.js";
import type { AttributeValueInterface, Product } from "./product.js";

/** Defines the customer's state or province information. */
export interface CustomerAddressRegion {
  /** State/province name. */
  region?: GraphQLString;
  /** Region code. */
  region_code?: GraphQLString;
  /** Pre-defined region id. */
  region_id?: GraphQLInt;
}

/** Contains detailed information about a customer's billing or shipping address. */
export interface CustomerAddress {
  /** Customer address city/town name. */
  city?: GraphQLString;
  /** Customer address company value. */
  company?: GraphQLString;
  /** Two-letter customer country code. */
  country_code?: GraphQLString;
  /** Custom attributes provided via `custom_attributesV2`. */
  custom_attributesV2?: AttributeValueInterface[];
  /** Default billing address flag. */
  default_billing?: GraphQLBoolean;
  /** Default shipping address flag. */
  default_shipping?: GraphQLBoolean;
  /** Default shipping address id as configured on the server. */
  default_shipping_id?: GraphQLString;
  /** Address extension attributes. */
  extension_attributes?: Array<{
    /** Extension attribute name. */
    attribute_code?: GraphQLString;
    /** Extension attribute value. */
    value?: GraphQLString;
  }>;
  /** Customer fax number. */
  fax?: GraphQLString;
  /** Address first name. */
  firstname?: GraphQLString;
  /** Address internal id. */
  id?: GraphQLInt;
  /** Address last name. */
  lastname?: GraphQLString;
  /** Address middle name. */
  middlename?: GraphQLString;
  /** Address postal/zip code. */
  postcode?: GraphQLString;
  /** Address prefix value. */
  prefix?: GraphQLString;
  /** Address region information. */
  region?: CustomerAddressRegion;
  /** Street lines for the address. */
  street?: GraphQLString[];
  /** Address suffix value. */
  suffix?: GraphQLString;
  /** Address telephone value. */
  telephone?: GraphQLString;
  /** VAT company number. */
  vat_id?: GraphQLString;
}

/** List of account confirmation statuses. */
export type ConfirmationStatusEnum =
  | "ACCOUNT_CONFIRMED"
  | "ACCOUNT_CONFIRMATION_NOT_REQUIRED";

/** Entered option value for wishlist items. */
export interface EnteredOptionValue {
  /** Option identifier. */
  uid?: GraphQLID;
  /** Option value. */
  value?: GraphQLString;
}

/** Customizable option for wishlist items. */
export interface SelectedCustomizableOption {
  /** Unique customizable option ID. */
  customizable_option_uid?: GraphQLID;
  /** Is this option required. */
  is_required?: GraphQLBoolean;
  /** Label of the customizable option. */
  label?: GraphQLString;
  /** Sort order. */
  sort_order?: GraphQLInt;
  /** Type of customizable option. */
  type?: GraphQLString;
  /** Selected customizable option values. */
  values?: Array<{
    /** Customizable option value UID. */
    customizable_option_value_uid?: GraphQLID;
    /** Value label. */
    label?: GraphQLString;
    /** Selected value. */
    value?: GraphQLString;
  }>;
}

/** Wishlist item details. */
export interface WishlistItem {
  /** Product added to wishlist. */
  product?: Product;
  /** Unique wishlist item identifier. */
  uid?: GraphQLID;
  /** Item quantity. */
  quantity?: GraphQLInt;
  /** Entered option values for this wishlist item. */
  entered_options?: EnteredOptionValue[];
  /** Customizable options selected for this wishlist item. */
  customizable_options?: SelectedCustomizableOption[];
}

/** Wishlist container with pagination. */
export interface Wishlist {
  /** Unique wishlist identifier. */
  id?: GraphQLID;
  /** Array of wishlist items. */
  items?: WishlistItem[];
  /** Pagination information. */
  page_info?: SearchResultPageInfo;
  /** Total number of wishlist items. */
  items_count?: GraphQLInt;
  /** Wishlist creation timestamp. */
  created_at?: GraphQLString;
  /** Wishlist update timestamp. */
  updated_at?: GraphQLString;
  /** Wishlist owner (customer). */
  sharing_code?: GraphQLString;
  /** Whether wishlist is shared. */
  is_public?: GraphQLBoolean;
}

/** Response containing wishlist data. */
export interface WishlistOutput {
  /** Customer's wishlist. */
  wishlist?: Wishlist;
}

/** Customer addresses container with pagination metadata. */
export interface CustomerAddresses {
  /** Items containing the customer's shipping and billing addresses. */
  items?: CustomerAddress[];
  /** Pagination information for customer addresses. */
  page_info?: SearchResultPageInfo;
  /** Total count of customer addresses. */
  total_count?: GraphQLInt;
}

/** Customer profile data for the logged-in customer. */
export interface Customer {
  /** Remote shopping assistance support for this account. */
  allow_remote_shopping_assistance?: GraphQLBoolean;
  /** Customer shipping and billing addresses list. */
  addresses?: CustomerAddress[];
  /** Paginated customer addresses collection. */
  addressesV2?: CustomerAddresses;
  /** The contents of the customer's compare list. */
  compare_list?: {
    /** Compare list uid. */
    uid?: GraphQLString;
  };
  /** Customer confirmation status. */
  confirmation_status?: ConfirmationStatusEnum;
  /** Custom attributes queried by codes. */
  custom_attributes?: AttributeValueInterface[];
  /** Timestamp indicating when the account was created. */
  created_at?: GraphQLString;
  /** Customer date of birth value. */
  date_of_birth?: GraphQLString;
  /** Customer default billing address id. */
  default_billing?: GraphQLString;
  /** Customer default shipping address id. */
  default_shipping?: GraphQLString;
  /** Customer email address value. */
  email?: GraphQLString;
  /** Customer first name value. */
  firstname?: GraphQLString;
  /** Customer gender value. */
  gender?: GraphQLInt;
  /** Customer group identifier value. */
  group_id?: GraphQLInt;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: GraphQLBoolean;
  /** Customer last name value. */
  lastname?: GraphQLString;
  /** Customer middle name value. */
  middlename?: GraphQLString;
  /** Prefix value. */
  prefix?: GraphQLString;
  /** Suffix value. */
  suffix?: GraphQLString;
  /** Customer wishlist. */
  wishlist?: Wishlist;
  /** Legacy wishlist retrieval (selected fields). */
  wishlist_v2?: {
    /** Wishlist unique identifier. */
    id?: GraphQLString;
  };
}

/** Response shape for customer query. */
export interface CustomerQuery {
  /** Logged in customer profile. */
  customer?: Customer;
}
