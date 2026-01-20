import { ComponentConfig } from "@puckeditor/core";
import {
  padding,
  paddingDefaults,
  contentFieldsWithFeatures,
  images,
  getPlaceholderImageUrl,
} from "@/registry/shadcn/configs/fields";

import { TwoColumn, TwoColumnProps } from "./two-column";

export type { TwoColumnProps };

export const conf: ComponentConfig<TwoColumnProps> = {
  fields: {
    ...contentFieldsWithFeatures,
    images: {
      ...images,
      arrayFields: {
        ...images.arrayFields,
        aspectRatio: {
          label: "aspect ratio",
          type: "radio",
          options: [
            {
              label: "16x9",
              value: "16x9",
            },
            {
              label: "1x1",
              value: "1x1",
            },
          ],
        },
      },
      defaultItemProps: {
        ...images.defaultItemProps,
        aspectRatio: "16x9",
      },
    },
    border: {
      // TODO: would be good to have boolean values
      type: "radio",
      options: [
        { label: "yes", value: "true" },
        { label: "no", value: "false" },
      ],
    },
    layout: {
      type: "radio",
      options: [
        {
          label: "text start",
          value: "text-start",
        },
        {
          label: "text end",
          value: "text-end",
        },
      ],
    },
    padding,
  },
  defaultProps: {
    heading: "This is the start of something new",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    badge: {
      label: "Platform",
      url: "",
      variant: "default",
    },
    features: [],
    buttons: [],
    border: "false",
    images: [
      {
        alt: "1: 16/9 aspect ratio accessible description of the image",
        src: getPlaceholderImageUrl("1920x1080", "Feature 1"),
        aspectRatio: "16x9",
      },
      {
        alt: "2: 16/9 aspect ratio accessible description of the image",
        src: getPlaceholderImageUrl("1920x1080", "Feature 2"),
        aspectRatio: "16x9",
      },
      {
        alt: "3: 16/9 aspect ratio accessible description of the image",
        src: getPlaceholderImageUrl("1920x1080", "Feature 3"),
        aspectRatio: "16x9",
      },
    ],
    layout: "text-start",
    padding: paddingDefaults,
  },
  render: TwoColumn,
};

export default conf;
