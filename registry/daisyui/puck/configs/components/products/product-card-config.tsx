import { ComponentConfig } from "@puckeditor/core";

import imageField from "../../fields/image";
import ProductCard, { ProductCardProps } from "./product-card";

export type { ProductCardProps };

const productCardConfig: ComponentConfig<ProductCardProps> = {
  inline: true,
  fields: {
    image: imageField,
    price: { type: "text", contentEditable: true },
    name: { type: "text", contentEditable: true },
    category: { type: "text", contentEditable: true },
    body: { type: "textarea", contentEditable: true },
    link: {
      type: "object",
      objectFields: {
        href: { type: "text" },
      },
    },
  },
  defaultProps: {
    price: "$99",
    name: "Product",
    category: "Category",
    body: "",
    image: { src: "https://placehold.co/600x400", alt: "Placeholder image" },
    link: { href: "#" },
  },
  render: ProductCard,
};

export default productCardConfig;
