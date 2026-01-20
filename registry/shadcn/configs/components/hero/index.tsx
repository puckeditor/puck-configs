import { ComponentConfig } from "@puckeditor/core";
import {
  padding,
  paddingDefaults,
  badge,
  buttons,
  images,
  image1x1Placeholder,
  image9x16Placeholder,
} from "@/registry/shadcn/configs/fields";
import { Hero, HeroProps } from "./hero";

const adjectives = ["amazing", "new", "wonderful", "beautiful", "smart"];

export function getAdjective(arr = adjectives): string {
  return arr[0];
}

export type { HeroProps };

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
    badge,
    buttons,
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
    images: { ...images, max: 3 },
    padding,
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
    images: [image1x1Placeholder, image9x16Placeholder, image1x1Placeholder],
    padding: paddingDefaults,
  },
  render: Hero,
};

export default conf;
