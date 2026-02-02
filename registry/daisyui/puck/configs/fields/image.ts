import { ObjectField } from "@puckeditor/core";
import "@puckeditor/ai-types";

export type ImageFieldProps = {
  src: string;
  alt: string;
};

export const defaultImageField: ImageFieldProps = {
  src: "https://res.cloudinary.com/die3nptcg/image/upload/Puck_Graphic_Logo_Black_RGB_phdnzb.png",
  alt: "Logo",
};

const imageField: ObjectField<ImageFieldProps> = {
  type: "object",
  objectFields: {
    src: { type: "text", ai: { stream: false } },
    alt: { type: "text" },
  },
};

export default imageField;
