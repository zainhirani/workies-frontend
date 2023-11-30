/*
 * ProductScreen Messages
 *
 * This contains all the text for the ProductScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.ProductScreen";

export default defineMessages({
  successMessage: {
    id: `${scope}.successMessage`,
    defaultMessage: "Product Deleted Successfully",
  },
  listTitle: {
    id: `${scope}.listTitle`,
    defaultMessage: "Products",
  },
  categoriesLabel: {
    id: `${scope}.categoriesLabel`,
    defaultMessage: "All Categories",
  },
  statusLabel: {
    id: `${scope}.statusLabel`,
    defaultMessage: "Status",
  },
  addButton: {
    id: `${scope}.addButton`,
    defaultMessage: "Create New",
  },
  importButton: {
    id: `${scope}.importButton`,
    defaultMessage: "Import",
  },
  exportButton: {
    id: `${scope}.exportButton`,
    defaultMessage: "Export",
  },
  editButton: {
    id: `${scope}.editButton`,
    defaultMessage: "Edit",
  },
  deleteButton: {
    id: `${scope}.deleteButton`,
    defaultMessage: "Delete",
  },
});
