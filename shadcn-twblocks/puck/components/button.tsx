import { DynamicIcon } from "lucide-react/dynamic";
import {
  Button,
  ButtonProps,
  buttonVariants,
} from "@/components/ui/button";
import { cn } from "@/puck/lib/utils";
import { IconName } from "@/puck/types";
import { useIsEditorMode } from "@/puck/context/is-editor-mode-context";

export interface CompoundButtonProps {
  label: string;
  url?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  icon?: IconName;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const CompoundButton = (props: CompoundButtonProps) => {
  const isEditorMode = useIsEditorMode();

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
          !isEditorMode
            ? undefined
            : (event) => {
                event.preventDefault();
              }
        }
        href={props.url}
        className={cn(
          buttonVariants({ variant: props.variant, size: props.size }),
          "gap-4",
          props.className
        )}
      >
        {content}
      </a>
    );
  }

  return (
    <Button
      variant={props.variant}
      size={props.size}
      className={cn("gap-4", props.className)}
      type={props.type ?? "button"}
    >
      {content}
    </Button>
  );
};
