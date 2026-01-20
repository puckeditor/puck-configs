"use client";

import { WithPuckProps } from "@puckeditor/core";
import { useState, useMemo, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/registry/lib/utils";
import { usePrefersReducedMotion } from "@/registry/hooks/use-prefers-reduced-motion";
import {
  Container,
  ContainerProps,
} from "@/registry/shadcn/components/container";
import { Badge, BadgeProps } from "@/registry/shadcn/components/badge";
import { Button, ButtonProps } from "@/registry/shadcn/components/button";
import { Image, ImageProps } from "@/registry/shadcn/components/ui/image";

export interface HeroProps {
  padding?: ContainerProps["padding"];
  badge?: BadgeProps;
  heading: string;
  adjectives?: { adjective: string }[];
  description?: string;
  buttons?: ButtonProps[];
  images?: ImageProps[];
  imageLayout: "1x1" | "1x1-9x16-1x1" | "16x9";
}

export const Hero = ({
  padding,
  badge,
  heading,
  adjectives,
  description,
  buttons,
  images,
  imageLayout,
  puck,
}: WithPuckProps<HeroProps>) => {
  const hasImages = Array.isArray(images) && images.length > 0;
  const isTwoColumnLayout =
    imageLayout === "1x1" || imageLayout === "1x1-9x16-1x1";

  return (
    <Container padding={padding}>
      <div
        className={cn("items-center gap-8 text-center", {
          "flex flex-col justify-center": !isTwoColumnLayout,
          "grid grid-cols-1 items-center lg:grid-cols-2 lg:text-start":
            isTwoColumnLayout,
        })}
      >
        <HeroWrapper isTwoColumnLayout={isTwoColumnLayout}>
          <HeroContent
            badge={badge}
            heading={heading}
            adjectives={adjectives}
            description={description}
            buttons={buttons}
            isTwoColumnLayout={isTwoColumnLayout}
            disableNavigation={puck?.isEditing}
          />
        </HeroWrapper>
        {(imageLayout === "16x9" || imageLayout === "1x1") && hasImages ? (
          <ImageSingle {...images![0]} aspectRatio={imageLayout} />
        ) : null}
        {imageLayout === "1x1-9x16-1x1" && hasImages ? (
          <ImageCluster images={images} />
        ) : null}
      </div>
    </Container>
  );
};

const HeroWrapper = ({
  children,
  isTwoColumnLayout,
}: {
  children: React.ReactNode;
  isTwoColumnLayout?: boolean;
}) => {
  if (!isTwoColumnLayout) {
    return children;
  }

  return <div className="flex flex-col gap-10">{children}</div>;
};

const HeroContent = ({
  badge,
  heading,
  adjectives,
  description,
  buttons,
  isTwoColumnLayout,
  disableNavigation,
}: Pick<
  HeroProps,
  "badge" | "heading" | "adjectives" | "description" | "buttons"
> & {
  isTwoColumnLayout?: boolean;
  disableNavigation?: boolean;
}) => {
  return (
    <>
      {badge ? (
        <div>
          <Badge
            label={badge.label}
            variant={badge.variant}
            url={badge.url}
            disableNavigation={disableNavigation}
          />
        </div>
      ) : null}
      <div className="flex gap-4 flex-col">
        <h1
          className={cn(
            "text-5xl md:text-7xl max-w-2xl tracking-tighter font-regular",
            {
              "lg:max-w-lg": isTwoColumnLayout,
            }
          )}
        >
          <span>{heading}</span>
          {adjectives?.length ? (
            <HeroAnimatedAdjectives
              adjectives={adjectives}
              isTwoColumnLayout={isTwoColumnLayout}
            />
          ) : null}
        </h1>
        {description ? (
          <div
            className={cn(
              "text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl",
              {
                "lg:max-w-md": isTwoColumnLayout,
              }
            )}
          >
            {description}
          </div>
        ) : null}
      </div>
      {Array.isArray(buttons) && buttons.length > 0 ? (
        <div className="flex flex-row gap-4 flex-wrap">
          {buttons
            .filter((button) => !!button.label)
            .map((button, index) => (
              <Button
                key={index}
                label={button.label}
                url={button.url}
                variant={button.variant}
                size={button.size}
                icon={button.icon}
                disableNavigation={disableNavigation}
              />
            ))}
        </div>
      ) : null}
    </>
  );
};

const HeroAnimatedAdjectives = ({
  adjectives = [],
  isTwoColumnLayout,
}: Pick<HeroProps, "adjectives"> & { isTwoColumnLayout?: boolean }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const titles = useMemo(
    () => adjectives.map((adjective) => adjective.adjective),
    [adjectives]
  );
  const [titleNumber, setTitleNumber] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles, prefersReducedMotion]);

  const classNames = cn(
    "relative flex w-full overflow-hidden text-center md:pb-4 md:pt-1 justify-center",
    {
      "lg:justify-start": isTwoColumnLayout,
    }
  );

  if (prefersReducedMotion) {
    return <span className={classNames}>{titles[0]}</span>;
  }

  return (
    <span className={classNames}>
      &nbsp;
      {titles.map((title, index) => (
        <motion.span
          key={index}
          className="absolute font-semibold"
          initial={{ opacity: 0, y: "-100" }}
          transition={{ type: "spring", stiffness: 50 }}
          animate={
            titleNumber === index
              ? {
                  y: 0,
                  opacity: 1,
                }
              : {
                  y: titleNumber > index ? -150 : 150,
                  opacity: 0,
                }
          }
        >
          {title}
        </motion.span>
      ))}
    </span>
  );
};

const ImageSingle = ({
  src,
  alt,
  aspectRatio,
}: Partial<ImageProps> & { aspectRatio?: "16x9" | "1x1" }) => {
  return (
    <div className="w-full">
      <div
        className={cn("bg-muted rounded-md", {
          "aspect-16/9": aspectRatio === "16x9" || !aspectRatio,
          "aspect-square": aspectRatio === "1x1",
        })}
      >
        {src ? <Image src={src} alt={alt} className="h-full" /> : null}
      </div>
    </div>
  );
};

const ImageCluster = ({ images }: Pick<HeroProps, "images">) => {
  if (!images || images.length === 0) {
    return null;
  }

  const [image1, image2, image3] = images;

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="bg-muted rounded-md aspect-square">
        {image1 ? (
          <Image src={image1.src} alt={image1.alt} className="h-full" />
        ) : null}
      </div>
      <div className="bg-muted rounded-md row-span-2">
        {image2 ? (
          <Image src={image2.src} alt={image2.alt} className="h-full" />
        ) : null}
      </div>
      <div className="bg-muted rounded-md aspect-square">
        {image3 ? (
          <Image src={image3.src} alt={image3.alt} className="h-full" />
        ) : null}
      </div>
    </div>
  );
};
