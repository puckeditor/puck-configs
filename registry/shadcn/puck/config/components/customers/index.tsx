import { ComponentConfig, SelectField } from "@puckeditor/core";
import "@puckeditor/ai-types";

import { IMAGE_1x1_PLACEHOLDER, PADDING_OPTIONS } from "../../../lib/constants";
import { Customers, CustomersProps } from "./customers";

export type { CustomersProps };

const paddingLevel: SelectField = {
  type: "select",
  options: PADDING_OPTIONS,
  ai: {
    instructions: "Never select none as an option",
  },
};

const getDefaultCustomer = (
  index: number,
): CustomersProps["customers"][number] => ({
  name: `Customer ${index}`,
  image: IMAGE_1x1_PLACEHOLDER,
});

export const conf: ComponentConfig<CustomersProps> = {
  fields: {
    heading: { type: "text", contentEditable: true },
    customers: {
      type: "array",
      max: 15,
      getItemSummary: (item: CustomersProps["customers"][number], index = 0) =>
        item.name || `Customer ${index + 1}`,
      arrayFields: {
        name: { type: "text" },
        image: {
          type: "object",
          objectFields: {
            src: { type: "text", ai: { stream: false } },
            alt: { type: "text" },
          },
        },
      },
      defaultItemProps: {
        name: "Customer",
        image: IMAGE_1x1_PLACEHOLDER,
      },
    },
    layout: {
      type: "radio",
      options: [
        {
          label: "section",
          value: "section",
        },
        { label: "inline", value: "inline" },
      ],
    },
    padding: {
      type: "object",
      objectFields: {
        top: paddingLevel,
        bottom: paddingLevel,
      },
      ai: {
        exclude: true,
      },
    },
  },
  defaultProps: {
    padding: {
      top: "medium",
      bottom: "medium",
    },
    layout: "section",
    heading: "Trusted by hundreds of businesses worldwide",
    customers: Array.from({ length: 10 }).map((_, index) =>
      getDefaultCustomer(index),
    ),
  },
  render: Customers,
};

export default conf;
