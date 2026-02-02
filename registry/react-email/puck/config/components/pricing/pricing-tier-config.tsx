import { ComponentConfig } from "@puckeditor/core";

import linkField, { defaultLinkValue } from "../../fields/rich-link";
import createSummaryFunc from "../../../lib/create-summary-func";

import PricingTier, { PricingTierProps } from "./PricingTier";

export type { PricingTierProps };

export const defaultTier: PricingTierProps = {
  title: "Pricing tier name",
  price: "$100",
  period: "/ month",
  description: "Pricing description.",
  features: [
    { description: "Pricing feature 1" },
    { description: "Pricing feature 2" },
    { description: "Pricing feature 3" },
    { description: "Pricing feature 4" },
  ],
  button: {
    label: "Acquire pricing",
    href: "#",
    icon: defaultLinkValue.icon,
  },
  highlighted: false,
};

const pricingTierConfig: ComponentConfig<PricingTierProps> = {
  fields: {
    title: { type: "text", contentEditable: true },
    price: { type: "text", contentEditable: true },
    period: { type: "text", contentEditable: true },
    description: { type: "textarea", contentEditable: true },
    features: {
      type: "array",
      max: 6,
      arrayFields: { description: { type: "text", contentEditable: true } },
      getItemSummary: createSummaryFunc((feat) => feat.description),
      defaultItemProps: { description: "Feature description..." },
    },
    button: linkField,
    highlighted: {
      type: "radio",
      label: "highlight",
      options: [
        { label: "on", value: true },
        { label: "off", value: false },
      ],
    },
  },
  defaultProps: defaultTier,
  render: PricingTier,
};

export default pricingTierConfig;
