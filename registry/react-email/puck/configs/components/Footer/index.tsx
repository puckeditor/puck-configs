import { ComponentConfig } from "@puckeditor/core";

import linkField, { defaultLinkValue } from "@/registry/react-email/puck/configs/fields/link";
import logoField, { defaultLogoValue } from "@/registry/react-email/puck/configs/fields/logo";
import createSummaryFunc from "@/registry/lib/create-summary-func";

import Footer, { FooterProps, footerVariants } from "./Footer";

export type { FooterProps };

const { label, ...linkFieldsNoLabel } = linkField.objectFields;

const defaultLinks: FooterProps["links"] = Array.from({ length: 3 }, () => ({
  href: "#",
  icon: defaultLogoValue.image,
}));

const footerConfig: ComponentConfig<{ props: FooterProps }> = {
  ai: {
    instructions: "Always put this at the bottom of the email",
  },
  fields: {
    logo: logoField,
    tagLine: { type: "textarea", label: "tag line", contentEditable: true },
    links: {
      type: "array",
      max: 3,
      arrayFields: linkFieldsNoLabel,
      defaultItemProps: defaultLinkValue,
      getItemSummary: createSummaryFunc((item) => item.icon.alt),
    },
    address: { type: "textarea", contentEditable: true },
    variant: {
      ai: { instructions: "Always use the column variant for this" },
      type: "select",
      options: footerVariants.map((variant) => ({
        label: variant,
        value: variant,
      })),
    },
  },
  defaultProps: {
    logo: defaultLogoValue,
    tagLine: "Tag",
    links: defaultLinks,
    address: "123 Main Street Anytown, CA 12345\nmail@example.com +123456789",
    variant: "row",
  },
  render: Footer,
};

export default footerConfig;
