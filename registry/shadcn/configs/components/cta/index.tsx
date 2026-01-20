import { ComponentConfig } from "@puckeditor/core";
import {
  padding,
  paddingDefaults,
  contentFields,
} from "@/registry/shadcn/configs/fields";

import { Cta, CtaProps } from "./cta";

export type { CtaProps };

export const conf: ComponentConfig<CtaProps> = {
  fields: {
    ...contentFields,
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
    padding,
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
        icon: "phone-call",
        variant: "outline",
      },
      {
        label: "Sign up here",
        icon: "move-right",
        variant: "default",
      },
    ],
    layout: "contained",
    padding: paddingDefaults,
  },
  render: Cta,
};

export default conf;
