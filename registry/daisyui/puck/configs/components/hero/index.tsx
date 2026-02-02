import { ComponentConfig } from "@puckeditor/core";
import "@puckeditor/ai-types";

import imageField from "../../fields/image";
import sectionTextField from "../../fields/section-text";
import buttonField, { defaultButtonValue } from "../../fields/link-button";
import Hero, { HeroProps } from "./hero";

export type { HeroProps };

const heroConfig: ComponentConfig<HeroProps> = {
  fields: {
    ...sectionTextField.objectFields,
    buttons: {
      type: "array",
      arrayFields: buttonField.objectFields,
      defaultItemProps: { ...defaultButtonValue, variant: "ghost" },
      max: 3,
    },
    imageLayout: {
      type: "select",
      options: [
        { label: "background", value: "background" },
        { label: "left", value: "left" },
        { label: "right", value: "right" },
        { label: "bottom", value: "bottom" },
        { label: "none", value: "none" },
      ],
      ai: {
        instructions:
          "Always pick the background layout unless instructed otherwise.",
      },
    },
    image: {
      ...imageField,
      objectFields: {
        ...imageField.objectFields,
        src: {
          ...imageField.objectFields.src,
          ai: {
            ...imageField.objectFields.src.ai,
            instructions:
              "Use this http://placehold.com/600x400?text=%5Cn for placeholder images.",
          },
        },
      },
    },
  },
  resolveFields: (data, params) => {
    const fieldsToReturn = { ...params.fields };

    if (data.props.imageLayout === "none") {
      delete fieldsToReturn.image;
    } else {
      fieldsToReturn.image = params.fields.image;
    }

    return fieldsToReturn;
  },
  defaultProps: {
    title: "Title",
    description: "Description",
    buttons: [{ ...defaultButtonValue, variant: "ghost" }],
    imageLayout: "background",
    image: {
      src: "https://placehold.co/600x400?text=%5Cn",
      alt: "Placeholder",
    },
  },
  render: Hero,
};

export default heroConfig;
