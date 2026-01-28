import { ComponentConfig } from "@puckeditor/core";
import "@puckeditor/ai-types";

import buttonField, { defaultButtonValue } from "../../fields/link-button";
import sectionTextField from "../../fields/section-text";

import Stats, { StatsProps } from "./stats";

export type { StatsProps };

const defaultStat: StatsProps["stats"][number] = {
  title: "Stat",
  value: "100",
  shortDescription: "Description",
};

const statsConfig: ComponentConfig<StatsProps> = {
  ai: {
    instructions: "Use Stats to convey statistics to the reader.",
  },
  fields: {
    ...sectionTextField.objectFields,
    buttons: {
      type: "array",
      max: 3,
      arrayFields: {
        ...buttonField.objectFields,
      },
      defaultItemProps: defaultButtonValue,
    },
    stats: {
      type: "array",
      min: 1,
      max: 4,
      arrayFields: {
        title: {
          type: "text",
          contentEditable: true,
          ai: {
            instructions:
              'The name or title of the statistic, under two or three words long, for example "Opening hours"',
          },
        },
        value: {
          type: "text",
          contentEditable: true,
          ai: {
            instructions:
              'The value of the statistic, use single short word or string, for example "24/7"',
          },
        },
        shortDescription: {
          type: "text",
          contentEditable: true,
          ai: {
            instructions:
              "A brief description or context for the statistic, under 6 words, for example 'Every day of the year'",
          },
        },
      },
      defaultItemProps: defaultStat,
    },
  },
  defaultProps: {
    title: "The numbers speak for themselves",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    buttons: [defaultButtonValue],
    stats: Array.from({ length: 3 }, () => defaultStat),
  },
  render: Stats,
};

export default statsConfig;
