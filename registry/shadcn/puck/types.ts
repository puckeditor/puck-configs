import { iconNames } from "lucide-react/dynamic";

export type IconName = "none" | (typeof iconNames)[number];

export type Feature = {
  icon?: IconName;
  name: string;
  description?: string;
};
