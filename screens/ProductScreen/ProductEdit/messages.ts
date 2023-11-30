/*
 * ProductAddScreen Messages
 *
 * This contains all the text for the ProductAddScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.ProductAddScreen";

export default defineMessages({
  // Edit Product Page
  editTitle: {
    id: `${scope}.editTitle`,
    defaultMessage: "Edit Product",
  },
  defaultTitle: {
    id: `${scope}.defaultTitle`,
    defaultMessage: "Product",
  },
  defaultButton: {
    id: `${scope}.defaultButton`,
    defaultMessage: "Edit",
  },
  editButton: {
    id: `${scope}.publishButton`,
    defaultMessage: "Save",
  },

  /** Edit Products **/
  basicDetail: {
    id: `${scope}.basicDetail`,
    defaultMessage: "Basic",
  },
  shippingDetail: {
    id: `${scope}.shippingDetail`,
    defaultMessage: "Shipping",
  },
  mediaDetail: {
    id: `${scope}.mediaDetail`,
    defaultMessage: "Media",
  },
  organizationDetail: {
    id: `${scope}.organizationDetail`,
    defaultMessage: "Organization",
  },

  // Input Fields
  // Basic
  productTitle: {
    id: `${scope}.productDescription`,
    defaultMessage: "Product title",
  },
  productDescription: {
    id: `${scope}.productDescription`,
    defaultMessage: "Product description",
  },
  regularPrice: {
    id: `${scope}.regularPrice`,
    defaultMessage: "Regular price",
  },
  promotionalPrice: {
    id: `${scope}.promotionalPrice`,
    defaultMessage: "Promotional price",
  },
  currency: {
    id: `${scope}.currency`,
    defaultMessage: "Currency",
  },
  taxRate: {
    id: `${scope}.taxRate`,
    defaultMessage: "Tax rate",
  },

  // Shipping
  shippingWidth: {
    id: `${scope}.shippingWidth`,
    defaultMessage: "Width",
  },
  shippingHeight: {
    id: `${scope}.shippingHeight`,
    defaultMessage: "Height",
  },
  shippingWeight: {
    id: `${scope}.shippingWeight`,
    defaultMessage: "Weight",
  },

  shippingFees: {
    id: `${scope}.shippingFees`,
    defaultMessage: "Shipping fees",
  },

  // Organization
  category: {
    id: `${scope}.category`,
    defaultMessage: "Category",
  },

  subCategory: {
    id: `${scope}.subCategory`,
    defaultMessage: "Sub Category",
  },

  tags: {
    id: `${scope}.tags`,
    defaultMessage: "Tags",
  },
  // Placeholders
  textPlaceholder: {
    id: `${scope}.textPlaceholder`,
    defaultMessage: "Type here",
  },
  pricePlaceholder: {
    id: `${scope}.pricePlaceholder`,
    defaultMessage: "$",
  },

  percentPlaceholder: {
    id: `${scope}.percentPlaceholder`,
    defaultMessage: "%",
  },

  lengthPlaceholder: {
    id: `${scope}.lengthPlaceholder`,
    defaultMessage: "inch",
  },
  weightPlaceholder: {
    id: `${scope}.weightPlaceholder`,
    defaultMessage: "gm",
  },

  // Success Message
  successMessage: {
    id: `${scope}.successMessage`,
    defaultMessage: "Product Updated Successfully",
  },
});
