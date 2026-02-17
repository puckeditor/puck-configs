import {
  ComponentConfig,
  ObjectField,
  SelectField,
} from "@puckeditor/core";
import "@puckeditor/ai-types";

import { ICON_OPTIONS, PADDING_OPTIONS } from "../../../lib/constants";
import { SIZES, VARIANTS } from "../../../components/ui/base-button";
import { ButtonProps } from "../../../components/button";
import { FormMethods, formMethods } from "../../../components/form";
import { fieldTypes } from "../../../components/field";

import { ContactUs, ContactUsProps } from "./contact-us";

export type { ContactUsProps };

const icon: SelectField = {
  ai: {
    instructions:
      "Add icons sparingly, usually only on one CTA per page. Only apply an appropriate icon, otherwise use `none`",
  },
  type: "select",
  options: ICON_OPTIONS,
};

const button: ObjectField<ButtonProps> = {
  type: "object",
  objectFields: {
    label: { type: "text" },
    url: { type: "text" },
    variant: {
      type: "select",
      options: VARIANTS.map((variant) => ({ label: variant, value: variant })),
    },
    size: {
      type: "select",
      options: SIZES.map((size) => ({ label: size, value: size })),
    },
    icon,
  },
};

const buttonDefaults: ButtonProps = {
  label: "Button",
  url: "",
  variant: "default",
  size: "default",
  icon: "none",
};

const paddingLevel: SelectField = {
  type: "select",
  options: PADDING_OPTIONS,
  ai: {
    instructions: "Never select none as an option",
  },
};

const { url, ...formButtonConfig } = button.objectFields;

export const conf: ComponentConfig<ContactUsProps> = {
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
    features: {
      type: "array",
      max: 5,
      getItemSummary: (item: { name?: string }, index = 0) =>
        item.name || `Feature ${index + 1}`,
      arrayFields: {
        icon,
        name: { type: "text", contentEditable: true },
        description: { type: "textarea", contentEditable: true },
      },
      defaultItemProps: {
        icon: "none",
        name: "Feature name",
        description: "Description of the feature",
      },
    },
    buttons: {
      type: "array",
      max: 3,
      getItemSummary: (item: { label?: string }, index = 0) =>
        item.label || `Button ${index + 1}`,
      arrayFields: {
        ...button.objectFields,
      },
      defaultItemProps: buttonDefaults,
      ai: {
        instructions: "Buttons must use the same size",
      },
    },
    form: {
      type: "object",
      objectFields: {
        title: { type: "text", contentEditable: true },
        fields: {
          type: "array",
          min: 1,
          max: 10,
          arrayFields: {
            label: { type: "text", contentEditable: true },
            name: { type: "text" },
            type: {
              type: "select",
              options: fieldTypes.map((field) => ({
                label: field,
                value: field,
              })),
            },
          },
          getItemSummary: (item: { label?: string }, index = 0) =>
            item.label || `Field ${index + 1}`,
          defaultItemProps: {
            label: "Field Label",
            type: "text",
            name: "field_name",
          },
        },
        action: { type: "text", label: "submit url" },
        method: {
          type: "select",
          label: "submit method",
          options: formMethods.map((method) => ({
            label: method,
            value: method,
          })),
        },
        button: {
          ...button,
          objectFields: {
            ...formButtonConfig,
          },
        },
      },
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
        icon: "none",
        name: feature,
        description: "We've made it easy to use and understand.",
      }),
    ),
    form: {
      title: "Book a meeting",
      fields: [
        { label: "First name", type: "text", name: "first_name" },
        { label: "Last name", type: "text", name: "last_name" },
        { label: "Resume", type: "file", name: "resume" },
      ],
      action: "/submit-form",
      method: "post" as FormMethods,
      button: {
        label: "Book the meeting",
        variant: "default",
        size: "default",
        icon: "none",
      },
    },
    padding: {
      top: "medium",
      bottom: "medium",
    },
  },
  render: ContactUs,
};

export default conf;
