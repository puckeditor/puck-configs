import { ComponentConfig } from "@puckeditor/core";
import {
  padding,
  paddingDefaults,
  contentFields,
  cards,
} from "@/registry/shadcn/configs/fields";
import { CardGrid, CardGridProps } from "./card-grid";

export type { CardGridProps };

export const conf: ComponentConfig<CardGridProps> = {
  fields: {
    ...contentFields,
    cards: {
      ...cards,
      min: 1,
      max: 8,
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
    cards: Array.from({ length: 1 }).map((_, index) => ({
      ...cards.defaultItemProps,
      heading: `Card ${index + 1}`,
    })),
    padding: paddingDefaults,
  },
  render: CardGrid,
};

export default conf;
