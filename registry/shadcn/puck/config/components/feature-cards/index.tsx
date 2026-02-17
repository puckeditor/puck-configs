import { ComponentConfig, SelectField } from "@puckeditor/core";
import "@puckeditor/ai-types";

import {
  ICON_OPTIONS,
  PADDING_OPTIONS,
  IMAGE_16x9_PLACEHOLDER,
} from "../../../lib/constants";
import { SIZES, VARIANTS } from "../../../components/ui/base-button";
import { ButtonProps } from "../../../components/button";
import { ArticleCardProps } from "../../../components/article-card";

import { FeatureCards, FeatureCardsProps } from "./feature-cards";

export type { FeatureCardsProps };

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

const getDefaultCard = (index: number): NonNullable<ArticleCardProps> => ({
  heading: `Card ${index + 1}`,
  description: "Description",
  button: buttonDefaults,
  image: IMAGE_16x9_PLACEHOLDER,
});

export const conf: ComponentConfig<FeatureCardsProps> = {
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
        icon: {
          ai: {
            instructions:
              "Add icons sparingly, usually only on one CTA per page. Only apply an appropriate icon, otherwise use `none`",
          },
          type: "select",
          options: ICON_OPTIONS,
        },
      },
      defaultItemProps: buttonDefaults,
      ai: {
        instructions: "Buttons must use the same size",
      },
    },
    alignContent: {
      label: "align content",
      type: "radio",
      options: [
        { label: "start", value: "start" },
        { label: "center", value: "center" },
        { label: "end", value: "end" },
      ],
    },
    cards: {
      type: "slot",
      allow: ["ArticleCard"],
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
    alignContent: "start",
    cards: Array.from({ length: 1 }).map((_, index) => ({
      type: "ArticleCard",
      props: getDefaultCard(index),
    })),
    padding: {
      top: "medium",
      bottom: "medium",
    },
  },
  render: FeatureCards,
};

export default conf;
