import { ComponentConfig, SelectField } from "@puckeditor/core";
import "@puckeditor/ai-types";

import { ICON_OPTIONS, PADDING_OPTIONS } from "../../../lib/constants";
import { SIZES, VARIANTS } from "../../../components/ui/base-button";
import { Faq, FaqProps } from "./faq";

export type { FaqProps };

const paddingLevel: SelectField = {
  type: "select",
  options: PADDING_OPTIONS,
  ai: {
    instructions: "Never select none as an option",
  },
};

export const conf: ComponentConfig<FaqProps> = {
  fields: {
    heading: { type: "text", contentEditable: true },
    description: { type: "text", contentEditable: true },
    badge: {
      type: "object",
      objectFields: {
        label: { type: "text" },
        url: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "default", value: "default" },
            { label: "secondary", value: "secondary" },
            { label: "destructive", value: "destructive" },
            { label: "outline", value: "outline" },
          ],
        },
      },
    },
    buttons: {
      type: "array",
      max: 3,
      getItemSummary: (item: { label?: string }, index = 0) =>
        item.label || `Button ${index + 1}`,
      arrayFields: {
        label: { type: "text" },
        url: { type: "text" },
        variant: {
          type: "select",
          options: VARIANTS.map((variant) => ({
            label: variant,
            value: variant,
          })),
        },
        size: {
          type: "select",
          options: SIZES.map((size) => ({ label: size, value: size })),
        },
        icon: {
          ai: {
            instructions:
              "Add icons sparingly, usually only on one CTA per page. Only apply an appropriate icon, otherwise use `none`",
          },
          type: "select",
          options: ICON_OPTIONS,
        },
      },
      defaultItemProps: {
        label: "Button",
        url: "",
        variant: "default",
        size: "default",
        icon: "none",
      },
      ai: {
        instructions: "Buttons must use the same size",
      },
    },
    type: {
      type: "radio",
      label: "answer display",
      options: [
        { label: "single", value: "single" },
        { label: "multiple", value: "multiple" },
      ],
    },
    collapsible: {
      type: "radio",
      label: "can close answers",
      options: [
        { label: "yes", value: true },
        { label: "no", value: false },
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
    padding: {
      type: "object",
      objectFields: {
        top: paddingLevel,
        bottom: paddingLevel,
      },
      ai: {
        exclude: true,
      },
    },
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
    collapsible: true,
    faqs: [
      {
        question: "Question",
        answer: "Answer",
      },
    ],
    layout: "two-col",
    padding: {
      top: "medium",
      bottom: "medium",
    },
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
