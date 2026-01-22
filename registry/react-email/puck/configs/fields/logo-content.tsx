import { ObjectField } from "@puckeditor/core";
import imageField, { ImageFieldProps } from "@/registry/react-email/puck/configs/fields/image-url";

export type LogoFieldProps = {
  label: string;
  image: ImageFieldProps;
};

export const defaultLogoValue: LogoFieldProps = {
  label: "LOGO",
  image: {
    src: "https://res.cloudinary.com/die3nptcg/image/upload/Puck_Graphic_Logo_Black_RGB_phdnzb.png",
    alt: "Company email logo",
  },
};

const logoField: ObjectField<LogoFieldProps> = {
  type: "object",
  objectFields: {
    label: { type: "text", contentEditable: true },
    image: imageField,
  },
};

export default logoField;
