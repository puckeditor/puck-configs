import { WithPuckProps } from "@puckeditor/core";
import { cn } from "@/registry/lib/utils";
import {
  Container,
  ContainerProps,
} from "@/registry/shadcn/components/container";
import { Content, ContentProps } from "@/registry/shadcn/components/content";

export interface CtaProps extends ContentProps {
  padding?: ContainerProps["padding"];
  layout?: "contained" | "full-bleed";
}

export const Cta = ({
  padding,
  layout,
  badge,
  heading,
  description,
  buttons,
  puck,
}: WithPuckProps<CtaProps>) => (
  <Container
    padding={padding}
    className={cn({ "bg-muted": layout === "full-bleed" })}
  >
    <Content
      badge={badge}
      heading={heading}
      description={description}
      buttons={buttons}
      alignContent="center"
      className={cn({ "bg-muted p-4 lg:p-14": layout === "contained" })}
      disableNavigation={puck?.isEditing}
    />
  </Container>
);
