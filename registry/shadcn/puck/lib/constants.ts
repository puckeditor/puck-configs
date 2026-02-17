import { SelectField } from "@puckeditor/core";
import { iconNames } from "lucide-react/dynamic";

export const ICON_OPTIONS: SelectField["options"] = Array.from(
  // Create an array with a maximum of 30 icons
  { length: Math.min(31, iconNames.length) },
  (_, i) => {
    // Select every 10th icon to sparse out the options
    const currIcon = iconNames[i * 10] || iconNames[i];

    return i === 0
      ? { label: "none", value: "none" }
      : { label: currIcon, value: currIcon };
  },
);

export const PADDING_OPTIONS: SelectField["options"] = [
  { label: "none", value: "none" },
  { label: "small", value: "small" },
  { label: "medium", value: "medium" },
  { label: "large", value: "large" },
];

const createPlaceholderImageUrl = (size: string, text = "Placeholder Image") =>
  `https://dummyimage.com/${size}/f5f4f4/101010.png&text=${encodeURIComponent(
    text,
  )}`;

export const IMAGE_16x9_PLACEHOLDER = {
  alt: "16/9 aspect ratio accessible description of the image",
  src: createPlaceholderImageUrl("1920x1080"),
};

export const IMAGE_1x1_PLACEHOLDER = {
  alt: "1/1 aspect ratio accessible description of the image",
  src: createPlaceholderImageUrl("1000x1000"),
};

export const IMAGE_9x16_PLACEHOLDER = {
  alt: "9/16 aspect ratio accessible description of the image",
  src: createPlaceholderImageUrl("1080x1920"),
};
