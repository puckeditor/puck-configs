import { ComponentConfig } from "@puckeditor/core";
import {
  padding,
  paddingDefaults,
  heading,
  button,
  cards,
  image16x9Placeholder,
} from "@/registry/shadcn/configs/fields";
import { ArticleCardProps } from "@/registry/shadcn/components/article-card";
import { Articles, ArticlesProps } from "./articles";

export type { ArticlesProps };

const defaultButton: ArticlesProps["button"] = {
  label: "",
  url: "",
  variant: "default",
  size: "default",
  icon: "none",
};

const { icon: defaultIcon, ...defaultCardProps } = cards.defaultItemProps;

const defaultCard: NonNullable<ArticleCardProps> = {
  ...defaultCardProps,
  image: image16x9Placeholder,
};

export const conf: ComponentConfig<ArticlesProps> = {
  fields: {
    heading,
    button,
    cards: {
      type: "slot",
      allow: ["ArticleCard"],
    },
    padding,
  },
  defaultProps: {
    padding: paddingDefaults,
    heading: "Something new!",
    button: defaultButton,
    cards: Array.from({ length: 1 }).map((_, index) => ({
      type: "ArticleCard",
      props: {
        ...defaultCard,
        heading: `Card ${index + 1}`,
      },
    })),
  },
  render: Articles,
};

export default conf;
