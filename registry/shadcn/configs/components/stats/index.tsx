import { ComponentConfig } from "@puckeditor/core";

import {
  padding,
  paddingDefaults,
  contentFields,
} from "@/registry/shadcn/configs/fields";

import { Stats, StatsProps } from "./stats";

export type { StatsProps };

export const conf: ComponentConfig<StatsProps> = {
  fields: {
    ...contentFields,
    statistics: {
      type: "array",
      max: 8,
      getItemSummary: (item: StatsProps["statistics"][number], index = 0) =>
        item.label || `Statistic ${index + 1}`,
      arrayFields: {
        value: {
          type: "text",
          contentEditable: true,
          ai: { instructions: "The CURRENT value of this statistic" },
        },
        label: {
          type: "text",
          contentEditable: true,
          ai: { instructions: "A title for the statistic" },
        },
        percentage: {
          type: "number",
          min: 0,
          max: 99999,
          ai: {
            instructions:
              "The percentage CHANGE of the CURRENT value from the PREVIOUS value. Should not match the current value.",
            exclude: true,
          },
        },
        direction: {
          type: "radio",
          options: [
            { label: "none", value: "none" },
            { label: "increase", value: "increase" },
            { label: "decrease", value: "decrease" },
          ],
        },
        polarity: {
          type: "radio",
          options: [
            { label: "none", value: "none" },
            { label: "positive", value: "positive" },
            { label: "negative", value: "negative" },
          ],
        },
      },
      defaultItemProps: {
        label: "Stat",
        value: "100",
        percentage: 0,
        direction: "increase",
        polarity: "positive",
      },
    },
    layout: {
      type: "radio",
      options: [
        {
          label: "section",
          value: "section",
        },
        { label: "inline", value: "inline" },
      ],
    },
    padding,
  },
  defaultProps: {
    heading: "The numbers speak for themselves",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    badge: {
      label: "Platform",
      url: "",
      variant: "default",
    },
    buttons: [
      {
        label: "View more",
        icon: "move-right",
        variant: "secondary",
        size: "default",
      },
    ],
    statistics: [
      {
        label: "Monthly active users",
        value: "500",
        percentage: 20.1,
        direction: "increase",
        polarity: "positive",
      },
      {
        label: "Daily active users",
        value: "20.1",
        percentage: 2,
        direction: "decrease",
        polarity: "negative",
      },
      {
        label: "Monthly recurring revenue",
        value: "$523.520",
        percentage: 8,
        direction: "increase",
        polarity: "positive",
      },
      {
        label: "Cost per acquisition",
        value: "$5.60",
        percentage: 2,
        direction: "increase",
        polarity: "negative",
      },
    ],
    layout: "section",
    padding: paddingDefaults,
  },
  resolveFields: (data, params) => {
    if (data.props.layout === "inline") {
      const { heading, description, buttons, badge, ...newFields } =
        params.fields;
      return newFields;
    }

    return params.fields;
  },
  render: Stats,
};

export default conf;
