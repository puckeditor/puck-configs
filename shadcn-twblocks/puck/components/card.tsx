import { DynamicIcon } from "lucide-react/dynamic";
import { IconName } from "@/puck/types";
import { cn } from "@/puck/lib/utils";
import {
  CompoundButton,
  CompoundButtonProps,
} from "@/puck/components/button";

export interface CompoundCardProps {
  icon?: IconName;
  heading?: string;
  description?: string;
  button?: CompoundButtonProps;
  className?: string;
}

export const CompoundCard = ({
  icon,
  heading,
  description,
  button,
  className,
}: CompoundCardProps) => {
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
              <CompoundButton
                label={button.label}
                url={button.url}
                variant={button.variant}
                size={button.size}
                icon={button.icon}
              />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
