# Typed Magento GraphQL

> Type-safe GraphQL client for Magento 2 / Mage-OS with Zod input validation

[![npm version](https://img.shields.io/npm/v/typed-magento-graphql.svg)](https://www.npmjs.com/package/typed-magento-graphql)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-blue.svg)](https://www.typescriptlang.org/)

## Philosophy

**Zod only for input validation** (what you send to the backend)  
**Pure TypeScript for responses** (what you receive from the backend)

We keep it minimal and practical — assume the backend does its job.

## Features

- ✅ **Type-safe** - Full TypeScript support with inferred types
- ✅ **Input validation** - Zod schemas validate all inputs before sending
- ✅ **Zero dependencies** (except Zod) - Lightweight and fast
- ✅ **Tree-shakeable** - Import only what you need
- ✅ **ES Modules** - Modern ESM build
- ✅ **Framework agnostic** - Works with React, Vue, Svelte, or vanilla JS

## Installation

```bash
npm install typed-magento-graphql zod
# or
yarn add typed-magento-graphql zod
# or
pnpm add typed-magento-graphql zod
```

## Implementation Status

### Query Implementation Status

| Query | Priority | Status | Version | Notes |
|-------|----------|--------|---------|-------|
| `products` | 🔴 **MAX** | ✅ Complete | 0.248.0 | Full implementation with filters, pagination, sorting |
| `categories` | 🔴 **MAX** | ✅ Complete | 0.248.0 | Category tree with children, breadcrumbs, products |
| `route` | 🔴 **MAX** | ✅ Complete | 0.248.0 | URL resolver for products/categories/CMS |
| `storeConfig` | 🔴 **MAX** | ✅ Complete | 0.248.0 | Store configuration with key fields |
| `customer` | 🔴 **MAX** | ✅ Complete | 0.248.0 | Customer profile with addresses |
| `customerCart` | 🔴 **MAX** | ✅ Complete | 0.248.0 | Authenticated customer cart |
| `cart` | 🔴 **MAX** | ✅ Complete | 0.248.0 | Guest cart by ID |
| `cmsBlocks` | 🟠 **MEDIUM** | ✅ Complete | 0.248.0 | CMS blocks retrieval |
| `cmsPage` | 🟠 **MEDIUM** | ✅ Complete | 0.248.0 | CMS page details |
| `countries` | 🟠 **MEDIUM** | ⏳ Planned | 0.248.1 | Country list with regions |
| `currency` | 🟠 **MEDIUM** | ⏳ Planned | 0.248.1 | Currency information |
| `availableStores` | 🟠 **MEDIUM** | ⏳ Planned | 0.248.1 | Multi-store configuration |
| `wishlist` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Use `customer.wishlists` instead |
| `compareList` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Compare products feature |
| `attributesForm` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Custom attributes forms |
| `attributesList` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Attributes metadata |
| `customAttributeMetadataV2` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Advanced attribute metadata |
| `checkoutAgreements` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Terms and conditions |
| `customerDownloadableProducts` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Downloadable products |
| `customerPaymentTokens` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Stored payment methods |
| `isEmailAvailable` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Email availability check |
| `pickupLocations` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | In-store pickup locations |
| `productReviewRatingsMetadata` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Review ratings configuration |
| `recaptchaFormConfig` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | reCAPTCHA form config |
| `recaptchaV3Config` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | reCAPTCHA v3 config |

### Mutation Implementation Status

| Mutation | Priority | Status | Version | Notes |
|----------|----------|--------|---------|-------|
| `addProductsToCart` | 🔴 **MAX** | ✅ Complete | 0.248.0 | Add any product type to cart |
| `createGuestCart` | 🔴 **MAX** | ✅ Complete | 0.248.0 | Create new guest cart |
| `setBillingAddressOnCart` | 🔴 **MAX** | ✅ Complete | 0.248.0 | Set billing address |
| `setShippingAddressesOnCart` | 🔴 **MAX** | ✅ Complete | 0.248.0 | Set shipping addresses |
| `setShippingMethodsOnCart` | 🔴 **MAX** | ✅ Complete | 0.248.0 | Set shipping methods |
| `setPaymentMethodOnCart` | 🔴 **MAX** | ✅ Complete | 0.248.0 | Set payment method |
| `placeOrder` | 🔴 **MAX** | ✅ Complete | 0.248.0 | Convert cart to order |
| `applyCouponToCart` | 🔴 **MAX** | ✅ Complete | 0.248.0 | Apply coupon code |
| `removeCouponFromCart` | 🔴 **MAX** | ✅ Complete | 0.248.0 | Remove coupon |
| `updateCartItems` | 🔴 **MAX** | ✅ Complete | 0.248.0 | Update item quantities |
| `removeItemFromCart` | 🔴 **MAX** | ✅ Complete | 0.248.0 | Remove item from cart |
| `setGuestEmailOnCart` | 🔴 **MAX** | ✅ Complete | 0.248.0 | Set email for guest cart |
| `mergeCarts` | 🔴 **MAX** | ⏳ Planned | 0.248.1 | Merge guest cart with customer cart |
| `generateCustomerToken` | 🔴 **MAX** | ⏳ Planned | 0.248.1 | Customer login |
| `revokeCustomerToken` | 🔴 **MAX** | ⏳ Planned | 0.248.1 | Customer logout |
| `createCustomerV2` | 🔴 **MAX** | ⏳ Planned | 0.248.1 | Customer registration |
| `addProductsToWishlist` | 🔴 **MAX** | ⏳ Planned | 0.248.1 | Add to wishlist |
| `updateCustomerV2` | 🟠 **MEDIUM** | ⏳ Planned | 0.248.1 | Update customer profile |
| `changeCustomerPassword` | 🟠 **MEDIUM** | ⏳ Planned | 0.248.1 | Change password |
| `createCustomerAddress` | 🟠 **MEDIUM** | ⏳ Planned | 0.248.1 | Add address to address book |
| `updateCustomerAddress` | 🟠 **MEDIUM** | ⏳ Planned | 0.248.1 | Update address |
| `deleteCustomerAddress` | 🟠 **MEDIUM** | ⏳ Planned | 0.248.1 | Delete address |
| `createProductReview` | 🟠 **MEDIUM** | ⏳ Planned | 0.248.1 | Submit product review |
| `addWishlistItemsToCart` | 🟠 **MEDIUM** | ⏳ Planned | 0.248.1 | Move wishlist items to cart |
| `removeProductsFromWishlist` | 🟠 **MEDIUM** | ⏳ Planned | 0.248.1 | Remove from wishlist |
| `updateProductsInWishlist` | 🟠 **MEDIUM** | ⏳ Planned | 0.248.1 | Update wishlist items |
| `requestPasswordResetEmail` | 🟠 **MEDIUM** | ⏳ Planned | 0.248.1 | Request password reset |
| `resetPassword` | 🟠 **MEDIUM** | ⏳ Planned | 0.248.1 | Reset password with token |
| `subscribeEmailToNewsletter` | 🟠 **MEDIUM** | ⏳ Planned | 0.248.1 | Newsletter subscription |
| `contactUs` | 🟠 **MEDIUM** | ⏳ Planned | 0.248.1 | Contact form submission |
| `assignCompareListToCustomer` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Assign compare list |
| `createCompareList` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Create compare list |
| `addProductsToCompareList` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Add to compare list |
| `removeProductsFromCompareList` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Remove from compare list |
| `deleteCompareList` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Delete compare list |
| `cancelOrder` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Cancel order |
| `reorderItems` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Reorder previous order |
| `sendEmailToFriend` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Email to friend |
| `deletePaymentToken` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Delete stored payment |
| `deleteCustomer` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Delete account |
| `generateCustomerTokenAsAdmin` | ⚫ **VERY LOW** | ⏳ Planned | 0.248.4 | Admin assistance |
| `assignCustomerToGuestCart` | ⚫ **VERY LOW** | ⏳ Planned | 0.248.4 | Assign cart to customer |
| `estimateShippingMethods` | ⚫ **VERY LOW** | ⏳ Planned | 0.248.4 | Estimate shipping costs |
| `estimateTotals` | ⚫ **VERY LOW** | ⏳ Planned | 0.248.4 | Estimate cart totals |
| `confirmEmail` | ⚫ **VERY LOW** | ⏳ Planned | 0.248.4 | Confirm customer email |
| `resendConfirmationEmail` | ⚫ **VERY LOW** | ⏳ Planned | 0.248.4 | Resend confirmation |
| `createEmptyCart` (deprecated) | ⚫ **VERY LOW** | ❌ Deprecated | - | Use `createGuestCart` |

### Payment Gateway Mutations

| Mutation | Priority | Status | Version | Notes |
|----------|----------|--------|---------|-------|
| `mollieProcessTransaction` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Process Mollie payment |
| `mollieRestoreCart` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Restore cart after failed payment |
| `molliePaymentLinkRedirect` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Handle payment link redirect |
| `mollieApplePayValidation` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Apple Pay validation |
| `createPaypalExpressToken` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | PayPal Express token |
| `createPayflowProToken` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Payflow Pro token |
| `handlePayflowProResponse` | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Handle Payflow response |
| `getPayflowLinkToken` (query) | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Payflow Link token |
| `getHostedProUrl` (query) | 🟡 **LOW** | ⏳ Planned | 0.248.3 | Hosted Pro URL |

### Legend

| Priority | Color | Description |
|----------|-------|-------------|
| **MAX** | 🔴 | Core functionality - must have for any store |
| **MEDIUM** | 🟠 | Important but not blocking - typical store features |
| **LOW** | 🟡 | Nice to have - specific use cases |
| **VERY LOW** | ⚫ | Edge cases, admin features, deprecated |

### Version Roadmap

| Version | Focus | Features |
|---------|-------|----------|
| **0.248.0** | Core Storefront | Products, categories, cart, checkout, customer basics, CMS |
| **0.248.1** | Customer Experience | Wishlist, reviews, addresses, password management, newsletter |
| **0.248.3** | Extended Features | Compare lists, downloadable products, payment gateways, advanced queries |
| **0.248.4** | Admin & Edge Cases | Admin assistance, estimates, email confirmation |

### Summary Statistics

| Category | Count |
|----------|-------|
| **Total Queries** | 27 |
| **Total Mutations** | 56 |
| **Total Operations** | 83 |
| **✅ Complete (0.248.0)** | 17 |
| **⏳ Planned** | 66 |
| **❌ Deprecated** | 1 |