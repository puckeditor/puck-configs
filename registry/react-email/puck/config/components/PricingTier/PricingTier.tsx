import { Section, Text } from "@react-email/components";

import { LinkFieldProps } from "@/registry/react-email/puck/config/fields/link";
import Link from "@/registry/react-email/puck/components/link";
import theme from "@/registry/react-email/puck/constants/theme";

export type PricingTierProps = {
  highlighted: boolean;
  title: string;
  description: string;
  price: string;
  period: string;
  features: { description: string }[];
  button: LinkFieldProps;
};

const PricingTier = ({
  title,
  description,
  price,
  period,
  features,
  highlighted,
  button,
}: PricingTierProps) => {
  return (
    <Section
      style={{
        backgroundColor: highlighted
          ? theme.palette.dark.background.paper
          : theme.palette.light.background.paper,
        borderColor: highlighted
          ? theme.palette.dark.border
          : theme.palette.light.border,
        borderRadius: "8px",
        borderStyle: "solid",
        borderWidth: "1px",
        color: highlighted
          ? theme.palette.dark.secondary
          : theme.palette.light.secondary,
        marginBottom: "12px",
        padding: "24px",
        textAlign: "left",
        width: "100%",
      }}
    >
      <Text
        style={{
          color: highlighted
            ? theme.palette.dark.primary
            : theme.palette.light.primary,
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "20px",
          marginBottom: "16px",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "8px",
          marginTop: "0px",
        }}
      >
        <span
          style={{
            color: highlighted
              ? theme.palette.dark.text.primary
              : theme.palette.light.text.primary,
          }}
        >
          {price}
        </span>{" "}
        <span style={{ fontSize: "14px", lineHeight: "20px" }}>{period}</span>
      </Text>
      <Text
        style={{
          marginTop: "12px",
          marginBottom: "24px",
        }}
      >
        {description}
      </Text>
      <ul
        style={{
          fontSize: "12px",
          lineHeight: "20px",
          marginBottom: "30px",
          paddingLeft: "14px",
        }}
      >
        {features.map((feature, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {feature.description}
          </li>
        ))}
      </ul>
      <Link
        variant="button"
        href={button.href}
        style={{
          display: "inline-block",
        }}
        icon={button.icon}
      >
        {button.label}
      </Link>
    </Section>
  );
};

export default PricingTier;
