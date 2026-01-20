import { DynamicIcon } from "lucide-react/dynamic";
import { IconName } from "@/registry/shadcn/types";
import { cn } from "@/registry/lib/utils";
import { Button, ButtonProps } from "@/registry/shadcn/components/button";

export interface CardProps {
  icon?: IconName;
  heading?: string;
  description?: string;
  button?: ButtonProps;
  className?: string;
}

export const Card = ({
  icon,
  heading,
  description,
  button,
  className,
}: CardProps) => {
  const hasIcon = icon && icon !== "none";

  return (
    <div
      className={cn(
        "bg-muted rounded-md flex flex-col p-6",
        {
          "justify-between": hasIcon,
          "justify-end": !hasIcon,
        },
        className
      )}
    >
      {hasIcon ? <DynamicIcon name={icon} className="w-4 h-4" /> : null}
      {!!heading || !!description || !!button ? (
        <div className="flex flex-col gap-2">
          {heading ? (
            <h3 className="text-xl tracking-tight">{heading}</h3>
          ) : null}
          {description ? (
            <div className="text-muted-foreground max-w-xs text-base">
              {description}
            </div>
          ) : null}
          {button?.label ? (
            <div>
              <Button
                label={button.label}
                url={button.url}
                variant={button.variant}
                size={button.size}
                icon={button.icon}
                disableNavigation={button.disableNavigation}
              />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
