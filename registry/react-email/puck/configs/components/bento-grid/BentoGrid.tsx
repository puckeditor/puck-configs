import { CSSProperties } from "react";
import {
  Container,
  Section,
  Row,
  Column,
  Text,
  Img,
} from "@react-email/components";

import Heading from "@/registry/react-email/components/heading";
import { ImageFieldProps } from "@/registry/react-email/puck/configs/fields/image-url";
import { LinkFieldProps } from "@/registry/react-email/puck/configs/fields/rich-link";
import Link from "@/registry/react-email/components/link";
import theme from "@/registry/react-email/lib/constants/theme";

type SharedProps = {
  title: string;
  description: string;
  image: ImageFieldProps;
};

export type BentoGridProps = {
  cta: LinkFieldProps;
  products: SharedProps[];
} & SharedProps;

const imageStyles: CSSProperties = {
  borderRadius: "4px",
  objectFit: "cover",
  width: "100%",
};

const BentoGrid = ({
  title,
  description,
  cta,
  image,
  products,
}: BentoGridProps) => {
  const productList = products?.map((product, index) => (
    <Column
      key={index}
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "180px",
        verticalAlign: "top",
      }}
    >
      {product.image.src && (
        <Img
          src={product.image.src}
          alt={product.image.alt}
          style={{ ...imageStyles, marginBottom: "18px" }}
        />
      )}
      <div>
        <Heading
          as="h3"
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            marginBottom: "8px",
          }}
        >
          {product.title}
        </Heading>
        <Text
          style={{
            color: theme.palette.light.text.secondary,
            fontSize: "12px",
            lineHeight: "20px",
            margin: "0px",
            paddingRight: "12px",
            whiteSpace: "pre-wrap",
          }}
        >
          {product.description}
        </Text>
      </div>
    </Column>
  ));

  return (
    <Container
      style={{
        borderRadius: "8px",
        maxWidth: "900px",
        overflow: "hidden",
        padding: "0px",
        border: "1px solid lightgrey",
      }}
    >
      <Section>
        <Row
          style={{
            backgroundColor: theme.palette.dark.background.bento,
            borderCollapse: "separate",
            borderSpacing: "24px",
            margin: "0px",
            tableLayout: "fixed",
            width: "100%",
          }}
        >
          <Column style={{ paddingLeft: "12px" }}>
            <Heading
              as="h2"
              style={{
                color: theme.palette.dark.text.primary,
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              {title}
            </Heading>
            <Text
              style={{
                color: theme.palette.dark.text.secondary,
                fontSize: "14px",
                lineHeight: "20px",
                margin: "0px",
              }}
            >
              {description}
            </Text>
            <Link
              variant="a"
              href={cta.href}
              icon={cta.icon}
              style={{
                color: theme.palette.dark.secondary,
                display: "block",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: "600",
                marginTop: "12px",
              }}
            >
              {cta.label}
            </Link>
          </Column>
          <Column style={{ width: "42%", height: "250px" }}>
            {image.src && (
              <Img
                src={image.src}
                alt={image.alt}
                style={{ ...imageStyles, height: "100%" }}
              />
            )}
          </Column>
        </Row>
      </Section>
      <Section style={{ marginBottom: "24px" }}>
        <Row
          style={{
            borderCollapse: "separate",
            borderSpacing: "12px",
            tableLayout: "fixed",
            width: "100%",
          }}
        >
          {productList}
        </Row>
      </Section>
    </Container>
  );
};

export default BentoGrid;
