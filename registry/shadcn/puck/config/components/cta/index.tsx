import { ComponentConfig, SelectField } from "@puckeditor/core";
import "@puckeditor/ai-types";

import { ICON_OPTIONS, PADDING_OPTIONS } from "../../../lib/constants";
import { SIZES, VARIANTS } from "../../../components/ui/base-button";

import { Cta, CtaProps } from "./cta";

export type { CtaProps };

const paddingLevel: SelectField = {
  type: "select",
  options: PADDING_OPTIONS,
  ai: {
    instructions: "Never select none as an option",
  },
};

export const conf: ComponentConfig<CtaProps> = {
  fields: {
    heading: { type: "text", contentEditable: true },
    description: { type: "text", contentEditable: true },
    badge: {
      type: "object",
      objectFields: {
        label: { type: "text" },
        url: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "default", value: "default" },
            { label: "secondary", value: "secondary" },
            { label: "destructive", value: "destructive" },
            { label: "outline", value: "outline" },
          ],
        },
      },
    },
    buttons: {
      type: "array",
      max: 3,
      getItemSummary: (item: { label?: string }, index = 0) =>
        item.label || `Button ${index + 1}`,
      arrayFields: {
        label: { type: "text" },
        url: { type: "text" },
        variant: {
          type: "select",
          options: VARIANTS.map((variant) => ({
            label: variant,
            value: variant,
          })),
        },
        size: {
          type: "select",
          options: SIZES.map((size) => ({ label: size, value: size })),
        },
        icon: {
          ai: {
            instructions:
              "Add icons sparingly, usually only on one CTA per page. Only apply an appropriate icon, otherwise use `none`",
          },
          type: "select",
          options: ICON_OPTIONS,
        },
      },
      defaultItemProps: {
        label: "Button",
        url: "",
        variant: "default",
        size: "default",
        icon: "none",
      },
      ai: {
        instructions: "Buttons must use the same size",
      },
    },
    layout: {
      type: "radio",
      options: [
        {
          label: "contained",
          value: "contained",
        },
        { label: "full bleed", value: "full-bleed" },
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
    heading: "Try our platform today!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    badge: {
      label: "FAQ",
      url: "/faq",
      variant: "default",
    },
    buttons: [
      {
        label: "Jump on a call",
        icon: "none",
        variant: "outline",
      },
      {
        label: "Sign up here",
        icon: "none",
        variant: "default",
      },
    ],
    layout: "contained",
    padding: {
      top: "medium",
      bottom: "medium",
    },
  },
  render: Cta,
};

export default conf;
