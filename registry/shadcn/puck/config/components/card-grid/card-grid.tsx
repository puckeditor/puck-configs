import { WithPuckProps } from "@puckeditor/core";
import { Content, ContentProps } from "../../../../components/content";
import { Card, CardProps } from "../../../../components/card";
import { Container, ContainerProps } from "../../../../components/container";
import { cn } from "../../../../../../lib//utils";

export interface CardGridProps extends ContentProps {
  padding?: ContainerProps["padding"];
  cards: CardProps[];
}

export const CardGrid = (props: WithPuckProps<CardGridProps>) => (
  <Container padding={props.padding} className={props.className}>
    <div className="flex flex-col gap-10">
      <Content
        badge={props.badge}
        heading={props.heading}
        description={props.description}
        features={props.features}
        buttons={props.buttons}
        alignContent="start"
        spacing="tight"
        disableNavigation={props.puck?.isEditing}
      />
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {props.cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            heading={card.heading}
            description={card.description}
            button={
              card.button
                ? { ...card.button, disableNavigation: props.puck?.isEditing }
                : undefined
            }
            className={cn("h-full", {
              "aspect-square": index < 7,
              "lg:col-span-2 lg:row-span-2": index === 0,
              "lg:col-span-2": index === 7,
            })}
          />
        ))}
      </div>
    </div>
  </Container>
);
