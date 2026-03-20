import type { GraphQLInt, SearchResultPageInfo } from './common';
import type { AttributeValueInterface } from './product';

/** Defines the customer's state or province information. */
export interface CustomerAddressRegion {
  /** State/province name. */
  region?: string;
  /** Region code. */
  region_code?: string;
  /** Pre-defined region id. */
  region_id?: number;
}

/** Contains detailed information about a customer's billing or shipping address. */
export interface CustomerAddress {
  /** Customer address city/town name. */
  city?: string;
  /** Customer address company value. */
  company?: string;
  /** Two-letter customer country code. */
  country_code?: string;
  /** Custom attributes provided via `custom_attributesV2`. */
  custom_attributesV2?: AttributeValueInterface[];
  /** Default billing address flag. */
  default_billing?: boolean;
  /** Default shipping address flag. */
  default_shipping?: boolean;
  /** Default shipping address id as configured on the server. */
  default_shipping_id?: string;
  /** Address extension attributes. */
  extension_attributes?: Array<{
    /** Extension attribute name. */
    attribute_code?: string;
    /** Extension attribute value. */
    value?: string;
  }>;
  /** Customer fax number. */
  fax?: string;
  /** Address first name. */
  firstname?: string;
  /** Address internal id. */
  id?: number;
  /** Address last name. */
  lastname?: string;
  /** Address middle name. */
  middlename?: string;
  /** Address postal/zip code. */
  postcode?: string;
  /** Address prefix value. */
  prefix?: string;
  /** Address region information. */
  region?: CustomerAddressRegion;
  /** Street lines for the address. */
  street?: string[];
  /** Address suffix value. */
  suffix?: string;
  /** Address telephone value. */
  telephone?: string;
  /** VAT company number. */
  vat_id?: string;
}

/** List of account confirmation statuses. */
export type ConfirmationStatusEnum =
  | 'ACCOUNT_CONFIRMED'
  | 'ACCOUNT_CONFIRMATION_NOT_REQUIRED';

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
  allow_remote_shopping_assistance?: boolean;
  /** Customer shipping and billing addresses list. */
  addresses?: CustomerAddress[];
  /** Paginated customer addresses collection. */
  addressesV2?: CustomerAddresses;
  /** The contents of the customer's compare list. */
  compare_list?: {
    /** Compare list uid. */
    uid?: string;
  };
  /** Customer confirmation status. */
  confirmation_status?: ConfirmationStatusEnum;
  /** Custom attributes queried by codes. */
  custom_attributes?: AttributeValueInterface[];
  /** Timestamp indicating when the account was created. */
  created_at?: string;
  /** Customer date of birth value. */
  date_of_birth?: string;
  /** Customer default billing address id. */
  default_billing?: string;
  /** Customer default shipping address id. */
  default_shipping?: string;
  /** Customer email address value. */
  email?: string;
  /** Customer first name value. */
  firstname?: string;
  /** Customer gender value. */
  gender?: GraphQLInt;
  /** Customer group identifier value. */
  group_id?: GraphQLInt;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: boolean;
  /** Customer last name value. */
  lastname?: string;
  /** Customer middle name value. */
  middlename?: string;
  /** Prefix value. */
  prefix?: string;
  /** Suffix value. */
  suffix?: string;
  /** Customer wishlist retrieval (selected fields). */
  wishlist_v2?: {
    /** Wishlist unique identifier. */
    id?: string;
  };
}

/** Response shape for customer query. */
export interface CustomerQuery {
  /** Logged in customer profile. */
  customer?: Customer;
}
