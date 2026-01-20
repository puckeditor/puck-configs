import { ComponentConfig } from "@puckeditor/core";
import {
  padding,
  paddingDefaults,
  contentFields,
  cards,
} from "@/registry/shadcn/configs/fields";

import { Bento, BentoProps } from "./bento";

export type { BentoProps };

export const conf: ComponentConfig<BentoProps> = {
  fields: {
    ...contentFields,
    cards: {
      ...cards,
      min: 1,
      max: 4,
    },
    padding,
  },
  defaultProps: {
    badge: {
      label: "Platform",
      url: "",
      variant: "default",
    },
    heading: "Something new!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    buttons: [],
    cards: Array.from({ length: 1 }).map((_, index) => ({
      ...cards.defaultItemProps,
      heading: `Card ${index + 1}`,
    })),
    padding: paddingDefaults,
  },
  render: Bento,
};

export default conf;
