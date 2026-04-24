import {
  CompoundContent,
  CompoundContentProps,
} from "@/puck/components/content";
import {
  CompoundCard,
  CompoundCardProps,
} from "@/puck/components/card";
import {
  CompoundContainer,
  CompoundContainerProps,
} from "@/puck/components/container";
import { cn } from "@/puck/lib/utils";

export interface CardGridProps extends CompoundContentProps {
  padding?: CompoundContainerProps["padding"];
  cards: CompoundCardProps[];
}

export const CardGrid = (props: CardGridProps) => (
  <CompoundContainer padding={props.padding} className={props.className}>
    <div className="flex flex-col gap-10">
      <CompoundContent
        badge={props.badge}
        heading={props.heading}
        description={props.description}
        features={props.features}
        buttons={props.buttons}
        alignContent="start"
        spacing="tight"
      />
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {props.cards.map((card, index) => (
          <CompoundCard
            key={index}
            icon={card.icon}
            heading={card.heading}
            description={card.description}
            button={card.button}
            className={cn("h-full", {
              "aspect-square": index < 7,
              "lg:col-span-2 lg:row-span-2": index === 0,
              "lg:col-span-2": index === 7,
            })}
          />
        ))}
      </div>
    </div>
  </CompoundContainer>
);
