import { ComponentConfig } from "@puckeditor/core";
import "@puckeditor/ai-types";

import logoField, { defaultLogoValue } from "../../fields/logo-content";
import linkField, { defaultLinkValue } from "../../fields/rich-link";
import createSummaryFunc from "../../../lib/create-summary-func";

import Header, { HeaderProps, headerVariants } from "./Header";

export type { HeaderProps };

const defaultLinks = Array.from({ length: 3 }, () => defaultLinkValue);

const headerConfig: ComponentConfig<{ props: HeaderProps }> = {
  ai: {
    instructions: "Always put this at the top of the email",
  },
  fields: {
    logo: logoField,
    links: {
      type: "array",
      max: 4,
      arrayFields: linkField.objectFields,
      defaultItemProps: defaultLinkValue,
      getItemSummary: createSummaryFunc((link) => link.label),
      ai: {
        instructions: "Use single word labels for header navigation links",
      },
    },
    variant: {
      type: "select",
      options: headerVariants.map((variant) => ({
        label: variant,
        value: variant,
      })),
    },
  },
  defaultProps: {
    logo: defaultLogoValue,
    links: defaultLinks,
    variant: "column",
  },
  render: Header,
};

export default headerConfig;
