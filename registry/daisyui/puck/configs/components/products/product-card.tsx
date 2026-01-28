import { forwardRef, ReactNode } from "react";
import { PuckComponent } from "@puckeditor/core";

import { ImageFieldProps } from "../../fields/image";
import Card from "../../../components/card";

export type BaseProductCardProps = {
  price: ReactNode;
  name: ReactNode;
  category: ReactNode;
  body: ReactNode;
  image: ImageFieldProps;
  href?: string;
  rating?: number;
};

export const BaseProductCard = forwardRef<HTMLDivElement, BaseProductCardProps>(
  (
    {
      price,
      name,
      category,
      body,
      image,
      href,
      rating = 0,
    }: BaseProductCardProps,
    ref,
  ) => {
    const normalizedRating = Math.round(
      rating < 0 ? 0 : rating > 5 ? 5 : rating,
    );

    const ratingStars = Array.from({ length: 5 }).map((_, index) => (
      <div
        className="mask mask-star"
        key={index}
        aria-label={`${index + 1} star`}
        aria-current={normalizedRating === index + 1}
      ></div>
    ));

    return (
      <Card image={image} href={href} ref={ref}>
        <div className="card-title">{price}</div>
        <h2 className="text-lg">{name}</h2>
        <p className="text-base-content/70 uppercase font-semibold">
          {category}
        </p>
        <p className="whitespace-pre-wrap">{body}</p>
        {rating > 0 && <div className="rating">{ratingStars}</div>}
      </Card>
    );
  },
);

BaseProductCard.displayName = "BaseProductCard";

export type ProductCardProps = BaseProductCardProps;

const ProductCard: PuckComponent<ProductCardProps> = ({
  price,
  name,
  category,
  body,
  image,
  href,
  rating,
  puck,
}) => {
  return (
    <BaseProductCard
      price={price}
      name={name}
      category={category}
      body={body}
      image={image}
      href={puck.isEditing ? undefined : href}
      ref={puck.dragRef}
      rating={rating}
    />
  );
};

export default ProductCard;
