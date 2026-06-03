import { cn } from "@/puck/lib/utils";
import {
  CompoundContainer,
  CompoundContainerProps,
} from "@/puck/components/container";
import {
  CompoundContent,
  CompoundContentProps,
} from "@/puck/components/content";

export interface CtaProps extends CompoundContentProps {
  padding?: CompoundContainerProps["padding"];
  layout?: "contained" | "full-bleed";
}

export const Cta = ({
  padding,
  layout,
  badge,
  heading,
  description,
  buttons,
}: CtaProps) => (
  <CompoundContainer
    padding={padding}
    className={cn({ "bg-muted": layout === "full-bleed" })}
  >
    <CompoundContent
      badge={badge}
      heading={heading}
      description={description}
      buttons={buttons}
      alignContent="center"
      className={cn({ "bg-muted p-4 lg:p-14": layout === "contained" })}
    />
  </CompoundContainer>
);
