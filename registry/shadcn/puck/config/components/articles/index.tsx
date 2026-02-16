import { ComponentConfig, SelectField } from "@puckeditor/core";
import "@puckeditor/ai-types";

import {
  ICON_OPTIONS,
  PADDING_OPTIONS,
} from "../../../lib/constants";
import { SIZES, VARIANTS } from "../../../components/ui/base-button";
import { defaultArticleCardProps } from "../article-card";

import { Articles, ArticlesProps } from "./articles";

export type { ArticlesProps };

export const paddingLevel: SelectField = {
  type: "select",
  options: PADDING_OPTIONS,
  ai: {
    instructions: "Never select none as an option",
  },
};

export const conf: ComponentConfig<ArticlesProps> = {
  fields: {
    heading: {
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
    padding: {
      top: "medium",
      bottom: "medium",
    },
    heading: "Something new!",
    button: {
      label: "",
      url: "",
      variant: "default",
      size: "default",
      icon: "none",
    },
    cards: Array.from({ length: 1 }).map(() => ({
      type: "ArticleCard",
      props: defaultArticleCardProps,
    })),
  },
  render: Articles,
};

export default conf;
