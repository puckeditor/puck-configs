import { registerOverlayPortal, WithPuckProps } from "@puckeditor/core";

import { cn } from "@/registry/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/shadcn/components/ui/carousel";
import { Image, ImageProps } from "@/registry/shadcn/components/ui/image";

import {
  Container,
  ContainerProps,
} from "@/registry/shadcn/components/container";
import { Content, ContentProps } from "@/registry/shadcn/components/content";

type ImageWithAspectRatio = ImageProps & {
  aspectRatio?: "16x9" | "1x1";
};

export interface TwoColumnProps extends ContentProps {
  padding?: ContainerProps["padding"];
  layout?: "text-start" | "text-end";
  images?: ImageWithAspectRatio[];
  border?: "true" | "false";
}

export const TwoColumn = ({
  padding,
  layout,
  border = "false",
  badge,
  heading,
  description,
  features,
  buttons,
  images,
  puck,
}: WithPuckProps<TwoColumnProps>) => {
  const hasSingleImage = Array.isArray(images) && images.length === 1;
  const hasMultipleImages = Array.isArray(images) && images.length > 1;

  return (
    <Container padding={padding}>
      <div
        className={cn("flex gap-10 lg:items-center", {
          "flex-col lg:flex-row": layout === "text-start",
          "flex-col-reverse lg:flex-row-reverse": layout === "text-end",
          "border border-muted p-4 lg:p-8 rounded-md": border === "true",
        })}
      >
        <Content
          badge={badge}
          heading={heading}
          description={description}
          features={features}
          buttons={buttons}
          alignContent="start"
          className={cn({
            "lg:ps-10": layout === "text-end",
            "lg:pe-10": layout === "text-start",
          })}
          disableNavigation={puck?.isEditing}
        />
        <div
          className="flex flex-col items-center"
          // For some reason using "grow shrink-0 basis-1/2" or "flex-[1_0_50%]" doesn't work
          style={{ flexGrow: 1, flexShrink: 0, flexBasis: "40%" }}
        >
          {hasSingleImage ? <ColumnImage {...images[0]} /> : null}
          {hasMultipleImages ? (
            <div className="w-full max-w-full px-6">
              <Carousel>
                <CarouselPrevious ref={registerOverlayPortal} />
                <CarouselContent>
                  {images?.map((image, index) => (
                    <CarouselItem key={index}>
                      <ColumnImage
                        src={image.src}
                        alt={image.alt}
                        aspectRatio={image.aspectRatio}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNext ref={registerOverlayPortal} />
              </Carousel>
            </div>
          ) : null}
        </div>
      </div>
    </Container>
  );
};

const ColumnImage = (props: ImageWithAspectRatio & { className?: string }) => (
  <div
    className={cn(
      "bg-muted rounded-md w-full",
      {
        "aspect-video h-full": props.aspectRatio === "16x9",
        "aspect-square": props.aspectRatio === "1x1",
      },
      props.className
    )}
  >
    <Image src={props.src} alt={props.alt} className="h-full" />
  </div>
);
