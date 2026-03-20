/**
 * Lightweight customer profile details.
 */
export interface Customer {
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
  /** Customer last name value. */
  lastname?: string;
  /** Customer middle name value. */
  middlename?: string;
  /** Customer prefix value. */
  prefix?: string;
  /** Customer suffix value. */
  suffix?: string;
}

/**
 * Response shape for customer query.
 */
export interface CustomerQuery {
  /** Logged in customer profile. */
  customer?: Customer;
}
