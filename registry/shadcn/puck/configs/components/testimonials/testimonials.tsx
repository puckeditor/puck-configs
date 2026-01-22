"use client";

import { useEffect, useState } from "react";
import { User } from "lucide-react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/registry/shadcn/components/ui/carousel";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/shadcn/components/ui/avatar";
import { ImageProps } from "@/registry/shadcn/components/ui/image";
import { usePrefersReducedMotion } from "@/registry/hooks/use-prefers-reduced-motion";
import {
  Container,
  ContainerProps,
} from "@/registry/shadcn/components/container";

export interface TestimonialsProps {
  padding?: ContainerProps["padding"];
  heading: string;
  testimonials: {
    title: string;
    quote: string;
    author: {
      name: string;
      image?: ImageProps;
    };
  }[];
}

export const Testimonials = ({
  padding,
  heading,
  testimonials,
}: TestimonialsProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!api || prefersReducedMotion) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrentIndex(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrentIndex(currentIndex + 1);
      }
    }, 4000);
  }, [api, currentIndex, prefersReducedMotion]);

  return (
    <Container padding={padding}>
      <div className="flex flex-col gap-10">
        <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-start">
          {heading}
        </h2>
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem className="lg:basis-1/2 me-4" key={index}>
                <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col">
                  <User className="w-8 h-8 stroke-1" />
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                      <h3 className="text-xl tracking-tight">
                        {testimonial.title}
                      </h3>
                      <p className="text-muted-foreground max-w-xs text-base">
                        {testimonial.quote}
                      </p>
                    </div>
                    <p className="flex flex-row gap-2 text-sm items-center">
                      <span className="text-muted-foreground">By</span>{" "}
                      <Avatar className="h-6 w-6">
                        <AvatarImage
                          src={testimonial.author.image?.src}
                          alt={testimonial.author.image?.alt}
                        />
                        <AvatarFallback>
                          {getInitials(testimonial.author.name)}
                        </AvatarFallback>
                      </Avatar>
                      <span>{testimonial.author.name}</span>
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Container>
  );
};

function getInitials(name: string, maxInitials?: number): string {
  if (!name) {
    return "";
  }

  const initials = name
    .trim()
    .split(/\s+/)
    .filter((part) => part.length > 0)
    .map((part) => part.charAt(0).toUpperCase())
    .slice(0, maxInitials || undefined);

  return initials.join("");
}
