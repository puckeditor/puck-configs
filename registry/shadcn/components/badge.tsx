import { MoveRightIcon } from "lucide-react";
import {
  BaseBadge,
  baseBadgeVariants,
  BaseBadgeProps,
} from "@/registry/shadcn/components/ui/base-badge";
import { cn } from "@/registry/lib/utils";

export interface BadgeProps {
  label: string;
  url?: string;
  variant?: BaseBadgeProps["variant"];
  disableNavigation?: boolean;
}

export const Badge = (props: BadgeProps) => {
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
        className={cn(baseBadgeVariants({ variant: props.variant }), "gap-4")}
      >
        {props.label}
        <MoveRightIcon className="w-4 h-4" />
      </a>
    );
  }

  return (
    <BaseBadge variant={props.variant} className="gap-4">
      {props.label}
    </BaseBadge>
  );
};
