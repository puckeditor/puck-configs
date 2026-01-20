import { WithPuckProps } from "@puckeditor/core";
import { DynamicIcon } from "lucide-react/dynamic";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/shadcn/components/ui/card";
import { Button, ButtonProps } from "@/registry/shadcn/components/button";
import {
  Container,
  ContainerProps,
} from "@/registry/shadcn/components/container";
import { Content, ContentProps } from "@/registry/shadcn/components/content";
import { Feature } from "@/registry/shadcn/types";

export interface PricingProps extends ContentProps {
  padding?: ContainerProps["padding"];
  tiers: {
    name: string;
    description: string;
    cost: string;
    cycle: string;
    features: Feature[];
    button: ButtonProps;
  }[];
  className?: string;
}

export const Pricing = (props: WithPuckProps<PricingProps>) => (
  <Container padding={props.padding} className={props.className}>
    <div>
      <Content
        badge={props.badge}
        heading={props.heading}
        description={props.description}
        buttons={props.buttons}
        alignContent="center"
        spacing="tight"
        disableNavigation={props.puck?.isEditing}
      />
      <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
        {props.tiers.map((tier, index) => (
          <Card key={index} className="w-full rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal">
                  {tier.name}
                </span>
              </CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                <p className="flex flex-row items-center gap-2 text-xl">
                  <span className="text-4xl">{tier.cost}</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / {tier.cycle}
                  </span>
                </p>
                <div className="flex flex-col gap-4 justify-start">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex flex-row gap-4">
                      {feature.icon && feature.icon !== "none" ? (
                        <DynamicIcon name={feature.icon} />
                      ) : null}
                      <div className="flex flex-col">
                        <p>{feature.name}</p>
                        {feature.description ? (
                          <p className="text-muted-foreground text-sm">
                            {feature.description}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  {...tier.button}
                  disableNavigation={props.puck?.isEditing}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </Container>
);
