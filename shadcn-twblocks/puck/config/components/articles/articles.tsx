import {
  CompoundContainer,
  CompoundContainerProps,
} from "@/puck/components/container";
import {
  CompoundButton,
  CompoundButtonProps,
} from "@/puck/components/button";
import { PuckComponent, Slot } from "@puckeditor/core";

export interface ArticlesProps {
  padding?: CompoundContainerProps["padding"];
  heading?: string;
  button?: CompoundButtonProps;
  cards?: Slot;
}

export const Articles: PuckComponent<ArticlesProps> = ({
  padding,
  heading,
  button,
  cards: Cards,
}) => {
  return (
    <CompoundContainer padding={padding}>
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8 pb-10">
        <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
          {heading}
        </h2>
        {button?.label ? (
          <CompoundButton
            label={button.label}
            url={button.url}
            variant={button.variant}
            size={button.size}
            icon={button.icon}
          />
        ) : null}
      </div>
      {Cards && (
        <Cards className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" />
      )}
    </CompoundContainer>
  );
};
