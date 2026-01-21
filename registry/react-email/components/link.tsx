import {
  ComponentPropsWithoutRef,
  CSSProperties,
  PropsWithChildren,
} from "react";
import { Img, Link as ReactEmailLink } from "@react-email/components";

import theme from "@/registry/react-email/lib/constants/theme";

export type LinkProps = {
  href: string;
  variant?: "button" | "a";
  icon?: {
    src: string;
    alt: string;
  };
};

const variantStyleMap: Record<
  NonNullable<LinkProps["variant"]>,
  CSSProperties
> = {
  button: {
    display: "inline-block",
    width: "100%",
    boxSizing: "border-box",
    paddingTop: 8,
    paddingRight: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    fontWeight: 600,
    borderRadius: 8,
    textAlign: "center",
    backgroundColor: theme.palette.light.primary,
    color: "white",
    textDecoration: "none",
  },
  a: {
    color: theme.palette.light.secondary,
    textDecoration: "none",
  },
};

const Link = ({
  children,
  href,
  variant = "a",
  icon,
  style,
  ...props
}: PropsWithChildren<LinkProps> & ComponentPropsWithoutRef<"a">) => {
  const stylesForVariant = variantStyleMap[variant];

  return (
    <ReactEmailLink
      href={href}
      style={{ ...stylesForVariant, whiteSpace: "nowrap", ...style }}
      {...props}
    >
      {icon?.src && (
        <Img
          height="24"
          width="24"
          alt={icon.alt}
          src={icon.src}
          style={{
            display: "inline-block",
            verticalAlign: "middle",
            marginRight: children ? 8 : 0,
            objectFit: "cover",
          }}
        />
      )}
      <span style={{ verticalAlign: "middle" }}>{children}</span>
    </ReactEmailLink>
  );
};

export default Link;
