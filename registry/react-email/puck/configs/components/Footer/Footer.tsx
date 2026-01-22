import { CSSProperties } from "react";
import { Section, Img, Text, Row, Column } from "@react-email/components";

import { LogoFieldProps } from "@/registry/react-email/puck/configs/fields/logo";
import { LinkFieldProps } from "@/registry/react-email/puck/configs/fields/rich-link";
import Link from "@/registry/react-email/components/link";
import Logo from "@/registry/react-email/components/logo";
import theme from "@/registry/react-email/lib/constants/theme";

export const footerVariants = ["column", "row"] as const;

export type FooterProps = {
  logo: LogoFieldProps;
  links: Omit<LinkFieldProps, "label">[];
  variant: (typeof footerVariants)[number];
  tagLine: string;
  address: string;
};

const Footer = ({ logo, links, variant, tagLine, address }: FooterProps) => {
  const logoElement = (
    <Logo src={logo.image.src} alt={logo.image.alt} label={logo.label} />
  );

  const tagElement = <Text style={{ marginTop: 4 }}>{tagLine}</Text>;

  const linksElement = links
    .filter((link) => link.icon.src)
    .map((link, index) => (
      <Column
        key={index}
        style={{ paddingRight: index === links.length - 1 ? 0 : 8 }}
      >
        <Link href={link.href} aria-label={link.icon.alt}>
          <Img alt={link.icon.alt} src={link.icon.src} height="36" width="36" />
        </Link>
      </Column>
    ));

  const addressElement = (
    <Text
      style={{
        marginTop: 8,
        marginBottom: 8,
        fontWeight: 600,
      }}
    >
      {address}
    </Text>
  );

  const wrapperStyles: CSSProperties = {
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 32,
    paddingRight: 32,
    borderTop: `1px solid ${theme.palette.light.border}`,
    fontSize: 16,
    lineHeight: "24px",
    color: theme.palette.light.text.secondary,
    whiteSpace: "pre-wrap",
  };

  const linkRowStyles: CSSProperties = { tableLayout: "auto", width: "unset" };

  if (variant === "column") {
    return (
      <Section style={wrapperStyles}>
        <Row align="center">
          <Column align="center">{logoElement}</Column>
        </Row>
        <Row align="center">
          <Column align="center">{tagElement}</Column>
        </Row>
        <Row>
          <Column align="center">
            <Row style={linkRowStyles}>{linksElement}</Row>
          </Column>
        </Row>
        <Row>
          <Column align="center">{addressElement}</Column>
        </Row>
      </Section>
    );
  }

  return (
    <Section style={wrapperStyles}>
      <Row>
        <Column style={{ width: "80%" }} align="left">
          {logoElement}
          {tagElement}
        </Column>
        <Column style={{ textAlign: "right" }}>
          <Row align="right" style={linkRowStyles}>
            {linksElement}
          </Row>
          <Row align="right">
            <Column>{addressElement}</Column>
          </Row>
        </Column>
      </Row>
    </Section>
  );
};

export default Footer;
