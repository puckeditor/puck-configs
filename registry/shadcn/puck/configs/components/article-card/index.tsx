import { ComponentConfig } from "@puckeditor/core";
import "@puckeditor/ai-types";

import {
  cards,
  image,
  image16x9Placeholder,
  card,
} from "@/registry/shadcn/puck/configs/fields";
import { ArticleCard, ArticleCardProps } from "./article-card";

const { icon: defaultIcon, ...cardsDefaultItemProps } = cards.defaultItemProps;

export type { ArticleCardProps };

export const conf: ComponentConfig<ArticleCardProps> = {
  fields: {
    ...card.objectFields,
    image: {
      ...image,
      ai: {
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
