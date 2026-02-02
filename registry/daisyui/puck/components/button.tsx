import { PropsWithChildren } from "react";

const variantMap = {
  neutral: "btn-neutral",
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  ghost: "btn-ghost",
  link: "btn-link",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  error: "btn-error",
} as const;

export type Variant = keyof typeof variantMap;

export const VARIANTS: Variant[] = Object.keys(variantMap) as Variant[];

interface ButtonProps {
  url?: string;
  variant?: Variant;
  type?: "button" | "submit" | "reset";
  className?: string;
  disableNavigation?: boolean;
  onClick?: () => void;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const className = `btn ${variantMap[props.variant as keyof typeof variantMap] || ""} ${props.className ?? ""}`;

  return props.url ? (
    <a
      href={props.url}
      className={`${className} no-underline`}
      onClick={props.disableNavigation ? (e) => e.preventDefault() : undefined}
    >
      {props.children}
    </a>
  ) : (
    <button
      className={className}
      type={props.type ?? "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
