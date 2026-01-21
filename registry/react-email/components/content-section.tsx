import { PropsWithChildren } from "react";
import { Section, Text } from "@react-email/components";

import Heading from "@/registry/react-email/components/heading";
import theme from "@/registry/react-email/lib/constants/theme";

export type ContentSectionProps = {
  tag: string;
  title: string;
  description: string;
};

const ContentSection = ({
  tag,
  title,
  description,
  children,
}: PropsWithChildren<ContentSectionProps>) => {
  return (
    <Section style={{ marginTop: 16, marginBottom: 16 }}>
      <Section style={{ marginTop: 42 }}>
        <Text
          style={{
            margin: "0px",
            fontSize: 16,
            lineHeight: "24px",
            fontWeight: 600,
            color: theme.palette.light.primary,
          }}
        >
          {tag}
        </Text>
        <Heading
          as="h2"
          style={{
            margin: "0px",
            marginTop: 8,
            fontSize: 24,
            lineHeight: "32px",
            color: theme.palette.light.text.primary,
          }}
        >
          {title}
        </Heading>
        <Text
          style={{
            marginTop: 8,
            fontSize: 16,
            lineHeight: "24px",
            color: theme.palette.light.text.secondary,
            whiteSpace: "pre-wrap",
          }}
        >
          {description}
        </Text>
      </Section>
      <Section style={{ marginTop: 16 }}>{children}</Section>
    </Section>
  );
};

export default ContentSection;
