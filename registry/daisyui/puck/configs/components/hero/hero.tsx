import { PropsWithChildren, ReactNode } from "react";
import { PuckComponent } from "@puckeditor/core";

import { ButtonFieldProps } from "../../fields/link-button";
import { ImageFieldProps } from "../../fields/image";
import Button from "../../../components/button";
import { cn } from "../../../../lib/utils";

export type HeroProps = {
  title: ReactNode;
  description: ReactNode;
  buttons: ButtonFieldProps[];
  imageLayout: "background" | "left" | "right" | "bottom" | "none";
  image?: ImageFieldProps;
};

const BackgroundHero = ({
  children,
  image,
}: PropsWithChildren<Pick<HeroProps, "image">>) => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: image?.src ? `url(${image.src})` : undefined,
      }}
    >
      <div className={cn("hero-overlay", !image?.src && "bg-base-200")}></div>
      <div
        className={cn(
          `hero-content text-center h-screen md:h-[80dvh] lg:h-[70dvh]`,
          image?.src && "text-neutral-content",
        )}
      >
        <div className="max-w-md">{children}</div>
      </div>
    </div>
  );
};

const NoImageHero = ({ children }: PropsWithChildren) => {
  return (
    <div className="hero">
      <div className="hero-overlay bg-base-200"></div>
      <div className="hero-content text-center py-24">
        <div className="max-w-md">{children}</div>
      </div>
    </div>
  );
};

const SideImageHero = ({
  image,
  imageLayout,
  children,
}: PropsWithChildren<Pick<HeroProps, "image" | "imageLayout">>) => {
  return (
    <div className="hero">
      <div className="hero-overlay bg-base-200"></div>
      <div
        className={`hero-content py-24 ${cn(
          "gap-8 justify-center items-center flex flex-col text-center w-full",
          {
            "md:justify-start md:text-left":
              imageLayout === "right" || imageLayout === "left",
            "md:flex-row": imageLayout === "right",
            "md:flex-row-reverse": imageLayout === "left",
          },
        )}`}
      >
        <div
          className={cn(
            "max-w-md",
            imageLayout !== "bottom" && "md:max-w-none md:w-1/2",
          )}
        >
          {children}
        </div>
        {image?.src && (
          <img
            src={image.src}
            alt={image.alt}
            className={cn(
              "rounded-md shadow-2xl aspect-square object-cover mx-auto w-full max-w-lg",
              imageLayout === "bottom"
                ? "lg:max-w-xl"
                : "md:max-w-none md:w-1/2",
            )}
          />
        )}
      </div>
    </div>
  );
};

const Hero: PuckComponent<HeroProps> = ({
  title,
  description,
  buttons,
  image,
  imageLayout,
}) => {
  const heroContent = (
    <>
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      <div className="mb-5 prose-neutral">{description}</div>
      <div
        className={cn(
          "w-full flex flex-row flex-wrap items-center gap-2 mt-4 justify-center",
          {
            "md:justify-start":
              imageLayout === "right" || imageLayout === "left",
          },
        )}
      >
        {buttons.map((button, idx) => (
          <Button key={idx} url={button.href} variant={button.variant}>
            {button.label}
          </Button>
        ))}
      </div>
    </>
  );

  if (imageLayout === "background") {
    return <BackgroundHero image={image}>{heroContent}</BackgroundHero>;
  }

  if (imageLayout === "none") {
    return <NoImageHero>{heroContent}</NoImageHero>;
  }

  return (
    <SideImageHero image={image} imageLayout={imageLayout}>
      {heroContent}
    </SideImageHero>
  );
};
export default Hero;
