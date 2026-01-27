import { ReactNode } from "react";
import { PuckComponent } from "@puckeditor/core";

import { ImageFieldProps } from "../../fields/image";

export type ProductCardProps = {
  price: ReactNode;
  name: ReactNode;
  category: ReactNode;
  body: ReactNode;
  image: ImageFieldProps;
  link: { href: string };
};

const ProductCard: PuckComponent<ProductCardProps> = ({
  price,
  name,
  category,
  body,
  image,
  link,
  puck,
}) => {
  return (
    <a
      ref={puck.dragRef}
      className="card bg-base-200 w-full p-0 not-prose hover:outline-solid hover:outline hover:outline-neutral transition relative"
      href={puck.isEditing ? undefined : link.href}
    >
      {image.src && (
        <figure className="m-0">
          <img
            className="w-full aspect-square object-cover"
            src={image.src}
            alt={image.alt}
          />
        </figure>
      )}
      <div className="card-body">
        <div className="card-title">{price}</div>
        <h2 className="text-lg">{name}</h2>
        <p className="text-base-content/70 uppercase font-semibold">
          {category}
        </p>
        <p className="whitespace-pre-wrap">{body}</p>
      </div>
    </a>
  );
};

export default ProductCard;
