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
  buttons,
  disableNavigation,
  textAlign = "center",
  className,
}: PropsWithChildren<ContentProps>) => {
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
        "container flex flex-col gap-4 max-w-7xl mx-auto py-16 px-4 items-center prose",
        className,
        {
          "md:items-start": textAlign === "start",
          "md:items-center": textAlign === "center",
          "md:items-end": textAlign === "end",
        },
      )}
    >
      {title && (
        <h2
          className={cn("lead text-3xl mb-0 text-center", {
            "md:text-start": textAlign === "start",
            "md:text-center": textAlign === "center",
            "md:text-end": textAlign === "end",
          })}
        >
          {title}
        </h2>
      )}
      {description && (
        <div
          className={cn(
            "not-prose text-muted-foreground text-lg leading-relaxed tracking-tight text-center lg:max-w-xl",
            {
              "md:text-start": textAlign === "start",
              "md:text-center": textAlign === "center",
              "md:text-end": textAlign === "end",
            },
          )}
        >
          {description}
        </div>
      )}
      {buttons && <div className="no-prose flex gap-2">{buttonElements}</div>}
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Content;
