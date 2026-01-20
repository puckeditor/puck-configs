import { cn } from "@/registry/lib/utils";
import { Button, ButtonProps } from "@/registry/shadcn/components/button";

import { Image, ImageProps } from "@/registry/shadcn/components/ui/image";

export interface ArticleCardProps {
  image?: ImageProps;
  heading?: string;
  description?: string;
  button?: ButtonProps;
  className?: string;
}

export const ArticleCard = ({
  image,
  heading,
  description,
  button,
  className,
}: ArticleCardProps) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="bg-muted rounded-md aspect-video mb-2 overflow-hidden">
        {image?.src ? <Image src={image.src} alt={image.alt} /> : null}
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
