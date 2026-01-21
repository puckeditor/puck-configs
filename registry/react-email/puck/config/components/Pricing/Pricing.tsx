import { Container, Hr, Section, Text } from "@react-email/components";
import { SlotComponent } from "@puckeditor/core";

import Heading from "@/registry/react-email/components/heading";
import { WidthFieldProps } from "@/registry/react-email/puck/config/fields/width";
import theme from "@/registry/react-email/lib/constants/theme";

export type PricingProps = {
  title: string;
  description: string;
  footnotes: string;
  tiers: SlotComponent;
} & WidthFieldProps;

const Pricing = ({
  title,
  description,
  footnotes,
  fullWidth,
  maxWidth,
  tiers,
}: PricingProps) => {
  return (
    <Container
      style={{
        padding: 24,
        maxWidth: fullWidth ? undefined : maxWidth,
      }}
    >
      <Section style={{ marginBottom: "42px" }}>
        <Heading
          as="h2"
          style={{
            textAlign: "center",
            marginBottom: "12px",
          }}
        >
          {title}
        </Heading>
        <Text
          style={{
            color: theme.palette.light.text.secondary,
            lineHeight: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "500px",
            textAlign: "center",
            whiteSpace: "pre-wrap",
          }}
        >
          {description}
        </Text>
      </Section>
      <Section
        style={{
          tableLayout: "auto",
          width: "unset",
          paddingBottom: "24px",
        }}
      >
        {tiers()}
      </Section>
      <Hr style={{ marginTop: "0px" }} />
      <Text
        style={{
          color: theme.palette.light.text.secondary,
          fontSize: "12px",
          lineHeight: "16px",
          fontWeight: "500",
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        {footnotes}
      </Text>
    </Container>
  );
};

export default Pricing;
