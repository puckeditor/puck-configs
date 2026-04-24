import { cn } from "@/puck/lib/utils";
import {
  CompoundButton,
  CompoundButtonProps,
} from "@/puck/components/button";
import {
  CompoundImage,
  CompoundImageProps,
} from "@/puck/components/image";

export interface CompoundArticleCardProps {
  image?: CompoundImageProps;
  heading?: string;
  description?: string;
  button?: CompoundButtonProps;
  className?: string;
}

export const CompoundArticleCard = ({
  image,
  heading,
  description,
  button,
  className,
}: CompoundArticleCardProps) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="bg-muted rounded-md aspect-video mb-2 overflow-hidden">
        {image?.src ? <CompoundImage src={image.src} alt={image.alt} /> : null}
      </div>
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
