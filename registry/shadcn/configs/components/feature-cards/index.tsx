import { ComponentConfig } from "@puckeditor/core";
import {
  padding,
  paddingDefaults,
  contentFields,
  cards,
  image16x9Placeholder,
} from "@/registry/shadcn/configs/fields";
import { ArticleCardProps } from "@/registry/shadcn/components/article-card";

import { FeatureCards, FeatureCardsProps } from "./feature-cards";

export type { FeatureCardsProps };

const { icon: defaultIcon, ...cardsDefaultItemProps } = cards.defaultItemProps;

const defaultCard: NonNullable<ArticleCardProps> = {
  ...cardsDefaultItemProps,
  image: image16x9Placeholder,
};

export const conf: ComponentConfig<FeatureCardsProps> = {
  fields: {
    ...contentFields,
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
    padding,
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
      props: {
        ...defaultCard,
        heading: `Card ${index + 1}`,
      },
    })),
    padding: paddingDefaults,
  },
  render: FeatureCards,
};

export default conf;
