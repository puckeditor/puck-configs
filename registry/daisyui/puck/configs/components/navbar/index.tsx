import { ComponentConfig } from "@puckeditor/core";

import logoField, { defaultLogoField } from "../../fields/logo-content";
import Navbar, { NavbarProps } from "./navbar";

export type { NavbarProps };

const { tagline: _taglineField, ...logoFieldsNoTagline } =
  logoField.objectFields;
const { tagline: _defaultTagline, ...defaultLogoFieldNoTagline } =
  defaultLogoField;

const navbarConfig: ComponentConfig<NavbarProps> = {
  fields: {
    logo: {
      type: "object",
      objectFields: logoFieldsNoTagline,
    },
    links: {
      type: "array",
      max: 5,
      arrayFields: {
        label: { type: "text" },
        href: { type: "text" },
      },
      defaultItemProps: { label: "Link", href: "#" },
    },
  },
  defaultProps: {
    logo: defaultLogoFieldNoTagline,
    links: Array.from({ length: 3 }).map((_) => ({ label: "Link", href: "#" })),
  },
  render: Navbar,
};

export default navbarConfig;
