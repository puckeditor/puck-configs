import { ComponentConfig, ObjectField } from "@puckeditor/core";
import "@puckeditor/ai-types";

import imageField from "../../fields/image";
import ProductCard, { ProductCardProps } from "./product-card";

export type { ProductCardProps };

export const defaultProductValue: ProductCardProps = {
  price: "$99",
  name: "Product",
  category: "Category",
  body: "",
  image: { src: "https://placehold.co/600x400", alt: "Placeholder image" },
  href: "#",
  rating: 0,
};

export const productCardFields: ObjectField<ProductCardProps> = {
  type: "object",
  objectFields: {
    image: imageField,
    price: {
      type: "text",
      contentEditable: true,
      ai: {
        instructions: "The price of the product, including currency symbol.",
      },
    },
    name: { type: "text", contentEditable: true },
    category: { type: "text", contentEditable: true },
    body: {
      type: "textarea",
      contentEditable: true,
      ai: {
        instructions:
          "Never generate this unless explicitly requested by the user.",
      },
    },
    href: {
      type: "text",
      ai: { instructions: "Provide a URL for the product link." },
    },
    rating: {
      type: "number",
      min: 0,
      max: 5,
      step: 1,
      ai: {
        instructions:
          "Provide a rating as an integer between 0 and 5 stars. 0 means no rating.",
      },
    },
  },
};

const productCardConfig: ComponentConfig<ProductCardProps> = {
  inline: true,
  fields: productCardFields.objectFields,
  defaultProps: defaultProductValue,
  render: ProductCard,
};

export default productCardConfig;
