import {
  Badge,
  badgeVariants,
  BadgeProps,
} from "@/components/ui/badge";
import { cn } from "@/puck/lib/utils";
import { MoveRightIcon } from "lucide-react";

export interface CompoundBadgeProps {
  label: string;
  url?: string;
  variant?: BadgeProps["variant"];
}

export const CompoundBadge = (props: CompoundBadgeProps) => {
  if (props.url) {
    return (
      <a
        href={props.url}
        className={cn(badgeVariants({ variant: props.variant }), "gap-4")}
      >
        {props.label}
        <MoveRightIcon className="w-4 h-4" />
      </a>
    );
  }

  return (
    <Badge variant={props.variant} className="gap-4">
      {props.label}
    </Badge>
  );
};
