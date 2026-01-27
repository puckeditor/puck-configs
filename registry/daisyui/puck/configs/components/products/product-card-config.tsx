import { ComponentConfig, ObjectField } from "@puckeditor/core";

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
};

export const productCardFields: ObjectField<ProductCardProps> = {
  type: "object",
  objectFields: {
    image: imageField,
    price: { type: "text", contentEditable: true },
    name: { type: "text", contentEditable: true },
    category: { type: "text", contentEditable: true },
    body: { type: "textarea", contentEditable: true },
    href: { type: "text" },
  },
};

const productCardConfig: ComponentConfig<ProductCardProps> = {
  inline: true,
  fields: productCardFields.objectFields,
  defaultProps: defaultProductValue,
  render: ProductCard,
};

export default productCardConfig;
