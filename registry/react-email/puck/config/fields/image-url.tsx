import { ObjectField } from "@puckeditor/core";
import "@puckeditor/ai-types";

export type ImageFieldProps = { src: string; alt: string };

export const defaultImageValue: ImageFieldProps = {
  src: "https://placehold.jp/f5f5f5/f5f5f5/600x400.png",
  alt: "",
};

const imageField: ObjectField<ImageFieldProps> = {
  type: "object",
  objectFields: {
    src: { type: "text", ai: { stream: false } },
    alt: { type: "text", ai: { stream: false } },
  },
};

export default imageField;
