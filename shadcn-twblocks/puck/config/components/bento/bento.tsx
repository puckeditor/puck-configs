import { cn } from "@/puck/lib/utils";
import {
  CompoundContainer,
  CompoundContainerProps,
} from "@/puck/components/container";
import {
  CompoundContent,
  CompoundContentProps,
} from "@/puck/components/content";
import {
  CompoundCard,
  CompoundCardProps,
} from "@/puck/components/card";

export interface BentoProps extends CompoundContentProps {
  padding?: CompoundContainerProps["padding"];
  cards?: CompoundCardProps[];
}

export const Bento = ({
  padding,
  badge,
  heading,
  description,
  buttons,
  cards = [],
}: BentoProps) => {
  return (
    <CompoundContainer padding={padding}>
      <div className="flex flex-col gap-10">
        <CompoundContent
          badge={badge}
          heading={heading}
          description={description}
          buttons={buttons}
          alignContent="start"
          spacing="tight"
        />
        <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards?.map((card, index) => (
            <CompoundCard
              key={index}
              icon={card.icon}
              heading={card.heading}
              description={card.description}
              button={card.button}
              className={cn({
                "lg:[grid-area:1/1/2/3]": index === 0,
                "lg:[grid-area:1/3/2/4] aspect-square": index === 1,
                "lg:[grid-area:2/1/3/2] aspect-square": index === 2,
                "lg:[grid-area:2/2/3/4]": index === 3,
              })}
            />
          ))}
        </div>
      </div>
    </CompoundContainer>
  );
};
