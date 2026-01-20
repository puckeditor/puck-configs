import { CSSProperties } from "react";
import { RootConfig } from "@puckeditor/core";

import { createColorField } from "@/registry/shadcn/configs/fields";

import { FONT_FAMILIES, THEME_VARIABLES } from "./theme";
import styles from "./root.module.css";

export type RootProps = {
  title: string;
  family: string;
  radius: number;
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
};

const rootConfig: RootConfig<RootProps> = {
  ai: {
    defaultZone: {
      disallow: ["ArticleCard"],
    },
    instructions:
      "Only change colors if creating the page for the first time or asked to. If changing colors: ALWAYS review the WHOLE palette for related contrast colors starting from background, calculate contrast ratio with related contrast colors and let the user know if the new color pick will break it; if this happens and they want you to pick the colors, re-generate the WHOLE palette starting from the background with their pick. ALWAYS use the WCAG and use a minimum contrast ratio of 8:1, and ALWAYS think of their contrast.",
  },
  fields: {
    title: { type: "text", ai: { instructions: "Page title" } },
    family: {
      label: "font family",
      type: "select",
      options: FONT_FAMILIES.map((font) => ({ label: font, value: font })),
      ai: {
        instructions:
          "Font family for the page. Only change if creating the page for the first time or asked to.",
      },
    },
    radius: {
      label: "border radius (px)",
      type: "number",
      ai: {
        instructions:
          "Border radius for the page in pixels. Only change if creating the page for the first time or asked to.",
      },
    },
    background: createColorField(
      "background",
      "Main application background color, keep it neutral (Very high luminance for light themes, Very low luminance for dark themes). Start from here when designing the color palette. Calculate contrast ratios with related colors using WCAG guidelines, aim for a contrast ratio of at least 7:1."
    ),
    foreground: createColorField(
      "foreground",
      "Main text color on the application background. Related contrast colors: HIGH contrast with background color; HIGH contrast with muted color."
    ),
    primary: createColorField(
      "primary (buttons, links, highlights)",
      "Brand color for primary actions (buttons, links, highlights). Related contrast colors: VERY HIGH contrast with background color; HIGH contrast with muted color; VERY HIGH contrast with primary foreground color. Could be same luminance as foreground."
    ),
    primaryForeground: createColorField(
      "primary foreground",
      "Text and icons color on primary-colored elements. Related contrast colors: VERY HIGH contrast with primary color."
    ),
    secondary: createColorField(
      "secondary",
      "Less prominent action color for secondary buttons and highlights. Related contrast colors: LOW to HIGH contrast with background color; HIGH contrast with secondary foreground color."
    ),
    secondaryForeground: createColorField(
      "secondary foreground",
      "Text and icons on secondary-colored elements. Related contrast colors: HIGH contrast with secondary color."
    ),
    destructive: createColorField(
      "destructive",
      "Error and deletion action color"
    ),
    destructiveForeground: createColorField(
      "destructive foreground",
      "Text and icons color on destructive-colored elements. Related contrast colors: HIGH contrast with destructive color."
    ),
    muted: createColorField(
      "muted background",
      "Subdued background (used in card backgrounds, etc.). Related contrast colors: HIGH contrast with muted foreground; HIGH contrast with foreground (main text); HIGH contrast with primary. Should be the same color as background with a 10% to 5% less luminance for light themes and a 10% to 5% more luminance for dark themes."
    ),
    mutedForeground: createColorField(
      "muted foreground",
      "De-emphasized text (captions, labels) and icons on muted background and page background. Related contrast colors: VERY HIGH contrast with muted color; VERY HIGH contrast with background. Should be the same color as foreground with a 5% to 2% less luminance."
    ),
    accent: createColorField(
      "accent (active elements)",
      "Highlight color for active or focused elements. Should be a distinct color used to draw attention to interactive elements."
    ),
    accentForeground: createColorField(
      "accent foreground",
      "Text and icons on accent-colored elements"
    ),
    border: createColorField(
      "border",
      "General border color. Related contrast colors: HIGH contrast with background colors."
    ),
    input: createColorField(
      "input and button borders",
      "Form inputs and button borders. Related contrast colors: HIGH contrast with background colors."
    ),
    ring: createColorField(
      "focus indicator",
      "Focus indicator color. Should be a distinct color used to outline focused elements."
    ),
    card: createColorField(
      "pricing card background",
      "Pricing Card background color. Related contrast colors: HIGH contrast with pricing card foreground color; LOW to MEDIUM contrast with main background color."
    ),
    cardForeground: createColorField(
      "pricing card foreground",
      "Pricing Card text color. Related contrast colors: HIGH contrast with pricing card background color."
    ),
    popover: createColorField(
      "popover background",
      "Background color for dropdown menus and popovers. Related contrast colors: HIGH contrast with popover foreground color."
    ),
    popoverForeground: createColorField(
      "popover foreground",
      "Text and icons color within popovers and dropdown menus. Related contrast colors: HIGH contrast with popover background color."
    ),
  },
  defaultProps: {
    title: "",
    family: "Inter",
    radius: 8,
    background: "#ffffff",
    foreground: "#0a0a0a",
    card: "#ffffff",
    cardForeground: "#0a0a0a",
    popover: "#ffffff",
    popoverForeground: "#0a0a0a",
    primary: "#171717",
    primaryForeground: "#fafafa",
    secondary: "#f5f5f5",
    secondaryForeground: "#171717",
    muted: "#f5f5f5",
    mutedForeground: "#737373",
    accent: "#f5f5f5",
    accentForeground: "#171717",
    destructive: "#e7000b",
    destructiveForeground: "#f8f8f8",
    border: "#e5e5e5",
    input: "#e5e5e5",
    ring: "#a1a1a1",
  },
  render: ({ children, ...props }) => {
    const themeStyles: CSSProperties = {
      fontFamily: `${props.family}, sans-serif`,
      backgroundColor: props.background,
      color: props.foreground,
      [THEME_VARIABLES.font.family]: `${props.family}, sans-serif`,
      [THEME_VARIABLES.units.radius]: `${props.radius}px`,
      [THEME_VARIABLES.palette.background]: props.background,
      [THEME_VARIABLES.palette.foreground]: props.foreground,
      [THEME_VARIABLES.palette.card]: props.card,
      [THEME_VARIABLES.palette.cardForeground]: props.cardForeground,
      [THEME_VARIABLES.palette.popover]: props.popover,
      [THEME_VARIABLES.palette.popoverForeground]: props.popoverForeground,
      [THEME_VARIABLES.palette.primary]: props.primary,
      [THEME_VARIABLES.palette.primaryForeground]: props.primaryForeground,
      [THEME_VARIABLES.palette.secondary]: props.secondary,
      [THEME_VARIABLES.palette.secondaryForeground]: props.secondaryForeground,
      [THEME_VARIABLES.palette.muted]: props.muted,
      [THEME_VARIABLES.palette.mutedForeground]: props.mutedForeground,
      [THEME_VARIABLES.palette.accent]: props.accent,
      [THEME_VARIABLES.palette.accentForeground]: props.accentForeground,
      [THEME_VARIABLES.palette.destructive]: props.destructive,
      [THEME_VARIABLES.palette.destructiveForeground]:
        props.destructiveForeground,
      [THEME_VARIABLES.palette.border]: props.border,
      [THEME_VARIABLES.palette.input]: props.input,
      [THEME_VARIABLES.palette.ring]: props.ring,
    };

    return (
      <div style={{ ...themeStyles }} className={styles["Root-Wrapper"]}>
        {children}
      </div>
    );
  },
};

export default rootConfig;
