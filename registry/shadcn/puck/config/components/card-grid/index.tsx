import { ComponentConfig, ObjectField, SelectField } from "@puckeditor/core";
import "@puckeditor/ai-types";

import { ICON_OPTIONS, PADDING_OPTIONS } from "../../../lib/constants";
import { SIZES, VARIANTS } from "../../../components/ui/base-button";
import { ButtonProps } from "../../../components/button";

import { CardGrid, CardGridProps } from "./card-grid";

export type { CardGridProps };

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

const createDefaultCard = (index: number): CardGridProps["cards"][number] => ({
  icon: "none",
  heading: `Card ${index + 1}`,
  description: "Description",
  button: buttonDefaults,
});

export const conf: ComponentConfig<CardGridProps> = {
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
        icon,
      },
      defaultItemProps: buttonDefaults,
      ai: {
        instructions: "Buttons must use the same size",
      },
    },
    cards: {
      type: "array",
      min: 1,
      max: 8,
      getItemSummary: (item: { heading?: string }, index = 0) =>
        item.heading || `Card ${index + 1}`,
      arrayFields: {
        icon,
        heading: { type: "text", contentEditable: true },
        description: { type: "text", contentEditable: true },
        button,
      },
      defaultItemProps: createDefaultCard,
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
    heading: "Something new!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    badge: {
      label: "Platform",
      url: "",
      variant: "default",
    },
    buttons: [],
    cards: Array.from({ length: 1 }).map((_, index) =>
      createDefaultCard(index),
    ),
    padding: {
      top: "medium",
      bottom: "medium",
    },
  },
  render: CardGrid,
};

export default conf;
