import { PuckComponent } from "@puckeditor/core";

import Content, { ContentProps } from "../../../components/content";

export type StatsProps = {
  stats: { title: string; value: string; shortDescription: string }[];
} & ContentProps;

const Stats: PuckComponent<StatsProps> = ({
  title,
  description,
  buttons,
  stats,
}) => {
  const statElements = stats.map((stat, idx) => (
    <div className="stat max-w-xs" key={idx}>
      <div className="stat-title text-base-content/80">{stat.title}</div>
      <div className="stat-value text-base-content/90">{stat.value}</div>
      <div className="stat-desc text-base-content/80">
        {stat.shortDescription}
      </div>
    </div>
  ));

  return (
    <Content
      title={title}
      description={description}
      buttons={buttons}
      textAlign="start"
      className="grid grid-cols-1 lg:grid-cols-2"
    >
      <div className="flex items-center justify-center">
        <div className="stats stats-vertical bg-base-200 outline outline-base-300 not-prose">
          {statElements}
        </div>
      </div>
    </Content>
  );
};

export default Stats;
