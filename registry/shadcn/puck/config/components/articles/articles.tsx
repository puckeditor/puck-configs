import { PuckComponent, Slot } from "@puckeditor/core";
import {
  Container,
  ContainerProps,
} from "@/registry/shadcn/components/container";
import { Button, ButtonProps } from "@/registry/shadcn/components/button";

export interface ArticlesProps {
  padding?: ContainerProps["padding"];
  heading?: string;
  button?: ButtonProps;
  cards?: Slot;
}

export const Articles: PuckComponent<ArticlesProps> = ({
  padding,
  heading,
  button,
  cards: Cards,
  puck,
}) => {
  return (
    <Container padding={padding}>
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8 pb-10">
        <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
          {heading}
        </h2>
        {button?.label ? (
          <Button
            label={button.label}
            url={button.url}
            variant={button.variant}
            size={button.size}
            icon={button.icon}
            disableNavigation={puck?.isEditing}
          />
        ) : null}
      </div>
      {Cards && (
        <Cards className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" />
      )}
    </Container>
  );
};
