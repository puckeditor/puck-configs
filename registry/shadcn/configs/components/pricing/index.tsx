import { ComponentConfig } from "@puckeditor/core";
import {
  contentFields,
  padding,
  paddingDefaults,
  features,
  button,
} from "@/registry/shadcn/configs/fields";

import { Pricing, PricingProps } from "./pricing";

export type { PricingProps };

export const conf: ComponentConfig<PricingProps> = {
  fields: {
    ...contentFields,
    tiers: {
      type: "array",
      getItemSummary: (item, index = 0) => item.name || `Tier ${index + 1}`,
      arrayFields: {
        name: { type: "text", contentEditable: true },
        description: {
          type: "textarea",
          contentEditable: true,
        },
        cost: { type: "text", contentEditable: true },
        cycle: { type: "text", contentEditable: true },
        features,
        button,
      },
      defaultItemProps: {
        name: "Plan / product / pricing tier name",
        description: "Product description",
        cost: "$50",
        cycle: "month",
        features: [features.defaultItemProps],
        button: {
          label: "Choose",
          url: "#",
          variant: "default",
          size: "default",
          icon: "arrow-right",
        },
      },
      min: 1,
      max: 3,
    },
    padding,
  },
  defaultProps: {
    padding: paddingDefaults,
    badge: {
      label: "Platform",
      url: "",
      variant: "default",
    },
    heading: "Something new!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    buttons: [],
    tiers: Array.from({ length: 3 }).map((_, index) => ({
      name: `Plan ${index + 1}`,
      description:
        "Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.",
      cost: "$40",
      cycle: "month",
      features: Array.from({ length: 3 }).map((_, index) => ({
        icon: "check",
        name: `Feature ${index + 1}`,
        description: "We've made it fast and reliable.",
      })),
      button: {
        label: "Sign up today",
        url: "#",
        icon: "arrow-right",
        variant: "outline",
        size: "default",
      },
    })),
  },
  render: Pricing,
};

export default conf;
