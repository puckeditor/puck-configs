"use client";

import { ReactNode } from "react";
import { PuckComponent } from "@puckeditor/core";

import Button from "../../../components/button";
import { ButtonFieldProps } from "../../fields/link-button";
import usePortal from "../../../hooks/use-portal";

import { BaseProductCard, BaseProductCardProps } from "./product-card";

export type FeaturedProductsProps = {
  title: ReactNode;
  products: BaseProductCardProps[];
  cta: ButtonFieldProps;
};

const FeaturedProducts: PuckComponent<FeaturedProductsProps> = ({
  title,
  products,
  cta,
  puck,
}) => {
  const ref = usePortal<HTMLDivElement>();

  const carouselCards = products.map((product, index) => (
    <div className="carousel-item w-full md:max-w-sm relative" key={index}>
      <BaseProductCard
        name={product.name}
        category={product.category}
        body={product.body}
        price={product.price}
        image={product.image}
        href={puck.isEditing ? undefined : product.href}
      />
    </div>
  ));

  return (
    <div className="container mx-auto w-full lg:max-w-[1600px] py-8">
      <div className="flex flex-col items-center px-4 gap-2 md:flex-row md:justify-between md:items-end">
        <h2 className="text-3xl font-bold">{title}</h2>
        {cta.href && (
          <Button url={cta.href} variant={cta.variant}>
            {cta.label}
          </Button>
        )}
      </div>
      <div
        className="carousel carousel-center w-full space-x-4 p-4 scrollbar-reset"
        ref={ref}
      >
        {carouselCards}
      </div>
    </div>
  );
};

export default FeaturedProducts;
