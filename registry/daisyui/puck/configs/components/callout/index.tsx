import { ComponentConfig } from "@puckeditor/core";
import "@puckeditor/ai-types";

import buttonField, { defaultButtonValue } from "../../fields/link-button";

import Callout, { CalloutProps } from "./callout";

export type { CalloutProps };

const { variant: _variant, ...buttonFieldNoVariant } = buttonField.objectFields;
const { variant: _variantDefault, ...defaultBtnNoVariant } = defaultButtonValue;

const calloutConfig: ComponentConfig<CalloutProps> = {
  ai: {
    instructions:
      "Use Callout to draw attention to important announcements, like special offers, or time-sensitive information.",
  },
  fields: {
    text: {
      type: "text",
      contentEditable: true,
      ai: {
        instructions:
          "The main text for the callout. Keep it concise and attention-grabbing, under 15 words.",
      },
    },
    cta: {
      type: "object",
      objectFields: buttonFieldNoVariant,
    },
  },
  defaultProps: {
    text: "Callout",
    cta: defaultBtnNoVariant,
  },
  render: Callout,
};

export default calloutConfig;
