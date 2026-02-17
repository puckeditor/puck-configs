import { ComponentConfig } from "@puckeditor/core";

import Text, { TextProps } from "./Text";

export type { TextProps };

const textConfig: ComponentConfig<TextProps> = {
  fields: {
    content: { type: "textarea", contentEditable: true },
  },
  defaultProps: {
    content: "Text",
  },
  render: Text,
};

export default textConfig;
