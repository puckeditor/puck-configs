import { CSSProperties } from "react";
import { Section, Text, Img, Row, Column } from "@react-email/components";

import { LinkFieldProps } from "@/registry/react-email/puck/configs/fields/rich-link";
import { ImageFieldProps } from "@/registry/react-email/puck/configs/fields/image-url";
import Link from "@/registry/react-email/components/link";
import Heading from "@/registry/react-email/components/heading";
import theme from "@/registry/react-email/lib/constants/theme";

export type ShoppingCartProps = {
  title: string;
  button: LinkFieldProps;
  items: {
    image: ImageFieldProps;
    name: string;
    quantity: number;
    price: string;
  }[];
};

const tableCellStyles: CSSProperties = {
  paddingTop: 8,
  paddingBottom: 8,
  borderWidth: "0px",
  borderBottomWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.light.border,
};

const tableHeaderStyles: CSSProperties = {
  ...tableCellStyles,
  color: theme.palette.light.text.secondary,
  fontWeight: 600,
};

const ShoppingCart = ({ title, button, items }: ShoppingCartProps) => {
  const shopItems = items.map((item, index) => (
    <tr key={index}>
      <td style={tableCellStyles}>
        {item.image.src && (
          <Img
            height={110}
            alt={item.image.alt}
            src={item.image.src}
            style={{
              objectFit: "cover",
              borderRadius: 8,
              marginRight: 16,
            }}
          />
        )}
      </td>
      <td align="left" colSpan={6} style={tableCellStyles}>
        <Text>{item.name}</Text>
      </td>
      <td align="center" style={tableCellStyles}>
        <Text>{item.quantity}</Text>
      </td>
      <td align="center" style={tableCellStyles}>
        <Text>{item.price}</Text>
      </td>
    </tr>
  ));

  return (
    <Section style={{ paddingTop: 16, paddingBottom: 16, textAlign: "center" }}>
      <Heading
        as="h2"
        style={{
          fontSize: 30,
          lineHeight: "36px",
        }}
      >
        {title}
      </Heading>
      <Section
        style={{
          padding: 16,
          paddingTop: 0,
          marginTop: 16,
        }}
      >
        <table style={{ marginBottom: 16 }} width="100%">
          <thead>
            <tr>
              <th style={tableCellStyles}>&nbsp;</th>
              <th align="left" colSpan={6} style={tableHeaderStyles}>
                <Text>Product</Text>
              </th>
              <th align="center" style={tableHeaderStyles}>
                <Text>Quantity</Text>
              </th>
              <th align="center" style={tableHeaderStyles}>
                <Text>Price</Text>
              </th>
            </tr>
          </thead>
          <tbody>{shopItems}</tbody>
        </table>
        <Row>
          <Column align="center">
            <Link variant="button" href={button.href} icon={button.icon}>
              {button.label}
            </Link>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export default ShoppingCart;
