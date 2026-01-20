import { DynamicIcon } from "lucide-react/dynamic";

import { cn } from "@/registry/lib/utils";
import {
  BaseButton,
  BaseButtonProps,
  baseButtonVariants,
} from "@/registry/shadcn/components/ui/base-button";
import { IconName } from "@/registry/shadcn/types";

export interface ButtonProps {
  label: string;
  url?: string;
  variant?: BaseButtonProps["variant"];
  size?: BaseButtonProps["size"];
  icon?: IconName;
  type?: "button" | "submit" | "reset";
  className?: string;
  disableNavigation?: boolean;
}

export const Button = (props: ButtonProps) => {
  const content = (
    <>
      {props.size !== "icon" && props.label}
      {props.icon && props.icon !== "none" ? (
        <DynamicIcon name={props.icon} className="w-4 h-4" />
      ) : null}
    </>
  );

  if (props.url) {
    return (
      <a
        onClick={
          !props.disableNavigation
            ? undefined
            : (event) => {
                event.preventDefault();
              }
        }
        href={props.url}
        className={cn(
          baseButtonVariants({ variant: props.variant, size: props.size }),
          "gap-4",
          props.className
        )}
      >
        {content}
      </a>
    );
  }

  return (
    <BaseButton
      variant={props.variant}
      size={props.size}
      className={cn("gap-4", props.className)}
      type={props.type ?? "button"}
    >
      {content}
    </BaseButton>
  );
};
