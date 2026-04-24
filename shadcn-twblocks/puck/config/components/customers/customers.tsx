"use client";

import { useEffect, useState } from "react";
import { cn } from "@/puck/lib/utils";
import { usePrefersReducedMotion } from "@/puck/hooks/use-prefers-reduced-motion";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  CompoundContainer,
  CompoundContainerProps,
} from "@/puck/components/container";
import {
  CompoundImage,
  CompoundImageProps,
} from "@/puck/components/image";

export interface CustomersProps {
  padding?: CompoundContainerProps["padding"];
  layout?: "section" | "inline";
  heading: string;
  customers: {
    name: string;
    image?: CompoundImageProps;
    url?: string;
  }[];
}

export const Customers = ({
  padding,
  layout = "section",
  heading,
  customers,
}: CustomersProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isSectionLayout = layout === "section";
  const isInlineLayout = layout === "inline";

  useEffect(() => {
    if (!api || prefersReducedMotion || isPaused) {
      return;
    }

    const timeoutId = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrentIndex(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrentIndex(currentIndex + 1);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [api, currentIndex, isPaused, prefersReducedMotion]);

  return (
    <CompoundContainer padding={padding}>
      <div
        className={cn("gap-10", {
          "flex flex-col": isSectionLayout,
          "grid grid-cols-5 items-center": isInlineLayout,
        })}
      >
        <h2
          className={cn(
            "text-xl tracking-tighter lg:max-w-xl font-regular text-start",
            {
              "md:text-5xl": isSectionLayout,
            }
          )}
        >
          {heading}
        </h2>
        <div
          className={cn({
            "relative w-full col-span-4": isInlineLayout,
          })}
        >
          {isInlineLayout ? (
            <div className="bg-gradient-to-r from-background via-white/0 to-background z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full" />
          ) : null}
          <Carousel
            setApi={setApi}
            className="w-full"
            onMouseOver={() => {
              setIsPaused(true);
            }}
            onMouseOut={() => {
              setIsPaused(false);
            }}
          >
            <CarouselContent>
              {customers.map((customer, index) => (
                <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                  <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-6">
                    {customer.image?.src ? (
                      <CompoundImage
                        src={customer.image.src}
                        alt={customer.image.alt || customer.name}
                      />
                    ) : (
                      <span className="text-sm">{customer.name}</span>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </CompoundContainer>
  );
};
