import { ReactNode } from "react";
import { ObjectField } from "@puckeditor/core";
import "@puckeditor/ai-types";

import { Variant, VARIANTS } from "../../components/button";

export type ButtonFieldProps = {
  label: ReactNode;
  href: string;
  variant: Variant;
};

export const defaultButtonValue: ButtonFieldProps = {
  label: "Button",
  href: "#",
  variant: "neutral",
};

const buttonField: ObjectField<ButtonFieldProps> = {
  type: "object",
  objectFields: {
    label: { type: "text", contentEditable: true },
    href: { type: "text" },
    variant: {
      type: "select",
      options: VARIANTS.map((variant) => ({
        label: variant,
        value: variant,
      })),
    },
  },
};

export default buttonField;
