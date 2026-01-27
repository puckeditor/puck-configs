import { ComponentConfig } from "@puckeditor/core";

import buttonField, { defaultButtonValue } from "../../fields/link-button";

import FeaturedProducts, { FeaturedProductsProps } from "./featured-products";
import { defaultProductValue, productCardFields } from "./product-card-config";

export type { FeaturedProductsProps };

const featuredProductsConfig: ComponentConfig<FeaturedProductsProps> = {
  fields: {
    title: { type: "text", contentEditable: true },
    cta: buttonField,
    products: {
      type: "array",
      max: 10,
      arrayFields: productCardFields.objectFields,
      defaultItemProps: defaultProductValue,
    },
  },
  defaultProps: {
    title: "Title",
    products: Array.from({ length: 5 }).map(() => defaultProductValue),
    cta: { ...defaultButtonValue, variant: "ghost" },
  },
  render: FeaturedProducts,
};

export default featuredProductsConfig;
