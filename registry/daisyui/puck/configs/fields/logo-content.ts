import { ObjectField } from "@puckeditor/core";

import imageField, { ImageFieldProps, defaultImageField } from "./image";

export type LogoFieldProps = {
  companyName: string;
  tagline: string;
} & ImageFieldProps;

export const defaultLogoField: LogoFieldProps = {
  ...defaultImageField,
  companyName: "Company",
  tagline: "Company tagline",
};

const logoField: ObjectField<LogoFieldProps> = {
  type: "object",
  objectFields: {
    ...imageField.objectFields,
    companyName: {
      type: "text",
      label: "company name",
      contentEditable: true,
    },
    tagline: { type: "text", contentEditable: true },
  },
};

export default logoField;
