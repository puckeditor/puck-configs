import { ReactNode } from "react";
import { cn } from "@/registry/lib/utils";

type PaddingLevel = "none" | "small" | "medium" | "large";

export interface ContainerProps {
  children: ReactNode;
  padding?: {
    top?: PaddingLevel;
    bottom?: PaddingLevel;
  };
  className?: string;
}

export const Container = ({
  children,
  padding,
  className,
}: ContainerProps) => {
  const { top = "large", bottom = "large" } = padding ?? {};

  return (
    <div
      className={cn(
        "w-full",
        {
          "pt-20 lg:pt-40": top === "large",
          "pb-20 lg:pb-40": bottom === "large",
          "pt-15 lg:pt-30": top === "medium",
          "pb-15 lg:pb-30": bottom === "medium",
          "pt-10 lg:pt-20": top === "small",
          "pb-10 lg:pb-20": bottom === "small",
        },
        className
      )}
    >
      <div className="container mx-auto">{children}</div>
    </div>
  );
};
