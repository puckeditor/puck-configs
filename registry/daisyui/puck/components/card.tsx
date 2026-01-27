import { PropsWithChildren, Ref, forwardRef } from "react";

import { cn } from "../../lib/utils";

export type CardProps = {
  image?: { src: string; alt?: string };
  href?: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
};

const Card = forwardRef<
  HTMLAnchorElement | HTMLDivElement,
  PropsWithChildren<CardProps>
>(({ image, href, className = "", onClick, children }, ref) => {
  const cardClasses = cn(
    "card bg-base-200 w-full p-0 not-prose hover:outline-solid hover:outline hover:outline-neutral transition relative cursor-pointer",
    className,
  );

  const content = (
    <>
      {image?.src && (
        <figure className="m-0">
          <img
            className="w-full aspect-square object-cover"
            src={image.src}
            alt={image.alt}
          />
        </figure>
      )}
      <div className="card-body">{children}</div>
    </>
  );

  return href ? (
    <a
      ref={ref as Ref<HTMLAnchorElement>}
      href={href}
      className={cardClasses}
      onClick={onClick}
    >
      {content}
    </a>
  ) : (
    <div
      ref={ref as Ref<HTMLDivElement>}
      className={cardClasses}
      onClick={onClick}
    >
      {content}
    </div>
  );
});

Card.displayName = "Card";

export default Card;
