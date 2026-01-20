import { WithPuckProps } from "@puckeditor/core";
import { cn } from "@/lib/utils";
import {
  Container,
  ContainerProps,
} from "@/registry/shadcn/components/container";
import { Content, ContentProps } from "@/registry/shadcn/components/content";
import { Card, CardProps } from "@/registry/shadcn/components/card";

export interface BentoProps extends ContentProps {
  padding?: ContainerProps["padding"];
  cards?: CardProps[];
}

export const Bento = ({
  padding,
  badge,
  heading,
  description,
  buttons,
  cards = [],
  puck,
}: WithPuckProps<BentoProps>) => {
  return (
    <Container padding={padding}>
      <div className="flex flex-col gap-10">
        <Content
          badge={badge}
          heading={heading}
          description={description}
          buttons={buttons}
          alignContent="start"
          spacing="tight"
          disableNavigation={puck?.isEditing}
        />
        <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards?.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              heading={card.heading}
              description={card.description}
              button={
                card.button
                  ? { ...card.button, disableNavigation: puck?.isEditing }
                  : undefined
              }
              className={cn({
                "[grid-area:1/1/2/3]": index === 0,
                "[grid-area:1/3/2/4] aspect-square": index === 1,
                "[grid-area:2/1/3/2] aspect-square": index === 2,
                "[grid-area:2/2/3/4]": index === 3,
              })}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
