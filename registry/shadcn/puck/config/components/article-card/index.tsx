import { ComponentConfig } from "@puckeditor/core";
import "@puckeditor/ai-types";

import { SIZES, VARIANTS } from "../../../components/ui/base-button";
import { ICON_OPTIONS, IMAGE_16x9_PLACEHOLDER } from "../../../lib/constants";
import { ArticleCard, ArticleCardProps } from "./article-card";

export type { ArticleCardProps };

export const defaultArticleCardProps: ArticleCardProps = {
  heading: "Heading",
  description: "Description",
  button: {
    label: "Button",
    url: "",
    variant: "default",
    size: "default",
    icon: "none",
  },
  image: IMAGE_16x9_PLACEHOLDER,
};


export const conf: ComponentConfig<ArticleCardProps> = {
  fields: {
    heading: {
      type: "text",
      contentEditable: true,
    },
    description: {
      type: "text",
      contentEditable: true,
    },
    button: {
      type: "object",
      objectFields: {
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
          options: SIZES.map((size) => ({
            label: size,
            value: size,
          })),
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
    },
    image: {
      type: "object",
      objectFields: {
        src: { type: "text", ai: { stream: false } },
        alt: { type: "text" },
      },
      ai: {
        instructions: "Always use 16x9 ratio for images",
      },
    },
  },
  defaultProps: {
    heading: "Heading",
    description: "Description",
    button: {
      label: "Button",
      url: "",
      variant: "default",
      size: "default",
      icon: "none",
    },
    image: IMAGE_16x9_PLACEHOLDER,
  },
  render: ArticleCard,
};

export default conf;
