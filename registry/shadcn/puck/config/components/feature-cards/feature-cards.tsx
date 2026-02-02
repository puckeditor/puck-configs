import { PuckComponent, Slot } from "@puckeditor/core";
import { Content, ContentProps } from "@/registry/shadcn/components/content";
import {
  Container,
  ContainerProps,
} from "@/registry/shadcn/components/container";

export interface FeatureCardsProps extends ContentProps {
  padding?: ContainerProps["padding"];
  cards: Slot;
}

export const FeatureCards: PuckComponent<FeatureCardsProps> = ({
  padding,
  badge,
  heading,
  description,
  buttons,
  cards: Cards,
  alignContent = "start",
  className,
  puck,
}) => {
  return (
    <Container padding={padding} className={className}>
      <div className="flex flex-col gap-10">
        <Content
          badge={badge}
          heading={heading}
          description={description}
          buttons={buttons}
          alignContent={alignContent}
          spacing="tight"
          disableNavigation={puck?.isEditing}
        />
        {Cards && (
          <Cards className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" />
        )}
      </div>
    </Container>
  );
};
