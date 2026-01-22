import { CSSProperties } from "react";
import { Section, Row, Column } from "@react-email/components";

import { LogoFieldProps } from "@/registry/react-email/puck/configs/fields/logo-content";
import { LinkFieldProps } from "@/registry/react-email/puck/configs/fields/rich-link";
import theme from "@/registry/react-email/lib/constants/theme";
import Link from "@/registry/react-email/components/link";
import Logo from "@/registry/react-email/components/logo";

export const headerVariants = ["column", "row"] as const;

export type HeaderProps = {
  logo: LogoFieldProps;
  links: LinkFieldProps[];
  variant: (typeof headerVariants)[number];
};

const Header = ({ logo, links, variant }: HeaderProps) => {
  const linksElement = (
    <Row style={{ tableLayout: "auto", width: "unset" }} align="center">
      {links.map((link, index) => (
        <Column
          key={index}
          style={{ paddingRight: 8, paddingLeft: 8, verticalAlign: "middle" }}
          align="center"
        >
          <Link href={link.href} icon={link.icon}>
            {link.label}
          </Link>
        </Column>
      ))}
    </Row>
  );

  const logoElement = (
    <Logo src={logo.image.src} alt={logo.image.alt} label={logo.label} />
  );

  const wrapperStyles: CSSProperties = {
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 32,
    paddingRight: 32,
    borderBottom: `1px solid ${theme.palette.light.border}`,
  };

  if (variant === "column") {
    return (
      <Section style={wrapperStyles}>
        <Row>
          <Column align="center">{logoElement}</Column>
        </Row>
        <Row style={{ marginTop: 32 }}>
          <Column align="center">{linksElement}</Column>
        </Row>
      </Section>
    );
  }

  return (
    <Section style={wrapperStyles}>
      <Row>
        <Column style={{ width: "80%" }} align="left">
          {logoElement}
        </Column>
        <Column align="right">{linksElement}</Column>
      </Row>
    </Section>
  );
};

export default Header;
