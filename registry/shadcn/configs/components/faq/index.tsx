import { ComponentConfig } from "@puckeditor/core";
import {
  padding,
  paddingDefaults,
  contentFields,
} from "@/registry/shadcn/configs/fields";

import { Faq, FaqProps } from "./faq";

export type { FaqProps };

export const conf: ComponentConfig<FaqProps> = {
  fields: {
    ...contentFields,
    type: {
      type: "radio",
      label: "answer display",
      options: [
        { label: "single", value: "single" },
        { label: "multiple", value: "multiple" },
      ],
    },
    collapsible: {
      // TODO: would be good to have boolean values
      type: "radio",
      label: "can close answers",
      options: [
        { label: "yes", value: "true" },
        { label: "no", value: "false" },
      ],
    },
    faqs: {
      type: "array",
      max: 20,
      getItemSummary: (item: FaqProps["faqs"][number], index = 0) => {
        if (item.question) {
          return `${item.question.slice(0, 12)}${
            item.question.length > 12 ? "..." : ""
          }`;
        }

        return `Question ${index + 1}`;
      },
      arrayFields: {
        question: { type: "text" },
        answer: { type: "textarea", contentEditable: true },
      },
      defaultItemProps: {
        question: "Question title",
        answer: "Informative answer",
      },
    },
    layout: {
      type: "radio",
      options: [
        { label: "single Column", value: "single-col" },
        { label: "two Column", value: "two-col" },
      ],
    },
    padding,
  },
  defaultProps: {
    badge: {
      label: "FAQ",
      url: "",
      variant: "secondary",
    },
    heading: "Heading",
    description: "Description",
    buttons: [
      {
        label: "Find out more",
        icon: "move-right",
        variant: "secondary",
      },
    ],
    type: "single",
    collapsible: "true",
    faqs: [
      {
        question: "Question",
        answer: "Answer",
      },
    ],
    layout: "two-col",
    padding: paddingDefaults,
  },
  resolveFields: (data, params) => {
    if (data.props.type === "multiple") {
      const { collapsible, ...newFields } = params.fields;
      return newFields;
    }

    return params.fields;
  },
  render: Faq,
};

export default conf;
