import { ComponentConfig } from "@puckeditor/core";
import {
  padding,
  image,
  image1x1Placeholder,
  getPlaceholderImageUrl,
  paddingDefaults,
  heading,
} from "@/registry/shadcn/configs/fields";

import { Customers, CustomersProps } from "./customers";

export type { CustomersProps };

export const conf: ComponentConfig<CustomersProps> = {
  fields: {
    heading,
    customers: {
      type: "array",
      max: 15,
      getItemSummary: (item: CustomersProps["customers"][number], index = 0) =>
        item.name || `Customer ${index + 1}`,
      arrayFields: {
        name: { type: "text" },
        image,
      },
      defaultItemProps: {
        name: "Customer",
        image: image1x1Placeholder,
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
    padding,
  },
  defaultProps: {
    padding: paddingDefaults,
    layout: "section",
    heading: "Trusted by hundreds of businesses worldwide",
    customers: Array.from({ length: 10 }).map((_, index) => ({
      name: `Customer ${index + 1}`,
      image: {
        src: getPlaceholderImageUrl("1000x1000", `Customer ${index + 1}`),
        alt: "",
      },
    })),
  },
  render: Customers,
};

export default conf;
