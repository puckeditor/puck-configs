import { ComponentConfig, Slot } from "@puckeditor/core";

import sectionTextField, {
  defaultSectionTextValue,
} from "../../fields/section-text";
import Content, { ContentProps } from "../../../components/content";
import buttonField, { defaultButtonValue } from "../../fields/link-button";

export type ProductsProps = {
  products: Slot;
} & ContentProps;

const productsConfig: ComponentConfig<ProductsProps> = {
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
    products: [],
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
