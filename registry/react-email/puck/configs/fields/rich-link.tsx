import { ObjectField } from "@puckeditor/core";

import imageField, { ImageFieldProps } from "@/registry/react-email/puck/configs/fields/image-url";

export type LinkFieldProps = {
  label: string;
  href: string;
  icon: ImageFieldProps;
};

export const defaultLinkValue: LinkFieldProps = {
  label: "Link",
  href: "#",
  icon: {
    src: "",
    alt: "",
  },
};

const linkField: ObjectField<LinkFieldProps> = {
  type: "object",
  objectFields: {
    label: { type: "text", contentEditable: true },
    href: { type: "text" },
    icon: {
      ...imageField,
      ai: { instructions: "don't use any icon for this component" },
    },
  },
};

export default linkField;
