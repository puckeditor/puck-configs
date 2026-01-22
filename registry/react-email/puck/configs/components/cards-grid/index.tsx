import { ComponentConfig } from "@puckeditor/core";
import "@puckeditor/ai-types";

import sectionTextField, {
  defaultSectionTextValue,
} from "@/registry/react-email/puck/configs/fields/section-text";
import cardField, { defaultCardProps } from "@/registry/react-email/puck/configs/fields/card-content";

import CardsGrid, { CardsGridProps } from "./CardsGrid";

export type { CardsGridProps };

const cardsGridConfig: ComponentConfig<CardsGridProps> = {
  ai: {
    instructions: "displays a grid with two columns containing the cards.",
  },
  fields: {
    ...sectionTextField.objectFields,
    cards: {
      ai: {
        instructions:
          "always add 2 or 4 cards. only use the inline variant. always use the same type of cards for each grid.",
      },
      type: "array",
      min: 1,
      max: 4,
      arrayFields: {
        ...cardField.objectFields,
      },
      defaultItemProps: defaultCardProps,
    },
  },
  defaultProps: {
    ...defaultSectionTextValue,
    cards: [defaultCardProps, defaultCardProps],
  },
  render: CardsGrid,
};

export default cardsGridConfig;
