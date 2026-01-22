import { ComponentConfig } from "@puckeditor/core";

import ShoppingCart, { ShoppingCartProps } from "./ShoppingCart";
import linkField, { defaultLinkValue } from "@/registry/react-email/puck/configs/fields/rich-link";
import imageField, { defaultImageValue } from "@/registry/react-email/puck/configs/fields/image-url";
import createSummaryFunc from "@/registry/lib/create-summary-func";

export type { ShoppingCartProps };

const defaultItem: ShoppingCartProps["items"][number] = {
  image: defaultImageValue,
  name: "Product Name",
  quantity: 1,
  price: "$20.00",
};

const shoppingCartConfig: ComponentConfig<{ props: ShoppingCartProps }> = {
  fields: {
    title: { type: "text", contentEditable: true },
    items: {
      type: "array",
      label: "cart items",
      max: 5,
      arrayFields: {
        image: imageField,
        name: { type: "text", contentEditable: true },
        quantity: { type: "number", min: 0, max: 999999 },
        price: { type: "text", contentEditable: true },
      },
      getItemSummary: createSummaryFunc((item) => item.name),
      defaultItemProps: {
        image: defaultImageValue,
        name: "Product Name",
        quantity: 1,
        price: "$20.00",
      },
    },
    button: linkField,
  },
  defaultProps: {
    title: "Cart title",
    button: defaultLinkValue,
    items: Array.from({ length: 2 }, () => defaultItem),
  },
  render: ShoppingCart,
};

export default shoppingCartConfig;
