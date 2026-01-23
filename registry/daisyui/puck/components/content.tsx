import { PropsWithChildren, ReactNode } from "react";
import Button, { Variant } from "./button";

export interface ContentProps {
  title: ReactNode;
  description: ReactNode;
  buttons: {
    label: ReactNode;
    href: string;
    variant: Variant;
  }[];
  disableNavigation?: boolean;
}

const Content = ({
  title,
  description,
  children,
  buttons,
  disableNavigation,
}: PropsWithChildren<ContentProps>) => {
  const buttonElements = buttons.map((button, idx) => (
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
    <div className="container flex flex-col gap-4 max-w-7xl mx-auto py-16 px-4 items-center prose">
      <h2 className="lead text-center text-3xl mb-0">{title}</h2>
      <div className="not-prose text-center text-muted-foreground text-lg leading-relaxed tracking-tight lg:max-w-sm">
        {description}
      </div>
      <div className="no-prose flex gap-2">{buttonElements}</div>
      {children}
    </div>
  );
};

export default Content;
