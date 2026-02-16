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
