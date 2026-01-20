import { ComponentConfig } from "@puckeditor/core";
import {
  padding,
  paddingDefaults,
  contentFieldsWithFeatures,
  form,
  formDefaults,
} from "@/registry/shadcn/configs/fields";

import { ContactUs, ContactUsProps } from "./contact-us";

export type { ContactUsProps };

export const conf: ComponentConfig<ContactUsProps> = {
  fields: {
    ...contentFieldsWithFeatures,
    form,
    padding,
  },
  defaultProps: {
    badge: {
      label: "Contact",
      url: "",
      variant: "default",
    },
    heading: "Something new",
    description:
      "Managing a small business today is already tough. Avoid further complications by ditching outdated, tedious trade methods.",
    buttons: [],
    features: ["Easy to use", "Fast and reliable", "Beautiful and modern"].map(
      (feature) => ({
        icon: "check",
        name: feature,
        description: "We've made it easy to use and understand.",
      })
    ),
    form: formDefaults,
    padding: paddingDefaults,
  },
  render: ContactUs,
};

export default conf;
