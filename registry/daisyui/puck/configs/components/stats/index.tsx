import { ComponentConfig } from "@puckeditor/core";

export type StatsProps = {
  title: string;
  stats: { title: string; value: string; shortDescription: string }[];
};

const conf: ComponentConfig<StatsProps> = {
  metadata: {
    ai: {
      instructions:
        "Use Stats to convey statistics to the reader. Always use a very short description under 15 characters.",
    },
  },
  fields: {
    title: { type: "text" },
    stats: {
      type: "array",
      arrayFields: {
        title: {
          type: "text",
          metadata: {
            ai: {
              instructions: 'The title of the statistic, i.e. "Opening hours"',
            },
          },
        },
        value: {
          type: "text",
          metadata: {
            ai: {
              instructions:
                'The value of the statistic, under 7 characters long, i.e. "24/7"',
            },
          },
        },
        shortDescription: { type: "text" },
      },
      defaultItemProps: {
        title: "Stat",
        value: "100",
        shortDescription: "",
      },
    },
  },
  defaultProps: {
    title: "Stats",
    stats: [{ title: "Stat", value: "100", shortDescription: "" }],
  },
  render: ({ title, stats }) => (
    <div className="flex flex-col gap-4 max-w-7xl mx-auto my-16 px-4 prose">
      <h2 className="text-center">{title}</h2>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        {stats.map((stat, idx) => (
          <div className="stat" key={idx}>
            <div className="stat-title">{stat.title}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-desc">{stat.shortDescription}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export default conf;
