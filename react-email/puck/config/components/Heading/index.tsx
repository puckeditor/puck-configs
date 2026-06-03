import { ComponentConfig } from "@puckeditor/core";

import Heading, { headingLevels, HeadingProps } from "./Heading";

export type { HeadingProps };

const headingConfig: ComponentConfig<HeadingProps> = {
  fields: {
    content: { type: "text", contentEditable: true },
    level: {
      type: "select",
      options: headingLevels.map((level) => ({ label: level, value: level })),
    },
  },
  defaultProps: { content: "Heading", level: "h1" },
  render: Heading,
};

export default headingConfig;
