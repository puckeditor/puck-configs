import { ComponentConfig } from "@puckeditor/core";

import buttonField, { defaultButtonValue } from "../../fields/link-button";

import FeaturedProducts, { FeaturedProductsProps } from "./featured-products";
import { defaultProductValue, productCardFields } from "./product-card-config";

export type { FeaturedProductsProps };

const { rating: _rating, ...productFieldsNoRating } =
  productCardFields.objectFields;
const { rating: _defaultRating, ...defaultProductValueNoRating } =
  defaultProductValue;

const featuredProductsConfig: ComponentConfig<FeaturedProductsProps> = {
  fields: {
    title: { type: "text", contentEditable: true },
    cta: buttonField,
    products: {
      type: "array",
      max: 10,
      arrayFields: productFieldsNoRating,
      defaultItemProps: defaultProductValueNoRating,
    },
  },
  defaultProps: {
    title: "Title",
    products: Array.from({ length: 5 }).map(() => defaultProductValueNoRating),
    cta: { ...defaultButtonValue, variant: "ghost" },
  },
  render: FeaturedProducts,
};

export default featuredProductsConfig;
