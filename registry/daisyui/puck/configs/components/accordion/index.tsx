import { ComponentConfig } from "@puckeditor/core";

import Accordion, { AccordionProps } from "./accordion";
import sectionTextField from "../../fields/section-text";
import buttonField, { defaultButtonValue } from "../../fields/link-button";

export type { AccordionProps };

const accordionConfig: ComponentConfig<AccordionProps> = {
  fields: {
    ...sectionTextField.objectFields,
    buttons: {
      type: "array",
      max: 3,
      arrayFields: {
        ...buttonField.objectFields,
      },
      defaultItemProps: defaultButtonValue,
    },
    items: {
      type: "array",
      max: 20,
      arrayFields: {
        title: { type: "text", contentEditable: true },
        body: { type: "richtext", contentEditable: true },
      },
      defaultItemProps: {
        title: "Accordion item",
        body: "Accordion body",
      },
    },
  },
  defaultProps: {
    title: "Accordion",
    description: "Description",
    buttons: Array.from({ length: 2 }).map(() => defaultButtonValue),
    items: [{ title: "Accordion item", body: "Accordion body" }],
  },
  render: Accordion,
};

export default accordionConfig;
