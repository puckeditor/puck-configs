import { cn } from "@/puck/lib/utils";
import {
  CompoundBadge,
  CompoundBadgeProps,
} from "@/puck/components/badge";
import {
  CompoundButton,
  CompoundButtonProps,
} from "@/puck/components/button";
import { Feature } from "@/puck/types";
import { DynamicIcon } from "lucide-react/dynamic";

export interface CompoundContentProps {
  badge?: CompoundBadgeProps;
  heading?: string;
  description?: string;
  features?: Feature[];
  buttons?: CompoundButtonProps[];
  alignContent?: "start" | "center" | "end";
  className?: string;
}

interface CompoundContentPropsWithSpacing extends CompoundContentProps {
  spacing?: "normal" | "tight";
}

export const CompoundContent = ({
  badge,
  heading,
  description,
  features,
  buttons,
  alignContent = "start",
  className,
  spacing = "normal",
}: CompoundContentPropsWithSpacing) => {
  const colPositionClassNames = cn("flex flex-col", {
    "items-start": alignContent === "start",
    "items-center text-center": alignContent === "center",
    "items-end": alignContent === "end",
  });
  const rowPositionClassNames = cn("flex flex-row", {
    "justify-start": alignContent === "start",
    "justify-center": alignContent === "center",
    "justify-end": alignContent === "end",
  });
  const textAlignClassnames = cn({
    "text-start": alignContent === "start",
    "text-center": alignContent === "center",
    "text-end": alignContent === "end",
  });

  return (
    <div
      className={cn(
        {
          "gap-8": spacing === "normal",
          "gap-4": spacing === "tight",
        },
        colPositionClassNames,
        className
      )}
    >
      {!!heading || !!description || !!badge || !!features ? (
        <div className={cn("gap-4", colPositionClassNames)}>
          {badge?.label ? (
            <div>
              <CompoundBadge
                label={badge.label}
                variant={badge.variant}
                url={badge.url}
              />
            </div>
          ) : null}
          <div
            className={cn(colPositionClassNames, {
              "gap-4": spacing === "normal",
              "gap-2": spacing === "tight",
            })}
          >
            {!!heading ? (
              <h2
                className={cn(
                  "text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular",
                  textAlignClassnames
                )}
              >
                {heading}
              </h2>
            ) : null}
            {!!description ? (
              <p
                className={cn(
                  "text-lg leading-relaxed tracking-tight text-muted-foreground",
                  {
                    "lg:max-w-sm":
                      alignContent === "start" || alignContent === "end",
                    "lg:max-w-xl": alignContent === "center",
                  },
                  textAlignClassnames
                )}
              >
                {description}
              </p>
            ) : null}
            {Array.isArray(features) && features.length > 0
              ? features.map((feature, index) => (
                  <div key={index} className="flex flex-row gap-4">
                    {feature.icon && feature.icon !== "none" ? (
                      <DynamicIcon
                        name={feature.icon}
                        className="w-6 h-6 shrink-0"
                      />
                    ) : null}
                    <div className="flex flex-col">
                      <p>{feature.name}</p>
                      {feature.description ? (
                        <div className="text-muted-foreground text-sm">
                          {feature.description}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      ) : null}
      {Array.isArray(buttons) && buttons.length > 0 ? (
        <div className={cn("gap-4 flex-wrap", rowPositionClassNames)}>
          {buttons
            .filter((button) => !!button.label)
            .map((button, index) => (
              <CompoundButton
                key={index}
                label={button.label}
                url={button.url}
                variant={button.variant}
                size={button.size}
                icon={button.icon}
              />
            ))}
        </div>
      ) : null}
    </div>
  );
};
