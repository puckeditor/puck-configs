import { ComponentConfig, Slot } from "@puckeditor/core";
import "@puckeditor/ai-types";

import sectionTextField, {
  defaultSectionTextValue,
} from "../../fields/section-text";
import Content, { ContentProps } from "../../../components/content";
import buttonField, { defaultButtonValue } from "../../fields/link-button";

import { defaultProductValue } from "./product-card-config";

export type ProductsProps = {
  products: Slot;
} & ContentProps;

const defaultCards = Array.from({
  length: 4,
}).map(() => ({ type: "ProductCard", props: defaultProductValue }));

const productsConfig: ComponentConfig<ProductsProps> = {
  ai: {
    instructions:
      "Shows a grid of product cards. In desktop shows 4 columns, in tablet 2 columns, and in mobile 1 column.",
  },
  fields: {
    ...sectionTextField.objectFields,
    buttons: {
      type: "array",
      max: 3,
      arrayFields: buttonField.objectFields,
      defaultItemProps: defaultButtonValue,
    },
    products: { type: "slot", allow: ["ProductCard"] },
  },
  defaultProps: {
    ...defaultSectionTextValue,
    buttons: [],
    products: defaultCards,
  },
  render: ({ title, description, buttons, products: Products }) => (
    <Content
      title={title}
      description={description}
      buttons={buttons}
      textAlign="start"
      className="lg:max-w-[1600px]"
    >
      <Products className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" />
    </Content>
  ),
};

export default productsConfig;
