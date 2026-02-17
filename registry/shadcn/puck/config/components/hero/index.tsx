import { ComponentConfig, SelectField } from "@puckeditor/core";
import "@puckeditor/ai-types";

import {
  ICON_OPTIONS,
  IMAGE_16x9_PLACEHOLDER,
  IMAGE_1x1_PLACEHOLDER,
  IMAGE_9x16_PLACEHOLDER,
  PADDING_OPTIONS,
} from "../../../lib/constants";
import { SIZES, VARIANTS } from "../../../components/ui/base-button";
import { Hero, HeroProps } from "./hero";

const adjectives = ["amazing", "new", "wonderful", "beautiful", "smart"];

export function getAdjective(arr = adjectives): string {
  return arr[0];
}

export type { HeroProps };

const paddingLevel: SelectField = {
  type: "select",
  options: PADDING_OPTIONS,
  ai: {
    instructions: "Never select none as an option",
  },
};

export const conf: ComponentConfig<HeroProps> = {
  fields: {
    heading: { type: "text", contentEditable: true },
    description: {
      type: "richtext",
      contentEditable: true,
      options: {
        heading: false,
        textAlign: false,
        blockquote: false,
      },
      ai: {
        instructions: "Keep under 35 words.",
      },
    },
    adjectives: {
      type: "array",
      max: 5,
      getItemSummary: (item, index = 0) =>
        item.adjective || `Adjective ${index + 1}`,
      arrayFields: {
        adjective: { type: "text" },
      },
      defaultItemProps: {
        adjective: getAdjective(),
      },
    },
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
    imageLayout: {
      // TODO: puck should format labels automatically so I don't have to define this
      label: "image layout",
      type: "select",
      options: [
        { label: "single image 1x1 (default)", value: "1x1" },
        { label: "three images 1x1, 9:16, 1x1", value: "1x1-9x16-1x1" },
        { label: "single image 16x9", value: "16x9" },
      ],
      ai: {
        instructions:
          "Never select the 'single image 16x9' option. Always include 3 images when selecting the 'three images 1x1, 9:16, 1x1' option.",
      },
    },
    images: {
      type: "array",
      max: 3,
      getItemSummary: (item: { alt?: string }, index = 0) => {
        if (item.alt) {
          return `${item.alt.slice(0, 12)}${item.alt.length > 12 ? "..." : ""}`;
        }

        return `Image ${index + 1}`;
      },
      arrayFields: {
        src: { type: "text", ai: { stream: false } },
        alt: { type: "text" },
      },
      defaultItemProps: IMAGE_16x9_PLACEHOLDER,
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
    heading: "Heading",
    description: "<p>Description</p>",
    adjectives: [],
    badge: {
      label: "Badge",
      url: "",
      variant: "secondary",
    },
    buttons: [
      {
        label: "Secondary CTA",
        icon: "ellipsis",
        variant: "secondary",
      },
      {
        label: "Primary CTA",
        icon: "move-right",
        variant: "default",
      },
    ],
    imageLayout: "1x1-9x16-1x1",
    images: [
      IMAGE_1x1_PLACEHOLDER,
      IMAGE_9x16_PLACEHOLDER,
      IMAGE_16x9_PLACEHOLDER,
    ],
    padding: {
      top: "medium",
      bottom: "medium",
    },
  },
  render: Hero,
};

export default conf;
