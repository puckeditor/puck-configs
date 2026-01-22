import { ObjectField } from "@puckeditor/core";
import "@puckeditor/ai-types";

import { FieldResolver } from "./types";

export type WidthFieldProps = {
  fullWidth: boolean;
  maxWidth?: number;
};

export const defaultWidthValue: WidthFieldProps = {
  fullWidth: true,
  maxWidth: 600,
};

export const resolveWidthValue: FieldResolver<WidthFieldProps> = (
  fieldProps,
  fields,
) => {
  if (!fieldProps.fullWidth) {
    return {
      ...fields,
      maxWidth: {
        type: "number",
        label: "max width (px)",
        min: 500,
        max: 1920,
      },
    };
  }

  return fields;
};

const widthField: ObjectField<WidthFieldProps> = {
  type: "object",
  objectFields: {
    fullWidth: {
      type: "radio",
      options: [
        { label: "limited", value: false },
        { label: "full", value: true },
      ],
      ai: { instructions: "always use limited width" },
    },
  },
};

export default widthField;
