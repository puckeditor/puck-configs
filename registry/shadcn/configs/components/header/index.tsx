import { ComponentConfig } from "@puckeditor/core";

import { button } from "@/registry/shadcn/configs/fields";
import { Header, HeaderProps } from "./header";

export type { HeaderProps };

export const defaultPrimaryNavigationItems = [
  {
    label: "Home",
    url: "/",
    description: "",
    items: [],
    cta: {
      label: "",
      url: "",
      size: "default" as const,
      variant: "default" as const,
      icon: "none" as const,
    },
  },
  {
    label: "Product",
    description: "Managing a small business today is already tough.",
    cta: {
      label: "Book a call today",
      url: "#",
      size: "default" as const,
      variant: "default" as const,
      icon: "none" as const,
    },
    items: [
      {
        label: "Reports",
        url: "/reports",
      },
      {
        label: "Statistics",
        url: "/statistics",
      },
      {
        label: "Dashboards",
        url: "/dashboards",
      },
      {
        label: "Recordings",
        url: "/recordings",
      },
    ],
  },
  {
    label: "Company",
    description: "Managing a small business today is already tough.",
    cta: {
      label: "Book a call today",
      url: "#",
      size: "default" as const,
      variant: "default" as const,
      icon: "none" as const,
    },
    items: [
      {
        label: "About us",
        url: "/about",
      },
      {
        label: "Fundraising",
        url: "/fundraising",
      },
      {
        label: "Investors",
        url: "/investors",
      },
      {
        label: "Contact us",
        url: "/contact",
      },
    ],
  },
];

const defaultSecondaryNavigationItems = [
  {
    label: "Book a demo",
    url: "#",
    variant: "ghost" as const,
    icon: "none" as const,
    divider: "true" as const,
    isHiddenOnMobile: "true" as const,
  },
  {
    label: "Sign in",
    url: "#",
    variant: "outline" as const,
    icon: "none" as const,
    divider: "false" as const,
    isHiddenOnMobile: "false" as const,
  },
  {
    label: "Get started",
    url: "#",
    variant: "default" as const,
    icon: "none" as const,
    divider: "false" as const,
    isHiddenOnMobile: "true" as const,
  },
];

const conf: ComponentConfig<HeaderProps> = {
  ai: {
    instructions: "Always include a header",
  },
  fields: {
    companyName: {
      label: "company name",
      type: "text",
    },
    primaryNavigation: {
      label: "primary navigation",
      type: "array",
      max: 4,
      getItemSummary: (item, index = 0) => item.label || `Link ${index + 1}`,
      arrayFields: {
        label: { type: "text" },
        url: { type: "text" },
        description: { type: "textarea" },
        cta: button,
        items: {
          type: "array",
          max: 6,
          getItemSummary: (item, index = 0) =>
            item.label || `Item ${index + 1}`,
          arrayFields: {
            label: { type: "text" },
            url: { type: "text" },
          },
          defaultItemProps: {
            label: "Link",
            url: "",
          },
        },
      },
      defaultItemProps: {
        label: "Link",
        url: "",
        description: "A description will appear if the link has no URL defined",
        cta: {
          label: "Book a call today",
          url: "#",
          variant: "default" as const,
          icon: "none" as const,
        },
        items: [],
      },
    },
    secondaryNavigation: {
      label: "secondary navigation",
      type: "array",
      max: 4,
      getItemSummary: (item, index = 0) => item.label || `Link ${index}`,
      arrayFields: {
        label: { type: "text" },
        url: { type: "text" },
        variant: button.objectFields.variant,
        icon: button.objectFields.icon,
        divider: {
          type: "radio",
          options: [
            { label: "yes", value: "true" },
            { label: "no", value: "false" },
          ],
        },
        isHiddenOnMobile: {
          label: "hide on small screens",
          type: "radio",
          options: [
            { label: "yes", value: "true" },
            { label: "no", value: "false" },
          ],
        },
      },
      defaultItemProps: {
        label: "Link",
        url: "#",
        variant: "outline" as const,
        divider: "false",
        isHiddenOnMobile: "true",
      },
    },
  },
  defaultProps: {
    companyName: "TWBlocks",
    primaryNavigation: defaultPrimaryNavigationItems,
    secondaryNavigation: defaultSecondaryNavigationItems,
  },
  render: Header,
};

export default conf;
