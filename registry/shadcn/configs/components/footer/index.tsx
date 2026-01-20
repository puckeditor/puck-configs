import { ComponentConfig } from "@puckeditor/core";
import { padding, paddingDefaults } from "@/registry/shadcn/configs/fields";
import { Footer, FooterProps } from "./footer";

export type { FooterProps };

export const conf: ComponentConfig<FooterProps> = {
  ai: {
    instructions: "Always include a footer",
  },
  fields: {
    companyName: {
      label: "company name",
      type: "text",
      contentEditable: true,
    },
    tagLine: {
      label: "tag line",
      type: "textarea",
      contentEditable: true,
    },
    address: {
      type: "textarea",
      contentEditable: true,
    },
    navigation: {
      label: "primary navigation",
      type: "array",
      max: 9,
      getItemSummary: (item, index = 0) => item.label || `Item ${index + 1}`,
      arrayFields: {
        label: { type: "text", contentEditable: true },
        url: { type: "text" },
        items: {
          ai: {
            required: true,
            instructions: "Always include items with relevant links",
          },
          type: "array",
          max: 9,
          getItemSummary: (item, index = 0) =>
            item.label || `Item ${index + 1}`,
          arrayFields: {
            label: { type: "text", contentEditable: true },
            url: { type: "text" },
          },
          defaultItemProps: {
            label: "link",
            url: "#",
          },
        },
      },
      defaultItemProps: {
        label: "link",
        url: "",
        items: [{ label: "", url: "" }],
      },
    },
    legalLinks: {
      label: "legal links",
      type: "array",
      max: 9,
      getItemSummary: (item, index = 0) => item?.label || `Item ${index + 1}`,
      arrayFields: {
        label: { type: "text", contentEditable: true },
        url: { type: "text" },
      },
      defaultItemProps: {
        label: "Link",
        url: "",
      },
    },
    padding,
  },
  defaultProps: {
    padding: paddingDefaults,
    companyName: "Puck Visual Editor",
    tagLine: "Build visually. Launch instantly.",
    address: "1 Puck Avenue\nVisual Park\nCA 123123\n© 2024 Puck, Inc.",
    navigation: [
      {
        label: "Home",
        url: "/",
        items: [{ label: "", url: "/" }],
      },
      {
        label: "Product",
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
    ],
    legalLinks: [
      {
        label: "Terms of service",
        url: "/terms",
      },
      {
        label: "Privacy Policy",
        url: "/privacy",
      },
    ],
  },
  render: Footer,
};

export default conf;
