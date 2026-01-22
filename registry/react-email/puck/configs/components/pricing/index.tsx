import { ComponentConfig, Slot } from "@puckeditor/core";

import widthField, {
  defaultWidthValue,
  resolveWidthValue,
} from "../../fields/width";

import Pricing, { PricingProps as PricingWithSlotComponents } from "./Pricing";
import { defaultTier, PricingTierProps } from "./pricing-tier-config";

export type PricingProps = { tiers: Slot } & Omit<
  PricingWithSlotComponents,
  "tiers"
>;

const defaultTiers: PricingTierProps[] = Array.from(
  { length: 2 },
  (_item, index) => ({
    ...defaultTier,
    highlighted: index % 2 === 1 ? true : false,
  }),
);

const pricingConfig: ComponentConfig<PricingProps> = {
  fields: {
    title: { type: "text", contentEditable: true },
    description: { type: "textarea", contentEditable: true },
    footnotes: { type: "text", contentEditable: true },
    ...widthField.objectFields,
    tiers: { type: "slot", allow: ["PricingTier"] },
  },
  resolveFields: (data, params) => {
    return resolveWidthValue(data.props, params.fields);
  },
  defaultProps: {
    title: "Pricing title",
    description: "Pricing description",
    ...defaultWidthValue,
    fullWidth: false,
    footnotes: "Pricing footnotes",
    tiers: defaultTiers.map((tier) => ({ type: "PricingTier", props: tier })),
  },
  render: Pricing,
};

export default pricingConfig;
