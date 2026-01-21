import { ObjectField } from "@puckeditor/core";

import {
  CardType,
  cardTypes,
  CardVariant,
  cardVariants,
} from "@/registry/react-email/puck/components/card";
import imageField, { ImageFieldProps } from "@/registry/react-email/puck/config/fields/image";
import linkField, {
  defaultLinkValue,
  LinkFieldProps,
} from "@/registry/react-email/puck/config/fields/link";

export type CardFieldProps = {
  type: CardType;
  image: ImageFieldProps;
  title: string;
  description: string;
  tag: string;
  price?: string;
  button: LinkFieldProps;
  variant: CardVariant;
};

export const defaultCardProps: CardFieldProps = {
  type: "article",
  variant: "inline",
  image: {
    src: "https://placehold.jp/f5f5f5/f5f5f5/150x150.png",
    alt: "Alt text",
  },
  tag: "Tag",
  title: "Title",
  description: "",
  price: "$100",
  button: { ...defaultLinkValue, label: "Read more" },
};

export const resolveCardFields = (
  data: CardFieldProps,
  params: { fields: ObjectField<CardFieldProps>["objectFields"] },
) => {
  const newFields = { ...params.fields };

  if (data.type !== "product") {
    delete newFields.price;
  }

  return newFields;
};

const cardField: ObjectField<CardFieldProps> = {
  type: "object",
  objectFields: {
    type: {
      type: "radio",
      options: cardTypes.map((variant) => ({
        label: variant,
        value: variant,
      })),
      ai: {
        instructions:
          "choose the most appropriate card type based on the content. product will show the price field. article will not.",
      },
    },
    variant: {
      type: "radio",
      options: cardVariants.map((option) => ({
        label: option,
        value: option,
      })),
      ai: {
        instructions:
          "inline will make the card more compact displaying as a row and wrapping as needed. featured will make the card more prominent and will always follow a column layout.",
      },
    },
    image: imageField,
    tag: { label: "tagline", type: "text", contentEditable: true },
    title: { type: "text", contentEditable: true },
    description: { type: "textarea", contentEditable: true },
    price: {
      type: "text",
      contentEditable: true,
      ai: {
        instructions: "this price is only shown if the card type is 'product'.",
      },
    },
    button: linkField,
  },
};

export default cardField;
