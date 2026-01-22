import { Section, Row, Column, Text } from "@react-email/components";

import Heading from "../../../components/heading";
import ContentSection from "../../../components/content-section";
import { SectionTextFieldProps } from "../../fields/section-text";
import theme from "../../../lib/constants/theme";

export type FeatureListProps = {
  features: { title: string; description: string }[];
} & SectionTextFieldProps;

const FeatureList = ({
  tag,
  title,
  description,
  features,
}: FeatureListProps) => {
  const featuresList = features.map((feature, index) => (
    <Section
      key={index}
      style={{
        borderTop: `1px solid ${theme.palette.light.border}`,
        paddingTop: 24,
        paddingBottom: 24,
      }}
    >
      <Row>
        <Column
          align="center"
          style={{ verticalAlign: "baseline", paddingRight: 8 }}
        >
          <table style={{ textAlign: "center" }}>
            <tbody>
              <tr>
                <td
                  align="center"
                  style={{
                    height: 40,
                    width: 40,
                    backgroundColor: theme.palette.light.background.primary,
                    borderRadius: 9999,
                    padding: "0px",
                    verticalAlign: "middle",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: 600,
                      margin: "0px",
                      color: theme.palette.light.primary,
                    }}
                  >
                    {index + 1}
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Column>
        <Column style={{ width: "90%" }}>
          <Heading
            as="h3"
            style={{
              margin: "0px",
              fontSize: 20,
              lineHeight: "28px",
              color: theme.palette.light.text.primary,
            }}
          >
            {feature.title}
          </Heading>
          <Text
            style={{
              margin: "0px",
              marginTop: 8,
              fontSize: 16,
              lineHeight: "24px",
              color: theme.palette.light.text.secondary,
            }}
          >
            {feature.description}
          </Text>
        </Column>
      </Row>
    </Section>
  ));

  return (
    <ContentSection tag={tag} title={title} description={description}>
      {featuresList}
    </ContentSection>
  );
};

export default FeatureList;
