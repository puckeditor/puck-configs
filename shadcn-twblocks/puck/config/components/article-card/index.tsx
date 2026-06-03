import { ComponentConfig } from "@puckeditor/core";
import {
  cards,
  image,
  image16x9Placeholder,
  card,
} from "@/puck/config/fields";
import { ArticleCard } from "./article-card";
import { CompoundArticleCardProps } from "@/puck/components/article-card";

const { icon: defaultIcon, ...cardsDefaultItemProps } = cards.defaultItemProps;

export type ArticleCardProps = CompoundArticleCardProps;

export const conf: ComponentConfig<CompoundArticleCardProps> = {
  fields: {
    ...card.objectFields,
    image: {
      ...image,
      ai: {
        ...image.ai,
        instructions: "Always use 16x9 ratio for images",
      },
    },
  },
  defaultProps: {
    ...cardsDefaultItemProps,
    image: image16x9Placeholder,
  },
  render: ArticleCard,
};

export default conf;
