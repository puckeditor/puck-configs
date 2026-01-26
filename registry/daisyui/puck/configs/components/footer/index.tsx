import { ComponentConfig } from "@puckeditor/core";

import imageField, { defaultImageField } from "../../fields/image";
import logoField, { defaultLogoField } from "../../fields/logo-content";

import Footer, { FooterProps } from "./footer";

export type { FooterProps };

const footerConfig: ComponentConfig<FooterProps> = {
  fields: {
    sections: {
      type: "array",
      max: 5,
      arrayFields: {
        title: { type: "text", contentEditable: true },
        links: {
          type: "array",
          max: 8,
          arrayFields: {
            label: { type: "text", contentEditable: true },
            href: { type: "text" },
          },
          defaultItemProps: { label: "Link", href: "#" },
        },
      },
      defaultItemProps: {
        title: "Section",
        links: [{ label: "Link", href: "#" }],
      },
    },
    logo: logoField,
    socials: {
      type: "array",
      max: 5,
      arrayFields: {
        href: { type: "text" },
        name: { type: "text" },
        logo: imageField,
      },
      defaultItemProps: {
        href: "#",
        name: "Social",
        logo: defaultImageField,
      },
    },
  },
  defaultProps: {
    sections: Array.from({ length: 4 }).map((_, idx) => ({
      title: `Section - ${idx + 1}`,
      links: [{ label: "Link 1", href: "#" }],
    })),
    logo: defaultLogoField,
    socials: [
      {
        href: "#",
        name: "Social",
        logo: defaultImageField,
      },
    ],
  },
  render: Footer,
};

export default footerConfig;
