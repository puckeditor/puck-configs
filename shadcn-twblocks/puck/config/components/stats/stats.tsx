import { MoveDownLeft, MoveUpRight } from "lucide-react";
import {
  CompoundContainer,
  CompoundContainerProps,
} from "@/puck/components/container";
import { cn } from "@/puck/lib/utils";
import {
  CompoundContent,
  CompoundContentProps,
} from "@/puck/components/content";

export interface StatsProps extends CompoundContentProps {
  padding?: CompoundContainerProps["padding"];
  layout?: "section" | "inline";
  statistics: {
    value: string;
    label: string;
    percentage?: number;
    direction?: "none" | "increase" | "decrease";
    polarity?: "none" | "positive" | "negative";
  }[];
}

export const Stats = ({
  padding,
  layout = "section",
  badge,
  heading,
  description,
  buttons,
  statistics,
}: StatsProps) => {
  return (
    <CompoundContainer padding={padding}>
      {layout === "inline" ? (
        <div className="grid text-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {statistics.map((stat, index) => (
            <Stat
              key={index}
              value={stat.value}
              label={stat.label}
              direction={stat.direction}
              polarity={stat.polarity}
              percentage={stat.percentage}
            />
          ))}
        </div>
      ) : null}
      {layout === "section" ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <CompoundContent
            badge={badge}
            heading={heading}
            description={description}
            buttons={buttons}
          />
          <div className="flex justify-center items-center">
            <div className="grid text-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-2">
              {statistics.map((stat, index) => (
                <Stat
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  direction={stat.direction}
                  polarity={stat.polarity}
                  percentage={stat.percentage}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </CompoundContainer>
  );
};

const Stat = ({
  value,
  label,
  direction,
  polarity,
  percentage,
}: StatsProps["statistics"][number]) => {
  const directionClassName = cn("w-4 h-4 mb-10", {
    "text-primary": polarity === "positive",
    "text-destructive": polarity === "negative",
  });
  return (
    <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
      {direction === "increase" ? (
        <MoveUpRight className={directionClassName} />
      ) : null}
      {direction === "decrease" ? (
        <MoveDownLeft className={directionClassName} />
      ) : null}
      <h2 className="text-4xl tracking-tighter max-w-xl text-start font-regular flex flex-row gap-4 items-end">
        {value}
        {percentage ? (
          <span className="text-muted-foreground text-sm tracking-normal">
            {direction === "increase" ? "+" : null}
            {direction === "decrease" ? "-" : null}
            {percentage}%
          </span>
        ) : null}
      </h2>
      <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-start">
        {label}
      </p>
    </div>
  );
};
