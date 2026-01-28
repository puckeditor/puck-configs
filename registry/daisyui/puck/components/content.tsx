import { PropsWithChildren, ReactNode } from "react";
import Button, { Variant } from "./button";
import { cn } from "../../lib/utils";

export interface ContentProps {
  title?: ReactNode;
  description?: ReactNode;
  buttons?: {
    label: ReactNode;
    href: string;
    variant: Variant;
  }[];
  disableNavigation?: boolean;
  textAlign?: "start" | "center" | "end";
  className?: string;
}

const Content = ({
  title,
  description,
  children,
  buttons = [],
  disableNavigation,
  textAlign = "center",
  className,
}: PropsWithChildren<ContentProps>) => {
  const colPositionClassnames = cn("flex flex-col", {
    "items-start": textAlign === "start",
    "items-center": textAlign === "center",
    "items-end": textAlign === "end",
  });
  const rowPositionClassnames = cn("flex flex-row", {
    "justify-start": textAlign === "start",
    "justify-center": textAlign === "center",
    "justify-end": textAlign === "end",
  });
  const textAlignClassnames = cn({
    "text-start": textAlign === "start",
    "text-center": textAlign === "center",
    "text-end": textAlign === "end",
  });

  const buttonElements = buttons?.map((button, idx) => (
    <Button
      key={idx}
      variant={button.variant}
      url={button.href}
      className="rounded-sm"
      disableNavigation={disableNavigation}
    >
      {button.label}
    </Button>
  ));

  return (
    <div
      className={cn(
        "container gap-4 max-w-7xl mx-auto py-16 px-4 prose",
        colPositionClassnames,
        className,
      )}
    >
      {(title || description || buttons.length > 0) && (
        <div className={cn("gap-4", colPositionClassnames)}>
          {title && (
            <h2 className={cn("lead text-3xl mb-0", textAlignClassnames)}>
              {title}
            </h2>
          )}
          {description && (
            <div
              className={cn(
                "not-prose text-muted-foreground text-lg leading-relaxed tracking-tight lg:max-w-xl",
                textAlignClassnames,
              )}
            >
              {description}
            </div>
          )}
          {buttons.length > 0 && (
            <div className={cn("no-prose gap-2", rowPositionClassnames)}>
              {buttonElements}
            </div>
          )}
        </div>
      )}
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Content;
