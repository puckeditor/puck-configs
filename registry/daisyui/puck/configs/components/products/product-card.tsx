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
};

export const BaseProductCard = forwardRef<HTMLDivElement, BaseProductCardProps>(
  ({ price, name, category, body, image, href }: BaseProductCardProps, ref) => {
    return (
      <Card image={image} href={href} ref={ref}>
        <div className="card-title">{price}</div>
        <h2 className="text-lg">{name}</h2>
        <p className="text-base-content/70 uppercase font-semibold">
          {category}
        </p>
        <p className="whitespace-pre-wrap">{body}</p>
      </Card>
    );
  },
);

export type ProductCardProps = BaseProductCardProps;

const ProductCard: PuckComponent<ProductCardProps> = ({
  price,
  name,
  category,
  body,
  image,
  href,
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
    />
  );
};

export default ProductCard;
