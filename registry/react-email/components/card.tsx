import { JSXElementConstructor } from "react";
import { Section, Img, Text } from "@react-email/components";

import Heading from "@/registry/react-email/components/heading";
import Link, { LinkProps } from "@/registry/react-email/components/link";
import theme from "@/registry/react-email/lib/constants/theme";

export const cardTypes = ["product", "article"] as const;

export const cardVariants = ["inline", "featured"] as const;

export type CardVariant = (typeof cardVariants)[number];

export type CardType = (typeof cardTypes)[number];

export type CardProps = {
  type: CardType;
  image: { src: string; alt: string };
  title: string;
  description: string;
  tag: string;
  price?: string;
  button: LinkProps & { label: string };
  variant: CardVariant;
};

type CardPropsNoVariant = Omit<CardProps, "variant">;

const cardStyles = {
  tag: {
    fontSize: 16,
    lineHeight: "24px",
    fontWeight: 600,
    color: theme.palette.light.primary,
  },
  title: {
    color: theme.palette.light.text.primary,
  },
  description: {
    fontSize: 16,
    lineHeight: "24px",
    color: theme.palette.light.text.secondary,
    whiteSpace: "pre-wrap",
  },
  price: {
    fontSize: 16,
    lineHeight: "24px",
    fontWeight: 600,
    color: theme.palette.light.text.primary,
  },
} as const;

const CardColumn = ({
  type: variant,
  image,
  tag,
  title,
  description,
  price,
  button,
}: CardPropsNoVariant) => {
  return (
    <Section style={{ padding: 16 }}>
      {image.src && (
        <Img
          height={320}
          alt={image.alt}
          src={image.src}
          style={{
            width: "100%",
            borderRadius: 12,
            objectFit: "cover",
          }}
        />
      )}
      <Section style={{ marginTop: 32, textAlign: "center" }}>
        <Text
          style={{
            ...cardStyles.tag,
            marginTop: 16,
            marginBottom: 16,
            fontSize: 18,
            lineHeight: "28px",
          }}
        >
          {tag}
        </Text>
        <Heading
          as="h2"
          style={{
            ...cardStyles.title,
            margin: "0px",
            marginTop: 8,
            fontSize: 30,
            lineHeight: "36px",
          }}
        >
          {title}
        </Heading>
        <Text style={{ ...cardStyles.description }}>{description}</Text>
        {variant === "product" && (
          <Text style={{ ...cardStyles.price, marginBottom: 0 }}>{price}</Text>
        )}
        <Link
          variant="button"
          icon={button.icon}
          href={button.href}
          style={{
            marginTop: 24,
            width: "auto",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          {button.label}
        </Link>
      </Section>
    </Section>
  );
};

const CardRow = ({
  image,
  tag,
  title,
  description,
  price,
  type: variant,
  button,
}: CardPropsNoVariant) => {
  return (
    <Section style={{ padding: "16px", textAlign: "center" }}>
      <Section
        style={{
          display: "inline-block",
          marginRight: 16,
          marginLeft: 16,
          marginBottom: 16,
          width: "100%",
          maxWidth: 220,
          verticalAlign: "middle",
        }}
      >
        {image.src && (
          <Img
            width={220}
            height={240}
            alt={image.alt}
            src={image.src}
            style={{
              borderRadius: 8,
              objectFit: "cover",
            }}
          />
        )}
      </Section>
      <Section
        style={{
          display: "inline-block",
          textAlign: "left",
          width: "100%",
          maxWidth: 250,
          verticalAlign: "middle",
        }}
      >
        <Text style={{ ...cardStyles.tag, margin: "0px" }}>{tag}</Text>
        <Heading
          style={{
            ...cardStyles.title,
            margin: "0px",
            marginTop: "8px",
            fontSize: 20,
            lineHeight: "28px",
          }}
        >
          {title}
        </Heading>
        <Text style={{ ...cardStyles.description, marginTop: 8 }}>
          {description}
        </Text>
        {variant === "product" && (
          <Text style={{ ...cardStyles.price, marginTop: 8 }}>{price}</Text>
        )}
        <Link variant="button" href={button.href} style={{ width: "auto" }}>
          {button.label}
        </Link>
      </Section>
    </Section>
  );
};

const cardMap: Record<
  CardProps["variant"],
  JSXElementConstructor<CardPropsNoVariant>
> = {
  featured: CardColumn,
  inline: CardRow,
};

const Card = (props: CardProps) => {
  const { variant, ...propsNoDisplay } = props;

  const CardComponent = cardMap[variant];

  if (!CardComponent) {
    console.warn(`Unknown display type in Card: ${variant}`);

    return <CardColumn {...propsNoDisplay} />;
  }

  return <CardComponent {...propsNoDisplay} />;
};

export default Card;
